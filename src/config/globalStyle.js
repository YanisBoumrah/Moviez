import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    
body{
   margin:0px;
   background-color: ${props=>props.theme.background};
   padding:0px;
   font-family:Nunito;
   min-height:100vh;
   display:flex;
   flex-direction:column;
}

li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: #282c34;
    cursor: pointer;
  }
  a:visited {
    color: #282c34;
  }
`

export default GlobalStyle