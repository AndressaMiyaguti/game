import * as S from './styled'
/* import {Fifa} from './../Images/Imagens' */
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card'

export default function Carousel (props) {
/*  const Image = [ ...Object.values( Fifa )]
 console.log(Image) */

  const [game, setGame] = useState([]);
  const [mounted, setMounted] = useState(false);
  console.log(game)
  const getData = async () => {
    await axios.get('/game/findMany')
    .then(response => {
      if(mounted) {
        setGame(response.data)
        
      }
    })
  }

  useEffect(() => {
    setMounted(true)
    getData()
  }, [mounted])
  console.log(game.image)
  return(
    <>
    <S.Carousel>
    <S.DivCarousel>
    {
      game.map(game => ( 

        <Card
        key={game.id}
        image={game.image}
       
        />
      ))
  
        
    }
      </S.DivCarousel>
    </S.Carousel>
   {/*  <S.Carousel>
   { Image.map((item) => {
     console.log(item)
     return(
     <S.CarouselImg key={item} src={item} />
     )
   })}
     
     </S.Carousel> */}
    </>
  )
}
