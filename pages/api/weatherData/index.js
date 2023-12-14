import clientPromise from '../../../lib/mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('sample_weatherdata');

    const data = await db.collection('data').find({}).limit(10).toArray();

    res.json(data);
  } catch (e) {
    console.log(e);
  }
};
