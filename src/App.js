import React, { Component } from 'react';

import './custom.css'
import requisicao from './Api'

export default class App extends Component {
    state = {
        dados: []
    }

    //chamado imediatamente após alguma atualização ocorrer
    async componentDidMount() {
        const retorno = await requisicao.get("");
        this.setState({ dados: retorno.data.photos });
    }

    render() {
        const { dados } = this.state;
        return (
            <div id="lista">
                <span>dados</span>
                {console.log(dados)}
                {dados.map(foto => (
                    <span>
                        <div id={foto.id}>Data: {foto.earth_date}</div>
                        <img src={foto.img_src} />
                    </span>
                )
                )}
            </div>
        );
    }

}