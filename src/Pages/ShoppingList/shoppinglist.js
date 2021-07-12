/*import React,{useState} from  'react';
import Card from '../../Components/Card/card';
import './shoppinglist.css';

export default function ShoppingList(){

  const list=[
    {
      id:1,
      nome:'Pizza',
      marca:'Sadia',
      preco:'R$12.66'
    },
    {
      id:2,
      nome:'Café',
      marca:'Pilão',
      preco:'R$12.66'
    },
    {
      id:3,
      nome:'Refrigerante',
      marca:'Coca-Cola',
      preco:'R$12.66'
    },
    {
      id:4,
      nome:'Detergente',
      marca:'Limpol',
      preco:'R$12.66'
    },
    {
      id:5,
      nome:'Leite',
      marca:'Elegê',
      preco:'R$12.66'
    }
  ];

  const renderList = list.map((item,index)=>(
    <li key={index}>
      <Card  data={item}/>
    </li>
    ));

  return(
    <div className='container'>
      <div className='title-container'>
        <h1>Lista de compras</h1>
      </div>
      <div>     
        <ul>
        {renderList}
        </ul>
      </div>
    </div>
    );
}
*/


import React,{useState} from  'react';
import Card from '../../Components/Card/card';
import {AiFillPlusCircle} from 'react-icons/ai';

import './shoppinglist.css';

export default function ShoppingList(){

  const [name,setName]=useState();
  const [brand,setBrand]=useState();
  const [price,setPrice]=useState();

  const addHandler=()=>{
    const newItem={id:7,nome:name,marca:brand,preco:price}
    const newList=list.concat(newItem)
    setList(newList)
  }

  const oldList=[
    {
      nome:'Pizza',
      marca:'Sadia',
      preco:'R$12.66'
    },
    {
      nome:'Café',
      marca:'Pilão',
      preco:'R$12.66'
    },
    {
      nome:'Refrigerante',
      marca:'Coca-Cola',
      preco:'R$12.66'
    },
    {
      nome:'Detergente',
      marca:'Limpol',
      preco:'R$12.66'
    },
    {
      nome:'Leite',
      marca:'Elegê',
      preco:'R$12.66'
    }
  ];

  const [list,setList]=useState(oldList)


  const renderList = list.map((item,index)=>(
    <li key={index}>
      <Card  data={item}/>
      
    </li>
    ));
  return(
    <div className='container'>
      <div className='title-container'>
        <h1>Lista de compras</h1>
      </div>
      <div>     
        <ul>
        {renderList}
        </ul>
      </div>
      <div className='add-container'>
        <div className='input-container'>
        <input placeholder='Nome' onChange={(e)=>setName(e.currentTarget.value)}/>
        <input placeholder='Marca' onChange={(e)=>setBrand(e.currentTarget.value)}/>
        <input placeholder='Preço' onChange={(e)=>setPrice(e.currentTarget.value)}/>
        </div>
        
        <button onClick={addHandler}>
          <div className='button-container'>
          <AiFillPlusCircle/>Adicionar
          </div>
        </button>
      </div>
    </div>
    );
}


