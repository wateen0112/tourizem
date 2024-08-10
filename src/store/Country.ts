import appConfig from  '../../app.config';
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { serialize } from "object-to-formdata";
import { UseApi } from '../composables/UseApi';
const {POST} = UseApi()
export const UseCountryStore =  defineStore('Cuontry',()=>{
    const options = {
        indices: false, // Include array indices in FormData keys
        nullsAsUndefineds: false, // Treat null values like undefined values
        booleansAsIntegers: false, // Convert true/false to 1/0
        allowEmptyArrays: false, // Store arrays even if they're empty
        noAttributesWithArrayNotation: false, // Don't include array notation in FormData keys for any attributes except files
        noFilesWithArrayNotation: false, // Don't include array notation in FormData keys for files
        dotsForObjectNotation: false // Use dots instead of brackets for object notation in FormData keys
      };
       class StationDto{
        id :string =''
        address_langtude :string =''
        address_longtude :string =''
        city_name :string =''
        image :string =''
        name :string =''
        station_type :string =''
      
      }
const countries = ref([])
const country = ref()
const stationsByCountry = ref<StationDto[]>([])
enum COUTNRY_API {
read_countries = 'countries/read_countries.php',
find_county_destinations ='travel_stations/read_country_stations.php',

}

const baseUrl = appConfig.API_URL+'/countries/'
async function readCountries(){
try {
    
    const req = new FormData()
    req.append('lang','ar')
    const res = await POST(COUTNRY_API.read_countries,{},{formData:true ,error:true}
    
    ) 
    countries.value = res.data
} catch (error) {
    throw(error)
}
}
async function getCountryById(id:any){
    await readCountries();
    country.value =countries.value.filter((c)=>{
        return c.id==id
    }) [0]
}
async function findCountryDestinaitons(country_id:string) {
    try {
        const res =  await POST(COUTNRY_API.find_county_destinations ,{country_id:country_id},{
            formData:true , 
            error:true
        })
        stationsByCountry.value  = res.data
    } catch (error) {
        throw(error)
    }
}

return {
    countries , 
readCountries ,
getCountryById,
findCountryDestinaitons,
country
,stationsByCountry


}
})