<script setup lang="ts">
import {Icon} from '@iconify/vue'
import Logo  from '../../assets/images/logo.png'
</script>
<template>
    <footer  class="bg-wihte ">
<div    class="bg-[#76C8E8] grid px-5    md:grid-cols-2 grid-cols-1 lg:grid-cols-3 lg:px-28    sm:px-5 
w-full  h-auto min-h-[300px]
" > 

<!-- col 1 -->
 <div>
<h2 class=" font-bold text-2xl  pt-12 text-[#000]">
    Quick Links
</h2>
<ul class="mt-3">
<li class="text-lg text-white font-semibold"><router-link to="/" targt="_blank">
    Home
</router-link></li>
<li class="text-lg text-white font-semibold mt-1"><router-link to="/about" targt="_blank">
    About us
</router-link></li>
<li class="text-lg text-white font-semibold mt-1"><router-link to="/services" targt="_blank">
    Services
</router-link></li>
<li class="text-lg text-white font-semibold mt-1"><router-link to="/ContactUs" targt="_blank">
    Contact
</router-link></li>


</ul>

 </div>
 <!-- col 2 -->
  <div>
    <h2 class=" font-bold text-2xl  pt-12 text-[#000]">
        Contact Info
    </h2>
 <div>

    <div class="flex mt-2 gap-2">
        <Icon icon="mdi-email"  color="#000"  width="22px" />
    <span class="font-semibold  text-white ">Tourwaise@gmail.com</span>
    </div>
    <div class="flex mt-2 gap-2">
        <Icon icon="mdi-phone"  color="#000"  width="22px" />
    <span class="font-semibold  text-white ">+963 927867263</span>
    </div>
    <div class="flex mt-3 justify-start items-center gap-5">
        <Icon icon="mdi-facebook"  color="#000"  width="22px" />
        <Icon icon="mdi-instagram"  color="#000"  width="22px" />
        <Icon icon="mdi-linkedin"  color="#000"  width="22px" />
        <Icon icon="mdi-github"  color="#000"  width="22px" />

    </div>
 </div>
  </div>
  <!--  col 3 -->
    <div>
        <h2 class=" font-bold text-2xl  pt-12 text-[#000]">
            Make a Feedback
        </h2>
        <p class="text-lg text-white font-semibold"> For make your travel more relaxble 
            and interesting
             give us your openion about your travel</p>
     
    </div>
</div>
<div  class="bg-[#76C8E8]   w-full h-[80px] px-28"> 
    <div class="w-full  border-t-[2px]  border-black flex  items-center  justify-start pt-3">
        <img  class="w-14 h-14"  :src="Logo" />
<h3 class="text-3xl  font-semibold">TourWise</h3>
    </div>

</div>
    </footer>
</template>
<style scoped>

textarea{
    resize: none !important;
}
</style>