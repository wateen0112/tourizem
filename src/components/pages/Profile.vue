<script   setup lang="ts">
import { storeToRefs } from 'pinia';
import { UseAuthStore } from '../../store/Auth';
import Profile from '../../assets/images/profile.png'
import { UseUserStore } from '../../store/User';
import { onMounted, ref } from 'vue';
const authStore = UseAuthStore()
const {userDto} = storeToRefs(authStore)
const store = UseUserStore()
const {getUserReservations} = store
const loading = ref(true)
const {userReservations} = storeToRefs(store)
onMounted(()=>{
    userDto.value =  JSON.parse(localStorage.getItem('user-data'))
 loading.value = false
    getUserReservations(userDto.value.id).then().catch()
})
function dateDifference(date1, date2) {
    // Convert both dates to milliseconds
    const date1_ms = new Date(date1).getTime();
    const date2_ms = new Date(date2).getTime();

    // Calculate the difference in milliseconds
    const difference_ms = Math.abs(date2_ms - date1_ms);

    // Convert back to days and return
    return Math.floor(difference_ms / (1000 * 60 * 60 * 24));
}

const calculateStatus = (date , paid )=>{
    let isPaid = false
    let isDone = false
    let color = '#0f0'
    let status = ''
if (paid!==0){
isPaid= true
}
const d   =new Date()
if (date){1
    const def = dateDifference(d, date)
 if (def <0){
    isDone = true
 }
}
if (paid  &&isDone){
    status  ='Done' 
    color='#00ff0050'
}
else if (paid&&!isDone){
status =  'wating for the trip'
color ='#ffff0050'
}
else if (!paid&&isDone){
    status = 'Cancled'
    color='#ff000050'

}
else   if(!paid && !isDone){
    status ='Wating for payment'
    color = '#ff990050'
}
return {
    status :status , 
    color:color
}
}

</script>
<template>

<div v-if="loading==false">
    <div  v-if="userDto" class="pt-20  lg:px-16 h-[100vh]">
        <div class="flex justify-start items-start ">
        <div class="bg-[#eee] rounded-full w-40 h-40 ">
        
            <img v-if="userDto.image" :src="Profile">
            <v-img
            class="flex justify-start items-start "
          
            :src="userDto.image"
          >
            <template #error>
                <div class="bg-[#eee] rounded-full w-40 h-40">
                   <img :src="Profile">
                </div>
            </template>
          </v-img>
        </div>
        <h1  class="m-5 text-3xl font-bold" >{{userDto.first_name}}   {{userDto.last_name}} </h1>
        
        </div>
        <!-- reservations table -->
         <!-- component -->
        <!-- This is an example component -->
        <div>
        
            <v-table   height="400px"
            fixed-header class="w-full  mt-5 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-none  dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">ID</th>
                    <th scope="col" class="py-3 px-6">Paid</th>
          
                    <th scope="col" class="py-3 px-6">Price</th>
                    <th scope="col" class="py-3 px-6">Travel Date</th>
                    <th scope="col" class="py-3 px-6">Start Point</th>
                    <th scope="col" class="py-3 px-6">End Point</th>
                    <th scope="col" class="py-3 px-6">Status</th>
                </tr>
                </thead>
                <tbody class="rounded-2xl h-auto  max-h-[100px] overflow-y-auto bg-[#c7c7c750]">
                <tr class=" border-b text-black" v-for="item in userReservations">
                    <td class="py-4 px-6">{{item.id}}</td>
                    <td class="py-4 px-6">{{item.paid}}</td>
          
                    <td class="py-4 px-6">{{item.price??0}} $</td>
                    <td class="py-4 px-6">{{item.travel_date??'---'}}</td>
                    <td class="py-4 px-6">{{item.start_point}}</td>
                    <td class="py-4 px-6">{{item.start_point}} </td>
        
                    <td class="py-4 px-6">
        
                        <span  class="  px-4 py-1 rounded-full" :style="'background:'+calculateStatus(item.travel_date ,item.paid ).color">{{calculateStatus(item.travel_date ,item.paid ).status}}</span>
                    </td>
                </tr>
          
              
         
                </tbody>
            </v-table>
        </div>
        
        
        
        <!-- reservations table -->
        </div>
</div>

</template>