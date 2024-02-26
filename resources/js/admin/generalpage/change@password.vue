<template>
 <div class="container">
    <div class="row ">
        <div class="col-md-2  ">
        </div>
        <div class="col-md-6 ">
            <div class="card ">
             
   
                <div class="card-body  " style="padding:22px">
                    <form  @submit.prevent="add">
                    
   
                         <!-- @foreach ($errors->all() as $error)
                            <p class="text-danger">{{ $error }}</p>
                         @endforeach  -->
  
                        <div class="form-group row"  :class="{ 'has-error': form.errors.has('current_password') }">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Current Password</label>
  
                            <div class="col-md-6">
                                <input id="password"  :class="{ 'is-invalid': form.errors.has('current_password') }"
                    class="form-control" type="password"  v-model="form.current_password" name="current_password" autocomplete="current-password">
                     <has-error :form="form" field="current_password"></has-error>
                            </div>
                        </div>
  
                        <div class="form-group row" :class="{ 'has-error': form.errors.has('new_password') }">
                            <label for="password" class="col-md-4 col-form-label text-md-right">New Password</label>
  
                            <div class="col-md-6">
                                <input id="new_password" type="password" class="form-control" v-model="form.new_password" name="new_password" autocomplete="current-password" :class="{ 'is-invalid': form.errors.has('new_password') }">
                                <has-error :form="form" field="new_password"></has-error>
                            </div>
                        </div>
  
                        <div class="form-group row" :class="{ 'has-error': form.errors.has('new_confirm_password') }">
                            <label for="password" class="col-md-4 col-form-label text-md-right">New Confirm Password</label>
    
                            <div class="col-md-6">
                                <input id="new_confirm_password" type="password" class="form-control" v-model="form.new_confirm_password" name="new_confirm_password" autocomplete="current-password" :class="{ 'is-invalid': form.errors.has('new_confirm_password') }">
                                <has-error :form="form" field="new_confirm_password"></has-error>
                            </div>
                        </div>
   
                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Update Password
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> 
</template>

<script>
export default {
 data() {
    return {
      form: new Form({
      current_password: "",     
      new_password: "",     
      new_confirm_password: "",     
      }),
    
    };
  },
   methods: {
       playSound() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3"
      );
      audioFile.play();
    },
  add() {
      this.form
        .post("change-password", {
          method: "post",
          body: JSON.stringify(this.change-password),
          headers: {
            "content-type": "application/json",
          },
        })
         .then((response) => {
          this.form.reset();
        this.playSound();
          Toast.fire({
            icon: "success",
            title: "Successfully Change  Password",
          });
        })
        .catch((err) => console.log(err));
    },
   
   
  },
}
</script>