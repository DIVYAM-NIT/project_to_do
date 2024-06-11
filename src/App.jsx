import React, { useState } from 'react'

import Heading from './components/Heading'
import Input from './components/Input'
import Items from './components/Items'
import Empmes from './components/Empmes'
import './App.css'
import {v4} from 'uuid'

function App() {

  let [ProductList, setProductList] = useState([]);

  let [input, setinput] = useState("");
  let onChange = (e) => {
    setinput(e.target.value);
  }

  let [inputd, setinputd] = useState("");
  let onChanged = (e) => {
    setinputd(e.target.value);
  }

  const new_add = (e) => {
    e.preventDefault();
    if(input !="" && inputd !=""){
      let new_list = [...ProductList, { id: v4(), product: input, dueDate: inputd }];
      setProductList(new_list);
      setinput("");
      setinputd("");
    }
    else{
      alert("Please input something in the input Boxes.");
    }
  }

  const del = (e) => {
    let uid = e;
    let new_list = ProductList.filter((item) => {
      return uid !== item.id ;
    });
    setProductList(new_list);
  }
  
  const update =(e)=>{
    let uid=e;
    let new_list = ProductList.map((item) => {
      if(uid !== item.id){
        return item;
      }
      else{
        item.product=input;
        item.dueDate=inputd;
        return item;
      }
    });
    setProductList(new_list);
    setinput("");
    setinputd("");
  }
  return (
    <>
      <center className='body'>
        <Heading />
        <div className="mycontainer">
          <Input new_add={new_add} input={input} inputd={inputd} onChange={onChange} onChanged={onChanged} />
          <Empmes ProductList={ProductList}/>
          <Items ProductList={ProductList} del={del} update={update}/>
        </div>
      </center>
    </>
  )
}

export default App