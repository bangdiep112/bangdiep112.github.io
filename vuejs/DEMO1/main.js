var VueInstance = new Vue({
    el: '#app',

    data: {
        title: 'Áo Đũi Nam Cổ Tàu Ngắn Tay Đẹp Cao Cấp FAVITI AD63',
        url: 'https://shopee.vn/%C3%81o-%C4%90%C5%A9i-Nam-C%E1%BB%95-T%C3%A0u-Ng%E1%BA%AFn-Tay-%C4%90%E1%BA%B9p-Cao-C%E1%BA%A5p-FAVITI-AD63-i.38003654.5244416329?sp_atk=7df00867-4ba1-4c33-b3db-e17f7227f0e7&xptdk=7df00867-4ba1-4c33-b3db-e17f7227f0e7',
        target: '_blank',
        priceSale: 120000,
        price: 200000,
        sale:0.5,
        cardNumber: 0,
        selectedProduct: 0,
        listProductDetail: [
            {
                image: 'https://cf.shopee.vn/file/a9de3f199cfc0fe0d1a66594265c5a4b_tn',
                quanity: 8,
                textColor: 'Màu Xanh Lá'
            },
            {
                image: 'https://cf.shopee.vn/file/7cc159dbc9f363ff98a51cb411506f28_tn',
                quanity: 10,
                textColor: 'Màu Xanh Than'
            },
            {
                image: 'https://cf.shopee.vn/file/cecb986916659ffe780d452e278da890_tn',
                quanity: 0,
                textColor: 'Màu Vàng'
            }
        ],
        description:  '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam voluptas beatae ipsam sit nisi praesentium ratione eos molestiae assumenda consequuntur alias nobis aliquid, inventore ad libero mollitia dignissimos voluptatem explicabo.</p> '
    },
    methods: {
        handleClickColor(e,index) {
            this.selectedProduct = index;
        },
        classActive(index) {
            return {
                active: this.selectedProduct == index
            }
        },
        handleAddToCart() {
                if(this.getProduct.quanity <= 0) {
                    alert('So luong ko du');
                }else {
                    this.cardNumber = this.cardNumber + 1;
                    this.getProduct.quanity = this.getProduct.quanity - 1;
                }
        }
    },
    computed: {
        formatPrice() {
            var number = this.price;

            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        formatPriceSale() {
            var number = this.price - this.sale * this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        getProduct() {
            let index = this.selectedProduct;
            return this.listProductDetail[index];
        }
    }
});