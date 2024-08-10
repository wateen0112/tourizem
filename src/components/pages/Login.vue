<script setup lang="ts">
import { UseAuthStore } from '../../store/Auth';
import LoginImage  from '../../assets/images/login.png'
    import {Icon} from '@iconify/vue'
import {onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const store =  UseAuthStore()
const {login} = store ; 
const {loginDto  , isLoggedIn  } = storeToRefs(store)
const passwordHidden = ref(true)
const router = useRouter()
 function submit(e) {
    e.preventDefault()
     login().then(()=>{
    router.push('/mainPage')
     }).catch()
 

}
onMounted(()=>{
    if (isLoggedIn.value){
        router.push('/mainPage')
    }
})

</script>
<template>

  <!-- component -->
<div class="relative py-16 rec min-h-[100vh]  rec flex justify-center">  
   <div class="  container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
   
      <form
 @submit.prevent="(e)=>{ submit(e)}"
      class="
       overflow-hidden relative   h-[500px]
      m-auto md:w-8/12 lg:w-6/12 xl:w-6/12 bg-opacity-[.9] rounded-2xl bg-black">
      <img class="  absolute w-full  h-full"  :src="LoginImage"/>
           <div class="z-20  h-[500px] rounded-xl overflow-hidden    relative  p-5  shadow-xl">
         
            <h1  class="font-bold  text-4xl text-black p-5 w-full text-center">Login</h1>
               <div class="p-6 sm:p-16">
         
              
                 <div class="mt-4">
                  <label class="block font-medium text-sm text-gray-700" for="password" value="Password" />
                  <div class="relative">
                      <input id="email"   v-model="loginDto.email" type="email" name="email" placeholder="Email" required class = '  bg-[#F3FFFC]    text-black w-full rounded-lg py-1 px-4 border text-sm outline-[#0883ff]'>


                      </div>
                  </div>
                 <div class="mt-4">
                  <label class="block font-medium text-sm text-gray-700" for="password" value="Password" />
                  <div class="relative">
                      <input id="password"  v-model="loginDto.password"  :type="passwordHidden?'password':'text'" name="password" placeholder="Password" required autocomplete="current-password" class = ' text-black  bg-[#F3FFFC]  w-full rounded-lg py-1 px-4 border text-sm outline-[#0883ff]'>

                      <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                          <button  @click="passwordHidden=!passwordHidden" type="button" id="togglePassword" class="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600">
                         <Icon  color="#000" :icon="passwordHidden?'mdi-eye-off':'mdi-eye'" />
                          </button>
                      </div>
                      </div>
                  </div>
                   <div class="mt-8 grid space-y-4">
                       <button type="submit" class="group h-8 bg-[#5EB5D7] px-6 border-2 border-gray-300 rounded-lg transition duration-300 
hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                           <div class="relative flex items-center space-x-4 justify-center">
                            
                               <span class="block w-max font-bold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Login </span>
                           </div>
                       </button>
             
                 
                  
                   </div>

              
               </div>
           </div>
       </form>
   </div>
</div>
   </template>
<style scoped>
.rec{
    /* Rectangle 29 */
  
  
  
  background: linear-gradient(180deg, #296DA8 0.9%, #80A8C2 38.5%, #A8BAC2 84.9%);
  
  
  }
</style>