<template id="">
  <span>
    <div class="card">
      <div class="card-header-tab card-header alert-info">
        <div
          class="
            card-header-title
            font-size-lg
            text-capitalize
            font-weight-normal
          "
        >
          <i class="header-icon lnr-pencil icon-gradient bg-premium-dark"></i>
          <h4>Employee Entry</h4>
        </div>
      </div>

      <form method="post" @submit.prevent="employeeInformationEntry()">
        <div class="employee-entery p-0 comm-form-back-img">
          <div
            class="
              col-lg-12
              px-lg-2
              pt-2
              pb-2
              col-sm-12 col-12
              supplier-border
              comm-form-box-back-color
            "
          >
            <div
              class="card-header-part mb-3"
              style="
                background: rgba(221, 221, 221, 0.2);
                border: 1px solid rgba(0, 0, 0, 0.05);
              "
            >
              <h6>Identification Information</h6>
            </div>

            <div class="row">
              <div class="col-12 col-md-6 col-xs-12">
                <div class="form-group row d-none">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >Employee Type&nbsp;&nbsp;&nbsp;<i
                      class="fa fa-star text-danger text-10 cursor-pointer"
                      title="Mandatory Field"
                      data-placement="top"
                      data-toggle="tooltip"
                      data-original-title="Mandatory Field"
                    ></i
                  ></label>
                  <div class="col-sm-10 col-md-8">
                    <select
                      class="form-control"
                      v-model="form.employeeTypeId"
                      :class="{
                        'is-invalid': form.errors.has('employeeTypeId'),
                      }"
                      name="employeeTypeId"
                      @change.prevent="employeeTypeSelect()"
                    >
                      <option value="">Select One</option>
                      <option
                        v-for="employeeTypeList in employeeTypeLists"
                        :value="employeeTypeList.shopEmployeeTypeId"
                        :key="employeeTypeList.id"
                      >
                        {{
                          employeeTypeList.shopEmployeeTypeName
                        }}
                      </option>
                    </select>
                    <has-error :form="form" field="employeeTypeId"></has-error>
                  </div>
                </div>
                <div class="form-group row d-none">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >Job Department &nbsp;&nbsp;&nbsp;<i
                      class="fa fa-star text-danger text-10 cursor-pointer"
                      title="Mandatory Field"
                      data-placement="top"
                      data-toggle="tooltip"
                      data-original-title="Mandatory Field"
                    ></i
                  ></label>
                  <div class="col-sm-10 col-md-8">
                    <select
                      class="form-control"
                      v-model="form.jobDepartmentId"
                      :class="{
                        'is-invalid': form.errors.has('jobDepartmentId'),
                      }"
                      name="jobDepartmentId"
                    >
                      <option value="">Select One</option>
                      <option
                        v-for="jobDepartmentList in jobDepartmentLists"
                        :value="jobDepartmentList.jobDepartmentEntryId"
                        :key="jobDepartmentList.id"
                      >
                        {{ jobDepartmentList.jobDepartmentName }}
                      </option>
                    </select>
                    <has-error :form="form" field="jobDepartmentId"></has-error>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >User Name &nbsp;&nbsp;&nbsp;<i
                      class="fa fa-star text-danger text-10 cursor-pointer"
                      title="Mandatory Field"
                      data-placement="top"
                      data-toggle="tooltip"
                      data-original-title="Mandatory Field"
                    ></i
                  ></label>
                  <div class="col-sm-10 col-md-8">
                    <input
                      type="text"
                      v-model="form.userName"
                      name="userName"
                      :class="{ 'is-invalid': form.errors.has('userName') }"
                      class="form-control"
                      placeholder="User Name"
                      @keyup.prevent="chackUserName()"
                    />
                    <has-error :form="form" field="userName"></has-error>
                    <span v-if="userNameExistStatus" class="text-danger pt-2">
                      User Name Allready Exist.
                    </span>
                  </div>
                </div>

                <div class="form-group row">
                    <label class="col-sm-2 col-md-4 col-form-label">Email &nbsp;&nbsp;&nbsp;
                        <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                    </label>

                    <div class="col-sm-10 col-md-8">
                        <input type="email" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" placeholder="email"/>
                        <has-error :form="form" field="email"></has-error>
                    </div>

                </div>

                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >Password &nbsp;&nbsp;&nbsp;<i
                      class="fa fa-star text-danger text-10 cursor-pointer"
                      title="Mandatory Field"
                      data-placement="top"
                      data-toggle="tooltip"
                      data-original-title="Mandatory Field"
                    ></i
                  ></label>
                  <div class="col-sm-10 col-md-8">
                    <input
                      type="password"
                      v-model="form.password"
                      name="password"
                      :class="{ 'is-invalid': form.errors.has('password') }"
                      class="form-control"
                      placeholder="password"
                    />
                    <has-error :form="form" field="password"></has-error>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >Full Name <i
                      class="fa fa-star text-danger text-10 cursor-pointer"
                      title="Mandatory Field"
                      data-placement="top"
                      data-toggle="tooltip"
                      data-original-title="Mandatory Field"
                    ></i
                  ></label>
                  <div class="col-sm-10 col-md-8">
                    <input
                      type="text"
                      v-model="form.fullName"
                      name="fullName"
                      :class="{ 'is-invalid': form.errors.has('fullName') }"
                      class="form-control"
                      placeholder="Full Name"
                    />
                    <has-error :form="form" field="fullName"></has-error>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >Father Name </label>
                  <div class="col-sm-10 col-md-8">
                    <input
                      type="text"
                      v-model="form.fatherName"
                      name="fatherName"
                      :class="{ 'is-invalid': form.errors.has('fatherName') }"
                      class="form-control"
                      placeholder="Father Name"
                    />
                    <has-error :form="form" field="fatherName"></has-error>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >Mother Name </label>
                  <div class="col-sm-10 col-md-8">
                    <input
                      type="text"
                      v-model="form.motherName"
                      name="motherName"
                      :class="{ 'is-invalid': form.errors.has('motherName') }"
                      class="form-control"
                      placeholder="Mother Name"
                    />
                    <has-error :form="form" field="motherName"></has-error>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >Date of Birth </label>
                  <div class="col-sm-10 col-md-8">
                    <input
                      type="date"
                      v-model="form.dateOfBirth"
                      name="dateOfBirth"
                      :class="{ 'is-invalid': form.errors.has('dateOfBirth') }"
                      class="form-control"
                      placeholder="Date of Birth"
                    />
                    <has-error :form="form" field="dateOfBirth"></has-error>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >Phone Number </label>
                  <div class="col-sm-10 col-md-8">
                    <input
                      type="text"
                      v-model="form.phoneNumber"
                      name="phoneNumber"
                      :class="{ 'is-invalid': form.errors.has('phoneNumber') }"
                      class="form-control"
                      placeholder="Phone Number"
                    />
                    <has-error :form="form" field="phoneNumber"></has-error>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >Religion </label>
                  <div class="col-sm-10 col-md-8">
                    <select
                      class="form-control"
                      v-model="form.religion"
                      :class="{ 'is-invalid': form.errors.has('religion') }"
                      name="religion"
                    >
                      <option value="">Select One</option>
                      <option value="1">Islam</option>
                      <option value="2">Hindu</option>
                      <option value="3">Other</option>
                    </select>
                    <has-error :form="form" field="religion"></has-error>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-xs-12">
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >Gender</label>
                  <div class="col-sm-10 col-md-8">
                    <select
                      class="form-control"
                      v-model="form.sex"
                      :class="{ 'is-invalid': form.errors.has('sex') }"
                      name="sex"
                    >
                      <option value="">Select One</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                    <has-error :form="form" field="sex"></has-error>
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >Merital Status </label>
                  <div class="col-sm-10 col-md-8">
                    <select
                      class="form-control"
                      v-model="form.maritalStatus"
                      :class="{
                        'is-invalid': form.errors.has('maritalStatus'),
                      }"
                      name="maritalStatus"
                    >
                      <option value="">Select One</option>
                      <option value="1">Single</option>
                      <option value="2">Married</option>
                    </select>
                    <has-error :form="form" field="maritalStatus"></has-error>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >NID Number</label
                  >
                  <div class="col-sm-10 col-md-8">
                    <input
                      type="text"
                      v-model="form.nidNumber"
                      name="nidNumber"
                      class="form-control"
                      placeholder="NID Number"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >Nationality</label>
                  <div class="col-sm-10 col-md-8">
                    <input
                      type="text"
                      v-model="form.nationality"
                      name="nationality"
                      :class="{ 'is-invalid': form.errors.has('nationality') }"
                      class="form-control"
                      placeholder="Nationality"
                    />
                    <has-error :form="form" field="maritalStatus"></has-error>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >Present Address</label>
                  <div class="col-sm-10 col-md-8">
                    <textarea
                      v-model="form.presentAddress"
                      name="presentAddress"
                      :class="{
                        'is-invalid': form.errors.has('presentAddress'),
                      }"
                      class="form-control"
                      placeholder="Present Address"
                      style="height: 120px; margin-top: 2px"
                    ></textarea>
                    <has-error :form="form" field="presentAddress"></has-error>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-md-4 col-form-label"
                    >Permanent Address</label>
                  <div class="col-sm-10 col-md-8">
                    <textarea
                      v-model="form.permanentAddress"
                      name="permanentAddress"
                      :class="{
                        'is-invalid': form.errors.has('permanentAddress'),
                      }"
                      class="form-control"
                      placeholder="Permanent Address"
                      style="height: 120px; margin-top: 5px"
                    ></textarea>
                    <has-error
                      :form="form"
                      field="permanentAddress"
                    ></has-error>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- -----------------------------   card footer  -->

        <div class="d-block pt-3 pb-4 p-0 card-footer overflow-hidden">
          <div class="col-12">
            <button
              type="reset"
              class="
                btn-pill btn-shadow btn btn-outline-danger btn-lg
                float-left
              "
            >
              <span class="mr-2 opacity-7">
                <i class="fa fa-undo"></i>
              </span>
              <span class="mr-1"> Clear </span>
            </button>

            <button
              type="submit"
              class="btn-pill btn-shadow btn btn-primary btn-lg float-right"
              :disabled="loading">
              <span
                v-if="loading"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>

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
    <div class="card mt-3 py-3 comm-form-back-img d-none">
      <div
        class="
          col-lg-8
          pt-2
          pb-2
          col-sm-8
          offset-sm-2
          col-12
          supplier-border
          comm-form-box-back-color
        "
      >
        <nav class="nav nav-pills flex-column flex-sm-row">
          <a
            class="flex-sm-fill text-sm-center nav-link active"
            href="#Education"
            data-toggle="tab"
          >
            Education Information
          </a>

          <a
            class="flex-sm-fill text-sm-center nav-link"
            href="#Professional"
            data-toggle="tab"
            >Professional Information</a
          >

          <a
            class="flex-sm-fill text-sm-center nav-link"
            href="#Skill"
            data-toggle="tab"
            >Skill Information</a
          >

          <a
            class="flex-sm-fill text-sm-center nav-link"
            href="#Banking"
            data-toggle="tab"
            >Banking Information</a
          >
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
                          :key="employeeName.id"
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
                      <input type="text"
                        class="form-control"
                        v-model="form.nameOfInstituteId"
                        name="nameOfInstituteId"
                        :class="{
                          'is-invalid': form.errors.has('nameOfInstituteId'),
                        }"
                      >
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
                      <input type="text"
                        class="form-control"
                        v-model="form.nameOfDegreeId"
                        name="nameOfDegreeId"
                        :class="{
                          'is-invalid': form.errors.has('nameOfDegreeId'),
                        }"
                      >

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
                      <input type="text"
                        class="form-control"
                        v-model="form.gradeId"
                        name="gradeId"
                        :class="{ 'is-invalid': form.errors.has('gradeId') }"
                      >

                      <has-error :form="form" field="gradeId"></has-error>
                    </div>
                  </div>
                  <div
                    class="
                      text-sm-center
                      pr-sm-4 pr-md-5 pr-lg-4
                      text-center
                      pt-3
                    "
                  >
                    <button
                      type="submit"
                      class="btn-pill btn-shadow btn btn-primary btn-lg"
                      :disabled="loading"
                    >
                      <span
                        v-if="loading"
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
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
                          :key="employeeName.id"
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
                  <div
                    class="
                      text-sm-center
                      pr-sm-4 pr-md-5 pr-lg-4
                      text-center
                      pt-3
                    "
                  >
                    <button
                      type="submit"
                      class="btn-pill btn-shadow btn btn-primary btn-lg"
                      :disabled="loading"
                    >
                      <span
                        v-if="loading"
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>

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
                          :key="employeeName.id"
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
                  <div class="form-row pt-2" style="display:none;">
                    <div class="col-sm-4 col-12">
                      <label class="p-0">Skill Grade</label>
                    </div>
                    <div class="col-sm-8 col-12">
                      <input type="hidden"
                        class="form-control"
                        v-model="form.skillGradeId"
                        name="skillGradeId"
                        :class="{
                          'is-invalid': form.errors.has('skillGradeId'),
                        }"
                      >

                      <has-error :form="form" field="skillGradeId"></has-error>
                    </div>
                  </div>
                  <div
                    class="
                      text-sm-center
                      pr-sm-4 pr-md-5 pr-lg-4
                      text-center
                      pt-3
                    "
                  >
                    <button
                      type="submit"
                      class="btn-pill btn-shadow btn btn-primary btn-lg"
                      :disabled="loading"
                    >
                      <span
                        v-if="loading"
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>

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
                          :key="employeeName.id"
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
                          :key="bankTypeList.id"
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
                          :key="bankNameList.id"
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
                  <div
                    class="
                      text-sm-center
                      pr-sm-4 pr-md-5 pr-lg-4
                      text-center
                      pt-3
                    "
                  >
                    <button
                      type="submit"
                      class="btn-pill btn-shadow btn btn-primary btn-lg"
                      :disabled="loading"
                    >
                      <span
                        v-if="loading"
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>

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

    <div class="card main-card element-block-example mt-5">
      <div class="card-header-tab card-header alert-info">
        <h4>
          <i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Employee List
        </h4>
      </div>

      <div class="card-body table-responsive bg-white">
        <table
          class="table table-hover table-striped table-bordered"
          id="sampleTable"
        >
          <thead>
            <tr class="alert-info">
              <th>SN</th>
              <!-- <th>Employee<span class="textTransparent">_</span>Type</th>
              <th>Job<span class="textTransparent">_</span>Department</th> -->
              <th>User<span class="textTransparent">_</span>Name</th>
              <th>Email</th>

              <th>Full<span class="textTransparent">_</span>Name</th>
              <th>Father<span class="textTransparent">_</span>Name</th>
              <th>Mother<span class="textTransparent">_</span>Name</th>
              <th>
                Date<span class="textTransparent">_</span>Of<span
                  class="textTransparent"
                  >_</span
                >Birth
              </th>
              <th>Phone<span class="textTransparent">_</span>Number</th>
              <th>Nid<span class="textTransparent">_</span>Number</th>
              <th>Nationality</th>
              <th>Present<span class="textTransparent">_</span>Address</th>
              <th>Permanent<span class="textTransparent">_</span>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </span>
</template>
<script>
import datatable from "datatables.net-bs4";
export default {
  data() {
    return {
      form: new Form({
        employeeTypeId: 1,
        jobDepartmentId: 1,

        userName: "",
        email: "",
        password: "",
        fullName: "",
        fatherName: "",
        motherName: "",
        dateOfBirth: "",
        phoneNumber: "",
        religion: "",
        sex: "",
        maritalStatus: "",
        nidNumber: "",
        nationality: "",
        presentAddress: "",
        permanentAddress: "",

        // Education Entry
        employeEntryId: "",
        nameOfInstituteId: "",
        nameOfDegreeId: "",
        gradeId: "",

        // Professional Entry
        employeEntryId: "",
        organizationName: "",
        designation: "",
        yearOfExprience: "",
        address: "",

        // Skill Entry
        skillType: "",
        nameOfInstitute: "",
        durationOfSkill: "",
        skillGradeId: "0",

        // Banking Entry
        bankTypeId: "",
        bankNameId: "",
        accountName: "",
        accountNumber: "",
      }),
      userNameExistStatus: false,
      employeeLists: {},
      bankTypeLists: {},
      bankNameLists: {},
      employeeTypeLists: {},
      jobDepartmentLists: {},
      employeeNames: {},
      instituteLists: {},
      degreeLists: {},
      gradeLists: {},
      skillGradeLists: {},
      loading: false,
    };
  },

  mounted() {
    this.employeeTypeList();
    this.employeeList();
    this.employeeNameList();
    this.educationInformation();
    this.showBankType();
  },
  methods: {
    employeeInformationEntry() {
      this.loading = true;
      this.form
        .post("/shopEmployeeEntry")
        .then((res) => {
          this.loading = false;
          Toast.fire({
            icon: "success",
            title: "Shop Employee Entry Successfully",
          });
          this.form.reset();
          this.employeeList();
          this.employeeNameList();

        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
    },
    chackUserName() {
      axios
        .get("/checkShopEmployeeUserName/" + this.form.userName)
        .then((res) => {
          if (res.data.employeeUserNameExist == 1) {
            this.userNameExistStatus = true;
          } else {
            this.userNameExistStatus = false;
          }
        });
    },

    // {
    //           data: "shopEmployeeTypes",
    //           name: "shopEmployeeTypes.shopEmployeeTypeName",
    //         },
    //         {
    //           data: "JobDepartments",
    //           name: "JobDepartments.jobDepartmentName",
    //         },


    employeeList() {
      $(document).ready(function () {
        $("#sampleTable").DataTable({
          processing: true,
          serverSide: true,
              bDestroy: true,
          ajax: "/shopEmployeeEntry",

          columns: [
            {
              data: "shopEmployeeEntryId",
            },

            {
              data: "userName",
            },

            {
              data: "email",
            },
            {
              data: "fullName",
            },
            {
              data: "fatherName",
            },
            {
              data: "motherName",
            },
            {
              data: "dateOfBirth",
            },
            {
              data: "phoneNumber",
            },

            {
              data: "nidNumber",
            },

            {
              data: "nationality",
            },

            {
              data: "presentAddress",
            },

            {
              data: "permanentAddress",
            },

              {
              data: "customStatus",
              render: function (data1, row1) {
                var exp = data1.split(',');
                var ok1 ='';

                if(exp[0]==1){
                  ok1 = ' <span  onclick="employeeDeactivate('+ exp[1] +')" class="badge badge-success badge-hover-shine badge-outline-info" > Active </span>';
                }
                else{
                  ok1 = ' <span  onclick="employeeActivate('+ exp[1] +')" class="badge badge-danger badge-hover-shine badge-outline-info" > Inactive </span>';
                }
                return ok1;

                //   '<div class="btn-group"><button type="button" onclick="employeeActivate(' + data1 +')" class="btn btn-hover-shine btn-outline-info" >Active</button><button type="button" onclick="employeeDeactivate(' +
                //   data1 +
                //   ')" class="btn btn-hover-shine btn-outline-primary">Deactivate</button></div>';
                // return ok1;
              },
            },

            {
              data: "shopEmployeeEntryId",
              render: function (data, row) {
                var ok =
                  '<div class="btn-group"><button type="button" onclick="employeeDetail(' + data +')" class="btn btn-hover-shine btn-outline-info" ><i class="fa fa-eye"></i></button><button type="button" onclick="editEmployee(' +
                  data + ')" class="btn btn-hover-shine btn-outline-primary" ><i class="fa fa-edit"></i></button></div>';
                return ok;
              },
            },



          ],
        });
      });
    },

    employeeDeactivate(id){
       axios.get('employee/deactivate/'+id).then((response)=>{
          Toast.fire({
              icon: "success",
              title: "Employee Deactivate Successfully",
            });
          this.employeeNameList();
          window.location.reload();
       });
    },

    employeeActivate(id){
       axios.get('employee/activate/'+id).then((response)=>{
          Toast.fire({
              icon: "success",
              title: "Employee Activate Successfully",
            });
          this.employeeNameList();
          window.location.reload();
       });
    },

    editEmployee(id) {
      this.$router.push("/employee@edit" + id);
    },
    employeeDetail(id) {
      this.$router.push("/employee@details" + id);
    },
    showBankType() {
      axios.get("/bankTypeLists").then((res) => {
        this.bankTypeLists = res.data.bankTypeList;
      });
    },
    bankTypeSelect() {
      axios.get("/bankNameLists/" + this.form.bankTypeId).then((res) => {
        this.bankNameLists = res.data.bankNameList;
      });
    },
    employeeTypeList() {
      axios.get("/shopEmployeeEntry/create").then((res) => {
        this.employeeTypeLists = res.data.employeeTypeList;
      });
    },
    employeeTypeSelect() {
      axios
        .get("/shopEmployeeEntry/" + this.form.employeeTypeId)
        .then((res) => {
          this.jobDepartmentLists = res.data.jobDepartmentList;
        });
    },
    employeeNameList() {
      axios.get("/employeeNameList").then((res) => {
        this.employeeNames = res.data.employeeName;
      });
    },
    educationInformation() {
      axios.get("/educationInformation").then((res) => {
        this.instituteLists = res.data.instituteList;
        this.degreeLists = res.data.degreeList;
        this.gradeLists = res.data.gradeList;
        this.skillGradeLists = res.data.skillGradeList;
      });
    },
    educationEntry() {
      this.loading = true;
      this.form
        .post("/educationEntry")
        .then((res) => {
          this.loading = false;
          if (res.data.employeeAlreadyEntry) {
            Toast.fire({
              icon: "error",
              title: "Already Employee Education Information Entry",
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Education Entry Successfully",
            });
            this.form.reset();
          }
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
    },
    professionalEntry() {
      this.loading = true;
      this.form
        .post("/professionalEntry")
        .then((res) => {
          this.loading = false;
          if (res.data.employeeAlreadyEntry) {
            Toast.fire({
              icon: "error",
              title: "Already Employee Professional Information Entry",
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Education Entry Successfully",
            });
            this.form.reset();
          }
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
    },
    skillEntry() {
      this.loading = true;
      this.form
        .post("/skillEntry")
        .then((res) => {
          this.loading = false;
          if (res.data.employeeAlreadyEntry) {
            Toast.fire({
              icon: "error",
              title: "Already Employee Professional Information Entry",
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Education Entry Successfully",
            });
            this.form.reset();
          }
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
    },
    bankingEntry() {
      this.loading = true;
      this.form
        .post("/bankingEntry")
        .then((res) => {
          this.loading = false;
          if (res.data.employeeAlreadyEntry) {
            Toast.fire({
              icon: "error",
              title: "Already Employee Banking Information Entry",
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Education Entry Successfully",
            });
            this.form.reset();
          }
        })
        .catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
    },
  },
  created() {
    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
      },
    });
    window.deleteExpense = this.deleteExpense;
    window.editEmployee = this.editEmployee;
    window.employeeDetail = this.employeeDetail;
    window.employeeDeactivate = this.employeeDeactivate;
    window.employeeActivate = this.employeeActivate;
  },
};
</script>

<style media="screen">
.nav-tabs a {
  color: #495057;
}
button.btn-pill.btn-hover-shine.btn.btn-primary {
  font-size: 13px;
}
a.btn.btn-hover-shine.btn-primary {
  margin-bottom: 0px;
}
</style>
