import React from "react";

function BlogList() {
  return (
    <div className="mt-28 mx-32 pt-10 pb-36 border-b-2 border-secondary border-opacity-70 font-Poppins">
      <h1 className="text-left text-4xl text-secondary font-bold">
        BERITA TERKINI
      </h1>
      <div className="mt-24 grid grid-cols-10 gap-6 text-left">
        <div className="col-span-4 rounded-3xl px-5 py-10 bg-secondary h-96"></div>
        <div className="col-span-3 rounded-3xl px-5 py-10 bg-secondary h-64">
          Post 2
        </div>
        <div className="col-span-3 rounded-3xl px-5 py-10 bg-secondary h-64">
          Post 3
        </div>
      </div>
    </div>
  );
}

export default BlogList;
