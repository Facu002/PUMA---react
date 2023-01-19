import {React, useEffect} from 'react'
import img0 from '../img/slider_0.jpg'
import img1 from '../img/slider_1.jpg'
import img2 from '../img/slider_2.jpg'
function Banner(props) {
  
  
  useEffect(() => {
    let slider = document.querySelector('.slider-banner-container');
    let sliderIndividual = document.querySelectorAll('.banner-img__container');

    let index = 1;
    let screenWidth = sliderIndividual[0].clientWidth;
    let interval = 3500;

    window.addEventListener('resize', function(params) {
        screenWidth = sliderIndividual[0].clientWidth;
    })

    

    function slidesAnimation() {
        slider.style.transform = 'translateX(-'+(screenWidth*index)+'px)'
        slider.style.transition = 'all 0.8s'
        index++

        if (index === sliderIndividual.length) {
          setTimeout(() => {
            slider.style.transform = 'translateX(0px)'
            slider.style.transition = 'none'
            index=1
          }, 1500);
        }
    }

    return () => {
      setInterval(() => {
        slidesAnimation()
    }, interval);
    }
  }, [])
  

      return (
        <div className='banner'>

          <div className="slider-banner-container">
            <div className="banner-img__container">
              <img id="counter" className='banner-img' src={img0} alt="banner"  />
            </div>
            <div className="banner-img__container">
              <img id="counter" className='banner-img' src={img1} alt="banner"  />
            </div>
            <div className="banner-img__container">
              <img id="counter" className='banner-img' src={img2} alt="banner"  />
            </div>
            <div className="banner-img__container">
              <img id="counter" className='banner-img' src={img0} alt="banner"  />
            </div>
          </div>

        </div>
      )
}

export default Banner