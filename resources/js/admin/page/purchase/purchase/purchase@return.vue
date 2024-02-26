<template id="">
  <span>
      <div class="card">
        <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
             <h3 style="color:black">Purchase Return ss</h3>
         </div>
         <form @submit.prevent="invoice()">
            <div class="product-discount py-4 px-2">
               <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12  supplier-border">
                  <div class="form-group">
                         <label>Select Invoice</label>

                         <select v-model="invoiceN" class="form-control" 
                         @change.prevent="showProduct()">
                            <option value="">Select One</option>
                            <option  v-for="invoice in invoices"
                          :key="invoice.invoiceNo"
                            :value="invoice.purchaseInvoiceNo">
                         Invoice No#{{ invoice.purchaseInvoiceNo }}</option>
                         </select>
                       
                     </div>
                  <div class="form-group">
                         <label>Select Product</label>


                         <select v-model="productN" class="form-control" 
                          @change.prevent="showInfo()"
                        >
                            <option value="">Select One</option>
                            <option  v-for="(purchaseProductList, index) in purchaseProductLists" v-if="purchaseProductList.product_name"   :value="purchaseProductList.purchaseProductId">
                           {{ purchaseProductList.product_name.productName  }}&nbsp;({{ purchaseProductList.brand_name.productBrandName}})</option>
                         </select>
                       
                     </div>

                    
                   
                </div>
            </div>
          
       </form>
     </div>
<div class="card">
        <form action="" @submit.prevent="addPurchaseInvoice()">
        <div class="card-header" style="background:rgba(221, 221, 221, 0.20);border:1px solid rgba(0, 0, 0, 0.05)">
          <h3 style="color:black">New Purchase Entry</h3>
        </div>

        <div class="purchase-entery purchase-border p-3 ">
          <div class="row m-0" >
            <div class="col-auto pl-lg-auto purcha-border p-3">
              <div class="table-responsive bg-white">
                <table class=" table-hover  mb-0">
                  
                  <tr>
                    <td class="title-name">Purchase Invoice No</td>
                    <td>
                        <div>
                          <input disabled type="text"  v-model="form.purchaseInvoiceNo" name="purchaseInvoiceNo" class="form-control" placeholder="Invoice No">
                        </div>
                     </td>
                  </tr>
                  <tr>
                    <td class="title-name">Product Supplier Name</td>
                    <td>
                        <div>
                          <select class="form-control" v-model="form.productSupplierId"
                           :class="{ 'is-invalid': form.errors.has('productSupplierId') }"
                            name="productSupplierId" disabled>
                            <option value="">Select One</option>
                            <option v-for="productSupplierList in productSupplierLists" 
                            v-if="productSupplierList.productSupplierId==form.productSupplierId"
                            :value="productSupplierList.productSupplierId">{{ productSupplierList.productSupplierName }}</option>
                          </select>
                          <has-error :form="form" field="productSupplierId"></has-error>
                        </div>
                     </td>
                  </tr>
                  <tr>
                    <td class="title-name">Mobile No</td>
                    <td>
                        <div>
                          <input disabled type="text"  v-model="form.moblieNo" name="moblieNo" class="form-control" placeholder="Moblie No">
                        </div>
                     </td>
                  </tr>
                  <tr>
                    <td class="title-name">Address</td>
                    <td >
                        <div>
                          <textarea disabled v-model="form.address" name="address"  placeholder="Address" class="form-control" style="height:80px"></textarea>
                        </div>
                     </td>
                  </tr>
                   
                </table>
              </div>
            </div>
          </div>
        </div>


        <!-- <div class="product-page pl-2 purcha-border" style="background:#E7F1E8">
             <form action="" @submit.prevent="addProduct()">
               <div class="form-row">
                 <div class="form-group col-sm-2 col-6">
                   <label>Product Name</label>
                     <select class="form-control" v-model="form.productId" name="productId">
                        <option value="">Select One</option>
                        <option v-for="productNameList in productNameLists" :value="productNameList.productNameId">
                            {{ productNameList.productName }}  ({{ productNameList.productCode }})
                        </option>
                     </select>
                 </div>
                 <div class="form-group  col-sm-2  col-6">
                     <label>Brand Name</label>
                     <select class="form-control" v-model="form.brandId" name="brandId">
                        <option value="">Select One</option>
                        <option v-for="brandList in brandLists" :value="brandList.productBrandEntryId">
                            {{ brandList.productBrandName }}
                        </option>
                     </select>
                 </div>
                 <div class="form-group  col-sm-1  col-6">
                     <label>P.Type</label>
                     <select class="form-control" v-model="form.purchaseTypeId" name="purchaseTypeId">
                        <option value="">Select One</option>
                        <option v-for="purchaseType in purchaseTypes" :value="purchaseType.id">
                            {{ purchaseType.purchaseType }}
                        </option>
                     </select>
                 </div>
                 <div class="form-group  col-sm-1  col-6">
                     <label>Country</label>
                     <select class="form-control" v-model="form.countryId" name="countryId">
                        <option value="">Select One</option>
                        <option v-for="countryList in countryLists" :value="countryList.id">
                            {{ countryList.name }}
                        </option>
                     </select>
                 </div>
                 <div class="form-group  col-sm-1 col-6">
                   <label>Unit</label>
                   <select  v-model="form.unitId" name="unitId" class="form-control">
                     <option value="">Select One</option>
                     <option  v-for="unitNameShow in unitNameShows" 
                     :value="unitNameShow.uniteEntryId"
                     >{{ unitNameShow.uniteEntryName }}</option>
                   </select>
                 </div>
                 <div class="form-group  col-sm-1 col-6">
                   <label>Quantity</label>
                   <input type="text" v-model="form.quantity" @keyup.prevent="unitPrice()" name="quantity" placeholder="Quantity" class="form-control">
                 </div>
                 <div class="form-group  col-sm-1 col-6">
                   <label>Unit Price</label>
                   <input type="text" v-model="form.unitPrice"  @keyup.prevent="unitPrice()" name="unitPrice" placeholder="Unit Price" class="form-control">
                 </div>
                 <div class="form-group  col-sm-1 col-6">
                   <label>Discount</label>
                   <input type="text" v-model="form.percetage"  @keyup.prevent="percetage()" name="percetage" placeholder="Percetage" class="form-control">
                 </div>
                 <div class="form-group  col-sm-1 col-6">
                   <label>Total Price</label>
                   <input type="text" disabled v-model="form.totalPrice"  name="totalPrice" placeholder="Total Price" class="form-control">
                 </div>
                 <input type="hidden" disabled v-model="form.percetagePrice"  name="percetagePrice" class="form-control">
                 <div class="btn-mr">
                    <label></label>
                    <button type="submit" class="btn btn-info btn-padding">Add</button>
                 </div>
               </div>
             </form>
         </div> -->
         <div class="table-responsive bg-white" v-if="showCal">
           <table class="table table-hover table-bordered mb-0">
              <thead>
                 <tr style="background:rgba(242, 242, 242, 0.47)">
                    <th>SN</th>
                    <th>Product.Name</th>
                    <th>Brand </th>
                   
                    <th>Unit</th>
                    <th>Pre Quantity</th>
                    <th>New Quantity</th>
                    <th>Unit.Price</th>
                    <th>Discount</th>
                    <th>Total.Price</th>
                    <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                 <tr  >
                   <td>1</td>
                   <td v-if="returnP.product_name">{{ returnP.product_name.productName }} ({{ returnP.product_name.productCode }})</td>
                   <td v-if="returnP.brandname"> 
                   {{ returnP.brandname.productBrandName }}</td>
                 
                   <td><span v-if="returnP.unit_name">{{ returnP.unit_name.uniteEntryName }}</span></td>
                   <td>
                        <span v-if="negative" style="color:red">Negative Value Not Allowed</span>
                     <input type="text" v-model="form.preQun" disabled name="quantity" placeholder="Quantity" class="form-control"></td>
                   <td>
                        <span v-if="negative" style="color:red">Negative Value Not Allowed</span>
                     <input type="text" v-model="form.quantty" @keyup="quantity" @keyup.prevent="unitPrice()" name="quantity" placeholder="Quantity" class="form-control"></td>
                   <td>{{ returnP.unitPrice }}</td>
                   <td> 
                      <span v-if="negative1" style="color:red">Negative Value Not Allowed</span>  
                     <input type="text" v-model="form.percetage"  @keyup="disnt"  @keyup.prevent="percetage()" name="percetage" placeholder="Percetage" class="form-control">
                 </td>
                   <td>  <input type="text" disabled v-model="form.totalPrice"  name="totalPrice" placeholder="Total Price" class="form-control"></td>
                   <td>
                  
                      <button :disabled="loading" type="button" class="btn btn-hover-shine  btn-success" @click.prevent="returnProduct()">
                         <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>

                <span class="mr-2 opacity-7">
                  <i class="fa fa-plus"></i>
                </span>
                         Return
                      </button>
                   </td>
                 
                 </tr>
               </tbody>
            </table>
          </div>
             <div class="table-responsive bg-white">
           <table class="table table-hover table-bordered mb-0">
              <thead>
                 <tr style="background:rgba(242, 242, 242, 0.47)">
                    <th>SN</th>
                    <th>Product Name</th>
                    <th>Brand </th>
 
                    <th>Unit</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                    <th>Action</th>
                   
                  </tr>
               </thead>
               <tbody>
                 <tr v-for="(purchaseProductList, index) in purchaseProductListgets" :key="purchaseProductList.id">
                   <td>{{ index+1 }}</td>
                  <td v-if="purchaseProductList.product_name">{{ purchaseProductList.product_name.productName }} ({{ purchaseProductList.product_name.productCode }})</td>
                   <td v-if="purchaseProductList.brandname"> 
                   {{ purchaseProductList.brandname.productBrandName }}</td>                 
                 
                   <td><span v-if="purchaseProductList.unit_name">{{ purchaseProductList.unit_name.uniteEntryName }}</span></td>
                   <td>{{ purchaseProductList.preQun-purchaseProductList.quantity }}</td>
                   <td>{{ purchaseProductList.unitPrice }}</td>
                   <td>{{  (purchaseProductList.preQun-purchaseProductList.quantity)*(purchaseProductList.unitPrice)}}</td>
                
                   <td>    <button
                    type="button"
                    @click="distroyRepurchase(purchaseProductList.purchaseProductId )"
                    class="btn btn-hover-shine btn-danger"
                  >
                    <i class="fa fa-trash"></i>Delete
                  </button></td>
                
                  
                 </tr>
               </tbody>
            </table>
          </div>


         <div class="purchase-entery purchase-border p-3" v-if="showTotal">
           <div class="row m-0">
             <div class="col-auto ml-auto purcha-border p-3">
               <div class="table-responsive bg-white">
                 <table class=" table-hover  mb-0">
                   <tr style="display:none;">
                     <td class="title-name">Total Purchase Value </td>
                     <td>
                       <input type="hidden" disabled v-model="form.totalProductQuantity" name="totalProductQuantity" class="form-control"  placeholder="Total Product Quantity">
                       <div>
                         <input type="text" disabled v-model="form.totalPurchaseValue" name="totalPurchaseValue" class="form-control"  placeholder="Total Purchase Value">
                       </div>
                      </td>
                   </tr>
                   <tr style="display:none;">
                     <td class="title-name">Carriage Inward</td>
                     <td>
                         <div>
                            <span v-if="negative3" style="color:red">Negative Value Not Allowed</span>
                           <input type="text"  v-model="form.carriageInward" @keyup="inward1" @keyup.prevent="carriageInward()" name="carriageInward"  class="form-control" placeholder="Carriage Inward">
                         </div>
                      </td>
                   </tr>
                   <tr>
                     <td class="title-name">Total Amount</td>
                     <td>
                       <div>
                         <input type="text" disabled v-model="form.totalAmount" name="totalAmount" class="form-control" placeholder="Total Amount">
                       </div>
                      </td>
                   </tr>
                   <tr>
                     <td colspan="2"> <hr> </td>
                   </tr>
                    <tr>
                     <td class="title-name">Discount </td>
                     <td>
                         <div>
                            <span v-if="negative4" style="color:red">Negative Value Not Allowed</span>
                           <input type="text" v-model="form.discount" @keyup="dis"  @keyup.prevent="discount()" name="discount" class="form-control" placeholder="Discount">
                         </div>
                      </td>
                   </tr>
                   <tr>
                     <td class="title-name">Supplier Payable </td>
                     <td>
                         <div>
                           <input type="text" disabled v-model="form.supplierPayable"  name="supplierPayable" class="form-control" placeholder="Supplier Payable">
                         </div>
                      </td>
                   </tr>
                   <tr style="display:none;">
                     <td colspan="2"> <hr> </td>
                   </tr>
                  
                   <tr style="display:none;">
                     <td class="title-name">Other Cost </td>
                     <td>
                         <div>
                            <span v-if="negative5" style="color:red">Negative Value Not Allowed</span>
                           <input type="text" v-model="form.otherCost" @keyup="other" @keyup.prevent="otherCosts()" name="otherCost" class="form-control" placeholder="Other Cost">
                         </div>
                      </td>
                   </tr>
                   <tr style="display:none;">
                     <td class="title-name">Damage &amp; Warranty</td>
                     <td>
                         <div>
                            <span v-if="negative6" style="color:red">Negative Value Not Allowed</span>
                           <input type="text" @keyup="damage" v-model="form.damageAndWarranty" @keyup.prevent="damageAndWarrantys()" name="damageAndWarranty" class="form-control" placeholder="Damage And Warranty">
                         </div>
                      </td>
                   </tr>
                   <tr>
                     <td colspan="2"> <hr> </td>
                   </tr>
                   <tr>
                     <td class="title-name">Total Product Cost</td>
                     <td>
                         <div>
                           <input type="text" disabled v-model="form.totalProductCost" name="totalProductCost" class="form-control" placeholder="Total Product Cost">
                         </div>
                         <input type="hidden" disabled v-model="form.totalDiscount" name="totalDiscount" class="form-control" placeholder="Total Product Cost">
                      </td>
                   </tr>
                   <tr>
                     <td class="title-name">Previous Payable</td>
                     <td>
                         <div>
                           <input type="text" disabled v-model="form.previousPayable" name="previousPayable" class="form-control" placeholder="Previous Payable">
                         </div>
                      </td>
                   </tr>
                   <tr>
                     <td class="title-name">Current Payable </td>
                     <td>
                         <div>
                           <input type="text" disabled v-model="form.currentPayable" name="currentPayable" class="form-control" placeholder="Current Payable">
                         </div>
                      </td>
                   </tr>
                   <!-- <tr>
                     <td class="title-name">Payable</td>
                     <td>
                         <div>
                           <input type="text" v-model="form.payable" name="payable" class="form-control" placeholder="Payable ">
                         </div>
                      </td>
                   </tr> -->
                   <tr>
                     <td>
                     </td>
                     <td>
                         <button
                  type="button"
                  data-toggle="modal"
                  :data-target="'#pay'"
                  class="mt-3 ml-2 btn btn-warning"
                >
                  <span class="mr-2 opacity-7">
                    <i class="fa fa-paper-plane"></i>
                  </span>
                  <span class="mr-1"> Pay Now </span>
                </button>
                       <!-- <button type="submit" @click.prevent="purchaseReturn()" class="mt-3 mr-2 btn-pill btn-hover-shine btn btn-primary"> Submit </button> -->
                     </td>
                   </tr>
                  </table>
                    <!-- Modal Payment-->
              <div
                class="modal fade"
                :id="'pay'"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header bg-primary text-light">
                      <h5 class="modal-title" id="exampleModalLongTitle">
                        Pay Now
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
                      <div class="row">
                        <div class="col-12 col-md-6 col-xs-12">
                          <div class="form-group m-0 row mt-2">
                            <div class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0">
                              <label>Total : </label>
                            </div>
                            <div class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0">
                              <input
                                type="text"
                                disabled
                              v-model="form.currentPayable"
                                class="form-control"
                                placeholder="Cash Amount"
                              />
                            </div>
                          </div>
                          <div class="form-group m-0 row mt-2">
                            <div class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0">
                              <label> Cash </label>
                            </div>
                            <div class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0">
                              <input
                                type="text"                           
                                 v-model="form.currentPaidAmount"
                                @keyup="totalAmountCalculate"
                                class="form-control"
                                placeholder="Cash Amount"
                              />
                              <span style="color: red" v-if="negativepay==true"
                                >Negative Ammount Not Allowed</span
                              ><br>
                              <span style="color: red" v-if="alert==true"
                                >Insufficient Balance Avil Balance Is {{this.avilable_balance}}</span
                              >
                            </div>
                          </div>
                          <div class="form-group m-0 row mt-2">
                            <div class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0">
                              <label>Due: </label>
                            </div>
                            <div class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0">
                              <input
                                type="text"
                                disabled
                                v-model="form.currentDue"
                                class="form-control"
                                placeholder="Cash Amount"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6 col-xs-12">
                          
                            <button v-if="morepay==false" class="btn btn-info" @click.prevent="open()" ><i class="fa fa-plus" aria-hidden="true"></i> More pay </button>
                            <button v-if="close==true" class="btn btn-danger" @click.prevent="closeForm()" ><i class="fa fa-minus" aria-hidden="true"></i>
 Close </button>
                            <div v-if="morepay">
                            <div class="form-group">
                              <label>Receiver Bank Type Name</label>
                              <select
                                v-model="form.receiverbankTypeEntryId"
                                name="bankTypeEntryId"
                                class="form-control"
                                :class="{
                                  'is-invalid':
                                    form.errors.has('bankTypeEntryId'),
                                }"
                                @change.prevent="receiverBankTypeIdCatch()"
                              >
                                <option value="">Select One</option>
                                <option
                                  v-for="showBankTypeData in showBankTypeDatas"
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
                            <div v-if="fromshow">
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
                              <div v-if="mobileAccount">
                                <div class="form-group">
                                  <label>
                                    Receiver Mobile A/C No
                                    <i
                                      class="
                                        fa fa-star
                                        text-danger text-10
                                        cursor-pointer
                                      "
                                      title="Mendatory Field"
                                      data-placement="top"
                                      data-toggle="tooltip"
                                      data-original-title="Mendatory Field"
                                    ></i
                                  ></label>
                                  <input
                                    type="text"
                                    v-model="form.receiverMobileAcNo"
                                    class="form-control"
                                  />
                                </div>
                                <div class="form-group">
                                  <label> Trx No </label>
                                  <input
                                    type="text"
                                    v-model="form.receiverTrxNo"
                                    class="form-control"
                                  />
                                </div>
                              </div>
                              <div class="form-group">
                                <label>Sender Bank Type Name</label>
                                <select
                                  disabled
                                  v-model="form.senderbankTypeEntryId"
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
                                <label>Sender Bank Name</label>
                                <select
                                  v-model="form.senderbankEntryId"
                                  name="bankEntryId"
                                  class="form-control"
                                  :class="{
                                    'is-invalid':
                                      form.errors.has('bankEntryId'),
                                  }"
                                  @change.prevent="bankAccountIdCatch()"
                                >
                                  <option value="">Select Bank Name</option>
                                  <option
                                    v-for="showBankName in showBankNames"
                                    :value="showBankName.bankEntryId"
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
                                <label>Sender Account No</label>
                                <select
                                  v-model="form.senderbankAccountId"
                                  name="bankAccountId"
                                  class="form-control"
                                  :class="{
                                    'is-invalid':
                                      form.errors.has('bankAccountId'),
                                  }"
                                  @change="getBankMoreInfo()"
                                >
                                  <option value="">Select Bank Account</option>
                                  <option
                                    v-for="showBankAccount in showBankAccounts"
                                    :value="showBankAccount.bankId"
                                  >
                                    <span
                                      v-if="showBankAccount.bankAccountName"
                                    >
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
                              </div>

                              <div v-if="bankInformationAccountInfoStatus">
                                <div class="form-group" style="display: none">
                                  <label>Sender Branch Name </label>
                                  <input
                                    type="text"
                                    v-model="form.senderbranchName"
                                    class="form-control"
                                    readonly
                                  />
                                </div>

                                <div class="form-group">
                                  <label> Sender Account No</label>
                                  <input
                                    type="text"
                                    v-model="form.senderAccNo"
                                    class="form-control"
                                    readonly
                                  />
                                </div>
                              </div>
                              <div class="form-group m-0 row mt-2">
                                <div
                                  class="col-lg-4 col-md-6 col-sm-4 col-12 pl-0"
                                >
                                  <label>Amount </label>
                                </div>
                                <div
                                  class="col-lg-7 col-md-6 col-sm-8 col-12 pl-0"
                                >
                                  <input
                                    type="text"
                                    v-model="form.bankAmount"
                                  @keyup="bankAmountCalculate"
                                    class="form-control"
                                    placeholder="Bank Amount"
                                  />
                                  <span style="color: red" v-if="negativepaybank==true"
                                >Negative Ammount Not Allowed</span
                              >
                               <span style="color: red" v-if="alert1==true"
                                >Insufficient Balance Avil Balance Is {{this.avilable_bal}}</span
                              >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <center>
                        <span v-if='paybutton==false' >
                         
                           <button
                             @click.prevent="purchaseReturn()"
                              type="submit"
                              :disabled="loadingPay"
                              class="
                                mt-3
                                btn-pill btn-shadow btn-wide
                                fsize-1
                                btn btn-warning btn-lg
                              "
                            >
             
                <span
                  v-if="loadingPay"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                            <span class="mr-2 opacity-7">
                              <i class="fa fa-paper-plane"></i>
                            </span>
                            <span class="mr-1"> Pay Now </span>
                          </button>
                          
                       
                        </span>
                        <span v-if='paybutton' >
                          <button
                          
                            disabled
                            type="submit"
                            @click.prevent="purchaseReturn()"
                            class="
                              mt-3
                              btn-pill btn-shadow btn-wide
                              fsize-1
                              btn btn-warning btn-lg
                            "
                          >
                            <span class="mr-2 opacity-7">
                              <i class="fa fa-paper-plane"></i>
                            </span>
                            <span class="mr-1"> Pay Now </span>
                          </button>
                          
                       
                        </span>
                      </center>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-hover-shine btn-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                </div>
             </div>
           </div>
         </div>
       </form>
      </div>
  </span>

</template>



<script>
    export default {
        data(){
          return {
              invoices: {},
               form: new Form({
                  purchaseDate : '',
                  purchaseInvoiceNo : '',
                  productSupplierId : '',
                  moblieNo : '',
                  address : '',
                  // Product Field
                  purchaseTypeId : [],
                  productId : '',
                  brandId : '',
                  unitId : '',
                  quantity : '',
                  quantty : '',
                  unitPrice : '',
                  percetage : '',
                  totalPrice : '',
                  percetagePrice : '',
                  // Total calculation
                  totalProductQuantity : '',
                  totalPurchaseValue : '',
                  carriageInward : 0,
                  totalAmount : '',
                  discount : 0,
                  supplierPayable : '',
                  otherCost : 0,
                  damageAndWarranty : 0,
                  totalProductCost : '',
                  totalDiscount : '',
                  previousPayable : '',
                  currentPayable : '',
                   preQun:'',
                  // payable : '',

                  // Modal Form
                  purchaseProductIdCatch : '',
                  modelNo : '',
                  batchNo : '',
                  qrCode : '',
                  mfgLicenseNO : '',
                  warranty : '',
                  selectMothOrYearWarranty : '',
                  guarantee : '',
                  selectMothOrYearGuarantee : '',
                  mfgDate : '',
                  expiryDate : '',
                  tax : '',
                  taxAmount : '',
                  taxAmountType : '',
                  quantityType : '',
                  quantityNoti : '',
                  proDescription : '',
                  proAdvantage : '',
                  // Add More Field
                  fieldNameOne:'',
                  fieldNameTwo:'',
                  fieldNameThree:'',
                  fieldNameFour:'',
                  workOne:'',
                  workTwo:'',
                  workThree:'',
                  workFour:'',
                    //bank info sender
         receiverbankTypeEntryId: "",
         receiverBankName: "",
        receiverAcNo: "",
         receiverAcName: "",
         receiverBranchName: "",
         receiverMobileAcNo: "",
         receiverTrxNo: "",
        //receiver bank info
        senderbankTypeEntryId: "",
        senderbankEntryId: "",
        senderbankAccountId: "",
        senderbranchName: "",
        senderAccNo: "",
        currentPaidAmount: 0,
        currentDue:"",
        bankAmount:0,
              }),
            
                countryLists:{},
               
                purchaseTypeLists:{},
                productSupplierLists:{},
                purchaseTypes:{},
                brandLists:{},
                unitNameShows:{},
                productNameLists:{},
                purchaseProductLists:{},
                purchaseProductListgets:{},
                productBrandList:{},
                purchaseInvoiceNumber:{},
                cusPurchaseInvoice:{},
                cusPreviousPayable:{},
                purchaseInvoiceLists:{},
                adminPurchaseTypeLists:{},
                invoiceProductMoreDetailss:{},
                invoiceProductMoreField1:[],
                invoiceProductMoreField2:[],
                invoiceProductMoreField3:[],
                invoiceProductMoreField4:[],

                taxAmountTypeShow:false,
                fieldNameOneShow:false,
                fieldNameTwoShow:false,
                fieldNameThreeShow:false,
                fieldNameFourShow:false,
                showCal:false,
                showTotal:false,
                  negative:false,
                 negative1:false,
                 negative2:false,
                 negative3:false,
                 negative4:false,
                 negative5:false,
                 negative6:false,
                 negative7:false,

                    fromshow: false,
                   negativepay: false,
                   negativepaybank: false,
      guestInfo: true,
                invoiceN:'',
                productN:'',
                returnP:"",
                Inward:'',
                  pendingCount: "",
      paymentTypeLists: {},
      showBankNames: [],
      showBankAccounts: [],
      showBankTypeDatas: [],
      bankInformationAccountInfoStatus: [],
      mobileAccount: false,
      bankAccount: false,
      alert:false,
      alert1:false,
      paybutton:false,
       morepay:false,
      close:false,
        loading:false,
      loadingPay:false,
         avilable_balance:'',
                avilable_bal:'', 
                   
          }
        },
       

        mounted(){
           this.invoiceList();
           this.productSupplierList();
            this.getData();
        },
        methods:{
              currentDue(){
this.form.currentDue=this.form.currentPayable;
},
open(){
this.morepay=true;
this.close=true;
},
   
closeForm(){
this.morepay=false;
this.close=false;
},
            invoiceList(){
                axios.get('/returnPurchase').then(res =>{
                   this.invoices = res.data.getInvoice;
                })
            },
            quantity(e){
            this.form.quantity=this.form.preQun-this.form.quantty;
             let stringValue = e.target.value.toString()
            let regex = /^\d*(\.\d{1,2})?$/
            if(!stringValue.match(regex) && this.form.quantity!==""){
             this.negative=true;
            
              this.form.quantity=1;
            }
        else{
          if(this.form.quantity<0){
           this.negative=true;
             this.form.quantity=1;
          }
          else{
             this.negative=false;
          }
           this.negative=false;
        }
          },
   unit(e){
             let stringValue = e.target.value.toString()
            let regex = /^\d*(\.\d{1,2})?$/
            if(!stringValue.match(regex) && this.form.unitPrice!==""){
             this.negative1=true;
            
              this.form.unitPrice=1;
            }
        else{
          if(this.form.unitPrice<0){
           this.negative1=true;
             this.form.unitPrice=1;
          }
          else{
             this.negative1=false;
          }
           this.negative1=false;
        }
          },
   disnt(e){
             let stringValue = e.target.value.toString()
            let regex = /^\d*(\.\d{1,2})?$/
            if(!stringValue.match(regex) && this.form.percetage!==""){
             this.negative2=true;
            
              this.form.percetage=1;
            }
        else{
          if(this.form.percetage<0){
           this.negative2=true;
             this.form.percetage=1;
          }
          else{
             this.negative2=false;
          }
           this.negative2=false;
        }
          },
   inward1(e){
             let stringValue = e.target.value.toString()
            let regex = /^\d*(\.\d{1,2})?$/
            if(!stringValue.match(regex) && this.form.carriageInward!==""){
             this.negative3=true;
            
              this.form.carriageInward=0;
            }
        else{
          if(this.form.carriageInward<0){
           this.negative3=true;
             this.form.carriageInward=0;
          }
          else{
             this.negative3=false;
          }
           this.negative3=false;
        }
          },
   dis(e){
             let stringValue = e.target.value.toString()
            let regex = /^\d*(\.\d{1,2})?$/
            if(!stringValue.match(regex) && this.form.discount!==""){
             this.negative4=true;
            
              this.form.discount=0;
            }
        else{
          if(this.form.discount<0){
           this.negative4=true;
             this.form.discount=0;
          }
          else{
             this.negative4=false;
          }
           this.negative4=false;
        }
          },
   other(e){
             let stringValue = e.target.value.toString()
            let regex = /^\d*(\.\d{1,2})?$/
            if(!stringValue.match(regex) && this.form.otherCost!==""){
             this.negative5=true;
            
              this.form.otherCost=0;
            }
        else{
          if(this.form.otherCost<0){
           this.negative5=true;
             this.form.otherCost=0;
          }
          else{
             this.negative5=false;
          }
           this.negative5=false;
        }
          },
   damage(e){
             let stringValue = e.target.value.toString()
            let regex = /^\d*(\.\d{1,2})?$/
            if(!stringValue.match(regex) && this.form.damageAndWarranty!==""){
             this.negative6=true;
            
              this.form.damageAndWarranty=0;
            }
        else{
          if(this.form.damageAndWarranty<0){
           this.negative6=true;
             this.form.damageAndWarranty=0;
          }
          else{
             this.negative6=false;
          }
           this.negative6=false;
        }
          },
              productSupplierList(){
              axios.get('/shopWishProductSupplier').then(res => {
                 this.productSupplierLists = res.data.productSupplierList;
              });
          },
            showProduct(){
                 
                axios.get(`/returnPurchase/${this.invoiceN}/edit`).then(res=>{
                    this.form.fill(res.data);
                     this.form.moblieNo =res.data.product_supplier_name.productSupplierPhone
                   this.form.address=res.data.product_supplier_name.productSupplierAddress 
                    axios
            .get("getLastBalanceByAccCode/" + res.data.product_supplier_name.accountCode)
            .then((res) => {
              this.form.previousPayable = res.data.balance;
              this.cusPreviousPayable = res.data.balance;
              
          let totalcurrant =parseFloat(this.cusPreviousPayable) - parseFloat(this.form.totalProductCost );
          this.form.currentPayable = totalcurrant;
         this.currentDue()
     
            });
                  
                 
                })
                axios.get(`/returnPurchase/${this.invoiceN}`).then(res=>{
                   this.purchaseProductLists=res.data.getProduct
                   this.form.totalPurchaseValue= res.data.getTotalPrice
                   
                 
                })
                 axios.get(`/returnPList/${this.invoiceN}`).then(res=>{
                 this.purchaseProductListgets = res.data.getData
             })
             axios.get(`/returnPurchaseInvoice/${this.invoiceN}`).then(response=>{
                    // this.form.totalPurchaseValue=response.data.totalPurchaseValue;
                    this.form.carriageInward= parseFloat(response.data.carriageInward);
                    this.form.discount= parseFloat(response.data.discount);
                    this.form.otherCost= parseFloat(response.data.otherCost);
                    this.form.damageAndWarranty= parseFloat(response.data.damageAndWarranty);
                    this.form.totalAmount= parseFloat(response.data.carriageInward)+ parseFloat(this.form.totalPurchaseValue);                  
                    this.form.supplierPayable= parseFloat( this.form.totalAmount)- parseFloat(this.form.discount);
                      this.form.totalProductCost = parseFloat( this.form.supplierPayable)- parseFloat(this.form.otherCost)+ parseFloat(this.form.damageAndWarranty);
                      //  this.form.totalDiscount = totalAmount;
                        // this.form.currentPayable = this.form.totalProductCost;
                  
            
                  })
                     
           
                
            },
            showInfo(){
                axios.get(`/returnPurchaseProduct/${this.invoiceN}/${this.productN}`).then(res=>{
                  this.showCal=true
                  
                    this.form.fill(res.data);
                    this.form.preQun=res.data.quantity;
                    this.returnP=res.data
                    
                      this.form.moblieNo =res.data.product_supplier_name.productSupplierPhone
                   this.form.address=res.data.product_supplier_name.productSupplierAddress             
                   axios.get(`/returnPurchaseInvoice/${this.invoiceN}`).then(response=>{
                    this.form.totalPurchaseValue=response.data.totalPurchaseValue;
                    this.form.carriageInward=response.data.carriageInward;
                   this.currentDue();
            
                })
            
                })
               
              
            },
             unitPrice(){
              let quantity = this.form.quantity;
              let unitPrice = this.form.unitPrice;
              let totalPrice = quantity * unitPrice;
              this.form.totalPrice = totalPrice;
              this.form.percetagePrice = totalPrice;
              // this.form.totalPurchaseValue=this.form.totalPrice;
              this.percetage();
         },
         percetage(){
              if (this.form.percetage != '') {
                  let discountDiv  = parseFloat(this.form.percetage) * parseFloat(this.form.percetagePrice) / parseFloat(100);
                  let discount = parseFloat(this.form.percetagePrice) - parseFloat(discountDiv)
                  this.form.totalPrice  = discount;
                  // this.form.totalPurchaseValue=discount;
              }
              else{
                 this.unitPrice();
              }
          },
           carriageInward(){
         if (this.form.carriageInward == "") {
                  let totalAmount = 0 +  parseFloat(this.form.totalPurchaseValue);
                this.form.totalAmount  = totalAmount;
                this.form.supplierPayable =  parseFloat( totalAmount)- parseFloat(this.form.discount);
                    this.form.totalProductCost = parseFloat( this.form.supplierPayable)- parseFloat(this.form.otherCost)+ parseFloat(this.form.damageAndWarranty);
                      //  this.form.totalDiscount = totalAmount;
                        this.form.currentPayable = this.form.totalProductCost;
                  
                this.form.currentPayable = totalAmount;
                if (this.cusPreviousPayable > 0) {
                  let totalcurrant =  parseFloat(this.cusPreviousPayable) +  parseFloat(this.form.currentPayable)
                  this.form.currentPayable = totalcurrant;
                }
           }
           else{
                let totalAmount = parseFloat(this.form.carriageInward) +  parseFloat(this.form.totalPurchaseValue);
                this.form.totalAmount  = totalAmount;
                this.form.supplierPayable = parseFloat( totalAmount)- parseFloat(this.form.discount);
                   this.form.totalProductCost = parseFloat( this.form.supplierPayable)+ parseFloat(this.form.otherCost)+ parseFloat(this.form.damageAndWarranty);
                      //  this.form.totalDiscount = totalAmount;
                        this.form.currentPayable = this.form.totalProductCost;
                  
                if (this.cusPreviousPayable > 0) {
                  let totalcurrant =  parseFloat(this.cusPreviousPayable) +  parseFloat(this.form.currentPayable)
                  this.form.currentPayable = totalcurrant;
                }
           }
              
           },
            discount(){
             if (this.form.discount == "") {
                this.carriageInward();
             }
             else{
                let discount = parseFloat(this.form.totalAmount) - parseFloat(this.form.discount);
                this.form.supplierPayable = discount;
                this.form.totalProductCost = parseFloat( this.form.supplierPayable)- parseFloat(this.form.otherCost)+ parseFloat(this.form.damageAndWarranty);
                      //  this.form.totalDiscount = totalAmount;
                        this.form.currentPayable = this.form.totalProductCost;
                if (this.cusPreviousPayable > 0) {
                  let totalcurrant =  parseFloat(this.cusPreviousPayable) +  parseFloat(this.form.currentPayable)
                  this.form.currentPayable = totalcurrant;
                }
             }
         },
           otherCosts(){
            if(this.form.otherCost == ""){
              if (this.form.otherCost == "" && this.form.damageAndWarranty =="") {
                 this.discount();
              }
            }
            else{
               let otherCost = parseFloat(this.form.supplierPayable) - parseFloat(this.form.otherCost)+ parseFloat(this.form.damageAndWarranty);
               this.form.totalProductCost = otherCost;
              this.form.currentPayable = this.form.totalProductCost;
               if (this.cusPreviousPayable > 0) {
                 let totalcurrant =  parseFloat(this.cusPreviousPayable) +  parseFloat(this.form.currentPayable)
                 this.form.currentPayable = totalcurrant;
               }
            }
         },
         damageAndWarrantys(){
            if(this.form.damageAndWarranty == ""){
              if (this.form.otherCost == "" && this.form.damageAndWarranty == "") {
                 this.discount();
              }
            }
            else{
           

              let otherCost = parseFloat(this.form.supplierPayable) - parseFloat(this.form.otherCost)+ parseFloat(this.form.damageAndWarranty);;
              this.form.totalProductCost = otherCost;
              this.form.currentPayable = otherCost;

               if (this.cusPreviousPayable > 0) {
                 let totalcurrant =  parseFloat(this.cusPreviousPayable) +  parseFloat(this.form.currentPayable)
                 this.form.currentPayable = totalcurrant;
               }
            }
         },
           returnProduct(){
            if(this.form.quantity>this.returnP.quantity){
               this.form.totalPurchaseValue=''.
               Toast.fire({
                   icon: 'error',
                   title: 'Purchase Product Quantity dcrease'
               })
              
            }
            else{
               this.form.totalPurchaseValue=''
           this.showCal=false
           this.showTotal=true
            this.loading = true;
             this.form.post(`returnPurchaseUpdate/${this.invoiceN}/${this.productN}`).then(res=>{
                this.loading = false;
                 this.showProduct();
                 axios.get(`/returnPurchase/${this.invoiceN}`).then(res=>{                  
                   this.form.totalPurchaseValue= res.data.getTotalPrice
                   
                 
                })
                 axios.get(`/returnPList/${this.invoiceN}`).then(res=>{
                 this.purchaseProductListgets = res.data.getData
             })
            
            
             Toast.fire({
                   icon: 'success',
                   title: 'Purchase Return Successfully'
               })
              
             }).catch((res) => {
          this.loading = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });

            }
           },
           purchaseReturn(){
             this.loadingPay = true;
             this.form.put('/returnPurchase/'+this.invoiceN).then(res=>{
                this.loadingPay = false;
                 this.showProduct()
               
             this.invoiceList();
             this.productSupplierList();
           
              
               Toast.fire({
                   icon: 'success',
                   title: 'Purchase Return Successfully'
               })
                $("#pay").modal("hide");
                 this.showTotal=false 
                     this.showCal=false
            
             
              this.invoiceN='',
              this.previousPayable='',
              this.currentPayable='',
             this.$router.push('purchasereturn')

               }).catch((res) => {
          this.loadingPay = false;
          Toast.fire({
            icon: "error",
            title: "Something wrong",
          });
        });
              
         
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
    receiverBankTypeIdCatch() {
      axios
        .get("/bankNameList/" + this.form.receiverbankTypeEntryId)
        .then((res) => {
          this.showBankNames = res.data.show;
          this.fromshow = true;
        });

      if (this.form.receiverbankTypeEntryId == 1) {
        this.form.senderbankTypeEntryId = 1;
        this.bankAccount = true;
        this.mobileAccount = false;
      }
      if (this.form.receiverbankTypeEntryId == 2) {
        this.form.senderbankTypeEntryId = 2;
        this.bankAccount = false;
        this.mobileAccount = true;
      }
    },
    bankTypeIdCatch() {
      axios
        .get("/bankNameList/" + this.form.senderbankTypeEntryId)
        .then((res) => {
          this.showBankNames = res.data.show;
        });
      if (this.form.senderbankTypeEntryId == 1) {
        this.bankAccount = true;
        this.mobileAccount = false;
      }
      if (this.form.senderbankTypeEntryId == 2) {
        this.bankAccount = false;
        this.mobileAccount = true;
      }
    },
    bankAccountIdCatch() {
      axios
        .get("/bankAccountList/" + this.form.senderbankEntryId)
        .then((res) => {
          this.showBankAccounts = res.data.data;
        });
    },
   distroyRepurchase(id){
         axios.get('/rePurchaseDistroy/'+id).then(res=>{
           this.showProduct();
           Toast.fire({
             icon:'success',
             title:'successfullt deleted!!'
           });
         })
   },
    getBankMoreInfo() {
      axios
        .get("/bankAccountMoreInfo/" + this.form.senderbankAccountId)
        .then((res) => {
          this.form.senderbranchName = res.data.data.bankBranch;
          this.form.senderAccNo = res.data.data.bankAccountNumber;
          this.bankInformationAccountInfoStatus = 1;
          let url = "checkBalance/"+res.data.data.accountCode;
                          axios.get(url)
                            .then((response) => {
                           
                              this.avilable_bal = response.data.available_balance;
                            });

        });
    },
     totalAmountCalculate(e) {
      //======================== check balance

      axios.get("/getCashRegister/1").then((res) => {
        let url = "checkBalance/" + res.data.accCode;
        axios.get(url).then((response) => {
          // this.available_balance_cash_status = true;
          this.avilable_balance = response.data.available_balance;
          // this.calculate_available_balance(response.data.available_balance,1); // cash
        });
      });

      //======================== check balance
      if (
        parseFloat(this.form.currentPaidAmount) >
        parseFloat(this.avilable_balance)
      ) {
        this.alert = true;
        this.aler1t = false;
        this.form.currentPaidAmount = 0;
        this.form.currentDue = this.form.currentPayable;
        this.paybutton = true;
      } else {
        this.paybutton = false;
        this.alert = false;
        this.alert1 = false;
        if (this.form.bankAmount == null ){
          this.totalcal = 0 + parseFloat(this.form.currentPaidAmount);
        } else {
          this.totalcal =
            parseFloat(this.form.currentPaidAmount) +
            parseFloat(this.form.bankAmount);
        }
        if (this.form.currentPaidAmount == null) {
          this.totalcal = parseFloat(this.form.bankAmount) + 0;
        }

        this.form.currentDue =
          parseFloat(this.form.currentPayable) - parseFloat(this.totalcal);
        if (this.form.currentPaidAmount < 0) {
          this.form.currentPaidAmount = 0;
          this.negativepay = true;
          this.paybutton = true;
        } else {
          this.paybutton = false;
          let stringValue = e.target.value.toString();
          let regex = /^\d*(\.\d{1,2})?$/;
          if (!stringValue.match(regex) && this.form.currentPaidAmount !== "") {
            this.form.currentPaidAmount = 0;
            this.negativepay = true;
            this.paybutton = true;
          } else {
            this.negativepay = false;
            this.paybutton = false;
            if (this.form.bankAmount != null) {
              if (
                parseFloat(this.form.bankAmount) +
                  parseFloat(this.form.currentPaidAmount) >
                this.form.currentPayable
              ) {
                this.negativepay = true;
                this.paybutton = true;
                this.form.currentPaidAmount = 0;
                this.form.currentDue =
                  parseFloat(this.form.currentPayable) -
                  parseFloat(this.form.bankAmount);
              } else {
                this.negativepay = false;
                this.paybutton = false;
              }
            } else {
              if (
                parseFloat(this.form.currentPaidAmount) >
                this.form.currentPayable
              ) {
                this.negativepay = true;
                this.paybutton = true;
                this.form.currentPaidAmount = 0;
                this.form.currentDue =
                  parseFloat(this.form.currentPayable) -
                  parseFloat(this.form.currentPaidAmount);
              } else {
                this.negativepay = false;
                this.paybutton = false;
              }
            }
          }
        }
      }
    },
    bankAmountCalculate(e) {
      if (this.form.bankAmount > this.avilable_bal) {
        this.alert1 = true;
        this.alert = false;
        this.form.bankAmount = 0;
        this.paybutton = true;
          this.form.currentDue =parseFloat(this.form.currentPayable) -parseFloat(this.form.currentPaidAmount)+parseFloat(this.form.bankAmount);
        
      } else {
        this.paybutton = false;
        this.alert1 = false;
        this.alert = false;
        if (this.form.currentPaidAmount == null) {
          this.totalcal = 0 + parseFloat(this.form.bankAmount);
        } else {
          this.totalcal =
            parseFloat(this.form.currentPaidAmount) +
            parseFloat(this.form.bankAmount);
        }
        if (this.form.bankAmount == null) {
          this.totalcal = parseFloat(this.form.currentPaidAmount) + 0;
        }

        this.form.currentDue =
          parseFloat(this.form.currentPayable) - parseFloat(this.totalcal);

        if (this.form.bankAmount < 0) {
          this.form.bankAmount = 0;
          this.negativepaybank = true;
        } else {
          let stringValue = e.target.value.toString();
          let regex = /^\d*(\.\d{1,2})?$/;
          if (!stringValue.match(regex) && this.form.bankAmount !== "") {
            this.form.bankAmount = "";
            this.negativepaybank = true;
          } else {
            this.negativepaybank = false;
            if (this.form.currentPaidAmount !='') {
              if (
                parseFloat(this.form.bankAmount) +
                  parseFloat(this.form.currentPaidAmount) >
                this.form.currentPayable
              ) {
                this.negativepaybank = true;
                this.form.bankAmount = 0;
               
                this.form.currentDue =parseFloat(this.form.currentPayable) -parseFloat(this.form.currentPaidAmount);
              } else {
                this.negativepaybank = false;
              }
            } else {
            
              if (parseFloat(this.form.bankAmount) > this.form.currentPayable) {
                this.negativepaybank = true;
                this.form.bankAmount = 0;
                this.form.currentDue =
                  parseFloat(this.form.currentPayable) -
                  parseFloat(this.form.bankAmount);
              } else {
                this.negativepaybank = false;
              }
            }
          }
        }
      }
    },
            
          
        
        },
    }
</script>
