// Create docker container:
// docker run --name mongodb -v mongodata:/data/db -d -p 27017:27017 mongo
// docker exec -ti mongodb mongo
//
// docker ps -a --> gibt dir die id
// docker rm <id>

const { MongoClient } = require('mongodb');

async function main() {
  const url = 'mongodb://localhost:27017/';

  const client = new MongoClient(url);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log('Databases:');
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

main().catch(console.error);
