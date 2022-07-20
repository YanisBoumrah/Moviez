import styled from 'styled-components';

const Loader = () =>{
    return(
        
        <Container>
            <LoaderDiv></LoaderDiv>
        </Container>
    );
}

export default Loader;

/*STYLED COMPONENT*/

const LoaderDiv = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #58DD94;
  border-color: #58DD94 transparent #58DD94 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
  }
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

const Container = styled.div`
    position: absolute;
  left: 50%;
  margin-left: -40px;
  top: 40%;
  margin-top: -40px;
`