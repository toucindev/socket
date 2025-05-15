import { emitInserDocument } from "./socket-front-index.js";

const docs = document.getElementById('lista-documentos');
const form = document.getElementById('form-adiciona-documento');
const input = document.getElementById('input-documento');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    emitInserDocument(input.value);
    input.value = '';
});

function insertDocument(doc) {
    docs.innerHTML += `
      <a href="documento.html?nome=${doc}" class="list-group-item list-group-item-action" id="document-${doc}">
        ${doc}
      </a>
    `;
}

function removeLinkDocument(doc) {
    
    const document = document.getElementById(`document-${doc}`);

    docs.removeChild(document);

}


export { insertDocument, removeLinkDocument }