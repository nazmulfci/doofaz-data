<template>
  <span>
    <div class="card main-card  element-block-example">
      <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
        <h3 style="color:black">Full salary Report</h3>
      </div>
              <center>   <div class="form-group col-3 col-md-3">
    <label for="exampleFormControlSelect1">select Year</label>
    <select @change.prevent="yearly()" v-model="yr" class="form-control" id="exampleFormControlSelect1">
      <option>Select Year</option>
      <option  v-for="int in infoGet" :value="int.year" :key="int.id">{{int.year}}</option>
   
    </select>
  </div>
              </center>
      <div class="table-responsive bg-white p-2">
        <table class="table table-hover table-bordered table-striped" width="1250px" id="sampleTable">
          <thead>
             <tr>
            
               <th>Month</th>               
               <th>Total Salary</th>               
               <th>Paid</th>               
               <th>Due</th>
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="ins in info" :key="ins.id" >
                  <td>
                      <span v-if="ins.month==1">January,{{ins.year}}</span>
                      <span v-if="ins.month==2">February,{{ins.year}}</span>
                      <span v-if="ins.month==3">March,{{ins.year}}</span>
                      <span v-if="ins.month==4">April,{{ins.year}}</span>
                      <span v-if="ins.month==5">May,{{ins.year}}</span>
                      <span v-if="ins.month==6">Jun,{{ins.year}}</span>
                      <span v-if="ins.month==7">July,{{ins.year}}</span>
                      <span v-if="ins.month==8">August,{{ins.year}}</span>
                      <span v-if="ins.month==9">September,{{ins.year}}</span>
                      <span v-if="ins.month==10">October,{{ins.year}}</span>
                      <span v-if="ins.month==11">November,{{ins.year}}</span>
                      <span v-if="ins.month==12">December,{{ins.year}}</span>
                  
                  
                  </td>
                 <td><span  v-for="pay in pays" :key="pay.id" v-if="ins.month==pay.month&&ins.year==pay.year">{{pay.totalAmount}}</span></td>
                  <td>{{ins.payAmount}}</td>
                  <td><span  v-for="pay in pays" :key="pay.id" v-if="ins.month==pay.month&&ins.year==pay.year">{{parseFloat(pay.totalAmount)-parseFloat(ins.payAmount)}}</span></td>


                  <td>
                      <button type="button" class="mr-2 btn-hover-shine btn btn-shadow btn-primary" data-toggle="modal" @click="view(ins.month,ins.year)" :data-target="'#view'">
                      <i class=" fa fa-eye pr-2"></i> View
                   </button>

                         <!-- Modal -->
              <div
                class="modal fade"
                :id="'view'"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header bg-primary text-light">
                      <h5 class="modal-title" id="exampleModalLongTitle">
                     
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="modal-body">
                      <div class="card main-card element-block-example">
                        <div
                          class="card-header"
                          style="
                            background-color: rgb(1, 176, 241);
                            border: 1px solid rgba(0, 0, 0, 0.05);
                          "
                        >
                          <h3 style="color: black">Salary List</h3>
                        </div>
                        <div class="table-responsive bg-white">
                          <table
                            class="
                              table table-hover table-bordered table-striped
                            "
                          >
                            <thead>
                              <tr>
                                <th>SN</th>
                                <th>Employee</th>
                                <th>Department</th>
                                <th>Designation</th>
                                <th>Total Salary</th>               
                                <th>Paid</th>               
                                <th>Due</th>
                                 </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(vs, index) in vews" :key="vs.id"
                              >
                             <td>{{index+1}}</td>
                             <td><span v-if="vs.employee">{{vs.employee.userName}}</span>  </td>
                             <td><span v-if="vs.employee.job_departments">{{vs.employee.job_departments.jobDepartmentName}}</span>  </td>
                             <td><span v-if="vs.employee.shop_employee_types">{{vs.employee.shop_employee_types.shopEmployeeTypeName}}</span>  </td>
                                <td><span  v-for="gt in gts" :key="gt.id" v-if="gt.employeeId==vs.employeeId">{{gt.amount}}</span></td>

                             <td>{{vs.payAmount}}</td>
                             <td><span  v-for="gt in gts" :key="gt.id" v-if="gt.employeeId==vs.employeeId">{{parseFloat(gt.amount)-parseFloat(vs.payAmount)}}</span></td>

                           
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-hover-shine btn-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                  </td>
                <!-- <td>{{ index+1 }}</td>
                <td v-if="purchaseProductReport.product_name">{{ purchaseProductReport.product_name.productName }} ({{ purchaseProductReport.product_name.productCode }})</td>
              
                <td v-for="qty in qtys" v-if="qty.productId==purchaseProductReport.productId">{{ qty.quantity }}</td>
                <td v-for="qty in qtys" v-if="qty.productId==purchaseProductReport.productId">{{ qty.totalPrice }}</td>
              
              
                <td>
                     <router-link :to="`/stock@view${purchaseProductReport.productId}`" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"><i class=" fa fa-eye pr-2"></i>Stock Visit</router-link>
                
                </td>
                -->

           

              </tr>
            </tbody>
         </table>
        </div>
       
     </div>
    </span>
</template>

<script>

export default {
    data () {
        return {
         yr:"",
         info:[], 
         infoGet:[], 
         vews:[], 
         pays:[], 
      gts:[]
        }
    },
   
    mounted(){
      this.data();
   
       
    },
    methods:{
      yearly(){
        axios.get('yearlyFullSalary/'+this.yr).then(res=>{
         
              this.info=res.data.items
              this.pays=res.data.data
        })

      },
    
        data(){
         
        axios.get('fullSalary').then(res=>{
            this.info=res.data.items
            this.pays=res.data.data
            this.infoGet=res.data.infoGet
        })
        },
        stock(id) {
      this.$router.push("/stock@view" + id);
     
    },   
        view(month,year) {
     axios.get('fullSalaryInfo/'+month+'/'+year).then(res=>{
            this.vews=res.data.views
            this.gts=res.data.get
        })
    },   
     
   
     },
        created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });
    window.deleteExpense = this.deleteExpense;
  
    window.customerTypeget = this.customerTypeget;
  
      window.stock = this.stock;
     
  },
  }

</script>
