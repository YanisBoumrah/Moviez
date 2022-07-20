import { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import {AiOutlineArrowLeft}from "react-icons/ai"
import {RiDislikeLine} from "react-icons/ri"
import {MdOutlineRemoveShoppingCart} from "react-icons/md";
import Footer from "../../components/footer";

  const Details = (props) => {
  const param = useParams();
  const [detail, setDetail] = useState({});
  const img_500 = "https://image.tmdb.org/t/p/w1280";
  const FormatUS = Intl.NumberFormat("en");
  const history = useHistory();
  
  const userId = localStorage.getItem('userId');
  const [addToFav, setAddToFav] = useState(false);
  const [addToPanier, setAddToPanier] = useState(false);

  

  useEffect(
    ()=> {const currentFavorites = localStorage.getItem('wishlist')
      ? JSON.parse(localStorage.getItem('wishlist')) 
    : []
    const isFav = currentFavorites.some(fav => fav.id === detail.id)

    const currentPanier = localStorage.getItem('panier')
          ? JSON.parse(localStorage.getItem('panier'))
          :[]

    const isPanier = currentPanier.some(pan => pan.id === detail.id)

    setAddToFav(isFav)
    setAddToPanier(isPanier)
    },[detail]
  )

  const handlePanier = movie => {
    const currentPanier = localStorage.getItem('panier')
    ? JSON.parse(localStorage.getItem('panier'))
    : []
    const isPresentPanier = currentPanier.map(p => p.id).indexOf(detail.id)
    console.log(isPresentPanier)
    if(isPresentPanier === -1){
      currentPanier.push(movie)
      localStorage.setItem('panier', JSON.stringify(currentPanier))
      setAddToPanier(true)
    } else {
      const filteredPanier = currentPanier.filter(
        detail => detail.id !== movie.id
      )
      localStorage.setItem('panier', JSON.stringify(filteredPanier))
      setAddToPanier(false)
      console.log(filteredPanier)
      console.log(addToPanier)
    }
  }

  const handleFavorite = movie => {
    const currentFavorites = localStorage.getItem('wishlist')
    ? JSON.parse(localStorage.getItem('wishlist')) 
    : []
  const isPresent = currentFavorites.map(e => e.id).indexOf(detail.id)
  console.log(isPresent)
  if(isPresent === -1){
    currentFavorites.push(movie)
    localStorage.setItem('wishlist', JSON.stringify(currentFavorites))
    setAddToFav(true)
  } else {
    const filteredMovies = currentFavorites.filter(
      detail => detail.id !== movie.id
    )
    localStorage.setItem('wishlist', JSON.stringify(filteredMovies))
    setAddToFav(false)
    console.log(filteredMovies)
    console.log(addToFav)
  }
  }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${param.id}?api_key=934780721e54373dbb92f5d1dc942560&language=en-US`
      )
      .then((response) => {
        setDetail(response.data);
      });
  }, [param.id]);

  return (
    <StyledB>
      <ContainerD>
        <ReturnBut onClick={()=> history.goBack()}><AiOutlineArrowLeft color="#58dd94" size="2rem"/></ReturnBut>
        <Wrapper>
          <WrapContentImg>
            <StyledImg
              src={`${img_500}/${detail.poster_path}`}
              alt="img"
            ></StyledImg>
          </WrapContentImg>
          <WrapContent>
            <StyledH1>{detail.title}</StyledH1>
            <StyledHr />
            <StyledH2>Storyline</StyledH2>
            <StyledP>{detail.overview}</StyledP>
            <StyledHr />
            <StyledUl>
              <StyledLi>Release Date : {detail.release_date}</StyledLi>
              <StyledLi>Budget : {FormatUS.format(detail.budget)} $</StyledLi>
              <StyledLi>Revenue : {FormatUS.format(detail.revenue)} $</StyledLi>
              <StyledLi>Duration : {detail.runtime} min</StyledLi>
              <StyledLi>Public vote : {detail.vote_average}/10</StyledLi>
            </StyledUl>
            <PriceDiv>
            <StyledH3>Price : 12 $</StyledH3>
            </PriceDiv>
            {
              userId != null? 
                (<ButtonBox>
                  {addToFav ? <SButton onClick={() => handleFavorite({ id: detail.id, title: detail.title, image:detail.poster_path})}>
                    <FDiv>
                      <StyledBP>Remove</StyledBP> 
                    </FDiv>
                    <RiDislikeLine size="20" color="white" />
                  </SButton>
                  : <SButton onClick={() => handleFavorite({ id: detail.id, title: detail.title, image:detail.poster_path })}>
                    <FDiv>
                      <StyledBP>Add to favorite</StyledBP>
                    </FDiv>
                    <MdOutlineFavoriteBorder size="20" color="white" />
                    </SButton>
                  }
                  {addToPanier ? <SButton onClick={() => handlePanier({ id: detail.id, title: detail.title, image:detail.poster_path})}>
                    <FDiv>
                      <StyledBP>Remove from cart</StyledBP> 
                    </FDiv>
                    <MdOutlineRemoveShoppingCart size="20" color="white" />
                  </SButton>
                  : <SButton onClick={() => handlePanier({ id: detail.id, title: detail.title, image:detail.poster_path})}>
                    <FDiv>
                      <StyledBP>Add to cart</StyledBP>
                    </FDiv>
                    <BsCartCheck size="20" color="white" />
                    </SButton>
                  }
                </ButtonBox>
            ):null
            }
          </WrapContent>
        </Wrapper>
      </ContainerD>
      <Footer/>
    </StyledB>
  );
};
export default Details;

/*Styled Components*/

const FDiv = styled.div`

`
const StyledB = styled.div`
  height: 100%;
  padding-top:40px;
  @media (min-width: 40em) {
    height: 100vh;
    width: 100%;
    padding-top:60px;
  }
`;

const ContainerD = styled.div`
  padding: 3rem 0;
  margin-inline: auto;
  width: min(90%, 80rem);
`;
const ReturnBut = styled.button`
margin-bottom: 15px;
margin-top: -15px;
display: block;
background:none;
border:none;
@media (min-width: 40em) {
display: block;
background:none;
border:none;

}

`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 40em) {
    display: flex;
    flex-direction: row;
    * {
      flex-basis: 100vh;
    }
    * {
      margin-left: 2em;
    }
  }
`;

const WrapContentImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 40em) {
    display: block;
    justify-content: center;
    align-items: center;
  }
`;
const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 40em) {
    display: block;
    justify-content: center;
    align-items: center;
  }
`;

const StyledImg = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 15px;
  @media (min-width: 40em) {
    display: block;
  max-width: 70%;
  border-radius: 15px;
  margin-left:140px;
  }
`;

const StyledH1 = styled.h1`
  text-transform: uppercase;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 25px;
  max-width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props=>props.theme.color};

  @media (min-width: 40em) {
    text-transform: uppercase;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 30px;
    display: flex;
    margin: 0 0 10px 20px;
    justify-content: center;
    color: ${props=>props.theme.color};
    padding-top: 30px;
    max-width: 40rem;
  }
`
const StyledH2 = styled.h2`
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 25px;
  justify-content: center;
  align-items: center;
  color: ${props=>props.theme.color};
  margin-bottom: -5px;

  @media (min-width: 40em) {
    margin-bottom: -30px;
    margin-left: 60px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 25px;
    color: ${props=>props.theme.color};
  }
`
const StyledP = styled.p`
  font-size: 15px;
  font-family: Open Sans;
  color: ${props=>props.theme.color};
  justify-content: center;
  @media (min-width: 40em) {
    font-size: 17px;
    font-family: Open Sans;
    color: ${props=>props.theme.color};
    justify-content: center;
    padding: 30px 30px 15px 30px;
  }
`

const StyledHr = styled.hr`
  width: 80%;
  height: 0.5px;
  background-color: ${props=>props.theme.color};
  margin-right: 40px;
  @media(min-width: 40em){
    width: 80%;
  height: 1px;
  background-color: ${props=>props.theme.color};
  margin: 0 0px 0px 60px;
  }
`;
const StyledUl = styled.ul`
  padding: 0;
`;
const StyledLi = styled.li`
  line-height: 1.5rem;
  list-style: none;
  font-size: 15px;
  font-family: Open Sans;
  color: ${props=>props.theme.color};
  @media (min-width: 40em) {
    line-height: 1.5rem;
    font-size: 17px;
    font-family: Open Sans;
    color: ${props=>props.theme.color};
    width: 90%;
    justify-content: center;
  }
`

const PriceDiv = styled.div`
display: flex;
  align-items: center;
  flex-direction: column;
  height :60px;
  justify-content: center;
@media (min-width: 40em) {
  display: flex;
  align-items: center;
  flex-direction: column;
  height :60px;
  justify-content: center;
}
`
const StyledH3 = styled.h2`
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 17px;
  justify-content: center;
  align-items: center;
  color: ${props=>props.theme.color};
  `

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media (min-width: 40em) {
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 80%;
    margin-top: 140px;
  }
`;
const SButton = styled.button`
  background-color: #58dd94;
  border: none;
  border-radius: 10px;
  display: flex;
  width: 100%;
  gap: 10px;
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
`;
const StyledBP = styled.p`
  font-size: 13px;
  font-family: Open Sans;
  color: ${props=>props.theme.color};
  justify-content: center;
  @media (min-width: 40em) {
    font-size: 14px;
    font-family: Open Sans;
    color: ${props=>props.theme.color};
    justify-content: center;
    margin-right: -60px;
  }
`;
