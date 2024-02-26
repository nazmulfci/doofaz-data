<template id="">
  <span>

    <div class="card" style="word-wrap: normal;">
      <div class="card-header-tab card-header alert-info">
<h4><i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          Chart of Account List </h4>
      </div>

      <div class="supplier-entry py-4 px-2">
         <div class="card-body bg-white">
       

               
 
<div class="">
   
   <div class="supplier-entry py-4 px-2">
         <div class="card-body table-responsive bg-white">
        <table class="table table-hover table-bordered" style="width:100%">
            <thead>
              <tr>
                <th>Head Code</th>
                <th style="width:500px;">Head Name</th>
                <th>Level</th>
                <th>Type</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody v-html="chartOfAccounts">

            </tbody>

        </table>
</div>
</div>
</div>
                                     
                                     
                                     
 

          
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


    
      $("#li").on('click', function(event){
        alert('li');
      });
   

    $.fn.extend({
    treed: function (o) {

      var openedClass = 'fa fa-minus-circle';
      var closedClass = 'fa fa-plus-circle';

      if (typeof o != 'undefined'){
        if (typeof o.openedClass != 'undefined'){
        openedClass = o.openedClass;
        }
        if (typeof o.closedClass != 'undefined'){
        closedClass = o.closedClass;
        }
      };

        //initialize each of the top levels
        var tree = $(this);
        tree.addClass("tree");
        tree.find('li').has("ul").each(function () {
            var branch = $(this); //li with children ul
            branch.prepend("");
            branch.addClass('branch');
            branch.on('click', function (e) {
                if (this == e.target) {
                    var icon = $(this).children('i:first');
                    icon.toggleClass(openedClass + " " + closedClass);
                    $(this).children().children().toggle();
                }
            })
            branch.children().children().toggle();
        });
        //fire event from the dynamically added icon
      tree.find('.branch .indicator').each(function(){
        $(this).on('click', function () {
            $(this).closest('li').click();
        });
      });
        //fire event to open branch if the li contains an anchor instead of text
        tree.find('.branch>a').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
        //fire event to open branch if the li contains a button instead of text
        tree.find('.branch>button').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
    }
});

//Initialization of treeviews 

$('#tree1').treed();

$('#tree2').treed({openedClass:'fa-folder-open', closedClass:'fa-folder'});









 
    this.view();
    this.getAccountGroup();
    this.getaccountGroupTypes();
    this.getUplinkInformation();
  },
  methods: {
    
    view() {
      let url = "chartOfAccountWithRegister";
      axios.get(url)
        .then((response) => {
          this.chartOfAccounts = response.data.chartOfAccounts;
        });
    },
showDownRow(e){
let uri = `getDownlinkInformation/`+e;
        axios.get(uri).then(response=>{
            $('.obj-'+e).html(response.data.downlink);
        })
},

getFeni(){
  alert('feni');
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
      let uri = `api/qrCodeSetup/${id}`;
      axios.delete(uri).then((response) => {
        Toast.fire({
                icon: 'success',
                title: 'Delete Successfull.'
            })
        this.view();
      });
    },
 
 

    addChartOfAccount() {
      this.form.post("chartOfAccount").then((response) => {
        
          Toast.fire({
            icon: "success",
            //background: '#fcd8d8', red
              background: '#c9f4c9', //green
            title: "Chart of account add Successfull.",
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


 