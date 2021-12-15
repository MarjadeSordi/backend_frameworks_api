import { Request, Response } from 'express';
import {getRepository } from 'typeorm';
import MovimentoMercadoria from '../models/MovimentoMercadoria';

class MovimentoMercadoriaController {
  async listar(req: Request, res: Response) {
    const repository = getRepository(MovimentoMercadoria)
    const movimentoo_mercadoria = await repository.find();
    res.json(movimentoo_mercadoria)
  }
  
  async inserir (req: Request, res: Response)  { 
    const movimentoRepository = getRepository(MovimentoMercadoria)
    const mercadoria = req.body as MovimentoMercadoria;
    await movimentoRepository.save(mercadoria);
    res.status(201).json(mercadoria);

  
}

async buscarPorName (req: Request, res: Response)  { 
  const movimentoRepository = getRepository(MovimentoMercadoria)    
  const mercadoriaReq = req.query;
  const mercadoria = await movimentoRepository.findOne(mercadoriaReq);
  if(mercadoria) { 
      res.json(mercadoria);
  }
  else {
      res.status(404).json({
          error: "Mercadoria não encontrada"
      });
  }
}

async buscarPorId (req: Request, res: Response)  { 
  const movimentoRepository = getRepository(MovimentoMercadoria)        
  const id = req.params.id;
  const mercadoria = await movimentoRepository.findOne(id);
  if(mercadoria) { 
      res.json(mercadoria);
  }
  else {
      res.status(404).json({
          error: "Pedido nao encontrado"
      });
  }
}

async atualizar (req: Request, res: Response)  { 
  const movimentoRepository = getRepository(MovimentoMercadoria)    
  const mercadoriaReq = req.query;
  const dadosCarrinho = req.body;

  const mercadoria = await movimentoRepository.findOne(mercadoriaReq);
  if(mercadoria) { 
      mercadoria.quantidade = dadosCarrinho.quantidade;
      mercadoria.total = dadosCarrinho.total;
      await movimentoRepository.save(mercadoria);
      res.json(mercadoria);
  }
  else {
      res.status(404).json({
          error: "Produto nao encontrado"
      });
  }
}

async deletar (req: Request, res: Response)  { 
  const movimentoRepository = getRepository(MovimentoMercadoria)    
  const mercadoriaReq = req.query;

  const mercadoria = await movimentoRepository.findOne(mercadoriaReq);
  if(mercadoria) { 
      //await produtoRepository.delete(id);
      await movimentoRepository.remove(mercadoria);
      res.json('Produto deletado com sucesso');
  }
  else {
      res.status(404).json({
          error: "Produto nao encontrado"
      });
  }
}
}

export default new MovimentoMercadoriaController();