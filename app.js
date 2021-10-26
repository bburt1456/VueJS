const app = Vue.createApp({
    data(){
        return {
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick mahomes'},
                { title: 'the way of kings', author: 'brandon burt'},
                { title: 'the final empire', author: 'brandon burt'},
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

