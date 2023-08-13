import { Component } from "react";

import Header from "../Header/Header";
import Main from "../Main/Input";
import Cards from "../Cards/Cards"

class App extends Component{
    render(){
        return(
            <>
            <Header />
            <Main />
            <Cards />
            </>
        )
    }
}

export default App