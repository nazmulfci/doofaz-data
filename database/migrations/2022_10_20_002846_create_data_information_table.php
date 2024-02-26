<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('countryId');
            $table->integer('divisionId');
            $table->integer('districtId');
            $table->integer('thanaId');
            $table->integer('areaId');
            $table->integer('blockRoadId');
            $table->integer('roadId')->nullable();
            $table->integer('houseMarketId');
            $table->integer('floorId');
            $table->integer('shopOrOffice');
            $table->string('shopOfficeName',255);
            $table->string('occupation',100);
            $table->string('designation',100);
            $table->string('refer_by',100);
            $table->string('introduce_place',255);
            $table->string('shopOfficeNo',255)->nullable();
            $table->string('shopOfficeSize',255)->nullable();
            $table->string('mobileNo',255);
            $table->string('email',255)->nullable();
            $table->string('facebook',255)->nullable();
            $table->string('youtube',255)->nullable();
            $table->integer('intarest');
            $table->integer('doYouUseSoftware');
            $table->string('usedSoftwareName',255)->nullable();
            $table->string('whyDisagree',255)->nullable();
            $table->string('productTypeId',255);
            $table->string('howMuchOwner',255)->nullable();
            $table->string('ownersName',255)->nullable();
            $table->string('whatsapp',255)->nullable();
            $table->string('contactNo',255)->nullable();
            $table->string('howMuchStay',255)->nullable();
            $table->integer('officerOrManager');
            $table->string('owner_name')->nullable();
            $table->string('owner_phone')->nullable();
            $table->string('manager_name')->nullable();
            $table->string('manager_phone')->nullable();
            $table->integer('haveComputer');
            $table->string('aboutSoftwareComment',255)->nullable();
            $table->integer('expertPerson');
            $table->string('signboardImage',255);
            $table->string('visitingCardImage',255)->nullable();
            $table->integer('shopId');
            $table->integer('category_id')->nullable();
            $table->integer('category_status')->default(1)->comment('1=new,2=pending,3=cancel,4=final');
            $table->integer('status_type_id')->nullable();
            $table->integer('priority_status')->default(0)->comment('default=0,priority=1');
            $table->string('time_distance',100)->default(0);
            $table->integer('createBy');
            $table->integer('updateBy')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('data_information');
    }
}
