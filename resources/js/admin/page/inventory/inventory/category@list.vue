<template id="">
  <span>

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
               <th v-if="role==3">Status</th>
               <th>Action</th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(list,index) in CategoryLists">
                  <td>{{ list.id }}</td>
                  <td>
                    {{ list.category_name }}
                    <span class="badge badge-info">({{ list.products_count }})</span>
                  </td>
                  <td v-if="list.status==1 && role==3">
                      <button class="btn btn-sm btn-info" @click.prevent="deactivateStatus(list.id)">
                        Active
                      </button>
                  </td>
                  <td v-else-if="list.status==0 && role==3">
                      <button class="btn btn-sm btn-warning" @click.prevent="activateStatus(list.id)">Inactive</button>
                  </td>
                  <td>
                      <router-link :to="`engagement@by${list.id}`" class="btn btn-hover-shine btn-primary">
                        <i class=" fa fa-eye"></i>Engagement  List
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
              CategoryLists:[], 
              role:'',
          }
      },
      mounted(){
         this.CategoryEntryShow();
      },
      methods:{

         CategoryEntryShow(){
           axios.get('get/category/entry').then((response)=>{
              this.CategoryLists = response.data.data;
              this.role = response.data.role;
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
