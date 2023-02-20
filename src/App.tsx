import AddNewAnimal from "./COMPONENTS/AddNewAnimal/AddNewAnimal"
import { useSelector }  from "react-redux"
import { useAppDispatch, useAppSelector } from "./APP/Hooks"
import store from "./APP/store"
import { decrement, divideByAmount, increment, multiplyByAmount } from "./COUNTER/CounterSlice"
import { useEffect } from "react"
import axios from 'axios'
import { Animal, setAllAnimals, setLoading, setRemove } from "./ANIMALS/AnimalSlice"
import AnimalType from "./Types/AnimalTypes"
import styles from './App.module.css'
function App() {
  // ar šo var dispatchot jebkurā vietā applikācijā
  // tiek definēts, kas tiks ņemts no store (darbības)
  const dispatch = useAppDispatch()
  
  // tiek nodefinēts, kas tiks paņemts no stores (vērtība)
  // ar šo var dabūt datus jebkurā vietā applikācijā
  const count = useAppSelector((store) => {
    return store.counterValue.counterValue;
  })

  useEffect(() => {
    dispatch(setLoading(true));
    axios.get<Animal[]>('http://localhost:3004/animals').then(({data})=> {
      dispatch(setAllAnimals(data));
      dispatch(setLoading(false));
    })
  },[])

  const { animals, loading } = useAppSelector((store) => {
    return store.animal
  })

  if (loading) {
    return <h3>LOADING ...</h3>
  }


  const deletePost = (( name:string, id:string) => {   
    dispatch(setRemove(name));
    axios.delete(`http://localhost:3004/animal/${name}` );    
  });

  return (
    <div className="App">

      <h1>ANIMAL CARDS</h1>

      <AddNewAnimal/>
      <p>new animal here: ...</p>
      <div className={styles.AllAnimalCards}>
        {animals.map(({name, type, img, _id}) => {
          return (
            <div className={styles.CardWithAnimal} key={_id}>
              <img 
              src={img} 
              alt={name}  
              key={_id}
              className={styles.animalImg}/>
              <h2 key={_id}>{name}</h2>
              <h3 key={_id}>{type}</h3>
              <p>{_id}</p>
              <button 
              className={styles.deleteButton}
              onClick={() => {deletePost(name, _id!);}}>✕</button>
            </div>
             
        )})}
      </div>
{/* 
      <div className="ClickButton">
        <p>Counter is {count}</p> <br />
        <button onClick={() => {
          dispatch(increment())
        }}>+1</button> <br />
        <button onClick={() => {
          dispatch(decrement())
        }}>-1</button> <br />
        <button onClick={() => {
          dispatch(divideByAmount(10))
        }}>:10</button> <br />
        <button onClick={() => {
          dispatch(multiplyByAmount(10))
        }}>*10</button> <br />
      </div> */}
    </div>
  )
}

export default App
