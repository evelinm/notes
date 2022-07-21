import NotesList from "./components/NotesList";
import { useState } from 'react';
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


  const addNote = (text) => {
    console.log(text)
  }

  return (
    <div className="container">
      <NotesList  handleAddNote={addNote} notes={notes}/>
    </div>
  );
}

export default App;
