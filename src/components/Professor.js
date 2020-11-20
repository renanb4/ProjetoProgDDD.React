import React, { Component } from 'react';
import requisicao from '../Api'
import '../style/Geral.css'
import { Table } from 'reactstrap';

export default class Professor extends Component {
    state = {
        dados: []
    }

    //chamado imediatamente após alguma atualização ocorrer
    async componentDidMount() {
        const retorno = await requisicao.get('professores');
        this.setState({ dados: retorno.data });
    }

    render() {
        const { dados } = this.state;
        return (
            <div id="lista">
                <Table dark striped hover responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>E-Mail</th>
                                <th>R.A</th>
                                <th>Senha</th>
                            </tr>
                        </thead>

                    {dados.map(usr => (
                    /*
                    <span id={usr.Id} key={usr.Id}>
                        <div className="nome">Nome: {usr.Nome}</div>
                        <div className="email">E-Mail: {usr.Email}</div>
                        <div className="nascimento">Nascimento: {usr.Nascimento}</div>
                        <div className="ra">R.A: {usr.Ra}</div>
                        <div className="senha">Senha: {usr.Senha}</div>
                        <hr></hr>
                    */
                    <tbody>
                        <tr id={usr.Id} key={usr.Id}>
                            <th scope="row">{usr.Id}</th>
                            <td className="nome">{usr.Nome}</td>
                            <td className="email">{usr.Email}</td>
                            <td className="ra">{usr.Ra}</td>
                            <td className="senha">{usr.Senha}</td>
                        </tr>
                    </tbody>
                    //</span>
                    ))}
                </Table>
            </div>

        );
    }

}