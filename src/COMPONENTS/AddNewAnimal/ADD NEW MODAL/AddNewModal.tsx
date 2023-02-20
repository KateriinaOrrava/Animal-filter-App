import React, { ReactNode, useEffect, useState }  from 'react'
import styles from "./AddNewModal.module.css"
import  ReactDOM  from 'react-dom'
import { useAppDispatch } from '../../../APP/Hooks';
import { Animal, setAddNew, setLoading } from '../../../ANIMALS/AnimalSlice';
import axios from 'axios';

type Modal = {
    // children:ReactNode;
    open: boolean;
    onClose:() => void;
}
type NewAnimal={ name: string; type: string; img: string; }

const Modal = (props:Modal) => {
    const dispatch = useAppDispatch();
    const [img, setAnimalImage]=useState('')
    const [name, setAnimalName]=useState('')
    const [type, setAnimalType]=useState('')
    const postAnimal = (an:NewAnimal) => {
        dispatch(setAddNew(an))
        axios.post<NewAnimal>('http://localhost:3004/addAnimal', an)
    }
    const onSubmit = (e: { preventDefault: () => void }) => {        
        e.preventDefault()
        let newAnimal = {name, type, img}
        console.log(newAnimal)
        postAnimal(newAnimal)
        
        props.onClose()
        setAnimalImage('')
        setAnimalName('')
        setAnimalType('')  
        return newAnimal
    }
        

    if (!props.open) return null;

    return ReactDOM.createPortal(
        <div className={styles.modalAround}>
            <div className={styles.modal}>
                <form onSubmit={onSubmit} className={styles.modal}>
                    <button onClick={props.onClose}>✕</button>
                            <label>
                                Animal name:
                                <input 
                                    required
                                    type="text" 
                                    name="name"
                                    value={name} 
                                    onChange={(e)=>setAnimalName(e.target.value)} 
                                    />
                            </label>
                            <label>
                                Animal image:
                                <input 
                                required
                                type="text" 
                                name="image"
                                value={img} 
                                onChange={(e)=>setAnimalImage(e.target.value)} />
                            </label>
                            <label>
                                Animal type:
                                <input 
                                required
                                type="text" 
                                name="description"
                                value={type} 
                                onChange={(e)=>setAnimalType(e.target.value)} />
                            </label>
                            <input type="submit" value="Submit" className={styles.submitBtn_48}/>
                        </form>
        </div>
    </div>, 
    document.body as HTMLElement
  )
}
export default Modal
