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
const MovimentoMercadoria_1 = __importDefault(require("../models/MovimentoMercadoria"));
class MovimentoMercadoriaController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = (0, typeorm_1.getRepository)(MovimentoMercadoria_1.default);
            const movimentoo_mercadoria = yield repository.find();
            res.json(movimentoo_mercadoria);
        });
    }
    inserir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movimentoRepository = (0, typeorm_1.getRepository)(MovimentoMercadoria_1.default);
            const mercadoria = req.body;
            yield movimentoRepository.save(mercadoria);
            res.status(201).json(mercadoria);
        });
    }
    buscarPorName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movimentoRepository = (0, typeorm_1.getRepository)(MovimentoMercadoria_1.default);
            const mercadoriaReq = req.query;
            const mercadoria = yield movimentoRepository.findOne(mercadoriaReq);
            if (mercadoria) {
                res.json(mercadoria);
            }
            else {
                res.status(404).json({
                    error: "Mercadoria não encontrada"
                });
            }
        });
    }
    buscarPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movimentoRepository = (0, typeorm_1.getRepository)(MovimentoMercadoria_1.default);
            const id = req.params.id;
            const mercadoria = yield movimentoRepository.findOne(id);
            if (mercadoria) {
                res.json(mercadoria);
            }
            else {
                res.status(404).json({
                    error: "Pedido nao encontrado"
                });
            }
        });
    }
    atualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movimentoRepository = (0, typeorm_1.getRepository)(MovimentoMercadoria_1.default);
            const mercadoriaReq = req.query;
            const dadosCarrinho = req.body;
            const mercadoria = yield movimentoRepository.findOne(mercadoriaReq);
            if (mercadoria) {
                mercadoria.quantidade = dadosCarrinho.quantidade;
                mercadoria.total = dadosCarrinho.total;
                yield movimentoRepository.save(mercadoria);
                res.json(mercadoria);
            }
            else {
                res.status(404).json({
                    error: "Produto nao encontrado"
                });
            }
        });
    }
    deletar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movimentoRepository = (0, typeorm_1.getRepository)(MovimentoMercadoria_1.default);
            const mercadoriaReq = req.query;
            const mercadoria = yield movimentoRepository.findOne(mercadoriaReq);
            if (mercadoria) {
                //await produtoRepository.delete(id);
                yield movimentoRepository.remove(mercadoria);
                res.json('Produto deletado com sucesso');
            }
            else {
                res.status(404).json({
                    error: "Produto nao encontrado"
                });
            }
        });
    }
}
exports.default = new MovimentoMercadoriaController();
