<template id="">
  <span>
    




  <div class="card main-card  element-block-example mt-5">
      
      <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i> SR List </h4>
      </div>


      <div class="supplier-entry py-1 px-1">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
           
          <thead>
             <tr style="background:rgba(242, 242, 242, 0.47)">
               <th> SN</th>
               <th> Name</th>
               <th> Mobile </th>
               <th> Area </th>
               <th> Total Customer </th>
               <th> Customer Due </th>
               <th> Total Collection </th>
               <th> This Month Collection </th>
               <th> Customer List </th>
             </tr>
            </thead>
            <tbody>
              <tr v-for="(productSupplierAllData, index) in productSupplierAllDatas">
                <td>{{ index+1 }}</td>
                <td>{{ productSupplierAllData.name }} </td>
                <td>{{ productSupplierAllData.mobileNo }}</td>
                <td>{{ productSupplierAllData.area }}</td>
                <td>{{ productSupplierAllData.customer }}</td>
                <td>{{ productSupplierAllData.customerDue }}</td>
                <td>{{ productSupplierAllData.totalCollection }}</td>
                <td>{{ productSupplierAllData.thisMonthCollection }}</td>
                <td>
                     <router-link :to="`/srCustomerList${productSupplierAllData.id}`" class="btn btn-hover-shine  btn-primary"><i class=" fa fa-eye"></i>View</router-link>
                   </td>
              </tr>
            </tbody>
         </table>
       </div>
       <span class="card_footer">
         <pagination :data="productSupplierAllDatas" :limit="limit" @pagination-change-page="getPaginateList">
           <span slot="prev-nav">&lt; Previous</span>
           <span slot="next-nav">Next &gt;</span>
         </pagination>
      </span>
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
                    phoneNo: '',
                    email: '',
                    address: '',
                    area: '',
                    status : '1',
                }),
                loading: false,
                openningDivStatus: '',
                productSupplierAllDatas: {},
                salesProductDiscountPriceReports : {},
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
            this.getPaginateList();
            this.checkOpenningSupplier();
        },



        methods:{

            addProductSupplierCreate(){
              this.loading = true;
                this.form.post('/addSREntry').then(res=>{
                  this.loading = false;
                    Toast.fire({
                        icon: 'success',
                        title: 'SR Entry Successfully'
                    })
                    this.form.reset();
                    this.getData();
                }).catch((res) => {
                      this.loading = false;
                      Toast.fire({
                        icon: "error",
                        title: "Something Missing",
                      });
        });
            },

            getData(){
                axios.get('/addSREntryReport').then(res =>{
                    this.productSupplierAllDatas = res.data.data;
                })
            },
            checkOpenningSupplier(){
                axios.get('/getCheckOpenningSupplier').then(res =>{
                    this.openningDivStatus = res.data.status;
                })
            },
            getPaginateList(page = 1){
              axios.get('/addSREntryReport?page=' + page)
              .then(response => {
                 this.productSupplierAllDatas = response.data.data;
              });
            },
           
            distroy(id){
                axios.delete('/addSREntry/'+id).then(res=>{
                    Toast.fire({
                        icon: 'success',
                        title: 'Data Delete Succuss'
                    })
                    this.getData();
                })
            },
        }

    }

</script>
