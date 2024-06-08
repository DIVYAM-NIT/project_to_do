import React, { useState } from 'react'

import Heading from './components/Heading'
import Input from './components/Input'
import Items from './components/Items'
import Empmes from './components/Empmes'
import './App.css'

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
    let new_list = [...ProductList, { product: input, dueDate: inputd }];
    setProductList(new_list);
    setinput("");
    setinputd("");
  }

  const del = (e) => {
    console.log(e);
    let prod = e;
    let new_list = ProductList.filter((item) => {
      return prod !== item.product ;
    });
    setProductList(new_list);
  }
  
  const update =(e)=>{
    let prod=e;
    let new_list = ProductList.map((item) => {
      if(prod !== item.product){
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
      <center>
        <Heading />
        <Input new_add={new_add} input={input} inputd={inputd} onChange={onChange} onChanged={onChanged} />
        <Empmes ProductList={ProductList}/>
        <Items ProductList={ProductList} del={del} update={update}/>
      </center>
    </>
  )
}

export default App