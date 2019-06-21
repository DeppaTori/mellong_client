import React from 'react';

export interface Props{
    name:String;
    enthusiasmLevel?:number;
}

function Hello({name,enthusiasmLevel=1}:Props){
    if(enthusiasmLevel <= 0){
        throw new Error('You could be a little more enthuasiastic. :D ');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name}
            </div>
        </div>
    )
}

export default Hello;