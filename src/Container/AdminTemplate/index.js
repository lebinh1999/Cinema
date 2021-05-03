import React from "react";
import {Redirect, Route} from "react-router-dom";
import { USRELOGIN } from "../../util/settings";
import NavbarAdmin from "./../../Component/NavbarAdmin";
import AdminHeader from "./AdminHeader";

function AdminLayout(props){
    return(
        <>
            <NavbarAdmin/>
            <AdminHeader/>   
            {props.children}
        </>
    )
}

export default function AdminTemplate({Component,...props}){
    return(
        <Route
            {...props}
            render={(propsComponent) => {
            if(localStorage.getItem(USRELOGIN)) {
                return (
                <AdminLayout>
                    <Component {...propsComponent}/>
                </AdminLayout>
            )
            }
            return <Redirect  to="/auth"/>
        } 
    }
        />
    );
}