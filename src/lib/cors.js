// lib/cors.js
import Cors from 'cors';

// Inicializa o middleware CORS
const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  origin: '*', // Permite todas as origens, ajuste conforme necessário
});

// Função para executar o middleware CORS
export function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default cors;
