<template>
   <span>
    <div class="card">
      <div class="card-header alert-info">
        <h3> 
            <i class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"></i>
            <span v-if="language==1"> Loan Pay / Receive </span>
            <span v-if="language==2"> ঋণ দেয়া এবং নেয়া  </span>  </h3>
      </div>
      <div class="supplier-entry py-4 px-2">
        <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
          
          <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                  <h5 class="alert-info p-2 border-primary border-bottom mb-0">
                    
                    <span v-if="language==1"> Loan Provider </span>
                    <span v-if="language==2"> যার থেকে ঋণ নিয়েছি </span>

              <span class="" style="border:1px solid #ccc;cursor:pointer;float: right;width: 50px;height: 30px;background: white;text-align: center;border-radius: 5px;" @click="menuHideShow(1)"> {{menuIcon}} </span>

              </h5>
                 

                  <ul class="nav  bg-light flex-column mb-4">
                     
                    <li class="nav-item border-primary border-bottom" v-if="menuHide1">
                        <router-link :to="`/loanProvider@entry`" class="nav-link">
                            <i class="nav-link-icon pe-7s-chat"></i><span> 
                              <span v-if="language==1"> Loan Provider Name </span>
                    <span v-if="language==2"> ঋণ দাতার নাম </span>
                      </span>
                        </router-link>
                    </li>
                     
                    <li class="nav-item border-primary border-bottom" v-if="menuHide1">
                        <router-link :to="`/loanReceiveFromProvider@entry`" class="nav-link">
                            <i class="nav-link-icon pe-7s-chat"></i><span> 
                              <span v-if="language==1"> Loan Receive From Provider </span>
                    <span v-if="language==2">ঋণের টাকা গ্রহণ </span>
                     </span>
                        </router-link>
                    </li>
                    <li class="nav-item border-primary border-bottom">
                        <router-link :to="`/loanInstalmentEntry`" class="nav-link">
                            <span> 
                              <span v-if="language==1" class="btn btn-primary"> Loan Installment Pay</span>
                    <span v-if="language==2" class="btn btn-primary">ঋণের কিস্তি দেয়া  </span>
                      </span>
                        </router-link>
                    </li>
                    <li class="nav-item border-primary border-bottom">
                        <router-link :to="`/loanMainAmountPaid`" class="nav-link">
                            <i class="nav-link-icon pe-7s-chat"></i><span>
                              <span v-if="language==1"> Loan Main Amount Paid </span>
                    <span v-if="language==2"> ঋণের মূল টাকা পরিশোধ করা  </span>
                      </span>
                        </router-link>
                    </li>
                        
                </ul>
 
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                  <h5 class="alert-info p-2 border-primary border-bottom mb-0">
                    <span v-if="language==1"> Loan Receiver  </span>
                      <span v-if="language==2">  যাকে ঋণ  দিয়েছি  </span>
                    
                    <span class="" style="border:1px solid #ccc;cursor:pointer;float: right;width: 50px;height: 30px;background: white;text-align: center;border-radius: 5px;" @click="menuHideShow(2)"> {{menuIcon1}} </span>
                   </h5>
               
                    <ul class="nav  bg-light flex-column mb-4">
                        <li  class="nav-item border-primary border-bottom" v-if="menuHide2"> <router-link :to="`/loanReceiverEntry`" class="nav-link"> <i class="nav-link-icon pe-7s-chat"></i><span> <span v-if="language==1"> Loan Reciver Name </span> <span v-if="language==2">ঋণ গ্রহীতার নাম  </span>  </span></router-link> </li>
                        <li class="nav-item border-primary border-bottom" v-if="menuHide2"> <router-link :to="`/loanPayInReceiver`" class="nav-link"> <i class="nav-link-icon pe-7s-chat"></i><span> <span v-if="language==1"> Loan Providing </span> <span v-if="language==2">ঋণের টাকা দেয়া   </span> </span></router-link> </li>
                        <li class="nav-item border-primary border-bottom" > <router-link :to="`/loanInstallmentReceive`" class="nav-link"> <span> <span v-if="language==1" class="btn btn-success"> Loan Installment Receive </span> <span v-if="language==2" class="btn btn-success">ঋণের কিস্তি নেয়া   </span> </span></router-link> </li>
                        <li class="nav-item border-primary border-bottom" > <router-link :to="`/loanMainAmountReceive`" class="nav-link"> <i class="nav-link-icon pe-7s-chat"></i><span> <span v-if="language==1"> Loan Main Amount Receive </span> <span v-if="language==2">ঋণের মূল টাকা গ্রহণ করা  </span> </span></router-link> </li>
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

 
