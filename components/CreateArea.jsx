import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    let { name, value } = event.target;
    // console.log(newValue);
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.onAdd(input);
  }
  return (
    <div className="createArea">
      <input
        name="title"
        onChange={handleChange}
        value={input.title}
        type="text"
        placeholder="title"
      />
      <textarea
        onChange={handleChange}
        value={input.content}
        name="content"
        id="content"
        placeholder="content"
      ></textarea>
      <button onClick={handleClick}>
        <AddIcon />
      </button>
    </div>
  );
}
export default CreateArea;
