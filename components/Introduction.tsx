"use client"
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

function Introduction() {
    return (
        <div className="relative z-20 w-full bg-darkBg/60">
            <div className="grid min-h-screen items-center p-6 pb-32 md:grid-cols-2 md:px-10 md:py-16">

                {/* Imagen */}
                <div className="flex items-center justify-center md:justify-start">
                    <Image
                        src="/home6.png"
                        priority
                        width={600}
                        height={600}
                        alt="Full Stack Developer"
                        className="w-full max-w-[600px] h-auto object-contain md:ml-10"
                    />
                </div>

                {/* Contenido */}
                <div className="flex flex-col justify-center max-w-md">

                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Transformo ideas en
                        <br />

                        <TypeAnimation
                            sequence={[
                                "APLICACIONES WEB",
                                1000,
                                "PLATAFORMAS ESCALABLES",
                                1000,
                                "PRODUCTOS DIGITALES",
                                1000,
                                "EXPERIENCIAS ÚNICAS",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <div className="flex flex-col">

                        <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                            Construyo soluciones Full Stack de principio a fin, combinando frontend, backend, APIs, bases de datos e inteligencia artificial para desarrollar productos digitales modernos, funcionales y escalables.
                        </p>

                        <span className="mx-auto mb-2 text-lg text-secondary underline underline-offset-1 md:mx-0 md:mb-2">
                             React | Next.js | TypeScript | Node.js | NestJS | Python | FastAPI | PostgreSQL | AWS | Docker | CI/CD
                        </span>

                    </div>

                    {/* Botones */}
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">

                        <Link
                            href="/portfolio"
                            className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
                        >
                            Ver proyectos
                        </Link>

                        <a
                            href="/CVV-DEV-FS.pdf"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
                            download
                        >
                            Resumen CV
                        </a>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Introduction;
