import { model, Schema } from "mongoose";
import { Role } from '../interfaces/role';


const RoleSchema = new Schema <Role> ({
    rol: {
        required: [true, 'El rol es obligatorio '],
        type: String
    }
});

const Rolemodel = model ( 'Role', RoleSchema );
export default Rolemodel;