import styled from "styled-components";

export const DivReg = styled.div`
  width: 100%;
  display: flex;
  color: #e5e4dc;
  background-color: #212429;
`;

export const DivLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 55%;
  height: 600px;
  background-position: -60em;
  background-size: contain;
  background-image: url("https://store.akamai.steamstatic.com/public/shared/images/joinsteam/acct_creation_bg.jpg");

`;

export const DivData = styled.div`
  width: 50%;
  height: 500px;
  background: radial-gradient(50% 80% at 110% 170%, #3d4450 -20%, #212429 100%);
  transition: 50000;
  @media (max-width: 460px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 3rem;
  }
`;

export const Menu = styled.div`
  width: 100%;
  

`;
export const Text = styled.p`
  font-size: 1.5em;
  width: 100%;
  letter-spacing: 0.1em;
  margin-top: 0.2rem;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: -13px;

  @media (max-width: 900px) {
    width: 100%;
 
  }
`;
export const Label = styled.label`
  font-size: 13px;
  color: #b8b6b4;
  padding: 5px;
`;

export const Input = styled.input`
  width: 15rem;
  background: #32353c;
  border-radius: 3px;
  color: #e9e9e9;
  padding: 8px 6px;
  display: block;
  box-shadow: none;
  transition: border ease-in-out 0.5s;
  border: 1px solid #26282d;
  outline: none;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
`;
export const Button = styled.button`
  text-shadow: 1px 1px 0px rgb(0 0 0 / 30%);
  color: #c3e1f8;
  border-radius: 2px;
  background: linear-gradient(to right, #47bfff 5%, #1a44c2 60%);
  box-shadow: 2px 2px 5px rgb(0 0 0 / 20%);
  background-position: 25%;
  background-size: 330% 100%;
  border: none;
  text-decoration: none;
  width: 10rem;
  height: 1.8rem;
  margin-top: 1rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const LinkedPage = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-size: 0.7rem;
`;

export const DivPrivacidade = styled.div`
  height: 2rem;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  align-items: center;
`;
export const TextPrivacidade = styled.p`
  white-space: nowrap;
  font-size: 0.7em;
  width: 90%;

  @media (max-width: 510px) {
    white-space: normal;
    width: 800%;  
    
  }
`;
export const DivCheckbox = styled.div`
width: 270px;
`;
export const SpanCheckbox = styled.p`
  font-weight: bold;
  padding-left: 0.5rem;
  margin-top: 0;

`;
export const CheckArea = styled.div`
  height: 77px;
  border: 1px solid rgb(193, 193, 193);
  margin: 10px 0.3rem;
  padding: 0px;
  background-color: #222;
  width: 15.7rem;
  border-radius: 3px;
  display: flex;
`;
export const CheckAreaText = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`;
export const CheckAreaP = styled.p`
  font-size: 0.8em;
  font-weight: bold;
  width: 700%;
`;
export const CheckAreaDivImg = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.3rem;
`;
export const CheckAreaImg = styled.img`
  filter: brightness(1.2) contrast(1.5) saturate(2);
  width: 55px;
`;

export const SpanText = styled.p`
  font-size: 0.45em;
  margin-top: 0.1rem;
`;
