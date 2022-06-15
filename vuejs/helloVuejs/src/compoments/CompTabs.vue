<template>
    <div class="comp-tabs">
        <div class="tabs-title">
            <span>{{title}}</span>
            <ion-icon name="heart"></ion-icon>
        </div>
        <div class="tabs-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'comp-tabs',
    props: {
        title:String
    },
    data() {
        return {

        }
    }
}
</script>

<style>
.tabs-title {
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    border: 2px solid black;
}
.tabs-header {
    list-style: none; 
    margin:0;
    padding: 0;
    display: flex;  
}
.tabs-header li {
    padding: 8px 15px;
    background-color: #ccc;
    transition: all .3s ease;
}
.tabs-header li:hover {
    background-color: #333;
    color: #fff;
}
.tabs-content {
    border: 2px solid blue;
    margin-top:2px;
    padding: 2px;
}
.tab-content {
    padding: 15px;
    border: 2px solid green;
    text-align: left;
}
</style>