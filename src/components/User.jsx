import React, { use } from "react";
import { FaRegEye } from "react-icons/fa";
import { MdDelete, MdOutlineEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const User = ({ user, index, users, setUsers }) => {
    const {userDelete} = use(AuthContext)
	console.log(user);
	const { _id, name, email, phone, photo, address } = user || {};

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:3000/users/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						// console.log('after delete ', data);
						if (data.deletedCount) {
							const remainingUsers = users.filter(
								(user) => user._id !== id
							);
							setUsers(remainingUsers);

							// TODO: Delete user from firebase
                            
							Swal.fire({
								title: "Deleted!",
								text: "User has been deleted.",
								icon: "success",
							});
						}
					});
			}
		});
	};

	return (
		<>
			<tr>
				<th>{index + 1}</th>
				<td>
					<div className="flex items-center gap-3">
						<div className="avatar">
							<div className="mask mask-squircle h-12 w-12">
								<img
									src={photo}
									alt="Avatar Tailwind CSS Component"
								/>
							</div>
						</div>
						<div>
							<div className="font-bold">{name}</div>
							<div className="text-sm opacity-50">{address}</div>
						</div>
					</div>
				</td>
				<td>
					{email}
					<br />
					<span className="badge badge-ghost badge-sm">
						Desktop Support Technician
					</span>
				</td>
				<td>{phone}</td>
				<th>
					<div className="join gap-2">
						<button className="btn btn-xs">
							{" "}
							<FaRegEye></FaRegEye>{" "}
						</button>
						<button className="btn btn-xs">
							{" "}
							<MdOutlineEdit></MdOutlineEdit>{" "}
						</button>
						<button
							onClick={() => handleDelete(_id)}
							className="btn btn-xs"
						>
							{" "}
							<MdDelete></MdDelete>{" "}
						</button>
					</div>
				</th>
			</tr>
		</>
	);
};

export default User;
