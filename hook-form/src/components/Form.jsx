import React, { useState } from "react";

const Form = () => {
    
    //create a state variable for each input that will store the information inside of each input

    let [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length<2){
            setFirstNameError("First name must be atleast 2 characters!");
        } else {
            setFirstNameError("")
        }

    }

    let [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length<2){
            setLastNameError("Last name must be atleast 2 characters!");
        } else{
            setLastNameError("")
        }
    }
    let [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length<5){
            setEmailError("Email must be atleast 5 characters!");
        } else{
            setEmailError("")
        }
    }
    let [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length<8){
            setPasswordError("Password must be atleast 8 characters!");
        } else{
            setPasswordError("")
        }     
    }
    let [confPassword, setConfPassword] = useState("");
    const [confPasswordError, setConfPasswordError] = useState("");
    const handleConfPassword = (e) => {
        setConfPassword(e.target.value);
        if(e.target.value !== password){
            setConfPasswordError("Passwords must match!")
        } else{
            setConfPasswordError("")
        }    
    }
    return(
        <>
            <form className="container mt-4">
                <div className="form-group mb-2">
                    <label htmlFor="">First Name:</label>
                    <input type="text" onChange={ handleFirstName } className="form-control" />
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{ firstNameError }</p> :
                        ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input type="text" onChange={ handleLastName } className="form-control" />
                    {
                        lastNameError ?
                        <p style={{color: 'red'}}>{lastNameError}</p> :
                        ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="text" onChange={ handleEmail } className="form-control" />
                    {
                        emailError ?
                        <p style={{color: 'red'}}>{ emailError }</p> :
                        ''
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input type="password" onChange={ handlePassword } className="form-control" />
                    {
                        passwordError ?
                        <p style={{color: 'red'}}>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="">Confirm Password:</label>
                    <input type="password" onChange={ handleConfPassword } className="form-control" />
                    {
                        confPasswordError ?
                        <p style={{color: 'red'}}>{ confPasswordError }</p> :
                        ''
                    }
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