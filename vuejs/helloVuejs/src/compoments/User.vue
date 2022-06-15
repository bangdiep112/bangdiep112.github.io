<template>
    <div class="user">
        <h1>{{ user.email }}</h1>
        <button v-on:click="handleDelete" class="delete">Delete</button>
    </div>
</template>

<script>
export default {
    name: 'user',
    props: {
        user: {
            type: Object,
            type: null
        }
    },
    data() {
        return{

        }
    },
    methods: {
        handleDelete(e) {
            var data = {
                id: this.user.id
            }
            this.$emit('deleteUser', data);
        }
    }
}
</script>

<style>
.user {
    border: 1px solid black;
    padding: 20px;
    margin: 15px;
    position: relative;
}
.delete {
    position:absolute;
    top: 0;
    right: 0;
}
</style>