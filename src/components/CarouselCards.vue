<script setup>
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

let cardsStore = carouselStore()
let modules = [Navigation, Autoplay]
</script>

<template>
  <div class="swiper-container">
    <div class="carousel">
      <swiper
        ref="swipper"
        :slides-per-view="3"
        :space-between="10"
        :pagination="{ clickable: true }"
        :navigation="true"
        :loop="false"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
        :modules="modules"
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
</template>
