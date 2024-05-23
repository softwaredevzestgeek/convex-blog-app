"use client";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Loader from "../loader/loader";
import { BlogData } from "@/module/blog-data-schema";

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
                <h5 className="max-h-14 capitalize blog-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black ">
                  {item.title}
                </h5>
              </div>
              <p className=" content-container max-h-36 h-36  mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.content}
              </p>
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
