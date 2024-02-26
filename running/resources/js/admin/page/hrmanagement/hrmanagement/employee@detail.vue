<template id="">
 <span>


     <div class="card main-card  element-block-example">
       <div class="card-header text-center alert-info">
         <h3 style="color:black">{{ singleEmployeeInfo.fullName	}} </h3>
       </div>
         <div class="row m-0">




           <div class="employeeDetail  bg-white col-sm-12">
             
             <div class="form-row">
               <div class="col-md-4 col-12 mb-3">
                 <div><b class="text-success">Employee Type</b></div>
                 <span v-if="singleEmployeeInfo.shop_employee_types">{{ singleEmployeeInfo.shop_employee_types.shopEmployeeTypeName }}</span>
               </div>
             
               <div class="col-md-4 col-12 mb-3">
               <div><b class="text-success"> Job Department</b></div>
                 <span v-if="singleEmployeeInfo.job_departments">{{ singleEmployeeInfo.job_departments.jobDepartmentName }}</span>
               </div>
             
               <div class="col-md-4 col-12 mb-3">
                <div><b class="text-success"> User Name</b></div>
                 <span>{{ singleEmployeeInfo.userName }}</span>
               </div>
             
            
             
               <div class="col-md-4 col-12 mb-3">
               <div><b class="text-success">Full Name </b></div>
                 <span>{{ singleEmployeeInfo.fullName	 }}</span>
               </div>
            
               <div class="col-md-4 col-12 mb-3"> 
               <div><b class="text-success">Father Name </b></div>
                 <span>{{ singleEmployeeInfo.fatherName	 }}</span>
               </div>
             
               <div class="col-md-4 col-12 mb-3"> 
               <div><b class="text-success">Mother Name </b></div>
                 <span>{{ singleEmployeeInfo.motherName	 }}</span>
               </div>
              
               <div class="col-md-4 col-12 mb-3"> 
               <div><b class="text-success">Date Of Birth </b></div>
                 <span>{{ singleEmployeeInfo.dateOfBirth	 }}</span>
               </div>
              
               <div class="col-md-4 col-12 mb-3"> 
               <div><b class="text-success">Phone Number </b></div>
                 <span>{{ singleEmployeeInfo.phoneNumber }}</span>
               </div>
               
               <div class="col-md-4 col-12 mb-3">
                <div><b class="text-success"> Religion </b></div>
                 <span>
                   <span v-if="singleEmployeeInfo.religion == 1">
                     Islam
                   </span>
                   <span v-if="singleEmployeeInfo.religion == 2">
                     Hindu
                   </span>
                   <span v-if="singleEmployeeInfo.religion == 3">
                     Ohter
                   </span>
                 </span>
             </div>
             
               <div class="col-md-4 col-12 mb-3">
                 <div><b class="text-success"> Gender </b></div>
                 <span> Male </span>
               </div>
             
               <div class="col-md-4 col-12 mb-3">
               <div><b class="text-success"> Marital Status </b></div>
                 <span>
                   <span v-if="singleEmployeeInfo.maritalStatus == 1">
                     Single
                   </span>
                   <span v-if="singleEmployeeInfo.maritalStatus == 2">
                     Married
                   </span>
                 </span>
               </div>
             
             
               <div class="col-md-4 col-12 mb-3">
                 <div><b class="text-success"> NID Number </b></div>
                 <span>{{ singleEmployeeInfo.nidNumber	 }}</span>
               </div>
             
             
               <div class="col-md-4 col-12 mb-3">
                 <div><b class="text-success"> Nationality </b></div>
                 <span>{{ singleEmployeeInfo.nationality	 }}</span>
               </div>
             
               <div class="col-md-4 col-12 mb-3">
                 <div><b class="text-success"> Present Address </b></div>
               
                 <span>{{ singleEmployeeInfo.presentAddress	}}</span>
               </div>
             
             
               <div class="col-md-4 col-12 mb-3">
                 <div><b class="text-success"> Permanent Address </b></div>
                 <span>{{ singleEmployeeInfo.permanentAddress }}</span>
               </div>
             </div>
           </div>

           <div class="employeeDetail bg-white col-12">
             <div class="card-header alert-info mb-3">
               <h4>Education Information</h4>
             </div>
             <span v-for="singleEmployeeEducation,index in singleEmployeeEducations" v-if="index% 2 == 0">
               <div class="form-row">
                 <div class="col-md-4 col-12 mb-3">
                   <div><b class="text-success"> Name Of Institute </b></div>
                   <span>{{ singleEmployeeEducation.nameOfInstituteId	}}</span>
                 </div>
               
               
                 <div class="col-md-4 col-12 mb-3">
                   <div><b class="text-success"> Name Of Degree </b></div>
                   <span>{{ singleEmployeeEducation.nameOfDegreeId	}}</span>
                 </div>
               
               
                 <div class="col-md-4 col-12 mb-3">
                   <div><b class="text-success"> Grade </b></div>
                   <span>{{ singleEmployeeEducation.gradeId	}}</span>
                 </div>
               </div>
               <hr>
             </span>
           </div>

           <div class="employeeDetail bg-white col-sm-12">
             <div class="card-header alert-info mb-3">
               <h4>Professional Information</h4>
             </div>
             <span v-for="singleEmployeeProfessional in singleEmployeeProfessionals">
               <div class="form-row">
                 <div class="col-md-4 col-12 mb-3">
                 <div><b class="text-success"> Organization Name </b></div>
                   <span v-if="singleEmployeeProfessional !== null ">{{ singleEmployeeProfessional.organizationName	}}</span>
                 </div>
               
               
                 <div class="col-md-4 col-12 mb-3">
                   <div><b class="text-success"> Professional Designation </b></div>
                   <span v-if=" singleEmployeeProfessional !== null ">{{ singleEmployeeProfessional.designation	}}</span>
                 </div>
               
               
                 <div class="col-md-4 col-12 mb-3">
                   <div><b class="text-success"> Professional Year Of Exprience </b></div>
                   <span v-if="singleEmployeeProfessional !== null ">{{ singleEmployeeProfessional.yearOfExprience	}}</span>
                 </div>
               
               
                 <div class="col-md-4 col-12 mb-3">
                   <div><b class="text-success"> Professional Address </b></div>
                   <span v-if="singleEmployeeProfessional !== null ">{{ singleEmployeeProfessional.address	}}</span>
                 </div>
               </div>
               <hr>
             </span>
           </div>

             <div class="employeeDetail bg-white col-sm-12">
               <div class="card-header alert-info mb-3">
                 <h4>Skill Information</h4>
               </div>
               <span v-for="singleEmployeeSkill in singleEmployeeSkills">
                 <div class="form-row">
                   <div class="col-md-4 col-12 mb-3">
                     <div><b class="text-success"> Skill Type </b></div>
                     <span v-if="singleEmployeeSkill !== null ">{{ singleEmployeeSkill.skillType	}}</span>
                   </div>
                 
                 
                   <div class="col-md-4 col-12 mb-3">
                     <div><b class="text-success"> Name Of Institute </b></div>
                     <span v-if="singleEmployeeSkill !== null ">{{ singleEmployeeSkill.nameOfInstitute	}}</span>
                   </div>
                 
                 
                   <div class="col-md-4 col-12 mb-3">
                     <div><b class="text-success"> Duration Of Skill </b></div>
                     <span v-if="singleEmployeeSkill !== null ">{{ singleEmployeeSkill.durationOfSkill	}}</span>
                   </div>
                
                
                   <!-- <div class="col-md-4 col-12 mb-3">
                     <div><b class="text-success"> Skill Grade </b></div>
                     <span v-if="singleEmployeeSkill !== null && singleEmployeeSkill.skill_grade">{{ singleEmployeeSkill.skill_grade.skillGrade	}}</span>
                   </div> -->
                 </div>
                 <hr>
               </span>
             </div>

             <div class="employeeDetail bg-white col-sm-12">
               <div class="card-header alert-info mb-3">
                 <h4>Banking Information</h4>
               </div>
               <span v-for="singleEmployeeBanking in singleEmployeeBankings">
                 <div class="form-row">
                   <div class="col-md-4 col-12 mb-3">
                     <div><b class="text-success"> Bank Type </b></div>
                     <span v-if="singleEmployeeBanking !== null && singleEmployeeBanking.bank_type_entry">{{ singleEmployeeBanking.bank_type_entry.bankTypeEntryName	}}</span>
                   </div>
                 
                 
                   <div class="col-md-4 col-12 mb-3">
                     <div><b class="text-success"> Bank Name </b></div>
                     <span v-if="singleEmployeeBanking !== null && singleEmployeeBanking.bank_entry">{{ singleEmployeeBanking.bank_entry.bankName	}}</span>
                   </div>
                 
                 
                   <div class="col-md-4 col-12 mb-3">
                     <div><b class="text-success"> Account Name </b></div>
                     <span v-if="singleEmployeeBanking !== null ">{{ singleEmployeeBanking.accountName	}}</span>
                   </div>
                 

                   <div class="col-md-4 col-12 mb-3">
                     <div><b class="text-success"> Account Number </b></div>
                     <span v-if="singleEmployeeBanking !== null ">{{ singleEmployeeBanking.accountNumber }}</span>
                   </div>
                 </div>
                 <hr>
               </span>
             </div>
          </div>
      </div>
   </span>
</template>

<script>
export default {
    data(){
        return{
            singleEmployeeInfo: {},
            singleEmployeeEducations: {},
            singleEmployeeProfessionals: {},
            singleEmployeeSkills: {},
            singleEmployeeBankings: {},
        }
    },

    mounted(){
       this.employeeInfo();
    },
    methods:{
        employeeInfo() {
          axios.get('/employeeReportView/'+this.$route.params.employeeId).then(res => {
               this.singleEmployeeInfo = res.data.singleEmployeeInfo
               this.singleEmployeeEducations = res.data.singleEmployeeEducation
               this.singleEmployeeProfessionals = res.data.singleEmployeeProfessional
               this.singleEmployeeSkills = res.data.singleEmployeeSkill
               this.singleEmployeeBankings = res.data.singleEmployeeBanking

          })
        },
    }
 }
</script>
<style media="screen">
  .employeeDetail{
      margin: 20px 0px;
  }
  .employeeDetail .form-row{
    margin:0px
  }
  .employeeDetail .col-md-6.col-12 {
      padding: 10px;
      border: 1px solid #ddd;
  }
  .employeeDetail .col-md-6.col-12 {
     padding: 10px;
     border: 1px solid #ddd;
  }
</style>
