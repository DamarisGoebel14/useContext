import React, {useContext} from 'react'
import {UserContext} from "./UserContext";

export function Home () {
    const {value, setValue} = useContext(UserContext)

    return(
        <div>
            <h2>Home</h2>
            <p>{value}</p>
            <button onClick={() => setValue('hey')}>change value</button>
        </div>
    )
}