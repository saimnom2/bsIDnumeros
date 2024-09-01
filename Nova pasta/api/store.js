// api/store.js

import { db } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, numero } = req.body;

    try {
      await setDoc(doc(db, 'IDsNumeros', id), { numero });
      res.status(200).json({ message: 'ID e número armazenados com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao armazenar dados' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
