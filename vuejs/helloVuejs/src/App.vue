<template>
  <div id="app">
    <div class="container">
      <button v-on:click="title = 'Học lập trình tại Zendvn'" >Thay đổi title từ Component App.vue</button>
      <!--<CompHeader></CompHeader>-->
      <comp-header v-bind:listUser="listUser" v-on:changeTitleEvent="handleChangeTitle" v-bind:title="title" />
      <!--<CompHeader />-->
      <list-user v-on:deleteUserEvent="handleDeleteUser" v-bind:listUser="listUser" />
      <!--<CompFooter></CompFooter>-->
      <comp-footer v-bind:title="title" />
      <!--<CompFooter />-->
      <demo-ref />
      <demo-slot />
    </div>
  </div>
</template>

<script>
import ListUser from "./compoments/ListUser.vue";
import CompHeader from "./compoments/CompHeader.vue";
import CompFooter from "./compoments/CompFooter.vue";
import DemoRef from "./compoments/DemoRef.vue";
import DemoSlot from "./compoments/DemoSlot.vue";

/*
App
  Header
  ListProduct
    Product
    Product
    Product
  Footer
*/
export default {
  name: "app",
  data() {
    return {
      title: "Hello Vuejs - ....",
      listUser: [
        { id: 1, email: "test1@gmail.com", active: false },
        { id: 2, email: "test2@gmail.com", active: true },
        { id: 3, email: "test3@gmail.com", active: true },
        { id: 4, email: "test4@gmail.com", active: false },
        { id: 5, email: "test1@gmail.com", active: false },
        { id: 6, email: "test2@gmail.com", active: true },
        { id: 7, email: "test3@gmail.com", active: true },
        { id: 8, email: "test4@gmail.com", active: false },
        { id: 9, email: "test3@gmail.com", active: true },
      ],
    };
  },
  components: {
    CompHeader,
    CompFooter,
    ListUser,
    DemoRef,
    DemoSlot,
  },
  methods: {
    handleChangeTitle(data) {
      this.title = data.title;
    },
    handleDeleteUser(data) {
      var indexDelete = -1;
      this.listUser.forEach((u, idx) => {
        if (u.id === data.id) {
          indexDelete = idx;
        }
      });
      if (indexDelete != -1) {
        this.listUser.splice(indexDelete, 1);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 3000px;
}
</style>
