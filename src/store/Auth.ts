import appConfig from "../../app.config";
import axios from "axios";
import { defineStore } from "pinia";
import { serialize } from 'object-to-formdata';
import {onMounted, ref} from 'vue'
import {Icon} from '@iconify/vue'
import { UseApi } from "../composables/UseApi";
const {POST} = UseApi()
export class LoginDto  {
    email : string ='';
    password: string = '';

}
export class RegisterDto {
    first_name:string= '';
    last_name:string= '';
    email:string= '';
    password:string= '';
    lang:string= 'ar';

}
export class UserDto  {
    address_id:string = '';
    birthday:string ='';
    email :string='';
    first_name:string ='';
    gender:string='';
    id:string='';
    image:string  ='';
    last_name:string = '';
    phone:string='';
    reg_date:string = '';
}
export const UseAuthStore  = defineStore('Auth',()=>{
    const options = {
        indices: false, // Include array indices in FormData keys
        nullsAsUndefineds: false, // Treat null values like undefined values
        booleansAsIntegers: false, // Convert true/false to 1/0
        allowEmptyArrays: false, // Store arrays even if they're empty
        noAttributesWithArrayNotation: false, // Don't include array notation in FormData keys for any attributes except files
        noFilesWithArrayNotation: false, // Don't include array notation in FormData keys for files
        dotsForObjectNotation: false // Use dots instead of brackets for object notation in FormData keys
      };
const AUTH_API = 'users/'
const LOGIN_API = AUTH_API+'user_login.php'
const REGISTER_API = AUTH_API+'user_register.php'
const loginDto = ref<LoginDto>(new LoginDto());
const isLoggedIn = ref(false)
const userDto  = ref<UserDto>(new UserDto())
const registerDto = ref<RegisterDto>(new RegisterDto());
async function  login(){
    try {


      const res = await POST(LOGIN_API , loginDto.value  , {formData:true  , sucess:true , error:true})
        userDto.value = res.data.user
        localStorage.setItem('user-data',JSON.stringify(userDto.value))
        isLoggedIn.value=true
    } catch (error) {
        throw(error )
    }
}
async function  regsiter(){
    try {
        const formData = serialize(registerDto.value, options);
        const res = await axios.post(REGISTER_API , formData,
           {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
           }
        );
    } catch (error) {
        throw(error )
    }
}
onMounted(()=>{
    const userData = JSON.parse(localStorage.getItem('user-data'))
  
  if(userData==null){
    isLoggedIn .value  = false
  }
    else {
       
        userDto.value = userData.user
        isLoggedIn .value  = true
    }
})
const logout  = ()=>{
    localStorage.clear();
    isLoggedIn.value = false
}
    return {
loginDto , 
registerDto,
userDto,
isLoggedIn,
login,
logout,
regsiter
    }
})