// Importation des bibliothèques et des composants nécessaires
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoMdAdd } from 'react-icons/io';
import Form from 'react-bootstrap/Form';
import { addTask } from '../redux/actions';

function AddTask({ dispatch, tasks }) {
    // State pour contrôler l'affichage de la modal
    const [show, setShow] = useState(false);

    // State pour stocker les données du formulaire
    const [formData, setFormData] = useState({
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        description: '',
        isDone: false,
    });

    // Fonction pour fermer la modal
    const handleClose = () => setShow(false);

    // Fonction pour ouvrir la modal
    const handleShow = () => setShow(true);

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Vérifier si la description n'est pas vide
        if (formData.description.trim() !== '') {
            // Envoyer l'action pour ajouter une nouvelle tâche avec les données du formulaire
            dispatch(addTask(formData));
            
            // Réinitialiser le formulaire
            setFormData({
                id: tasks.length + 1,
                description: '',
                isDone: false,
            });
            
            // Fermer la modal
            handleClose();
        }
    };

    return (
        <>
            {/* Bouton d'ajout de tâche */}
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" className="fw-bold" onClick={handleShow}>
                    <IoMdAdd /> Ajouter Tâche
                </Button>
            </div>

            {/* Modal pour ajouter une tâche */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter Tâche</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Formulaire de saisie de la description de la tâche */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description de la Tâche</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ajouter Tâche"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* Bouton pour soumettre le formulaire */}
                        <Button variant="primary" type="submit">
                            <IoMdAdd /> Ajouter Tâche
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default AddTask;
