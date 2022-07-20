import React, { useState } from "react";
import Footer from "../../components/footer";
import styled from "styled-components";
import { useHistory } from "react-router";

const Panier = () => {
  const [panier, setPanier] = useState(
    JSON.parse(localStorage.getItem("panier"))
  );
  console.log(panier);
  const img_500 = "https://image.tmdb.org/t/p/w1280";
  const history = useHistory();
  const handleClick = (key) => {
    history.push(`/details/${key}`);
  };

  const confirm =() =>{
    history.push('/payement');
  }
  return (
    <PageContainer>
          <StyledDiv3><TitrePanier>Votre Panier</TitrePanier></StyledDiv3>

      <WrapContent>
        <Grille>
          {panier.map((movie) => (   
                  <StyledDiv2
                  key={movie.id}
                  onClick={() => {
                    handleClick(movie.id);
                  }}>
                    <StyledImg
              src={`${img_500}/${movie.image}`}
              alt="img"
            ></StyledImg>
                    <StyledP>{movie.title}</StyledP>

                    </StyledDiv2>
          ))}
          </Grille>
          <ButtonPay>
            <StyledBut><StyledBP onClick={()=>confirm()}>Confirmer la commande</StyledBP></StyledBut>
          </ButtonPay>
      <FooterCont> <Footer></Footer></FooterCont>
      </WrapContent>
    </PageContainer>
  );
};

export default Panier;

const StyledDiv3 = styled.div `
   display:flex;
   align-items:center;
   justify-content:center;
   width:100%;
   `

const TitrePanier = styled.h1`
  float:top;
  font-size: 30px;
  font-family: 'Nunito', sans-serif ;
  color: #fff;
  justify-content: center;
  @media (min-width: 40em) {
    font-size: 30px;
    font-family: 'Nunito', sans-serif;
    color: #fff;
    justify-content: center;
    margin-right: -60px;
  }
`
const StyledP = styled.p`
  font-family: 'Nunito', sans-serif;
  color: #ffffff;
  font-size: 14px;
  text-align: center;
`

const DivGlobe = styled.div`
  
  margin-top : 100px;
  @media (min-width: 40em) {
  margin : 100px;
  width : 40%;
  height : auto;
  background-color:#3D3939;
  box-shadow:navy;
  padding:1vw;}
`
const Grille = styled.div`
  max-width: auto;
  width: 100%;
  height: auto;
  margin: 20px auto;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 10px;
  ;
`
const WrapContent = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`;

const FooterCont = styled.div`
margin-top: auto;
`;
const StyledDiv2 = styled.div`
 border-radius: 10px;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap :30px;
  background: #3d3939;
 
 @media (min-width: 40em) {
  border-radius: 10px;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap :30px;
  background: #3d3939;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  &:hover {
    transform: scale(1.12);
    box-shadow: 8px 8px 8px black;

    z-index: 2;
  }
}
`
const StyledImg = styled.img`
  display: block;
  max-width: 20%;
  border-radius: 15px;
  clip-path:circle();
  @media (min-width: 40em) {
   display: block;
  max-width: 20%;
  border-radius: 15px;
  clip-path:circle();
  }
`;


const StyledBP = styled.p`
  font-size: 10px;
  font-family: 'Nunito', sans-serif;
  color: #fff;
  justify-content: center;
  @media (min-width: 40em) {
    font-size: 12px;
    font-family: 'Nunito', sans-serif;
    color: #fff;
    justify-content: center;
  }
`
const StyledBut = styled.button`
background-color: #58dd94;
  border: none;
  border-radius: 10px;
  display: flex;
  width: 50%;
  gap: 10px;
  align-items: center;
  justify-content: center;
  @media (min-width: 40em) {
    display: flex;
    border: none;
    width: 20%;
    height: auto;
    align-items: center;
    justify-content: center;
    margin-bottom: 10vh;
  }
`
const ButtonPay = styled.div`
    border: none;
    border-radius: 10px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media (min-width: 40em) {
        display: flex;
        border: none;
        width: 100%;
        height: auto;
        align-items: center;
        justify-content: center;
    }
`

 const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top:40px;
`;