<template id="">
  <span>
    <div class="card">
     
     
      
            <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Demo Employee Entry </h4>
        </div>
      </div>



      <form @submit.prevent="demoEmployeeUpdate()">

<div class="supplier-entry py-4 px-2 comm-form-back-img">
         <div class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color">

              <div class="form-group">
                  <label> Employee Name
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <input v-model="form.name" type="text" name="name" :class="{ 'is-invalid': form.errors.has('name') }" placeholder=" Name" class="form-control">
                  <has-error :form="form" field="name"></has-error>
              </div>
 

               <div class="form-group">
                  <label> Phone Number
                     <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                  </label>
                  <input v-model="form.mobileNo" type="text" name="mobileNo" :class="{ 'is-invalid': form.errors.has('mobileNo') }" placeholder=" Phone Number" class="form-control">
                  <has-error :form="form" field="mobileNo"></has-error>
              </div>
 

              <div class="form-group">
                  <label> Email <span class="badge badge-primary"  data-toggle="modal" data-target="#exampleModal"> History </span>  </label>
                  <input v-model="form.email" type="text" name="email"  placeholder="Email..." class="form-control">
                <has-error :form="form" field="email"></has-error>
              </div>
 
              <div class="form-group">
                 <label> Status
                   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i>
                 </label>
                  <select v-model="form.status" name="status" :class="{ 'is-invalid': form.errors.has('status') }" class="form-control">
                     <option value=""> Select One </option>
                     <option value="1"> Publish </option>
                     <option value="0"> Unpublish </option>
                  </select>
                  <has-error :form="form" field="status"></has-error>
              </div>

        </div>
      </div>


      

        <!-- -----------------------------   card footer  -->
 
<div class="d-block pt-3 pb-4 card-footer overflow-hidden">
<div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">


                                <button type="reset" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-undo "></i>
                                    </span>
                                    <span class="mr-1"> Clear </span>
                                </button>

                                <button type="submit" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right"
                                :disabled="loading">
                <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>

                <span v-else class="mr-2 opacity-7">
                  <i class="fa fa-paper-plane"></i>
                </span>
                                    <span class="mr-1"> Submit </span>
                                </button>


                            </div>
                            </div>
 
<!-- -----------------------------   // card footer  --> 
      
      </form>

    </div>
 

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> History </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
            <tr>
                <th> SL </th>
                <th> Mobile </th>
                <th> Email </th>
            </tr>
            <tbody>
                <tr v-for="history,index in historys">
                    <td> {{++index }} </td>
                    <td> {{history.mobile }} </td>
                    <td> {{history.email }} </td>
                </tr>
            </tbody>
        </table>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  </span>
</template>


<script>
    export default {
        data () {
            return {

                form: new Form({
                    name : '',
                    mobileNo: '',
                    email: '',
                    status: '',
                }),

                loading: false,
                openningDivStatus: '',
                productSupplierAllDatas: {},
                salesProductDiscountPriceReports : {},
                employeeLists:[],
                historys:[],
                
            }
        },

        props:{
             limit: {
               type: Number,
               default: 2
           }
        },


        
        mounted(){
            this.getData();
        },



        methods:{
            demoEmployeeUpdate(){
              this.loading = true;
                this.form.put('/addDemoEmployee/'+this.$route.params.id).then(res=>{
                  this.loading = false;
                    Toast.fire({
                        icon: 'success',
                        title: 'Employee Update Successfully'
                    })
                    
                    this.$router.push('/demoEmployeeEntry')

                }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
            },

            getData(){
                 axios.get('/addDemoEmployee/'+this.$route.params.id+'/edit')
                    .then( res => {
                        this.form.fill(res.data.data)
                        this.historys = res.data.history
                    })
            },
        }

    }

</script>
