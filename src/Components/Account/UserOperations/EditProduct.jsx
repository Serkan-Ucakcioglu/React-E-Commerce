import React from "react";
import { useForm } from "react-hook-form";
function EditProduct() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://fakestoreapi.com/products/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
      alert(`api database işlemeye izin vermiyor console bak
      ${JSON.stringify(data)}
    `);
  };

  return (
    <div className="container h-full flex items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/3 flex flex-col justify-center m-auto"
      >
        <h1 className="mb-6 font-extrabold text-4xl">Edit Product</h1>
        <div className="mb-6">
          <label
            htmlFor="s"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Product Id
          </label>
          <input
            type="number"
            id="s"
            {...register("id", {
              required: "required",
              max: {
                value: 20,
                message: "max id  20! ",
              },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Edit Product Id"
          />

          <p className="text-red-500 text-left">{errors.id?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Product Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "required !",
              minLength: {
                value: 5,
                message: "Minimum length 5!",
              },
              maxLength: {
                value: 15,
                message: "Maximum length 15",
              },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Product Title"
          />

          <p className="text-red-500 text-left">{errors.title?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            {...register("price", {
              required: "required !",
              min: { value: 5, message: "Min price 5$" },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <p className="text-red-500 text-left">{errors.price?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Description{" "}
          </label>
          <input
            type="text"
            id="description"
            {...register("description", {
              required: "required",
              minLength: {
                value: 8,
                message: "Minimum length 8!",
              },
              maxLength: {
                value: 25,
                message: "Maximum Length 25!",
              },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <p className="text-red-500 text-left">
            {errors.description?.message}
          </p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            İmage Url
          </label>
          <input
            type="url"
            name="image"
            {...register("image", { required: "url required!" })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <p className="text-red-500 text-left">{errors.image?.message}</p>
        </div>
        <div className="mb-6">
          <label htmlFor="cat">Category</label>
          <select
            id="cat"
            {...register("category", { required: "required options !" })}
          >
            <option value="" selected>
              {" "}
              choose ?{" "}
            </option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>

          <div className="text-red-500 text-left">
            {errors.category?.message}
          </div>
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              {...register("checkbox", { required: true })}
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 flex flex-col text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
            {errors.checkbox && (
              <p className="text-red-500 text-left">check please !! </p>
            )}
          </label>
        </div>
        <button
          type="submit"
          className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
