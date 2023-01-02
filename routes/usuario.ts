import { Router } from "express";
import { check } from "express-validator";
import { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuarios-controllers';
import {esRoleValido, emailExiste, existeUsuarioPorId } from "../helpers/db-validators";
import { validarCampos } from "../middlewares/validar-campos";


const router = Router();

router.get ('/',      getUsuarios );

router.get ('/:id',   getUsuario );

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El debe contener al menos 6 letras').isLength({min: 6}),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( emailExiste ),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom( rol => esRoleValido(rol) ),
    validarCampos

], postUsuario );

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId),
    check('rol').custom( rol => esRoleValido(rol) ),
    validarCampos,
],   putUsuario );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId),
    validarCampos
], deleteUsuario );



export default router;