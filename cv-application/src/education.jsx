import { useState } from "react";

export default function Education(){
    const educationalXP = [
        {label:"School Name", id:"schoolName", key:"schoolName", type:"text"},
        {label:"Major", id:"major", key:"major", type:"text"},
        {label:"Date of Study", id:'dateStudied', key:"dateStudied", type:"text"}//*maybe change type here later
    ]

    const[personEducation, setPersonEducation] = useState({school:"", major:"",date:""})

    const handleChange = (key,value) => {
        setPersonEducation({...personEducation, [key]:value})
    }
    return(<>
       { educationalXP.map(field =>(
            <div key={field.key}>
                <label htmlFor={field.label}>{field.label} </label>
                <input type={field.type} 
                    id={field.id}
                    value={personEducation[field.key]}
                    onChange={(event) => handleChange(field.key,event.target.value)}
                />
            </div>
        ))}
        <div id="educationInputProjected" className="inputProjected">
            <p className="inputView">School Name: {personEducation.schoolName}</p>
            <p className="inputView">Major: {personEducation.major}</p>
            <p className="inputView">Date of Study: {personEducation.dateStudied} </p>
        </div>
    </>)
}