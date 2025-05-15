import { getDocument, updateDocument, getDocuments, insertDocument, deleteDocument } from './documentsDb.js';
import io from './server.js';

io.on('connection', (socket) => {

    socket.on('get_documents', async (callback) => {
       const documents = await getDocuments();

        callback(documents);

    });

    socket.on('insert_document', async (name) => {

        const documentExists = (await getDocument(name)) !== null;

        if(documentExists) {
            socket.emit('document_exists', name);
        } else {

            const resultado = await insertDocument(name);

            if(resultado.acknowledged) {
                io.emit('insert_document_view', name);
            }
        }
    });

    socket.on('text', async (obj) => {

        const { text, doc } = obj;

        const document = await updateDocument(doc, text);

        if(document.modifiedCount) {
            socket.to(doc).emit('text_edit', text);
        }
    });

    socket.on('select_document', async (doc, callback) => {

        socket.join(doc);

        const document = await getDocument(doc);

        if(document) {
           callback(document.texto);
        }

    });

    socket.on('delete_document', async (name) => {
        const resultado = await deleteDocument(name);

        if(resultado.deletedCount) {
            io.emit('delete_document_sucess', name);
        }
    })
});