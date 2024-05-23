"use client";

import { useQuery } from "convex/react";

import { BlogData } from "@/module/blog-data-schema";
import { api } from "@convex/_generated/api";
import Loader from "@/components/loader/loader";

export default function BlogCard() {
  const blogData = useQuery(api.createPost.getBlogData);

  if (!blogData) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-5 ">
      {blogData?.map((item: BlogData) => {
        return (
          <div
            className="max-w-sm bg-white border rounded-lg shadow-lg dark:bg-slate-50"
            key={item._id}
          >
            <div className="h-60">
              <img
                className="rounded-t-lg w-full h-full "
                src={item.imageUrl ? item?.imageUrl : "/Image/no-image.webp"}
                alt="blog-image"
              />
            </div>
            <div className="p-5">
              <div className="h-16">
                <h1 className="blog-main-heading ">{item.title}</h1>
              </div>
              <p className="blog-content">{item.content}</p>
              <div className="border-t-2 p-1 max-h-10 ">
                <div className="author-label flex text-slate-600 gap-3">
                  <h4 className="w-1/5">Author :</h4>
                  <p className="w-4/5 text-slate-400 text-transform: capitalize truncate">
                    {item.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
