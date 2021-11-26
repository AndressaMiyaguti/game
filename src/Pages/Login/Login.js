import * as S from './styled'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const login = {
      email: email,
      password: password
    }

    axios.post('/auth/login', login)
    .then(response => {
      const token = response.data.token;
      localStorage.setItem('token', token)
      history('/profile', { })
    })
  }

  return(
    <>
    <S.DivLogin>
      <S.DivLeft>
        <S.DivData>
          <S.Menu>
            <S.Text>INICIAR SESSÃO</S.Text>
          <S.Form onSubmit={handleSubmit}>
            <S.Label>
            Email de usuário Steam
          <S.Input type='text'  required
            onChange={event => setEmail(event.target.value)}/>
          </S.Label>

          <S.Label>
            Senha
          <S.Input type='password'
            onChange={event => setPassword(event.target.value)}/>
          </S.Label>
    
          <S.Button type='submit'>Iniciar sessão </S.Button>
          </S.Form>
          <S.LinkedPage to={'/info'}>
          <S.TextP>Esqueceu a sua senha?</S.TextP>
          </S.LinkedPage>
          </S.Menu>
        </S.DivData>
      </S.DivLeft>
      <S.DivRight>
        <S.DivRightCenter>
        <S.TextRight>
      Cadastre-se no Steam e descubra milhares de jogos para jogar.
        <S.Span>Saiba mais</S.Span>
        </S.TextRight>
        <S.ImageRight/>
        <S.TextRight>É gratuito e fácil de usar.</S.TextRight>
        
          <S.DivButton>
          <S.LinkedPage to={'/login/register'}>
        <S.ButtonCad>Cadastrar-se</S.ButtonCad>
        </S.LinkedPage>
        </S.DivButton>
       
        </S.DivRightCenter>
        </S.DivRight>
    </S.DivLogin>
    </>
  )
}