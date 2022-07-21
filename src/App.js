import NotesList from "./components/NotesList";
import { useState } from 'react';
import SearchBar from "./components/SearchBar";
// import {nanoid} from 'nanoid';


function App() {


  const [notes,setNotes] = useState([
    {
      id: 2,
      text: "this is my first note",
      date: " 09/10/1991"

    },  
    {
      id: 3,
      text: "this is my second note",
      date: " 09/10/1991"

    },
    {
      id: 5,
      text: "this is my third note",
      date: " 09/10/1991"

    },
    {
      id: 6,
      text: "this is my first note",
      date: " 09/10/1991"

    },  
    {
      id: 10,
      text: "this is my second note",
      date: " 09/10/1991"

    },
    {
      id: 8,
      text: "this is my third note",
      date: " 09/10/1991"

    },
    {
      id: 33,
      text: "hello",
      date: " 09/10/1991"

    }

  ]);


  const [searchText, setSearchText] = useState('');


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: 9,
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)

  }

  // const deleteNote = {}

  return (
    <div className="container">
      <SearchBar handleSearchNote={setSearchText}/>
      <NotesList  handleAddNote={addNote} notes={notes}/>
    </div>
  );
}

export default App;
