import React from "react";

const SignIn = () => {


    const handleSignIn = (e)=>{
        e.preventDefault();
    }

	return (
		<div>
			<div className="card bg-base-100 max-w-sm mx-auto border  shrink-0 shadow-2xl">
				<div className="card-body">
					<h1 className="text-5xl font-bold">Sign In now!</h1>
					<form onSubmit={handleSignIn} className="fieldset ">
						
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
						<button className="btn btn-neutral mt-4">
							Sign in
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
