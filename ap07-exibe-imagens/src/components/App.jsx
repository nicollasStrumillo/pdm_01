// rafce 
import React from "react"
import Busca from "./Busca"
import { Component } from 'react'
import { createClient } from 'pexels'

class App extends Component {

  pexelsClient = null

  componentDidMount(){
    this.pexelsClient = createClient('jdlYOBT47z4ynKsCDg11I04zyr3ZfmFwLP2ZJ7AXZdhucG1tqhfNdjac')
  }

  onBuscaRealizada = (termoDeBusca) => {
    console.log(termoDeBusca)
  }

  render() {
    return (
      <div className="grid justify-content-center m-auto w-9 border-1">
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-12">
          <Busca 
            onBuscaRealizada={this.onBuscaRealizada}
          />
        </div>
      </div>
    )
  }
}

export default App

