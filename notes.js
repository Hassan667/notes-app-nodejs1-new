const fs = require("fs");
// vergion 1
// const addNote = (title,body) =>{
//     const notes = loadNotes() // []    [{title:"new1",body:"body1"}]
//     notes.push({  // [{title:"new1",body:"body1"},{title:"new2",body:"body2"}]
//         title:title,
//         body

//     })
//     saveNotes(notes)
// }
///////////////////////////////////////////////////
// vergion 2
const addNote = (title, body) => {
    const notes = loadNotes(); // []    [{title:"new1",body:"body1"}]
    const duplicateteTitles = notes.filter((obj) => {
        // new1 === new3 f
        // new2 === new2 f
        // new3 === new3 t
        return obj.title === title;
    });
    console.log(duplicateteTitles); //array []
    if (duplicateteTitles.length == 0) {
        notes.push({
            // [{title:"new1",body:"body1"},{title:"new2",body:"body2"}]
            title: title,
            body,
        });
        saveNotes(notes);
        console.log("save successfuly");
    } else {
        console.log("error duplicate title");
    }
};

const loadNotes = () => {
    // error (first time run)
    // const dataBuffer = fs.readFileSync('notes.json').toString()
    // return JSON.parse(dataBuffer) // Object
    try {
        const dataBuffer = fs.readFileSync("notes.json").toString();
        console.log(dataBuffer); //json
        return JSON.parse(dataBuffer); // Object // [{title:"new1",body:"body1"}]
    } catch {
        return [];
    }
};

const saveNotes = (notes) => {
    console.log(notes);
    // [{title:"new1",body:"body1"}] --> [{"title":"new1","body":"body1"}]
    // [{title:"new1",body:"body1"},{title:"new2",body:"body2"}]
    const saveData = JSON.stringify(notes);
    console.log(saveData);
    fs.writeFileSync("notes.json", saveData);
};
/////////////////////////////////////////////////

// Delete Notes

// const deleteNotes = (title) = {
//     const notes = loadNotes()
//     const notesToKeep = notes.filter((obj) => {
//         return obj.title !== title
//     })
// }
//////////////////////////////////
// readNotes
const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((obj) => {
        // note1 == note2 f
        // note2 == note2 t
        // note3 == note2 f no comparison

        return obj.title == title;
    });
    console.log(note); //{title:'note2',body:'body'}
    if (note) {
        console.log(note.body);
    } else {
        console.log("Not found");
    }
};

////////////////////////////
// list
const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((element) => {
        console.log(element.title, element.body);
    });
};

module.exports = {
    addNote,
    readNote,
    listNotes,
};