// api/query.js

import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;

    try {
      const docRef = doc(db, 'IDsNumeros', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        res.status(200).json(docSnap.data());
      } else {
        res.status(404).json({ error: 'ID não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao consultar dados' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
