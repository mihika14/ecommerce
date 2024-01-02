import React, { Component } from "react";
import axios from "axios";
import "./ProductCard.css";
import Cart from "../Cart/Cart";
import { Button, Icon } from "semantic-ui-react";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      electronicsImages: [],
      clothesImages: [],
      homeImages: [],
      babyImages: [],
      fashionImages: [],
      cartItems: [],
      pendingCartItems: [],
    };
  }

  componentDidMount() {
    const accessKey = "o9lDrIy6UiUPnjYJg7I_RRpW9T7D_BQMYR6aKIm_EVE";

    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: "electronics",
          client_id: accessKey,
        },
      })
      .then((response) => {
        const firstTwoImages = response.data.results.slice(0, 8);
        this.setState({ electronicsImages: firstTwoImages });
      })
      .catch((error) => {
        console.error("Error fetching electronics images:", error);
      });

    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: "clothes",
          client_id: accessKey,
        },
      })
      .then((response) => {
        const ClothesnewImages = response.data.results.slice(0, 8);
        this.setState({ clothesImages: ClothesnewImages });
      })
      .catch((error) => {
        console.error("Error fetching electronics images:", error);
      });

    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: "furniture",
          client_id: accessKey,
        },
      })
      .then((response) => {
        const HomenewImages = response.data.results.slice(0, 8);
        this.setState({ homeImages: HomenewImages });
      })
      .catch((error) => {
        console.error("Error fetching electronics images:", error);
      });

    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: "toys",
          client_id: accessKey,
        },
      })
      .then((response) => {
        const babynewImages = response.data.results.slice(0, 8);
        this.setState({ babyImages: babynewImages });
      })
      .catch((error) => {
        console.error("Error fetching baby images:", error);
      });

    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: "makeup",
          client_id: accessKey,
        },
      })
      .then((response) => {
        const FashionewImages = response.data.results.slice(0, 8);
        this.setState({ fashionImages: FashionewImages });
      })
      .catch((error) => {
        console.error("Error fetching electronics images:", error);
      });
  }

  generateRandomPrice() {
    return Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000;
  }

  addToCart(item) {
    axios
      .post("http://localhost:5000/additem", { price: item.price })
      .then((response) => {
        if (response.status === 200) {
          this.setState((prevState) => ({
            cartItems: [...prevState.cartItems, item],
          }));
        }
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  }

  render() {
    return (
      <div>
        <h2 className="product-header">Best Deals in Electronics</h2>
        <div className="productcard-container">
          {this.state.electronicsImages.map((image, index) => (
            <div className="product-card" key={index}>
              <img
                className="product-image"
                src={image.urls.small}
                alt={image.alt_description}
              />
              <div className="product-details">
                <span className="product-price">
                  ₹{this.generateRandomPrice()}
                </span>
                <button
                  className="product-button c-button" 
                  onClick={() =>
                    this.addToCart({ price: this.generateRandomPrice() })
                  }
                >
                  <span className="c-main">
                    <span className="c-ico">
                      <span className="ico-text">+</span>
                    </span>
                    Add to Cart
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="product-header">Flat 20% off on Home Decor</h2>
        <div className="productcard-container">
          {this.state.homeImages.map((image, index) => (
            <div className="product-card" key={index}>
              <img
                className="product-image"
                src={image.urls.small}
                alt={image.alt_description}
              />
              <span className="product-price">
                ₹{this.generateRandomPrice()}
              </span>
              <button
                  className="product-button c-button" 
                  onClick={() =>
                    this.addToCart({ price: this.generateRandomPrice() })
                  }
                >
                  <span className="c-main">
                    <span className="c-ico">
                      <span className="ico-text">+</span>
                    </span>
                    Add to Cart
                  </span>
                </button>
            </div>
          ))}
        </div>

        <h2 className="product-header">Newly Arrived</h2>
        <div className="productcard-container">
          {this.state.clothesImages.map((image, index) => (
            <div className="product-card" key={index}>
              <img
                className="product-image"
                src={image.urls.small}
                alt={image.alt_description}
              />
              <span className="product-price">
                ₹{this.generateRandomPrice()}
              </span>
              <button
                  className="product-button c-button" 
                  onClick={() =>
                    this.addToCart({ price: this.generateRandomPrice() })
                  }
                >
                  <span className="c-main">
                    <span className="c-ico">
                      <span className="ico-text">+</span>
                    </span>
                    Add to Cart
                  </span>
                </button>
            </div>
          ))}
        </div>

        <h2 className="product-header">In Collab with Nykaa</h2>
        <div className="productcard-container">
          {this.state.fashionImages.map((image, index) => (
            <div className="product-card" key={index}>
              <img
                className="product-image"
                src={image.urls.small}
                alt={image.alt_description}
              />
              <span className="product-price">
                ₹{this.generateRandomPrice()}
              </span>
              <button
                  className="product-button c-button" 
                  onClick={() =>
                    this.addToCart({ price: this.generateRandomPrice() })
                  }
                >
                  <span className="c-main">
                    <span className="c-ico">
                      <span className="ico-text">+</span>
                    </span>
                    Add to Cart
                  </span>
                </button>
            </div>
          ))}
        </div>

        <h2 className="product-header">Toys & more</h2>
        <div className="productcard-container">
          {this.state.babyImages.map((image, index) => (
            <div className="product-card" key={index}>
              <img
                className="product-image"
                src={image.urls.small}
                alt={image.alt_description}
              />
              <div className="product-details">
                <span className="product-price">
                  ₹{this.generateRandomPrice()}
                </span>
                <button
                  className="product-button c-button" 
                  onClick={() =>
                    this.addToCart({ price: this.generateRandomPrice() })
                  }
                >
                  <span className="c-main">
                    <span className="c-ico">
                      <span className="ico-text">+</span>
                    </span>
                    Add to Cart
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductCard;
