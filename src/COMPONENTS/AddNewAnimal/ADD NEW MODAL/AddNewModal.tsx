import React, { ReactNode, useState }  from 'react'
import styles from "./AddNewModal.module.css"
import  ReactDOM  from 'react-dom'

type Modal = {
    // children:ReactNode;
    open: boolean;
    onClose:() => void;
}

const Modal = (props:Modal) => {
  const [animalImage, setAnimalImage]=useState('')
  const [animalName, setAnimalName]=useState('')
  const [animalType, setAnimalType]=useState('')
  
  const onSubmit = (e: { preventDefault: () => void }) => {        
      e.preventDefault()
      let newAnimal = {animalName, animalType, animalImage}
      console.log(newAnimal)
      props.onClose()
      setAnimalImage('')
      setAnimalName('')
      setAnimalType('')
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
                                  value={animalName} 
                                  onChange={(e)=>setAnimalName(e.target.value)} 
                                  />
                          </label>
                          <label>
                              Animal image:
                              <input 
                              required
                              type="text" 
                              name="image"
                              value={animalImage} 
                              onChange={(e)=>setAnimalImage(e.target.value)} />
                          </label>
                          <label>
                              Animal type:
                              <input 
                              required
                              type="text" 
                              name="description"
                              value={animalType} 
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

