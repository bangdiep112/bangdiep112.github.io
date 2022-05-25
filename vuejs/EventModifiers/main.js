var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        clientX: 0,
        clientY: 0
    },
    methods: {
        handleClick(e, number){
            console.log('click', e.target);
            this.counter +=number;
        },
        handleMouseMove(e){
            console.log(e);
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        },
        handleSubmitForm(e){
            console.log(e);
        },
        handleMouseMoveChild(e){
            //e.stopPropagation();
            console.log('handleMouseMoveChild', e.target);
        }
    }
})