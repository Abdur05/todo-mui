import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";
import List from './List';


const ToDoList = () => {
  
  const [item,setItem]=useState();

  const [newItem,setNewItem]=useState([]);

  const list=()=>{
    setNewItem((preVal)=>{
        return [...preVal,item];
    });
    setItem(" ")
  }

  const itemEvent=(event)=>{
    setItem(event.target.value);
  };
  
  return (
    <>
    <div className='main_div'>
        <div className='center_div'>
            <h1>TODO List</h1>
            <br/>
            <input type="text" name="" id="" placeholder='Add Items' value={item} onChange={itemEvent}/>
            <Button className='newBtn' onClick={list}>
                <AddIcon/>
            </Button><br/>
            <ol>
              
              {newItem.map((val,index)=>{
                  return <List key={index} text={val}/>;
              })}
            </ol>
        </div>
    </div>
    </>
  )
}

export default ToDoList;