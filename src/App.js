import React, { Component } from 'react';

import './custom.css'
import requisicao from './Api'

export default class App extends Component {
    state = {
        dados: []
    }

    //chamado imediatamente após alguma atualização ocorrer
    async componentDidMount() {
        const retorno = await requisicao.get('');
        this.setState({ dados: retorno.data });
    }

    render() {
        const { dados } = this.state;
        return (
            <div id="lista">
                {console.log(dados)}
                {dados.map(usr => (
                    <span id={usr.Id} key={usr.Id}>
                        <div className="nome">Nome: {usr.Nome}</div>
                        <div className="email">E-Mail: {usr.Email}</div>
                        <div className="nascimento">Nascimento: {usr.Nascimento}</div>
                        <div className="ra">R.A: {usr.Ra}</div>
                        <div className="senha">Senha: {usr.Senha}</div>
                        <hr></hr>
                    </span>
                )
                )}
            </div>
        );
    }

}