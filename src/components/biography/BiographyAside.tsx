"use client";

import Image from "next/image";

type BiographyAsideSection = {
    id: string;
    title: string;
};

type BiographyAsideProps = {
    title: string;
    sections: BiographyAsideSection[];
};

export const BiographyAside = ({title, sections}: BiographyAsideProps) => {
    return (
        <aside className="fixed left-6 top-[128px] z-30 hidden w-[300px] xl:block 2xl:left-[calc((100vw-96rem)/2+1.5rem)]">
            <div className="relative max-h-[calc(100vh-150px)] overflow-hidden border-2 border-[rgba(91,43,14,0.58)] bg-[rgba(218,174,92,0.42)] px-5 py-5 shadow-[0_20px_45px_rgba(55,24,7,0.24)] backdrop-blur-md">
                <span className="pointer-events-none absolute inset-3 border border-[rgba(91,43,14,0.34)]" />
                <span className="pointer-events-none absolute inset-5 border border-[rgba(255,235,178,0.22)]" />

                <span className="absolute left-0 top-0 h-16 w-[3px] bg-[rgba(91,43,14,0.6)]" />
                <span className="absolute left-0 top-0 h-[3px] w-16 bg-[rgba(91,43,14,0.6)]" />
                <span className="absolute right-0 top-0 h-16 w-[3px] bg-[rgba(91,43,14,0.6)]" />
                <span className="absolute right-0 top-0 h-[3px] w-16 bg-[rgba(91,43,14,0.6)]" />
                <span className="absolute bottom-0 left-0 h-16 w-[3px] bg-[rgba(91,43,14,0.6)]" />
                <span className="absolute bottom-0 left-0 h-[3px] w-16 bg-[rgba(91,43,14,0.6)]" />
                <span className="absolute bottom-0 right-0 h-16 w-[3px] bg-[rgba(91,43,14,0.6)]" />
                <span className="absolute bottom-0 right-0 h-[3px] w-16 bg-[rgba(91,43,14,0.6)]" />

                <div className="relative z-10 flex flex-col">
                    <div className="text-center">
                        <Image
                            src="/images/sirko/icons/otaman.png"
                            alt=""
                            width={120}
                            height={120}
                            priority
                            className="mx-auto h-[100px] w-[100px] object-contain drop-shadow-[0_14px_16px_rgba(55,24,7,0.28)]"
                        />

                        <div className="mx-auto my-4 h-px w-32 bg-gradient-to-r from-transparent via-[rgba(91,43,14,0.58)] to-transparent" />

                        <p className="font-serif text-2xl font-black uppercase tracking-[0.16em] text-[var(--sirko-ink)]">
                            {title}
                        </p>
                    </div>

                    <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-[rgba(91,43,14,0.42)] to-transparent" />

                    <nav className="flex flex-col gap-2 font-serif text-[14px] leading-5 text-[var(--sirko-ink)]">
                        {sections.map((section, index) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="group grid grid-cols-[36px_1fr] gap-2 transition duration-300 hover:translate-x-1 hover:text-[var(--sirko-bronze-dark)]"
                            >
                                <span className="font-black tracking-[0.16em] text-[var(--sirko-bronze-dark)]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span>{section.title}</span>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </aside>
    );
};