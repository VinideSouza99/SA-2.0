import React from 'react'
import { Link } from 'react-router-dom'

export default function Inicial() {


    return (
        <div className='inicial_tela'>
            <div className='inicial_cabecalho'>
                <h1 className='inicial_titulo'>EPI Center</h1>
                <div>
                    <Link to={`/funcionario/cadastro`}  >
                        <button className='inicial_cabecalho_bt'>
                            Cadastrar Funcionário
                        </button>
                    </Link>
                    <Link to={`/epi/cadastro`}  >
                        <button className='inicial_cabecalho_bt'>
                            Cadastrar EPI
                        </button>
                    </Link>
                </div>
            </div>
            <div className='inicial_campo_lista'>
                <Link to={`/lista_funcionarios`}  >
                    <button className='inical_bt_lista'> Funcionários </button>
                </Link>
                <Link to={`/lista_EPIs`} >
                    <button className='inical_bt_lista'> EPI's</button>
                </Link>
            </div>

        </div>
    )
}
