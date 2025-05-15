import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb+srv://adm:123@socket.t3mzyqg.mongodb.net/?retryWrites=true&w=majority&appName=Socket');

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