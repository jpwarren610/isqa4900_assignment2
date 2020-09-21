<template>
  <div>
    <nav class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">Subscription List</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Add Subscription</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list">View Subscriptions</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-5">
      <router-view>
        <div class="row justify-content-center">
          <div class="col-md-5">
            <h3 class="text-center">Add Subscription</h3>
            <form @submit.prevent="onFormSubmit">
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="subscription.name" required/>
              </div>
              <div class="form-group">
                <label>Description</label>
                <input type="text" class="form-control" v-model="subscription.description" required/>
              </div>
              <div class="form-group">
                <label>Amount</label>
                <input type="text" class="form-control" v-model="subscription.amount" required/>
              </div>
              <div class="form-group">
                <label>Billing Period</label>
                <input type="text" class="form-control" v-model="subscription.period" required/>
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn-block btn-sm">Add Subscription</button>
              </div>
            </form>
          </div>
        </div>
      </router-view>
    </div>
  </div>
</template>
<script>
import { db } from './firebaseDb'

export default {
  data () {
    return {
      subscription: {
      }
    }
  },
  methods: {
    onFormSubmit (event) {
      event.preventDefault()
      db.collection('subscriptions').add(this.subscription).then(() => {
        alert('Subscription successfully created!')
        this.subscription.name = ''
        this.subscription.description = ''
        this.subscription.amount = ''
        this.subscription.period = ''
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
