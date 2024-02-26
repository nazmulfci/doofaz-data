<template>
    <div class="container-fluid p-0">
     <loading v-if="$root.loading"></loading>
     <router-view v-else></router-view>
     </div>
</template>

<script>
    export default {
      
    }
</script>