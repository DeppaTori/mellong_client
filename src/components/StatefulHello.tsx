import React,{Component} from 'react';

export interface Props{
    name:String;
    enthusiasmLevel?:number;
}

interface State{
    currentEnthusiasm:number;
}

class Hello extends Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state = {currentEnthusiasm:props.enthusiasmLevel || 1};
    }

    onIncrement = () => this.updateEnthuasiasm(this.state.currentEnthusiasm+1);
    onDecrement = () => this.updateEnthuasiasm(this.state.currentEnthusiasm-1);

    render(){
        const {name} = this.props;

        if(this.state.currentEnthusiasm <= 0){
            throw new Error('You could be a little more enthuastic. :D ');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name+getExclamationMarks(this.state.currentEnthusiasm)}
                </div>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        )
    };

    updateEnthuasiasm(currentEnthusiasm:number){
        this.setState({currentEnthusiasm});
    }

}

export default Hello;

function getExclamationMarks(numChars:number){
    return Array(numChars+1).join('!');
}