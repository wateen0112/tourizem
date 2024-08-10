<script setup lang="ts">
import LoginImage  from '../../assets/images/login.png'
import { UseAuthStore } from '../../store/Auth';
import {Icon} from '@iconify/vue'
import {onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const store =  UseAuthStore()
const {regsiter} = store ;
const {registerDto ,isLoggedIn  } = storeToRefs(store)
const passwordHidden = ref(true) 
const cpass = ref('')
const router = useRouter()

const cPasswordHidden = ref(true) 
function submit(e) {
    e.preventDefault()
 if (registerDto.value.password!==cpass.value){
    alert ('passwords not matching !')
 }
 else {
    regsiter().then(
        ()=>{
            router.push('/login')
        }
    ).catch()
 }
}
onMounted(()=>{
    if (isLoggedIn.value){
        router.push('/mainPage')
    }
})
</script>
<template>

  <!-- component -->
<div class="relative py-16 rec min-h-[100vh] rec flex">  
   <div class="  container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
   
      <div class="
       overflow-hidden relative
      m-auto md:w-8/12 lg:w-6/12 xl:w-6/12 bg-opacity-[.9] rounded-2xl bg-black">
      <img class="  absolute w-full  h-full"  :src="LoginImage"/>
           <form  @submit.prevent="(e)=>{ submit(e)}" class="z-20 rounded-xl overflow-hidden    relative  p-5  shadow-xl">
         
            <h1  class="font-bold  text-4xl text-black p-5 w-full text-center">Sign up</h1>
               <div class="p-6 sm:p-16">
         
              
                 <div class="mt-4">
                 
                  <div class="relative">
                      <input id="user_name" v-model="registerDto.first_name"  type="text" name="first_name" placeholder="First name" required autocomplete="current-password" class = '   bg-[#F3FFFC]  w-full rounded-lg py-1 px-4 border text-sm text-black outline-[#0883ff]'>


                      </div>
                  </div>
              
                 <div class="mt-4">
                 
                  <div class="relative">
                      <input id="user_name" v-model="registerDto.last_name"  type="text" name="last_name" placeholder="Last name" required autocomplete="current-password" class = '   bg-[#F3FFFC]  w-full rounded-lg py-1 px-4 border text-sm text-black outline-[#0883ff]'>


                      </div>
                  </div>
                 <div class="mt-4">
                 
                  <div class="relative">
                      <input id="email" type="email"  v-model="registerDto.email"   name="email" placeholder="ُEmail" required  class = '   bg-[#F3FFFC]  text-black  w-full rounded-lg py-1 px-4 border text-sm outline-[#0883ff]'>


                      </div>
                  </div>
                 <div class="mt-4">
                 
                  <div class="relative">
                      <input id="email" type="number" v-model="registerDto.phone"  name="phone" placeholder="Phone Number"   class = '   bg-[#F3FFFC] text-black   w-full rounded-lg py-1 px-4 border text-sm outline-[#0883ff]'>


                      </div>
                  </div>
                 <div class="mt-4">
                 
                  <div class="relative">
                      <input v-model="registerDto.password"   :type="passwordHidden?'password':'text'"  name="password" placeholder="Password" required  class = ' text-black   bg-[#F3FFFC]  w-full rounded-lg py-1 px-4 border text-sm outline-[#0883ff]'>

                      <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                          <button  @click="passwordHidden=!passwordHidden"  type="button" id="togglePassword" class="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600">
 <Icon  color="#000" :icon="passwordHidden?'mdi-eye-off':'mdi-eye'" />
                          </button>
                      </div>
                      </div>
                  </div>
                 <div class="mt-4">
                 
                  <div class="relative">
                      <input v-model="cpass"   :type="cPasswordHidden?'password':'text'"  name="cpassword" placeholder="Confirm Password" required  class = 'text-black    bg-[#F3FFFC]  w-full rounded-lg py-1 px-4 border text-sm outline-[#0883ff]'>

                      <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                          <button @click="cPasswordHidden=!cPasswordHidden"  type="button" id="togglePassword" class="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600">
 <Icon  color="#000" :icon="cPasswordHidden?'mdi-eye-off':'mdi-eye'" />
                          </button>
                      </div>
                      </div>
                  </div>
                   <div class="mt-8 grid space-y-4">
                       <button class="group h-8 bg-[#5EB5D7] px-6 border-2 border-gray-300 rounded-lg transition duration-300 
hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                           <div class="relative flex items-center space-x-4 justify-center">
                            
                               <span class="block w-max font-bold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Sign up </span>
                           </div>
                       </button>
                    
                 
                  
                   </div>

              
               </div>
            </form>
       </div>
   </div>
</div>
   </template>
   <style scoped>
   .rec{
       /* Rectangle 29 */
     
     
     
     background: linear-gradient(180deg, #296DA8 0.9%, #80A8C2 38.5%, #A8BAC2 84.9%);
     
     
     }
   </style>