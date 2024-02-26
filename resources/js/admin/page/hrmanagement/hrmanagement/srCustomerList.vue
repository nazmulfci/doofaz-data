<template id="">
  <span>
    <div class="card main-card  element-block-example">
       <div class="card-header bg-primary text-light">
          <h3><i
            class="header-icon lnr-laptop-phone icon-gradient bg-heavy-rain"
          ></i>SR Customer List</h3>
       </div>
       <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr class="alert-info">
                <th> SN </th>
                <th> Customer Type </th> 
                <th> Customer Name </th> 
                <th> Customer Mobile No </th> 
                <th> Due </th> 
                <th> Total Collection  </th> 
                <th> This Month Collection </th> 
                <th> Statement </th> 
              </tr>
             </thead>
             <tbody>
               <tr v-for="(shopAssetEntryReport, index) in shopAssetEntryReports">
                 <td>{{ index+1 }}</td>
                 
                
                 <td>{{ shopAssetEntryReport.type }}</td>
                 <td>{{ shopAssetEntryReport.customerName }}</td>
                 <td>{{ shopAssetEntryReport.customerPhone }}</td>
                 <td>{{ shopAssetEntryReport.due }}</td>
                 <td>{{ shopAssetEntryReport.totalCollection }}</td>
                 <td>{{ shopAssetEntryReport.thisMonthCollection }}</td>
                 <td>
                   <router-link
                  :to="`/customerStatement${shopAssetEntryReport.id}`"
                  class="
                    btn-wide btn-pill btn btn-outline-primary btn-hover-shine float-right
                  "> Statement </router-link>
                 </td>
               </tr>
             </tbody>
          </table>
        </div>
        <!-- <span class="card_footer">
          <pagination :data="shopAssetEntryReports" :limit="limit"  @pagination-change-page="getPaginateList">
            <span slot="prev-nav">&lt; Previous</span>
            <span slot="next-nav">Next &gt;</span>
          </pagination>
       </span> -->
      </div>
   </span>
</template>
<script>
    export default {
        data () {
            return {
                shopAssetEntryReports: {},
            }
        },
        props:{
             limit: {
               type: Number,
               default: 2
           }
        },
        mounted(){
            this.assetEntryList();
            // this.getPaginateList();
        },
        methods:{
            assetEntryList(){
                axios.get('/srCustomerListReport/'+this.$route.params.id).then(res =>{
                      this.shopAssetEntryReports = res.data.data
                })
            },
            // getPaginateList(page = 1){
            //     axios.get('/shopAssetEntryReportDetails/'+this.$route.params.id+'?page=' + page).then(response => {
            //          this.shopAssetEntryReports = response.data.shopAssetEntryReports;
            //     });
            // }
        }
    }
</script>
