"use client";

export default function Navbar() {
  return (
    <>
      <nav className=" nav-main">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-5 p-3">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/svg/blogIcon.svg" alt="blog-header-icon" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-500">
              Blogs
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}
