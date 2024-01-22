// Importation des bibliothèques et des composants nécessaires
import React from 'react';
import { Image } from 'react-bootstrap';

export default function Nodata() {
    return (
        // Conteneur contenant les éléments pour montrer que y'a pas de données
        <div className='container d-flex flex-column'>
            <Image src="Nodata.png" width={'500px'} height={'500px'} className='mx-auto' />;
            <h1 className='text-white mx-auto'>
                ...ups! La liste des tâches est vide.
            </h1>
        </div>
    );
}
