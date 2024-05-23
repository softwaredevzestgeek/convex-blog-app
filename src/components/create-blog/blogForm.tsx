"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "convex/react";
import { BlogFormData } from "@/module/blog-form-schema";
import ImageUpload from "@/components/create-blog/imageUpload";
import LabeInput from "@/components/ui/label-input";
import { api } from "@convex/_generated/api";

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
    <div className="main-container">
      <h2 className="text-2xl font-bold pb-5 text-center text-white">
        Create Blog
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LabeInput
          error={errors.title}
          type="text"
          id="title"
          label="Title :"
          placeholder="Type here..."
          register={register("title", { required: "*Title is required" })}
        />
        <LabeInput
          error={errors.content}
          type="textarea"
          label="Content :"
          register={register("content", { required: "*Content is required" })}
          placeholder="Type here34"
          id="content"
        />
        <LabeInput
          error={errors.author}
          type="text"
          id="author"
          label="Author :"
          placeholder="Type here..."
          register={register("author", { required: "*Author is required" })}
        />
        <ImageUpload onChange={handleImageChange} imagePreview={imagePreview} />
        <div className="flex items-center justify-center mb-4">
          <button type="submit" className="button-primary">
            {loading ? "Uploading..." : "Upload Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}
