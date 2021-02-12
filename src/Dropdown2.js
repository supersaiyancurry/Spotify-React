import React, { useState } from 'react';
import { styles } from './Dropdown2.css';
import itunes from './itunes.jpg';
import spotify from './spotify.png';

const Dropdown2 = props => {    
    const [name, setName] = useState(''); 
    
    const assignId = e => {
        props.changed(e.target.id);
        // props.changed(e.target.name);
        setName({
            name: e.target.getAttribute("name")
        });
        const v = e.target.getAttribute("name");
        console.log(v);
    }

    return (
        <div className='container-fluid'>
            
            <br />
            <br />
            <br />
            <br />
            <div className='row'>
            <img className='column .col- buy' src={itunes} alt='...' />
            <img className='column buy' src={spotify} alt='...' />
            </div>
            
            <div style={{}}>
                
            <button class='invisible' value={props.selectedValue} onClick={assignId}>
                {console.log(props.options[0])}
                {props.options.map((item, idx) => <img
                className='visible' 
                src={item.images[0].url} 
                key={idx + 1} 
                value={item.id} 
                id={item.id} 
                name={item.name}
                artist={item.artists[0].name}
                alt='...'
                />)}
            </button> 
            </div>
            <br />
            
            
            <div className='albumHeader'>
                <h3 >{name.name}</h3>
            </div>
        </div>
    );
}

export default Dropdown2;