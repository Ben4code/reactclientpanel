import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
//import firebase from 'firebase'
import { reactReduxFirebase, firebaseReducer}  from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer} from 'redux-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDLdV18I2yMD1xY52cdkYSgPpxgmqGvjec",
    authDomain: "reactclientpanel-cc380.firebaseapp.com",
    databaseURL: "https://reactclientpanel-cc380.firebaseio.com",
    projectId: "reactclientpanel-cc380",
    storageBucket: "reactclientpanel-cc380.appspot.com",
    messagingSenderId: "127111675497"
}

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true 
  }
 
  // Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
// const firestore = firebase.firestore() // <- needed if using firestore

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
  )(createStore)
  

  // Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
  })

  // Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState, compose(reactReduxFirebase(firebase), 
window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__()
) )

export default store;