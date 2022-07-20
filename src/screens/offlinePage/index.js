import styled from "styled-components";
import logo from '../../img/no_connexion.png';

const OfflinePage = () =>{
    return(
        <StyledDiv>
            <StyledImg src={logo} alt='img-no-connexion'></StyledImg>
        </StyledDiv>
    )
}

export default OfflinePage

/* Styled component */

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const StyledImg = styled.img``
