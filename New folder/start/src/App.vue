<template>
  <div class="container">
  <app-header>
  </app-header>
    <hr>
    <div class = "row">
      <app-server-report></app-server-report>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/sharedComponents/Header.vue';
  import Footer from './components/sharedComponents/Footer.vue';
  import ServerDetails from './components/server/ServerDetails.vue';
  import ServerReport from './components/server/ServerReport.vue';

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'app-server-details': ServerDetails,
      'app-server-report': ServerReport
    }
  }
</script>

<style>

</style>
