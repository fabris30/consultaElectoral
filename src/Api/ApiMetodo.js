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

