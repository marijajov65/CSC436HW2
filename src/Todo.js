import React, {useState} from 'react'
export default function Todo ({ title, description}) {
    const [checked, setChecked] = useState(false);
    const[dateCompleted,setDateCompleted] = useState('');

    function getDate(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }
    
    function handleInputChange(event){
        var checked = event.target.checked;
        setChecked(checked);

        if(event.target.checked===true){
            setDateCompleted(getDate);
        } else{
            setDateCompleted('');
        }
    }

    return (
    <div>
        <h3>{title}</h3>
        <div><i>{description}</i></div>
        <div>Created on : {getDate()}</div>
        <label>
          Complete:
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={handleInputChange}
             />
        </label>
        <div>Date completed: {dateCompleted}</div>
        <br />
    </div>        
    )
}