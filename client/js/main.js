const baseUrl = 'http://localhost:3000';
const token = localStorage.getItem('token');

let app = new Vue({
  el: '#app',
  data: {
    user: {
      fullname: localStorage.getItem('fullname')
    },
    load: false,
    article: {
      id: '',
      title: '',
      content: '',
      created_at: '',
      updated_at: '',
      featured_image: '',
      status: 'new'
    }
  },
  methods: {
    getArticles() {
      const token = localStorage.getItem('token');
      
      axios
        .get(`${baseUrl}/article/user`, { headers: { token } })
        .then(({ data }) => {
          console.log(data)
          this.articles = []
          if(data.length > 0) {
            for(index in data) {
              this.articles.push(data[index])
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    filterArticle(data) {
      this.articles = []
      if(data.length > 0) {
        for(index in data) {
          this.articles.push(data[index])
        }
      }
    }
  }
})
