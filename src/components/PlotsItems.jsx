import { MutableData } from "./MutableData"


export const PlotsItems = ( {sale_id, name, link, listing_price, mutable_data, back_img, front_img, rarity} ) => {
  return (
   
        <div className="card" id={ rarity }>
            <div className="card-block">
                <p className="card-name">{name}</p>
                <a  href={link} id="link">{link}</a>
                <p className="card-price">{listing_price} WAX</p>  
                
                
            </div> 

            <div className="card-block">
                    <p className="card-title">Mutable Data</p>
                    <MutableData 
                        mutable_data={mutable_data}
                    />
                </div>

            {/* <div className="card-img-data">
            <img src={front_img} className="card-img"></img> 

                <div>
                    <p className="card-title">Mutable Data</p>
                    <MutableData 
                        mutable_data={mutable_data}
                    />
                </div>
                

            </div> */}
        </div>

        
  
  )
}
