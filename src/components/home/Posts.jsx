"use client";

import { useEffect } from "react";

const InstagramGallery = () => {
  const posts = [
    "https://www.instagram.com/p/DDAvusESbQf/",
    "https://www.instagram.com/p/DHSJlJ5tnJo/",
    "https://www.instagram.com/p/DDfwYvYuRVl/",
    
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Siguenos en Instagram 
      </h2>

      {/* Grid con las publicaciones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((url, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-white"
          >
            <blockquote
              className="instagram-media w-full"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                minWidth: "326px",
                maxWidth: "100%",
                margin: "auto",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
              }}
            ></blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramGallery;
