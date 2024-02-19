import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="bg-slate-900 text-gray-300 gap-2 flex flex-col justify-center items-center p-4 md:px-32 md:py-6">
        <Link href="/">
          <Image
            src="/kornerkick-lite.svg"
            alt="korner kick footer"
            width={180}
            height={90}
          />
        </Link>
        <p className="text-xs">
          Copyright &copy; KornerKick 2024 all rights reserved
        </p>
      </div>
    </footer>
  );
}
