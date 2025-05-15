import { MongoClient } from 'mongodb';

const client = new MongoClient('');

let documents;

try {
    await client.connect();

    const db = client.db('web-sockets');

    documents = db.collection('documents');

    console.log('Conexão realizada com sucesso!');

} catch(err) {
    console.error(err);
}

export { documents };