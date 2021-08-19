import { Button } from '@material-ui/core';
import React from 'react';
const CreateNote =()=>{

    const [note,setNote]=useState({
        title="",
        content="",
    });

    const InputEvent=(event)=>{

        const{name,value}=event.target;
        setNote((prevData)=>{
            return{
              ...prevData, 
                [name]:value

        }

    })

}
    return (
    <>
     <div classname="note">
         <form>
             <input type="text" placeholder="title" value={note.title} onChange={InputEvent} autocomplete="off"/>
             <textarea rows="" column=""  value={note.content} onChange={InputEvent} placeholder='wgfhgjh'></textarea>
             <Button>
                 <AddIcon>

                 </AddIcon>
             </Button>
         </form>
     </div>
    </>
    )
};
    
export default CreateNote;