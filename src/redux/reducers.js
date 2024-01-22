// Reducteur pour gérer les actions liées aux tâches
const taskReducers = (state = { tasks: [], filter: '' }, action) => {
    switch (action.type) {
        // Ajouter une nouvelle tâche à la liste des tâches
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };

        // Basculer l'état (terminé/non terminé) d'une tâche spécifiée
        case 'EDIT_STATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, isDone: !task.isDone } : task
                ),
            };

        // Éditer la description d'une tâche spécifiée
        case 'EDIT_TASK':
            const { id, newDescription } = action.payload;
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === id ? { ...task, description: newDescription } : task
                ),
            };

        // Supprimer une tâche spécifiée de la liste des tâches
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };

        // Changer le filtre d'affichage des tâches (toutes, terminées, en cours)
        case 'CHANGE_FILTER':
            const newFilter = action.payload;
            return {
                ...state,
                filter: newFilter,
            };

        // Cas par défaut : retourner l'état inchangé
        default:
            return state;
    }
};

export default taskReducers;
