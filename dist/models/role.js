"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RoleSchema = new mongoose_1.Schema({
    rol: {
        required: [true, 'El rol es obligatorio '],
        type: String
    }
});
const Rolemodel = (0, mongoose_1.model)('Role', RoleSchema);
exports.default = Rolemodel;
//# sourceMappingURL=role.js.map