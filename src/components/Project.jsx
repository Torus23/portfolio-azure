
import EmblaCarousel from "../Carousel/Carousel.jsx"
import '../css/bass.css'
import '../css/sandbox.css'
import '../css/emba.css'
import { ChakraProvider } from '@chakra-ui/react'

function Project() {
    return(
    
    <>
    <ChakraProvider>
    <div>
        <div>
            <EmblaCarousel
                head="Bakery Website" 
                imgPath1="home-page.png"
                imgPath2="cards.png"
                imgPath3="3.png"
                imgPath4="4.png"
                imgPath5="5.png"
                route="bakery"
            />

        </div>

        <div>
            <EmblaCarousel
            head="Cars Database"  
            imgPath1="Picture1.png"
            imgPath2="Picture2.png"
            imgPath3="Picture3.png"
            imgPath4="Picture4.png"
            imgPath5="Picture5.png"
            route="cars"
            />
        </div>

        <div>
            <EmblaCarousel
            head="Archery Scoring Application"  
            imgPath1="m1.png"
            imgPath2="m2.png"
            imgPath3="m3.png"
            imgPath4="m4.png"
            imgPath5="m5.png"
            route="archery"
            />
        </div>   

    </div>

    </ChakraProvider>
        
    
    </>
    )
} export default Project