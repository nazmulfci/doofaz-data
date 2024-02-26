<template id="">
  <span>



        <!-- ------------------- page title  -->
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-menu icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Shop Report
            <div class="page-title-subheading">
               Shop Report
            </div>
          </div>
        </div>
     
      </div>
    </div>

<!-- ------------------- // page title  -->




    <div class="card mt-5">
      <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Shop Report </h4>
      </div>

      <div class="supplier-entry py-4 px-2">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;"  class="table table-hover table-striped table-bordered"
        >
             
          
            <tbody >
             
              <tr>
                <th> SL </th>
                 <th> Shop Name </th>
                <th> Registration Date </th>               
                <th> User Name </th>
                <th> Shop Phone </th>
                         
          
                <th> Action </th>
              </tr>
            
            
              <tr v-for="(shopList, index) in shopLists" :key="shopList.id" >
                <td> {{ ++index }} </td>
                    <td>{{ shopList.shopName }}</td>
                <td>{{ moment(shopList.created_at).format("DD-MM-YYYY") }}</td>
             
               
            <td>{{ shopList.userName }}</td>
            <td>{{ shopList.shopOwnerMobileNo  }}</td>
             
                
        
            
                <td>
                  <router-link
                    :to="`/open@shop${shopList.id}`"
                    class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"
                  ><i class="fa fa-edit"></i> View </router-link
                  >
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
import moment from 'moment';
export default {

  
  data() {
    return {
     
      shopLists: [],

 
      moment: moment,

     
      
    };
  },
  mounted() {
    this.view();

  },
  methods: {


    view() {
     

      let url = "adminOpenTemps";
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.shopLists = response;
        });
    },

   


    
  },
};
</script>