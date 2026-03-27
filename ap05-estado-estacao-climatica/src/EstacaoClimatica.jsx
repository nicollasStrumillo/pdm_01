import { useEffect, useState } from "react"

const EstacaoClimatica = ({ icone, estacao, latitude, longitude, obterLocalizacao }) => {
    const [dataAtual, setDataAtual] = useState(null)

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Timer executando...')
            setDataAtual(new Date().toLocaleString())
        }, 1000)
        
        return () => clearInterval(interval)
    }, [])

    return (
    <div className="card">
        <div className="card-body">

            <div 
            style={{height: '6rem'}}
            className="d-flex align-items-center">
                {/* i.fa-solid.fa-3x */}
                <i className={`fa-solid fa-3x fa-${icone}`}></i>
                {/* p.w-75.ms-3.text-center.fs-1 */}
                <p className="w-75 ms-3 text-center fs-1">
                {estacao}
                </p>
            </div>

            <div>
            <p className="text-center">
                {
                latitude ? 
                    `Coordenadas: ${latitude},${longitude}. Data: ${dataAtual}`  
                    :
                    'Clique no botão para ver a sua estação climática.'
                }
            </p>
            </div>
            <button 
            className='btn btn-outline-primary w-100 mt-2'
            onClick={() => obterLocalizacao()}>
                Qual a minha estação?
            </button>
        </div>
    </div>
  )
}

export default EstacaoClimatica