<script setup>
import { ref } from 'vue'
import carouselStore from './stores/cards'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// import swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/swiper-bundle.css'

let cardsStore = carouselStore()

let customerName = ref('')
let customerJobTitle = ref('')
let customerReivew = ref('')
let modules = [Pagination, Navigation, Autoplay]

const handleSubmit = () => {
  let newReview
  if (customerReivew.value !== '' && customerName.value !== '')
    newReview = {
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
  <header>
    <h1>Krokology Academy</h1>
  </header>
  <main>
    <div class="container">
      <h2>What Our Customer Said</h2>
      <div class="swiper-container">
        <div class="carousel">
          <swiper
            ref="swipper"
            :slides-per-view="3"
            :space-between="10"
            :pagination="{ clickable: true }"
            :navigation="true"
            :loop="true"
            :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :modules="modules"
          >
            <swiper-slide
              class="card swiper-slide"
              v-for="card in cardsStore.getCards"
              :key="card.id"
            >
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
                  <p>{{ card.review }}</p>
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
      <div class="new-review">
        <h2>Add / Edit Review</h2>
        <form @submit.prevent="handleSubmit">
          <input type="text" placeholder="Name" v-model="customerName" />
          <input type="text" placeholder="Job Title" v-model="customerJobTitle" />
          <textarea placeholder="Review" v-model="customerReivew"></textarea>
          <button type="submit" class="submit">Save</button>
        </form>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
header {
  text-align: center;
  margin: 20px auto;
  h1 {
    font-size: 22px;
    font-weight: 700;
    font-family: 'Poppins';
    line-height: 29.92px;
    color: #1a1a1a;
  }
}
</style>
