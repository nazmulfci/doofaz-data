<template>
  <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.46);border:1px solid rgba(0, 0, 0, 0.12)">
        <h3 style="color:black"> Today Total Sales </h3>
      </div>
      <div class="table-responsive bg-white p-2">
        <center>   <div class="form-group col-md-2 col-sm-8 col-8">

          <table class="table table-bordered" v-if="searchStatus">
            <tr>
                <td>
                  <select class="form-control" v-model="form.employeeId"
                  @change="changeDate()"
                   style="width:150px;">
                    <option value=""> Select Salesman </option>
                    <option v-for="empList in empLists"
                     :value="empList.id" > {{empList.employeeName}} ({{empList.job}}) </option>
                  </select>
                </td>


                <td>
                  <input
                  type="date"
                  v-model="form.date"
                  class="form-control"
                  @change.prevent="dateSearch()"
                  
                />
                </td>
              </tr>
            </table>

 
              </div>
        </center>
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th colspan="15" class="text-center"><h5>Total Sale &nbsp;
                  {{infos.totalSale}} </h5> </th>
             </tr>
             <tr style="background:rgba(242, 242, 242, 0.47)">
          
               <th>Cash Receive</th>
                <th>Bank Receive</th>
                <th>Total Receive</th>
               <th>Due Sale</th>
            
          
              
             </tr>
            </thead>
            <tbody>
              <tr>
             
                 <td>{{infos.cashAmountStatement}}</td>
                    <td><span v-for="bank in banks" :key="bank.id">
                     
                    <span v-if="bank.bank">{{bank.bank.bankName}}</span>
                     =&nbsp;{{bank.creditAmount}}<br>
                     </span></td>
                
                 <td>{{parseFloat(infos.cashAmountStatement)+parseFloat(infos.bankAmountStatement)}}</td>
                 <td>{{infos.currentDue}}</td>
              
            
             </tr>

            
            </tbody>
        
         </table>
        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th colspan="15" class="text-center"><h5>Due Sale Today &nbsp;{{totaldues.totaldue}}
                  </h5> </th>
             </tr>
             
             <tr style="background:rgba(242, 242, 242, 0.47)">
         
               <th>Customer</th>               
            
          
              
             </tr>
            </thead>        
         </table>

         <div class="row">
           <div class="col-4">
                      <div class="list-group">

                          <a href="#" v-for="due in dues" :key="due.id"
                          @click="showCustomerList(due.type.shopCustomerTypeEntryId)"
                           class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                           data-toggle="modal" data-target="#exampleModal">
                            {{due.type.shopCustomerName}}
                            <span class="badge badge-primary badge-pill">{{due.currentDue}}</span>
                          </a>
                          
                      </div>
           </div>
           <div class="col-4"></div>
           <div class="col-4"></div>
         </div>
       </div>



<!-- ===============================================  modal -->

 
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <table class="table table-bordered">
          <tr>
            <th> SL </th>
            <th> Customer Name </th>
            <th> Due </th>
          </tr>
          <tr v-for="customerList,index in customerLists">
            <td> {{++index}} </td>
            <td> {{customerList.customerName}} </td>
            <td> {{customerList.due}} </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>




<!-- =============================================== / modal -->

     

        
     </div>

    </span>
</template>

<script>
    export default {
 data(){
           return{
             form: new Form({
          date:'',
          dateDue:'',
          employeeId:''
             }),
             modalTitle:'',
             empLists: [],
             infos: [],
             banks: [],
             dues: [],
             totaldues: [],
             customerLists: [],
             emid:0,
             shopOrEmployee:0,
             searchStatus:false,
           }
        },
      
        mounted(){
            this.info();
            this.getShopOrEmployee();
            this.dueSale();
        },
        methods:{
          changeDate(){
            this.form.date='';
          },
          showCustomerList(e){
            //alert(e);

            let url = 'getCustomerListBSheet/'+e;

            if(this.form.date && this.form.employeeId){
               url = 'getCustomerListBSheetDateEId/'+e+'/'+this.form.date+'/'+this.form.employeeId;
            }
            else if(this.form.date){
               url = 'getCustomerListBSheetDate/'+e+'/'+this.form.date;
            }
            else if(this.form.employeeId){
               url = 'getCustomerListBSheetEId/'+e+'/'+this.form.employeeId;
            }
            
            

            axios.get(url).then(res=>{
              this.customerLists = res.data.customerList;
              this.modalTitle = res.data.customerTypeName;
            });
          },
            info() {
                axios.get('salesBalanceSheetUser').then(res=>{
                   this.infos=res.data; 
                   this.banks=res.data.bank; 
                  
                }
                ); 
                axios.get('employeeList').then(res=>{
                  
                   this.empLists=res.data.employeeName; 
                  
                }
                ); 

            },
            dueSale() {
                axios.get('dueSaleTodayUser').then(res=>{
                   this.dues=res.data.due; 
                   this.totaldues=res.data; 
                  
                  
                }
                ) 

            },
            getShopOrEmployee() {
                axios.get('getShopOrEmployee').then(res=>{
                   this.shopOrEmployee=res.data.shopOrEmployee;
                   if(res.data.shopOrEmployee==3){
                     this.searchStatus=true;
                   }else{
                     this.searchStatus=false;
                   }
                }
                ) 

            },
            dateSearch() {
              let url = '';
              let url1 = '';
              
              if(this.form.employeeId>0){
                this.emid = this.form.employeeId;
                url = 'salesBalanceSheetDateUserWithId/'+this.form.date+'/'+this.emid;
                url1 = 'salesBalanceSheetDateDueUserWithId/'+this.form.date+'/'+this.emid;
              }
             else{
                url = 'salesBalanceSheetDateUser/'+this.form.date;
                url1 = 'salesBalanceSheetDateDueUser/'+this.form.date;
              }
                axios.get(url).then(res=>{
                   this.infos=res.data; 
                   this.banks=res.data.bank; 
                  
                }
                ),


                   axios.get(url1).then(res=>{
                        this.dues=res.data.due; 
                          this.totaldues=res.data; 
                  
                }
                ) 

            },
          
          
        },
    }
</script>
