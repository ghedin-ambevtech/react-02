import React, {Component} from 'react';

class MeuComponente extends Component{
    constructor(props) {
        super(props)
        this.state = {numero: 5}
        console.log('construtor..');
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps');
        // console.log(`props: ${props}`);
        // console.log(`state: ${state}`);
        return null // com isso retorna o que já recebeu, sem alteração
    }

    // esse é o ultimo a executar quando monatmos a tela
    // a ordem é construtor, getDerived, render e componentDidMount
    componentDidMount(){
        console.log('ComponentDidMount');
    }

    adicionarNumero() {
        let NumeroAtual = this.state.numero
        NumeroAtual += 1
        this.setState({numero: NumeroAtual})
    }

    render(){
        console.log('render..');
        return(
        <div>
            <p>Componente!!!</p>
            <p>{this.state.numero}</p>
            <p>{this.props.titulo}</p>
            <button onClick={this.adicionarNumero.bind(this)}>Adicionar</button>
        </div>
        )
    }
}

export default MeuComponente;