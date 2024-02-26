<template id="">
  <span>
    <div class="card">
     
                 <div class="card-header-tab card-header alert-info">
        <div
          class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i
            class="header-icon lnr-pencil icon-gradient bg-premium-dark"
          ></i>
         <h4> Category Entry</h4>
        </div>
      </div>
      
      <form @submit.prevent="addCategory">
        
        <div class="supplier-entry py-4 px-2 comm-form-back-img">

         <div
          class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color p-2"
        >

                 <div class="form-row">
                   <div class="col-md-4 col-12">
                      <label>Category Name</label>
                    </div>
                    <div class="col-md-8 col-12">
                        <input type="text" v-model="form.category_name" :class="{ 'is-invalid': form.errors.has('category_name') }" class="form-control" placeholder="Category Name">
                        <has-error :form="form" field="category_name"></has-error>
                    </div>
                 </div>
             
           </div>
         </div>

         
 
<div class="d-block pt-3 pb-4 card-footer overflow-hidden">
<div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">


                                <button type="reset" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-undo "></i>
                                    </span>
                                    <span class="mr-1"> Clear </span>
                                </button>

                                <button type="submit" class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right"
                                
              >

                <span class="mr-2 opacity-7">
                  <i class="fa fa-paper-plane"></i>
                </span>
                                    <span class="mr-1"> Submit </span>
                                </button>


                            </div>
                            </div>
 
<!-- -----------------------------   // card footer  --> 
    </form>
       </div>

    <div class="card main-card  element-block-example mt-5">
      <div class="card-header alert-info">
        <h3> Category List </h3>
      </div>
      
       <div class="supplier-entry py-1 px-1">
         <div class="card-body table-responsive bg-white ">

        <table class="table table-hover table-bordered mb-0">
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th>SN</th>
               <th>Category</th>
               <th>Status</th>
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(list,index) in CategoryLists">
                  <td>{{ list.id }}</td>
                  <td>{{ list.category_name }}</td>
                  <td v-if="list.status==1">
                      <button class="btn btn-sm btn-info" @click.prevent="deactivateStatus(list.id)">
                        Active
                      </button>
                  </td>
                  <td v-else>
                      <button class="btn btn-sm btn-warning" @click.prevent="activateStatus(list.id)">Inactive</button>
                  </td>
                  <td>
                      <router-link :to="`category@entry@edit${list.id}`" class="btn btn-hover-shine  btn-primary">
                        <i class=" fa fa-edit"></i>Edit
                      </router-link>
                  </td>
              </tr>
            </tbody>
         </table>
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
                  category_name : '',
              }),
              CategoryLists:[],
             
          }
      },
      mounted(){
         this.CategoryEntryShow();
      },
      methods:{

         addCategory(){
          this.form.post('category/entry').then((response)=>{
              Toast.fire({
                  icon: 'success',
                  title: 'Insert Successfully'
              });
              this.form.reset();
              this.CategoryEntryShow();
          });
         },

         CategoryEntryShow(){
           axios.get('get/category/entry').then((response)=>{
              this.CategoryLists = response.data.data;
           });
         },

         deactivateStatus(id){
             axios.get('category/entry/deactivate/status/'+id).then((response)=>{
              this.CategoryEntryShow();
               Toast.fire({
                  icon: 'success',
                  title: 'Status Deactivate Successfully'
              });
           });
         },
         activateStatus(id){
             axios.get('category/entry/activate/status/'+id).then((response)=>{
              this.CategoryEntryShow();
               Toast.fire({
                  icon: 'success',
                  title: 'Status Activate Successfully'
              });
           });
         },


      },
    }
</script>
