import { use } from "react"
import { useEffect } from "react"
import { useState } from "react"


const App = () => {
  const [texto, setTexto] = useState('')
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log('Função de efeito colateral executou sem vetor')
    return () =>{
      console.log('Limpeza executou')
    }
  })

  useEffect(() => {
    console.log('executou com vetor vazio')
  }, [])

  useEffect(
    () => {console.log('Função de efeito colateral executou. Dependencia: texto')}, 
  [texto])

  useEffect(() =>{
      console.log('Função de efeito colateral executou. Dependencia: contador')
  }, [contador])

  return (
    <div style={{padding: 20, borderColor: 'black', borderWidth: 1, borderStyle: 'solid', borderRadius: 8}}>
      <h2>Efeitos Colaterais</h2>
      <div>
        <input style={{padding: 8}} type="text" placeholder="Digite algo" value={texto} onChange={(e) => setTexto(e.target.value)}/>

      </div>
      <div style={{marginTop: 12}}>
        <button
          onClick={() => setContador(contador +1)}>
          Contador: {contador}
        </button>
      </div>
    </div>
  )
}

export default App