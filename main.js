const App = Vue.createApp({
    data(){
        return {
            product: "Car toy",
            description: "This toy is very useful for Children and adults.",
            seletedVariant: 0,
            brand: "Vue Learning",
            details: {
                color: "Blue and Black color", 
                size: "Large and small size", 
                easiness: "Very comfortable", 
                cotton: "100% cotton", 
                recommendation: "100%"
            },
            isActive: 0,
            cart: 0,
            variants: [
                {id: 2210, color: "green", img: "./assets/images/socks_green.jpg", quantity: 50},
                {id: 2211, color: "blue", img: "./assets/images/socks_blue.jpg", quantity: 0}
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(index){
            this.seletedVariant = index
        },
        showActive() {
            this.isActive += 1
        }
    },
    computed: {
        title() {
            return this.brand + ' - ' + this.product
        },
        image() {
            return this.variants[this.seletedVariant].img
        },
        inStock () {
            return this.variants[this.seletedVariant].quantity
        }
    }
})
