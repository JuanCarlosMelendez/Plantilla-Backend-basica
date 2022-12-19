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
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const config_1 = __importDefault(require("../database/config"));
class Server {
    constructor() {
        this.rutasApi = {
            //este es el tipo de ruta que quiero que se solicite en la web ejem: localhost:3001/api/usuarios/123srtjryukrajsy
            usuarios: '/api/usuarios'
        };
        this.port = process.env.PORT || '3001';
        this.app = (0, express_1.default)();
        // Conectar a base de datos ya que tmb se debe llamar desde el constructor
        this.conectarDB();
        // Middlewares
        this.middlewares();
        // Rutas de mi aplicacion
        this.routes();
    }
    conectarDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.default)(); //esta viene de mi server.ts
        });
    }
    middlewares() {
        // Configurando cors
        this.app.use((0, cors_1.default)());
        // Lectura y parseo del body
        this.app.use(express_1.default.json());
        //con esta funcion de express.json() cualquier informacion que le llegue
        //de una peticion la serializara a un formato json
        // Directorio publico
        this.app.use(express_1.default.static('dist/public'));
    }
    routes() {
        this.app.use(this.rutasApi.usuarios, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map