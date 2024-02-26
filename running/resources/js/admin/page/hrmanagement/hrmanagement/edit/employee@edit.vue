<template id="">
  <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3>Update Employee Information</h3>
      </div>
       <div class="employee-entery p-0 comm-form-back-img">
         
            <form  method="post" @submit.prevent="employeeInformationUpdate()">
              <div class="row m-0 border">
                <div class="col-lg-6  col-md-6  p-3">
                   <div class="bg-white p-3">
                     
                       <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" >EmployeeType </label>
                          <div class="col-sm-10 col-md-8">
                             <div>
                               <select class="form-control" v-model="form.employeeTypeId" :class="{ 'is-invalid': form.errors.has('employeeTypeId') }" name="employeeTypeId" @change.prprevent="employeeTypeSelect()">
                                  <option value="">Select One</option>
                                  <option  v-for="employeeTypeList in employeeTypeLists" :value="employeeTypeList.shopEmployeeTypeId">{{   employeeTypeList.shopEmployeeTypeName }}</option>
                               </select>
                              <has-error :form="form" field="employeeTypeId"></has-error>
                             </div>
                            </div>
                          </div>
                          
                       <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" >Job Department </label>
                          <div class="col-sm-10 col-md-8">
                             <div>
                               <select class="form-control" v-model="form.jobDepartmentId" :class="{ 'is-invalid': form.errors.has('jobDepartmentId') }" name="jobDepartmentId">
                                  <option value="">Select One</option>
                                  <option  v-for="jobDepartmentList in jobDepartmentLists" :value="jobDepartmentList.jobDepartmentEntryId">{{ jobDepartmentList.jobDepartmentName }}</option>
                               </select>
                              <has-error :form="form" field="jobDepartmentId"></has-error>
                             </div>
                          </div>
                       </div>
                       <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" >User Name </label>
                          <div class="col-sm-10 col-md-8">
                          <div>
                            <input type="text" disabled v-model="form.userName" name="userName" :class="{ 'is-invalid': form.errors.has('userName') }" class="form-control" placeholder="User Name">
                            <has-error :form="form" field="userName"></has-error>
                          </div>
                          </div>
                          </div>


                       <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" >Password </label>
                          <div class="col-sm-10 col-md-8">
                          <div>
                            <input type="password" v-model="form.password" name="password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" placeholder="password">
                            <has-error :form="form" field="password"></has-error>
                          </div>
                          </div>
                          </div>
                       
                       <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" >Full Name </label>
                          <div class="col-sm-10 col-md-8">
                          <div>
                            <input type="text" v-model="form.fullName" name="fullName" :class="{ 'is-invalid': form.errors.has('fullName') }" class="form-control" placeholder="Full Name">
                            <has-error :form="form" field="fullName"></has-error>
                          </div>
                          </div>
                          </div>


                      <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" >Father Name </label>
                          <div class="col-sm-10 col-md-8">
                            <div>
                              <input type="text" v-model="form.fatherName" name="fatherName" :class="{ 'is-invalid': form.errors.has('fatherName') }" class="form-control" placeholder="Father Name">
                              <has-error :form="form" field="fatherName"></has-error>
                            </div>
                            </div>
                            </div>
                      
                      <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" >Mother Name </label>
                          <div class="col-sm-10 col-md-8">
                          <div>
                            <input type="text" v-model="form.motherName" name="motherName" :class="{ 'is-invalid': form.errors.has('motherName') }" class="form-control" placeholder="Mother Name">
                            <has-error :form="form" field="motherName"></has-error>
                          </div>
                          </div>
                          </div>
                      
                      
                      <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" >Date of Birth </label>
                          <div class="col-sm-10 col-md-8">
                          <div>
                             <input type="date" v-model="form.dateOfBirth" name="dateOfBirth" :class="{ 'is-invalid': form.errors.has('dateOfBirth') }" class="form-control"  placeholder="Date of Birth">
                             <has-error :form="form" field="dateOfBirth"></has-error>
                          </div>
                          </div>
                          </div>
                      <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" >Phone Number </label>
                          <div class="col-sm-10 col-md-8">
                          <div>
                             <input type="text" v-model="form.phoneNumber" name="phoneNumber" :class="{ 'is-invalid': form.errors.has('phoneNumber') }" class="form-control"  placeholder="Phone Number">
                             <has-error :form="form" field="phoneNumber"></has-error>
                          </div>
                          </div>
                          </div>


                      <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" >Religion </label>
                          <div class="col-sm-10 col-md-8">
                            <div>
                              <select class="form-control" v-model="form.religion" :class="{ 'is-invalid': form.errors.has('religion') }" name="religion">
                                <option value="">Select One</option>
                                <option value="1">Islam</option>
                                <option value="2">Hindu</option>
                                <option value="3">Ohter</option>
                              </select>
                              <has-error :form="form" field="religion"></has-error>
                            </div>
                            </div>
                            </div>
                            
                  </div>
               </div>

                <div class="col-lg-6 col-md-6 p-3">
                  <div class="bg-white p-3">
                    
                    <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" >Gender </label>
                          <div class="col-sm-10 col-md-8">
                          <div>
                            <select class="form-control" v-model="form.sex" :class="{ 'is-invalid': form.errors.has('sex') }" name="sex">
                              <option value="">Select One</option>
                              <option value="1">Male</option>
                              <option value="2">Female</option>
                            </select>
                            <has-error :form="form" field="sex"></has-error>
                          </div>
                          </div>
                          </div>
                      
                      <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" >Marital Status </label>
                          <div class="col-sm-10 col-md-8">
                          <div>
                            <select class="form-control" v-model="form.maritalStatus" :class="{ 'is-invalid': form.errors.has('maritalStatus') }" name="maritalStatus">
                              <option value="">Select One</option>
                              <option value="1">Single</option>
                              <option value="2">Married</option>
                            </select>
                            <has-error :form="form" field="maritalStatus"></has-error>
                          </div>
                          </div>
                          </div>
                      
                      <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" >NID Number </label>
                          <div class="col-sm-10 col-md-8">
                           <div>
                             <input type="text" v-model="form.nidNumber" name="nidNumber"  class="form-control" placeholder="NID Number">
                            
                           </div>
                           </div>
                           </div>


                      <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" >Nationality </label>
                          <div class="col-sm-10 col-md-8">
                           <div>
                              <input type="text" v-model="form.nationality" name="nationality" :class="{ 'is-invalid': form.errors.has('nationality') }" class="form-control" placeholder="Nationality">
                              <has-error :form="form" field="maritalStatus"></has-error>
                           </div>
                           </div>
                           </div>

                      <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" >Present Address </label>
                          <div class="col-sm-10 col-md-8">
                            <div>
                              <textarea v-model="form.presentAddress" name="presentAddress" :class="{ 'is-invalid': form.errors.has('presentAddress') }" class="form-control" placeholder="Present Address"  style="height:120px;margin-top:2px"></textarea>
                              <has-error :form="form" field="presentAddress"></has-error>
                            </div>
                            </div>
                            </div>

                      <div class="form-group row">
                              <label class="col-sm-2 col-md-4 col-form-label" > Permanent Address </label>
                          <div class="col-sm-10 col-md-8">
                          <div>
                            <textarea v-model="form.permanentAddress" name="permanentAddress" :class="{ 'is-invalid': form.errors.has('permanentAddress') }"  class="form-control" placeholder="Permanent Address" style="height:120px;margin-top:5px"></textarea>
                            <has-error :form="form" field="permanentAddress"></has-error>
                          </div>
                          </div>
                          </div>
                          
                 </div>
                 
                 
                 
              </div>
           </div>
           
        <!-- -----------------------------   card footer  -->
 
<div class="d-block pt-3 pb-4 p-0 card-footer overflow-hidden">
<div class=" col-12">


                                <button type="button"
                                onclick="window.history.back()"
                                class="btn-pill btn-shadow btn btn-outline-danger btn-lg float-left">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-undo "></i>
                                    </span>
                                    <span class="mr-1"> Back </span>
                                </button>

                                <button type="submit" class="btn-pill btn-shadow btn btn-primary btn-lg float-right">
                                    <span class="mr-2 opacity-7">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                    <span class="mr-1"> Submit </span>
                                </button>


                            </div>
                            </div>
 
<!-- -----------------------------   // card footer  --> 
        </form>
       </div>
       <div class="card mt-3 py-3 comm-form-back-img">
      <div class="col-lg-8 pt-2 pb-2 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color">
        <nav class="nav nav-pills flex-column flex-sm-row">
      
            <a class="flex-sm-fill text-sm-center nav-link active" href="#Education" data-toggle="tab"
              > Education Information </a
            >
          
            <a class="flex-sm-fill text-sm-center nav-link" href="#Professional" data-toggle="tab"
              >Professional Information</a
            >
        
 
            <a class="flex-sm-fill text-sm-center nav-link" href="#Skill" data-toggle="tab"
              >Skill Information</a
            >
        
         
            <a class="flex-sm-fill text-sm-center nav-link" href="#Banking" data-toggle="tab"
              >Banking Information</a> 
        </nav>



        <div id="myTabContent" class="tab-content">
          <div id="Education" class="tab-pane fade in active show">
            <div class="col-lg-7 col-md-7 p-0">
              <div class="border active p-3">
                <form
                  action=""
                  method="post"
                  @submit.prevent="educationEntry()"
                >
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Employer Name</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <select
                        class="form-control"
                        v-model="form.employeEntryId"
                        name="employeEntryId"
                        :class="{
                          'is-invalid': form.errors.has('employeEntryId'),
                        }"
                      >
                        <option value="">Select One</option>
                        <option
                          v-for="employeeName in employeeNames"
                          :value="employeeName.shopEmployeeEntryId"
                        >
                          {{ employeeName.userName }}
                        </option>
                      </select>
                      <has-error
                        :form="form"
                        field="employeEntryId"
                      ></has-error>
                    </div>
                  </div>
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Name Of Institute</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <select
                        class="form-control"
                        v-model="form.nameOfInstituteId"
                        name="nameOfInstituteId"
                        :class="{
                          'is-invalid': form.errors.has('nameOfInstituteId'),
                        }"
                      >
                        <option value="">Select One</option>
                        <option
                          v-for="instituteList in instituteLists"
                          :value="instituteList.nameOfInstituteId"
                        >
                          {{ instituteList.nameOfInstitute }}
                        </option>
                      </select>
                      <has-error
                        :form="form"
                        field="nameOfInstituteId"
                      ></has-error>
                    </div>
                  </div>
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Name Of Degree</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <select
                        class="form-control"
                        v-model="form.nameOfDegreeId"
                        name="nameOfDegreeId"
                        :class="{
                          'is-invalid': form.errors.has('nameOfDegreeId'),
                        }"
                      >
                        <option value="">Select One</option>
                        <option
                          v-for="degreeList in degreeLists"
                          :value="degreeList.nameOfDegreeId"
                        >
                          {{ degreeList.nameOfDegree }}
                        </option>
                      </select>
                      <has-error
                        :form="form"
                        field="nameOfDegreeId"
                      ></has-error>
                    </div>
                  </div>
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Grade</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <select
                        class="form-control"
                        v-model="form.gradeId"
                        name="gradeId"
                        :class="{ 'is-invalid': form.errors.has('gradeId') }"
                      >
                        <option value="">Select One</option>
                        <option
                          v-for="gradeList in gradeLists"
                          :value="gradeList.gradeId"
                        >
                          {{ gradeList.grade }}
                        </option>
                      </select>
                      <has-error :form="form" field="gradeId"></has-error>
                    </div>
                  </div>
                  <div class="text-sm-center pr-sm-4 pr-md-5 pr-lg-4 text-center pt-3">
                    <button
                      type="submit"
                      class="btn-pill btn-shadow btn btn-primary btn-lg"
                    >
                     <span class="mr-2 opacity-7">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                    <span class="mr-1"> Submit </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="Professional">
            <div class="col-lg-7 col-md-7">
              <div class="border p-3">
                <form
                  action=""
                  method="post"
                  @submit.prevent="professionalEntry()"
                >
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Employer Name</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <select
                        class="form-control"
                        v-model="form.employeEntryId"
                        name="employeEntryId"
                        :class="{
                          'is-invalid': form.errors.has('employeEntryId'),
                        }"
                      >
                        <option value="">Select One</option>
                        <option
                          v-for="employeeName in employeeNames"
                          :value="employeeName.shopEmployeeEntryId"
                        >
                          {{ employeeName.userName }}
                        </option>
                      </select>
                      <has-error
                        :form="form"
                        field="employeEntryId"
                      ></has-error>
                    </div>
                  </div>
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Organization Name</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.organizationName"
                        :class="{
                          'is-invalid': form.errors.has('organizationName'),
                        }"
                        name="organizationName"
                        placeholder="Organization Name"
                      />
                      <has-error
                        :form="form"
                        field="organizationName"
                      ></has-error>
                    </div>
                  </div>
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Designation</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.designation"
                        :class="{
                          'is-invalid': form.errors.has('designation'),
                        }"
                        name="designation"
                        placeholder="Designation"
                      />
                      <has-error :form="form" field="designation"></has-error>
                    </div>
                  </div>
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Year Of Exprience</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.yearOfExprience"
                        :class="{
                          'is-invalid': form.errors.has('yearOfExprience'),
                        }"
                        name="yearOfExprience"
                        placeholder="Year Of Exprience"
                      />
                      <has-error
                        :form="form"
                        field="yearOfExprience"
                      ></has-error>
                    </div>
                  </div>
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Address</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <textarea
                        class="form-control"
                        v-model="form.address"
                        name="address"
                        :class="{ 'is-invalid': form.errors.has('address') }"
                        placeholder="Address"
                        style="height: 100px"
                      ></textarea>
                      <has-error :form="form" field="address"></has-error>
                    </div>
                  </div>
                  <div class="text-sm-center pr-sm-4 pr-md-5 pr-lg-4 text-center pt-3">
                    <button
                      type="submit"
                      class="btn-pill btn-shadow btn btn-primary btn-lg"
                    >
                      <span class="mr-2 opacity-7">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                    <span class="mr-1"> Submit </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="Skill">
            <div class="col-lg-7 col-md-7">
              <div class="border p-3">
                <form action="" method="post" @submit.prevent="skillEntry()">
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Employer Name</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <select
                        class="form-control"
                        v-model="form.employeEntryId"
                        name="employeEntryId"
                        :class="{
                          'is-invalid': form.errors.has('employeEntryId'),
                        }"
                      >
                        <option value="">Select One</option>
                        <option
                          v-for="employeeName in employeeNames"
                          :value="employeeName.shopEmployeeEntryId"
                        >
                          {{ employeeName.userName }}
                        </option>
                      </select>
                      <has-error
                        :form="form"
                        field="employeEntryId"
                      ></has-error>
                    </div>
                  </div>
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Skill Type</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <input
                        type="text"
                        v-model="form.skillType"
                        name="skillType"
                        :class="{ 'is-invalid': form.errors.has('skillType') }"
                        class="form-control"
                        placeholder="Skill Type"
                      />
                      <has-error :form="form" field="skillType"></has-error>
                    </div>
                  </div>
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Name Of Institute</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <input
                        type="text"
                        v-model="form.nameOfInstitute"
                        name="nameOfInstitute"
                        :class="{
                          'is-invalid': form.errors.has('nameOfInstitute'),
                        }"
                        class="form-control"
                        placeholder="Name Of Institute"
                      />
                      <has-error
                        :form="form"
                        field="nameOfInstitute"
                      ></has-error>
                    </div>
                  </div>
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Duration Of Skill</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <input
                        type="text"
                        v-model="form.durationOfSkill"
                        name="durationOfSkill"
                        :class="{
                          'is-invalid': form.errors.has('durationOfSkill'),
                        }"
                        class="form-control"
                        placeholder="Duration Of Skill"
                      />
                      <has-error
                        :form="form"
                        field="durationOfSkill"
                      ></has-error>
                    </div>
                  </div>
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Skill Grade</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <select
                        class="form-control"
                        v-model="form.skillGradeId"
                        name="skillGradeId"
                        :class="{
                          'is-invalid': form.errors.has('skillGradeId'),
                        }"
                      >
                        <option value="">Select One</option>
                        <option
                          v-for="skillGradeList in skillGradeLists"
                          :value="skillGradeList.skillGradeId"
                        >
                          {{ skillGradeList.skillGrade }}
                        </option>
                      </select>
                      <has-error :form="form" field="skillGradeId"></has-error>
                    </div>
                  </div>
                  <div class="text-sm-center pr-sm-4 pr-md-5 pr-lg-4 text-center pt-3">
                    <button
                      type="submit"
                      class="btn-pill btn-shadow btn btn-primary btn-lg"
                    >
                      <span class="mr-2 opacity-7">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                    <span class="mr-1"> Submit </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="Banking">
            <div class="col-lg-7 col-md-7">
              <div class="border p-3">
                <form action="" method="post" @submit.prevent="bankingEntry()">
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Employer Name</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <select
                        class="form-control"
                        v-model="form.employeEntryId"
                        name="employeEntryId"
                        :class="{
                          'is-invalid': form.errors.has('employeEntryId'),
                        }"
                      >
                        <option value="">Select One</option>
                        <option
                          v-for="employeeName in employeeNames"
                          :value="employeeName.shopEmployeeEntryId"
                        >
                          {{ employeeName.userName }}
                        </option>
                      </select>
                      <has-error
                        :form="form"
                        field="employeEntryId"
                      ></has-error>
                    </div>
                  </div>
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Bank Type Name</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <select
                        v-model="form.bankTypeId"
                        name="bankTypeId"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('bankTypeId') }"
                        @change.prevent="bankTypeSelect()"
                      >
                        <option value="">Select One</option>
                        <option
                          v-for="bankTypeList in bankTypeLists"
                          :value="bankTypeList.bankTypeEntryId"
                        >
                          {{ bankTypeList.bank_type_entry.bankTypeEntryName }}
                        </option>
                      </select>
                      <has-error :form="form" field="bankTypeId"></has-error>
                    </div>
                  </div>
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Bank Name</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <select
                        v-model="form.bankNameId"
                        name="bankNameId"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('bankNameId') }"
                      >
                        <option value="">Select One</option>
                        <option
                          v-for="bankNameList in bankNameLists"
                          :value="bankNameList.bankEntryId"
                        >
                          {{ bankNameList.bankName }}
                        </option>
                      </select>
                      <has-error :form="form" field="bankNameId"></has-error>
                    </div>
                  </div>
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">A/C Name</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <input
                        type="text"
                        v-model="form.accountName"
                        :class="{
                          'is-invalid': form.errors.has('accountName'),
                        }"
                        name="accountName"
                        class="form-control"
                        placeholder="A/C Name"
                      />
                      <has-error :form="form" field="accountName"></has-error>
                    </div>
                  </div>
                  <div class="form-row pt-2">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">A/C Number</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <input
                        type="text"
                        v-model="form.accountNumber"
                        :class="{
                          'is-invalid': form.errors.has('accountNumber'),
                        }"
                        name="accountNumber"
                        class="form-control"
                        placeholder="Account Number"
                      />
                      <has-error :form="form" field="accountNumber"></has-error>
                    </div>
                  </div>
                  <div class="text-sm-center pr-sm-4 pr-md-5 pr-lg-4 text-center pt-3">
                    <button
                      type="submit"
                      class="btn-pill btn-shadow btn btn-primary btn-lg"
                    >
                      <span class="mr-2 opacity-7">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                    <span class="mr-1"> Submit </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  </span>
</template>
<script>
    export default {
      data () {
          return {
              form: new Form({
                  employeeTypeId : '',
                  jobDepartmentId : '',
                  userName : '',
                  password : '',
                  fullName : '',
                  fatherName: '',
                  motherName: '',
                  dateOfBirth: '',
                  phoneNumber: '',
                  religion: '',
                  sex: '',
                  maritalStatus: '',
                  nidNumber: '',
                  nationality: '',
                  presentAddress: '',
                  permanentAddress: '',
              }),
              employeeTypeLists: {},
              employeeTypeLists:{},
              jobDepartmentLists:{},

          }
      },
      mounted() {
          this.employeeTypeList();
          this.employeeSingleInformation();
      },
      methods:{
        employeeInformationUpdate(){
            this.form.put('/shopEmployeeEntry/'+this.$route.params.employeeId).then(res =>{
                  if (res.data.userName) {
                      Toast.fire({
                          icon: 'error',
                          title: 'Please Change Employee User Name'
                      })
                  }
                  else {
                      Toast.fire({
                          icon: 'success',
                          title: 'Shop Employee Information Update Successfully'
                      })
                      this.$router.push('/employee@entry')
                  }


                  console.log(res.data);
            })
         },
         employeeSingleInformation(){
            axios.get('/shopEmployeeEntry/'+this.$route.params.employeeId+'/edit').then(res =>{
                 this.form.fill(res.data.singleShopEmployeeInfo);
                 this.jobDepartmentLists = res.data.jobDepartmentList;
           })
         },
         employeeTypeList(){
            axios.get('/shopEmployeeEntry/create').then(res =>{
              this.employeeTypeLists = res.data.employeeTypeList;
           })
         },
         employeeTypeSelect(){
           axios.get('/shopEmployeeEntry/'+this.form.employeeTypeId).then(res =>{
               this.jobDepartmentLists = res.data.jobDepartmentList;
           })
         },
       }
    }
</script>
