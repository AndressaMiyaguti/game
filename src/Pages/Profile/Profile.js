import * as S from './styled'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Profile(props) {

  const [user, setUser] = useState({});
  const [mounted, setMounted] = useState(false);
  const [notLogged, setNotLogged] = useState(true);

  useEffect(() => {
    setMounted(true)

    if(localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }

      axios.get('/auth/me', config)
      .then(response => {
        setNotLogged(false)
        setUser(response.data)
        console.log(response)
      })
    }

  }, [mounted])


console.log(user)
  return (
    <S.Profile>
      <S.ProfileImg src = {'https://store.cloudflare.steamstatic.com/public/shared/images/responsive/header_logo.png'}/>
      {
        !notLogged ? (
          <>
            <h2>{user.name}</h2>
            <span>Email: {user.email}</span>
            <span>Membro desde: {user.createdAt}</span>
            <span>{user.games}</span>
          </>
        ) : (
          <h2>Sem dados do perfil, faça login</h2>
        )
      } 
          
          
   </S.Profile>
  )
}