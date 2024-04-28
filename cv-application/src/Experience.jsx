import { useState } from "react";

export default function Experience(){
    const XPFields = [
        {label: "Company", id:"company",  key:"company", type:"text"},
        {label:"Title", id:'title',key:"title", type:"text"},
        {label:"Responsibilities", id:"responsibilities", key:"responsibilities", type:"text"},
        {label:"Date", id:"date", key:"date",type:"text" }
    ]

    const [personWork, setPersonWork] = useState({company: "", title: "", responsibilities:"",date:""})

    const handleChange = (key,value) =>{
        setPersonWork({...personWork, [key]:value})
    }

    return (<>
        {XPFields.map(field => (
            <div key={field.key}>
                <label htmlFor={field.label}>{field.label} </label>
                <input type={field.type}
                id={field.id}
                value={personWork[field.key]}
                onChange={(event) => handleChange(field.key, event.target.value)}/>
            </div>
        ))}
        <div id="workInputProjected" className="inputProjected">
            <p className="inputView">Company: {personWork.company}</p>
            <p className="inputView">Title: {personWork.title}</p>
            <p className="inputView">Responsibilities: {personWork.responsibilities}</p>
            <p className="inputView">Dates: {personWork.date}</p>
        </div>
    </>)
}