import clientPromise from '../../../lib/mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('sample_restaurants');

    const restaurants = await db
      .collection('restaurants')
      .find({})
      .limit(10)
      .toArray();

    res.json(restaurants);
  } catch (e) {
    console.log(e);
  }
};
