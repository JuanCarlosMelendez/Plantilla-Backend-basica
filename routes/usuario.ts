import { Router } from "express";
import { check } from "express-validator";
import { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuarios-controllers';
import { validarCampos } from "../middlewares/validar-campos";

const router = Router();

router.get ('/',      getUsuarios );

router.get ('/:id',   getUsuario );

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El debe contener al menos 6 letras').isLength({min: 6}),
    check('correo', 'El correo no es válido').isEmail(),
    check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    validarCampos

], postUsuario );

router.put('/:id',    putUsuario );

router.delete('/:id', deleteUsuario );



export default router;