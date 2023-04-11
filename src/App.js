import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((noteItem, index) => (
        <Note title={noteItem.title} content={noteItem.content} deleteNote={deleteNote} id={index} key={index} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
