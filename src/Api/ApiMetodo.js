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

export const filtrocc =(cedula)=>{

   return instance.get(`/electores/buscarcc?cedula=${cedula}`);

};

// metodo para filtra general 

export const filtro =(grupo)=>{

   return instance.get(`/electores/filtro?grupo=${grupo}`);

};

export const filtrolugar =(grupo,lugar)=>{

   return instance.get(`/electores/filtro?grupo=${grupo}&lugar=${lugar}`);

};

export const filtromesa =(grupo,lugar,mesa)=>{

   return instance.get(`/electores/filtro?grupo=${grupo}&lugar=${lugar}&mesa=${mesa}`);

};