// Création du magasin Redux en utilisant le réducteur tasksReducer
import { createStore } from 'redux';
import tasksReducer from './reducers';

// Configuration du magasin
const store = createStore(tasksReducer);

// Exportation du magasin pour être utilisé dans l'application
export default store;