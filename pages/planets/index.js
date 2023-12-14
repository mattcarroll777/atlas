import clientPromise from '../../lib/mongodb';

export default function Planets({ planets }) {
  return (
    <div>
      <h1> Planets of Our Solar System</h1>
      <p>In order of distance from the sun</p>
      <ul>
        <ul>
          {planets.map((planets, idx) => (
            <li key={idx}>
              <h2> {planets.name}</h2>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db('sample_guides');

    const planets = await db
      .collection('planets')
      .find({})
      .sort({ orderFromSun: 1 })
      .toArray();

    return {
      props: { planets: JSON.parse(JSON.stringify(planets)) },
    };
  } catch (e) {
    console.log(e);
  }
}
