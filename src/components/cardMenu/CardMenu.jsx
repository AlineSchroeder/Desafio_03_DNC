import React from 'react';
import '../../global.scss';
import { Link } from 'react-router-dom';

const CardMenu = ({ data, type }) => {
  return (
    <div className='CardMenupen'>
      <h2>Otimize seu tempo e se organize com o nosso Planejador Diário.</h2>
        <div className='Card'>
          <h2>{`Deseja ${type} esse item?`}</h2>
          <p>{data.description}</p>
          <div className='Card__button'>
            <Link to={"/"}><button type='submit' className='Card__button Card__button--blue'>Não</button></Link>
            <button type='submit' className='Card__button Card__button--white'>Sim</button>
          </div>
        </div>
    </div>
  )
}

export default CardMenu