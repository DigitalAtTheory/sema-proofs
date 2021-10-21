import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const menu = [
  {
    path: "/",
    image: "/corvette.png",
    width: "345px",
    height: "56px",
  },
  {
    path: "/porsche",
    image: "/porsche.png",
    width: "300px",
    height: "20px",
  },
  {
    path: "/toyota",
    image: "/toyota.png",
    width: "374px",
    height: "74px",
  },
];

export default function Header() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col px-12 py-4 md:flex-row justify-center items-center gap-12 ">
      {menu.map((m, i) => (
        <Link key={i} href={m.path}>
          <a
            className={`h-24 grid place-content-center border-b-2 ${
              router.pathname === m.path
                ? "border-red-400"
                : "border-white hover:border-red-400"
            }`}
          >
            <Image width={m.width} height={m.height} src={m.image} />
          </a>
        </Link>
      ))}
    </div>
  );
}
