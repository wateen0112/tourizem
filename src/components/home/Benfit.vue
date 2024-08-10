<script  setup lang="ts">
import B1 from '../../assets/images/b1.jpg'
import B2 from '../../assets/images/b2.jpg'

</script>
<template>

<div class="pt-14 lg:px-28  py-32">
<h2  class="text-center  text-4xl font-semibold" >See some benfit of joining us</h2>
<div class="grid lg:grid-cols-2  mt-14">
    <!-- col 1 -->
<div class="flex flex-col justify-start   gap-12 items-start ">
<div class="flex flex-col  justify-start">
<span  class="bg-[#4466C1] py-[2px]  lg:rounded-[12px]  lg:h-[30px]  w-[80px] h-[80px] flex justify-center items-center rounded-full lg:w-[50px] text-center lg:text-[18px] text-3xl  text-white">1</span>
<h3 class="mt-3 font-semibold lg:text-2xl text-[20px]">Get best deals</h3>
<p>Find help with your booking and trarel plans and see what to expect along you journy today with us</p>
</div>
<div class="flex flex-col  justify-start">
<span  class="bg-[#DB8D6F] py-[2px]  lg:rounded-[12px]  lg:h-[30px]  w-[80px] h-[80px] flex justify-center items-center rounded-full lg:w-[50px] text-center lg:text-[18px] text-3xl  text-white">2</span>
<h3 class="mt-3 font-semibold lg:text-2xl text-[20px]">100% price transperarency</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus officia qui repudiandae! Facere nisi ea quidem expedita voluptatem magnam?</p>
</div>
<div class="flex flex-col  justify-start">
<span  class="bg-[#FAD0A4] py-[2px]  lg:rounded-[12px]  lg:h-[30px]  w-[80px] h-[80px] flex justify-center items-center rounded-full lg:w-[50px] text-center lg:text-[18px] text-3xl  text-white">3</span>
<h3 class="mt-3 font-semibold lg:text-2xl text-[20px]">Travel with more confidence</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus officia qui repudiandae! Facere nisi ea quidem expedita voluptatem magnam?</p>
</div>

</div>
    <!-- col 2 -->
     <div class="flex  justify-center w-full lg:justify-end items-center pt-8 lg:px-12">
<div class="relative   ml-[60%]">
    <img class="w-[200px]  h-[290px]  lg:top-[100px] right-[100px] rounded-[100px]  absolute  border-[7px] border-solid  border-[#F3FFFC]" :src="B1" />
    <img class="w-[220px] rounded-[100px]" :src="B2" />


</div>

     </div>
</div>
</div>
</template>