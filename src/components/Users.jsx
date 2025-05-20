import React, { useState } from "react";
import { useLoaderData } from "react-router";
import User from "./User";

const Users = () => {
	const initialUsers = useLoaderData();
	const [users, setUsers] = useState(initialUsers);

	return (
		<div>
			<h2 className="text-3xl text-center">Users : {users.length}</h2>

			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>No.</th>
							<th>Name</th>
							<th>Email</th>
							<th>Contact</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}

						{users.map((user, index) => (
							<User
								key={user._id}
								user={user}
								index={index}
								setUsers={setUsers}
								users={users}
							></User>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;
