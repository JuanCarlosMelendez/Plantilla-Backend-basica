"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UsuarioSchema = new mongoose_1.Schema({
    name: {
        required: [true, 'Es el nombre obligatorio'],
        type: String,
    },
    correo: {
        required: [true, 'Es el correo obligatorio'],
        unique: true,
        type: String
    },
    password: {
        required: [true, 'La contraseña es obligatoria'],
        type: String
    },
    imagen: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
});
const Usermodel = (0, mongoose_1.model)('Usuario', UsuarioSchema);
exports.default = Usermodel;
//# sourceMappingURL=usuario.js.map