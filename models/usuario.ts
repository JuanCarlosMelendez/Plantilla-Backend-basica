import { Schema, model } from "mongoose";
import { User } from '../interfaces/user';

const UsuarioSchema =new Schema <User> (
    {
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
            enum: [ 'ADMIN_ROLE', 'USER_ROLE']
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

const Usermodel = model( 'Usuarios', UsuarioSchema);
export default Usermodel;