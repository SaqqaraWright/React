import React, {useState} from "react";
import {useHistory} from "react-router-dom"

const Form = (props) => {
    const [category, setCategory] = useState("people"); //having a default value in the initial state, prevents me from having an extra option tag
    const [id, setID] = useState("");
    const history= useHistory();

    const sendForm = (e) => {
        e.preventDefault();
        history.push(`/${category}/${id}`)
        console.log(`/${category}/${id}`)
    }
    return (
        <>
            <div>
                <form onSubmit={sendForm}>
                    <label>Search for:</label>
                    <select value={category} onChange={(e)=>{setCategory(e.target.value)}} className="choose-input">
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                    <label>ID:</label>
                    <input onChange={(e)=>{setID(e.target.value)}} type="number" min="0" className="id" />
                    <button className="btn">Search</button>
                </form>
            </div>

        </>
    )
}

export default Form;