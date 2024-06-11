import {React} from "react"
import "./stars.css";
import { ReactTyped } from "react-typed";


function Home() {
 
  return (
    <><div id="home" className="intro route bg-image background">
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />

    <div className="intro-content display-table">
      <div className="table-cell">
        <div className="container">
          <h1 className="intro-title mb-4">LOGAN JOSHUA BULL</h1>
          <p className="intro-subtitle">
            <span className="text-slider-items"></span>
            <strong className="text-slider">
              <ReactTyped
                strings={[
                  "Front End Developer",
                  "Back End Developer",
                  "Database Architect"
                ]}
                typeSpeed={80}
                backDelay={1100}
                backSpeed={30}
                loop
              />
            </strong>
          </p>
         
        </div>
      </div>
    </div>
  </div>
  


    
    </>
  )
}

export default Home
