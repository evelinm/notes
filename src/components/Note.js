// import {MdDeleteForever} from 'react-icons/md';

const Note = ({id,text,date}) => {
    return (
        <div className="note">
            <span> {text}</span>
            <div className="note-foeter">
            <p> {date}</p>
            {/* <MdDeleteForever className="delete-icon" size="1.3rem" /> */}
            <button>  Delete X </button>

            </div>
        </div>
    )
}
export default Note;