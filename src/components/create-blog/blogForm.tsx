"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { BlogFormData } from "@/module/blog-form-schema";
import ImageUpload from "./imageUpload";

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
        <ImageUpload onChange={handleImageChange} imagePreview={imagePreview} />
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
