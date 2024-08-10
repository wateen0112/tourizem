
<script setup lang="ts">
import { onMounted,ref } from 'vue';
import Logo  from '../../assets/images/logo.png'
import { RouterLink, useRouter } from 'vue-router';
import Translate from '../home/Translate.vue';
import { UseAuthStore } from '../../store/Auth';
import Profile from '../../assets/images/profile.png'
import { storeToRefs } from 'pinia';
const authStore = UseAuthStore()
const {isLoggedIn,userDto} = storeToRefs(authStore)
const showToolTip = ref(false)
const scrolled = ref(false)
const {logout} =authStore
const router = useRouter()
function  googleTranslateElementInit() {
      window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    }
onMounted(()=>{
	
//   googleTranslateElementInit();
	window.addEventListener('scroll',()=>{
		const scroll = window.scrollY
		if(scroll>0){
			scrolled.value=true
		}
		else {
			scrolled.value = false
		}
	})
})
const handleLogOut = ()=>{
	logout()
showToolTip.value = false
	router.push({
name:'Login'	
})

}
</script>
<template>
	<!-- tool tip wrapper -->
	<div   v-if="showToolTip==true" class="w-full h-full fixed top-0 left-0 bg-[#00000000]"
	@click="showToolTip = false"
	></div>
    <!-- component -->
<nav
:class="scrolled?'bg-[#76C8E8]':'bg-[#00000050] bg-opacity-[.5]'"
class="  shadow  w-100 px-8 md:px-auto">
	<div class="md:h-16  mx-auto md:px-4 text-white container flex items-center justify-between flex-wrap md:flex-nowrap">
		<!-- Logo -->

		<div class="text-indigo-500 md:order-1 ">
			<!-- Heroicon - Chip Outline -->
			<img :src="Logo" class="w-14 h-14" />
		</div>
		<div class="order-4 md:order-4">
			
			<router-link to="../../Intro" v-if="isLoggedIn==false">
				<button class="px-4 py-2 bg-[#5EB5D7] hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
					<!-- Heroicons - Login Solid -->
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
					</svg>
					<span>Login</span>
				</button>
	
			</router-link>
		<button v-else @click="showToolTip=true">
<img :src="Profile"  class="w-10 inverted mt-2" />
		</button>

			</div>
			<div class="order-3 w-[150px]">
				<Translate/>
			</div>
		<div class="  min-w-[600px] hidden  lg:block text-gray-500 order-2 w-full md:w-auto md:order-2">
			<ul class="   flex font-semibold justify-end">
                <!-- Active Link = text-indigo-500
                Inactive Link = hover:text-indigo-500 -->
				<router-link :to="'/mainPage'" ><li class="md:px-4 text-white md:py-2 text-indigo-500">Home</li></router-link>
				<li class="md:px-4 text-white md:py-2 hover:text-indigo-400"><router-link to="/about">About us</router-link></li>
				<li class="md:px-4 text-white md:py-2 hover:text-indigo-400"><router-link  to="services">Services</router-link></li>
	
				<li class="md:px-4 text-white md:py-2 hover:text-indigo-400"><RouterLink to="/ContactUs">Contact</RouterLink></li>
			</ul>
		</div>
	
	</div>

	<div  v-if="showToolTip" class="bg-white  shadow-xl w-[150px] h-auto min-h-[40px] p-4 overflow-hidden   rounded-lg absolute top-12 right-8">
	
		<RouterLink  @click="showToolTip=false" :to="{name:'Profile'}">Show Profile </RouterLink>
<div class="w-[150px] my-1 ml-[-15px]  bg-[#00000050] h-[.5px]"></div>
<button @click="handleLogOut">Log out</button>

	</div>
</nav>
</template>
<style scoped>
.inverted {
	filter: invert(1)
}
</style>