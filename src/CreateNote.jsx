import react, { useState } from "react";
import Button from "@material-ui/core/Button";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(note);
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote(() => {
      return {
        title: "",
        content: "",
      };
    });
  };

  return (
    <>
      <form>
        <div className="main_div">
          <div className="create_note">
            <input
              className="elements"
              type="text"
              name="title"
              value={note.title}
              onChange={inputEvent}
              placeholder="Title"
              autoComplete="off"
            />
            <textarea
              className="elements"
              rows="5"
              column=""
              name="content"
              value={note.content}
              onChange={inputEvent}
              placeholder="Write a Note..."
            ></textarea>
            <Button
              onClick={addEvent}
              className="elements"
              variant="contained"
              color="primary"
            >
              Take
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateNote;
