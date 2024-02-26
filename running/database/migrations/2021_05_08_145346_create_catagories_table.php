<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Catagory;

class CreateCatagoriesTable extends Migration
{
    
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('catagories', function (Blueprint $table) {
            $table->increments('id');
			$table->integer('userId')->default(1)->comment("0=inactive, 1=active");
			$table->string('title');
			$table->string('body');
			$table->timestamps();
        });


        $threads =[
            ["id"=>1,"title"=>"A random sentence","body"=>"Some lorem ipsum","created_at"=>null,"updated_at"=>null],
            ["id"=>2,"title"=>"A random sentence","body"=>"Some lorem ipsum","created_at"=>null,"updated_at"=>null]];
            foreach ($threads as $thread) Catagory::insert($thread);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('catagories');
    }
}
