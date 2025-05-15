import { emitirTexto, selectDocument, emitDeleteDocument } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDoc = parametros.get('nome');

const textEdit = document.getElementById('editor-texto');
document.getElementById('titulo-documento').textContent = nomeDoc || 'Documento sem título';
const buttonDelete = document.getElementById('excluir-documento');

selectDocument(nomeDoc);

textEdit.addEventListener('keyup', () => {
    emitirTexto({text: textEdit.value, doc: nomeDoc});
});

buttonDelete.addEventListener('click', () => {
    emitDeleteDocument(nomeDoc);
});

function updateText(text) {
    textEdit.value = text;
}

function alertAndRedirect(name) {
    if(nomeDoc === name) {
        alert(`Documento ${name} excluido!`);
        window.location.href = '/';
    }
}

export { updateText, alertAndRedirect } 