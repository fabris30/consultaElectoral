import instance from "../config";


export const getLogin = (username,password)=>{

     return   instance.post('/auth/login', {username, password,})
    };


   /* export const refreshToken =() => {
      
     instance.get('/auth/refresh')
     .then((response) =>{
        console.log(response.data);
      })
      .catch((response)=>console.log(response));
   };
*/
   
