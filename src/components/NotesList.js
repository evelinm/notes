import { render } from "@testing-library/react";
import Note from "./Note";


const NotesList = () => {
    return(
    <div className="notes-list">
        Notes list
        <Note/>
    </div>

    )

};
export default NotesList;