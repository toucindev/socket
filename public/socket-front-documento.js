import { alertAndRedirect, updateText } from "./documento.js";

const socket = io();

function selectDocument(name) {
    socket.emit('select_document', name, (text) => {
        updateText(text);
    });
}

function emitirTexto(obj) {
     socket.emit('text', obj);
}

function emitDeleteDocument(name) {
    socket.emit('delete_document', name);
}

socket.on('text_edit', (msg) => {
    updateText(msg);
})

socket.on('delete_document_sucess', (name) => {
    alertAndRedirect(name);
})

export { emitirTexto, selectDocument, emitDeleteDocument };