<template id="">
  <span>
      <div class="card main-card  element-block-example">
          <div class="card-header alert-info">
            <h3>Job Department Report (Owner)</h3>
          </div>
          <div class="table-responsive bg-white p-2">
            <table class="table table-hover table-striped table-bordered ">
            <thead>
            <tr class="alert-info">
                   <th>SN</th>
                   <th>Job Department Name</th>
                   <!-- <th>Job Department Status</th> -->
                 </tr>
                </thead>
                <tbody>
                  <tr v-for="(jobDepartmentOwnerList, index) in jobDepartmentOwnerLists.data">
                    <td>{{ index+1 }}</td>
                    <td>{{ jobDepartmentOwnerList.jobDepartmentName	 }}</td>
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
           <pagination :data="jobDepartmentOwnerLists" :limit="limit"  @pagination-change-page="getPaginateList">
             <span slot="prev-nav">&lt; Previous</span>
             <span slot="next-nav">Next &gt;</span>
           </pagination>
        </span>
      </div>

      <div class="card main-card  element-block-example mt-5">
          <div class="card-header alert-info">
            <h3>Job Department Report (Global)</h3>
          </div>
          <div class="table-responsive bg-white p-2">
            <table class="table table-hover table-striped table-bordered ">
            <thead>
            <tr class="alert-info">
                   <th>SN</th>
                   <th>Job Department Name</th>
                   <!-- <th>Job Department Status</th> -->
                 </tr>
                </thead>
                <tbody>
                  <tr v-for="(jobDepartmentGlobalList, index) in jobDepartmentGlobalLists.data">
                    <td>{{ index+1 }}</td>
                    <td>{{ jobDepartmentGlobalList.jobDepartmentName	 }}</td>
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
           <pagination :data="jobDepartmentGlobalLists" :limit="limit"  @pagination-change-page="getPaginateList">
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
                jobDepartmentOwnerLists:{},
                jobDepartmentGlobalLists:{},
            }
        },
        props:{
            limit: {
                type: Number,
                default: 2
            }
        },
        mounted(){
            this.jobDepartmentReport();
        },
        methods:{
            jobDepartmentReport(){
                axios.get('/jobDepartmentReport').then(res =>{
                    this.jobDepartmentOwnerLists = res.data.jobDepartmentOwnerList
                    this.jobDepartmentGlobalLists = res.data.jobDepartmentGlobalList
                })
            },
            getPaginateList(page = 1) {
                axios.get('jobDepartmentReport?page=' + page).then(response => {
                    this.jobDepartmentOwnerLists = response.data.jobDepartmentOwnerList;
                    this.jobDepartmentGlobalLists = response.data.jobDepartmentGlobalList;
                });
            },
        },
    }

</script>
