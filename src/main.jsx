import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import LoaderSpinner from "./components/LoaderSpinner.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Users from "./components/Users.jsx";


const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,

		children: [
			{
				index: true,
				loader: () => fetch("http://localhost:3000/coffees"),
				hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
				Component: Home,
			},
			{
				path: "/addCoffee",
				Component: AddCoffee,
			},
			{
				path: "/coffee/:id",
				loader: ({ params }) =>
					fetch(`http://localhost:3000/coffees/${params.id}`),
				Component: CoffeeDetails,
			},
			{
				path: "/updateCoffee/:id",
				loader: ({ params }) =>
					fetch(`http://localhost:3000/coffees/${params.id}`),
				hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
				Component: UpdateCoffee,
			},

			{
				path: "signin",
				Component: SignIn,
			},


			{
				path: "signup",
				Component: SignUp,
			},

            {
                path: 'users',
                loader: ()=> fetch('http://localhost:3000/users'),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>,
                Component: Users,
            }
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
        <AuthProvider>
			<RouterProvider router={router}></RouterProvider>
        </AuthProvider>

	</StrictMode>
);
