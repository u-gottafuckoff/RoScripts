// /api/details/[id].js
import axios from 'axios';

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const response = await axios.get(`https://scriptblox.com/api/script/get/${id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar detalhes do script.' });
  }
}
