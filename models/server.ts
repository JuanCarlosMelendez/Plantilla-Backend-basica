import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "../routes/usuario";
import { Express } from 'express';
import dbConnect from "../database/config";



class Server {
    private app: Application;
    private port: string;
    private rutasApi =  {
        //este es el tipo de ruta que quiero que se solicite en la web ejem: localhost:3001/api/usuarios/123srtjryukrajsy
        usuarios: '/api/usuarios'
    }


    constructor() {
        this.port =  process.env.PORT || '3001';
        this.app = express();

        // Conectar a base de datos ya que tmb se debe llamar desde el constructor
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB() {
        await dbConnect()//esta viene de mi server.ts
    }

    middlewares() {

        // Configurando cors
        this.app.use ( cors());

        // Lectura y parseo del body
        this.app.use ( express.json() );
        //con esta funcion de express.json() cualquier informacion que le llegue
        //de una peticion la serializara a un formato json

        // Directorio publico
        this.app.use( express.static('dist/public'));
    }

    routes() {
        this.app.use( this.rutasApi.usuarios, router )
    }

    listen () {
        this.app.listen( this.port, () => {
            console.log( `Servidor corriendo en puerto ${this.port}`)
        })
    }


}

export default Server;