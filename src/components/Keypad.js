import React from "react"

function Keypad(){

    const handleChange = () =>{
        console.log("Entering password...")
    }
    return (
        <>
        <label>Password</label>
        <input 
            onChange={handleChange}
            type="password" />
        </>
    )
}

export default Keypad