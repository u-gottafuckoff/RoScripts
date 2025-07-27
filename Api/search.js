// /api/search.js
import axios from 'axios';

export default async function handler(req, res) {
  const q = req.query.q || '';
  try {
    const response = await axios.get(`https://scriptblox.com/api/script/search?q=${encodeURIComponent(q)}&max=20`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro na busca.' });
  }
}
