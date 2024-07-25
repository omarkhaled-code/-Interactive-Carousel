<script setup>
// download component files
import NewReview from '@/components/NewReview.vue'
import CarouselCards from '@/components/CarouselCards.vue'
</script>

<template>
  <header>
    <h1>Krokology Academy</h1>
  </header>
  <main>
    <div class="container">
      <h2>What Our Customer Said</h2>
      <CarouselCards />
      <NewReview />
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
