import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    // any key here ends of as a key on the app state
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;