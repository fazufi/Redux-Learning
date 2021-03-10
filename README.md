1. buat STATE:
const State = {
  nama: "Fazufi",
  rumah: "Solo",
};

2. buat REDUCER:
function Reduser(state = State) {
  return state;
}
>> isinya ,mengenalkan state dan mereturn nya

3. buat STORE:
export const store = createStore(
  Reduser
);
>> masukkan reducer ke dalam store
>> jangan lupa di ekspor

4. kirim store ke PROVIDER (index.js):
<Provider store={store}>

5. buat MapStateToProps:
const mapStateToProps = (state) => {
  return { nama: state.nama };
};
>> dia memakai parameter yang ada di Reduser
>> isinya adalah menyebutkan semua state dengan nama2 props nya

6. connect MapStateToProps dengan KOMPONENT yang mau dikasih props:
export const CSemua = connect(mapStateToProps)(Semua);

7. PROPS siap digunakan di komponent yang sudah diconnect