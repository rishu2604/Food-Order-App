import { useState, useEffect } from 'react';
import MealItem from './MealItem';

export default function Meals() {
    const [ loadedMeals, setLoadedMeals ] = useState([])
    // GET request
    useEffect(()=>{
        async function fetchMeals(){
            // try{
                const response = await fetch('http://localhost:3000/meals');
                const resData = await response.json();
                setLoadedMeals(resData);
            // }
            // catch(error){

            // }
            if(!response.ok){
                return
            }
            return resData;
        }
        fetchMeals();
    }, []);

    return (
        <ul id="meals">
            {loadedMeals.map((meal)=>
                <MealItem key={meal.id} meal={meal} />
            )}
        </ul>
    )
}
