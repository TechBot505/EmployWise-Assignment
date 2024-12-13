import React from "react";

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex items-center gap-8">
        <img
          src={user.avatar}
          alt={user.first_name}
          className="w-20 h-20 rounded-full mb-4"
        />
        <div className="flex flex-col -mt-5">
          <h2 className="text-lg font-bold">{`${user.first_name} ${user.last_name}`}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        <button
          className="bg-green-500 text-white py-1 px-2 rounded mr-2 hover:bg-green-600 w-1/3"
          onClick={() => onEdit(user)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 w-1/3"
          onClick={() => onDelete(user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
