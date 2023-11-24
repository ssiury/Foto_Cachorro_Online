import './Troll.css'
import { useState, useRef, useLayoutEffect } from 'react';
const Troll = () => {

    const [adjetivo, setAdjetivo] = useState("");

    const adjetivos=['maconheiro','cracudo','tiktoker','mendigo','pidão', 'homoafetivo','analfabeto','traveco','estelionatario','agiota','de bar','prostituto','misogino','cafetão'];

    let imagens = {
        img1: 'https://source.unsplash.com/260x260/?dog-funny',
        img2: 'https://source.unsplash.com/260x260/?dog-fun',
    }
    const trocarimagem = () => {
        setImagem(state => state === 'img1' ? 'img2': 'img1');
    }

    const [imagem, setImagem] = useState('');

    const changeImage = ()=>{

        var numero_aleatorio = Math.random();

        numero_aleatorio = Math.floor(numero_aleatorio * 13);

        setAdjetivo("Cachorro " + adjetivos[numero_aleatorio]);

        trocarimagem();
    }
    
        return (
            <div className='Troll'>
                <div className="container-Troll">
                    <p>Se você fosse um cachorro qual seria?</p>
                    <button className='Botao' onClick={changeImage}>Click Aqui</button>
                    <div className='image'>
                        <img src={imagens[imagem]} className="img"/>
                    </div>
                    <div className="frase">
                        <p>{adjetivo}</p>
                    </div>
                </div>
            </div>
        );
    
};

export default Troll