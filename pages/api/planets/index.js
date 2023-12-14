import clientPromise from '../../../lib/mongodb'; // contains how to connect to mongodb Atlas cluster

export default async (req, res) => {
  try {
    const client = await clientPromise; // MongoDb instance
    const db = client.db('sample_guides');

    const planets = await db
      .collection('planets') // from collection planets
      .find({}) // find all
      .sort({ orderFromSun: 1 }) // sort by order from sun
      .toArray(); // return as array

    res.json(planets);
  } catch (e) {
    console.error(e);
  }
};
