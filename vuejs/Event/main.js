var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        clientX: 0,
        clientY: 0
    },
    methods: {
        handleClick(e, number){
            this.counter +=number;
        },
        handleMouseMove(e){
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        }
    }
})