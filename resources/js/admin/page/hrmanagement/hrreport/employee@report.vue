<template id="">
  <span>

    <div class="row">
      <div class="col-12 col-md-5 col-xs-12"></div>
      <div class="col-12 col-md-4 col-xs-12">
        <button
          type="button"
          @click.prevent="unsuspendList()"
          class="btn btn-hover-shine btn-success"
        >
          Active
        </button>
        <button
          type="button"
          @click.prevent="suspendList()"
          class="btn btn-hover-shine btn-danger"
        >
          Suspend
        </button>
        <button
          type="button"
          @click.prevent="pushList()"
          class="btn btn-hover-shine btn-warning"
        >
          Salary Push
        </button>
        <button
          type="button"
          @click.prevent="closeList()"
          class="btn btn-hover-shine btn-info"
        >
          Close
        </button>
      </div>
      <div class="col-12 col-md-3 col-xs-12"></div>
    </div>
    <div class="card main-card element-block-example">
      <div
        class="card-header"
        style="
          background-color: rgb(1, 176, 241);
          border: 1px solid rgba(0, 0, 0, 0.05);
        "
      >
        <h3 style="color: black">Employee Report</h3>
      </div>
      <div  class=" card-body table-responsive bg-white" v-if="pushin == true">
        <table class="table table-hover table-bordered table-striped">
          <thead>
            <tr class="alert-info">
              <th>SN</th>
             <th>User<span class="textTransparent">_</span>Name</th>
             
              <th>Salary<span class="textTransparent">_</span>Start</th>
              <th>Employee<span class="textTransparent">_</span>Type</th>
              <th>Job<span class="textTransparent">_</span>Department</th>
             
              <th>Grade</th>
              <th>Password</th>
              <th>Full<span class="textTransparent">_</span>Name</th>
              <th>Father<span class="textTransparent">_</span>Name</th>
              <th>Mother<span class="textTransparent">_</span>Name</th>
              <th>Date<span class="textTransparent">_</span>Of<span class="textTransparent">_</span>Birth</th>
              <th>Phone<span class="textTransparent">_</span>Number</th>
              <th>Religion</th>
              <th>Sex</th>
              <th>Marital<span class="textTransparent">_</span>Status</th>
              <th>Nid<span class="textTransparent">_</span>Number</th>
              <th>Nationality</th>
              <th>Present<span class="textTransparent">_</span>Address</th>
              <th>Permanent<span class="textTransparent">_</span>Address</th>
              <!-- <th>Status</th> -->
              <th>Action</th>
              <th>View</th>
              <th>Statement</th>
              <th>Leave</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(employeeList, index) in employeeLists.data">
              <td>{{ index + 1 }}</td>
               <td>{{ employeeList.userName }}</td>
            <td >
              <!-- <td>
                <span v-if=" employeeList.start.salaryMonthYear==1">Jan&nbsp;{{employeeList.start.salaryStartYear}}</span>
                <span v-if=" employeeList.start.salaryMonthYear==2">Feb&nbsp;{{employeeList.start.salaryStartYear}}</span>
                <span v-if=" employeeList.start.salaryMonthYear==3">March&nbsp;{{employeeList.start.salaryStartYear}}</span>
                <span v-if=" employeeList.start.salaryMonthYear==4">April&nbsp;{{employeeList.start.salaryStartYear}}</span>
                <span v-if=" employeeList.start.salaryMonthYear==5">May&nbsp;{{employeeList.start.salaryStartYear}}</span>
                <span v-if=" employeeList.start.salaryMonthYear==6">Jun&nbsp;{{employeeList.start.salaryStartYear}}</span>
                <span v-if=" employeeList.start.salaryMonthYear==7">July&nbsp;{{employeeList.start.salaryStartYear}}</span> -->
              <span v-if=" employeeList.start">  <span v-if=" employeeList.start.salaryMonthYear==1">Jan&nbsp;{{employeeList.start.salaryStartYear}}</span></span>
              <span v-if=" employeeList.start">  <span v-if=" employeeList.start.salaryMonthYear==2">Feb&nbsp;{{employeeList.start.salaryStartYear}}</span></span>
              <span v-if=" employeeList.start">  <span v-if=" employeeList.start.salaryMonthYear==3">March&nbsp;{{employeeList.start.salaryStartYear}}</span></span>
              <span v-if=" employeeList.start">  <span v-if=" employeeList.start.salaryMonthYear==4">April&nbsp;{{employeeList.start.salaryStartYear}}</span></span>
              <span v-if=" employeeList.start">  <span v-if=" employeeList.start.salaryMonthYear==5">May&nbsp;{{employeeList.start.salaryStartYear}}</span></span>
              <span v-if=" employeeList.start">  <span v-if=" employeeList.start.salaryMonthYear==6">Jun&nbsp;{{employeeList.start.salaryStartYear}}</span></span>
              <span v-if=" employeeList.start">  <span v-if=" employeeList.start.salaryMonthYear==7">July&nbsp;{{employeeList.start.salaryStartYear}}</span></span>
              <span v-if=" employeeList.start">  <span v-if=" employeeList.start.salaryMonthYear==8">Aug&nbsp;{{employeeList.start.salaryStartYear}}</span></span>
              <span v-if=" employeeList.start">  <span v-if=" employeeList.start.salaryMonthYear==9">Sep&nbsp;{{employeeList.start.salaryStartYear}}</span></span>
              <span v-if=" employeeList.start">  <span v-if=" employeeList.start.salaryMonthYear==10">Oct&nbsp;{{employeeList.start.salaryStartYear}}</span></span>
              <span v-if=" employeeList.start">  <span v-if=" employeeList.start.salaryMonthYear==11">Nov&nbsp;{{employeeList.start.salaryStartYear}}</span></span>
              <span v-if=" employeeList.start">  <span v-if=" employeeList.start.salaryMonthYear==12">Dec&nbsp;{{employeeList.start.salaryStartYear}}</span></span>
             
                <!-- <span v-if=" employeeList.start.salaryMonthYear==9">Sep&nbsp;{{employeeList.start.salaryStartYear}}</span>
                <span v-if=" employeeList.start.salaryMonthYear==10">Oct&nbsp;{{employeeList.start.salaryStartYear}}</span>
                <span v-if=" employeeList.start.salaryMonthYear==11">Nov&nbsp;{{employeeList.start.salaryStartYear}}</span>
                <span v-if=" employeeList.start.salaryMonthYear==12">Dec&nbsp;{{employeeList.start.salaryStartYear}}</span> -->
              </td>
              <td v-if="employeeList.shop_employee_types">
                {{ employeeList.shop_employee_types.shopEmployeeTypeName }}
              </td>
              <td v-if="employeeList.job_departments">
                {{ employeeList.job_departments.jobDepartmentName }}
              </td>
             
                <td><span v-if="employeeList.grade"><span v-if="employeeList.grade.grade_list">{{ employeeList.grade.grade_list.gradeName }}</span></span></td>
                          <td><span v-if="password==true&&employeeList.shopEmployeeEntryId==eId">{{ employeeList.password }}</span><span @click.prevent="viewPassword(employeeList.shopEmployeeEntryId)" v-else>*****</span></td>
              <td>{{ employeeList.fullName }}</td>
              <td>{{ employeeList.fatherName }}</td>
              <td>{{ employeeList.motherName }}</td>
              <td>{{ employeeList.dateOfBirth }}</td>
              <td>{{ employeeList.phoneNumber }}</td>
              <td>
                <span v-if="employeeList.religion == 1"> Islam </span>
                <span v-if="employeeList.religion == 2"> Hindu </span>
                <span v-if="employeeList.religion == 3"> Ohter </span>
              </td>
              <td>
                <span v-if="employeeList.sex == 1"> Male </span>
                <span v-if="employeeList.sex == 2"> Female </span>
              </td>
              <td>
                <span v-if="employeeList.maritalStatus == 1"> Single </span>
                <span v-if="employeeList.maritalStatus == 2"> Married </span>
              </td>
              <td>{{ employeeList.nidNumber }}</td>
              <td>{{ employeeList.nationality }}</td>
              <td>{{ employeeList.presentAddress }}</td>
              <td>{{ employeeList.permanentAddress }}</td>
              <!-- <td>
                     <div v-if="employeeList.status == 1">
                        <button type="button"   class="btn btn-hover-shine btn-success">
                          Active
                        </button>
                     </div>
                     <div v-else>
                        <button type="button"  class="btn btn-hover-shine btn-danger">
                           Suspend
                        </button>
                     </div>
                  </td> -->
              <td>
                <div class="dropdown">
                  <button class="dropbtn">
                    <i class="fa fa-cogs" aria-hidden="true"></i> Select
                    Operation
                  </button>
                  <div class="dropdown-content">
                    <a
                      href="#"
                      v-if="
                        employeeList.status != 2 && employeeList.status != 3
                      "
                      data-toggle="modal"
                      :data-target="
                        '#' + 'suspend' + employeeList.shopEmployeeEntryId
                      "
                      >Suspend</a
                    >

                    <a
                      href="# "
                      v-if="
                        employeeList.status != 1 && employeeList.status != 3
                      "
                      data-toggle="modal"
                      :data-target="
                        '#' + 'unsuspend' + employeeList.shopEmployeeEntryId
                      "
                      >Unsuspend</a
                    >
                    <a
                      href="#"
                      v-if="
                        employeeList.status != 2 && employeeList.status != 1
                      "
                      data-toggle="modal"
                      :data-target="
                        '#' + 'rejoin' + employeeList.shopEmployeeEntryId
                      "
                      >Rejoining</a
                    >
                    <a
                      href="#"
                      v-if="
                        employeeList.status != 2 &&
                        employeeList.salaryStatus != 2 &&
                        employeeList.status != 3
                      "
                      data-toggle="modal"
                      :data-target="
                        '#' + 'salarypush' + employeeList.shopEmployeeEntryId
                      "
                      >Salary Push
                    </a>
                    <a
                      href="#"
                      v-if="
                        employeeList.status != 2 && employeeList.status != 3
                      "
                      data-toggle="modal"
                      :data-target="
                        '#' + 'close' + employeeList.shopEmployeeEntryId
                      "
                      >Close
                    </a>
                  </div>
                  <!-- suspend Modal -->
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    :id="'suspend' + employeeList.shopEmployeeEntryId"
                    tabindex="-1"
                    role="dialog"
                    :aria-labelledby="
                      'suspend' + employeeList.shopEmployeeEntryId
                    "
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Note
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1"
                              >Reason</label
                            >
                            <textarea
                              class="form-control"
                              v-model="form.reason"
                              id="exampleFormControlTextarea1"
                              rows="3"
                            ></textarea>
                          </div>
                          <div class="form-group">
                            <label> Date</label>
                            <input
                              type="date"
                              v-model="form.date"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                             data-dismiss="modal"
                            @click.prevent="
                              suspend(employeeList.shopEmployeeEntryId)
                            "
                            class="btn btn-primary"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- unsuspend Modal -->
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    :id="'unsuspend' + employeeList.shopEmployeeEntryId"
                    tabindex="-1"
                    role="dialog"
                    :aria-labelledby="
                      'unsuspend' + employeeList.shopEmployeeEntryId
                    "
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Note
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1"
                              >Reason</label
                            >
                            <textarea
                              class="form-control"
                              v-model="form.reason"
                              id="exampleFormControlTextarea1"
                              rows="3"
                            ></textarea>
                          </div>
                          <div class="form-group">
                            <label> Date</label>
                            <input
                              type="date"
                              v-model="form.date"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                             data-dismiss="modal"
                            @click.prevent="
                              unsuspend(employeeList.shopEmployeeEntryId)
                            "
                            class="btn btn-primary"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- salary push Modal -->
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    :id="'salarypush' + employeeList.shopEmployeeEntryId"
                    tabindex="-1"
                    role="dialog"
                    :aria-labelledby="
                      'salarypush' + employeeList.shopEmployeeEntryId
                    "
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Note
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1"
                              >Reason</label
                            >
                            <textarea
                              class="form-control"
                              v-model="form.reason"
                              id="exampleFormControlTextarea1"
                              rows="3"
                            ></textarea>
                          </div>
                          <div class="form-group">
                            <label> Date</label>
                            <input
                              type="date"
                              v-model="form.date"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            data-dismiss="modal"
                            @click.prevent="
                              salarypush(employeeList.shopEmployeeEntryId)
                            "
                            class="btn btn-primary"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- salary close Modal -->
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    :id="'close' + employeeList.shopEmployeeEntryId"
                    tabindex="-1"
                    role="dialog"
                    :aria-labelledby="
                      'close' + employeeList.shopEmployeeEntryId
                    "
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Note
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1"
                              >Reason</label
                            >
                            <textarea
                              class="form-control"
                              v-model="form.reason"
                              id="exampleFormControlTextarea1"
                              rows="3"
                            ></textarea>
                          </div>
                          <div class="form-group">
                            <label> Date</label>
                            <input
                              type="date"
                              v-model="form.date"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            data-dismiss="modal"
                            @click.prevent="
                              close(employeeList.shopEmployeeEntryId)
                            "
                            class="btn btn-primary"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Rejoining Modal -->
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    :id="'rejoin' + employeeList.shopEmployeeEntryId"
                    tabindex="-1"
                    role="dialog"
                    :aria-labelledby="
                      'rejoin' + employeeList.shopEmployeeEntryId
                    "
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Note
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1"
                              >Reason</label
                            >
                            <textarea
                              class="form-control"
                              v-model="form.reason"
                              id="exampleFormControlTextarea1"
                              rows="3"
                            ></textarea>
                          </div>
                          <div class="form-group">
                            <label> Date</label>
                            <input
                              type="date"
                              v-model="form.date"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            data-dismiss="modal"
                            @click.prevent="
                              rejoin(employeeList.shopEmployeeEntryId)
                            "
                            class="btn btn-primary"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <router-link
                  :to="`/employee@details${employeeList.shopEmployeeEntryId}`"
                  class="btn btn-hover-shine btn-primary"
                  ><i class="fa fa-eye"></i>View</router-link
                >
              </td>
              <td>
                <router-link
                  :to="`/employeeStatement${employeeList.shopEmployeeEntryId}`"
                  class="btn btn-hover-shine btn-primary"
                  ><i class="fa fa-eye"></i>Statement</router-link
                >
              </td>
              <td>
                <router-link
                  :to="`/leave@statement${employeeList.shopEmployeeEntryId}`"
                  class="btn btn-hover-shine btn-warning"
                  ><i class="fa fa-eye"></i>Leave</router-link
                >
              </td>
              <!-- <td> -->
              <!-- <select class="form-control">
    <option value=""> Select Salary Status </option>
    <option value="1"> Active </option>
    <option value="2"> Inactive </option>
    <option value="3"> Salary Push </option>
  </select> -->
              <!-- </td> -->
            </tr>
          </tbody>
        </table>
      </div>
       <div  class=" card-body table-responsive bg-white" v-if="pushin == false">
        <table class="table table-hover table-bordered table-striped">
          <thead>
            <tr class="alert-info">
                <th>SN</th>
              <th>Employee<span class="textTransparent">_</span>Type</th>
              <th>Job<span class="textTransparent">_</span>Department</th>
              <th>User<span class="textTransparent">_</span>Name</th>
              <th>Grade</th>
              <th>Password</th>
              <th>Full<span class="textTransparent">_</span>Name</th>
              <th>Father<span class="textTransparent">_</span>Name</th>
              <th>Mother<span class="textTransparent">_</span>Name</th>
              <th>Date<span class="textTransparent">_</span>Of<span class="textTransparent">_</span>Birth</th>
              <th>Phone<span class="textTransparent">_</span>Number</th>
              <th>Religion</th>
              <th>Sex</th>
              <th>Marital<span class="textTransparent">_</span>Status</th>
              <th>Nid<span class="textTransparent">_</span>Number</th>
              <th>Nationality</th>
              <th>Present<span class="textTransparent">_</span>Address</th>
              <th>Permanent<span class="textTransparent">_</span>Address</th>
              <!-- <th>Status</th> -->
              <th>Action</th>
              <th>View</th>
             
            </tr>
          </thead>
          <tbody>
            <tr v-for="(employeeList, index) in employeeLists.data" :key="employeeList.id">
              <td>{{ index + 1 }}</td>
              <td v-if="employeeList.shop_employee_types">
                {{ employeeList.shop_employee_types.shopEmployeeTypeName }}
              </td>
              <td v-if="employeeList.job_departments">
                {{ employeeList.job_departments.jobDepartmentName }}
              </td>
              <td>{{ employeeList.userName }}</td>
              <td><span v-if="employeeList.grade"><span v-if="employeeList.grade.grade_list">{{ employeeList.grade.grade_list.gradeName }}</span></span></td>
                <td><span v-if="password==true&&employeeList.shopEmployeeEntryId==eId">{{ employeeList.password }}</span><span @click.prevent="viewPassword(employeeList.shopEmployeeEntryId)" v-else>*****</span></td>
              <td>{{ employeeList.fullName }}</td>
              <td>{{ employeeList.fatherName }}</td>
              <td>{{ employeeList.motherName }}</td>
              <td>{{ employeeList.dateOfBirth }}</td>
              <td>{{ employeeList.phoneNumber }}</td>
              <td>
                <span v-if="employeeList.religion == 1"> Islam </span>
                <span v-if="employeeList.religion == 2"> Hindu </span>
                <span v-if="employeeList.religion == 3"> Ohter </span>
              </td>
              <td>
                <span v-if="employeeList.sex == 1"> Male </span>
                <span v-if="employeeList.sex == 2"> Female </span>
              </td>
              <td>
                <span v-if="employeeList.maritalStatus == 1"> Single </span>
                <span v-if="employeeList.maritalStatus == 2"> Married </span>
              </td>
              <td>{{ employeeList.nidNumber }}</td>
              <td>{{ employeeList.nationality }}</td>
              <td>{{ employeeList.presentAddress }}</td>
              <td>{{ employeeList.permanentAddress }}</td>
              <!-- <td>
                     <div v-if="employeeList.status == 1">
                        <button type="button"   class="btn btn-hover-shine btn-success">
                          Active
                        </button>
                     </div>
                     <div v-else>
                        <button type="button"  class="btn btn-hover-shine btn-danger">
    <div class="card main-card  element-block-example">
        <div class="card-header alert-info">
          <h3>Employee Report</h3>
        </div>
        <div class="card-body table-responsive comm-form-back-img comm-form-box-back-color">
        <table class="table table-hover table-striped table-bordered ">
            <thead>
            <tr class="alert-info">
              <th>SN</th>
              <th>Employee<span class="textTransparent">_</span>Type</th>
              <th>Job<span class="textTransparent">_</span>Department</th>
              <th>User<span class="textTransparent">_</span>Name</th>
              <th>Password</th>
              <th>Full<span class="textTransparent">_</span>Name</th>
              <th>Father<span class="textTransparent">_</span>Name</th>
              <th>Mother<span class="textTransparent">_</span>Name</th>
              <th>Date<span class="textTransparent">_</span>Of<span class="textTransparent">_</span>Birth</th>
              <th>Phone<span class="textTransparent">_</span>Number</th>
              <th>Religion</th>
              <th>Gender</th>
              <th>Marital<span class="textTransparent">_</span>Status</th>
              <th>Nid<span class="textTransparent">_</span>Number</th>
              <th>Nationality</th>
              <th>Present<span class="textTransparent">_</span>Address</th>
              <th>Permanent<span class="textTransparent">_</span>Address</th>
              <th>Status</th>
              <th>Statement</th>
              <th>Action</th>
            </tr>
          </thead>
              <tbody>
                <tr v-for="(employeeList, index) in employeeLists.data">
                  <td>{{ index+1 }}</td>
                  <td v-if="employeeList.shop_employee_types">{{ employeeList.shop_employee_types.shopEmployeeTypeName	 }}</td>
                  <td v-if="employeeList.job_departments">{{ employeeList.job_departments.jobDepartmentName	 }}</td>
                  <td>{{ employeeList.userName	 }}</td>
                  <td>{{ employeeList.password	 }}</td>
                  <td>{{ employeeList.fullName	 }}</td>
                  <td>{{ employeeList.fatherName	 }}</td>
                  <td>{{ employeeList.motherName	 }}</td>
                  <td>{{ employeeList.dateOfBirth	 }}</td>
                  <td>{{ employeeList.phoneNumber	 }}</td>
                  <td>
                      <span v-if="employeeList.religion == 1">
                        Islam
                      </span>
                      <span v-if="employeeList.religion == 2">
                        Hindu
                      </span>
                      <span v-if="employeeList.religion == 3">
                        Ohter
                      </span>
                  </td>
                  <td>
                      <span v-if="employeeList.sex == 1">
                        Male
                      </span>
                      <span v-if="employeeList.sex == 2">
                        Female
                      </span>
                  </td>
                  <td>
                      <span v-if="employeeList.maritalStatus == 1">
                        Single
                      </span>
                      <span v-if="employeeList.maritalStatus == 2">
                        Married
                      </span>
                  </td>
                  <td>{{ employeeList.nidNumber	}}</td>
                  <td>{{ employeeList.nationality }}</td>
                  <td>{{ employeeList.presentAddress	}}</td>
                  <td>{{ employeeList.permanentAddress }}</td>
                  <td>
                     <div v-if="employeeList.status == 1">
                        <span @click="changeStatus(employeeList.shopEmployeeEntryId)" class="badge btn-hover-shine badge-success">
                          Unsuspend
                        </span>
                     </div>
                     <div v-else>
                        <span @click="changeStatus(employeeList.shopEmployeeEntryId)" class="badge btn-hover-shine badge-danger">
                           Suspend
                        </span>
                     </div>
                  </td>
                  <td>
                      <span v-if="employeeList.sex == 1">
                        Male
                      </span>
                      <span v-if="employeeList.sex == 2">
                        Female
                      </span>
                  </td>
                  <td>
                      <span v-if="employeeList.maritalStatus == 1">
                        Single
                      </span>
                      <span v-if="employeeList.maritalStatus == 2">
                        Married
                      </span>
                  </td>
                           Suspend
                        </span>
                     </div>
                  </td> -->
              <td>
                <div class="dropdown">
                  <button class="dropbtn">
                    <i class="fa fa-cogs" aria-hidden="true"></i> Select
                    Operation
                  </button>
                  <div class="dropdown-content">
                    <a
                      href="#"
                      data-toggle="modal"
                      :data-target="
                        '#' + 'active' + employeeList.shopEmployeeEntryId
                      "
                      >Salary Active</a
                    >
                  </div>
                  <!-- suspend Modal -->
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    :id="'active' + employeeList.shopEmployeeEntryId"
                    tabindex="-1"
                    role="dialog"
                    :aria-labelledby="
                      'active' + employeeList.shopEmployeeEntryId
                    "
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Note
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1"
                              >Reason</label
                            >
                            <textarea
                              class="form-control"
                              v-model="form.reason"
                              id="exampleFormControlTextarea1"
                              rows="3"
                            ></textarea>
                          </div>
                          <div class="form-group">
                            <label> Date</label>
                            <input
                              type="date"
                              v-model="form.date"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                           data-dismiss="modal"
                            type="button"
                            @click.prevent="
                              activeSalary(employeeList.shopEmployeeEntryId)
                            "
                            class="btn btn-primary"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <router-link
                  :to="`/employee@details${employeeList.shopEmployeeEntryId}`"
                  class="btn btn-hover-shine btn-primary"
                  ><i class="fa fa-eye"></i>View</router-link
                >
              </td>
              <!-- <td> -->
              <!-- <select class="form-control">
    <option value=""> Select Salary Status </option>
    <option value="1"> Active </option>
    <option value="2"> Inactive </option>
    <option value="3"> Salary Push </option>
  </select> -->
              <!-- </td> -->
            </tr>
          </tbody>
        </table>
               
         </div>
         <span class="card_footer">
           <pagination :data="employeeLists" :limit="limit"  @pagination-change-page="getPaginateReport">
             <span slot="prev-nav">&lt; Previous</span>
             <span slot="next-nav">Next &gt;</span>
           </pagination>
        </span>

      </div>
      <span class="card_footer">
        <pagination
          :data="employeeLists"
          :limit="limit"
          @pagination-change-page="getPaginateReport"
        >
          <span slot="prev-nav">&lt; Previous</span>
          <span slot="next-nav">Next &gt;</span>
        </pagination>
      </span>
    </div>
  </span>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        reason: "",
        date: "",
      }),
      employeeLists: {},
      pushin: true,
      password:false,
      eId:''
    };
  },
  props: {
    limit: {
      type: Number,
      default: 2,
    },
  },
  mounted() {
    this.employeeReport();
    this.getPaginateReport();
  },
  methods: {
    employeeReport() {
      axios.get("/employeeReport").then((res) => {
        this.employeeLists = res.data.employeeList;
      });
    },
    unsuspendList() {
      axios.get("/employeeReport").then((res) => {
        this.pushin = true;
        this.employeeLists = res.data.employeeList;
      });
    },
    viewPassword(id){
       this.password=true,
       this.eId=id
    },
    suspendList() {
      axios.get("/suspendList").then((res) => {
        this.pushin = true;
        this.employeeLists = res.data.employeeList;
      });
    },
    pushList() {
      axios.get("/pushList").then((res) => {
        this.pushin = false;
        this.employeeLists = res.data.employeeList;
      });
    },
    closeList() {
      axios.get("/closeList").then((res) => {
        this.pushin = true;
        this.employeeLists = res.data.employeeList;
      });
    },
    getPaginateReport(page = 1) {
      axios.get("/employeeReport?page=" + page).then((response) => {
        this.employeeLists = response.data.employeeList;
      });
    },
    suspend(shopEmployeeEntryId) {
      this.form.post("/suspend/" + shopEmployeeEntryId).then((res) => {
        this.unsuspendList();
      });
    },
    unsuspend(shopEmployeeEntryId) {
      this.form.post("/unsuspend/" + shopEmployeeEntryId).then((res) => {
        this.suspendList();
      });
    },
    salarypush(shopEmployeeEntryId) {
      this.form.post("/salarypush/" + shopEmployeeEntryId).then((res) => {
        this.unsuspendList();
      });
    },
    activeSalary(shopEmployeeEntryId) {
      this.form.post("/salaryactive/" + shopEmployeeEntryId).then((res) => {
        this.pushList();
      });
    },
    close(shopEmployeeEntryId) {
      this.form.post("/close/" + shopEmployeeEntryId).then((res) => {
        this.unsuspendList();
      });
    },
    rejoin(shopEmployeeEntryId) {
      this.form.post("/rejoin/" + shopEmployeeEntryId).then((res) => {
        this.closeList();
      });
    },
  },
};
</script>
