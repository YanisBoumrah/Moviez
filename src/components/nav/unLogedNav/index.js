import styled from "styled-components";
import { useState,useEffect } from "react";
import logo from '../../../img/MZ.png';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { FaUserCircle } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux';
import { getUser } from "../../../actions/database";
import { get_user_id } from "../../../actions/user";
import { useTranslation } from "react-i18next";
import {BsFillSunFill,BsFillMoonFill} from "react-icons/bs";
import { darkTheme,lightTheme } from "../../../config/theme";



const UnLogedNav  = ({switchTheme}) =>{

    const [showLinks, setShowLinks] = useState(false)

    
    const dispatch = useDispatch();
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    const{t,i18n} = useTranslation();

    const [themeBool, setThemeBool] = useState(false)
    const switchThemeBridge = (theme, themeBool) => {
        setThemeBool(!themeBool)
        switchTheme(theme)
    }

    const [username, setUsername] = useState('');
    const [fr,setFr] = useState(true);
    
    const history = useHistory();

    const user = useSelector(state=>state.database.user);
    const getUserName = () =>{
       setUsername(user.username);
    }
    

    const logout = () =>{
        localStorage.removeItem('userId');
        dispatch(get_user_id(null));
        history.push('/');
    }
    useEffect(()=>{
        setShowLinks(true);
        dispatch(getUser());
        
    },[])

    useEffect(()=>{
        getUserName();

    },[user])


    const redirectToHome = () =>{
        history.push('/');
    }

    const changeLanguage = (lang) =>{
        i18n.changeLanguage(lang);
        setFr(!fr);
    }

    return(
        
            <StyledNavbar showLinks={showLinks}>
                <StyledDivLogo>
                    <StyledLogo src={logo} onClick={()=>redirectToHome()}></StyledLogo>

                    {fr?<StyledButton onClick={()=>changeLanguage('en')}>En</StyledButton>
                       :<StyledButton onClick={()=>changeLanguage('fr')}>FR</StyledButton>
                    }

                    {   themeBool ?
                        <BsFillSunFill color='#58DD94' onClick={() => switchThemeBridge(lightTheme, themeBool)}></BsFillSunFill>
                        :
                        <BsFillMoonFill color='#58DD94' onClick={() => switchThemeBridge(darkTheme, themeBool)}></BsFillMoonFill>
                    }
                </StyledDivLogo>
                <StyledList showLinks={showLinks}>
                        <StyledElementNav showLinks={showLinks}>
                            <StyledLink>
                                <Link to="/shop"><StyledP1>{t('Boutique')}</StyledP1></Link>
                            </StyledLink>    
                        </StyledElementNav>
                        <StyledElementNav showLinks={showLinks}>
                            <StyledLink>
                                <Link to="/fav"><StyledP1>{t('Favoris')}</StyledP1></Link>
                            </StyledLink>
                        </StyledElementNav>
                        <StyledElementNav showLinks={showLinks}>
                            <StyledLink>
                                <Link to="/panier"><StyledP1>{t('Panier')}</StyledP1></Link>
                            </StyledLink>
                        </StyledElementNav>
                        <StyledElementNav showLinks={showLinks}>
                            <StyledLink>
                                <Link to="/movies"><StyledP1>{t('Mes films')}</StyledP1></Link>
                            </StyledLink>
                        </StyledElementNav>
                        <StyledElementNav showLinks={showLinks}>
                            <StyledLink>
                                <StyledP1 onClick={()=>logout()}>{t('Se déconnecter')}</StyledP1>
                            </StyledLink>
                        </StyledElementNav>
                </StyledList>
                <StyledDiv>
                    <StyledP2>{username}</StyledP2>
                    <FaUserCircle size="2em" color="#58DD94"/>
                </StyledDiv>
                <StyledBurgerButton onClick={handleShowLinks}>
                    <StyledSpanBurgerLine showLinks={showLinks}></StyledSpanBurgerLine>
                </StyledBurgerButton>
            </StyledNavbar>
        
    );
}

export default UnLogedNav;

const StyledButton = styled.button`
    border:none;
    font-family:Nunito;
    background:#3D3939;
    color:#58DD94;
    font-weight:bold;
`

const StyledNavbar = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position:fixed;
    justify-content: space-between;
    padding-left: 1rem;
    width: 100%;
    min-height: 50px;
    background:#3D3939;
    z-index: 9999;
    box-sizing:border-box;
`

const StyledDivLogo = styled.div`
   display:flex;
   align-items:center;
   justify-content:space-between;
   gap:3px;
   margin:0;
   width:150px;
`

const StyledLogo = styled.img`
    width:80px;
    z-index: 10;
`

const StyledList = styled.ul`
    list-style: none;
    padding-right:3vh;
    margin: 0;
    display: flex;
    gap:50px;
    @media screen and (max-width:767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        right:-100vw;
        right: ${props =>
            props.showLinks ? props.showLinks : 0};
        visibility: ${props =>
            props.showLinks ? props.showLinks : 'visible'};
        width: 0;
        width: ${props =>
            props.showLinks ? props.showLinks : '100%'};
        bottom: 0;
        height: 100%;
        padding-right: 0;
        background-color: #3D3939;
        transition: all 0.8s ease-out;
    }    
`

const StyledElementNav = styled.li`
    @media screen and (max-width:767px) {
        transform: translateY(100vh);
        transform: ${props =>
            props.showLinks ? props.showLinks : "translateY(0)"};
        &:first-child {
            transition: ${props =>
                props.showLinks ? props.showLinks : "all 1s ease-out"};
        }
        &:nth-child(2) {
            transition: ${props =>
                props.showLinks ? props.showLinks : "all 1.15s ease-out"};
        }
        &:nth-child(3) {
            transition: ${props =>
            props.showLinks ? props.showLinks : "all 1.3s ease-out"};
        }
        &:nth-child(4) {
            transition: ${props =>
            props.showLinks ? props.showLinks : "all 1.45s ease-out"};
        }
        &:nth-child(5) {
            transition: ${props =>
            props.showLinks ? props.showLinks : "all 1.60s ease-out"};
        }
        &:after{
            content:"";
            display:block;
            margin: 0 auto;
            width:3vw;
            height:1px;
            background: white;
        }
        &:last-child:after{
            display:none;
        }
    }
`

const StyledLink = styled.p`
    text-decoration: none;
    padding:0 0.3rem;
    @media screen and (max-width:767px) {
        display: block;
        padding:1.5rem;
        font-size: 5vw;
    }
`

const StyledBurgerButton = styled.button`
    width: 40px;
    height: 40px;
    background: transparent;
    color:inherit;
    border:none;
    display: none;
    @media screen and (max-width:767px) {
        display:block;
        position: fixed;

        right:1rem;
        &:hover{
            cursor:pointer;
        }
    }
`

const StyledSpanBurgerLine = styled.span`
    @media screen and (max-width:767px) {
        display:block;
        width:40px;
        width: ${props =>
            props.showLinks ? props.showLinks : 0};
        transition: all .5s ease-in-out;
        height:3px;
        position: relative;
        background: white;
        background: ${props =>
            props.showLinks ? props.showLinks : 'transparent'};
        border-radius: 3px;
        &:before{
            display:block;
            width:40px;
            height:3px;
            position: absolute;
            background: white;
            transition: all .5s ease-in-out;
            content:"";
            left:0;
            border-radius: 3px;
            transform: translateY(-12px);
            transform: ${props =>
                props.showLinks ? props.showLinks : 'rotate(45deg)'};

        }
        &:after {
            display:block;
            width:40px;
            height:3px;
            position: absolute;
            background: white;
            transition: all .5s ease-in-out;
            content:"";
            left:0;
            border-radius: 3px;
            transform: translateY(12px);
            transform: ${props =>
                props.showLinks ? props.showLinks : 'rotate(-45deg)'};
        }
    }
`

const StyledP1 = styled.div`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
color:#58DD94
`
const StyledP2 = styled.div`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
color:white;
font-weight:bold;
`

const StyledDiv = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   margin-right:15px;
   gap:30px;
   @media screen and (max-width:767px) {
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:70px;
    gap:30px;
   }
`
