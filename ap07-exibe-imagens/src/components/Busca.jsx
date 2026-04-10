//rcc
import React, { Component } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
        

export default class Busca extends Component {
    state = {
        termoBusca:  ''
    }

    onTermoAlterado = (evento) => {
        this.setState({
            termoBusca: evento.target.value
        })
    }

    onFormSubmit = (evento) => {
        evento.preventDefault()
        this.props.onBuscaRealizada(this.state.termoBusca)
    }

    render() {
        return (
        <form onSubmit={this.onFormSubmit}>
            <div className='flex flex-column'>
                <div>Busca</div>
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search"> </InputIcon>
                    <InputText 
                        className='w-full' 
                        value={this.state.termoBusca}
                        placeholder="O que você está procurando..." 
                        onChange={this.onTermoAlterado}
                    />
                </IconField>

                <Button 
                    label="Buscar" 
                    className='p-button-outlined mt-2'
                />
            </div>
        </form>
        )
    }
}
