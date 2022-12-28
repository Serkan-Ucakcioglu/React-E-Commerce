import React from "react";

function InputList({ register, errors }) {
  return (
    <>
      <div>
        <label className="block">Email</label>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            required: "required !",
            minLength: {
              value: 4,
              message: "Minimum Length 4!",
            },
            maxLength: {
              value: 20,
              message: "Maximum Length 4!",
            },
          })}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        />

        <div className="text-red-500">{errors.username?.message}</div>
      </div>
      <div className="mt-4">
        <label className="block">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "required!",
            minLength: {
              value: 5,
              message: "Minimum Length 5!",
            },
            maxLength: {
              value: 15,
              message: "Maximum Length 15!",
            },
          })}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        />

        <div className="text-red-500">{errors.password?.message}</div>
      </div>
    </>
  );
}

export default InputList;
