const app = Vue.createApp({
    data(){
        return {
            url: 'http://www.brandonburt.com',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick mahomes', img: 'assets/purdy.jpg', isFav: true},
                { title: 'the way of kings', author: 'brandon burt', img: 'assets/ku.jpg', isFav: false},
                { title: 'the final empire', author: 'brandon burt', img: 'assets/vegas.jpg', isFav: true},
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

