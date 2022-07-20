import styled from 'styled-components';
import Footer from '../../components/footer';
import Slider from '../../components/slider';
import { useState,useEffect } from 'react';
const Accueil = () =>{

    const [userId,setUserId] = useState(null);

    useEffect(()=>{
        setUserId(localStorage.getItem('userId'));
        console.log(userId);
    })


    return(
        <Container>
            <StyledDiv>
               <Slider></Slider>
            </StyledDiv>
            <Footer></Footer>
        </Container>
    );
}

export default Accueil;
const Container = styled.div`
  width:100%;
  height:100vh;
  background:#555454;
`
const StyledDiv = styled.div`
    width:100%;
    height:100vh;
`