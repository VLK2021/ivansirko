import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--sirko-wood-950)] px-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,147,54,0.12),transparent_70%)]" />

            <div className="absolute inset-0 opacity-20 bg-[url('/images/backgrounds/parchment.webp')] bg-cover bg-center" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
                <p className="font-serif text-[8rem] font-black leading-none text-[var(--sirko-gold-pale)] md:text-[11rem]">
                    404
                </p>

                <h1 className="mt-4 font-serif text-4xl font-black uppercase tracking-[0.18em] text-[var(--sirko-parchment-50)]">
                    Page Not Found
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[rgba(255,232,176,0.72)]">
                    You have wandered beyond the known paths of Ivan Sirko.
                    The page you are looking for does not exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="mt-10 inline-flex items-center rounded-full border border-[var(--sirko-gold)] bg-[var(--sirko-gold)] px-8 py-4 font-serif text-sm font-black uppercase tracking-[0.18em] text-[var(--sirko-wood-950)] transition-all duration-300 hover:scale-105 hover:border-[var(--sirko-gold-pale)] hover:bg-[var(--sirko-gold-pale)]"
                >
                    Return Home
                </Link>
            </div>
        </main>
    );
}