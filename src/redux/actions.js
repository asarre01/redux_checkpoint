// Action pour ajouter une nouvelle tâche
export const addTask = (newTask) => ({
    type: 'ADD_TASK',
    payload: newTask,
});

// Action pour basculer l'état (terminé/non terminé) d'une tâche spécifiée
export const editStateTask = (idTask) => ({
    type: 'EDIT_STATE_TASK',
    payload: idTask,
});

// Action pour éditer la description d'une tâche spécifiée
export const editTask = (idTask, newDescription) => ({
    type: 'EDIT_TASK',
    payload: {
        id: idTask,
        newDescription: newDescription,
    },
});

// Action pour supprimer une tâche spécifiée
export const deleteTask = (idTask) => ({
    type: 'DELETE_TASK',
    payload: idTask,
});

// Action pour changer le filtre d'affichage des tâches (toutes, terminées, en cours)
export const changeFilter = (filter) => ({
    type: 'CHANGE_FILTER',
    payload: filter,
});
