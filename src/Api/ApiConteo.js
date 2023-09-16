import instance from "../config";
// metodo para candidatos

export const getConteo =()=>{

    return instance.get('/conteo');
 
 };
 // metodo para registro de votos 
 
 export const crearConteo =(candidato,lugar,mesa,votos)=>{
 
    return instance.post('/conteo', {candidato,lugar,mesa,votos});
 
 };

 // metodo para editar

export const editarconteo = async(id,candidato,lugar,mesa,votos)=>{
  
    try {
      
      const {data} = await instance.put(`/conteo?id=${id}`,{candidato,lugar,mesa,votos});
      return data;
    } catch (error) {
      return error
    }
  
  
  }