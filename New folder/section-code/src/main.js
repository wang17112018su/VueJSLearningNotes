import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;

export const eventBus = new Vue({
    methods: {
      changeAge(age){
        this.$emit('ageWasEdited',age);
      }
    }

});

new Vue({
  render: h => h(App),
}).$mount('#app');



