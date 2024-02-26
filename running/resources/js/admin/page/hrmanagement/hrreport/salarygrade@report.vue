<template id="">
  <span>
    <div class="card main-card  element-block-example">
        <div class="card-header alert-info">
          <h3>Salary Grade Report </h3>
        </div>
        <div class="table-responsive bg-white p-2">
          <table class="table table-hover table-striped table-bordered ">
            <thead>
            <tr class="alert-info">
                 <th>SN</th>
                 <th>Grade Name</th>
                 <th>Grade Amount</th>
                 <th>Grade Status</th>
               </tr>
              </thead>
              <tbody>
                <tr v-for="(gradeList, index) in gradeLists.data">
                  <td>{{ index+1 }}</td>
                  <td>{{ gradeList.gradeName	 }}</td>
                  <td>{{ gradeList.gradeAmount	 }}</td>
                  <td>
                      <div v-if="gradeList.gradeStatus == 1">
                        <span class="badge btn-hover-shine badge-success">Published</span>
                      </div>
                      <div v-else>
                        <span class="badge btn-hover-shine badge-danger">Unpublish</span>
                      </div>
                  </td>
                </tr>
              </tbody>
           </table>
         </div>
         <span class="card_footer">
           <pagination :data="gradeLists" :limit="limit"  @pagination-change-page="getPaginateList">
             <span slot="prev-nav">&lt; Previous</span>
             <span slot="next-nav">Next &gt;</span>
           </pagination>
        </span>
      </div>
  </span>
</template>

<script>
    export default {
        data(){
           return{
             gradeLists: {},
           }
        },
        props:{
            limit: {
                type: Number,
                default: 2
            }
        },
        mounted(){
            this.gradeReport();
            this.getPaginateList();
        },
        methods:{
            gradeReport(){
                axios.get('/salaryGradeReport').then(res =>{
                    this.gradeLists = res.data.gradeLists
              })
            },
            getPaginateList(page = 1) {
                axios.get('/salaryGradeReport?page=' + page).then(response => {
                    this.gradeLists = response.data.gradeLists;
                });
            },
        }
    }

</script>
