import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { useState } from "react";

function App() {
  const [item, setItems] = useState([]);

  const addNote = (note) => {
    setItems((preValue) => {
      return [...preValue, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setItems((olddata)=>
      {
        return(
          olddata.filter((curdata,indx)=>{
            return indx!==id;
          })
        );
      }
    );
  };

  return (
    <>
      <Header />

      <CreateNote passNote={addNote} />

      <div className="column">
        {item.map((curdata, index,item) => {
          return (
            <Note
              key={index}
              id={index}
              title={curdata.title}
              content={curdata.content}
              ond={onDelete}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;
