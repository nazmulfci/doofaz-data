<template id="">
    <span>
      







       <div class="card main-card  element-block-example mt-5">
      <div class="card-header" >
        <h3 style="color:black">Owner List</h3>
      </div>
      </div>




      <div class="supplier-entry py-1 px-1">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
          <thead>
             <tr>
               <th>SN</th>
               <th>Owner Name</th>
               <th>Share Amount</th>
               <th>Owner Mobile</th>
               <th>Owner Email </th>
               <th>Owner Address</th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(list, index) in lists">
                <td>{{ index+1 }}</td>
               
                <td> {{ list.shopOwnerName }} </td>
                <td> {{ list.shareAmount }} </td>
                <td>
                    {{ list.shopOwnerMobileNo }}
                </td>
                <td>{{ list.shopOwnerEmail }}
                    <br/>
                    {{ list.shopOwnerPhoneNo }}
                </td>
                <td>{{ list.shopOwnerAddress }}</td>
                 
                
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
                    ownerTypeId:'',
                    shopOwnerName:'',
                    shopOwnerMobileNo:'',
                    shopOwnerEmail:'',
                    shopOwnerAddress:'',
                    shopOwnerPhoneNo:'',
                  }),
                  companyTypes: [{ id: 1, name: 'Owner' }],
                  // , { id: 2, name: 'Investor' }
                  lists: [],
                  loading:false,
  
              }
          },
  
          mounted() {
             
               this.view();
              
          },
  
          methods: {
             view(){
                axios.get('/shopOwnerGet').then(res =>{
                  this.lists = res.data.data;
            });
             },

addCompanyOwner() {
    
    this.loading=true;
    
      this.form.post("shopOwnerEntry").then((response) => {
        
          Toast.fire({
            icon: "success",
            //background: '#fcd8d8', red
            background: '#c9f4c9', //green
            title: "Owner Add Successful.",
          }),
            this.view();

 
            this.form.reset(); 
            this.loading=false;
            
          
      }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something Missing",
          });
        });
    },

   


          
           
           
            
           
          }
      }
  </script>
  