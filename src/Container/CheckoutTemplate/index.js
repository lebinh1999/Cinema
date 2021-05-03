import React from "react";
import { Route } from "react-router-dom";

function CheckoutLayout(props) {
  return (
    <>
      {props.children}
    </>
  );
}

export default function CheckoutTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <CheckoutLayout>
          <Component {...propsComponent} />
        </CheckoutLayout>
      )}
    />
  );
}
