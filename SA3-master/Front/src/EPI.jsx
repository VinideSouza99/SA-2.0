import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'

export default function EpiDetalhes() {

    const { id } = useParams()
    const [epi, setEPI] = useState('')
    const [error, setError] = useState('')
    const [mensagem, setMensagem] = useState('')

    const carregarEPI = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/epi/${id}`)
            setEPI(response.data)
        } catch (error) {
            setError('Erro ao carregar EPI');
            console.error('Erro ao carregar EPI:', error.response || error)
        }
    }
    
    useEffect(() => {
        carregarEPI()
    }, [id])

    const apagarEpi = async () => {
        const senhaConfirmacao = window.prompt("Digite a senha do administrador para confirmar a exclusão:")

        if (!senhaConfirmacao) {
            setMensagem('Exclusão cancelada. Senha não fornecida.')
            return
        }

        try {
            // Envia a requisição para apagar o funcionário com a senha do administrador
            const respostaExcluir = await axios.delete(`http://localhost:3000/apagar_epi/${id}`, {
                data: { senha: senhaConfirmacao } // A senha é enviada no corpo da requisição
            })
            setMensagem(respostaExcluir.data)
        } catch (error) {
            console.error("Erro ao excluir funcionário:", error)
            setMensagem('Erro ao excluir funcionário')
        }
    }


    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className="epi-detalhes-container">
            {epi ? (
            <>
                <p className="epi-detalhes-item">Nome: {epi.nome}</p>
                <p className="epi-detalhes-item">Quantidade: {epi.quantidade}</p>
                <p className="epi-detalhes-item">ID: {epi.id}</p>
            </>
            ) : (
            <p className="epi-not-found">EPI não encontrado.</p>
            )}

            <div className="botoes-container">
                <Link to={`/atualizar_epi/${id}`}>
                    <button className="epi-form-button">Atualizar</button>
                </Link>
                <Link to={`/registro/epi`}>
                    <button className="epi-form-button3">Registro</button>
                </Link>
                <button type="button" onClick={apagarEpi} className="epi-form-button2">Excluir</button>
            </div>
        </div>
    )
}
