<template id="">
  <span>

  

    <div class="card mt-5">
      <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Register List </h4>
      </div>

      <div class="supplier-entry py-4 px-2">
         <div class="card-body table-responsive bg-white">
        <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
            <thead>
              <tr>
                <th>Head Code</th>
                <th style="width:500px;">Head Name</th>
                <th>Level</th>
                <th>Type</th>
                <th>Position</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody
              v-for="(chartOfAccount,index) in chartOfAccountRegisters" 
              :key="chartOfAccount.id">
              <tr>
               
                <td style="width:120px;">{{ chartOfAccount.headCode }} <span style="display:none;"> {{ index }}</span></td>
                <td class="pt-0 pb-0"  style="width:500px;">
                <div class="float-left mt-3"> {{ chartOfAccount.headName }} </div>
                 </td>
                <td>Level {{ chartOfAccount.headLavel }}</td>
                <td>
                  <span v-for="accountGroup in accountGroups"
                  v-if="accountGroup.id==chartOfAccount.headGroupId"
                  >
                  {{ accountGroup.groupName }}
                  </span>
                  </td>
                <td>
                  <span v-for="accountGroupType in accountGroupTypes"
                  v-if="accountGroupType.id==chartOfAccount.headGroupType"
                  >
                  <span class="mt-2 ml-3"> {{ accountGroupType.name }} </span>
                  </span>
                  </td>
                
                <td>
                  <router-link
                    :to="`/chartOfAccountEdit${chartOfAccount.id}`"
                    class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"
                  ><i class="fa fa-edit"></i> </router-link
                  >
                </td>
                <td>
                  <button 
                    @click.prevent="deletePost(chartOfAccount.id)"
                    class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine"
                >
                  <i class="fa fa-trash"></i> 
                  </button>
                </td> 
              </tr>

              <!-- empty row -->
              <!-- <tr>
                <td> . </td>
              </tr> -->
              <!-- empty row -->


            </tbody>
          </table>



          
        </div>
      </div>
    </div>
  </span>
</template>

<style>
.tree{
  width:1px;
  height: 70px;
  background: black;
  position: relative;
  float: left;
  margin-right: 20px;
  
}  
.tree1{
  width: 20px;
  height: 1px;
  background: rgb(0, 0, 0);
  margin-top: 28px;
}
</style>

<script>
export default {

  
  data() {
    return {
      
      accountGroups: [],
      chartOfAccounts: [],
      chartOfAccountRegisters: [],
      accountGroupTypes: [],
      newChartOfAccounts: [],
      dorpdownStatus: 1,

      image: "",
      form: new Form({
                        headUpLink: "",
                        headGroupType: "",
                        headGroupId: "",
                        dr_cr: "",
                        headCode: "",
                        headName: "",
                        headLavel: "",
      }),
      qrCodeSetup: {},
      exit: false,
      mess: "",
    };
  },
  mounted() {
    this.view();
    this.getAccountGroup();
    this.getaccountGroupTypes();
    this.getUplinkInformation();
  },
  methods: {
    
    view() {
      let url = "chartOfAccountRegister";
      axios.get(url)
        .then((response) => {
          this.chartOfAccountRegisters = response.data.chartOfAccountList;
        });
    },
showDownRow(e){
  // if(this.dorpdownStatus == 1){
    $('.obj-'+e).show();
  //   this.dorpdownStatus=0;
  // }else{
  //   $('.obj-'+e).hide();
  //   this.dorpdownStatus=1;
  // }
},

    getUplinkInformation(){
      if(this.form.headUpLink == ''){
        this.form.headUpLink = 0;
      }
      // alert('blank');
          let uri = `getUplinkInformation/`+this.form.headUpLink;
          //$( "#headLavel" ).prop( "disabled", true );
        axios.get(uri).then(response=>{
          this.form.headLavel = response.data.lavel;
          this.form.headCode = response.data.code;
        })
        
    },

    getAccountGroup(){
          let uri = `getAccountGroup`;
        axios.get(uri).then(response=>{
            this.accountGroups = response.data.accountGroups;
        })
    },
    
    getaccountGroupTypes(){
          let uri = `accountGroupTypes`;
        axios.get(uri).then(response=>{
            this.accountGroupTypes = response.data.accountGroupTypes;
        })
    },

    deletePost(id) {
      let uri = `chartOfAccountRegister/${id}`;
      axios.delete(uri).then((response) => {
        Toast.fire({
                icon: 'success',
                title: 'Delete Successfull.'
            })
        this.view();
      });
    },
 
 

    addChartOfAccount() {
      this.form.post("chartOfAccountRegister").then((response) => {
        
          Toast.fire({
            icon: "success",
            //background: '#fcd8d8', red
              background: '#c9f4c9', //green
            title: "Chart of account register add successfull.",
          }),

          
          this.form.reset();
          this.form.headUpLink = 0;

          this.view();
          this.getAccountGroup();
          this.getaccountGroupTypes();
          
      });
    },
  },
};
</script>