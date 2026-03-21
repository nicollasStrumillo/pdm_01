import { useState } from 'react'
import CardPersonagem from './CardPersonagem'

function App() {
  const [nome, setNome] = useState('')
  const [classe, setClasse] = useState('Guerreiro')
  const [nivel, setNivel] = useState(1)
  
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
      Criador de Personagem RPG
      </h2>
      <div className="mb-3">
        <label className="form-label">
        Nome do Personagem
        </label>
        <input
          type="text"
          className="form-control"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Classe
        </label>
        <select
          className="form-select"
          value={classe}
          onChange={(e) => setClasse(e.target.value)}
        >
          <option>Guerreiro</option>
          <option>Mago</option>
          <option>Arqueiro</option>
          <option>Curandeiro</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Nível
        </label>
        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-outline-primary"
            onClick={() => setNivel(Math.max(1, nivel - 1))}
          >
            -
          </button>
          <span className="fs-5 fw-bold px-3">{nivel}</span>
          <button
            className="btn btn-outline-primary"
            onClick={() => setNivel(Math.min(20, nivel + 1))}
          >
            +
          </button>
        </div>
      </div>

    </div>
  )
}
export default App