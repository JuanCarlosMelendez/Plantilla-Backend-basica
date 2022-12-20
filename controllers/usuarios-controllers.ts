import { Request, Response } from "express";
import Usuario from "../models/usuario";
import  bcryptjs  from "bcryptjs"


export const getUsuarios = ( req: Request , res: Response) => {
   
    // const query = req.query; (sin desestructurar el query)
    const { q, nombre = "no-name", apikey, page = 1, limit =  10 } = req.query;
    //(q, nombre = "no-name", apikey, page =1, limit =  10) son solo parametros que puedo o no definir pero que normalmente son usados y utiles pero no son requeridos para el uso basico del query
    //este query params es informacion que se manda a traves de la api(ruta de la web: localhost:3001/api/usuarios/etc)
    //por medio del query params podemos mandar info por alli y para hacerlo usamos el query.params
    //una vez configurado puedes probarlo introducciondo info que desees el tipo: ?q=hola&nombre=juan&apikey=123456    //localhost:3001/api/usuarios?q=hola&nombre=juan&apikey=123456

    res.json({
        msg: 'getUsuarios',
        q,
        nombre,
        apikey
    })
}

export const getUsuario = ( req: Request , res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'getUsuario',
        id
    })
}

export const postUsuario = async ( req: Request , res: Response) => {

    const { name, correo, password, rol } = req.body;
    const usuario = new Usuario( {name, correo, password, rol} );

    // Verificar si el correo existe

    // Encriptar la contraseña

    const salt = bcryptjs.genSaltSync();
                /* NOTA: El salt es las vueltas que se dan para encriptar algo, 
                normalmente esta en 10 sino se especifica nada, pero 
                si se le pone otro numero sera mas robusta pero tardara más
                en compilar. */
    usuario.password = bcryptjs.hashSync ( password, salt );

    // Guardar en BD:
    await usuario.save();

    res.json({
        usuario
    })
}

export const putUsuario = ( req: Request , res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'putUsuario',
        id,
        body
    })
}

export const deleteUsuario = ( req: Request , res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'deleteUsuario',
        id
    })
}