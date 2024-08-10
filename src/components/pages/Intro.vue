<script setup lang="ts">
import LoginImage  from '../../assets/images/login.png'
import { UseAuthStore } from '../../store/Auth';
import Logo  from '../../assets/images/logo.png'
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const store =  UseAuthStore()
const router = useRouter()
const {loginDto  , isLoggedIn  } = storeToRefs(store)
onMounted(()=>{
    isLoggedIn.value = localStorage.getItem('user-data')
    if (isLoggedIn.value){
        router.push('/mainPage')
    }
})
</script>
<template>

  <!-- component -->
<div class="relative py-16 rec min-h-[100vh]">  
   <div class="  container m-auto  flex justify-center items-center px-6 text-gray-500 md:px-12 xl:px-40">
   
      <div class="
       overflow-hidden relative mt-24  
      m-auto md:w-8/12 lg:w-6/12 xl:w-6/12 bg-opacity-[.9] rounded-2xl bg-black">
      <img class="  absolute w-full  h-full"  :src="LoginImage"/>
           <div class="z-20 rounded-xl overflow-hidden   h-[500px] flex justify-between  py-12 items-center flex-col relative  p-5  shadow-xl">
         
          <div class="w-full flex justify-center items-center"
          >
          <h1  class="font-bold title  max-w-[280px] text-3xl text-black p-5 w-full text-center">Don’t wait
            get your best travel ..</h1>
        </div>
        <div class="flex justify-center items-center w-full ">
<img :src="Logo"  class="w-[180px]   object-cover h-[180px]" />
        </div>
               <div class="">
         

                   <div class=" grid space-y-4">
                   <router-link to="/login">
                    <button class="group h-12 bg-[#F3FFFC] w-[350px] px-6 border-2 border-gray-300 rounded-lg transition duration-300 
                    hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                               <div class="relative flex items-center space-x-4 justify-center">
                                                
                                                   <span class="block w-max font-bold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Login </span>
                                               </div>
                                           </button>

                   </router-link>
              
                   <router-link to="/signup">
                    <button class="group h-12 bg-[#F3FFFC] w-[350px] px-6 border-2 border-gray-300 rounded-lg transition duration-300 
                    hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                               <div class="relative flex items-center space-x-4 justify-center">
                                                
                                                   <span class="block w-max font-bold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Sign up </span>
                                               </div>
                                           </button>

                   </router-link>
              
                  
                   </div>

              
               </div>
           </div>
       </div>
   </div>
</div>
   </template>
<style scoped>
.title{
    font-family: 'Inder';
font-style: normal;
}
.rec{
    /* Rectangle 29 */
  
  
  
  background: linear-gradient(180deg, #296DA8 0.9%, #80A8C2 38.5%, #A8BAC2 84.9%);
  
  
  }
</style>