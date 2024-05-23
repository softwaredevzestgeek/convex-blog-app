"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { BlogFormData } from "@/module/blog-form-schema";

export default function CreateBlog() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BlogFormData>();

  const createBlog = useMutation(api.createPost.createBlog);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
    }
  };

  const onSubmit = async (data: BlogFormData) => {
    setLoading(true);

    const imageUrl = imagePreview;
    createBlog({
      title: data.title,
      content: data.content,
      author: data.author,
      imageUrl: imageUrl,
    });
    reset();
    setImagePreview(null);
    setLoading(false);
  };

  return (
    <div className="blog-form-container  w-full    overflow-auto  backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold pb-5 text-center text-white">
        Create Blog
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium" htmlFor="title">
            Title :
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="Type here..."
            {...register("title", { required: "*Title is required" })}
          />
          {errors.title && (
            <p className="text-red-600 text-sm py-1.5">
              {errors.title.message as string}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium" htmlFor="content">
            Content :
          </label>
          <textarea
            id="content"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="Type here.."
            {...register("content", { required: "*Content is required" })}
          ></textarea>
          {errors.content && (
            <p className="text-red-600 text-sm py-1.5">
              {errors.content.message as string}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block mb-2 text-sm font-medium">
            Author :
          </label>
          <input
            type="text"
            id="author"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="Type here..."
            {...register("author", { required: "*Author is required" })}
          />
          {errors.author && (
            <p className="text-red-600 text-sm py-1.5">
              {errors.author.message as string}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 text-sm font-medium">
            Image :
          </label>

          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="image"
              className="flex h-32 flex-col items-center justify-center w-full  border-2 border-gray-50 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-white dark:bg-white hover:bg-white dark:border-gray-400 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF
                </p>
              </div>
              <input
                id="image"
                type="file"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 rounded-lg"
              style={{ maxWidth: "100%", maxHeight: "146px", width: "100%" }}
            />
          )}
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            type="submit"
            className="text-white border-white border-2 bg-inherit  focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
          >
            {loading ? "Uploading..." : "Upload Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}
