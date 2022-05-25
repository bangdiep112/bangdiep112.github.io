var vm = new Vue({
    el: '#abc',

    data: {
        title: 'Hoc VueJs'
    },

    methods: {
        say: function(text) {
            return 'Hello' + ' ' + text;
        }
    }
});

console.log(vm);

setTimeout(() => {
    vm.title = 'Ahihi';
}, 3000);