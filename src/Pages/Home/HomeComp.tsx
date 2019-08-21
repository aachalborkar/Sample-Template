import React from 'react';
import './HomeComp.css';
import '../Boostrap.css';
import Header from './Header/HeaderComp';
import BusinesBlock from './BusinesBlock/BusinesBlock'
import Cards from './Cards/CardsComp'
import Footer from './Footer/FooterComp'


export default class Home extends React.Component{
render(){
  return(
    <>
      <h1>Aaachal</h1>
      <div className="container">
      <Header/>
      <BusinesBlock/>
      <Cards/>
      </div>
      <Footer/>
    </>
  )
}
}


