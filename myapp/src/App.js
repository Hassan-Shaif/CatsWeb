import React, { Component } from 'react'
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Count from "./components/Count";
import Compon1 from "./components/Compon1";
import img from "./images/logo.png"
import catImg from "./images/cat.jpg"
import cat2 from "./images/cat2.jpeg"
import cat4 from "./images/cat4.jpeg"
import cat3 from "./images/cat3.jpeg"
import cat5 from "./images/cat5.jpg"




//
//function App() {
//  return (
//   <div className="body">
//        <Navbar/>
//        <Header/>
//        <MainContent/>
//        <Footer/>
//   </div>
//    );
//};


export default class App extends Component {
constructor(props) {
    super(props);
    this.state = {
        isShow:true,

    }
    }
togel = () => {
    this.setState({
         isShow :!this.state.isShow,

    })
}
    render(){
    return (
     <div className="body">
        <Navbar/>
        <Header/>
        <div className="togel-btn">
         <button onClick = {this.togel}>Show Content</button>
         <h1>{this.state.number}</h1>
         </div>
         <div className="main-content">
            <MainContent
              isShow = {this.state.isShow}
              img = {catImg}
              name ="Miao"
              phone = "9318409843"
              email = "miao.com"
            />
            <MainContent
              isShow = {this.state.isShow}
              img = {cat3}
              name ="Miao"
              phone = "9318409843"
              email = "miao.com"/>
            <MainContent
              isShow = {this.state.isShow}
              img = {cat4}
              name ="Miao"
              phone = "9318409843"
              email = "miao.com"/>
            <MainContent
              isShow = {this.state.isShow}
              img = {cat5}
              name ="Mi"
              phone = "931840980003"
              email = "miao@gmail.com"/>
            <MainContent
              isShow = {this.state.isShow}
              img = {cat5}
              name ="Miao"
              phone = "9318409843"
              email = "miao.com"/>
            <MainContent
            isShow = {this.state.isShow}
            img = {cat4}
            />
            <MainContent
            isShow = {this.state.isShow}
            img = {catImg}
            />
             <MainContent
            isShow = {this.state.isShow}
            img = {cat3}
            />
        </div>
        <Footer/>
    </div>
       )
  }
}


//export default App;
