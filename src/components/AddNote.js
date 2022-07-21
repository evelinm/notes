import { useState } from "react";

const AddNote = ({handleAddNote})=> {

    const [noteText,setNoteText] = useState('')

    const handleChange = (e) => {
        setNoteText(e.target.value)
  
    }
    
    const handleSaveClick = () => {
        handleAddNote(noteText)
    }
   
    return (
        <div className="note new">
        {/* whi isnt textare rendinering  */}
        <input  value={noteText} onChange={handleChange} name="hi" />
 
        <div className="note-footer">
            <small> 200 remaining </small>
            <button  onClick={handleSaveClick}className="save"> SAVE </button>
        </div>
        </div>
    )
}
export default AddNote;