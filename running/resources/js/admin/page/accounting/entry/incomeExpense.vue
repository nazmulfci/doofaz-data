<template>
   <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3> 
            <button type="button" onclick="window.history.back()" 
             class="btn btn btn-outline-primary btn-shadow  btn-hover-shine"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg> </button>
            <span v-if="language==1"> Income & Expense </span>
            <span v-if="language==2"> আয়-ব্যয়ের হিসাব  </span>
            
             </h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          
          <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                  <h5 class="alert-info p-2 border-primary border-bottom mb-0"> 
                      <span v-if="language==1"> Income  </span>
                      <span v-if="language==2"> আয়  </span>


                      <span class="" style="border:1px solid #ccc;cursor:pointer;float: right;width: 50px;height: 30px;background: white;text-align: center;border-radius: 5px;" @click="menuHideShow(1)"> {{menuIcon}} </span>
             </h5>
                  

                  <ul class="nav bg-light flex-column mb-4">
                     
                    <li class="nav-item border-primary border-bottom" v-if="menuHide1">
                        <router-link :to="`/incomeExpenseCompanyEntry`" class="nav-link">
                            <i class="nav-link-icon pe-7s-chat"></i><span> 
                                <span v-if="language==1"> Person / Company Entry </span>
                      <span v-if="language==2">আয়ের জন্য ব্যক্তি অথবা প্রতিষ্ঠান </span>
                        </span>
                        </router-link>
                    </li>
                     
                    <li class="nav-item border-primary border-bottom" v-if="menuHide1">
                        <router-link :to="`/incomeProviderEntry`" class="nav-link">
                            <i class="nav-link-icon pe-7s-chat"></i><span> 
                                <span v-if="language==1"> Income Purpus Entry </span>
                      <span v-if="language==2">আয়ের খাত এন্ট্রি   </span>  </span>
                        </router-link>
                    </li>
                    <li class="nav-item border-primary border-bottom">
                        <router-link :to="`/incomeEntry`" class="nav-link">
                            <i class="nav-link-icon pe-7s-chat"></i><span> 
                                <span v-if="language==1" class="btn btn-primary"> Income Entry </span>
                      <span v-if="language==2"  class="btn btn-primary"> আয় এন্ট্রি  </span>  </span>
                        </router-link>
                    </li>
                        
                </ul>
 
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                  <h5 class="alert-info p-2 border-primary border-bottom mb-0"> 
                      <span v-if="language==1"> Expense </span>
                      <span v-if="language==2"> ব্যয়  </span>
                      <span class="" style="border:1px solid #ccc;cursor:pointer;float: right;width: 50px;height: 30px;background: white;text-align: center;border-radius: 5px;" @click="menuHideShow(2)"> {{menuIcon1}} </span>
            
             </h5>
                  
                     <ul class="nav bg-light flex-column mb-4">
                     
                    <li class="nav-item border-primary border-bottom"  v-if="menuHide2">
                        <router-link :to="`/incomeExpenseCompanyEntry`" class="nav-link">
                            <i class="nav-link-icon pe-7s-chat"></i><span> 
                                <span v-if="language==1"> Person / Company Entry</span>
                                <span v-if="language==2"> ব্যয়ের জন্য ব্যক্তি অথবা প্রতিষ্ঠান  </span>
                                   </span>
                        </router-link>
                    </li>
                     
                    <li class="nav-item border-primary border-bottom"  v-if="menuHide2">
                        <router-link :to="`/expenseProviderEntry`" class="nav-link">
                            <i class="nav-link-icon pe-7s-chat"></i><span> 
                                <span v-if="language==1"> Expense Purpus Entry </span>
                                <span v-if="language==2"> ব্যয়ের খাত এন্ট্রি  </span>  </span>
                        </router-link>
                    </li>
                    <li class="nav-item border-primary border-bottom">
                        <router-link :to="`/expenseEntry`" class="nav-link">
                            <span> 
                                <span v-if="language==1" class="btn btn-success"> Expense Entry </span>
                                <span v-if="language==2" class="btn btn-success"> ব্যয় এন্ট্রি  </span>
                                  </span>
                        </router-link>
                    </li>
                        
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>

 


  </span>
</template>
<script>
export default {
  data() {
    return {
    
      language: "",
      menuHide1:false,
      menu1:1,
      menuIcon:'+',
      menuHide2:false,
      menu2:1,
      menuIcon1:'+',

      form: new Form({
        // codes: "",
      }),
    };
  },
 
  mounted() {
    this.getAuthInfo();
  },

  methods: {
      

    getAuthInfo() {
      let url = "getAuthInfo";
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.language = response.data.language;
        });
    },

    menuHideShow(e){

        if(e==1){
            if(this.menu1==1){
            this.menuHide1=true;
            this.menu1 = 0;
            this.menuIcon='-';
            }
            else{
                this.menuHide1=false;
                this.menu1 = 1;
                this.menuIcon='+';
            }
        }

        else if(e==2){
            if(this.menu2==1){
            this.menuHide2=true;
            this.menu2 = 0;
            this.menuIcon1='-';
            }
            else{
                this.menuHide2=false;
                this.menu2 = 1;
                this.menuIcon1='+';
            }
        }

    },


  },
};
</script>
