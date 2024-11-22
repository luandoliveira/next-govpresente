// pages/api/users.js
//import pool from '../../lib/db';

//export default async function handler(req, res) {
//  if (req.method === 'GET') {
//    try {
//      const result = await pool.query('SELECT * FROM users');
//     res.status(200).json(result.rows);
//    } catch (err) {
//      console.error(err);
//      res.status(500).json({ error: 'Erro ao buscar usuários' });
//    }
//  } else {
//    res.setHeader('Allow', ['GET']);
//    res.status(405).end(`Método ${req.method} não permitido`);
// }
//}
