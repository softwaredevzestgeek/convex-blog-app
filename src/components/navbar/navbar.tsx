"use client";

export default function Navbar() {
  return (
    <>
      <nav className=" fixed w-full shadow-md z-20 top-0 start-0 border-b border-gray-200 dark:bg-slate-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-5 p-3">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              fill="#6372ff"
              height="45px"
              width="45px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M301.4,286.7h-91.1c-8.6,0-15.5,6.9-15.5,15.4c0,8.4,6.9,15.4,15.5,15.4h91.1c8.5,0,15.4-7,15.4-15.4 C316.8,293.6,309.9,286.7,301.4,286.7z"></path>{" "}
                  <path d="M210.3,225h44.8c8.6,0,15.5-7,15.5-15.5s-6.9-15.4-15.5-15.4h-44.8c-8.6,0-15.5,6.9-15.5,15.4S201.8,225,210.3,225z"></path>{" "}
                  <path d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M383,303.3 c-0.3,44.4-36.4,80.7-80.8,80.7h-92.9c-44.5,0-80.8-36.4-80.8-80.7v-94.4c0-44.5,36.4-80.9,80.8-80.9h56.6 c20.9,2.5,51.2,20.4,62.4,44.1c3.1,6.7,4.7,7.7,7.3,27.5c1.4,10.2,2,17.7,6.6,21.9c6.5,5.8,30.2,1.9,34.9,5.6l3.6,2.8l2.1,4.4 l0.8,3.6L383,303.3z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-500">
              Blogs
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}
