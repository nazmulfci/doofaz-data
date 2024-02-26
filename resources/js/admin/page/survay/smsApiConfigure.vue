<template id="">
    <span>
      <div class="card d-none">
        <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
          <h3 style="color:black"> SMS API Configure </h3>
        </div>
        <div class="supplier-entry py-4 px-2">
          <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
            <form  @submit.prevent="smsApiInfoEntry()">
                
                        <div class="form-group">
                        <label> Oparetor <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                        <select 
                        label="oparetorId" 
                        placeholder="Select Oparetor" 
                        v-model="form.oparetorId" class="form-control" :class="{ 'is-invalid': form.errors.has('oparetorId') }">
                        <option value=""> Select Oparetor </option>
                        <option v-for="simOperatorList in simOperatorLists" :value="simOperatorList.id" > {{ simOperatorList.operatorName }}</option>
                        </select>
                        <has-error :form="form" field="oparetorId"></has-error>
                        </div>
                    
                        <div class="form-group">
                        <label> SmsType <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                        <select 
                        label="smsTypeId" 
                        placeholder="Select SmsType" 
                        v-model="form.smsTypeId" class="form-control" :class="{ 'is-invalid': form.errors.has('smsTypeId') }">
                        <option value=""> Select SmsType </option>
                        <option v-for="simTypeList in simTypeLists" :value="simTypeList.id" > {{ simTypeList.simTypeName }}</option>
                        </select>
                        <has-error :form="form" field="smsTypeId"></has-error>
                        </div>
                     
                        <div class="form-group">
                        <label> SmsLinkUrl <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                        <input  type="text" v-model="form.smsLinkUrl" class="form-control" placeholder="Enter SmsLinkUrl" :class="{ 'is-invalid': form.errors.has('smsLinkUrl') }">
                        <has-error :form="form" field="smsLinkUrl"></has-error>
                        </div>
        
                        <div class="form-group">
                        <label> UserName <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                        <input  type="text" v-model="form.userName" class="form-control" placeholder="Enter UserName" :class="{ 'is-invalid': form.errors.has('userName') }">
                        <has-error :form="form" field="userName"></has-error>
                        </div>
        
                        <div class="form-group">
                        <label> Password <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                        <input  type="text" v-model="form.password" class="form-control" placeholder="Enter Password" :class="{ 'is-invalid': form.errors.has('password') }">
                        <has-error :form="form" field="password"></has-error>
                        </div>
        
                        <div class="form-group">
                        <label> From <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                        <input  type="text" v-model="form.from" class="form-control" placeholder="Enter From" :class="{ 'is-invalid': form.errors.has('from') }">
                        <has-error :form="form" field="from"></has-error>
                        </div>

                <div class="text-right pt-3">
                  <button type="submit" class="mr-2 btn btn-pill btn-hover-shine btn-primary"> Submit </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    <div class="card main-card  element-block-example mt-5" >
        <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
          <h3 style="color:black"> SMS API Information </h3>
        </div>
        <div class="table-responsive bg-white">
          <table class="table table-hover table-bordered mb-0">
            <thead>
               <tr style="background:rgba(242, 242, 242, 0.47)">
               
                 <th>SN</th>           
                 <th> Operator </th>
                 <th> SMS Type </th>
                 <th> URL </th>
                 <th> User Name </th>
                 <th> Password </th>
                 <th> From </th>
                 <th> Delete </th>
               </tr>
              </thead>
              <tbody>
                <tr v-for="info ,index in smsApiInfoLists" :key="info.id">
                 
                  <td> {{index+1}} </td>
                  <td> 
                    <option v-for="simOperatorList in simOperatorLists" :value="simOperatorList.id" 
                    v-if="info.oparetorId==simOperatorList.id"> {{ simOperatorList.operatorName }}</option>
                  </td>
                  <td> 
                    <option v-for="simTypeList in simTypeLists" :value="simTypeList.id" 
                    v-if="info.smsTypeId==simTypeList.id"> {{ simTypeList.simTypeName }}</option>
                  </td>
                  <td> {{info.smsLinkUrl}} </td>
                  <td> {{info.userName}} </td>
                  <td> {{info.password}} </td>
                  <td> {{info.from}} </td>
                  <td>
                    <router-link :to="`smsApiInfoEdit${info.id}`" class="btn-wide btn-pill btn btn-outline-info btn-hover-shine"
                    ><i class="fa fa-edit"></i> Edit </router-link>  
                  </td>
               
               </tr>
              </tbody>
           </table>
         </div>
        
       </div>
     
    </span>
  </template>
  <script>
  
  
  
  export default {
    data() {
      return {
        form: new Form({
            oparetorId:'',
            smsTypeId:'',
            smsLinkUrl:'',
            userName:'',
            password:'',
            from:'',
        }),
  
        simOperatorLists:[],
        simTypeLists:[],
        smsApiInfoLists:[],
       
      };
    },
   
    mounted() {
        this.simOperatorShow();
        this.simTypeShow();
        this.smsApiInfoShow();
    },
    methods: {    
        simTypeShow(){
            this.form.get("/simType").then((res) => {
                this.simTypeLists = res.data.data;
            });
        },
        simOperatorShow(){
      
      this.form.get("/simOperator").then((res) => {
        this.simOperatorLists = res.data.data;
      });
  
    },
        smsApiInfoEntry(){
    
    this.form.post("smsApiInfo").then((response) => {
        if (response.data.changePurchaseType) {
          this.exit = true;
          this.mess = response.data.changePurchaseType;
          // Toast.fire({
          //     icon: 'error',
          //     title: 'Change Your Admin Type Name'
          // })
        } else {
          Toast.fire({
            icon: "success",
            title: "Data Entry Successful",
          }),

            this.form.reset();
          

            this.smsApiInfoShow();
        }
      });
},
 

smsApiInfoShow(){
      
    this.form.get("/smsApiInfo").then((res) => {
      this.smsApiInfoLists = res.data.data;
    });

  },

 
smsApiInfoDelete($id) {
    axios.delete("/smsApiInfo/" + $id).then((res) => {
      Toast.fire({
        icon: "success",
        title: "Data Deleted  successfully",
      });
      this.smsApiInfoShow();
    });
  },
    },
  };
  </script>
  