//importa as bibliotecas e módulos necessários
import { Router } from 'express';
import { listEndereco } from './app/useCases/endereco/listEndereco';
import { createEndereco } from './app/useCases/endereco/createEndereco';
import { listCidade } from './app/useCases/cidade/listCidade';
import { createCidade } from './app/useCases/cidade/createCidade';
import { listBairro } from './app/useCases/bairro/listBairro';
import { createBairro } from './app/useCases/bairro/createBairro';
export const router = Router();

//List endereços
router.get('/endereco', listEndereco);

//Create endereço
router.post('/endereco', createEndereco);

//List bairro
router.get('/bairro', listBairro);

//Create bairro
router.post('/bairro', createBairro);

//List cidade
router.get('/cidade', listCidade);

//Create cidade
router.post('/cidade', createCidade);