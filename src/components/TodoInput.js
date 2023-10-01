import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){  //13 is the value of ENTER
            props.addList(inputText)  // press enter to add the todo
            setInputText("")
        }
    }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress} //to enter and add todo
      />
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText)
        setInputText("")  // after adding todo in the list, the input box should be empty.
      }}>+</button>      
    </div>
  );
}

export default TodoInput;
