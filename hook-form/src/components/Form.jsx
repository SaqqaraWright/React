import React, { useState } from "react";

const Form = () => {
    //create a state variable for each input that will store the information inside of each input

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confPassword, setConfPassword] = useState("");

    return(
        <>
            <form className="container mt-4">
                <div className="form-group mb-2">
                    <label htmlFor="">First Name:</label>
                    <input type="text" onChange={ (e)=> setFirstName(e.target.value) } name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input type="text" onChange={ (e)=> setLastName(e.target.value) } name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="text" onChange={ (e)=> setEmail(e.target.value) } name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input type="password" onChange={ (e)=> setPassword(e.target.value) } name="" id="" className="form-control" />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="">Confirm Password:</label>
                    <input type="password" onChange={ (e)=> setConfPassword(e.target.value) } name="" id="" className="form-control" />
                </div>
            </form>
            <hr className="container"/>
            <div className="container">
                <h5>Your Form Data</h5>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confPassword}</p>
            </div>


        </>

    )
}

export default Form;