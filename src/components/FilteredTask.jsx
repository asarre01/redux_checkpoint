// Importation des bibliothèques et des composants nécessaires
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { changeFilter } from '../redux/actions';

export default function FilteredTask({ filter, dispatch }) {
    // Fonction pour gérer le clic sur un bouton et envoyer l'action correspondante
    const handleButtonClick = (value) => {
        dispatch(changeFilter(value));
    };

    return (
        // Conteneur pour les boutons de filtre
        <div className='container m-3'>
            {/* Bouton "Tous" */}
            <Button
                className='mx-2'
                variant={filter === '' ? 'primary' : 'outline-primary'}
                onClick={() => handleButtonClick('')}
            >
                Tous
            </Button>

            {/* Bouton "Terminé" */}
            <Button
                className='mx-2'
                variant={filter === true  ? 'success' : 'outline-success'}
                onClick={() => handleButtonClick(true)}
            >
                Terminé
            </Button>

            {/* Bouton "En cours" */}
            <Button
                className='mx-2'
                variant={filter === false ? 'warning' : 'outline-warning'}
                onClick={() => handleButtonClick(false)}
            >
                En cours
            </Button>
        </div>
    );
}
