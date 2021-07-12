import React from 'react';
import './card.css'
export default function Card({data}){
  return(
      <div className='card-container'>
        <h3>
          <strong className='card-title'>Produto</strong>: {data.nome}
        </h3>
        <h3>
          <strong className='card-title'>Marca</strong>: {data.marca}
        </h3>
        <h3>
          <strong className='card-title'>Preço</strong>: {data.preco}
        </h3>
      </div>
  );
}