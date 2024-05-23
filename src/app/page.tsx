"use client";

import CreateBlog from "@/components/create-blog/blogForm";
import BlogCard from "@/components/card/card";

export default function Home() {
  return (
    <main className="form-wrapper  p-5 md:p-10 md:mt-8">
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 ">
        <div className="blog-container h-full w-full md:w-3/5  ">
          <BlogCard />
        </div>
        <div className="blog-form w-full md:w-2/5">
          <CreateBlog />
        </div>
      </div>
    </main>
  );
}
