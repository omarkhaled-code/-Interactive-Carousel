<script setup>
// import ref
import { ref } from 'vue'

// import the cards store
import carouselStore from '@/stores/cards'

// import fontAwesome icon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

// Initialize the store
let cardsStore = carouselStore()

// definition review
const review = ref(''),
  imageFile = ref(null),
  imageUrl = ref(null),
  fileName = ref(''),
  fileInput = ref(null)

function onFileChange(event) {
  const file = event.target.files[0]
  if (file && file.type.startsWith('image/')) {
    imageFile.value = file
    imageUrl.value = URL.createObjectURL(file)
    fileName.value = file.name
  } else {
    fileName.value = null
  }
}

function triggerFileInput() {
  fileInput.value.click()
}

review.value = cardsStore.editReview()

const handleSubmit = () => {
  if (imageUrl.value) {
    review.value.image = imageUrl
  }

  cardsStore.updateReview(review)
}
</script>

<template>
  <div class="edit-review">
    <form @submit.prevent="handleSubmit">
      <FontAwesomeIcon
        :icon="faCircleXmark"
        class="close-icon"
        @click="cardsStore.editModeID = null"
      />
      <h2>Edit Review</h2>
      <input type="text" placeholder="Name" v-model="review.userName" />
      <input type="text" placeholder="Job Title" v-model="review.jobTitle" />
      <textarea placeholder="Review" v-model="review.review"></textarea>
      <div class="input">
        <p>Rating:</p>
        <input type="number" placeholder="Rating" min="1" max="5" v-model="review.numOfStars" />
      </div>
      <!-- The Pseudo Input File -->
      <div class="file-input-wrapper">
        <input
          type="file"
          @change="onFileChange"
          accept="image/*"
          ref="fileInput"
          class="file-input"
        />
        <button type="button" @click="triggerFileInput" class="file-input-button">
          Upload Your Image (optional)
        </button>
        <FontAwesomeIcon :icon="faCircleCheck" v-if="fileName" class="check-icon" />
      </div>
      <button type="submit" class="submit">Save</button>
    </form>
  </div>
</template>
