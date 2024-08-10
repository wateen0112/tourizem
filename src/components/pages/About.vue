<script  setup lang="ts">
import About from '../../assets/images/about.jpg'
</script>
<template>
<div class=" relative min-h-[100vh] "
:style="'background:url('+About+'); background-position:center center'"
>

<div class="w-full h-full absolute top-0 left-0  py-40 bg-[#00000040]">
    <h1  class="lg:text-7xl font-bold uppercase  text-white  top-[20%] mx-10">A Destination for the New Millennium</h1>
<p class="mx-10 text-white max-w-[700px]  text-2xl mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum accusantium quibusdam officiis quaerat tempora dolore aliquid laboriosam fuga totam itaque!</p>
<router-link to="services">
  <button class="scale-150 mx-16 mt-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"> 
    Our Services
  </button>
</router-link>
</div>
</div>

</template>