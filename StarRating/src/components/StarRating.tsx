import React,{useState} from 'react';
import { FaStar } from 'react-icons/fa';


const StarRating = () => {
	const [rating, setRating] = useState(null);
	let [hower,setHower] = useState(null);
	return (
		<div>
			{
				[...Array(5)].map((el,index) => {
					let activeRating = index+1;
					return (
					<label>
						<input type="radio" name="rating" value={activeRating} onClick={()=>setRating(activeRating)} 	 />  
						<FaStar
						onMouseEnter={()=> setHower(activeRating)}
						onMouseLeave={() => setHower(null)} style = {{color:(hower||rating)>= activeRating ? "yellow":"grey"}} size={100}></FaStar>
					</label>
						
					)
				})
			}


		</div>

	)
}

export default StarRating;