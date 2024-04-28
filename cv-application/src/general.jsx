import { useState } from "react"

function GeneralSections(){
    const initialFields = [
        {label: "Full Name", id:"fullName",  key:"name", type:"text"},
        {label:"Email", id:'email',key:"email", type:"email"},
        {label:"Number", id:"number", key:"number", type:"tel"}
    ]

    const [personGeneral, setPersonGeneral] = useState({name:"", email:"", number:""});

    const handleChange = (key,value) => {
        setPersonGeneral({...personGeneral, [key]:value})
    }

    return (<>
    <div id="generalInputs">
        {initialFields.map(field => (
            <div key={field.key}>
                <label htmlFor={field.label}>{field.label} </label>
                <input type={field.type}
                id={field.id}
                value={personGeneral[field.key]}
                onChange={(event) => handleChange(field.key, event.target.value)} //* something up with this line I think
                />
                
            </div>
        ))}
        </div>
        <div id="generalInputProjected" className="inputProjected">
            <p className="inputView"id="personName">Full Name: {personGeneral.name}</p>
            <p className="inputView" id="personEmail">Email: {personGeneral.email}</p>
            <p className="inputView"id="personNumber">Phone Number: {personGeneral.number}</p>
        </div>
        
    </>)
}

export {GeneralSections}