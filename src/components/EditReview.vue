<script setup>
// import ref
import { ref } from 'vue'

// import the cards store
import carouselStore from '@/stores/cards'

// import fontAwesome icon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

// Initialize the store
let cardsStore = carouselStore()

// definition review
let review = ref('')
review.value = cardsStore.editReview()
</script>

<template>
  <div class="edit-review">
    <form @submit.prevent="editReview">
      <FontAwesomeIcon
        :icon="faCircleXmark"
        class="close-icon"
        @click="cardsStore.editModeID = null"
      />
      <h2>Edit Review</h2>
      <input type="text" placeholder="Name" v-model="review.userName" />
      <input type="text" placeholder="Job Title" v-model="review.jobTitle" />
      <textarea placeholder="Review" v-model="review.review"></textarea>
      <button type="submit" class="submit" @click="cardsStore.updateReview(review)">Save</button>
    </form>
  </div>
</template>
