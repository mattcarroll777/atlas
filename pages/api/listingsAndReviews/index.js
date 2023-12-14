import clientPromise from '../../../lib/mongodb'; // contains how to connect to mongodb Atlas cluster

export default async (req, res) => {
  try {
    const client = await clientPromise; // MongoDb instance
    const db = client.db('sample_airbnb');

    const listingsAndReviews = await db
      .collection('listingsAndReviews') // from collection listingsAndReviews
      .find({}) // find all
      .limit(10)
      .toArray();

    res.json(listingsAndReviews);
  } catch (e) {
    console.error(e);
  }
};
