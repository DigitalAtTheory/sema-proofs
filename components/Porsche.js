import { useState } from "react";
import Image from "next/image";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function Porsche() {
  const [selectedPage, setSelectedPage] = useState("physical");
  return (
    <div>
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setSelectedPage("physical")}
          className={`bg-gray-300 py-4 uppercase w-36 shadow-md ${
            selectedPage === "physical"
              ? "bg-red-500 border ring-1 ring-red-500 text-white"
              : "text-black border  hover:bg-red-500 hover:text-white"
          }`}
        >
          Physical
        </button>
        <button
          onClick={() => setSelectedPage("digital")}
          className={`bg-gray-300 py-4 uppercase w-36 shadow-md ${
            selectedPage === "digital"
              ? "bg-red-500 border ring-1 ring-red-500 text-white"
              : "text-black border  hover:bg-red-500 hover:text-white"
          }`}
        >
          Digital
        </button>
      </div>
      <div className="mt-8 lg:flex px-4 gap-4 max-w-7xl mx-auto">
        {selectedPage === "physical" && (
          <>
            <div>
              <h2 className="text-2xl text-center mb-4">Landing Page</h2>
              <Image
                placeholder="blur"
                src="/Porsche/Landing Page/SEMA-2021-Reflex-Porsche-Physcial.jpg"
                width="1170"
                height="5910"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
              />
            </div>
            <div>
              <h2 className="text-2xl text-center my-4 lg:my-0 lg:mb-4">
                Confirmation Page
              </h2>
              <Image
                placeholder="blur"
                src="/Porsche/Confirmation Page/SEMA-2021-Reflex-Porsche-Confirmation-Physical.jpg"
                width="1170"
                height="4995"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
              />
            </div>
          </>
        )}
        {selectedPage === "digital" && (
          <>
            <div>
              <h2 className="text-2xl text-center mb-4">Landing Page</h2>
              <Image
                placeholder="blur"
                src="/Porsche/Landing Page/SEMA-2021-Reflex-Porsche-Digital.jpg"
                width="1170"
                height="5910"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
              />
            </div>
            <div>
              <h2 className="text-2xl text-center my-4 lg:my-0 lg:mb-4">
                Confirmation Page
              </h2>
              <Image
                placeholder="blur"
                src="/Porsche/Confirmation Page/SEMA-2021-Reflex-Porsche-Confirmation-Digital.jpg"
                width="1170"
                height="4995"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
