import Link from "next/link";
import {PageContainer} from "@/src/components/layout";

export const HomeHero = () => {
    return (
        <section className="px-4 py-10 sm:px-6 lg:px-8">
            <PageContainer>
                <div className="sirko-page-frame sirko-inner-frame relative min-h-[760px] overflow-hidden px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
                    <div className="absolute left-8 top-8 h-28 w-28 rounded-full border border-[rgba(80,40,14,0.25)]" />
                    <div className="absolute right-10 top-10 text-8xl text-[rgba(80,40,14,0.12)]">✦</div>
                    <div className="absolute bottom-10 right-14 h-36 w-36 rounded-full border border-[rgba(80,40,14,0.22)]" />

                    <div className="relative grid min-h-[640px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                        <div className="sirko-dark-card flex min-h-[460px] items-end overflow-hidden p-7">
                            <div>
                                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[var(--color-gold)] bg-black/20 font-serif text-4xl text-[#f3cf77]">
                                    I
                                </div>

                                <p className="mb-4 text-xs font-black uppercase tracking-[0.36em] text-[#f3cf77]">
                                    Ivan Sirko
                                </p>

                                <p className="max-w-sm text-sm leading-7 text-[#f8e4b5]/85">
                                    Interactive historical experience dedicated to the legendary
                                    Cossack leader of the XVII century.
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="mb-6 text-xs font-black uppercase tracking-[0.4em] text-[var(--color-bronze)]">
                                Кошовий отаман Запорозької Січі
                            </p>

                            <h1 className="sirko-heading text-6xl font-bold leading-none text-[var(--color-ink)] sm:text-7xl lg:text-8xl">
                                ІВАН СІРКО
                            </h1>

                            <div className="sirko-divider my-8" />

                            <p className="max-w-2xl text-lg leading-9 text-[var(--color-muted)]">
                                Один із найвідоміших козацьких ватажків XVII століття.
                                Постать, у якій поєдналися військова слава, історична памʼять,
                                легенди та незламний дух Запорожжя.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link href="/biography" className="sirko-button">
                                    Біографія
                                </Link>

                                <Link href="/battles" className="sirko-button sirko-button-light">
                                    Битви
                                </Link>

                                <Link href="/timeline" className="sirko-button sirko-button-light">
                                    Таймлайн
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </section>
    );
};