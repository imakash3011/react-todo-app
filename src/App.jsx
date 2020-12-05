import React, { useState } from "react";
import ToDoLists from './ToDoLists'


const App = () => {
  const [inputList, setInputList] = useState("buy apple");

  // changing into array form so that we can add more and more items in it.
  const [Items,setItems] = useState([]);



  const itemEvent = (event)=> {
    setInputList(event.target.value)
  }

  const listOfItems = () => {
      setItems((oldItems)=>{
        // here we  are taking all the value in the old array using spread operator then we are using the inputList to get the current value.
        return [...oldItems, inputList]
      });
      // after the array is ready with all values empty the input field
      setInputList("")
  }
// inside the jsx always write the js part in curly bracket
// here we are using map function to call the value from array
  return (
    <>
      <div className="main_div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a item" 
          value={inputList}
          onChange={itemEvent}/>
          <button onClick={listOfItems}>+</button>
          <ol>
           
          { 
            Items.map((itemval)=>{
             return <ToDoLists text={itemval}/>;
           })
          }
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
