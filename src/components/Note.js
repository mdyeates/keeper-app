import DeleteIcon from "@mui/icons-material/Delete";

const Note = (props) => {
  function handleDelete() {
    props.deleteNote(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
