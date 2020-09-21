<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Billing Period</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="subscription in Subscriptions" :key="subscription.key">
            <td>{{ subscription.name }}</td>
            <td>{{ subscription.description }}</td>
            <td>{{ subscription.amount }}</td>
            <td>{{ subscription.period }}</td>
            <td>
              <router-link :to="{name: 'edit', params: { id: subscription.key }}" class="btn btn-primary btn-sm">Edit</router-link>
              <button @click.prevent="deleteSubscription(subscription.key)" class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { db } from '../firebaseDb'
export default {
  data () {
    return {
      Subscriptions: []
    }
  },
  created () {
    db.collection('subscriptions').onSnapshot((snapshotChange) => {
      this.Subscriptions = []
      snapshotChange.forEach((doc) => {
        this.Subscriptions.push({
          key: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          amount: doc.data().amount,
          period: doc.data().period
        })
      })
    })
  },
  methods: {
    deleteSubscription (id) {
      if (window.confirm('Do you really want to delete?')) {
        db.collection('subscriptions').doc(id).delete().then(() => {
          console.log('Document deleted!')
        })
      }
    }
  }
}
</script>
