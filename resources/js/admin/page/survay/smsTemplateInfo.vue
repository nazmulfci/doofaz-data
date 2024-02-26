<template id="">
    <span>
      <div class="card">
        <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
          <h3 style="color:black"> SMS Template Info </h3>
        </div>
        <div class="supplier-entry py-4 px-2">
          <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
            <form  @submit.prevent="smsTemplateInfoEntry()">
                
                <div class="form-group">
                    <label> Type <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <select 
                        label="oparetorId" 
                        placeholder="Select Oparetor" 
                        v-model="form.oparetorId" class="form-control" :class="{ 'is-invalid': form.errors.has('oparetorId') }">
                        <option value=""> Select Oparetor </option>
                        <option v-for="smsTypeList in smsTypeLists" :value="smsTypeList.id" > {{ smsTypeList.operatorName }}</option>
                        </select>
                        <has-error :form="form" field="oparetorId"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
                    <label> SMS Body <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <textarea v-model="form.smsBody" class="form-control" placeholder="Enter Sms Body" :class="{ 'is-invalid': form.errors.has('smsBody') }"></textarea>
                    <has-error :form="form" field="smsBody"></has-error>
                    </div>

                <div class="text-right pt-3">
                  <button type="submit" class="mr-2 btn btn-pill btn-hover-shine btn-primary"> Submit </button>
                </div>
            </form>
          </div>
        </div>
      </div>
 
    </span>
  </template>
  <script>
  
  
  
  export default {
    data() {
      return {
        form: new Form({
            smsTitle:'',
            smsBody:'',
        }),
  
        smsTemplateInfoLists:[],
       
      };
    },
   
    mounted() {
        this.smsTemplateInfoShow();
    },
    methods: {    
        smsTemplateInfoEntry(){
    
    this.form.post("smsTemplateInfo").then((response) => {
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
            //-------- OR -------
            this.form.smsTitle='';
this.form.smsBody='';

            this.smsTemplateInfoShow();
        }
      });
},
 
smsTemplateInfoShow(){
      
    this.form.get("/smsTemplateInfo").then((res) => {
      this.smsTemplateInfoLists = res.data.data;
    });

  },


 

smsTemplateInfoDelete($id) {
    axios.delete("/smsTemplateInfo/" + $id).then((res) => {
      Toast.fire({
        icon: "success",
        title: "Data Deleted  successfully",
      });
      this.smsTemplateInfoShow();
    });
  },
 
    },
  };
  </script>
  