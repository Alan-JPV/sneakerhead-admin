import React from 'react'
import myImage from '../components/shoe22.png'
import myImage2 from '../components/b1_shoe.png'
import myImage3 from '../components/p3.png'
import myImage4 from '../components/p4.png'
import { Helmet } from 'react-helmet'

import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS


import './main.css'
import { Link } from 'react-router-dom';
const b5={
  fontFamily: 'Impact',
  fontSize: '500px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  background: 'linear-gradient(180deg, #75A9CF 0%, #003C80 100%)',
  backgroundClip: 'text',
  webkitBackgroundClip: 'text',
  webkitTextFillColor: 'transparent',
}
const b10={
  position:'center',
  borderRadius: '10px',
  justifyContent: 'space-between',
  fontSize: '30px',
  color:'black',
  padding: '10px',
  marginLeft:'650px'
}
const ProList = (props) => {
  return (

    <div className="products">
            <div className="container">
                <h1 className="lg-title">LATEST ARRIVALS </h1>
                <div className="product-items">
                  {/*product 1*/}
                        <div  className="product">
                            <div className="product-content">
                                <div className="product-img">
                                    <img src={myImage} alt="product image" />
                                </div>
                                <div className="product-btns">
                                    <button type="button" className="btn-cart">
                                        add to cart <span><i className="fas fa-plus"></i></span>
                                    </button>
                                    <button type="button" className="btn-buy">
                                        buy now <span><i className="fas fa-shopping-cart"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <a href="#" className="product-name">sample product</a>
                                <p className="product-price">$ 150.00</p>
                                <p className="product-price">$ 133.00</p>
                            </div>
                        </div>
                  {/*product 2 */}
                  <div  className="product">
                            <div className="product-content">
                                <div className="product-img">
                                    <img src={myImage2} alt="product image" />
                                </div>
                                <div className="product-btns">
                                    <button type="button" className="btn-cart">
                                        add to cart <span><i className="fas fa-plus"></i></span>
                                    </button>
                                    <button type="button" className="btn-buy">
                                        buy now <span><i className="fas fa-shopping-cart"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <a href="#" className="product-name">sample product</a>
                                <p className="product-price">$ 150.00</p>
                                <p className="product-price">$ 133.00</p>
                            </div>
                        </div>
                  {/*product 3 */}
                  <div  className="product">
                            <div className="product-content">
                                <div className="product-img">
                                    <img src={myImage3} alt="product image" />
                                </div>
                                <div className="product-btns">
                                    <button type="button" className="btn-cart">
                                        add to cart <span><i className="fas fa-plus"></i></span>
                                    </button>
                                    <button type="button" className="btn-buy">
                                        buy now <span><i className="fas fa-shopping-cart"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <a href="#" className="product-name">sample product</a>
                                <p className="product-price">$ 150.00</p>
                                <p className="product-price">$ 133.00</p>
                            </div>
                        </div>
                   {/*product 4 */}
                  <div  className="product">
                            <div className="product-content">
                                <div className="product-img">
                                    <img src={myImage4} alt="product image" />
                                </div>
                                <div className="product-btns">
                                    <button type="button" className="btn-cart">
                                        add to cart <span><i className="fas fa-plus"></i></span>
                                    </button>
                                    <button type="button" className="btn-buy">
                                        buy now <span><i className="fas fa-shopping-cart"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <a href="#" className="product-name">sample product</a>
                                <p className="product-price">$ 150.00</p>
                                <p className="product-price">$ 133.00</p>
                            </div>
                        </div>
                         
                    <div style={{  justifyContent:'center',alignSelf:'center',}}>
                    </div>
                </div>
                <Link to ='/product'><button style={b10}>view more ➡️</button></Link>
            </div>
            </div>
            // </div>
  )
}

export default ProList
