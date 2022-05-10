import React, { useState } from 'react';

const BoxGenerator = () =>{
    //create a state variable for each input from the form that we want to collect
    let [color, setColor] = useState("");

    //create state variable which is an array so that we can store all the colors that get submitted into it

    let [colorList, setColorList] = useState([]);


    //create a submit handler below
    const submitColor = (e)=>{
        //the default behavior of a form when it is submitted is to reload the page.  We can prevent this from happening by using a preventDefault();
        
        e.preventDefault(); //this is the first line of code in a submit handle
        console.log("submitted")

        //create a color object (python dictionary) also called a hashmap
        let box = {color};

        //use the setColorList setter to update the colorList array to have the color object inside of it. Note: the "..." is the spread function which gives me a copy of what is already in the array plus the specified additional data, which in this case is the colorList plus the current color placed into the array. 
        
        setColorList([...colorList, box])
        console.log(colorList)

        //clear the form after submission
        setColor("");
    }

    return(
        <>
            <form onSubmit={submitColor}>
                <div className="form-flex mb-2">
                    <label htmlFor="">Color:</label>
                    <input onChange={(e)=>{setColor(e.target.value)} } type="text" className="form-control-lg" value={color} />
                    <input type="submit" value="Submit" className="mt-2 btn btn-primary"/>
                </div>
            </form>
            <hr />
            <div className="d-flex justify-content-start">
                {
                    colorList.map((colorObj, idx) => {
                        return(
                            <div className="box" style={{backgroundColor: colorObj.color}}>
                                
                            </div>
                        );
                    })
                } 
            </div>
        
        
        
        </>
    )

}





export default BoxGenerator