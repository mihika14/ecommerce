import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import './Carousel.css'

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [], 
    };
  }
 
  componentDidMount() {   
    axios
      .get('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization: 'Client-ID o9lDrIy6UiUPnjYJg7I_RRpW9T7D_BQMYR6aKIm_EVE',
        },
        params: {
          count: 10, 
          orientation: 'landscape',
          collections: "6HUyWDwudig"
        },
      })
      .then((response) => {
      
        const images = response.data.map((item) => item.urls.regular);
        this.setState({ images });
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }

  render() {
    const { images } = this.state;

    return (
      <Carousel>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
            <p className="legend">{`Legend ${index + 1}`}</p>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default HomeCarousel;
