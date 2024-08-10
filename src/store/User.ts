import { UseApi } from "../composables/UseApi";
import appConfig from "../../app.config";
import axios from "axios";
import { serialize } from "object-to-formdata";
import { defineStore } from "pinia";
import { createElementBlock, ref } from "vue";
const {POST } = UseApi()
export const UseUserStore = defineStore('user',()=>{
const RESERVATION_API = appConfig.API_URL +'/reservations/'
 enum  USER_API {
READ_USER_RESERVATIONS ='read_user_reservations.php',
CREATE_RESERVATION='reservations/create_reservation.php'
}
 class UserResrvaitionDto {
    id:string='';
    price:string='';
    paid:string='';
    travel_date:string='';
    end_point:string='';
    start_point:string='';
   
 }
  class CreateReservationDto {
    user_id :string =''
    price :string =''
    paid :string =''
    station_destinations :string =''
    travel_date :any

 }
 const createReservationDto  = ref<CreateReservationDto> (new CreateReservationDto())
 const userReservations = ref<UserResrvaitionDto[]>([])
 async function  getUserReservations (userId :string) {

    try {
        const formData = serialize({
            lang:'en',
            user_id:userId
        });
        const res = await axios.post(RESERVATION_API+USER_API.READ_USER_RESERVATIONS ,formData)
        userReservations.value = res.data
    } catch (error) {
        
    }
 }
 async function createReservation (){
    try {
        const res = await POST (USER_API.CREATE_RESERVATION ,createReservationDto.value  , {
            formData:true , 
            error:true, 
            success:  'Reservation created successfully  !'
        })
    } catch (error) {
        
    }
 }
return  {
    createReservationDto,
    createReservation,
    getUserReservations,
    userReservations
}


})