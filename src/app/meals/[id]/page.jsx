
const fetchSingleMeals = async (id) => {

	console.log(id)

	try {
	  const res = await fetch(
		`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
	  );
	  const data = await res.json();
		//   setMeals(data.meals || []);
	  return data.meals || [];
	} catch (err) {
	  console.log(err);	
		return [];
	}
};

export async function generateMetadata({params}) {

	const p = await params;
	const id = await p.id;

	const [data] = await fetchSingleMeals(id);
  return {
    title: data.strMeal,
    description: data.strInstructions,
  }
}


export default async function MealsPages({ params }) {

	const p = await params;
	const id = await p.id;


	const singleMeals = await fetchSingleMeals(id);
  return (
	<div className="place-items-center place-content-center mt-10">
		  {/* Data */}
		  {singleMeals.map((meal, i) => {
			  return (
				  <div key={i} className="w-8/12 mx-auto text-center border p-16 bg-slate-400 rounded-br-full rounded-tl-full">
					  {/* <p>{JSON.stringify(meal)}</p> */}
					  <h1 className="text-4xl font-bold text-green-200 text-shadow-red-900">{meal?.strMeal}</h1>
					  <p>{meal?.strInstructions}</p>
				  </div>
			  )
		  })}
		
	</div>
  );
}
