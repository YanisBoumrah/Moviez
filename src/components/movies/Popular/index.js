import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import Footer from "../../footer";
import { useSelector,useDispatch } from "react-redux";
import { getPopular,getSearch } from "../../../actions/api";
import Loader from "../../loader";

const Popular = () => {

  const popular = useSelector(state=>state.api.movies);
 
const img_500 = "https://image.tmdb.org/t/p/w1280"; 
//const [popular, setPopular] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
  const SEARCH_API =
    "https://api.themoviedb.org/3/search/multi?api_key=934780721e54373dbb92f5d1dc942560&language=en-US&page=1&include_adult=false&query=";
    
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (key) => {
    history.push(`/details/${key}`);
  };
  const  HandleOnChange= (e) => {
    setSearchTerm(e.target.value); 
  };

  const [isLoading,setIsLoading] = useState(false);

  const handleLoading = () => {
    const sleep = millisecons => {
      return new Promise(resolve => setTimeout(resolve, millisecons))
    }
    setIsLoading(true);
    sleep(1000).then(()=>{
      setIsLoading(false);
    })
  }

  useEffect(() => {
    handleLoading();
    dispatch(getPopular())
  }, []);

  const HandleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearch(searchTerm))
    }
  

  

  return (
    <div>
      {isLoading ? (
        <Loader/>
      ):(
          <PageContainer>
              <Form onSubmit={HandleOnSubmit}>
                    <StyledInput
                    type="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={HandleOnChange}
                  />
              </Form>
            <WrapContent>
              <Grille>
                {popular.map((populars) => (
                  <StyledDiv2 key={populars.id} onClick={() => {
                      handleClick(populars.id);
                    }}>
                    <StyledImg src={`${img_500}/${populars.poster_path}`}></StyledImg>
                    <StyledDiv>
                      <StyledH5>{populars.title}</StyledH5>
                    </StyledDiv>
                  </StyledDiv2>
                ))}
              </Grille>
            </WrapContent>
            <Footer/>
          </PageContainer>
      )}
    </div>
  );
};

export default Popular;

// style

const Form =styled.form`
border-radius: 15px;
  background: #222222;
  margin: 20px auto 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  width: 200px;
  height: 30px;
  border: 4px solid #222222;
  padding: 0px 10px;
  border-radius: 50px;
  @media (min-width: 40em){
    border-radius: 15px;
  background: #222222;
  margin: 20px auto 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  width: 400px;
  height: 30px;
  border: 4px solid #222222;
  padding: 0px 10px;
  border-radius: 50px;
  }
`
const StyledInput = styled.input`
border: none;
  height: 100%;
  width: 100%;
  padding: 0px 5px;
  border-radius: 50px;
  background-color: #222222;
  font-size: 14px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: #fff;
  :focus {
    outline: none;
  }`

const Grille = styled.div`
  max-width: auto;
  width: 100%;
  height: auto;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 290px);
  justify-content: center;
  grid-gap: 10px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;

`;

const StyledH5 = styled.h5`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;  
  color: #ffffff;
  font-size: 14px;
  text-align: center;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const WrapContent = styled.div`

`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledDiv2 = styled.div`
  border-radius: 10px;
  display:flex;
  flex-direction:column;
  align-items:center;
  background: #3d3939;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  &:hover {
    transform: scale(1.12);
    box-shadow: 8px 8px 8px black;

    z-index: 2;
  }
`;
