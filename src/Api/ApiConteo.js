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

  // metodo para eliminar

export const eliminarvotos = async(id)=>{
  try {
    const {data} = await instance.delete(`/conteo?id=${id}`);
    return  data;
  } catch (error) {
    return error 
  }

};

// metodo para filtra general 

export const filtrovotos =async (params)=>{
  try {
     console.log(params)
      const {data} = await instance.get('/conteo/filtro',{params});
      return data;
  } catch (error) {
      return error;
  }
    
  };