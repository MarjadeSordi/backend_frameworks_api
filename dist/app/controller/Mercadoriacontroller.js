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
const typeorm_1 = require("typeorm");
const Mercadoria_1 = __importDefault(require("../models/Mercadoria"));
class MercadoriaController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = (0, typeorm_1.getRepository)(Mercadoria_1.default);
            const mercadoria = yield repository.find();
            res.json(mercadoria);
        });
    }
    inserir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mercadoriaRepository = (0, typeorm_1.getRepository)(Mercadoria_1.default);
            const mercadoria = req.body;
            yield mercadoriaRepository.save(mercadoria);
            res.status(201).json(mercadoria);
        });
    }
    buscarPorName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mercadoriaRepository = (0, typeorm_1.getRepository)(Mercadoria_1.default);
            const name = req.body;
            const mercadoria = yield mercadoriaRepository.findOne(name);
            if (name) {
                res.json(mercadoria);
            }
            else {
                res.status(404).json({
                    error: "Produto nao encontrado"
                });
            }
        });
    }
}
exports.default = new MercadoriaController();
