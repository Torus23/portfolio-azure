import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Link } from "react-router-dom";

function EmblaCarousel(props) {

  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])  

  return (
    
    <div className='embla'>
      <header>
        <h1 className="header"><Link to ={`/${props.route}`}>{props.head}</Link></h1>
      </header>
      <div className="embla_viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">{<img className="embla__slide__img" src={props.imgPath1}></img>}</div>
          <div className="embla__slide">{<img className="embla__slide__img" src={props.imgPath2}></img>}</div>
          <div className="embla__slide">{<img className="embla__slide__img" src={props.imgPath3}></img>}</div>
          <div className="embla__slide">{<img className="embla__slide__img" src={props.imgPath4}></img>}</div>
          <div className="embla__slide">{<img className="embla__slide__img" src={props.imgPath5}></img>}</div>
        </div>        
      </div>    
    </div>
  )
} export default EmblaCarousel