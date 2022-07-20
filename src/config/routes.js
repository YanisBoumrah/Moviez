import React from 'react';
import Accueil from '../screens/accueil';
import Shop from '../screens/shop';
import Wishlist from '../screens/wishlist';
import Panier from '../screens/panier';
import Details from '../screens/details';
import Movies from '../screens/movies';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import SingInForm from '../screens/singInForm';
import LoginForm from '../screens/loginForm';
import GlobalStyle from './globalStyle';
import LogedNav from '../components/nav/logedNav';
import UnLogedNav from '../components/nav/unLogedNav';
import { useSelector} from 'react-redux';
import Stripe from '../stripe/StripeContainer';
import { useState } from 'react';
import { lightTheme, darkTheme } from './theme'
import { ThemeProvider } from "styled-components";
import PrivateRoute from '../utils/privateRoute';
import { Offline, Online } from 'react-detect-offline'
import OfflinePage from '../screens/offlinePage';


const Routes = () => {


    const id = useSelector(state=>state.user.userId);
    const [currentTheme, setCurrentTheme] = useState(darkTheme)
    const switchTheme = (theme) => {
        setCurrentTheme(theme)
    }

    return (
        <ThemeProvider theme={currentTheme}>
            <Router>
                <Online>
                    <GlobalStyle/>
                        {id != null ? <UnLogedNav switchTheme={switchTheme}/>:<LogedNav  switchTheme={switchTheme}/>}
                        <Switch>
                            <Route exact path ="/" component={Accueil}/>
                            <Route path="/signin" component={SingInForm}/>
                            <Route path="/login" component={LoginForm}/>
                            <PrivateRoute path="/panier" component={Panier}/>
                            <Route path="/shop" component={Shop}/>
                            <PrivateRoute path="/fav" component={Wishlist}/>
                            <Route exact path="/details/:id" component={Details}/>
                            <PrivateRoute exact path ="/payement" component={Stripe}/>
                            <PrivateRoute exact path ="/movies" component={Movies}/>
                        </Switch>  
                </Online> 
                <Offline>
                    <OfflinePage></OfflinePage>
                </Offline>
            </Router>
        </ThemeProvider>
    );
};

export default Routes;

