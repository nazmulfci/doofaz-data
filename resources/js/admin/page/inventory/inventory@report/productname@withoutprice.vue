<template id="">
  <span>
    <div class="card main-card  element-block-example">
      <div class="card-header" style="background-color: rgb(1, 176, 241); border: 1px solid rgba(0, 0, 0, 0.05);">
        <h3 style="color:black">Product Name Without Price</h3>
      </div>
      <div class="table-responsive bg-white">
        <table class="table table-hover table-bordered table-striped">
          <thead>
             <tr>
               <th>SN</th>
               <th>Product Name</th>
               <th>Brand Name</th>
               <th>Color</th>
               <th>Size</th>
               <!-- <th>Create Date</th> -->
             </tr>
            </thead>
            <tbody>
              <tr v-for="(productNameList, index) in productNameLists">
                <td>{{ index+1 }}</td>
                <td>{{ productNameList.productName }} </td>
                <td>{{ productNameList.productBrandName }} </td>
                <td>{{ productNameList.color }} </td>
                <td>{{ productNameList.size }} </td>
                <!-- <td>{{ productNameList.created_at | shortlength(10,'')}}</td> -->
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
             productNameLists:{},
          }
      },
      props:{
           limit: {
             type: Number,
             default: 2
         }
      },
      mounted(){
         this.productListShows();
      },
      methods:{
        productListShows(){
          axios.get('/inventoryProductNameWithoutPrice').then(res =>{
                this.productNameLists = res.data.productNameList;
          });
        },
  
       
      }
    }
</script>
