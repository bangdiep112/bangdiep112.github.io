<template>
    <header>
        <ul>
            <li  v-for="user in listUser" v-bind:key="user.id" >{{user.email}}</li>
        </ul>
        <h1>{{ title }} <br>
            <button v-on:click="changeTitleHeader" >Thay đổi title từ CompsHeader.vue</button>
        </h1>
    </header>
</template>

<script>
export default {
    name: 'comp-header',
    props: {
        title: String,
        listUser: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
             
        }
    },
    methods: {
        changeTitleHeader(e) {
            var data = {
                title: 'Thay đổi title do data'
            }
            this.$emit('changeTitleEvent', data);
        }
    }
}
</script>

<style>

</style>
