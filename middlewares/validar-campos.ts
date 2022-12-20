import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";


const validarCampos = ( req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult( req );
    if ( !errors.isEmpty() ){
        return res.status(400).json(errors);
    }

    next(); //el next es del tipo NextFunction y es una interface de express
    //osea que la importamos, y su  funcion es hacer que luego de ejecutarse
    //nuestro middleware personalizado llame al siguiente en cola, y luego al siguiente
    //hasta que se terminen los middlewares pautados y salte a el resto del programa.
    
}

export { validarCampos };