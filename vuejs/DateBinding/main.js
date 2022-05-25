var VueInstance = new Vue({
    el: '#app',

    data: {
        title: 'Áo thun nam POLO trơn vải cá sấu cotton cao cấp ngắn tay cực sang trọng',
        url: 'https://shopee.vn/-M%C3%A3-155FASHIONSALE-gi%E1%BA%A3m-100-%C4%91%C6%A1n-150K-%C3%81o-thun-nam-POLO-tr%C6%A1n-v%E1%BA%A3i-c%C3%A1-s%E1%BA%A5u-cotton-cao-c%E1%BA%A5p-ng%E1%BA%AFn-tay-c%E1%BB%B1c-sang-tr%E1%BB%8Dng-i.296694982.3448103572?sp_atk=b1105f97-dbd6-456e-a8b1-332e101a93b6&xptdk=b1105f97-dbd6-456e-a8b1-332e101a93b6',
        target: '_blank',
        price: 10000,
        check: true,
    },
    methods: {
        formatPrice() {
            var number = this.price;

            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        }
    }
});