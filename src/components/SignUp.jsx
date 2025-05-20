import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";


const SignUp = () => {

    const {createUser} = use(AuthContext);
    

    const handleSignUp = (e)=>{
        e.preventDefault();

        const form = e.target;
        // const email = e.target.email.value;
        // const password = e.target.password.value;

        const formData = new FormData(form);
        // const email = formData.get('email');
        // const password = formData.get('password');
        

        const newUser = Object.fromEntries(formData.entries());
        const {email, password, ...restFormData} = newUser;
        

      

        // create user with firebase
        createUser(email, password)
        .then(result => {
            console.log(result.user);

            const userProfileInfo = {
                email, 
                ...restFormData,
                creationTime : result.user?.metadata?.creationTime,
                lastSignInTime : result.user?.metadata?.lastSignInTime,
            }



            // now send "userProfileInfo" to the db
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userProfileInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId) {

                    console.log('after profile save : ', data);
                    // sweet alert here
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your account is created",
                        showConfirmButton: true,
                        timer: 1500
                    })
                }
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }
    


	return (
		<div>
			<div className="card bg-base-100 max-w-sm mx-auto border  shrink-0 shadow-2xl">
				<div className="card-body">

                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
					<form onSubmit={handleSignUp} className="fieldset ">
						
                        {/* name */}
                        <label className="label">Name</label>
						<input
							type="text"
                            name="name"
							className="input "
							placeholder="your full name"
						/>
                        {/* address */}
                        <label className="label">Address</label>
						<input
							type="text"
                            name="address"
							className="input"
							placeholder="your address"
						/>

                        {/* phone no. */}
                        <label className="label">Phone</label>
						<input
							type="text"
                            name="phone"
							className="input"
							placeholder="phone number"
						/>
                        {/* photo url */}
                        <label className="label">Photo</label>
						<input
							type="text"
                            name="photo"
							className="input"
							placeholder="your photo URL"
						/>
                        {/* email */}
                        <label className="label">Email</label>
						<input
							type="email"
                            name="email"
							className="input"
							placeholder="Email"
						/>


                        {/* password */}
						<label className="label">Password</label>
						<input
							type="password"
                            name="password"
							className="input"
							placeholder="Password"
						/>
						<div>
							<a className="link link-hover">Forgot password?</a>
						</div>
						<button className="btn btn-neutral mt-4">Sign up</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
