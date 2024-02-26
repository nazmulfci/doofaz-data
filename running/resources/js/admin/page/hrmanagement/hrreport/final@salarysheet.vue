<template id="">
  <span>
    <div class="card main-card element-block-example">
      <div class="card-header alert-info">
        <h3>Basic Salary Sheet</h3>
      </div>
      <div style="margin: auto; padding: 22px">
        <span>Select Month</span>
        <month-picker-input
          @change="showDate"
          :no-default="true"
        ></month-picker-input>
      </div>
      <div class="row">
        <div class="col-12 col-md-5 col-xs-12"></div>
        <div class="col-12 col-md-4 col-xs-12">
          <button
            type="button"
            @click.prevent="pendingSalary()"
            class="btn btn-hover-shine btn-primary"
          >
            Pending
          </button>
          <button
            type="button"
            @click.prevent="dueSalary()"
            class="btn btn-hover-shine btn-danger"
          >
            Due
          </button>

          <button
            type="button"
            @click.prevent="paidSalary()"
            class="btn btn-hover-shine btn-success"
          >
            Paid
          </button>
        </div>
        <div class="col-12 col-md-3 col-xs-12"></div>
      </div>



      <div>
        
          <button
            type="button"
            onclick="jQuery('#finalSalarySheet').print()"
            class="btn btn-info ml-3"
          >
            <i class="fa fa-print"></i> Print
          </button>
        
      </div>
      
      <div id="finalSalarySheet" class="table-responsive bg-white p-2">

 
        <header
                                  :style="
                                    'border-bottom-color:' + gets.themeColor
                                  "
                                  style="margin-bottom: 5px !important"
                                >
                                  <div class="row" v-if="gets.logo">
                                    <div class="col">
                                      <a target="_blank" href="#">
                                        <img
                                          :src="
                                            'images/invoice_logo/' + gets.logo
                                          "
                                          style="
                                            max-height: 105px;
                                            max-width: 100%;
                                          "
                                        />
                                      </a>
                                    </div>
                                    <div class="col company-details">
                                      <!-- <h2 class="name">
                            <a target="_blank" href="#">
                            
                            </a>
                        </h2> -->

                                      <div>{{ gets.address }}</div>
                                      <div>{{ gets.mobileNo }}</div>
                                      <div>{{ gets.email }}</div>
                                      <div>{{ gets.website }}</div>
                                    </div>
                                  </div>

                                  <div class="row" v-else>
                                    <div class="col text-center">
                                      <h3 class="text-uppercase">
                                        <b> {{ gets.companyName }} </b>
                                      </h3>
                                      <div>{{ gets.address }}</div>
                                      <div>{{ gets.mobileNo }}</div>
                                      <div>{{ gets.email }}</div>
                                      <div>{{ gets.website }}</div>
                                    </div>
                                  </div>
                                </header>




        <table class="table table-hover table-bordered mb-0">
          <thead>
            <tr class="alert-info">
              <th>SN</th>
              <th>Month</th>
              <th>Employee<span class="textTransparent">_</span>Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Employee<span class="textTransparent">_</span>Name</th>
              <th>
                Salary<span class="textTransparent">_</span>Grade<span
                  class="textTransparent"
                  >_</span
                >Name
              </th>
              <th>
                Salary<span class="textTransparent">_</span>Grade<span
                  class="textTransparent"
                  >_</span
                >Amount
              </th>
              <th>Deduct<span class="textTransparent">_</span>Amount</th>
              <th>Paid<span class="textTransparent">_</span>Amount</th>
              <th>Net<span class="textTransparent">_</span>Amount</th>
              <th>Status</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(salarySheetReport, index) in salarySheetReports.data"
              :key="salarySheetReport.id"
            >
              <td>{{ index + 1 }}</td>
              <td>
                <span v-if="salarySheetReport.salaryStartMonth == 1"
                  >January</span
                >
                <span v-if="salarySheetReport.salaryStartMonth == 2"
                  >February</span
                >
                <span v-if="salarySheetReport.salaryStartMonth == 3"
                  >March</span
                >
                <span v-if="salarySheetReport.salaryStartMonth == 4"
                  >April</span
                >
                <span v-if="salarySheetReport.salaryStartMonth == 5">May</span>
                <span v-if="salarySheetReport.salaryStartMonth == 6">June</span>
                <span v-if="salarySheetReport.salaryStartMonth == 7">July</span>
                <span v-if="salarySheetReport.salaryStartMonth == 8"
                  >August</span
                >
                <span v-if="salarySheetReport.salaryStartMonth == 9"
                  >Sptember</span
                >
                <span v-if="salarySheetReport.salaryStartMonth == 10"
                  >October</span
                >
                <span v-if="salarySheetReport.salaryStartMonth == 11"
                  >November</span
                >
                <span v-if="salarySheetReport.salaryStartMonth == 12"
                  >December</span
                >
              </td>
              <td>{{ salarySheetReport.shop_employee_name.userName }}</td>
              <td>{{ salarySheetReport.shop_employee_name.job_departments.jobDepartmentName }}</td>
              <td><span v-if="salarySheetReport.shop_employee_name.shop_employee_types">{{ salarySheetReport.shop_employee_name.shop_employee_types.shopEmployeeTypeName }}</span></td>
              <td>{{ salarySheetReport.shop_employee_name.fullName }}</td>
              <td>{{ salarySheetReport.grade_entry_list.gradeName }}</td>
              <td>{{ salarySheetReport.amount }}</td>
              <td>{{ salarySheetReport.deductAmount }}</td>
              <td>
                {{ salarySheetReport.amount - salarySheetReport.netAmount }}
              </td>
              <td>{{ salarySheetReport.netAmount }}</td>
              <td>
                <span v-if="salarySheetReport.paymentStatus == 0">
                  <span class="badge btn-hover-shine badge-info">Pending</span>
                </span>
                <span v-if="salarySheetReport.paymentStatus == 2">
                  <span class="badge btn-hover-shine badge-danger">Due</span>
                </span>
                <span v-if="salarySheetReport.paymentStatus == 1">
                  <span class="badge btn-hover-shine badge-success">Paid</span>
                </span>
              </td>

              <td>
                <span
                  v-if="
                    salarySheetReport.shop_employee_name.salaryStatus == 1 &&
                    salarySheetReport.paymentStatus != 1
                  "
                >
                  <button
                    @click.prevent="employeeInfo(salarySheetReport.employeeId)"
                    class="btn btn-hover-shine btn-warning"
                    data-toggle="modal"
                    :data-target="'#' + 'pay' + salarySheetReport.employeeId"
                  >
                    Pay<span class="textTransparent">_</span>Now
                  </button>
                </span>
                <span
                  v-if="salarySheetReport.shop_employee_name.salaryStatus == 2"
                >
                  <button
                    disabled
                    @click.prevent="employeeInfo(salarySheetReport.employeeId)"
                    class="btn btn-hover-shine btn-warning"
                    data-toggle="modal"
                    :data-target="'#' + 'pay' + salarySheetReport.employeeId"
                  >
                    Pay<span class="textTransparent">_</span>Now
                  </button>
                </span>
                <!-- Pay Modal -->
                <!-- Modal -->
                <div
                  class="modal fade"
                  :id="'pay' + salarySheetReport.employeeId"
                  tabindex="-1"
                  role="dialog"
                  :aria-labelledby="'deduct' + salarySheetReport.employeeId"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Salary Pay
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
                        <div class="form-group" style="display: none">
                          <label for="exampleInputEmail1">Name</label>
                          <input
                            disabled
                            type="text"
                            class="form-control"
                            v-model="form.employeeId"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Name</label>
                          <input
                            disabled
                            type="text"
                            class="form-control"
                            :value="
                              salarySheetReport.shop_employee_name.userName
                            "
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Mobile</label>
                          <input
                            type="text"
                            class="form-control"
                            disabled
                            :value="
                              salarySheetReport.shop_employee_name.phoneNumber
                            "
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Amount"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Department</label>
                          <input
                            type="text"
                            disabled
                            class="form-control"
                            :value="
                              salarySheetReport.shop_employee_name
                                .job_departments.jobDepartmentName
                            "
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Amount"
                          />
                        </div>
                        <div class="form-group">
                          <label> Payment Type 

                            <span v-if="available_balance_cash_status" class="badge badge-primary">
                              {{form.available_balance}}
                            </span>

                          </label>
                          <select
                            v-model="form.paymentType"
                            @change="paymentReceiveType()"
                            class="form-control"
                            :class="{
                              'is-invalid': form.errors.has('paymentType'),
                            }"
                          >
                            <option value="">Select Payment Type</option>
                            <option
                              v-for="paymentTypeList in paymentTypeLists"
                              :key="paymentTypeList.id"
                              :value="paymentTypeList.id"
                            >
                              <span v-if="paymentTypeList.id < 3">
                                {{ paymentTypeList.paymentType }}
                              </span>
                            </option>
                          </select>
                          <has-error
                            :form="form"
                            field="paymentType"
                          ></has-error>
                          
                    <small class="badge badge-danger" v-if="insufficent_cash_balance_text_status">
                      Insufficent Balance
                    </small>

                        </div>

                        <div v-if="bankInformationStatus">
                          <div class="form-group">
                            <label>Bank Type Name</label>
                            <select
                              v-model="form.bankTypeEntryId"
                              name="bankTypeEntryId"
                              class="form-control"
                              :class="{
                                'is-invalid':
                                  form.errors.has('bankTypeEntryId'),
                              }"
                              @change.prevent="bankTypeIdCatch()"
                            >
                              <option value="">Select One</option>
                              <option
                                v-for="showBankTypeData in showBankTypeDatas"
                                :key="showBankTypeData.id"
                                :value="showBankTypeData.bankTypeEntryId"
                              >
                                {{ showBankTypeData.bankTypeEntryName }}
                              </option>
                            </select>
                            <has-error
                              :form="form"
                              field="bankTypeEntryId"
                            ></has-error>
                          </div>

                          <div class="form-group">
                            <label>Bank Name</label>
                            <select
                              v-model="form.bankEntryId"
                              name="bankEntryId"
                              class="form-control"
                              :class="{
                                'is-invalid': form.errors.has('bankEntryId'),
                              }"
                              @change.prevent="bankAccountIdCatch()"
                            >
                              <option value="">Select Bank Name</option>
                              <option
                                v-for="showBankName in showBankNames"
                                :value="showBankName.bankEntryId"
                                :key="showBankName.id"
                              >
                                {{ showBankName.bankName }}
                              </option>
                            </select>
                            <has-error
                              :form="form"
                              field="bankEntryId"
                            ></has-error>
                          </div>

                          <div class="form-group">
                            <label> Account No

                               <span v-if="available_balance_status" class="badge badge-primary">
                                  {{available_balance_text}}
                                </span>

                            </label>
                            <select
                              v-model="form.bankAccountId"
                              name="bankAccountId"
                              class="form-control"
                              :class="{
                                'is-invalid': form.errors.has('bankAccountId'),
                              }"
                              @change="getBankMoreInfo()"
                            >
                              <option value="">Select Bank Account</option>
                              <option
                                v-for="showBankAccount in showBankAccounts"
                                :value="showBankAccount.bankId"
                                :key="showBankAccount.id"
                              >
                                <span v-if="showBankAccount.bankAccountName">
                                  {{ showBankAccount.bankAccountName }}
                                </span>

                                <span v-else>
                                  {{ showBankAccount.bankAccountNumber }}
                                </span>
                              </option>
                            </select>
                            <has-error
                              :form="form"
                              field="bankAccountId"
                            ></has-error>
                             
                              <input type="hidden" v-model="form.available_balance">
                              <small class="badge badge-danger" v-if="insufficent_bank_balance_text_status">
                                  Insufficient Balance
                                </small>

                          </div>

                          <div v-if="bankInformationAccountInfoStatus">
                            <div class="form-group">
                              <label> Branch Name </label>
                              <input
                                type="text"
                                v-model="form.branchName"
                                class="form-control"
                                readonly
                              />
                            </div>

                            <div class="form-group">
                              <label> Account No </label>
                              <input
                                type="text"
                                v-model="form.accNo"
                                class="form-control"
                                readonly
                              />
                            </div>
                          </div>
                          <div v-if="bankAccount">
                            <div class="form-group">
                              <label> Receiver Bank Name </label>
                              <input
                                type="text"
                                v-model="form.receiverBankName"
                                class="form-control"
                              />
                            </div>
                            <div class="form-group">
                              <label> Receiver A/C No </label>
                              <input
                                type="text"
                                v-model="form.receiverAcNo"
                                class="form-control"
                              />
                            </div>
                            <div class="form-group">
                              <label> Receiver A/C Name </label>
                              <input
                                type="text"
                                v-model="form.receiverAcName"
                                class="form-control"
                              />
                            </div>
                            <div class="form-group">
                              <label> Branch </label>
                              <input
                                type="text"
                                v-model="form.receiverBranchName"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div v-if="bankAccount">
                            <div class="form-group">
                              <label> Receiver Bank Name </label>
                              <input
                                type="text"
                                v-model="form.receiverBankName"
                                class="form-control"
                              />
                            </div>
                            <div class="form-group">
                              <label> Receiver A/C No </label>
                              <input
                                type="text"
                                v-model="form.receiverAcNo"
                                class="form-control"
                              />
                            </div>
                            <div class="form-group">
                              <label> Receiver  A/C Name </label>
                              <input
                                type="text"
                                v-model="form.receiverAcName"
                                class="form-control"
                              />
                            </div>
                            
                          </div>
                          <div v-if="mobileAccount">
                            <div class="form-group">
                              <label> Receiver Mobile A/C No </label>
                              <input
                                type="text"
                                v-model="form.receiverMobileAcNo"
                                class="form-control"/>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Receiver Name</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="form.receiverName"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Receiver Phone</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="form.receiverMobile"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Payable Amount</label>
                          <input
                            disabled
                            type="text"
                            class="form-control"
                            v-model="form.payable"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Pay Amount</label>
                          <input
                            type="text"
                            class="form-control"
                            @keyup.prevent="payCalculate()"
                            @keyup="calculate"
                            v-model="form.payAmount"
                            :class="{ 'is-invalid': form.errors.has('payAmount') }"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          <has-error :form="form" field="payAmount"></has-error>
                          
                          <span v-if="invalid" style="color:red">Negative And Character VAlue Not Allowed </span>
                          <input
                            type="hidden"
                            class="form-control"
                            v-model="form.cashAmount"
                          />
                          <input
                            type="hidden"
                            class="form-control"
                            v-model="form.bankAmount"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Due Amount</label>
                          <input
                            disabled
                            type="text"
                            class="form-control"
                            v-model="form.dueAmount"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>

                        <div class="form-group">
                          <label for="exampleFormControlTextarea1">Note</label>
                          <textarea
                            class="form-control"
                            v-model="form.note"
                            id="exampleFormControlTextarea1"
                            rows="3"
                          ></textarea>
                        </div>
                          <!-- <div class="form-group">
             <div style="margin: auto; padding: 22px">
        <span>Select Month</span>
        <month-picker-input
          @change="showDt"
          :no-default="true"
        ></month-picker-input>
      </div>
            </div> -->
                        <div class="form-group">
                          <label> Date</label>
                          <input
                            type="date"
                            v-model="form.payDate"
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
                        v-if="submit_button"
                          type="button"
                          :disabled="loading"
                          @click.prevent="paySalary(salarySheetReport.employeeId)"
                          class="btn btn-primary">

                          <span
                            v-if="loading"
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Save changes
                        </button>
                        <button
                        v-if="insufficent_button"
                          type="button" 
                          class="btn btn-danger">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr class="text-center" v-if="noRecode">
              <td colspan="8">No Record Available</td>
            </tr>
          </tbody>
        </table>
      </div>
      <span class="card_footer" v-if="recode">
        <pagination
          :data="salarySheetReports"
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

<style>
  .month-picker__container{
    z-index:1;
  }
</style>

<script>
import moment from "moment";
import { MonthPicker } from "vue-month-picker";
import { MonthPickerInput } from "vue-month-picker";

Vue.use(MonthPicker);
Vue.use(MonthPickerInput);
export default {
  data() {
    return {
      form: new Form({
        cashAmount: "",
        bankAmount: "",
        employeeId: "",
        bankTypeEntryId: "",
        monthlyPayment: "",
        bankEntryId: "",
        bankAccountId: "",
        branchName: "",
        note: "",
        payDate: new Date().toISOString().slice(0, 10),
        paymentType: "",
        accNo: "",
        payable: "",
        payAmount: "",
        dueAmount: "",
        receiverBankName: "",
        receiverAcNo: "",
        receiverAcName: "",
        receiverBranchName: "",
        receiverMobileAcNo: "",
        receiverName: "",
        receiverMobile: "",
        month: "",
        year: "",
       		monthInfo: '',      
				from: null,
				to: null,
			
        monthIndex:null,
				
                    
                    // for validation
                    available_balance: '',
                    // /for validation
      }),


                    // for validation
                    available_balance_cash_status : false,
                    available_balance_cash_text : '',
                    available_balance_text:'',
                    available_balance_status:false,
                    submit_button_status : true,
                    available_button_status : false,
                    available_text:'',
                    insufficent_cash_balance_text_status:false,
                    insufficent_bank_balance_text_status:false,
                    insufficent_balance_text_status:false,
                    insufficent_button:false,
                    submit_button:true,
                    // /for validation


      bankInformationStatus: 0,
      cashInformationStatus: 0,
      bankInformationAccountInfoStatus: 0,

      employeeNames: {},
      salarySheetReports: {},
      paymentTypeLists: {},
      showBankNames: [],
      showBankAccounts: [],
      recode: true,
      gets: "",
      workDay: "",
      date: {
        from: null,
        to: null,
        month: null,
        monthIndex: null,
        year: null,
      },
      present: "",
      noRecode: false,
      bankAccount: false,
      bankCardAccount: false,
      mobileAccount: false,
      loading: false,
      invalid: false,
    };
  },
  props: {
    limit: {
      type: Number,
      default: 2,
    },
  },
  components: {
    MonthPicker,
    MonthPickerInput,
  },
  mounted() {
    this.salarySheetReport();
    this.getPaginateReport();
    this.getData();
    this.getInvoiceSetupInformation();
  },
  methods: {

        getInvoiceSetupInformation() {
      let uri = `getInvoiceSetupInformation/2`;
      axios.get(uri).then((response) => {
        this.gets = response.data.data;
      });
    },


     showDt (date) {
          
			        this.form.year = date.year,
			        this.form.monthIndex = date.monthIndex
			        this.form.monthInfo = date.year+'-'+date.monthIndex+'-'+'01'
             
      },
    paySalary(id) {
      (this.form.year = this.date.year),
        (this.form.month = this.date.monthIndex),
        (this.loading = true);

      this.form
        .post("salaryPay")
        .then((res) => {
          this.loading = false; 
          
          $('#pay'+id).modal("hide");
          Toast.fire({
            icon: "success",
            title: "Successfully Salary Paid",
          });
          this.form.reset();
          if (this.date.monthIndex == "") {
            this.salarySheetReport();
          } else {
            axios
              .get(`pendingSalary/${this.date.monthIndex}/${this.date.year}`)
              .then((res) => {
                this.salarySheetReports = res.data.salarySheetReports;
              });
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
    showDate(date) {
       this.form.year = date.year,
			        this.form.monthIndex = date.monthIndex
			        this.form.monthInfo = date.year+'-'+date.monthIndex+'-'+'01'
      this.date = date;

      axios
        .get(`/salaryMonth/${this.date.monthIndex}/${this.date.year}`)
        .then((res) => {
          this.salarySheetReports = res.data.salarySheetReports;
        });
    },
    employeeInfo(id) {
      if (this.date.monthIndex == "") {
      axios.get(`salaryPayStuff/${id}/0/0`).then((res) => {
        this.form.payable = res.data.payable.netAmount;
        this.form.employeeId = id;
      });
      }
      else{
        axios.get(`salaryPayStuff/${id}/${this.date.monthIndex}/${this.date.year}`).then((res) => {
        this.form.payable = res.data.payable.netAmount;
        this.form.employeeId = id;
      }); 
      }
    },
    pendingSalary() {
      if (this.date.monthIndex == "") {
        axios.get(`pendingSalary/0/0`).then((res) => {
          this.salarySheetReports = res.data.salarySheetReports;
        });
      } else {
        axios
          .get(`pendingSalary/${this.date.monthIndex}/${this.date.year}`)
          .then((res) => {
            this.salarySheetReports = res.data.salarySheetReports;
          });
      }
    },
    paidSalary() {
      if (this.date.monthIndex == "") {
        axios.get(`paidSalary/0/0`).then((res) => {
          this.salarySheetReports = res.data.salarySheetReports;
        });
      } else {
        axios
          .get(`paidSalary/${this.date.monthIndex}/${this.date.year}`)
          .then((res) => {
            this.salarySheetReports = res.data.salarySheetReports;
          });
      }
    },
    dueSalary() {
      if (this.date.monthIndex == "") {
        axios.get(`dueSalary/0/0`).then((res) => {
          this.salarySheetReports = res.data.salarySheetReports;
        });
      } else {
        axios
          .get(`dueSalary/${this.date.monthIndex}/${this.date.year}`)
          .then((res) => {
            this.salarySheetReports = res.data.salarySheetReports;
          });
      }
    },
    paymentReceiveType() {

              this.insufficent_cash_balance_text_status=false;
              this.insufficent_bank_balance_text_status=false;
              this.available_balance_cash_status = false;


      if (this.form.paymentType == 2) {
        this.bankInformationStatus = 1;
        this.cashInformationStatus = 0;
      } else if (this.form.paymentType == 1) {

         //======================== check balance 
                   
                   axios.get('/getCashRegister/1').then(res => {
                     
                          let url = "checkBalance/"+res.data.accCode;
                          axios.get(url)
                            .then((response) => {
                              this.available_balance_cash_status = true;
                              this.form.available_balance = response.data.available_balance;
                              this.calculate_available_balance(response.data.available_balance,1); // cash
                            });

                            });
                   
                  //======================== check balance 


        this.cashInformationStatus = 1;
        this.bankInformationStatus = 0;
      } else {
        this.cashInformationStatus = 0;
        this.bankInformationStatus = 0;
      }
    },
    calculate_available_balance(e,type){

              this.insufficent_cash_balance_text_status = false;
              this.insufficent_bank_balance_text_status = false;
              this.insufficent_button = false;
              this.submit_button = true;
              
              // ------------- cash condition
              if(type==1){
              if(this.form.payAmount>e){
                this.insufficent_cash_balance_text_status = true;
                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              }
              // ------------- cash condition
              
              // ------------- Bank condition
              if(type==2){
              if(this.form.payAmount>e){
                this.insufficent_bank_balance_text_status = true;
                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_bank_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              }
              // ------------- /Bank condition
            },

            calculate_available_balance_from_amount(){

              this.insufficent_cash_balance_text_status = false;
              this.insufficent_bank_balance_text_status = false;
              this.insufficent_button = false;
              this.submit_button = true;
              
              // ------------- cash condition
              if(this.form.paymentType==1){
              if(this.form.payAmount>this.form.available_balance){
                
                
                this.insufficent_cash_balance_text_status = true;
                this.insufficent_bank_balance_text_status = false;

                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_bank_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              }
              
              // ------------- cash condition
              
              // ------------- bank condition
              if(this.form.paymentType==2){
              if(this.form.payAmount>this.form.available_balance){
                
                
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_bank_balance_text_status = true;
                

                this.insufficent_button = true;
                this.submit_button = false;
              }
              else{
                this.insufficent_cash_balance_text_status = false;
                this.insufficent_bank_balance_text_status = false;
                this.insufficent_button = false;
                this.submit_button = true;
              }
              }
              
              // ------------- /bank condition
            },

    getData() {
      axios.get("/bankTypeEntryList").then((res) => {
        this.showBankTypeDatas = res.data.show;
      }),
        axios.get("/paymentTypeList").then((res) => {
          this.paymentTypeLists = res.data.data;
        }),
        axios.get("/addExpense").then((res) => {
          this.datas = res.data.data;
        });
    },
    calculate(e){
         
         let stringValue = e.target.value.toString();
      let regex = /^\d*(\.\d{1,2})?$/;
      if (!stringValue.match(regex) &&  this.form.payAmount !== "") {
        this.invalid = true;
       
       this.form.payAmount= '';
      } else {
       this.invalid = false;
       
      }
    },
    payCalculate() {
      if (this.form.payAmount > this.form.payable) {
        this.form.payAmount = this.form.payable;
        alert("Salary Limit Over");
      }
      if (this.form.payAmount < 0) {
        this.form.payAmount = this.form.payable;
          this.invalid = true;
         this.form.payAmount= '';
      } else {
              
        if (this.form.paymentType == 1) {
          this.form.cashAmount = this.form.payAmount;
          this.form.bankAmount = "";
        } else if (this.form.paymentType == 2) {
          this.form.bankAmount = this.form.payAmount;
          this.form.cashAmount = "";
        }

        this.form.dueAmount = this.form.payable - this.form.payAmount;
      }
      this.calculate_available_balance_from_amount();
    },
    bankTypeIdCatch() {
      axios.get("/bankNameList/" + this.form.bankTypeEntryId).then((res) => {
        this.showBankNames = res.data.show;
      });
      if (this.form.bankTypeEntryId == 1) {
        this.bankAccount = true;
        this.mobileAccount = false;
        this.bankCardAccount = false;
      }
      else if (this.form.bankTypeEntryId == 2) {
        this.bankAccount = false;
        this.bankCardAccount = false;
        this.mobileAccount = true;
      }
      else if (this.form.bankTypeEntryId == 3) {
        this.bankAccount = false;
        this.bankCardAccount = true;
        this.mobileAccount = false;
      }
    },
    bankAccountIdCatch() {
      axios.get("/bankAccountListWithCard/" + this.form.bankEntryId+'/'+this.form.bankTypeEntryId).then((res) => {
        this.showBankAccounts = res.data.data;
      });
    },
    getAmount(){
      this.calculate_available_balance_from_amount();
    },
    getBankMoreInfo() {
      axios
        .get("/bankAccountMoreInfo/" + this.form.bankAccountId)
        .then((res) => {
          this.bankInformationAccountInfoStatus = 1;
          this.form.branchName = res.data.data.bankBranch;
          this.form.accNo = res.data.data.bankAccountNumber;

          //======================== check balance 
                     
                          let url = "checkBalance/"+res.data.data.accountCode;
                          axios.get(url)
                            .then((response) => {
                              this.available_balance_status = true;
                              this.available_balance_text = response.data.available_balance;
                              this.form.available_balance = response.data.available_balance;
                              this.calculate_available_balance(response.data.available_balance,2); // bank
                            });



                            // ---------------
                              if(this.form.bankAmount>this.form.available_balance)
                              {
                                // this.insufficent_balance_text_status=true
                                this.insufficent_bank_balance_text_status=false
                                this.submit_button_status = true;
                                this.available_button_status = false;
                              }
                              else
                              {
                                this.insufficent_bank_balance_text_status=false
                              }
                            // ---------------

                     
                    //======================== /check balance 


        });
    },

    salarySheetReport() {
      axios.get("/salarySheet/create").then((res) => {
        this.salarySheetReports = res.data.salarySheetReports;
      });
    },
    getPaginateReport(page = 1) {
      axios.get("/salarySheet/create?page=" + page).then((response) => {
        this.salarySheetReports = response.data.salarySheetReports;
      });
    },
  },
};
</script>
