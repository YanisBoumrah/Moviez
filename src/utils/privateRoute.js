import React from "react";
import { Redirect,Route } from "react-router";

const PrivateRoute = ({component: Component}, ...rest) =>{
    return(
        <Route
           {...rest}
           render={props =>
                    localStorage.getItem('userId') ? (
                        <Component {...props}></Component>
                        ) : ( 
                            <Redirect to='/login'></Redirect>
                        )
                    }
        ></Route>
    );
}

export default PrivateRoute;