import React, {useEffect, useState} from 'react'

import axios from 'axios';
import Footer from '../../components/Footer/footer';
// import vegetables3 from '../../assets/vegetables3.jpg';
// import brigitte from '../../assets/brigitte.jpg';
// import pasta from '../../assets/pasta.jpg';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';

const Explore = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const [randomList, setRandom] = useState([]);

    useEffect( () => {
        getRandom();
    }, [])

    const getRandom = async () => {
        // const random = await axios.get(`https://api.spoonacular.com/recipes/random${apiKey}&number=3`);
        console.log(random.data.recipes, 'recetas aleatorias');

        const randomRecipes = random.data.recipes;
        setRandom({randomList: randomRecipes});
        console.log({randomList}, 'lista random')
        console.log(randomList, 'lista random')
        const random1 = randomRecipes[0];
        console.log(random1, 'this is random1')
        const random2 = randomRecipes[1];
        const random3 = randomRecipes[2];

       
    };

    const items = [
        {
          src: {},
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src: {},
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src: {},
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
    ];

      const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }
    
      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} style={{width: '100%', height: '30em'}}/>
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

    return (
        <div className="explore-main-container">
            <div className="carousel-container">
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </div>
            <div className="footer-container">
                <Footer/>
            </div>
            
        </div>

    )
}


export default Explore;
