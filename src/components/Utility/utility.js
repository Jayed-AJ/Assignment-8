
import { handleSweet } from "../Exporter/exporter";


const getDocFromLSt = () => {
    const docsStr = localStorage.getItem("AppointedDocId");
    if (docsStr) {
        const docs = JSON.parse(docsStr);
        return docs;
    }
    else {
        return [] ;
    }
}

const addDocToLSt = (id) => {
    const docs = getDocFromLSt();
    // console.log(docs);
    if (docs.includes(id)) {
        alert("One doctor one Appontment, You can not get more then OneAppointment.")
    }
    else {
        docs.push(id);
        setDocToLst(docs)
        handleSweet()
    }
}

const setDocToLst = (docs) => {
    const docsStr = JSON.stringify(docs);
    localStorage.setItem("AppointedDocId",docsStr)
}

const removeDocToLSt = (id) => {
    const docs = getDocFromLSt();
    const remainingDocs = docs.filter(doc=> doc !== id);
    setDocToLst(remainingDocs);
}


export {getDocFromLSt,addDocToLSt,removeDocToLSt}