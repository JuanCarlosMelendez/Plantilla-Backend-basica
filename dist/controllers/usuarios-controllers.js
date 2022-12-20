"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const getUsuarios = (req, res) => {
    // const query = req.query; (sin desestructurar el query)
    const { q, nombre = "no-name", apikey, page = 1, limit = 10 } = req.query;
    //(q, nombre = "no-name", apikey, page =1, limit =  10) son solo parametros que puedo o no definir pero que normalmente son usados y utiles pero no son requeridos para el uso basico del query
    //este query params es informacion que se manda a traves de la api(ruta de la web: localhost:3001/api/usuarios/etc)
    //por medio del query params podemos mandar info por alli y para hacerlo usamos el query.params
    //una vez configurado puedes probarlo introducciondo info que desees el tipo: ?q=hola&nombre=juan&apikey=123456    //localhost:3001/api/usuarios?q=hola&nombre=juan&apikey=123456
    res.json({
        msg: 'getUsuarios',
        q,
        nombre,
        apikey
    });
};
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUsuario',
        id
    });
};
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, correo, password, rol } = req.body;
    const usuario = new usuario_1.default({ name, correo, password, rol });
    // Verificar si el correo existe
    const existeEmail = yield usuario_1.default.findOne({ correo });
    if (existeEmail) {
        return res.status(400).json({
            msg: 'Ese correo ya está registrado'
        });
    }
    // Encriptar la contraseña
    const salt = bcryptjs_1.default.genSaltSync();
    /* NOTA: El salt es las vueltas que se dan para encriptar algo,
    normalmente esta en 10 sino se especifica nada, pero
    si se le pone otro numero sera mas robusta pero tardara más
    en compilar. */
    usuario.password = bcryptjs_1.default.hashSync(password, salt);
    // Guardar en BD:
    yield usuario.save();
    res.json({
        usuario
    });
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUsuario',
        id,
        body
    });
};
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUsuario',
        id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios-controllers.js.map