import { Request, Response } from 'express';
import {getRepository } from 'typeorm';
import Mercadoria from '../models/Mercadoria';


class MercadoriaController {   
  async listar(req: Request, res: Response) {
    const repository = getRepository(Mercadoria)
    const mercadoria = await repository.find();
    res.json(mercadoria)
  }

  async inserir (req: Request, res: Response)  { 
    const mercadoriaRepository = getRepository(Mercadoria)
    const mercadoria = req.body as Mercadoria;
    await mercadoriaRepository.save(mercadoria);
    res.status(201).json(mercadoria);
}

async buscarPorName (req: Request, res: Response)  { 
  const mercadoriaRepository = getRepository(Mercadoria)     
  const name = req.body;
  const mercadoria = await mercadoriaRepository.findOne(name);
  if(name) { 
      res.json(mercadoria);
  }
  else {
      res.status(404).json({
          error: "Produto nao encontrado"
      });
  }
}

}

export default new MercadoriaController(); 