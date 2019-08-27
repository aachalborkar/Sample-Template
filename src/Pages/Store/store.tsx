
import { createStore } from "redux";
import rootReducer from "../Reducers/reducers";

function configureStore(state = {
     cards: [
               {
                      id: 1,
                      name: 'Card 1',
                     description: 'This is card 1 '
                }
             ]
          }
  ) 
  {
  return createStore(rootReducer, state);
  }
  
  
  export default configureStore;