export default{

   state:{
      new_datas:[],
      all_datas:[],
      guest_datas:[],
      role:[],
   },

   getters:{

    //data list

    newDataShow(state){
        return state.new_datas;
    },

    getRoleShow(state){
        return state.role;
    },

    //data list

    allDataShow(state){
       return state.all_datas;
    },

    guestDataShow(state){
       return state.guest_datas;
    },

   },

   actions:{

    //data list
    getNewData(context){
        $('#CategoryProduct').modal('hide');
        $('#MessageModalShow').modal('hide');
        $('#NoteModalShow').modal('hide');
        $('#MettingModalShow').modal('hide');
        $('#ReasonModalShow').modal('hide');
        axios.get('NewDataInformationView').then((response)=>{
           context.commit('newDataShow',response.data.data);
           context.commit('getRoleShow',response.data.role);
        });
     },
     //data list

    //data list
    getAllData(context){
        $('#CategoryProduct').modal('hide');
        $('#MessageModalShow').modal('hide');
        $('#NoteModalShow').modal('hide');
        $('#MettingModalShow').modal('hide');
        $('#ReasonModalShow').modal('hide');
        axios.get('AllDataInformationView').then((response)=>{
           context.commit('allDataShow',response.data.data);
           context.commit('getRoleShow',response.data.role);
        });
     },
     //data list

    //data list
    getGuestData(context){
        $('#CategoryProduct').modal('hide');
        $('#MessageModalShow').modal('hide');
        $('#NoteModalShow').modal('hide');
        $('#MettingModalShow').modal('hide');
        $('#ReasonModalShow').modal('hide');
        axios.get('GuestDataInformationView').then((response)=>{
           context.commit('guestDataShow',response.data.data);
           context.commit('getRoleShow',response.data.role);
        });
     },
     //data list

   },

   mutations:{

     //data list
     newDataShow(state,responseData){
        return state.new_datas = responseData;
     },

     getRoleShow(state,responseData){
        return state.role = responseData;
     },
     //data list

     allDataShow(state,responseData){
        return state.all_datas = responseData;
     },

     guestDataShow(state,responseData){
        return state.guest_datas = responseData;
     },



   },

}
