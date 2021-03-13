import { connect } from "react-redux";
import { createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import TambahLuarFileApp from "./Tambah";
import App, {TambahDalamFileApp} from "./App"

const State = {
  nama: "Fazufi",
  rumah: "Solo",
};

const Reduser = (STATE = State, a) => { 
  if (a.type === "gantiNama") {
    return Object.assign({}, STATE, { nama: a.nama });
  }
  if (a.type === "gantiRumah") {
    return { ...STATE, rumah: a.rumah };
  }
  return STATE;
};
const persistedReduser = persistReducer(
  {key: "root", storage}, Reduser
)

const isDev = process.env.NODE_ENV === 'development'
export const store = createStore(persistedReduser, isDev ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : '')
export const persistor = persistStore(store)

export const mapStateToProps = (STATE) => {
  return { ...STATE };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gantiNama: (data) => dispatch({ type: "gantiNama", nama: data }),
    gantiRumah: (data) => dispatch({ type: "gantiRumah", rumah: data }),
  };
};



export const CApp = connect(mapStateToProps, mapDispatchToProps)(App);
export const CTambahDalamFileApp = connect(mapStateToProps, mapDispatchToProps)(TambahDalamFileApp);
export const CTambahLuarFileApp = connect(mapStateToProps, mapDispatchToProps)(TambahLuarFileApp);
