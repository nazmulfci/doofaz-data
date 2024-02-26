<template id="">
  <span>
    <div class="card main-card  element-block-example">
       <div class="card-header alert-info">
         <h3>Salary Grade Setup Report </h3>
       </div>
       <div class="table-responsive bg-white p-3">
         <table class="table table-hover table-striped table-bordered ">
            <thead>
            <tr class="alert-info">
                <th>SN</th>
                <th>Employee<span class="textTransparent">_</span>Type<span class="textTransparent">_</span>Name</th>
                <th>Job<span class="textTransparent">_</span>Department</th>                
                <th>Employee<span class="textTransparent">_</span>Name</th>
                <th>NID<span class="textTransparent">_</span>Number</th>
                <th>Present<span class="textTransparent">_</span>Address</th>
                <th>Salary<span class="textTransparent">_</span>Grade<span class="textTransparent">_</span>Name</th>
                <th>Salary<span class="textTransparent">_</span>Grade<span class="textTransparent">_</span>Amount</th>
                <th>Salary<span class="textTransparent">_</span>Grade<span class="textTransparent">_</span>Setup<span class="textTransparent">_</span>Status</th>
              </tr>
             </thead>
             <tbody>
               <tr v-for="(salaryGradeSetupList, index) in salaryGradeSetupLists.data">
                 <td>{{ index+1 }}</td>
                 <td v-if="salaryGradeSetupList.shop_employee_list">
                   <span v-for="employeeTypeList in employeeTypeLists" v-if="employeeTypeList.shopEmployeeTypeId == salaryGradeSetupList.shop_employee_list.employeeTypeId">
                      {{ employeeTypeList.shopEmployeeTypeName }}
                   </span>
                 </td>
                 <td v-if="salaryGradeSetupList.shop_employee_list">
                   <span v-for="jobDepartmentList in jobDepartmentLists" v-if="jobDepartmentList.jobDepartmentEntryId == salaryGradeSetupList.shop_employee_list.jobDepartmentId">
                     {{ jobDepartmentList.jobDepartmentName }}
                   </span>
                 </td>
                 
                 <td v-if="salaryGradeSetupList.shop_employee_list">{{ salaryGradeSetupList.shop_employee_list.userName	}}</td>
                 <td v-if="salaryGradeSetupList.shop_employee_list">{{ salaryGradeSetupList.shop_employee_list.nidNumber	}}</td>
                 <td v-if="salaryGradeSetupList.shop_employee_list">{{ salaryGradeSetupList.shop_employee_list.presentAddress	}}</td>
                 <td v-if="salaryGradeSetupList.grade_list">{{ salaryGradeSetupList.grade_list.gradeName }}</td>
                 <td v-if="salaryGradeSetupList.grade_list">{{ salaryGradeSetupList.grade_list.gradeAmount	 }}</td>
                 <td>
                     <div v-if="salaryGradeSetupList.salaryGradeSetupStatus == 1">
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
          <pagination :data="salaryGradeSetupLists" :limit="limit"  @pagination-change-page="getPaginateList">
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
             salaryGradeSetupLists: {},
             employeeTypeLists: {},
             jobDepartmentLists: {},
           }
        },
        props:{
            limit: {
                type: Number,
                default: 2
            }
        },
        mounted(){
          this.salaryGradeSetupList();
          this.getPaginateList();
        },
        methods:{
          salaryGradeSetupList(){
              axios.get('/salaryGradeSetupReport').then(res =>{
                  this.employeeTypeLists = res.data.employeeTypeList
                  this.jobDepartmentLists = res.data.jobDepartmentList
                  this.salaryGradeSetupLists = res.data.salaryGradeSetupList
            })
          },
          getPaginateList(page = 1) {
              axios.get('/salaryGradeSetupReport?page=' + page).then(response => {
                  this.salaryGradeSetupLists = response.data.salaryGradeSetupList;
              });
          },
        }
    }

</script>
