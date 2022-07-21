import { useState } from "react";

const AddNote = ({handleAddNote})=> {

    const [noteText,setNoteText] = useState('');
    const characterLimit = 200;


    const handleChange = (e) => {
        if( characterLimit - e.target.value.length >= 0 ){
            setNoteText(e.target.value)
  

        }
       
  
    }
    
    const handleSaveClick = () => {

        if(noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText("");
        }
     
    }
   
    return (
        <div className="note new">
        {/* whi isnt textare rendinering  */}
        <input  value={noteText} onChange={handleChange} name="hi" />
 
        <div className="note-footer">
            <small> { characterLimit - noteText.length} remaining </small>
            <button  onClick={handleSaveClick}className="save"> SAVE </button>
        </div>
        </div>
    )
}
export default AddNote;