<script setup lang="ts">
import {ref} from 'vue'
import Card from '../reviews/ReviewCard.vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { UseStateStore } from '../../store/State'
import {Icon} from '@iconify/vue'
import { useRouter } from 'vue-router'
const store = 
UseStateStore()
const content = ref('')
const {cerateCityFeedBack} = store
const rate  = ref(0)
const currIndex = ref(1)
const props = defineProps (['feedBacks','city_id'

])
const inc = ()=>{
    if (currIndex.value ==props.feedBacks.length){
        currIndex.value =0
    }
    else {
        currIndex.value = currIndex.value+1;
    }
  }
  const dec = ()=>{
    if (currIndex.value>0){
        currIndex.value  = currIndex.value - 1
    }
    else if(currIndex.value==0){
currIndex.value =props.feedBacks.length
    }
  }
  const  breakpoints = {
    500: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
  900: {
    itemsToShow:2,
    snapAlign: 'start',
  },
  1200: {
    itemsToShow:3,
   
  }}
  const handleCreateReview = ()=>{
const userDto = JSON.parse(localStorage.getItem('user-data'))

if (userDto){

if(content.value!=''){
    const dto = {
    user_id :  userDto['id'],
    rate:rate.value ,
    feedback : content.value,
    city_id:props.city_id

}
    content.value=''
    cerateCityFeedBack(dto).then(()=>{
        currIndex.value =0
    }).catch()

}
}
else {
    const router =  useRouter()
    router.push('login')
}
  }
</script>
<template>


<h2  class="text-center  text-3xl mb-5 font-semibold mt-28 " > What our traveler says </h2>

<div class="relative  md:px-20 relative ">
    <span   @click="dec" class="rounded-full  md:flex hidden w-[30px] cursor-pointer z-40 h-[30px] border-[1px]  justify-center items-center border-solid border-black absolute top-[30%] translate-y-[-50%] left-3 ">

        <Icon icon="mdi-chevron-left" />
    </span>
    <!--large-->
    <span   @click="inc" class="rounded-full w-[30px]  md:flex hidden  cursor-pointer z-40 h-[30px] border-[1px]  justify-center items-center border-solid border-black absolute  top-[30%] translate-y-[-50%] right-3 ">
    
        <Icon icon="mdi-chevron-right" />
    </span>

    <Carousel  v-model="currIndex"   height=""  hide-delimiters  :items-to-show="3" :show-arrows="false" class="h-full   lg:block relative">
<Slide v-for="(item,i) in feedBacks " :key="i">
    <Card  :feedback="item" />
</Slide>
    </Carousel>
    <div
    class="flex  mt-5 justify-center items-center w-full"

    >
<VTextField  
v-model="content"
placeholder="Write Your Comment"
varitant="plain"  >

<template #append-inner>
    <div class="flex justify-start  mx-5 items-center">

        <Icon 
        class="cursor-pointer"
        @click="rate=item" :color="rate>=item?'orange':'#ccc'"  v-for="item in 5 " width="24"
        icon="mdi-star" />
    
    </div>
<Icon  width="28"
    class="cursor-pointer"
@click="handleCreateReview()"
 icon="mdi-telegram" />

</template>

</VTextField>
</div>
</div>
</template>