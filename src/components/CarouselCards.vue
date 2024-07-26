<script setup>
//import ref
import { ref } from 'vue'

// import the cards store
import carouselStore from '../stores/cards'

// import fontAwesome icon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// import swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

// import swiper style
import 'swiper/css/navigation'
import 'swiper/swiper-bundle.css'

// Initialize the store
let cardsStore = carouselStore()

// swiper options
const swiperOptions = ref({
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: { clickable: true },
  navigation: true,
  loop: true,
  autoplay: { delay: 1000, disableOnInteraction: false },
  modules: [Navigation, Autoplay],
  breakpoints: {
    // when window width is <= 768px
    768: {
      slidesPerView: 3
    },
    // when window width is <= 568px
    568: {
      slidesPerView: 2
    },
    // when window width is <= 390px
    390: {
      slidesPerView: 1
    }
  }
})

// Reference to the swiper instance
const mySwiper = ref(null)

const onSwiper = (swiperInstance) => {
  mySwiper.value = swiperInstance
}

// === Start Autoplay ===
// const startAutoplay = () => {
//   if (mySwiper.value) {
//     mySwiper.value.autoplay.start()
//   }
// }

// === Stop Autoplay ===
// const stopAutoplay = () => {
//   if (mySwiper.value) {
//     mySwiper.value.autoplay.stop()
//   }
// }
</script>

<template>
  <div class="swiper-container">
    <div class="carousel">
      <swiper
        @swiper="onSwiper"
        ref="mySwiper"
        :modules="swiperOptions.modules"
        :slides-per-view="swiperOptions.slidesPerView"
        :space-between="swiperOptions.spaceBetween"
        :pagination="swiperOptions.pagination"
        :navigation="swiperOptions.navigation"
        :autoplay="swiperOptions.autoplay"
        :loop="swiperOptions.loop"
        :breakpoints="swiperOptions.breakpoints"
      >
        <swiper-slide class="card swiper-slide" v-for="card in cardsStore.getCards" :key="card.id">
          <div class="content">
            <div class="icons">
              <FontAwesomeIcon
                :icon="faStar"
                class="star"
                v-for="star in card.numOfStars"
                :key="star"
              />
            </div>
            <div class="text">
              <p v-if="card.review.length > 280">{{ card.review.slice(0, 280) }}...</p>
              <p v-else>{{ card.review }}</p>
            </div>
          </div>
          <div class="user-info">
            <div class="img">
              <img
                v-if="card.img"
                :src="`src/assets/${card.img}`"
                :alt="`${card.userName} image`"
                class="user-img"
              />
              <img src="@/assets/user.png" alt="user image" v-else />
            </div>
            <div class="info">
              <h3>{{ card.userName }}</h3>
              <p>{{ card.jobTitle }}</p>
            </div>

            <!-- Edit Button   --! >
            <button @click="cardsStore.setEditMode(card.id)">Edit</button> -->

            <!-- Delete Button --! >
            <button @click="cardsStore.deleteReview(card.id)">Delete</button> -->
          </div>
        </swiper-slide>
        <template v-slot:pagination>
          <div class="swiper-pagination"></div>
        </template>
        <template v-slot:button-prev>
          <div class="swiper-button-prev"></div>
        </template>
        <template v-slot:button-next>
          <div class="swiper-button-next"></div>
        </template>
      </swiper>
    </div>
  </div>

  <!-- === Start And Stop Buttons === -->
  <!-- <div class="controls">
    <button @click="startAutoplay">Start</button>
    <button @click="stopAutoplay">Stop</button>
  </div> -->
</template>

<!-- === Style Control AutoPlay Butons === -->

<!-- <style scoped>
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 10px 14px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style> -->
