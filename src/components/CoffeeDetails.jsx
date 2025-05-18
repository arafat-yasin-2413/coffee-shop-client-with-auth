import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
	const coffee = useLoaderData();
	console.log(coffee);


    const {name, price, quantity, photo} = coffee || {}

	return (
		<div>
			<div className="card bg-base-100 border-2 w-3xl mx-auto my-10 shadow-sm">
				<figure>
					<img
						src={photo}
						alt={`image of ${name}`}
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">{name}</h2>
					<p>
						Price: {price} BDT
					</p>
                    <p>
                        quantity: {quantity} 
                    </p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoffeeDetails;
