<template id="">
  <span>
      <div class="card main-card  element-block-example">
          <div class="card-header alert-info">
            <h3>Employee Type Report (Owner)</h3>
          </div>
          <div class="table-responsive bg-white p-2">
            <table class="table table-hover table-bordered table-striped">
              <thead>
                 <tr class="alert-info">
                   <th>SN</th>
                   <th>Job<span class="textTransparent">_</span>Department<span class="textTransparent">_</span>Name</th>
                   <!-- <th>Job Department Status</th> -->
                 </tr>
                </thead>
                <tbody>
                  <tr v-for="(employeeTypeOwnerList, index) in employeeTypeOwnerLists.data">
                    <td>{{ index+1 }}</td>
                    <td>{{ employeeTypeOwnerList.shopEmployeeTypeName	 }}</td>
                    <!-- <td>
                        <div v-if="jobDepartmentOwnerList.jobDepartmentStatus == 1">
                          <button type="button"  class="btn btn-hover-shine btn-success">Published</button>
                        </div>
                        <div v-else>
                          <button type="button"  class="btn btn-hover-shine btn-danger">Unpublish</button>
                        </div>
                    </td> -->
                  </tr>
                </tbody>
             </table>
           </div>
         <span class="card_footer">
           <pagination :data="employeeTypeOwnerLists" :limit="limit"  @pagination-change-page="getPaginateList">
             <span slot="prev-nav">&lt; Previous</span>
             <span slot="next-nav">Next &gt;</span>
           </pagination>
        </span>
      </div>

      <div class="card main-card  element-block-example mt-5">
          <div class="card-header alert-info">
            <h3>Employee Type Report (Global)</h3>
          </div>
          <div class="table-responsive bg-white p-2">
            <table class="table table-hover table-bordered mb-0">
              <thead>
                 <tr class="alert-info">
                   <th>SN</th>
                   <th>Job<span class="textTransparent">_</span>Department<span class="textTransparent">_</span>Name</th>
                   <!-- <th>Job Department Status</th> -->
                 </tr>
                </thead>
                <tbody>
                  <tr v-for="(employeeTypeGlobalList, index) in employeeTypeGlobalLists.data">
                    <td>{{ index+1 }}</td>
                    <td>{{ employeeTypeGlobalList.shopEmployeeTypeName	 }}</td>
                    <!-- <td>
                        <div v-if="jobDepartmentGlobalList.jobDepartmentStatus == 1">
                          <button type="button"  class="btn btn-hover-shine btn-success">Published</button>
                        </div>
                        <div v-else>
                          <button type="button"  class="btn btn-hover-shine btn-danger">Unpublish</button>
                        </div>
                    </td> -->
                  </tr>
                </tbody>
             </table>
           </div>
         <span class="card_footer">
           <pagination :data="employeeTypeGlobalLists" :limit="limit"  @pagination-change-page="getPaginateList">
             <span slot="prev-nav">&lt; Previous</span>
             <span slot="next-nav">Next &gt;</span>
           </pagination>
        </span>
      </div>

  </span>
</template>
<script>
    export default {
        data () {
            return {
                employeeTypeOwnerLists:{},
                employeeTypeGlobalLists:{},
            }
        },
        props:{
            limit: {
                type: Number,
                default: 2
            }
        },
        mounted(){
            this.employeeTypeReport();
        },
        methods:{
            employeeTypeReport(){
                axios.get('/employeeTypeReports').then(res =>{
                    this.employeeTypeOwnerLists = res.data.employeeTypeOwnerList
                    this.employeeTypeGlobalLists = res.data.employeeTypeGlobalList
                })
            },
            getPaginateList(page = 1) {
                axios.get('employeeTypeReport?page=' + page).then(response => {
                    this.employeeTypeOwnerLists = response.data.employeeTypeOwnerList;
                    this.employeeTypeGlobalLists = response.data.employeeTypeGlobalList;
                });
            },
        },
    }

</script>
