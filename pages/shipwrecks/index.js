import clientPromise from '../../lib/mongodb';

export default function Shipwrecks({ shipwrecks }) {
  return (
    <div>
      <h1>Shipwrecks</h1>
      <p> Coordinates of visable shipwrecks</p>
      <ul>
        {shipwrecks.map((wreck, idx) => (
          <li key={idx}>
            <h2>
              {wreck.coordinates[0]} , {wreck.coordinates[1]}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db('sample_geospatial');

    const shipwrecks = await db
      .collection('shipwrecks')
      .find({ feature_type: 'Wrecks - Visible' }, { coordinates: 1, _id: 1 })
      .limit(10)
      .toArray();

    return {
      props: { shipwrecks: JSON.parse(JSON.stringify(shipwrecks)) },
    };
  } catch (e) {
    console.log(e);
  }
}
