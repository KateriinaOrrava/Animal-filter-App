import AddNewAnimal from "./COMPONENTS/AddNewAnimal/AddNewAnimal"
import { useSelector }  from "react-redux"
import { useAppDispatch, useAppSelector } from "./APP/Hooks"
import store from "./APP/store"
import { decrement, divideByAmount, increment, multiplyByAmount } from "./COUNTER/CounterSlice"
import { useEffect } from "react"
import axios from 'axios'
import { Animal, setAllAnimals, setLoading } from "./ANIMALS/AnimalSlice"
import AnimalType from "./Types/AnimalTypes"

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
    axios.get<{results:Animal[]}>('*').then(({data})=> {
      dispatch(setAllAnimals(data.results));
      dispatch(setLoading(false));
    })
  },[])

  const {animals, loading
  } = useAppSelector((store) => {
    return store.animal
  })

  if (loading) {
    return <h3>LOADING ...</h3>
  }
  if (!loading) {
    return <h3>no data</h3>
  }

  return (
    <div className="App">
      <h1>ANIMAL CARDS</h1>
      <AddNewAnimal/>
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
      </div>
      <div className="AllAnimalCards">
        {animals.map(({name, type, img}) => {
          return (
            <div className="CardWithAnimal">
              <h2>{name}</h2>
              <img src={img} alt={name} />
              <h3>{type}</h3>
            </div>
             
        )})}
      </div>
    </div>
  )
}

export default App
