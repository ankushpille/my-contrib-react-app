import { useState } from "react";

function CreateTodoList(){

  const[text,setText] = useState("");
  const [todos,setTodos] = useState([]);
  const[editedIndex,setEditedIndex] = useState(null);

  const handleSave = () => {
    if(editedIndex == null){
     setTodos([...todos,text]);
     setText("")
    }else{
      const updatedTodos = [...todos] 
      updatedTodos[editedIndex] = text;
      setTodos(updatedTodos);
      setText("")
      setEditedIndex(null);
    }
  
  }

  const handleOnchange = (e) => {
    setText(e.target.value)
  }

  const handleEdit = (index) => {
      setText(todos[index])
      setEditedIndex(index);

  }

  const handleDelete = (index) => {
       const deleteTodos = [...todos]
       deleteTodos.splice(index,1);
       setTodos(deleteTodos)
  }
    
  return (
    <>
     <input type="text" 
     placeholder=""
     onChange={handleOnchange}
     value = {text}
     />

      <button onClick={handleSave}>
        { editedIndex !==null ?  "edit Todo" : "save todo"}
        </button>
  

     {todos.map((text,index) => (
         <li key={index}>
              {text} <button onClick={ () => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>delete</button>
         </li>
     ))}
     </>
  )
}

export default CreateTodoList;

