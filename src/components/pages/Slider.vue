<script setup lang="ts">
    import S1  from '../../assets/images/s1.jpg'
    import S2  from '../../assets/images/s2.jpg'
    import S3  from '../../assets/images/s3.jpg'
    import {Icon} from '@iconify/vue'
    import S4  from '../../assets/images/s4.jpg'
import {onBeforeMount, onBeforeUnmount, ref} from 'vue'



import { useRouter } from 'vue-router'
import { UseAppStore } from '../../store/App'
import { storeToRefs } from 'pinia'
const store = UseAppStore()
const {showFooter} = storeToRefs(store)
onBeforeMount(()=>{
    showFooter.value = false
    const yep  =localStorage.getItem('none_first_time')!==null
    if (yep)
{
    const router = useRouter()
    router.push({
        name :'Intro'
    })
}
})
onBeforeUnmount(()=>{
    showFooter.value = true
})
const currIndex = ref(0)
const setNonFirstTime = ()=>{
    localStorage.setItem('none_first_time','done')
}
const sliderContent = ref([

{
    img: S1, 
    content : 'South Africa '
},
{
    img: S2, 
    content : 'New York'
},

{
    img: S4, 
    content : 'India'
},
{
    img: S3, 
    content : 'And More'
},

])
  const inc = ()=>{
    if (currIndex.value ==3){
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
currIndex.value = 3
    }
  }
</script>

<template>
<div  class="bg-none min-h-screen relative">
    <div class="fixed top-[50%] bg-red-500 left-0 translate-y-[-50%] z-50 ">
       

    </div>
    
             
  <div  class="z-20">
    <v-carousel  v-model="currIndex"   height="100vh" :show-arrows="false" hide-delimiters    class="h-full  relative">
      
  
        <v-carousel-item 
        v-for="(item , index) in sliderContent"
        >
    
 <div class="h-[100vh] "  :style="'background:url('+item.img+');  background-repeat: no-repeat;     background-size: cover; background-position: center center;'">

    <div  class="z-30 fixed   bg-[#00000050] w-full h-full  flex justify-center items-center flex-col ">

       <div class="flex w-full justify-space-between items-center h-[100px]">
        <span   @click="dec" class="  w-16 h-16 flex justify-center items-center rounded-full shadow-xl  cursor-pointer  z-50 left-2">
            <Icon   color="white"  width="60" icon="mdi-chevron-left" /> 
               
                     </span>
        
        <h1 class=" text-white  uppercase  font-bold text-7xl">{{item.content}}</h1>
        <span @click="inc" class="  w-16 h-16  flex justify-center items-center rounded-full shadow-xl  cursor-pointer z-50 right-2">
            <Icon   color="white"  width="60" icon="mdi-chevron-right" /> 
            
                  </span>  
    </div>

    <router-link  @click="()=>{
   setNonFirstTime()}" to="Intro" class="mt-8 z-40  px-10  hover:opactiy-80 rounded-2xl py-3 bg-[#F3FFFC99]">
        <span class="text-2xl   font-semibold text-[#5EB5D7] ">Discover</span>

    </router-link>
      </div>
    </div>
    </v-carousel-item>
      
      
      </v-carousel>

  </div>

</div>

</template>