import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {   

    const [expand,setExpand] = useState(true)

    const [note,setNote] = useState({
        title:"",
        content: "",
    })

    const InputEvent = (event) => {

        const value =  event.target.value;
        const name =  event.target.name;

        setNote((prevData) => {
            return {
                ...prevData,
                [name] : value,

            }
        })
    }

    const addEvent = () => {
        props.passNote(note);
        setNote(({
            title:"",
            content: "",
        }))
    }

    const expandIt = () => {
        setExpand(true);
    }

    const backtonopr = () => {
        setExpand(false)
    }
    

    return (<>
        <div className="main_note" onclick={expandIt}>
            <form>
            {expand ? <input type='text'name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/> : null}
                <textarea rows=""  onDoubleClick={backtonopr} name="content" column="" value={note.content} onChange={InputEvent} placeholder="Write a Note Here"/>s
              { expand ? (<Button onClick={addEvent}><AddIcon className="plus_sign"/></Button> ) : null }
            </form>
        </div>
    </>) ;
};

export default CreateNote;