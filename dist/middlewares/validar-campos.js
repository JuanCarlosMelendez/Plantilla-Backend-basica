"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCampos = void 0;
const express_validator_1 = require("express-validator");
const validarCampos = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next(); //el next es del tipo NextFunction y es una interface de express
    //osea que la importamos, y su  funcion es hacer que luego de ejecutarse
    //nuestro middleware personalizado llame al siguiente en cola, y luego al siguiente
    //hasta que se terminen los middlewares pautados y salte a el resto del programa.
};
exports.validarCampos = validarCampos;
//# sourceMappingURL=validar-campos.js.map