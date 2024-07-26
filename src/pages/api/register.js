// pages/api/register.js
import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, cpf, data_nascimento, endereco, cep, bairro, email } = req.body;
    const registrationDate = new Date().toISOString();

    try {
      await pool.query(
        'INSERT INTO users (nome, cpf, data_nascimento, endereco, cep, bairro, email, dt_cadastro) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [nome, cpf, data_nascimento, endereco, cep, bairro, email, registrationDate]
      );
      res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
