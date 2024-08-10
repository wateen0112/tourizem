<script  setup lang="ts">
import B1 from '../../assets/images/b1.jpg'
import B2 from '../../assets/images/b2.jpg'
import Card from '../famos/Card.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

</script>
<template>

<div class="px-28 ">
<h2  class="text-center  text-4xl font-semibold" >Packages</h2>
<div  class="my-8">
<VCarousel   height=""  hide-delimiters  :show-arrows="false" class="h-full  relative">
<VCarouselItem  >
    
    <div  class="flex">

        <Card  v-for="item in 3" />
    </div>

</VCarouselItem>


</VCarousel>

</div>
</div>
</template>