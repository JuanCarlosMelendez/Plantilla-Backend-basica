import Role from "../models/role"
import Usuario from "../models/usuario"

export const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if ( !existeRol ) {
        throw new Error(`El rol ${ rol } no está registrado en la BD`)
    }
};



export const emailExiste = async ( correo= '' ) => {
    const existeEmail = await Usuario.findOne( { correo } );
    if ( existeEmail ) {
        throw new Error(`El correo:  ${ correo }, ya está registrado`)
    };
}

export const existeUsuarioPorId = async ( id:string ) => {
    const existeUsuario = await Usuario.findById( id );
    if ( !existeUsuario ) {
        throw new Error(`El ID:  ${ id }, no existe`);
    };
}



