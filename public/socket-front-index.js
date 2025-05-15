import { insertDocument, removeLinkDocument } from "./index.js";

const socket = io();

socket.emit('get_documents', (docs) => {
    docs.forEach((doc) => {
        insertDocument(doc.nome);
    })
});

socket.on('insert_document_view', (name) => {
    insertDocument(name);
})

socket.on('document_exists', (name) => {
    alert(`O documento ${name} já existe!`);
})

function emitInserDocument(name) {
    socket.emit('insert_document', name);
}

socket.on('delete_document_sucess', (name) => {
    removeLinkDocument(name);
});

export { emitInserDocument }