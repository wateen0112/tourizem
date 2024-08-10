import { serialize } from 'object-to-formdata';
import appConfig from  '../../app.config';
import axios from "axios"
import { useToast } from 'vue-toast-notification';

export const UseApi = ()=>{
    const toast  =useToast()
const POST  = async(url:string , params:any , options:any = {

})=>{

if (options.formData==true ){
    try {
        const formData =serialize({
            lang:'en',
            ...params
    
        });
     
        const res =  await axios.post  (appConfig.API_URL+'/'+url,formData,{
            headers: {
              'Content-Type': 'multipart/form-data',
               'Accept':'*/*'
               ,
              
            }
          })
         

if(options.success&&options.success!==false ){
    toast.success (options.success,{
        position:'top-right'
      })
  }

  
 return res

} catch (error) {
if(options.error ){

  if(error.response.data.result){
    toast.error (error.response.data.result,{
        position:'top-right'
      })
  }
  else {
    toast.error (error,{
        position:'top-right'
      })
  }
 }
}
}
else {
try {
   
    const res =  await axios.post  (appConfig.API_URL+'/'+url,params,{
        headers: {
       'Accept':'*/*'
        }
      })


       if(options.success&&options.success!==false ){
         toast.success (options.success,{
            position:'top-right',
     
          })
       }
      return res

} catch (error) {
  if(error.response.data.result){
    toast.error (error.response.data.result,{
        position:'top-right'
      })
  }
  else {
    toast.error (error,{
        position:'top-right'
      })
  }
}
}
}
 return {
    POST
 }
}