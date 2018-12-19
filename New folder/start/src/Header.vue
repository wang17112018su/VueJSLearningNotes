<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <header>
          <h1>Server Status</h1>
        </header>
        <hr>
      </div>
    </div>
    <div>
      <app-server-report></app-server-report>
    </div>
    <div class="col-xs-12 col-sm-6">
      <p>Server Details are currently not updated</p>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <hr>
        <footer>
          <p>All Servers are managed here</p>
        </footer>
      </div>
    </div>
  </div>

</template>

<script>
  import ServerReport from './ServerReport.vue';

    export default {
      components: {
      'app-server-report': ServerReport
      }
    }

</script>

<style scoped>

</style>
