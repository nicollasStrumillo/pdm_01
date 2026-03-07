import Pedidos from "./Pedido";
import Cartao from "./Cartao";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className='col-12'>
          <i className="fa-solid fa-hippo fa-2x"></i>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-3 ">
          <Cartao cabecalho="22/04/2024">
            <Pedidos 
              icone="book" 
              titulo="Livro" 
              descricao="Um livro bom..."
            />
          </Cartao>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3 ">
          <Cartao cabecalho="27/04/2024">
            <Pedidos 
              icone="bicycle" 
              titulo="Bicicleta" 
              descricao="Uma bicicleta..."
            />
          </Cartao>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3 ">
          <Cartao cabecalho="04/06/2024">
            <Pedidos 
              icone="camera" 
              titulo="Camera" 
              descricao="Camera 4k"
            />
          </Cartao>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3 ">
          <Cartao cabecalho="19/06/2024">
            <Pedidos             
              icone="headphones" 
              titulo="Fones" 
              descricao="Fones de ouvido"
            />
          </Cartao>
        </div>
      </div>
    </div>
  )
}

export default App;