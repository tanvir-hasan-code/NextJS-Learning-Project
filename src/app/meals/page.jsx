
import { Roboto} from "next/font/google";
import Link from "next/link";
import SearchBarInput from "./components/page";
import Image from "next/image";

export const metadata = {
  title: "Meals",
  description: "Testing a NextJS Project!",
};

const roboto = Roboto({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default async function MealsPages({searchParams }) {

	const query = await searchParams ;

	
	const fetchMeals = async () => {
		// console.log( "hello From Query", query)
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
		//   setMeals(data.meals || []);
		// console.log(data.meals)
      return data.meals || [];
    } catch (err) {
      console.log(err);	
		return [];
    }
};

	const meals = await fetchMeals();


  return (
    <div>
      {/* Data */}
		  <div>
			  <SearchBarInput/>
        <div className="grid grid-cols-4 border rounded-2xl  p-4 gap-8">
          {meals.map((meal, i) => {
            return (
              <div key={i} className={`text-center bg-cyan-900 text-white rounded-4xl border p-4  border-green-500 ${roboto.className}`}>
					<p className="test-color">{i}</p>
					<div>
						<Image width={600} height={400} src={meal?.strMealThumb} alt={meal.strMeal} className="rounded-2xl my-5" />
					</div>
                <p className="text-orange-500 ">{meal?.idMeal}</p>
                <h1 className="text-2xl text-green-300 font-bold">{meal?.strMeal} <Link className="text-sm text-white border p-1 rounded-full bg-sky-400" href={`/meals/${meal?.idMeal}`}>View Details</Link></h1>
                <p className="h-[150px] overflow-auto text-amber-300">{meal?.strInstructions}</p>
                <p className="text-blue-400 text-xl">{meal?.strArea}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
