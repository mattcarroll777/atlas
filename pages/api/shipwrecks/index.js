import clientPromise from '../../../lib/mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('sample_geospatial');

    const shipwrecks = await db
      .collection('shipwrecks')
      .find({})
      .limit(10)
      .toArray();

    res.json(shipwrecks);
  } catch (e) {
    console.log(e);
  }
};
