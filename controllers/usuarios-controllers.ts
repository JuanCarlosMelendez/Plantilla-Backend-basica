import { Request, Response } from "express";


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

export const postUsuario = ( req: Request , res: Response) => {

    const { nombre, edad} = req.body;

    res.json({
        msg: 'postUsuario',
        nombre, 
        edad
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