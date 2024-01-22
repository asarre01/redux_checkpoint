// Importation des bibliothèques et des composants nécessaires
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './Task';
import { useState, useEffect } from 'react';
import Nodata from './Nodata';

export default function TaskList({ tasks, filter, dispatch }) {
    // State pour stocker les tâches filtrées
    const [filteredTask, setFilteredTask] = useState(tasks);

    // Effet pour mettre à jour les tâches filtrées en fonction du filtre
    useEffect(() => {
        let filtered = tasks; // initialise avec toutes les tâches
        if (filter !== '') {
            // Si un filtre est appliqué, filtre les tâches en conséquence
            filtered = tasks.filter(task => task.isDone === filter);
        }
        setFilteredTask(filtered);
    }, [tasks, filter]);

    return (
        <div>
            <div className='container min-h-50 py-2 border-top mb-2'>
                {filteredTask.length === 0 ? (
                    // Si aucune tâche filtrée n'est trouvée, affiche le composant Nodata
                    <Nodata />
                ) : (
                    // Sinon, map à travers les tâches filtrées et affiche chaque composant Task
                    filteredTask.map((task) => (
                        <Task key={task.id} {...task} dispatch={dispatch} />
                    ))
                )}
            </div>
        </div>
    );
}
