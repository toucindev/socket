import { documents } from "./dbConnect.js";

function getDocuments() {
    const docs = documents.find().toArray();
    return docs;
}

function getDocument(doc) {
    const document = documents.findOne({nome: doc});

    return document;
}

function updateDocument(doc, text) {
    const update = documents.updateOne({nome: doc}, {$set: {
        texto: text
    }});

    return update;
}

function insertDocument(name) {
    const resultado = documents.insertOne({nome: name, texto: ''});
    return resultado;

}

function deleteDocument(name) {
    const resultado = documents.deleteOne({nome: name});
    return resultado;
}

export { getDocument, updateDocument, getDocuments, insertDocument, deleteDocument }