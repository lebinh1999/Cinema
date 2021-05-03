import React from "react";
import { Route } from "react-router-dom";
import NavbarHome from "./../../Component/NavbarHome";
import Footer from "../../Component/Footer";

function HomeLayout(props) {
  return (
    <>
      <NavbarHome />
      {props.children}
      <Footer />
    </>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>                          
      )}
    />
  );
}
