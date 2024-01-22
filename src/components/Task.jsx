// Importation des bibliothèques et des composants nécessaires
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { MdDeleteOutline, MdMode } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import { editStateTask, deleteTask, editTask } from '../redux/actions';
import { GrPowerReset } from "react-icons/gr";

export default function Task({ id, description, isDone, dispatch }) {
    // State pour gérer la couleur de l'état de la tâche
    const [colorEtat, setColorEtat] = useState('border-warning');
    // State pour gérer l'affichage du modal
    const [show, setShow] = useState(false);
    // State pour gérer la description modifiée dans le modal
    const [desc, setDesc] = useState(description);

    // Fonction pour fermer le modal
    const handleClose = () => setShow(false);
    // Fonction pour ouvrir le modal
    const handleShow = () => setShow(true);

    // Effet pour mettre à jour la couleur de l'état en fonction de la propriété isDone
    useEffect(() => {
        if (isDone) {
            setColorEtat('border-success');
        } else {
            setColorEtat('border-warning');
        }
    }, [isDone]);

    // Classe CSS calculée en fonction de la couleur de l'état
    const classNameEffect = 'container p-2 border ' + colorEtat + ' rounded text-white mx-auto mb-2';

    // Fonction pour marquer la tâche comme terminée ou non terminée
    const handleSuccess = () => {
        dispatch(editStateTask(id));
    };

    // Fonction pour supprimer la tâche
    const handleDelete = () => {
        dispatch(deleteTask(id));
    };

    // Fonction pour éditer la tâche
    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editTask(id, desc));
        handleClose();
    };

    return (
        <div key={id} className={classNameEffect}>
            <div className="row">
                <div className="col-md-8 align-self-center">
                    {description ?? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, rem. Necessitatibus commodi'}
                </div>
                <div className="col-md-4 d-flex justify-content-evenly">
                    <Button variant="primary" onClick={handleShow}>
                        <MdMode />
                    </Button>
                    {/* Condition pour afficher le bouton de réinitialisation ou le bouton de confirmation en fonction de l'état de la tâche */}
                    {isDone ? (
                        <Button variant="warning" onClick={handleSuccess}>
                            <GrPowerReset />
                        </Button>
                    ) : (
                        <Button variant="success" onClick={handleSuccess}>
                            <FaCheck />
                        </Button>
                    )}
                    <Button variant="danger" onClick={handleDelete}>
                        <MdDeleteOutline />
                    </Button>
                </div>
            </div>
            {/* Modal pour éditer la tâche */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Form onSubmit={(e) => handleEdit(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modifier Tâche</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description de la Tâche</Form.Label>
                            {/* Champ de saisie pour la description modifiée */}
                            <Form.Control
                                type="text"
                                placeholder="Modifier Tâche"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* Bouton pour soumettre le formulaire et modifier la tâche */}
                        <Button variant="primary" type="submit">
                            <MdMode /> Modifier Tâche
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}
