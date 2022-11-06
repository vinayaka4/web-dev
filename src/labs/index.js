import React from 'react';
import Nav from "../nav";
import A6 from "./a6";
import A7 from "./a7";
import {Routes, Route} from "react-router";

function Labs() {
    return (
        <div>
            
            <Routes>
                <Route path="a6"
                       element={<A6/>}/>
                <Route index
                       element={<A7/>}/>
            </Routes>
        </div>
    );
}

export default Labs;