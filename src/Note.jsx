import react from 'react';
import Button from "@material-ui/core/Button";
const Note = (props)=>{

    const deleteNote = ()=>{
        props.ond(props.id);
    }

    return (
        <>
            <div className="card">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <Button onClick={deleteNote}>Delete</Button>
            </div>
        </>
    );
}

export default Note;