import React from 'react';
import logo from './../../Asset/img/Logo.png';
import { useSelector } from "react-redux"

export default function Loader() {
    const { isLoading } = useSelector(state => state.LoaderReducer);
    // console.log(isLoading);
    if(isLoading) {
        return (
            <div className ="Loader">
                <img src={logo} />
            </div>
        )
    }
    else{
        return ''
    }
}
