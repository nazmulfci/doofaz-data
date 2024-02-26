    <template id="">
    <span>
        


        <div class="card mt-5">
            <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
                <h3 style="color:black">Warehouse List</h3>
            </div>
            <div class="table-responsive bg-white">
                <table class="table table-hover table-bordered mb-0">
                <thead>
                    <tr style="background:rgba(242, 242, 242, 0.47)">
                    <th> SN </th>                
                    <th> Warehouse Name </th>                 
                    <th> Location </th>                 
                    <th> Full Address </th>                 
                    <th> Stock Amount </th>
                    <th>Stock Visit</th>
                    </tr>
                    </thead>

                    <tbody >
                    <tr v-for="(warehouseList,index) in warehouseLists">
                        <td> {{++index}} </td>
                        <td> {{warehouseList.warehouseName}} </td>
                        <td> {{warehouseList.location}} </td>
                        <td> {{warehouseList.fullAddress}} </td>
                        <td>
                        <router-link :to="`/warehouseEdit${warehouseList.id}`" class="mr-2 btn-hover-shine btn btn-shadow btn-primary"><i class=" fa fa-edit"></i>Edit</router-link>
                        
                        <button @click.prevent="deleteWarehouse(warehouseList.id)"  class="btn-hover-shine btn btn-shadow btn btn-danger"><i class=" fa fa-trash"></i>Delete</button>
                    
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
            data(){
                return{
                loading: false,
                    form: new Form({
                        
                        warehouseName: '',
                        location: '',
                        fullAddress: '',

                    }),
                
                    warehouseLists:{},
                

                }
            },

            mounted() {
                this.ShowDataLists()
            
            },

            methods: {
            warehouseCreate() {
                this.loading = true;
                    this.form.post('/addWarehouseEntry').then(res => {
                    this.loading = false;
                    
                    
                            this.form.reset()
                            Toast.fire({
                                icon: 'success',
                                title: 'Warehouse Setup Successfully'
                            })
                            this.ShowDataLists()
                        
                    
                    }).catch((res) => {
            this.loading = false;
            Toast.fire({
                icon: "error",
                title: "Something Missing",
            });
            });
                },

                ShowDataLists() {
                axios.get('/addWarehouseEntry').then(res => {
                    
                    this.warehouseLists = res.data.data
                    
                })
                },
    
                    deleteWarehouse(id) {
                    let uri = `addWarehouseEntry/${id}`;
                    axios.delete(uri).then((response) => {
                        Toast.fire({
                                icon: 'success',
                                title: 'Delete Successfull.'
                            })
                        this.ShowDataLists();
                    });
                    },
            
            }
        }
    </script>
