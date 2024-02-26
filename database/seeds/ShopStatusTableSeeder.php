<?php

use Illuminate\Database\Seeder;

class ShopStatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = ['first', 'second', 'third'];
        foreach ($categories as $category) 
	        Category::create(['title' => $category]);
    }
}
