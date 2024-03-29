import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <img
          className='center'
          src='https://via.placeholder.com/150'
          alt='Logo Région Sud'
        />
      </div>
      <div className='contact'>
        <ul>
          <h3>REGION SUD PROVENCE-ALPES-CÔTE D'AZUR</h3>
          <h4>Hôtel de Région</h4>
          <li>27, place Jules Guesde</li>
          <li>13481 Marseille Cedex 20</li>
        </ul>
        <ul>
          <h4>Du lundi au vendredi</h4>
          <li>De 9h à 17h sans interruption</li>
          <li>04 91 57 50 57</li>
        </ul>
        <ul>
          <h4>Liens utiles</h4>
          <li>Subventions régionales</li>
          <li>Sud MMarchés Publics</li>
        </ul>
      </div>
      <button type='button' className='btn'>
        Contactez la région
      </button>
    </footer>
  );
};

export default Footer;
