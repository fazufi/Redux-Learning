1. buat STATE:
   const State = {
   nama: "Fazufi",
   rumah: "Solo",
   };

2. buat REDUCER:
   function Reduser(state = State) {
   return state;
   }

   > > isinya ,mengenalkan state dan mereturn nya

3. buat STORE:
   export const store = createStore(
   Reduser
   );

   > > masukkan reducer ke dalam store
   > > jangan lupa di ekspor

4. kirim store ke PROVIDER (index.js):
   <Provider store={store}>

5. buat MapStateToProps:
   const mapStateToProps = (state) => {
   return { nama: state.nama };
   };

> > isinya adalah menyebutkan semua state dengan nama2 props nya

6. connect MapStateToProps dengan KOMPONENT yang mau dikasih props:
   export const CSemua = connect(mapStateToProps)(Semua);

> > dia meng-connect kan MapStateToProps dan Komponent nya ke dalam Store

7. PROPS siap digunakan di komponent yang sudah diconnect.

// MEMBUAT SETSTATE DI REDUX:

1. buat mapDispatchToProps
   const mapDispatchToProps = (dispatch) =>{
   return{
    gantiNama: (data) => dispatch(type: "gantiNama", nama: data)
   }
   }

2. rootReducer

   > > tambahkan parameter action
   if (action.type === "gantiNama"){
   return {...STATE, nama: action.nama}
   }

3. buat fungtion onChange isinya
   this.props.gantiNama("perubahan")


// MEMBUAT REDUX-PERSIST
1. buat persistReducer, yg isinya menggabungkan storage dengan reducer
const persitedReducer= ({key: "root, storage}, Reducer)

2. masukkan persitedReducer ke dalam store / createStore

3. buat persistor yang isinya store
exprot const persistor: persistStore(store)

4. (?) masukkan persistor ke dalam persistGate (index.js)


// TENTANG EXPORT IMPORT
1. hanya ada satu export default
2. import dari export, yaitu: import {komponent} form "./file
3. import dari export default, yaitu: import komponet from ".file"
