<script setup>
import carouselStore from '@/stores/cards'
import { ref } from 'vue'

let cardsStore = carouselStore()

let customerName = ref('')
let customerJobTitle = ref('')
let customerReivew = ref('')

const handleSubmit = () => {
  let newReview

  if (customerReivew.value !== '' && customerName.value !== '')
    newReview = {
      id: cardsStore.cards.length + 1,
      userName: customerName.value,
      jobTitle: customerJobTitle.value,
      review: customerReivew.value,
      numOfStars: 5
    }

  cardsStore.addReview(newReview)

  customerName.value = ''
  customerJobTitle.value = ''
  customerReivew.value = ''
}
</script>

<template>
  <div class="new-review">
    <h2>Add / Edit Review</h2>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Name" v-model="customerName" />
      <input type="text" placeholder="Job Title" v-model="customerJobTitle" />
      <textarea placeholder="Review" v-model="customerReivew"></textarea>
      <button type="submit" class="submit">Save</button>
    </form>
  </div>
</template>
