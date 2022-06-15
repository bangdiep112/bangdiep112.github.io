<template>
    <div class="demo-slot">
        <comp-tabs title="Tieu de cua Tab" >
            <ul class="tabs-header">
                <li v-on:click="setActiveTab(index)" v-for="(item,index) in tabsHeader" v-bind:key="index" v-bind:class="{active : tabActive == index}" >{{item.text}}</li>
            </ul>
            <div class="tab-content tab1" v-if="tabActive === 0">
                <p>Tab1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deserunt dolor libero sequi minus ratione nostrum, delectus perferendis, assumenda reiciendis illum quibusdam, voluptate laboriosam dolorum. Doloribus recusandae eligendi veritatis exercitationem?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quo alias enim doloremque sed, laudantium quaerat ipsum expedita neque sit sint itaque veniam odio blanditiis modi possimus, quidem magni exercitationem.</p>
            </div>
            <div class="tab-content tab2" v-else-if="tabActive === 1">
                <p>Tab2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa officia deserunt reiciendis, perferendis quae dolores aliquam odit sequi commodi consequuntur quibusdam dolore, ipsam et explicabo. Repellendus dolorum quae minima?</p>
            </div>
            <div class="tab-content tab3" v-else >
                <p>Tab3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi corporis in dolorum magnam doloremque ab placeat. Esse illum temporibus autem inventore amet, dolor fugiat voluptatem! Dignissimos delectus deserunt cum officia.</p>
            </div>
        </comp-tabs>
    </div>
</template>

<script>
import CompTabs from './CompTabs.vue' ;
export default {
    name: 'demo-slot',
    components: {
        CompTabs
    },
    data() {
        return {
            tabsHeader: [
                {text: 'Tab1'},
                {text: 'Tab2'},
                {text: 'Tab3'}
            ],
            tabActive: 0
        }
    },
    methods: {
        setActiveTab(index){
            this.tabActive = index;
        }
    }
}
</script>

<style>
.demo-slot {
    margin-top: 100px;
    padding: 100px 30px;
    border: 1px solid black;
}

</style>