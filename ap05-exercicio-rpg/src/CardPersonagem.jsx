function CardPersonagem ({ nome, classe, nivel }) {
    const classesConfig = {
        Guerreiro: {
            icone: 'fa-shield-alt',
            cor: '#B43232'
        },
        Mago: {
            icone: 'fa-hat-wizard',
            cor: '#5032B4'
        },
        Arqueiro: {
            icone: 'fa-bullseye',
            cor: '#329632'
        },
        Curandeiro: {
            icone: 'fa-hand-holding-heart',
            cor: '#C8A020'
        }
    }
    
    const config = classesConfig[classe]
    const porcentagem = (nivel / 20) * 100
    
    return (
        <div className="card" style={{ borderColor: config.cor }}>
            <div className="card-body text-center">
                <i
                    className={`fas ${config.icone} fa-4x mb-3`}
                    style={{ color: config.cor }}
                ></i>
                <h3>{nome || 'Sem nome'}</h3>
                <p className="text-muted">{classe}</p>
                <p>Nível {nivel}</p>
                <div className="progress" style={{ height: '20px' }}>
                    <div
                        className="progress-bar"
                        style={{
                            width: `${porcentagem}%`,
                            backgroundColor: config.cor
                        }}
                    >
                        {Math.round(porcentagem)}%
                    </div>
                </div>
                <small className="text-muted">{nivel} / 20</small>
            </div>
        </div>
    )
}

export default CardPersonagem
