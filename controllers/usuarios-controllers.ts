import { Request, Response } from "express";
import Usuario from "../models/usuario";
import  bcryptjs  from "bcryptjs"



export const getUsuarios = async ( req: Request , res: Response) => {
   
    // const query = req.query; (sin desestructurar el query)
    const { q, nombre = "no-name", apikey, page = 1, limit =  10 } = req.query;
    //(q, nombre = "no-name", apikey, page =1, limit =  10) son solo parametros que puedo o no definir pero que normalmente son usados y utiles pero no son requeridos para el uso basico del query
    //este query params es informacion que se manda a traves de la api(ruta de la web: localhost:3001/api/usuarios/etc)
    //por medio del query params podemos mandar info por alli y para hacerlo usamos el query.params
    //una vez configurado puedes probarlo introducciondo info que desees el tipo: ?q=hola&nombre=juan&apikey=123456    //localhost:3001/api/usuarios?q=hola&nombre=juan&apikey=123456

    const { limite =  5, desde = 0 } = req.query;

    const [ total, usuarios ] = await Promise.all( [
        Usuario.countDocuments({ estado: true }),
        Usuario.find({ estado: true })
        .skip(Number( desde ))
        .limit(Number( limite ))
    ]);

    res.json({
        total, 
        usuarios
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

    // const existeEmail = await Usuario.findOne( { correo } );
    // if ( existeEmail ) {
    //     return res.status(400).json({
    //         msg: 'Ese correo ya está registrado'
    //     });
    // }

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

export const putUsuario = async ( req: Request , res: Response) => {

    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

// validar todo contra base de datos 
    if ( password ) {
        //encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync ( password, salt );
    }

    const usuario =  await Usuario.findByIdAndUpdate( id, resto );

    res.json(usuario);
}

export const deleteUsuario = async ( req: Request , res: Response) => {

    const { id } = req.params;

    //Fisicamente lo borrramos
    // const usuario = await Usuario.findByIdAndDelete( id );

    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false });



    res.json({
        msg: 'deleteUsuario',
        id
    })
}