import instance from "../config";

// metodo para votantes 

export const getElectores =()=>{

   return instance.get('/electores');

};
// metodo para resultado de votos

export const crearElectores =(cedula,nombres,apellidos,lugar,mesa,direccion,telefono, grupo)=>{

   return instance.post('/electores', {cedula,nombres,apellidos,lugar,mesa,direccion,telefono, grupo});

};

// metodo para buscar por la cedula 

export const filtrocc = async(cedula)=>{
  try {
    const {data} = await instance.get(`/electores/buscarcc?cedula=${cedula}`);
    return  data;
  } catch (error) {
    return error 
  }

};
// metodo para editar

export const editarElector = async(id,cedula,nombres,apellidos,lugar,mesa,direccion,telefono)=>{
  
  try {
    
    const {data} = await instance.put(`/electores/editar?id=${id}`,{cedula,nombres,apellidos,lugar,mesa,direccion,telefono});
    return data;
  } catch (error) {
    return error
  }


}
// metodo para editar por el grupo

export const editarGrupo = async(id, grupo)=>{
  console.log(id, grupo)
  
  try {
    const {data} = await instance.put(`/electores/grupo?id=${id}`,{grupo});
    return data;
  } catch (error) {
    return error
  }


}
// metodo para eliminar

export const eliminarElector = async(cedula)=>{
  try {
    const {data} = await instance.delete(`/electores/eliminar?cedula=${cedula}`);
    return  data;
  } catch (error) {
    return error 
  }

};

// metodo para filtra general 

export const filtro =async (params)=>{
try {
   console.log(params)
    const {data} = await instance.get('/electores/filtro',{params});
    return data;
} catch (error) {
    return error;
}
  

};

