DELETE FROM `chart_of_account_registers` WHERE shopId = 
DELETE FROM `chart_of_account_balances` WHERE shopId = 
DELETE  FROM `statement_information` WHERE shopId = 
DELETE FROM `receive_payment_statements` WHERE shopId =
DELETE FROM `tmp_opening_vouchers` WHERE shopId = 
DELETE FROM `voucher_information` WHERE shopId =
DELETE FROM `voucher_information_reports` WHERE shopId = 
DELETE FROM `shop_add_bank_entries` WHERE shopId = 
DELETE FROM `purchase_product_entries` WHERE shopId = 
DELETE FROM `purchase_product_details` WHERE shopId = 
DELETE FROM `purchase_product_total_quantities` WHERE shopId = 
DELETE FROM `purchase_product_unit_info_tmps` WHERE shopId = 

DELETE FROM `purchase_invoice_unit_infos` WHERE shopId = 
DELETE FROM `purchase_product_unit_infos` WHERE shopId = 
DELETE FROM `purchase_product_unit_info_histories` WHERE shopId = 
DELETE FROM `purchase_return_invoice_unit_infos` WHERE shopId = 
DELETE FROM `sales_return_invoice_unit_infos` WHERE shopId = 

DELETE FROM `purchase_invoices` WHERE shopId = 
DELETE FROM `invoice_no_generates` WHERE shopId = 
DELETE FROM `invoice_setup_details` WHERE shopId = 
DELETE FROM `sales_invoices`  WHERE shopId = 
DELETE FROM `sales_invoice_temps`  WHERE shopId = 
DELETE FROM `sales_return_invoice_tmps` WHERE shopId = 
DELETE FROM `sales_customer_entries` WHERE shopId = 
DELETE FROM `dealer_sales_orders`  WHERE shopId = 24
DELETE FROM `dealer_sales_order_receive_submits` WHERE shopId = 24
DELETE FROM `dealer_sales_order_submits` WHERE shopId = 24
DELETE FROM `dealer_sales_supplier_search_infos` WHERE shopId = 24
DELETE FROM `sales_payments`  WHERE shopId = 24
DELETE FROM `sales_product_entries` WHERE shopId = 24
DELETE FROM `sales_product_price_entries` WHERE shopId = 24
DELETE FROM `sales_product_price_entry_histories` WHERE shopId = 24
DELETE FROM `sales_return_invoice_tmps` WHERE shopId = 24
DELETE FROM `sales_return_product_list_tmps` WHERE shopId = 24
DELETE FROM `add_product_supplier_entries` WHERE shopId = 24
DELETE FROM `supplier_payments` WHERE shopId = 24

DELETE FROM `stock_summeries` WHERE shopId = 24



