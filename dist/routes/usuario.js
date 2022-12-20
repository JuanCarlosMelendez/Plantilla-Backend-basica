"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const usuarios_controllers_1 = require("../controllers/usuarios-controllers");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.get('/', usuarios_controllers_1.getUsuarios);
router.get('/:id', usuarios_controllers_1.getUsuario);
router.post('/', [
    (0, express_validator_1.check)('name', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'El debe contener al menos 6 letras').isLength({ min: 6 }),
    (0, express_validator_1.check)('correo', 'El correo no es válido').isEmail(),
    (0, express_validator_1.check)('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validar_campos_1.validarCampos
], usuarios_controllers_1.postUsuario);
router.put('/:id', usuarios_controllers_1.putUsuario);
router.delete('/:id', usuarios_controllers_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map