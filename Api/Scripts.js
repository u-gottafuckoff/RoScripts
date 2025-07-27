// /api/scripts.js
import axios from 'axios';

export default async function handler(req, res) {
  const page = req.query.page || 1;
  try {
    const response = await axios.get(`https://scriptblox.com/api/script/fetch?page=${page}&max=20`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar scripts.' });
  }
}
