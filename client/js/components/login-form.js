Vue.component('login-form', {
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        signInGoogle(googleUser) {
            const id_token = googleUser.getAuthResponse().id_token;

            axios
                .post(`${baseUrl}/signin/google`, {
                    id_token
                })
                .then(({
                    data
                }) => {
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('fullname', data.fullname)
                    this.$emit('sign-in')
                })
                .catch(err => {
                    console.log(err)
                })
        },
        signInLocal() {
            let user = {
                username: this.user.username,
                password: this.user.password
            }
            axios
                .post(`${baseUrl}/signin/local`, user)
                .then(({
                    data
                }) => {
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('fullname', data.fullname)
                    this.$emit('sign-in')
                })
                .catch(err => {
                    console.log(err)
                })
        }

    },
    props: ['register'],
    template: `
    <div id="signin-form" >
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
    `
})