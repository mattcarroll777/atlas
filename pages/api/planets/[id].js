import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('sample_guides');
    const { id } = req.query;
    const planet = await db
      .collection('planets')
      .findOne({ _id: new ObjectId(id) });

    res.json(planet);
  } catch (e) {
    console.log(e);
  }
};
