import { useEffect, useState } from "react";
import { getPlots } from "../helpers/getPlots";
import { PlotsItems } from "./PlotsItems";

//APiKey 5abf453116eb41c4a2172c2bdb8e4deb
export const GifGrid = ( {category }) => {     

  const [plots, setPlots] = useState( [] ); 

  const getData = async() => {
    const newData = await getPlots( category );
    setPlots(newData);
  }

  useEffect(() => {
    getData();
  
    
  }, [])
  
 
  
    return (
    <>
        {/* <h3>{ category }</h3> */}
        <div className="card-grid">
          {
            plots.map( (plots ) => (
              <PlotsItems 
                key={plots.sale_id} 
                {...plots}
              />
            ))
          }
          
        </div>
    </>
  )
}
