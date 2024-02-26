<template>
  <span>
    <div class="card">
      <div class="card-header" style="background:rgba(221, 221, 221, 0.46);border:1px solid rgba(0, 0, 0, 0.12)">
        <h3 style="color:black">Today Total Sales</h3>
      </div>
      <div class="table-responsive bg-white p-2">
        <center>   <div class="form-group col-md-2 col-sm-8 col-8">
                <label>
                  Date
                  <i
                    class="fa fa-star text-danger text-10 cursor-pointer"
                    title="Mendatory Field"
                    data-placement="top"
                    data-toggle="tooltip"
                    data-original-title="Mendatory Field"
                  ></i
                ></label>

                <input
                  type="date"
                  v-model="form.date"
                  class="form-control"
                  @change.prevent=" dateSearch() "
                  
                />
              
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
            <tbody>
              <tr>
            
                
              
             
                    <td><span v-for="due in dues" :key="due.id">
                     
                     {{due.type.shopCustomerName}}=&nbsp;{{due.currentDue}}<br>
                     </span></td>
             </tr>

            
            </tbody>
        
         </table>
       </div>

     

        
     </div>

    </span>
</template>

<script>
    export default {
 data(){
           return{
             form: new Form({
          date:'',
          dateDue:''
             }),
           
             infos: [],
             banks: [],
             dues: [],
             totaldues: [],
           }
        },
      
        mounted(){
            this.info();
            this.dueSale();
         
            
        },
        methods:{
            info() {
                axios.get('salesBalanceSheet').then(res=>{
                   this.infos=res.data; 
                   this.banks=res.data.bank; 
                  
                }
                ) 

            },
            dueSale() {
                axios.get('dueSaleToday').then(res=>{
                   this.dues=res.data.due; 
                   this.totaldues=res.data; 
                  
                  
                }
                ) 

            },
            dateSearch() {
                axios.get('salesBalanceSheetDate/'+this.form.date).then(res=>{
                   this.infos=res.data; 
                   this.banks=res.data.bank; 
                  
                }
                ) 
                   axios.get('salesBalanceSheetDateDue/'+this.form.date).then(res=>{
                        this.dues=res.data.due; 
                          this.totaldues=res.data; 
                  
                }
                ) 

            },
          
          
        },
    }
</script>
