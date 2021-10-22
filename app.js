const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>'
    data(){
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Burt',
            age: 20
        }
    },
    methods: {
      // changeTitle(title) {
            //this.title = 'Words of Randiance'
            //this.title = title
      // } 
      toggleShowBooks(){
          this.showBooks = !this.showBooks
      },
      handleEvent(e){
          console.log(e)
      }
    }
})

app.mount('#app')

