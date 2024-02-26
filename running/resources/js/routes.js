export const routes = [
    ////////////////       Admin Menu Create
    {

        path: '/index',
        component: () => import(/* webpackChunkName: "index" */'./index'),

    },
   { path: '*',  component: () => import(/* webpackChunkName: "shop" */'./index-shop'), },
   {
        path: '/home',
        component: () => import(/* webpackChunkName: "home" */'./index'),

    },
    {
        path: '/shop',
        component: () => import(/* webpackChunkName: "shop" */'./index-shop'),


    },
    {
        path: '/databaseSeeds',
        component: () => import(/* webpackChunkName: "db-seed" */'./admin/adminmenucreate/databaseSeeds'),

    },

    {
        path: '/purchasetype@Edit:id',
        component: () => import(/* webpackChunkName: "purchase-type-edit" */'./admin/adminmenucreate/purchaseTEdit'),

    },
    {
        path: '/purchaseTypeNew',
        component: () => import(/* webpackChunkName: "purchase-type-new" */'./admin/adminmenucreate/purchaseTypeNew'),

    },
    {
        path: '/purchaseTypeCreate',
        component: () => import(/* webpackChunkName: "purchase-type-create" */'./admin/adminmenucreate/purchaseTypeCreate'),

    },
    {
        path: '/vendorEdit:id',
        component: () => import(/* webpackChunkName: "vendor-edit" */'./admin/adminmenucreate/vendorEdit'),

    },
    {
        path: '/vendorCreate',
        component: () => import(/* webpackChunkName: "vendor-create" */'./admin/adminmenucreate/VendorCreate'),

    },
    {
        path: '/vendor',
        component: () => import(/* webpackChunkName: "vendor" */'./admin/adminmenucreate/vendor'),

    },
    {
        path: '/website',
        component: () => import(/* webpackChunkName: "website" */'./admin/adminmenucreate/website'),

    },
    {
        path: '/adminmenu@title',
        component: () => import(/* webpackChunkName: "admin-menu-title" */'./admin/adminmenucreate/adminmenu@title'),

    },
    {
        path: '/basicInfo',
        component: () => import(/* webpackChunkName: "basic-info" */'./admin/adminmenucreate/adminmenu@title'),

    },
    {
        path: '/adminmenu@titleEdit:adminMenuTitleId',
        component: () => import(/* webpackChunkName: "admin-menu-title-edit" */'./admin/adminmenucreate/edit/adminmenu@titleEdit'),

    },
    {
        path: '/adminmenu@create',
        component: () => import(/* webpackChunkName: "admin-menu-create" */'./admin/adminmenucreate/adminmenu@create'),

    },
    {
        path: '/adminmenu@Edit:adminMenuId',
        component: () => import/* webpackChunkName: "admin-menu-edit" */('./admin/adminmenucreate/edit/adminmenu@edit'),

    },
    {
        path: '/adminsubmenu@create',
        component: () => import(/* webpackChunkName: "admin-submenu-create" */'./admin/adminmenucreate/adminsubmenu@create'),

    },
    {
        path: '/adminsubmenu@Edit:adminSubMenuId',
        component: () => import(/* webpackChunkName: "admin-submenu-edit" */'./admin/adminmenucreate/edit/adminsubmenu@edit'),

    },
    {
        path: '/admintype@create',
        component: () => import(/* webpackChunkName: "admin-type-create" */'./admin/adminmenucreate/admintype@create'),

    },
    {
        path: '/admintype@Edit:adminTypeId',
        component: () => import(/* webpackChunkName: "admin-type-edit" */'./admin/adminmenucreate/edit/admintype@edit'),

    },
    {
        path: '/adminentry@create',
        component: () => import(/* webpackChunkName: "admin-entry-create" */'./admin/adminmenucreate/adminentry@create'),

    },
    {
        path: '/adminentry@Edit:adminId',
        component: () => import(/* webpackChunkName: "admin-entry-edit" */'./admin/adminmenucreate/edit/adminentry@edit'),

    },
    {
        path: '/adminsetup@create',
        component: () => import(/* webpackChunkName: "admin-setup-create" */'./admin/adminmenucreate/adminsetup@create'),

    },
    {
        path: '/adminmenu@permission',
        component: () => import(/* webpackChunkName: "admin-menu-permission" */'./admin/adminmenucreate/adminmenu@permission'),

    },
    {
        path: '/adminmenu@permissionlist',
        component: () => import(/* webpackChunkName: "admin-permission-list" */'./admin/adminmenucreate/adminmenu@permissionlist'),

    },
    {
        path: '/adminmenu@permission@edit:adminId:menuId',
        component: () => import(/* webpackChunkName: "admin-permission-edit" */'./admin/adminmenucreate/edit/adminmenu@permission@edit'),

    },
    /////////////  Admin Configuration Setup
    {
        path: '/adminassetbrand@entry',
        component: () => import(/* webpackChunkName: "admin-asset-brand-entry" */'./admin/adminconfigurationsetup/assetbrand@entry'),

    },
    {
        path: '/companyInformation',
        component: () => import(/* webpackChunkName: "company-information" */'./admin/adminconfigurationsetup/CompanyInformation'),

    },
    {
        path: '/adminAssetBrand@entryEdit:assetBrandEntryId',
        component: () => import(/* webpackChunkName: "admin-asset-brand-entry-edit" */'./admin/adminconfigurationsetup/edit/assetbrand@entryEdit'),

    },
    {
        path: '/salesprice@type@edit:salesPriceTypeId',
        component: () => import(/* webpackChunkName: "sales-price-type-edit" */'./admin/adminconfigurationsetup/edit/salesprice@type@edit'),

    },
    {
        path: '/bank@entry',
        component: () => import(/* webpackChunkName: "bank-entry" */'./admin/adminconfigurationsetup/bank@entry'),

    },
    {
        path: '/bank@entryEdit:bankEntryId',
        component: () => import(/* webpackChunkName: "bank-entry-edit" */'./admin/adminconfigurationsetup/edit/bank@entryEdit'),

    },
    {
        path: '/banktype@entry',
        component: () => import(/* webpackChunkName: "bank-type-entry" */'./admin/adminconfigurationsetup/banktype@entry'),

    },
    {
        path: '/banktype@entryEdit:bankTypeEntryId',
        component: () => import(/* webpackChunkName: "bank-type-entry-edit" */'./admin/adminconfigurationsetup/edit/banktype@entryEdit'),

    },
    {
        path: '/bussinesstype@create',
        component: () => import(/* webpackChunkName: "bussiness-type-create" */'./admin/adminconfigurationsetup/bussinesstype@create'),

    },
    {
        path: '/bussinesstype@edit:bussinessTypeId',
        component: () => import(/* webpackChunkName: "business-type-edit" */'./admin/adminconfigurationsetup/edit/bussinesstype@edit'),

    },
    {
        path: '/commissiontype@entry',
        component: () => import(/* webpackChunkName: "commission-type-entRy" */'./admin/adminconfigurationsetup/commissiontype@entry'),

    },
    {
        path: '/pricetype@configuration',
        component: () => import(/* webpackChunkName: "price-type-configuration" */'./admin/adminconfigurationsetup/pricetype@configuration'),

    },
    {
        path: '/commissiontype@entryEdit:commissionTypeEntryId',
        component: () => import(/* webpackChunkName: "commission-type-entRy-edit" */'./admin/adminconfigurationsetup/edit/commissiontype@entryEdit'),

    },
    {
        path: '/adminholiday@entry',
        component: () => import(/* webpackChunkName: "admin-holiday-entry" */'./admin/adminconfigurationsetup/holiday@type'),

    },
    {
        path: '/adminholidaytype@edit:holidayTypeId',
        component: () => import(/* webpackChunkName: "admin-holiday-type-edit" */'./admin/adminconfigurationsetup/edit/holidaytype@edit'),

    },
    {
        path: '/licencetype@entry',
        component: () => import(/* webpackChunkName: "licence-type-entry" */'./admin/adminconfigurationsetup/licencetype@entry'),

    },
    {
        path: '/licencetype@edit:licenceTypesId',
        component: () => import(/* webpackChunkName: "licence-type-edit" */'./admin/adminconfigurationsetup/edit/licencetype@edit'),

    },
    {
        path: '/metakeydescription@entry',
        component: () => import(/* webpackChunkName: "metakey-description-entry" */'./admin/adminconfigurationsetup/metakeydescription@entry'),

    },
    {
        path: '/metakeydescription@entryEdit:metaKeyId',
        component: () => import(/* webpackChunkName: "metekey-description-entry-edit" */'./admin/adminconfigurationsetup/edit/metakeydescription@entryEdit'),

    },
    {
        path: '/productbrand@entry',
        component: () => import(/* webpackChunkName: "product-brand-entry" */'./admin/adminconfigurationsetup/productbrand@entry'),

    },
    {
        path: '/productbrand@entryEdit:productBrandEntryId',
        component: () => import(/* webpackChunkName: "product-brand-entry-edit" */'./admin/adminconfigurationsetup/edit/productbrand@entryEdit'),

    },
    {
        path: '/shopcustomertype@entry',
        component: () => import(/* webpackChunkName: "shop-customer-typr-entry" */'./admin/adminconfigurationsetup/shopcustomertype@entry'),

    },
    {
        path: '/shopCustomerType@entryEdit:shopCustomerTypeEntryId',
        component: () => import(/* webpackChunkName: "shop-customer-type-entry-edit" */'./admin/adminconfigurationsetup/edit/shopcustomertype@entryEdit'),

    },
    {
        path: '/shoptype@entry',
        component: () => import(/* webpackChunkName: "shop-type-entry" */'./admin/adminconfigurationsetup/shoptype@entry'),

    },
    {
        path: '/shopType@entryEdit:shopTypeEntryId',
        component: () => import(/* webpackChunkName: "shop-type-entry-edit" */'./admin/adminconfigurationsetup/edit/shoptype@entryEdit'),

    },
    {
        path: '/unite@entry',
        component: () => import(/* webpackChunkName: "unite-entry" */'./admin/adminconfigurationsetup/unite@entry'),

    },
    {
        path: '/unite@entryEdit:uniteEntryId',
        component: () => import(/* webpackChunkName: "unite-entry-edit" */'./admin/adminconfigurationsetup/edit/unite@entryEdit'),

    },
    {
        path: '/purchasetype@entry',
        component: () => import(/* webpackChunkName: "purchase-type-entry" */'./admin/adminconfigurationsetup/purchasetype@entry'),

    },
    {
        path: '/purchasetype@edit:purchaseTypeId',
        component: () => import(/* webpackChunkName: "purchase-type-edit" */'./admin/adminconfigurationsetup/edit/purchasetype@Edit'),

    },
    {
        path: '/educationinfo@entry',
        component: () => import(/* webpackChunkName: "edication-info-entry" */'./admin/adminconfigurationsetup/educationinfo@entry'),

    },
    {
        path: '/nameofinstitute@edit:nameOfInstituteId',
        component: () => import(/* webpackChunkName: "name-of-institute-edit" */'./admin/adminconfigurationsetup/edit/nameofinstitute@edit'),

    },
    {
        path: '/nameofdegree@edit:nameOfDegreeId',
        component: () => import(/* webpackChunkName: "name-of-degree-edit" */'./admin/adminconfigurationsetup/edit/nameofdegree@edit'),

    },
    {
        path: '/grade@edit:gradeId',
        component: () => import(/* webpackChunkName: "grade-edit" */'./admin/adminconfigurationsetup/edit/grade@edit'),

    },
    {
        path: '/skillGrade@edit:skillGradeId',
        component: () => import(/* webpackChunkName: "skill-grate.edit" */'./admin/adminconfigurationsetup/edit/skillGrade@edit'),

    },
    {
        path: '/adminemployee@typecreate',
        component: () => import(/* webpackChunkName: "admin-employee-type-create" */'./admin/adminconfigurationsetup/adminemployee@typecreate'),

    },
    {
        path: '/salesprice@type@create',
        component: () => import(/* webpackChunkName: "sales-price-type-create" */'./admin/adminconfigurationsetup/salesprice@type@create'),

    },
   ///////////////        Admin Shop Information
   {
    path: '/shopRegistration',
    component: () => import(/* webpackChunkName: "shopRegistration" */'./admin/shopinformation/shopRegistration'),

    },
   {
    path: '/unionEntry',
    component: () => import(/* webpackChunkName: "unionEntry" */'./admin/shopinformation/unionEntry'),

    },
   {
    path: '/shopRegistration@Edit:id',
    component: () => import(/* webpackChunkName: "shopRegistration@Edit" */'./admin/shopinformation/shopRegistration@Edit'),

    },
   {
    path: '/branchSetup@Edit:id',
    component: () => import(/* webpackChunkName: "branchSetup@Edit" */'./admin/shopinformation/branchSetup@Edit'),

    },
   {
    path: '/shopBranch@update:id',
    component: () => import(/* webpackChunkName: "shopBranch@update" */'./admin/shopinformation/shopBranch@update'),

    },
   {
    path: '/shopBillDate@update:id',
    component: () => import(/* webpackChunkName: "shopBillDate@update" */'./admin/shopinformation/shopBillDate@update'),

    },
   {
    path: '/topUp',
    component: () => import(/* webpackChunkName: "topUp" */'./admin/shopinformation/topUp'),

    },
   {
    path: '/shopBillPay',
    component: () => import(/* webpackChunkName: "shopBillPay" */'./admin/shopinformation/shopBillPay'),
    },
   {
    path: '/shopBillRequest',
    component: () => import(/* webpackChunkName: "shopBillRequest" */'./admin/shopinformation/shopBillRequest'),
    },
   {
    path: '/branchSetup',
    component: () => import(/* webpackChunkName: "branchSetup" */'./admin/shopinformation/branchSetup'),

    },
   {
    path: '/invoiceSetup',
    component: () => import(/* webpackChunkName: "invoiceSetup" */'./admin/shopinformation/invoiceSetup'),

    },
   {
    path: '/qrCodeSetup',
    component: () => import(/* webpackChunkName: "qrCodeSetup" */'./admin/shopinformation/qrCodeSetup'),

    },
   {
    path: '/qrCodeSetup@Edit:id',
    component: () => import(/* webpackChunkName: "qrCodeSetup@Edit" */'./admin/shopinformation/qrCodeSetup@Edit'),

    },
   {
    path: '/safejob@shop:id',
    component: () => import(/* webpackChunkName: "safejob@shop" */'./admin/shopinformation/safejob@shop'),

    },
   {
    path: '/open@shop:id',
    component: () => import(/* webpackChunkName: "open@shop" */'./admin/shopinformation/open@shop'),

    },
   {
    path: '/reffer@shop:id',
    component: () => import(/* webpackChunkName: "reffer@shop" */'./admin/shopinformation/reffer@shop'),

    },
   {
    path: '/shopaddress@locationlist',
    component: () => import(/* webpackChunkName: "shopaddress@locationlist" */'./admin/shopInformation/shopaddress@locationlist'),

    },
   {
    path: '/shopinformation@list',
    component: () => import(/* webpackChunkName: "shopinformation@list" */'./admin/shopInformation/shopinformation@list'),

    },
   {
    path: '/adminReportShopList',
    component: () => import(/* webpackChunkName: "adminReportShopList" */'./admin/shopInformation/adminReportShopList'),

    },
   {
    path: '/safejob@registration',
    component: () => import(/* webpackChunkName: "safejob@registration" */'./admin/shopInformation/safejob@registration'),

    },
   {
    path: '/open@registration',
    component: () => import(/* webpackChunkName: "open@registration" */'./admin/shopInformation/open@registration'),

    },
   {
    path: '/active@shop@list',
    component: () => import(/* webpackChunkName: "active@shop@list" */'./admin/shopInformation/active@shop@list'),

    },
   {
    path: '/reffer@registration',
    component: () => import(/* webpackChunkName: "reffer@registration" */'./admin/shopInformation/reffer@registration'),

    },
   {
    path: '/expiredateinf',
    component: () => import(/* webpackChunkName: "expiredateinf" */'./ExpireDateNoti'),

    },
   {
    path: '/regi@phone@number',
    component: () => import(/* webpackChunkName: "RegiPhoneNumber" */'./regi@phone@number'),

    },
   {
    path: '/billing@information',
    component: () => import(/* webpackChunkName: "RegiPhoneNumber" */'./billing@information'),
    },
   {
    path: '/billOfferList',
    component: () => import(/* webpackChunkName: "billOfferList" */'./admin/shopinformation/billOfferList'),
    },
    {
    path: '/demoEmployeeEntry',
    component: () => import(/* webpackChunkName: "RegiPhoneNumber" */'./admin/adminpage/adminsetup/demoEmployeeEntry'),

    },
    {
    path: '/demoEmployee@Edit:id',
    component: () => import(/* webpackChunkName: "RegiPhoneNumber" */'./admin/adminpage/adminsetup/demoEmployee@Edit'),

    },
    {
    path: '/demoEmployeeList',
    component: () => import(/* webpackChunkName: "RegiPhoneNumber" */'./admin/adminpage/adminsetup/demoEmployeeList'),

    },
   {
    path: '/expiredatenoti:id',
    component: () => import(/* webpackChunkName: "expiredatenoti" */'./ExpireDateNotiUpdate'),

    },
    ///////////////////// Sales Page
// Product Sale

    {
    path: '/data@entry',
    component: () => import(/* webpackChunkName: "data@entry" */'./admin/page/survay/data@entry'),

    },

    {
    path: '/new@entry@list',
    component: () => import(/* webpackChunkName: "new@entry@list" */'./admin/page/survay/new@entry@list'),
    },

    // today data
    {
        path: '/today@data',
        component: () => import(/* webpackChunkName: "today@data" */'./admin/page/survay/today@data'),
        },


   /* interested list*/
    {
       path: '/status@list:id',
       component: () => import(/* webpackChunkName: "interested@list" */'./admin/page/survay/status/interested@list'),
    },

     {
       path: '/all@list',
       component: () => import(/* webpackChunkName: "all@list" */'./admin/page/survay/status/all@list'),
    },

     {
       path: '/priority@list',
       component: () => import(/* webpackChunkName: "priority@list" */'./admin/page/survay/priority@list'),
    },

     {
       path: '/followup@list',
       component: () => import(/* webpackChunkName: "followup@list" */'./admin/page/survay/followup@list'),
    },
     {
       path: '/followup@recycle',
       component: () => import(/* webpackChunkName: "followup@recycle" */'./admin/page/survay/followup@recycle'),
    },

     {
       path: '/delete@priority',
       component: () => import(/* webpackChunkName: "delete@priority" */'./admin/page/survay/delete@priority'),
    },

   /* interested list*/


//guest entry

{
    path: '/guest@entry',
    component: () => import(/* webpackChunkName: "guest@entry" */'./admin/page/survay/guest@entry'),
 },

 {
    path: '/guest@lists',
    component: () => import(/* webpackChunkName: "guest@lists" */'./admin/page/survay/guest@lists'),
 },

  {
    path: '/guest@edit:id',
    component: () => import(/* webpackChunkName: "guest@edit" */'./admin/page/survay/guest@edit'),
 },

//guest entry

//occupation
{
    path: '/occupation@entry',
    component: () => import(/* webpackChunkName: "occupation@entry" */'./admin/page/survay/occupation@entry'),
 },
 {
    path: '/occupation@edit:id',
    component: () => import(/* webpackChunkName: "occupation@edit" */'./admin/page/survay/occupation@edit'),
 },
//occupation

//designation
{
    path: '/designation@entry',
    component: () => import(/* webpackChunkName: "designation@entry" */'./admin/page/survay/designation@entry'),
 },
 {
    path: '/designation@edit:id',
    component: () => import(/* webpackChunkName: "designation@edit" */'./admin/page/survay/designation@edit'),
 },
//designation

   /* metting*/
     {
       path: '/metting@report@list:status',
       component: () => import(/* webpackChunkName: "metting@report@list" */'./admin/page/survay/metting/metting@report@list'),
    },
    {
       path: '/metting@edit:id',
       component: () => import(/* webpackChunkName: "metting@edit" */'./admin/page/survay/metting/metting@edit'),
    },
   /* metting*/

    {
        path: '/data@information',
        component: () => import(/* webpackChunkName: "data@information" */'./admin/page/survay/data@information'),
    },

    {
    path: '/data@edit:id',
    component: () => import(/* webpackChunkName: "data@edit" */'./admin/page/survay/data@edit'),

    },

    {
    path: '/area@entry',
    component: () => import(/* webpackChunkName: "product-sale" */'./admin/page/survay/area@entry'),

    },

     {
    path: '/area@edit:id',
    component: () => import(/* webpackChunkName: "area@edit" */'./admin/page/survay/area@edit'),

    },

    {
    path: '/area@assign',
    component: () => import(/* webpackChunkName: "area@assign" */'./admin/page/survay/area@assign'),

    },

     {
    path: '/edit@area@assign:id',
    component: () => import(/* webpackChunkName: "edit@area@assign" */'./admin/page/survay/edit@area@assign'),

    },


    {
    path: '/roadBlock@entry',
    component: () => import(/* webpackChunkName: "roadBlock@entry" */'./admin/page/survay/roadBlock@entry'),

    },

    {
    path: '/alert',
    component: () => import(/* webpackChunkName: "product-sale" */'./admin/page/sales/alert'),

    },

    {
    path: '/productsale@return',
    component: () => import(/* webpackChunkName: "product-sale-return" */'./admin/page/sales/productsale@return'),

    },

    {
    path: '/salesPending',
    component: () => import(/* webpackChunkName: "salesPending" */'./admin/page/sales/sales@pending'),

    },

    {
    path: '/salesDue',
    component: () => import(/* webpackChunkName: "salesDue" */'./admin/page/sales/sales@due'),

    },

    {
    path: '/sales@due@customer:id',
    component: () => import(/* webpackChunkName: "salesDue" */'./admin/page/sales/sales@due@customer'),

    },

    {
    path: '/salesInvoice',
    component: () => import(/* webpackChunkName: "salesInvoice" */'./admin/page/sales/sales@invoice'),

    },

    {
    path: '/allUserInvoice',
    component: () => import(/* webpackChunkName: "allUserInvoice" */'./admin/page/sales/allUserInvoice'),

    },

    {
    path: '/allUserPendingInvoice',
    component: () => import(/* webpackChunkName: "allUserPendingInvoice" */'./admin/page/sales/allUserPendingInvoice'),

    },

    {
    path: '/salesproduct@offer',
    component: () => import(/* webpackChunkName: "salesproduct@offer" */'./admin/page/sales/salesproduct@offer'),

    },

    {
    path: '/productsale@edit:salesInvoiceId',
    component: () => import(/* webpackChunkName: "productsale@edit" */'./admin/page/sales/edit/productsale@edit'),

    },
    {
    path: '/productprice@entry',
    component: () => import(/* webpackChunkName: "productprice@entry" */'./admin/page/sales/productprice@entry'),

    },
    {
    path: '/productprice@entryEdit:salesProductPriceEntryId',
    component: () => import(/* webpackChunkName: "productprice@entryEdit" */'./admin/page/sales/edit/productprice@entryEdit'),

    },
    {
    path: '/priceupdate',
    component: () => import(/* webpackChunkName: "priceupdate" */'./admin/page/sales/edit/price@update'),
    },
    {
    path: '/productprice@edit:salesProductPriceEntryId',
    component: () => import(/* webpackChunkName: "productprice@edit" */'./admin/page/sales/edit/price@update@details@info'),

    },
    {
    path: '/productdiscount@entry',
    component: () => import(/* webpackChunkName: "productdiscount@entry" */'./admin/page/sales/productpricediscount@entry'),

    },
    {
    path: '/productdiscountprice@entryEdit:salesProductDiscountPriceId',
    component: () => import(/* webpackChunkName: "productdiscountprice@entryEdit" */'./admin/page/sales/edit/productpricediscount@entryEdit'),

    },
    // Product Report
    {
        path: '/salesproduct@price',
        component: () => import(/* webpackChunkName: "salesproduct@price" */'./admin/page/sales/product@report/salesproduct@price'),

    },
    {
        path: '/salesproduct@discountprice',
        component: () => import(/* webpackChunkName: "salesproduct@discountprice" */'./admin/page/sales/product@report/salesproduct@discountprice'),

    },
    {
        path: '/discountwish@price',
        component: () => import(/* webpackChunkName: "discountwish@price" */'./admin/page/sales/product@report/discountwish@price'),

    },
    {
        path: '/product@shortage',
        component: () => import(/* webpackChunkName: "product@shortage" */'./admin/page/sales/product@report/product@shortage'),

    },
    {
        path: '/damage@product',
        component: () => import(/* webpackChunkName: "damage@product" */'./admin/page/sales/product@report/damage@product'),

    },
    {
        path: '/dataexpaired@product',
        component: () => import(/* webpackChunkName: "dataexpaired@product" */'./admin/page/sales/product@report/dataexpaired@product'),

    },
    {
        path: '/dataexpaired@notification',
        component: () => import(/* webpackChunkName: "dataexpaired@notification" */'./admin/page/sales/product@report/dataexpaired@notification'),

    },
    // Sales Report
    {
        path: '/todaycash@sales',
        component: () => import(/* webpackChunkName: "todaycash@sales" */'./admin/page/sales/sales@report/todaycash@sales'),

    },
    {
        path: '/today@banking@sale',
        component: () => import(/* webpackChunkName: "today@banking@sale" */'./admin/page/sales/sales@report/today@banking@sale'),

    },
    {
        path: '/todaydue@sales',
        component: () => import(/* webpackChunkName: "todaydue@sales" */'./admin/page/sales/sales@report/todaydue@sales'),

    },
    {
        path: '/todaycash@receive',
        component: () => import(/* webpackChunkName: "todaycash@receive" */'./admin/page/sales/sales@report/todaycash@receive'),

    },
    {
        path: '/today@discount',
        component: () => import(/* webpackChunkName: "today@discount" */'./admin/page/sales/sales@report/today@discount'),

    },
    {
        path: '/total@due',
        component: () => import(/* webpackChunkName: "total@due" */'./admin/page/sales/sales@report/total@due'),

    },
    {
        path: '/total@sales',
        component: () => import(/* webpackChunkName: "total@sales" */'./admin/page/sales/sales@report/total@sale'),

    },
    {
        path: '/total@receive',
        component: () => import(/* webpackChunkName: "total@receive" */'./admin/page/sales/sales@report/total@receive'),

    },
    {
        path: '/total@discount',
        component: () => import(/* webpackChunkName: "total@discount" */'./admin/page/sales/sales@report/total@discount'),

    },
    {
        path: '/fixedcustomer@list',
        component: () => import(/* webpackChunkName: "fixedcustomer@list" */'./admin/page/sales/sales@report/fixedcustomer@list'),

    },
    {
        path: '/localcustomer@list',
        component: () => import(/* webpackChunkName: "localcustomer@list" */'./admin/page/sales/sales@report/localcustomer@list'),

    },
    {
        path: '/customerlist@report',
        component: () => import(/* webpackChunkName: "customerlist@report" */'./admin/page/sales/sales@report/customerlist@report'),

    },
    {
        path: '/dateWiseProductSale',
        component: () => import(/* webpackChunkName: "dateWiseProductSale" */'./admin/page/sales/sales@report/dateWiseProductSale'),

    },
    {
        path: '/balance@sheet',
        component: () => import(/* webpackChunkName: "balance@sheet" */'./admin/page/sales/sales@report/balance@sheet'),

    },
    {
        path: '/balance@sheetAll',
        component: () => import(/* webpackChunkName: "balance@sheetAll" */'./admin/page/sales/sales@report/balance@sheetAll'),

    },
    ////////////////    Purchase Page
// Purchase Entry
{
    path: '/brand@entry',
    component: () => import(/* webpackChunkName: "brand@entry" */'./admin/page/purchase/purchase/brand@entry'),

},
{
    path: '/brand@entryEdit:brandId',
    component: () => import(/* webpackChunkName: "brand@entryEdit" */'./admin/page/purchase/purchase/edit/brand@entryEdit'),

},
{
    path: '/productdetailupdate',
    component: () => import(/* webpackChunkName: "productdetailupdate" */'./admin/page/purchase/purchase/product@details'),

},
{
    path: '/purchase@entry',
    component: () => import(/* webpackChunkName: "purchase-Entry" */'./admin/page/purchase/purchase/purchase@entry'),

},
{
    path: '/opening@inventory',
    component: () => import(/* webpackChunkName: "opening@inventory" */'./admin/page/purchase/purchase/opening@inventory'),

},
{
    path: '/opening@inventory@report',
    component: () => import(/*webpackChunkName: "opening@inventory@report" */'./admin/page/inventory/inventory@report/opening@inventory@report'),

},
{
    path: '/re@purchase',
    component: () => import(/* webpackChunkName: "re@purchase" */'./admin/page/purchase/purchase/re@purchase'),

},
{
    path: '/purchase@entryEdit:purchaseInvoiceId',
    component: () => import(/* webpackChunkName: "purchase@entryEdit" */'./admin/page/purchase/purchase/edit/purchase@entryEdit'),

},
{
    path: '/productsupplier@entry',
    component: () => import(/* webpackChunkName: "productsupplier@entry" */'./admin/page/purchase/purchase/productsupplier@entry'),

},
{
    path: '/srEntry',
    component: () => import(/* webpackChunkName: "srEntry" */'./admin/page/hrmanagement/hrmanagement/srEntry'),

},
{
    path: '/srList',
    component: () => import(/* webpackChunkName: "srList" */'./admin/page/hrmanagement/hrreport/srList'),

},
{
    path: '/srEdit:id',
    component: () => import(/* webpackChunkName: "srEdit" */'./admin/page/hrmanagement/hrmanagement/edit/srEdit'),

},
{
    path: '/srCustomerList:id',
    component: () => import(/* webpackChunkName: "srCustomerList" */'./admin/page/hrmanagement/hrmanagement/srCustomerList'),

},
{
    path: '/purchasereturn',
    component: () => import(/* webpackChunkName: "purchasereturn" */'./admin/page/purchase/purchase/purchase@return'),

},
// Purchase Report
{
    path: '/ProductInvoiceView:id',
    component: () => import(/* webpackChunkName: "ProductInvoiceView" */'./admin/page/purchase/purchase@report/ProductInvoiceView'),

},
{
    path: '/ProductOpeningInvoiceView:id',
    component: () => import(/* webpackChunkName: "ProductOpeningInvoiceView" */'./admin/page/purchase/purchase@report/ProductOpeningInvoiceView'),

},
{
    path: '/productsupplier@report',
    component: () => import(/* webpackChunkName: "productsupplier@report" */'./admin/page/purchase/purchase@report/productsupplier@report'),

},
{
    path: '/productSupplierStatement:id',
    component: () => import(/* webpackChunkName: "productSupplierStatement" */'./admin/page/purchase/purchase@report/productSupplierStatement'),

},
{
    path: '/customerStatement:id',
    component: () => import(/* webpackChunkName: "customerStatement" */'./admin/page/sales/sales@report/customerStatement'),

},
{
    path: '/supplierinvoice@details:productSupplierId',
    component: () => import(/* webpackChunkName: "supplierinvoice@details" */'./admin/page/purchase/purchase@report/supplierinvoice@details'),

},
{
    path: '/supplier@product@details:productSupplierId',
    component: () => import(/* webpackChunkName: "supplierinvoice@details" */'./admin/page/purchase/purchase@report/supplier@product@details'),

},
{
    path: '/duesupplier@list',
    component: () => import(/* webpackChunkName: "duesupplier@list" */'./admin/page/purchase/purchase@report/duesupplier@list'),

},
{
    path: '/supplier@payment',
    component: () => import(/* webpackChunkName: "supplier@payment" */'./admin/page/purchase/purchase@report/supplier@payment'),

},
{
    path: '/purchase@return',
    component: () => import(/* webpackChunkName: "purchase@return" */'./admin/page/purchase/purchase@report/purchase@return'),

},
{
    path: '/sales@return',
    component: () => import(/* webpackChunkName: "sales@return" */'./admin/page/sales/sales@report/sales@return'),
},
{
    path: '/salesReturnInvoice',
    component: () => import(/* webpackChunkName: "salesReturnInvoice" */'./admin/page/sales/sales@report/salesReturnInvoice'),
},
{
    path: '/purchaseinvoice@report',
    component: () => import(/* webpackChunkName: "purchaseinvoice@report" */'./admin/page/purchase/purchase@report/purchaseinvoice@report'),
},
{
    path: '/purchaseReturninvoice@report',
    component: () => import(/* webpackChunkName: "purchaseReturninvoice@report" */'./admin/page/purchase/purchase@report/purchaseReturninvoice@report'),

},
{
    path: '/purchaseReturnApporved@report',
    component: () => import(/* webpackChunkName: "purchaseReturnApporved@report" */'./admin/page/purchase/purchase@report/purchaseReturnApporved@report'),

},
{
    path: '/salesReturnApporved@report',
    component: () => import(/* webpackChunkName: "salesReturnApporved@report" */'./admin/page/sales/sales@report/salesReturnApporved@report'),
},
{
    path: '/openinginvoice@report',
    component: () => import(/* webpackChunkName: "openinginvoice@report" */'./admin/page/purchase/purchase@report/openinginvoice@report'),

},
{
    path: '/purchaseproduct@report',
    component: () => import(/* webpackChunkName: "purchaseproduct@report" */'./admin/page/purchase/purchase@report/purchaseproduct@report'),

},
{
    path: '/openingproduct@report',
    component: () => import(/* webpackChunkName: "openingproduct@report" */'./admin/page/purchase/purchase@report/openingproduct@report'),

},

{
    path: '/repurchase@report',
    component: () => import(/* webpackChunkName: "repurchase@report" */'./admin/page/purchase/purchase@report/repurchase@report'),

},

{
    path: '/purchaseproduct@reportList:purchaseProductId',
    component: () => import(/* webpackChunkName: "purchaseproduct@reportList" */'./admin/page/purchase/purchase@report/purchaseproduct@reportdetails'),

},

{
    path: '/openingproduct@reportList:purchaseProductId',
    component: () => import(/* webpackChunkName: "openingproduct@reportList" */'./admin/page/purchase/purchase@report/openingproduct@reportdetails'),

},
{
    path: '/stock@view:purchaseProductId',
    component: () => import(/* webpackChunkName: "stock@view" */'./admin/page/inventory/inventory@report/stock@view'),

},
////////////////   Dealer

// Dealer
{
    path: '/sales@order',
    component: () => import(/* webpackChunkName: "sales@order" */'./admin/page/dealer/sales@order'),
},
{
    path: '/receiveSalesOrder:id',
    component: () => import(/* webpackChunkName: "receiveSalesOrder" */'./admin/page/dealer/edit/receiveSalesOrder'),
},
{
    path: '/sales@order@list',
    component: () => import(/* webpackChunkName: "sales@order@list" */'./admin/page/dealer/report/sales@order@list'),
},
{
    path: '/viewSalesOrder:id',
    component: () => import(/* webpackChunkName: "viewSalesOrder" */'./admin/page/dealer/report/viewSalesOrder'),
},
{
    path: '/viewSalesFinalOrder:id',
    component: () => import(/* webpackChunkName: "viewSalesFinalOrder" */'./admin/page/dealer/report/viewSalesFinalOrder'),
},
{
    path: '/order@final@list',
    component: () => import(/* webpackChunkName: "order@final@list" */'./admin/page/dealer/report/order@final@list'),
},
{
    path: '/supplierReport',
    component: () => import(/* webpackChunkName: "supplierReport" */'./admin/page/dealer/report/supplierReport'),
},
{
    path: '/supplierReportView:id',
    component: () => import(/* webpackChunkName: "supplierReportView" */'./admin/page/dealer/report/supplierReportView'),
},
{
    path: '/salesCustomerReport',
    component: () => import(/* webpackChunkName: "salesCustomerReport" */'./admin/page/dealer/report/salesCustomerReport'),
},
{
    path: '/customerReportView:id',
    component: () => import(/* webpackChunkName: "customerReportView" */'./admin/page/dealer/report/customerReportView'),
},
{
    path: '/damageProductReport',
    component: () => import(/* webpackChunkName: "damageProductReport" */'./admin/page/dealer/report/damageProductReport'),
},



////////////////   Inventory Page
// Inventory
{
    path: '/category@entry',
    component: () => import(/* webpackChunkName: "category@entry" */'./admin/page/inventory/inventory/category@entry'),

},

{
    path: '/category@list',
    component: () => import(/* webpackChunkName: "category@list" */'./admin/page/inventory/inventory/category@list'),

},

{
    path: '/engagement@by:id',
    component: () => import(/* webpackChunkName: "engagement@by" */'./admin/page/inventory/inventory/engagement@by'),

},
{
    path: '/category@product@status@list:status',
    component: () => import(/* webpackChunkName: "category@product@status@list" */'./admin/page/inventory/inventory/category@product@status@list'),

},

{
    path: '/category@entry@edit:id',
    component: () => import(/* webpackChunkName: "category@entry@edit" */'./admin/page/inventory/inventory/category@entry@edit'),

},

{
    path: '/category@Edit:categoryId',
    component: () => import(/* webpackChunkName: "category@Edit" */'./admin/page/inventory/inventory/edit/CategoryEdit'),

},
{
    path: '/productname@entry',
    component: () => import(/* webpackChunkName: "productname@entry" */'./admin/page/inventory/inventory/product@name'),

},
// Inventory Report
{
    path: '/stocksummary@report',
    component: () => import(/* webpackChunkName: "stocksummary@report" */'./admin/page/inventory/inventory@report/stocksummary@report'),

},
{
    path: '/stockshortage@report',
    component: () => import(/* webpackChunkName: "stockshortage@report" */'./admin/page/inventory/inventory@report/stockshortage@report'),

},
{
    path: '/productname@withoutprice',
    component: () => import(/* webpackChunkName: "productname@withoutprice" */'./admin/page/inventory/inventory@report/productname@withoutprice'),

},
{
    path: '/productname@withprice',
    component: () => import(/* webpackChunkName: "productname@withprice" */'./admin/page/inventory/inventory@report/productname@withprice'),

},
{
    path: '/productcategory@withoutprice',
    component: () => import(/* webpackChunkName: "productcategory@withoutprice" */'./admin/page/inventory/inventory@report/productcategory@withoutprice'),

},
{
    path: '/productcategory@withprice',
    component: () => import(/* webpackChunkName: "productcategory@withprice" */'./admin/page/inventory/inventory@report/productcategory@withprice'),

},
{
    path: '/lowquantityproduct@report',
    component: () => import(/* webpackChunkName: "lowquantityproduct@report" */'./admin/page/inventory/inventory@report/lowquantityproduct@report'),

},
{
    path: '/expiredateoverproduct@report',
    component: () => import(/* webpackChunkName: "expiredateoverproduct@report" */'./admin/page/inventory/inventory@report/expiredateoverproduct@report'),

},
{
    path: '/expiredatesoonproduct@report',
    component: () => import(/* webpackChunkName: "expiredatesoonproduct@report" */'./admin/page/inventory/inventory@report/expiredatesoonproduct@report'),

},
// Inventory Shortage
{
    path: '/brandwise@shortage',
    component: () => import(/* webpackChunkName: "brandwise@shortage" */'./admin/page/inventory/inventory@shortage/brandwise@shortage'),

},
{
    path: '/warehouseStock',
    component: () => import(/* webpackChunkName: "warehouseStock" */'./admin/page/inventory/inventory@shortage/warehouseStock'),

},
{
    path: '/stockTransferReceive',
    component: () => import(/* webpackChunkName: "stockTransferReceive" */'./admin/page/inventory/inventory@shortage/stockTransferReceive'),

},
{
    path: '/stockTransferReceiveHistoy',
    component: () => import(/* webpackChunkName: "stockTransferReceiveHistoy" */'./admin/page/inventory/inventory@shortage/stockTransferReceiveHistoy'),

},
{
    path: '/supplierwise@shortage',
    component: () => import(/* webpackChunkName: "supplierwise@shortage" */'./admin/page/inventory/inventory@shortage/supplierwise@shortage'),

},
//////////////// HR Management Page
// HR Management
{
    path: '/employee@entry',
    component: () => import(/* webpackChunkName: "employee-entry" */'./admin/page/hrmanagement/hrmanagement/employee@entry'),

},
{
    path: '/employee@edit:employeeId',
    component: () => import(/* webpackChunkName: "employee-edit" */'./admin/page/hrmanagement/hrmanagement/edit/employee@edit'),

},
{
    path: '/employee@details:employeeId',
    component: () => import(/* webpackChunkName: " employee-details" */'./admin/page/hrmanagement/hrmanagement/employee@detail'),

},
{
    path: '/salarystart@setup',
    component: () => import(/* webpackChunkName: " salary-start-setup" */'./admin/page/hrmanagement/hrmanagement/salarystart@setup'),

},
{
    path: '/salarystartsetup@edit:salarySetupId',
    component: () => import(/* webpackChunkName: " salary-start-setup-edit" */'./admin/page/hrmanagement/hrmanagement/edit/salarystartsetup@edit'),

},
{
    path: '/salarygrade@entry',
    component: () => import(/* webpackChunkName: " salary-grade-entry" */'./admin/page/hrmanagement/hrmanagement/salarygrade@entry'),

},
{
    path: '/salarygrade@edit:gradeEntryId',
    component: () => import(/* webpackChunkName: " salary-grade-edit" */'./admin/page/hrmanagement/hrmanagement/edit/salarygrade@edit'),

},

{
    path: '/holiday@setup',
    component: () => import(/* webpackChunkName:  " holiday-setup" */'./admin/page/hrmanagement/hrmanagement/holiday@setup'),

},
{
    path: '/holiday@setupedit:holidaySetupId',
    component: () => import(/* webpackChunkName: " holiday-setup-edit" */'./admin/page/hrmanagement/hrmanagement/edit/holidaysetup@edit'),

},
{
    path: '/leave@entry',
    component: () => import(/* webpackChunkName: " leave-entry" */'./admin/page/hrmanagement/hrmanagement/leave@entry'),

},
{
    path: '/leave@entryEdit:leaveEntryId',
    component: () => import(/* webpackChunkName: " leave-entry-edit" */'./admin/page/hrmanagement/hrmanagement/edit/leave@entryEdit'),

},
{
    path: '/jobdepartment@entry',
    component: () => import(/* webpackChunkName: " job-depertment-entry" */'./admin/page/hrmanagement/hrmanagement/jobdepartment@entry'),

},
{
    path: '/jobdepartment@entryEdit:jobDepartmentEntryId',
    component: () => import(/* webpackChunkName: " job-departmrnt-entry-edit" */'./admin/page/hrmanagement/hrmanagement/edit/jobdepartment@entryEdit'),

},
{
    path: '/salaryincrement@entry',
    component: () => import(/* webpackChunkName: " salary-increment-entry" */'./admin/page/hrmanagement/hrmanagement/salaryincrement@entry'),

},
{
    path: '/salarygrade@setup',
    component: () => import(/* webpackChunkName: " salary-grade=setup" */'./admin/page/hrmanagement/hrmanagement/salarygrade@setup'),

},
{
    path: '/salarygradesetup@edit:salaryGradeSetupId',
    component: () => import(/* webpackChunkName: " salary-grade-setup-edit" */'./admin/page/hrmanagement/hrmanagement/edit/salarygradesetup@edit'),

},
{
    path: '/employee@atttendance',
    component: () => import(/* webpackChunkName: " employee-attendence" */'./admin/page/hrmanagement/hrmanagement/employee@atttendance'),

},
// HR Report
{
    path: '/employee@report',
    component: () => import(/* webpackChunkName: "employee-report" */'./admin/page/hrmanagement/hrreport/employee@report'),

},
{
    path: '/salarysheet@report',
    component: () => import(/* webpackChunkName: "salary-sheet-report" */'./admin/page/hrmanagement/hrreport/salarysheet@report'),

},
{
    path: '/final@salarysheet',
    component: () => import(/* webpackChunkName: "final-salary-sheet" */'./admin/page/hrmanagement/hrreport/final@salarysheet'),

},
{
    path: '/full@salary',
    component: () => import(/* webpackChunkName: "full-salary-sheet" */'./admin/page/hrmanagement/hrreport/full@salary'),

},
{
    path: '/salarysheet@statement:employeEntryId',
    component: () => import(/* webpackChunkName: "salary-sheet-statment" */'./admin/page/hrmanagement/hrreport/salarysheet@statement'),

},
{
    path: '/jobdepartment@report',
    component: () => import(/* webpackChunkName: "job-department-report" */'./admin/page/hrmanagement/hrreport/jobdepartment@report'),

},
{
    path: '/salarygrade@report',
    component: () => import(/* webpackChunkName: "salary-grade-report" */'./admin/page/hrmanagement/hrreport/salarygrade@report'),

},
{
    path: '/salarygrade@setupreport',
    component: () => import(/* webpackChunkName: "salary-grade-setup-report" */'./admin/page/hrmanagement/hrreport/salarygradesetup@report'),

},
{
    path: '/holiday@report',
    component: () => import(/* webpackChunkName: "holiday-report" */'./admin/page/hrmanagement/hrreport/holiday@report'),

},
{
    path: '/leave@report',
    component: () => import(/* webpackChunkName: "leave-report" */'./admin/page/hrmanagement/hrreport/leave@report'),

},
{
    path: '/yearlyleave@calendar',
    component: () => import(/* webpackChunkName: "yearly-leave-report" */'./admin/page/hrmanagement/hrreport/yearlyleave@calendar'),

},
{
    path: '/attendance@report',
    component: () => import(/* webpackChunkName: "attendence-report" */'./admin/page/hrmanagement/hrreport/attendance@report'),

},
{
    path: '/employeeTypeReport',
    component: () => import(/* webpackChunkName: "employee-typr-report" */'./admin/page/hrmanagement/hrreport/employeeType@report'),

},
//////////////// Asset Page
// Asset
{
    path: '/asset@entry',
    component: () => import(/* webpackChunkName: "asset-entry" */'./admin/page/asset/asset/asset@entry'),

},
{
    path: '/assetentry@Edit:shopAssetEntryId',
    component: () => import(/* webpackChunkName: "assetentry@Edit" */'./admin/page/asset/asset/edit/assetentry@Edit'),

},
{
    path: '/assetbrand@entry',
    component: () => import(/* webpackChunkName: "assetbrand@entry" */'./admin/page/asset/asset/assetbrand@entry'),

},
{
    path: '/assetBrand@entryEdit:assetBrandEntryId',
    component: () => import(/* webpackChunkName: "assetBrand@entryEdit" */'./admin/page/asset/asset/edit/assetbrand@entryEdit'),

},
{
    path: '/assetcategory@entry',
    component: () => import(/* webpackChunkName: "asset-category-entry" */'./admin/page/asset/asset/assetcategory@entry'),

},
{
    path: '/assetcategory@Edit:assetCategoryId',
    component: () => import(/* webpackChunkName: "asset-category-edit" */'./admin/page/asset/asset/edit/assetcategory@edit'),

},
{
    path: '/assetproduct@entry',
    component: () => import(/* webpackChunkName: "asset-product-entry" */'./admin/page/asset/asset/assetproduct@entry'),

},
{
    path: '/assetproduct@edit:assetCodeEntryId',
    component: () => import(/* webpackChunkName: "asset-product-edit" */'./admin/page/asset/asset/edit/assetproduct@edit'),

},
{
    path: '/assetsupplier@entry',
    component: () => import(/* webpackChunkName: "asset-supplier-entry" */'./admin/page/asset/asset/assetsupplier@entry'),

},
{
    path: '/assetsupplier@entryEdit:assetSupplierId',
    component: () => import(/* webpackChunkName: "asset-supplier-entry-edit" */'./admin/page/asset/asset/edit/assetsupplier@entryEdit'),

},
{
    path: '/asset@status',
    component: () => import(/* webpackChunkName: "asset-status" */'./admin/page/asset/asset/asset@status'),

},
// Asset Report
{
    path: '/assetentry@report',
    component: () => import(/* webpackChunkName: "asset-entry-report" */'./admin/page/asset/asset@report/assetentry@report'),

},
{
    path: '/assetentry@statusHistory:id',
    component: () => import(/* webpackChunkName: "assetentry@statusHistory" */'./admin/page/asset/asset@report/assetentry@statusHistory'),

},
{
    path: '/assetentry@details:id',
    component: () => import(/* webpackChunkName: "asset-entry-report" */'./admin/page/asset/asset@report/assetentry@details'),

},
{
    path: '/assetbrand@report',
    component: () => import(/* webpackChunkName: "asset-brand-report" */'./admin/page/asset/asset@report/assetbrand@report'),

},
{
    path: '/assetsupplier@report',
    component: () => import(/* webpackChunkName: "assetsupplier@report" */'./admin/page/asset/asset@report/assetsupplier@report'),

},
{
    path: '/assetcategory@report',
    component: () => import(/* webpackChunkName: "asset-category-report" */'./admin/page/asset/asset@report/assetcategory@report'),

},
{
    path: '/assetcategory@ownerreport:assetCategorylabelId',
    component: () => import(/* webpackChunkName: "asset-category-owner-report" */'./admin/page/asset/asset@report/assetcategory@ownerreport'),

},
{
    path: '/assetcategory@globalreport:assetCategorylabelId',
    component: () => import(/* webpackChunkName: "asset-category-global-report" */'./admin/page/asset/asset@report/assetcategory@globalreport'),

},
{
    path: '/assetcode@report',
    component: () => import(/* webpackChunkName: "asset-code-report" */'./admin/page/asset/asset@report/assetcode@report'),

},
{
    path: '/allAssetReport',
    component: () => import(/* webpackChunkName: "allAssetReport" */'./admin/page/asset/asset@report/allAssetReport'),

},
{
    path: '/assetwaranty@report',
    component: () => import(/* webpackChunkName: "asset-waranty-report" */'./admin/page/asset/asset@report/assetwaranty@report'),

},
{
    path: '/assetunused@report',
    component: () => import(/* webpackChunkName: "asset-unused-report" */'./admin/page/asset/asset@report/assetunused@report'),

},
{
    path: '/assettheft@report',
    component: () => import(/* webpackChunkName: "asset-theft-report" */'./admin/page/asset/asset@report/assettheft@report'),

},
{
    path: '/assetgurantee@report',
    component: () => import(/* webpackChunkName: "asset-gurantee-report" */'./admin/page/asset/asset@report/assetgurantee@report'),

},
{
    path: '/assetdamage@report',
    component: () => import(/* webpackChunkName: "asset-damage-report" */'./admin/page/asset/asset@report/assetdamage@report'),

},
////////////////     Admin Page
// Admin Setup
{
    path: '/accountingonly@company',
    component: () => import(/* webpackChunkName: "accountingonly@company" */'./admin/adminpage/adminsetup/accountingonly@company'),

},
{
    path: '/createbusiness@type',
    component: () => import(/* webpackChunkName: "createbusiness@type" */'./admin/adminpage/adminsetup/createbusiness@type'),

},
{
    path: '/create@client',
    component: () => import(/* webpackChunkName: "create@client" */'./admin/adminpage/adminsetup/create@client'),

},
{
    path: '/create@staff',
    component: () => import(/* webpackChunkName: "create@staff" */'./admin/adminpage/adminsetup/create@staff'),

},
{
    path: '/create@menu',
    component: () => import(/* webpackChunkName: "create@menu" */'./admin/adminpage/adminsetup/create@menu'),

},
{
    path: '/createmarketing@type',
    component: () => import(/* webpackChunkName: "createmarketing@type" */'./admin/adminpage/adminsetup/createmarketing@type'),

},
{
    path: '/create@commission',
    component: () => import(/* webpackChunkName: "create@commission" */'./admin/adminpage/adminsetup/create@commission'),

},
{
    path: '/create@admin',
    component: () => import(/* webpackChunkName: "create@admin" */'./admin/adminpage/adminsetup/create@admin'),

},
{
    path: '/create@agent',
    component: () => import(/* webpackChunkName: "create@agent" */'./admin/adminpage/adminsetup/create@agent'),

},
{
    path: '/createliana@type',
    component: () => import(/* webpackChunkName: "createliana@type" */'./admin/adminpage/adminsetup/createliana@type'),

},
{
    path: '/process@shop',
    component: () => import(/* webpackChunkName: "process@shop" */'./admin/adminpage/adminsetup/process@shop'),

},
{
    path: '/salestarget@create',
    component: () => import(/* webpackChunkName: "salestarget@create" */'./admin/adminpage/adminsetup/salestarget@create'),

},
{
    path: '/createclient@ip',
    component: () => import(/* webpackChunkName: "createclient@ip" */'./admin/adminpage/adminsetup/createclient@ip'),

},
{
    path: 'purchase',
    component: () => import(/* webpackChunkName: "purchase" */'./admin/adminpage/adminsetup/purchase'),

},
{
    path: '/ip@notice',
    component: () => import(/* webpackChunkName: "ip@notice" */'./admin/adminpage/adminsetup/ip@notice'),

},
{
    path: '/sales',
    component: () => import(/* webpackChunkName: "sales" */'./admin/adminpage/adminsetup/sales'),

},
{
    path: '/delivery@section',
    component: () => import(/* webpackChunkName: "delivery@section" */'./admin/adminpage/adminsetup/delivery@section'),

},
{
    path: '/inventory',
    component: () => import(/* webpackChunkName: "inventory" */'./admin/adminpage/adminsetup/inventory'),

},
{
    path: '/client@followp',
    component: () => import(/* webpackChunkName: "client@followp" */'./admin/adminpage/adminsetup/client@followp'),

},
{
    path: '/asset',
    component: () => import(/* webpackChunkName: "asset" */'./admin/adminpage/adminsetup/asset'),

},
{
    path: '/hr',
    component: () => import(/* webpackChunkName: "hr" */'./admin/adminpage/adminsetup/hr'),

},
{
    path: '/reporting',
    component: () => import(/* webpackChunkName: "reporting" */'./admin/adminpage/adminsetup/reporting'),

},
{
    path: '/message',
    component: () => import(/* webpackChunkName: "message" */'./admin/adminpage/adminsetup/message'),

},
{
    path: '/notification',
    component: () => import(/* webpackChunkName: "notification" */'./admin/adminpage/adminsetup/notification'),

},
// Mother Page
{
    path: '/setup',
    component: () => import(/* webpackChunkName: "setup" */'./admin/adminpage/motheradmin/setup'),

},
{
    path: '/support@admin',
    component: () => import(/* webpackChunkName: "support@admin" */'./admin/adminpage/motheradmin/support@admin'),

},
{
    path: '/billing@address',
    component: () => import(/* webpackChunkName: "billing@address" */'./admin/adminpage/motheradmin/billing@address'),

},
{
    path: '/sub@admin',
    component: () => import(/* webpackChunkName: "sub@admin" */'./admin/adminpage/motheradmin/sub@admin'),

},
{
    path: '/suspend@unsuspend@admin',
    component: () => import(/* webpackChunkName: "suspend@unsuspend@admin" */'./admin/adminpage/motheradmin/suspend@unsuspend@admin'),

},
{
    path: '/marketing@admin',
    component: () => import(/* webpackChunkName: "marketing@admin" */'./admin/adminpage/motheradmin/marketing@admin'),

},
{
    path: '/commissionbase@man',
    component: () => import(/* webpackChunkName: "commissionbase@man" */'./admin/adminpage/motheradmin/commissionbase@man'),

},
{
    path: '/delivery@section@',
    component: () => import(/* webpackChunkName: "delivery@section@" */'./admin/adminpage/motheradmin/delivery@section'),

},
{
    path: '/ipquery@blockadmin',
    component: () => import(/* webpackChunkName: "ipquery@blockadmin" */'./admin/adminpage/motheradmin/ipquery@blockadmin'),

},
{
    path: '/information@edit',
    component: () => import(/* webpackChunkName: "information@edit" */'./admin/adminpage/motheradmin/information@edit'),

},
{
    path: '/sales@team',
    component: () => import(/* webpackChunkName: "sales@team" */'./admin/adminpage/motheradmin/sales@team'),

},
{
    path: '/shop@list',
    component: () => import(/* webpackChunkName: "shop@list" */'./admin/adminpage/motheradmin/shop@list'),

},
{
    path: '/report',
    component: () => import(/* webpackChunkName: "report" */'./admin/adminpage/motheradmin/report'),

},
{
    path: '/menu@permission',
    component: () => import(/* webpackChunkName: "menu@permission" */'./admin/adminpage/motheradmin/menu@permission'),

},
// Support Admin
{
    path: '/problem@entry',
    component: () => import(/* webpackChunkName: "problem@entry" */'./admin/adminpage/supportadmin/problem@entry'),

},
{
    path: '/client@update',
    component: () => import(/* webpackChunkName: "client@update" */'./admin/adminpage/supportadmin/client@update'),

},
{
    path: '/todaysupport@calendar',
    component: () => import(/* webpackChunkName: "todaysupport@calendar" */'./admin/adminpage/supportadmin/todaysupport@calendar'),

},
{
    path: '/feedback',
    component: () => import(/* webpackChunkName: "feedback" */'./admin/adminpage/supportadmin/feedback'),

},
{
    path: '/support@message',
    component: () => import(/* webpackChunkName: "support@message" */'./admin/adminpage/supportadmin/support@message'),

},
// Billing Admin
{
    path: '/billingreport@daily',
    component: () => import(/* webpackChunkName: "billingreport@daily" */'./admin/adminpage/billingadmin/billingreport@daily'),

},
{
    path: '/due@bill',
    component: () => import(/* webpackChunkName: "due@bill" */'./admin/adminpage/billingadmin/due@bill'),

},
{
    path: '/duebill@feedback',
    component: () => import(/* webpackChunkName: "duebill@feedback" */'./admin/adminpage/billingadmin/duebill@feedback'),

},
{
    path: '/billing@message',
    component: () => import(/* webpackChunkName: "billing@message" */'./admin/adminpage/billingadmin/billing@message'),

},
{
    path: '/overdue@bill',
    component: () => import(/* webpackChunkName: "overdue@bill" */'./admin/adminpage/billingadmin/overdue@bill'),

},
// Sub Admin
{
    path: '/subadmin@menu@permission',
    component: () => import(/* webpackChunkName: "subadmin@menu@permission" */'./admin/adminpage/subadmin/subadmin@menu@permission'),

},
{
    path: '/subadmin@menu@notification',
    component: () => import(/* webpackChunkName: "subadmin@menu@notification" */'./admin/adminpage/subadmin/subadmin@menu@notification'),

},
{
    path: '/subadmin@message',
    component: () => import(/* webpackChunkName: "subadmin@message" */'./admin/adminpage/subadmin/subadmin@message'),

},
{
    path: '/subadmin@report',
    component: () => import(/* webpackChunkName: "subadmin@report" */'./admin/adminpage/subadmin/subadmin@report'),

},
// Suspend And Unsuspend
{
    path: '/billingadmin@report',
    component: () => import(/* webpackChunkName: "billingadmin@report" */'./admin/adminpage/suspend@unsuspend/billingadmin@report'),

},
{
    path: '/suspend@list',
    component: () => import(/* webpackChunkName: "suspend@list" */'./admin/adminpage/suspend@unsuspend/suspend@list'),

},
{
    path: '/unsuspend@list',
    component: () => import(/* webpackChunkName: "unsuspend@list" */'./admin/adminpage/suspend@unsuspend/unsuspend@list'),

},
{
    path: '/suspend@unsuspend@message',
    component: () => import(/* webpackChunkName: "suspend@unsuspend@message" */'./admin/adminpage/suspend@unsuspend/suspend@unsuspend@message'),

},
// Marketing Admin
{
    path: '/marketing@salermanlist',
    component: () => import(/* webpackChunkName: "marketing@salermanlist" */'./admin/adminpage/marketingadmin/marketing@salermanlist'),

},
{
    path: '/marketing@salertarget',
    component: () => import(/* webpackChunkName: "marketing@salertarget" */'./admin/adminpage/marketingadmin/marketing@salertarget'),

},
{
    path: '/marketing@salertargetachieve',
    component: () => import(/* webpackChunkName: "marketing@salertargetachieve" */'./admin/adminpage/marketingadmin/marketing@achieve'),

},
{
    path: '/marketing@inactivelist',
    component: () => import(/* webpackChunkName: "marketing@inactivelist" */'./admin/adminpage/marketingadmin/marketing@inactivelist'),

},
{
    path: '/marketing@proposedclient',
    component: () => import(/* webpackChunkName: "marketing@proposedclient" */'./admin/adminpage/marketingadmin/marketing@poposedclient'),

},
{
    path: '/marketing@proposedfollowp',
    component: () => import(/* webpackChunkName: "marketing@proposedfollowp" */'./admin/adminpage/marketingadmin/marketing@poposedfollowp'),

},
{
    path: '/marketing@message',
    component: () => import(/* webpackChunkName: "marketing@message" */'./admin/adminpage/marketingadmin/marketing@message'),

},
{
    path: '/marketing@shopentry',
    component: () => import(/* webpackChunkName: "marketing@shopentry" */'./admin/adminpage/marketingadmin/marketing@shopentry'),

},
// Saler Man
{
    path: '/salerman@shopentry',
    component: () => import(/* webpackChunkName: "salerman@shopentry" */'./admin/adminpage/salerman/salerman@shopentry'),

},
{
    path: '/salerman@proposershop',
    component: () => import(/* webpackChunkName: "salerman@proposershop" */'./admin/adminpage/salerman/salerman@proposershop'),

},
{
    path: '/salerman@inactivelist',
    component: () => import(/* webpackChunkName: "salerman@inactivelist" */'./admin/adminpage/salerman/salerman@inactivelist'),

},
{
    path: '/salerman@profile',
    component: () => import(/* webpackChunkName: "salerman@profile" */'./admin/adminpage/salerman/salerman@profile'),

},
{
    path: '/salerman@message',
    component: () => import(/* webpackChunkName: "salerman@message" */'./admin/adminpage/salerman/salerman@message'),

},
{
    path: '/salerman@totalearning',
    component: () => import(/* webpackChunkName: "salerman@totalearning" */'./admin/adminpage/salerman/salerman@totalearning'),

},
{
    path: '/salerman@monthlyearning',
    component: () => import(/* webpackChunkName: "salerman@monthlyearning" */'./admin/adminpage/salerman/salerman@monthlyearning'),

},
// Delivery Section
{
    path: '/update@shopinformation',
    component: () => import(/* webpackChunkName: "update@shopinformation" */'./admin/adminpage/deliverysection/update@shopinformation'),

},
{
    path: '/delivery@report',
    component: () => import(/* webpackChunkName: "delivery@report" */'./admin/adminpage/deliverysection/delivery@report'),

},
{
    path: '/delivery@calendar',
    component: () => import(/* webpackChunkName: "delivery@calendar" */'./admin/adminpage/deliverysection/delivery@calender'),

},
{
    path: '/delivery@request',
    component: () => import(/* webpackChunkName: "delivery@request" */'./admin/adminpage/deliverysection/delivery@request'),

},
{
    path: '/delivery@message',
    component: () => import(/* webpackChunkName: "delivery@message" */'./admin/adminpage/deliverysection/delivery@message'),

},
{
    path: '/delivery@supportadmin',
    component: () => import(/* webpackChunkName: "delivery@supportadmin" */'./admin/adminpage/deliverysection/delivery@supportadmin'),

},
// IP Query
{
    path: '/ip@add',
    component: () => import(/* webpackChunkName: "ip@add" */'./admin/adminpage/ipquery/ip@add'),

},
{
    path: '/ip@lock',
    component: () => import(/* webpackChunkName: "ip@lock" */'./admin/adminpage/ipquery/ip@lock'),

},
{
    path: '/ip@unblock',
    component: () => import(/* webpackChunkName: "ip@unblock" */'./admin/adminpage/ipquery/ip@unblock'),

},
{
    path: '/ipquery@message',
    component: () => import(/* webpackChunkName: "ipquery@message" */'./admin/adminpage/ipquery/ipquery@message'),

},
// Information Edit Admin
{
    path: '/support@panding',
    component: () => import(/* webpackChunkName: "support@panding" */'./admin/adminpage/informationedit/support@panding'),

},
{
    path: '/complete@edit',
    component: () => import(/* webpackChunkName: "complete@edit" */'./admin/adminpage/informationedit/complate@edit'),

},
{
    path: '/editadmin@search',
    component: () => import(/* webpackChunkName: "editadmin@search" */'./admin/adminpage/informationedit/editadmin@search'),

},
{
    path: '/editadmin@message',
    component: () => import(/* webpackChunkName: "editadmin@message" */'./admin/adminpage/informationedit/editadmin@message'),

},
///////////       Setting
{
    path: '/helps@support',
    component: () => import(/* webpackChunkName: "helps@support" */'./admin/generalpage/help'),

},
{
    path: '/changepassword',
    component: () => import(/* webpackChunkName: "changepassword" */'./admin/generalpage/password'),

},
{
    path: '/change@password',
    component: () => import(/* webpackChunkName: "changepassword" */'./admin/generalpage/change@password'),

},
{
    path: '/refer@taka',
    component: () => import(/* webpackChunkName: "refer@taka" */'./admin/generalpage/refer'),

},
{
    path: '/profile',
    component: () => import(/* webpackChunkName: "profile" */'./admin/generalpage/profile'),

},
{
    path: '/offer',
    component: () => import(/* webpackChunkName: "offer" */'./admin/generalpage/offer'),

},
{
    path: '/setting',
    component: () => import(/* webpackChunkName: "setting" */'./admin/generalpage/setting'),

},
/////////////////     Shop Menu Permission
{
    path: '/shopemployee@typecreate',
    component: () => import(/* webpackChunkName: "shopemployee@typecreate" */'./shopuser/shopInformation/shopemployee@typecreate'),

},
{
    path: '/shopemployee@typeEdit:shopEmployeeTypeId',
    component: () => import(/* webpackChunkName: "shopemployee@typeEdit" */'./shopuser/shopInformation/edit/shopemployee@typeEdit'),

},
{
    path: '/company@setup',
    component: () => import(/* webpackChunkName: "company@setup" */'./shopuser/shopInformation/company@setup'),

},
{
    path: '/company@owners',
    component: () => import(/* webpackChunkName: "company@owners" */'./shopuser/shopInformation/company@owners'),

},
{
    path: '/shopmenu@permission',
    component: () => import(/* webpackChunkName: "shopmenu@permission" */'./shopuser/shopInformation/shopmenu@permission'),

},
{
    path: '/shopmenu@permissionlist',
    component: () => import(/* webpackChunkName: "shopmenu@permissionlist" */'./shopuser/shopInformation/shopmenu@permissionlist'),

},
{
    path: '/adminmenu@permission@edit',
    component: () => import(/* webpackChunkName: "adminmenu@permission@edit" */'./shopuser/shopInformation/edit/adminmenu@permission@edit'),

},

    //////////////////  Shop Admin Setting ////////////////
// Shop Setting
    {
        path: '/shopadd@category',
        component: () => import(/* webpackChunkName: "shopadd@category" */'./shopuser/shopadminsetting/shopadd@category'),
    },
    {
        path: '/shopaddproduct@brand',
        component: () => import(/* webpackChunkName: "shopaddproduct@brand" */'./shopuser/shopadminsetting/shopaddproduct@brand'),
    },
    {
        path: '/shopadd@employee',
        component: () => import(/* webpackChunkName: "shopadd@employee" */'./shopuser/shopadminsetting/shopadd@employee'),
    },
    {
        path: '/shopaddproductsupplier@entry',
        component: () => import(/* webpackChunkName: "shopaddproductsupplier@entry" */'./shopuser/shopadminsetting/shopaddproductsupplier@entry'),

    },
    {
        path: '/shopproductsupplier@entryEdit:productSupplierId',
        component: () => import(/* webpackChunkName: "shopproductsupplier@entryEdit" */'./shopuser/shopadminsetting/edit/shopproductsupplier@entryEdit'),

    },
    {
        path: '/shopproductbrand@entryEdit:productBrandEntryId',
        component: () => import(/* webpackChunkName: "shopproductbrand@entryEdit" */'./shopuser/shopadminsetting/edit/shopproductbrand@entryEdit'),

    },
    {
        path: '/shopadd@bank',
        component: () => import(/* webpackChunkName: "shopadd@bank" */'./shopuser/shopadminsetting/shopadd@bank.vue'),

    },
    {
        path: '/low@quan',
        component: () => import(/* webpackChunkName: "low@quan" */'./shopuser/shopadminsetting/low@quan@setup'),

    },
    {
        path: '/expire@soon@setup',
        component: () => import(/* webpackChunkName: "expire@soon@setup" */'./shopuser/shopadminsetting/expire@soon@setup'),

    },
    {
        path: '/vat@setting',
        component: () => import(/* webpackChunkName: "vat@setting" */'./shopuser/shopadminsetting/vat@setting'),

    },
    {
        path: '/languageSetup',
        component: () => import(/* webpackChunkName: "languageSetup" */'./shopuser/shopadminsetting/languageSetup'),

    },
    {
        path: '/priceTypeConfigure',
        component: () => import(/* webpackChunkName: "priceTypeConfigure" */'./shopuser/shopadminsetting/priceTypeConfigure'),

    },
    {
        path: '/sales@setting',
        component: () => import(/* webpackChunkName: "sales@setting" */'./shopuser/shopadminsetting/sales@setting'),

    },
    {
        path: '/warehouseEntry',
        component: () => import(/* webpackChunkName: "warehouseEntry" */'./shopuser/shopadminsetting/warehouseEntry'),

    },
    {
        path: '/warehouseEdit:id',
        component: () => import(/* webpackChunkName: "warehouseEntry" */'./shopuser/shopadminsetting/edit/warehouseEdit'),

    },
    {
        path: '/due@limitSetup',
        component: () => import(/* webpackChunkName: "due@limitSetup" */'./shopuser/shopadminsetting/due@limitSetup'),

    },
    {
        path: '/dueLimitSetup@Edit:id',
        component: () => import(/* webpackChunkName: "dueLimitSetup@Edit" */'./shopuser/shopadminsetting/edit/dueLimitSetup@Edit'),

    },
    {
        path: '/vat@settingEdit:id',
        component: () => import(/* webpackChunkName: "vat@settingEdit" */'./shopuser/shopadminsetting/edit/vat@settingEdit'),

    },
    {
        path: '/shopadd@bankEdit:bankId',
        component: () => import(/* webpackChunkName: "shopadd@bankEdit" */'./shopuser/shopadminsetting/edit/shopadd@bankEdit'),

    },
    {
        path: '/shopproductcode@entry',
        component: () => import(/* webpackChunkName: "shopproductcode@entry" */'./shopuser/productsetup/shopproductcode@entry'),

    },
    {
        path: '/shopproductprice@setup',
        component: () => import(/* webpackChunkName: "shopproductprice@setup" */'./shopuser/productsetup/shopproductprice@setup'),

    },
    {
        path: '/shopdiscount@setup',
        component: () => import(/* webpackChunkName: "shopdiscount@setup" */'./shopuser/productsetup/shopdiscount@setup'),

    },
    {
        path: '/category@report',
        component: () => import(/* webpackChunkName: "category@report" */'./shopuser/shopreport/category@report'),

    },
    {
        path: '/categoryReport',
        component: () => import(/* webpackChunkName: "categoryReport" */'./shopuser/shopreport/categoryReport'),

    },
    {
        path: '/product@report',
        component: () => import(/* webpackChunkName: "product@report" */'./shopuser/shopreport/category@report'),

    },
    // Shop Product Setup
    {
        path: '/shopaddexpencetype@entry',
        component: () => import(/* webpackChunkName: "shopaddexpencetype@entry" */'./shopuser/productsetup/shopaddexpencetype@entry'),

    },
    {
        path: '/shopaddexpencetype@Editentry:shopExpenceTypeId',
        component: () => import(/* webpackChunkName: "shopaddexpencetype@Editentry" */'./shopuser/productsetup/edit/shopaddexpencetype@Editentry'),

    },
    {
        path: '/shoploanprovider@entry',
        component: () => import(/* webpackChunkName: "shoploanprovider@entry" */'./shopuser/productsetup/shoploanprovider@entry'),

    },
    {
        path: '/shoploanprovider@Editentry:loanProviderId',
        component: () => import(/* webpackChunkName: "shoploanprovider@Editentry" */'./shopuser/productsetup/edit/shoploanprovider@Editentry'),

    },
    {
        path: '/shoploan@entry',
        component: () => import(/* webpackChunkName: "shoploan@entry" */'./shopuser/productsetup/shoploan@entry'),

    },
    {
        path: '/shoploan@Editentry:loanEntryId',
        component: () => import(/* webpackChunkName: "shoploan@Editentry" */'./shopuser/productsetup/edit/shoploan@Editentry'),

    },
    {
        path: '/shopaddincometype@entry',
        component: () => import(/* webpackChunkName: "shopaddincometype@entry" */'./shopuser/productsetup/shopaddincometype@entry'),

    },
    {
        path: '/shopaddincometype@entryEdit:shopIncomeTypeId',
        component: () => import(/* webpackChunkName: "shopaddincometype@entryEdit" */'./shopuser/productsetup/edit/shopaddincometype@entryEdit'),

    },
    {
        path: '/shopemployeelogintime@setup',
        component: () => import(/* webpackChunkName: "shopemployeelogintime@setup" */'./shopuser/productsetup/shopemployeelogintime@setup'),

    },
    {
        path: '/shopemployeelogintime@setupEdit:employeeLoginTimeId',
        component: () => import(/* webpackChunkName: "shopemployeelogintime@setupEdit" */'./shopuser/productsetup/edit/shopemployeelogintime@setupEdit'),

    },
    //////   Shop Report
    {
        path: '/adminCategory@list:shopType:labelId',
        component: () => import(/* webpackChunkName: "adminCategory@list" */'./shopuser/shopreport/admincategory@list'),

    },
    {
        path: '/category@Ownerlist:categorylabelId',
        component: () => import(/* webpackChunkName: "category@Ownerlist" */'./shopuser/shopreport/category@ownerlist'),

    },
    {
        path: '/category@Globallist:categorylabelId',
        component: () => import(/* webpackChunkName: "category@Globallist" */'./shopuser/shopreport/category@globallist'),

    },
    {
        path: '/productsupplier@report',
        component: () => import(/* webpackChunkName: "productsupplier@report" */'./shopuser/shopreport/productsupplier@list'),

    },

    {
        path: '/incometype@report',
        component: () => import(/* webpackChunkName: "incometype@report" */'./shopuser/shopreport/incometype@report'),

    },
    {
        path: '/expencetype@report',
        component: () => import(/* webpackChunkName: "expencetype@report" */'./shopuser/shopreport/expencetype@report'),

    },
    {
        path: '/productbrand@report',
        component: () => import(/* webpackChunkName: "productbrand@report" */'./shopuser/shopreport/productbrand@report'),

    },
    {
        path: '/productbrand@list',
        component: () => import(/* webpackChunkName: "productbrand@list" */'./shopuser/shopreport/productbrand@reportList'),

    },
    //////   Accounting
    {
        path: '/voucherEntry',
        component: () => import(/* webpackChunkName: "voucherEntry" */'./admin/page/accounting/entry/voucherEntryNew'),

    },
    {
        path: '/openingVoucher',
        component: () => import(/* webpackChunkName: "openingVoucher" */'./admin/page/accounting/entry/openingVoucher'),

    },
    {
        path: '/chartOfAccounts',
        component: () => import(/* webpackChunkName: "chartOfAccounts" */'./admin/page/accounting/entry/chartOfAccounts'),

    },
    {
        path: '/chartOfAccountTableList',
        component: () => import(/* webpackChunkName: "chartOfAccountTableList" */'./admin/page/accounting/entry/chartOfAccountTableList'),

    },
    {
        path: '/chartOfAccountRegisterList',
        component: () => import(/* webpackChunkName: "chartOfAccountRegisterList" */'./admin/page/accounting/entry/chartOfAccountRegister'),

    },
    {
        path: '/chartOfAccountEdit:id',
        component: () => import(/* webpackChunkName: "chartOfAccountEdit" */'./admin/page/accounting/edit/chartOfAccountEdit'),
    },
    {
        path: '/accountSetup',
        component: () => import(/* webpackChunkName: "accountSetup" */'./admin/page/accounting/entry/accountSetup'),

    },
    {
        path: '/accountSetupEdit:id',
        component: () => import(/* webpackChunkName: "accountSetupEdit" */'./admin/page/accounting/edit/accountSetupEdit'),

    },
    {
        path: '/viewVoucher:id',
        component: () => import(/* webpackChunkName: "viewVoucher" */'./admin/page/accounting/view/viewVoucher'),

    },
    {
        path: '/loanManagement',
        component: () => import(/* webpackChunkName: "loanManagement" */'./admin/page/accounting/entry/loanManagement'),

    },
    {
        path: '/loanProvider@entry',
        component: () => import(/* webpackChunkName: "loanProvider@entry" */'./admin/page/accounting/entry/loanProvider@entry'),

    },
    {
        path: '/loanProvider@edit:id',
        component: () => import(/* webpackChunkName: "loanProvider@edit" */'./admin/page/accounting/edit/loanProvider@edit'),

    },
    {
        path: '/loanReceiveFromProvider@entry',
        component: () => import(/* webpackChunkName: "loanReceiveFromProvider@entry" */'./admin/page/accounting/entry/loanReceiveFromProvider@entry'),

    },
    {
        path: '/loanInstalmentEntry',
        component: () => import(/* webpackChunkName: "loanInstalmentEntry" */'./admin/page/accounting/entry/loanInstalmentEntry'),

    },
    {
        path: '/loanMainAmountPaid',
        component: () => import(/* webpackChunkName: "loanMainAmountPaid" */'./admin/page/accounting/entry/loanMainAmountPaid'),

    },
    {
        path: '/loanReceiverEntry',
        component: () => import(/* webpackChunkName: "loanReceiverEntry" */'./admin/page/accounting/entry/loanReceiver@entry'),

    },
    {
        path: '/loanPayInReceiver',
        component: () => import(/* webpackChunkName: "loanPayInReceiver" */'./admin/page/accounting/entry/loanPayInReceiver'),

    },
    {
        path: '/loanInstallmentReceive',
        component: () => import(/* webpackChunkName: "loanInstallmentReceive" */'./admin/page/accounting/entry/loanInstallmentReceive'),

    },
    {
        path: '/loanMainAmountReceive',
        component: () => import(/* webpackChunkName: "loanMainAmountReceive" */'./admin/page/accounting/entry/loanMainAmountReceive'),

    },
    {
        path: '/incomeExpense',
        component: () => import(/* webpackChunkName: "incomeExpense" */'./admin/page/accounting/entry/incomeExpense'),

    },
    {
        path: '/expenceTypeEntry',
        component: () => import(/* webpackChunkName: "expenceTypeEntry" */'./admin/page/accounting/entry/expenceTypeEntry'),

    },
    {
        path: '/incomeTypeEntry',
        component: () => import(/* webpackChunkName: "incomeTypeEntry" */'./admin/page/accounting/entry/incomeTypeEntry'),

    },
    {
        path: '/incomeEntry',
        component: () => import(/* webpackChunkName: "incomeEntry" */'./admin/page/accounting/entry/incomeEntry'),

    },
    {
        path: '/incomeEntryEdit:id',
        component: () => import(/* webpackChunkName: "incomeEntryEdit" */'./admin/page/accounting/edit/incomeEntryEdit'),

    },
    {
        path: '/incomeProviderEntry',
        component: () => import(/* webpackChunkName: "incomeProviderEntry" */'./admin/page/accounting/entry/incomeProviderEntry'),

    },
    {
        path: '/incomeExpenseCompanyEntry',
        component: () => import(/* webpackChunkName: "incomeExpenseCompanyEntry" */'./admin/page/accounting/entry/incomeExpenseCompanyEntry'),

    },
    {
        path: '/incomeExpenseCompany@edit:id',
        component: () => import(/* webpackChunkName: "incomeExpenseCompany@edit" */'./admin/page/accounting/edit/incomeExpenseCompany@edit'),

    },
    {
        path: '/incomeExpenseCompany@edit',
        component: () => import(/* webpackChunkName: "incomeExpenseCompany@edit" */'./admin/page/accounting/edit/incomeExpenseCompany@edit'),

    },
    {
        path: '/expenseProviderEntry',
        component: () => import(/* webpackChunkName: "expenseProviderEntry" */'./admin/page/accounting/entry/expenseProviderEntry'),

    },
    {
        path: '/expenseEntry',
        component: () => import(/* webpackChunkName: "expenseEntry" */'./admin/page/accounting/entry/expenseEntry'),

    },
    {
        path: '/expenseInvoiceView:id',
        component: () => import(/* webpackChunkName: "expenseInvoiceView" */'./admin/page/accounting/view/expenseInvoiceView'),

    },
    {
        path: '/incomeInvoiceView:id',
        component: () => import(/* webpackChunkName: "incomeInvoiceView" */'./admin/page/accounting/view/incomeInvoiceView'),

    },
    {
        path: '/companyList',
        component: () => import(/* webpackChunkName: "companyList" */'./admin/page/accounting/view/companyList'),

    },
    {
        path: '/companyVoucherList:id',
        component: () => import(/* webpackChunkName: "companyVoucherList" */'./admin/page/accounting/view/companyVoucherList'),

    },
    {
        path: '/companyGeneralLadger:id',
        component: () => import(/* webpackChunkName: "companyGeneralLadger" */'./admin/page/accounting/view/companyGeneralLadger'),

    },
    {
        path: '/companyStatement:id',
        component: () => import(/* webpackChunkName: "companyStatement" */'./admin/page/accounting/view/companyStatement'),

    },
    {
        path: '/supplierStatement:id',
        component: () => import(/* webpackChunkName: "supplierStatement" */'./admin/page/accounting/view/supplierStatement'),

    },
    {
        path: '/employeeStatement:id',
        component: () => import(/* webpackChunkName: "employeeStatement" */'./admin/page/accounting/view/employeeStatement'),

    },
    {
        path: '/leave@statement:id',
        component: () => import(/* webpackChunkName: "leave-statement" */'./admin/page/hrmanagement/hrreport/leave@statement'),


    },
    {
        path: '/companyBillPayReceive',
        component: () => import(/* webpackChunkName: "companyBillPayReceive" */'./admin/page/accounting/entry/companyBillPayReceive'),

    },
    {
        path: '/check@book',
        component: () => import(/* webpackChunkName: "Check Book" */'./admin/page/accounting/entry/check@book'),

    },
    {
        path: '/checkbook@list',
        component: () => import(/* webpackChunkName: "Check Book" */'./admin/page/accounting/view/checkbook@list'),

    },
    {
        path: '/pending@chequebook@list',
        component: () => import(/* webpackChunkName: "Check Book" */'./admin/page/accounting/view/pending@chequebook@list'),

    },
    {
        path: '/billPayReceive',
        component: () => import(/* webpackChunkName: "billPayReceive" */'./admin/page/accounting/entry/billPayReceive'),

    },

    {
        path: '/dueReceiveRegister',
        component: () => import(/* webpackChunkName: "dueReceiveRegister" */'./admin/page/accounting/view/dueReceiveRegister'),

    },
    {
        path: '/loanProviderList',
        component: () => import(/* webpackChunkName: "loanProviderList" */'./admin/page/accounting/view/loanProviderList'),

    },
    {
        path: '/loanProviderLoanList:id',
        component: () => import(/* webpackChunkName: "loanProviderLoanList" */'./admin/page/accounting/view/loanProviderLoanList'),

    },
    {
        path: '/loanProviderLoanStatement:id',
        component: () => import(/* webpackChunkName: "loanProviderLoanStatement" */'./admin/page/accounting/view/loanProviderLoanStatement'),

    },
    {
        path: '/loanReceiveFromProviderEdit:id',
        component: () => import(/* webpackChunkName: "loanProviderLoanStatement" */'./admin/page/accounting/edit/loanReceiveFromProviderEdit'),

    },
    {
        path: '/loanReceiverLoanEdit:id',
        component: () => import(/* webpackChunkName: "loanReceiverLoanEdit" */'./admin/page/accounting/edit/loanReceiverLoanEdit'),

    },
    {
        path: '/loanProviderGeneralLadger:id',
        component: () => import(/* webpackChunkName: "loanProviderGeneralLadger" */'./admin/page/accounting/view/loanProviderGeneralLadger'),

    },
    {
        path: '/loanProviderVoucherList:id',
        component: () => import(/* webpackChunkName: "loanProviderVoucherList" */'./admin/page/accounting/view/loanProviderVoucherList'),

    },
    {
        path: '/loanReceiverList',
        component: () => import(/* webpackChunkName: "loanReceiverList" */'./admin/page/accounting/view/loanReceiverList'),

    },
    {
        path: '/loanReceiverGeneralLadger:id',
        component: () => import(/* webpackChunkName: "loanReceiverGeneralLadger" */'./admin/page/accounting/view/loanReceiverGeneralLadger'),

    },
    {
        path: '/loanReceiverVoucherList:id',
        component: () => import(/* webpackChunkName: "loanReceiverVoucherList" */'./admin/page/accounting/view/loanReceiverVoucherList'),

    },
    {
        path: '/loanReceiverLoanList:id',
        component: () => import(/* webpackChunkName: "loanReceiverLoanList" */'./admin/page/accounting/view/loanReceiverLoanList'),

    },
    {
        path: '/loanReceiverLoanStatement:id',
        component: () => import(/* webpackChunkName: "loanReceiverLoanStatement" */'./admin/page/accounting/view/loanReceiverLoanStatement'),

    },
    {
        path: '/securityMoney',
        component: () => import(/* webpackChunkName: "securityMoney" */'./admin/page/accounting/entry/securityMoney'),

    },
    {
        path: '/advancePayment',
        component: () => import(/* webpackChunkName: "advancePayment" */'./admin/page/accounting/entry/advancePayment'),

    },
    {
        path: '/advance@cheque@posting',
        component: () => import(/* webpackChunkName: "advance Cheque Posting" */'./admin/page/accounting/entry/advance@cheque@posting'),

    },
    {
        path: '/share@capital',
        component: () => import(/* webpackChunkName: "share capital" */'./admin/page/accounting/entry/share@capital'),

    },
    {
        path: '/securityMoneyList',
        component: () => import(/* webpackChunkName: "securityMoneyList" */'./admin/page/accounting/view/securityMoneyList'),
    },
    {
        path: '/securityMoneyWithdraw:id',
        component: () => import(/* webpackChunkName: "securityMoneyWithdraw" */'./admin/page/accounting/edit/securityMoneyWithdraw'),
    },
    {
        path: '/viewSecurityMoneyWithdraw:id',
        component: () => import(/* webpackChunkName: "viewSecurityMoneyWithdraw" */'./admin/page/accounting/view/viewSecurityMoneyWithdraw'),
    },
    {
        path: '/incomeTarget',
        component: () => import(/* webpackChunkName: "incomeTarget" */'./admin/page/accounting/entry/incomeTarget'),
    },
    {
        path: '/incomeTargetList',
        component: () => import(/* webpackChunkName: "incomeTargetList" */'./admin/page/accounting/view/incomeTargetList'),
    },
    {
        path: '/expenseBudget',
        component: () => import(/* webpackChunkName: "expenseBudget" */'./admin/page/accounting/entry/expenseBudget'),
    },
    {
        path: '/expenseBudgetList',
        component: () => import(/* webpackChunkName: "expenseBudgetList" */'./admin/page/accounting/view/expenseBudgetList'),
    },
    {
        path: '/trialBalance',
        component: () => import(/* webpackChunkName: "trial-balnce" */'./admin/page/accounting/view/trialBalance'),
    },
    {
        path: '/incomeStatement',
        component: () => import(/* webpackChunkName: "income-statement" */'./admin/page/accounting/view/incomeStatement'),
    },
    {
        path: '/balanceSheet',
        component: () => import(/* webpackChunkName: "balance-sheet" */'./admin/page/accounting/view/balanceSheet'),
    },
    {
        path: '/bankList',
        component: () => import(/* webpackChunkName: "bank-list" */'./admin/page/accounting/view/bankList'),
    },
    {
        path: '/cashAccountList',
        component: () => import(/* webpackChunkName: "cash-Account-list" */'./admin/page/accounting/view/cashAccountList'),
    },
    {
        path: '/cashBankLadger:id',
        component: () => import(/* webpackChunkName: "cash-Bank-Ladger" */'./admin/page/accounting/view/cashBankLadger'),
    },
    {
        path: '/chartOfAccountBalance',
        component: () => import(/* webpackChunkName: "chart-of-account-balance" */'./admin/page/accounting/view/chartOfAccountBalance'),
    },




    // shop verification
    {
        path: '/newshop',
        component: () => import(/* webpackChunkName: "new-shop" */'./admin/shopverification/NewShop'),

    },
    {
        path: '/verifiedshop',
        component: () => import(/* webpackChunkName: "verified-shop" */'./admin/shopverification/VerifiedShop'),

    },
    {
        path: '/pendingshop',
        component: () => import(/* webpackChunkName: "pending-shop" */'./admin/shopverification/PendingShop'),

    },
    {
        path: '/cancelshop',
        component: () => import(/* webpackChunkName: "cancel-shop" */'./admin/shopverification/CancelShop'),

    },
    {
        path: '/informationneedshop',
        component: () => import(/* webpackChunkName: "informatiom-shop-seed" */'./admin/shopverification/InformationNeed'),

    },
    {
        path: '/informationneedAdminshop',
        component: () => import(/* webpackChunkName: "information-need-shop" */'./admin/shopverification/InformationNeedAdmin'),

    },
    {
        path: '/deliveredshop',
        component: () => import(/* webpackChunkName: "delivered-shop" */'./admin/shopverification/Delivered'),

    },
    // Billing Admin
    {
        path: '/billingnewshop',
        component: () => import(/* webpackChunkName: "billing-new-shop" */'./admin/billingAdmin/BillingNewShop'),

    },
    {
        path: '/newBillRequest',
        component: () => import(/* webpackChunkName: "newBillRequest" */'./admin/billingAdmin/newBillRequest'),

    },
    {
        path: '/newBillCancelList',
        component: () => import(/* webpackChunkName: "newBillCancelList" */'./admin/billingAdmin/newBillCancelList'),

    },
    {
        path: '/newBillApproveList',
        component: () => import(/* webpackChunkName: "newBillApproveList" */'./admin/billingAdmin/newBillApproveList'),

    },
    {
        path: '/pendingbillingshop',
        component: () => import(/* webpackChunkName: "oending-billing-shop" */'./admin/billingAdmin/BillingPending'),

    },
    {
        path: '/cancelbillingshop',
        component: () => import(/* webpackChunkName: "cancelbillingshop" */'./admin/billingAdmin/BillingCancel'),

    },
    {
        path: '/deliveredbillingshop',
        component: () => import(/* webpackChunkName: "deliveredbillingshop" */'./admin/billingAdmin/BillingDelivered'),

    },
    {
        path: '/billinglist',
        component: () => import(/* webpackChunkName: "billinglist" */'./admin/billingAdmin/BillingList'),

    },
    {
        path: '/billDate@Update:id',
        component: () => import(/* webpackChunkName: "billDate@Update" */'./admin/billingAdmin/BillDateUpdate'),

    },
    {
        path: '/billinggracedate',
        component: () => import(/* webpackChunkName: "billinggracedate" */'./admin/billingAdmin/GraceDate'),

    },
    {
        path: '/graceDateEntry',
        component: () => import(/* webpackChunkName: "graceDateEntry" */'./admin/GraceDateEntry'),

    },
    {
        path: '/graceDateUpdate:id',
        component: () => import(/* webpackChunkName: "graceDateUpdate" */'./admin/GraceDateUpdate'),

    },
    {
        path: '/dateexpiredlist',
        component: () => import(/* webpackChunkName: "dateexpiredlist" */'./admin/billingAdmin/DateExpiredList'),

    },
    // CRM & Training
    {
        path: '/trainingnewshop',
        component: () => import(/* webpackChunkName: "trainingnewshop" */'./admin/CRM&Training/TrainingNewShop'),

    },
    {
        path: '/createtraining:id',
        component: () => import(/* webpackChunkName: "createtraining" */'./admin/CRM&Training/CreateTraining'),

    },
    {
        path: '/scheduleList',
        component: () => import(/* webpackChunkName: "scheduleList" */'./admin/CRM&Training/ScheduleList'),

    },
    {
        path: '/trainertrainingschedule',
        component: () => import(/* webpackChunkName: "trainertrainingschedule" */'./admin/CRM&Training/TrainerTrainingSchedule'),

    },
    {
        path: '/trainingscheduleedit:id',
        component: () => import(/* webpackChunkName: "trainingscheduleedit" */'./admin/CRM&Training/TrainingScheduleEdit'),

    },
    {
        path: '/successtraining',
        component: () => import(/* webpackChunkName: "successtraining" */'./admin/CRM&Training/SuccessTrainingList'),

    },
    {
        path: '/voucherList',
        component: () => import(/* webpackChunkName: "voucherList" */'./admin/page/accounting/view/voucherList'),

    },
    {
        path: '/voucherListUser',
        component: () => import(/* webpackChunkName: "voucherListUser" */'./admin/page/accounting/view/voucherListUser'),

    },
    {
        path: '/advancePaymentList',
        component: () => import(/* webpackChunkName: "advancePaymentList" */'./admin/page/accounting/view/advancePaymentList'),

    },
    {
        path: '/shareholderList',
        component: () => import(/* webpackChunkName: "shareholderList" */'./admin/page/accounting/view/shareholderList'),

    },
    {
        path: '/generalJournal',
        component: () => import(/* webpackChunkName: "generalJournal" */'./admin/page/accounting/view/generalJournal'),

    },
    {
        path: '/generalLadger',
        component: () => import(/* webpackChunkName: "generalLadger" */'./admin/page/accounting/view/generalLadger'),

    },
    {
        path: '/incomeSummary',
        component: () => import(/* webpackChunkName: "incomeSummary" */'./admin/page/accounting/view/incomeSummary'),

    },
    {
        path: '/expanseSummary',
        component: () => import(/* webpackChunkName: "expanseSummary" */'./admin/page/accounting/view/expanseSummary'),

    },
    {
        path: '/receiveSummary',
        component: () => import(/* webpackChunkName: "receiveSummary" */'./admin/page/accounting/view/receiveSummary'),

    },
    {
        path: '/paymentSummary',
        component: () => import(/* webpackChunkName: "paymentSummary" */'./admin/page/accounting/view/paymentSummary'),

    },

]
