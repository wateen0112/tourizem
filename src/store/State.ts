import axios from "axios";
import appConfig from "../../app.config";
import { defineStore } from "pinia";
import { serialize } from "object-to-formdata";
import { ref } from "vue";
import { UseApi } from "../composables/UseApi";
const {POST } = UseApi()
export const UseStateStore = defineStore('State',()=>{

enum STATE_API {
    READ_STATES  ='read_states.php',
    READ_CITY_FEEDBACK='feedbacks/read_city_feedbacks.php',
    CREATE_CITY_FEEDBACK='feedbacks/create_feedback.php',
    READ_CITIES='/cities/read_cities.php',
    READ_CITY_HOBBIES = 'destinations_hobbies/read_city_hobbies.php',
    READ_ALL_CITIES ='cities/read_all_cities.php',
    READ_STATE_BY_COUNTRY_ID='states/read_states.php',
    READ_CITY_SERVICES='servicies/read_city_servicies.php',
    READ_STATE_DESTINATION ='destinations/read_state_destinations.php'
}
class CityHobbyDto{
    id:string = ''
    group_id:string = ''
    group_name:string = ''
    name:string = ''

}
class  StateDto {
  id: number=0;
  name: string='';
  image: string='';
  detail: string='';
  country_id: number=0;
}
class CitiesResponseDto  {
    city : CityDto = new CityDto ()
}
class CityDto {
    id:string =''
    name:string =''
    image:string =''
    detail:string =''
    state_id:string =''
    rate:string ='';
    country :any   
}

class FeedBackDto {
    feedback:string = '';
    id:string = '';
    rate:string = '';
    user_birthday:string = '';
    user_email:string = '';
    user_first_name:string = '';
    user_gender:string = '';
    user_id:string = '';
    user_image:string = '';
    user_last_name:string = '';
    user_phone:string = '';
}
class ServiceDto {
    id :string='';
    name :string='';
    city_name :string='';
    image :string='';

}
const allCitiesResponse = ref<CitiesResponseDto[]>([])
const cities= ref<CityDto[]>([])
const allStates = ref<StateDto[]>([])
const cityHobbiesDto  = ref<CityHobbyDto[]>([])
const servicesByType = ref<ServiceDto[]>([])
const citiesFeedBack = ref<FeedBackDto[]>([])
async function getStates (){
    try {
       
        const res = await POST (STATE_API+STATE_API.READ_STATES,{}  ,{formData:true});
    } catch (error) {
        throw(error)
    }
}
async function readAllCities (){
    try {
        const res = await POST (STATE_API.READ_ALL_CITIES , {}, {formData:true , })
        allCitiesResponse.value  =res.data
    } catch (error) {
        
    }
}
async function getStatesByCountryId(country_id:string) {
    try {
        const res = await POST(STATE_API.READ_STATE_BY_COUNTRY_ID , {
            country_id :country_id
        } ,{error:true , formData:true })
        allStates.value  = res.data
    } catch (error) {
        
    }
}
async function readCityDestinaiton (state_id:any){
    try {
        const res = await POST(STATE_API.READ_STATE_DESTINATION , {state_id:state_id} ,{formData:true})
    } catch (error) {
        
    }
}
async function getCitiesByStateId(state_id  :number, ){
    try {
        const res = await POST(STATE_API.READ_CITIES  ,{state_id:state_id} , {formData:true ,error:true });
        cities .value = res.data
    } catch (error) {
        throw(error)
    }
}
async function  getServicesByCityIdAndType(city_id:number,service_id :number){
    try {
        const res = await POST(STATE_API.READ_CITY_SERVICES,{city_id:city_id,service_id:service_id},{formData:true,error:true })
        servicesByType.value  = res.data
    } catch (error) {
        
    }
    }
async function  getServicesByCityIdAndTypeWithreturn(city_id:number,service_id :number){
    try {
        const res = await POST(STATE_API.READ_CITY_SERVICES,{city_id:city_id,service_id:service_id},{formData:true,error:true })
        return res.data; 
    } catch (error) {
        
    }
    }
    async function readCityFeedBack (city_id:any){
        try {
            const res = await POST(STATE_API.READ_CITY_FEEDBACK,{
                city_id:city_id
            }
        ,{
            formData:true , error: true
        }
        )
        citiesFeedBack.value = res.data.reverse()
        } catch (error) {
            throw(error)
        }
    }
    async function readCityHobbies (city_id:any){
try {
    const res = await POST(STATE_API.READ_CITY_HOBBIES, {city_id:city_id},{
        formData:true , 
        error:true
    })
    cityHobbiesDto.value = res.data
} catch (error) {
    throw(error)
}
    }
    async function cerateCityFeedBack  (dto:any){
        try {
            const res = await POST (STATE_API.CREATE_CITY_FEEDBACK,dto  , {formData:true , error:true , success:'Feedback added successfully  !'})
        await readCityFeedBack(dto.city_id)
        } catch (error) {
            
        }
    } 
return {
    getStates,
readAllCities,
    readCityDestinaiton,
    getStatesByCountryId,
    readCityFeedBack,
    getCitiesByStateId,
    cerateCityFeedBack,
    readCityHobbies,
    getServicesByCityIdAndType,
    getServicesByCityIdAndTypeWithreturn,
    cityHobbiesDto,
    allStates,
    servicesByType,
    cities,
    allCitiesResponse,
    citiesFeedBack
}
})