"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
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
const postUsuario = (req, res) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'postUsuario',
        nombre,
        edad
    });
};
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