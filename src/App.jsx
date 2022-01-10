import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer'
import CreateNote from './CreateNote'
import Notes from './Notes'
import Note from './Notes';

function App() {

  const [addItem,setaddItem] = useState([]);

  const addNote = (note) =>{
    //alert("i m clicked");
    
    setaddItem((prevData) => {
      return [...prevData,note]
    })

  }

  const onDelete = (id) => {
        setaddItem((olddata) => 
        olddata.filter((currdata,indx) => {
          return indx !==id;
        }))
  }

  return (
    <>
      <Header/>
      
      <CreateNote passNote={addNote}/>
       
       {addItem.map((val,index) => {
          return <Note key={index} id={index} title={val.title} content={val.content} deleteItem = {onDelete}/>
       })} 

      <Footer/>
    </>
  );
}

export default App;
