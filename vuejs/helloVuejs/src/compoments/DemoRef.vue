<template>
    <div class="demo-ref">
        <h1>DemoRef</h1>
        <button v-on:click="handleClickInputFile" class="avatar">Thay Đổi Avatar</button>
        <input ref="fileInputAvatar" type="file" style="display:none;">
    </div>
</template>

<script>
export default {
    name: 'demo-ref',
    data() {
        return {

        }
    },
    methods: {
        handleClickInputFile(e){
            this.$refs.fileInputAvatar.click();
        }
    }
}
</script>

<style>
.demo-ref {
    margin-top: 100px;
    padding: 100px 30px;
    border: 1px solid black;
}
.avatar {
    padding: 12px 15px;
    background-color: #333;
    color: whitesmoke;
    border: 2px solid #333;
    transition: all .3s ease;
}
.avatar:hover {
    background-color: #fff;
    color: #333;
}
</style>