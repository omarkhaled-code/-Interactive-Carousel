<script setup>
import carouselStore from '@/stores/cards'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

let cardsStore = carouselStore()

const customerName = ref(''),
  customerJobTitle = ref(''),
  customerReivew = ref(''),
  numberOfStars = ref(''),
  imageFile = ref(null),
  imageUrl = ref(null),
  fileName = ref('')

const fileInput = ref(null)

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

function submitReview() {
  const newReview = {
    id: cardsStore.cards.length + 1,
    userName: customerName.value,
    jobTitle: customerJobTitle.value,
    review: customerReivew.value,
    numOfStars: numberOfStars.value,
    image: imageUrl.value
  }

  cardsStore.addReview(newReview)

  // Clear the form
  customerName.value = ''
  customerJobTitle.value = ''
  customerReivew.value = ''
  numberOfStars.value = ''
  fileName.value = ''
  imageFile.value = null
  imageUrl.value = null
}

//

//
</script>

<template>
  <div class="new-review">
    <h2>Add / Edit Review</h2>
    <form @submit.prevent="submitReview">
      <input type="text" placeholder="Name" v-model="customerName" />
      <input type="text" placeholder="Job Title" v-model="customerJobTitle" />
      <textarea placeholder="Review" v-model="customerReivew"></textarea>
      <div class="input">
        <input type="number" placeholder="Rating" min="1" max="5" v-model="numberOfStars" />

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
      </div>

      <button type="submit" class="submit">Save</button>
    </form>
  </div>
</template>
