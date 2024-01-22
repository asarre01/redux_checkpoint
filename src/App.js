// Importation des bibliothèques et des composants nécessaires
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarApp from './components/NavBarApp';
import { useReducer } from 'react';
import Taskbd from './Taskbd';
import taskReducers from './redux/reducers';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import FilteredTask from './components/FilteredTask';

// Fonction principale de l'application
function App() {
    // Initialisation de l'état initial du magasin Redux
    const initialiseTask = {
        tasks: Taskbd,
        filter: '',
    };

    // Utilisation du hook useReducer pour créer le magasin Redux et obtenir l'état et la fonction de dispatch
    const [taskState, dispatch] = useReducer(taskReducers, initialiseTask);

    // Rendu de l'application avec les composants
    return (
        <div className="App bg-dark w-auto vh-100">
            <div className='container'>
                {/* Composant de la barre de navigation */}
                <NavBarApp/>

                {/* Composant pour filtrer les tâches */}
                <FilteredTask filter={taskState.filter} dispatch={dispatch}/>

                {/* Composant pour afficher la liste des tâches */}
                <TaskList tasks={taskState.tasks} filter={taskState.filter} dispatch={dispatch}/>

                {/* Composant pour ajouter une nouvelle tâche */}
                <AddTask dispatch={dispatch} tasks={taskState.tasks}/>
            </div>
        </div>
    );
}

// Exportation du composant principal
export default App;
