import { ref } from "vue";
import { UseApi } from "../composables/UseApi";
import { defineStore } from "pinia";
const {POST}  = UseApi()
export class HobbyDto {
    id:string = '';
    name :string='';
    group_id:string = '';
    group_name:string  =''
}
export const UseActivitiesStore   =defineStore('Activity',()=>{
    const hobbiesByCountry = ref<HobbyDto[]> ([])
enum Activity_API {
    READ_COUNTRY_HOBBIES = 'destinations_hobbies/read_country_hobbies.php'
}
async function readCountryHobbies  (country_id:string){
try {
    const res   = await POST (Activity_API.READ_COUNTRY_HOBBIES, {country_id:country_id}, {
        formData:true , 
        error:true
    })
    hobbiesByCountry.value = res.data

} catch (error) {
    throw(error)
}
}
    return {
        readCountryHobbies,
        hobbiesByCountry
    }
})