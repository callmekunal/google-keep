import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isClicked, setIsClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleClick() {
    setIsClicked(true);
  };

  return (
    <div>
      <form className="create-note">
        {isClicked && (
          <Zoom in={isClicked}>
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
              autoFocus="true"
            />
          </Zoom>
        )}

        <Zoom in={true}>
          <textarea
            name="content"
            onChange={handleChange}
            onClick={handleClick}
            value={note.content}
            placeholder="Take a note..."
            rows={isClicked ? 3 : 1}
          />
        </Zoom>
        <Zoom in={isClicked} timeout={{
          appear: 1000,
          enter: 600,
          exit: 1000,
        }}>
          <Fab onClick={submitNote}>
            <AddIcon fontSize="large" />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
