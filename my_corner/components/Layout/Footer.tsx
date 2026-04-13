'use client';
import Link from "next/dist/client/link";
import Image from "next/image";
import { Icons } from "@/types/icontype";
import { SocialLinks } from "@/data/icontypes";

function SocialIcon({ src, alt, href }: Icons) {
  return (
    <div className="w-3 h-3 relative transition-transform 
                    duration-200 hover:scale-110">
      <Link 
        href={href} 
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center"
      >
        <Image 
          src={src} 
          alt={alt} 
          fill 
        />
      </Link>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <section className="p-3">
        <div className="border-4 rounded-b-4xl">
          <div className="group perspective">
            <div className="relative p-2 transition-transform duration-700 
                            [transform-style:preserve-3d] 
                            group-hover:[transform:rotateX(180deg)]">
              {/* FRONT */}
              <div className="absolute inset-0 bg-white text-black rounded-b-4xl 
                              flex items-center justify-center 
                              [backface-visibility:hidden] shadow-lg">
                <p className="font-semibold text-3xl">Keep in touch with me here!</p>
              </div>
              {/* BACK */}
              <div className="absolute inset-0
                              bg-text-primary rounded-b-4xl 
                              flex items-center justify-center gap-4
                              [transform:rotateX(180deg)] 
                              [backface-visibility:hidden]">
                {SocialLinks.map(({src, alt, href}) => (
                  <SocialIcon 
                    key={href} 
                    src={src}
                    alt={alt}
                    href={href} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
    // {new Date().getFullYear()} Nathan Shalamberidze
  );
}
