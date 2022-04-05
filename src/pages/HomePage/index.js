import React from 'react';
import ImgPrinc from '../../img/imgPrinc.svg';
import './style.scss'

function HomePage() {
    return (
        <section className="container">
            <section className="container-conteudo">
                <h1 className="title">Lorem ipsum dolor sit amet</h1>
                <p className="paragrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
                <button className="button">Botão</button>
            </section>
                <img className="img-responsive" src={ImgPrinc} alt="caixas de presente com bichos parecidos com aliens" />
        </section>
    )
}

export default HomePage;