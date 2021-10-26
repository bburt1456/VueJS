const app = Vue.createApp({
    data(){
        return {
            url: 'http://www.brandonburt.com',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick mahomes', img: 'assets/purdy.jpg'},
                { title: 'the way of kings', author: 'brandon burt', img: 'assets/ku.jpg'},
                { title: 'the final empire', author: 'brandon burt', img: 'assets/vegas.jpg'},
            ]
        }
    },
    methods: {
      toggleShowBooks(){
          this.showBooks = !this.showBooks
      }
    }
})

app.mount('#app')

