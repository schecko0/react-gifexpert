import React, {useState} from 'react'
import { AddCategory,GifGrid } from './components'

//FzwDapjU3dnnGPS7E9PCz4Ilx1RxSaiL
export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Valorant'])


  const onAddCategory = ( newCategory ) =>{
    //Si la categoria ya existe no se inserta 
    if(categories.includes( newCategory )) return;
    
    setCategories( [newCategory , ... categories] )
    
  }

  return (    
    <>

      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory= { (value ) => onAddCategory(value) }
      />         
      {
        categories.map( category => <GifGrid key={ category} category={category}/> )
      } 
      
    </>
  )
}
