import {HeroActions} from "./HeroActions";
import {HeroOrnament} from "./HeroOrnament";

type HeroContentProps = {
    hero: {
        kicker: string;
        title: string;
        subtitle: string;
        description: string;
        actions: {
            biography: string;
            military: string;
            documents: string;
        };
    };
};

export const HeroContent = ({hero}: HeroContentProps) => {
    return (
        <div className="relative z-10 w-full max-w-[680px] text-center lg:text-left">
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.28em] text-[var(--sirko-bronze)] sm:text-xs md:tracking-[0.36em]">
                {hero.kicker}
            </p>

            <h1 className="sirko-heading text-5xl font-black uppercase leading-[0.94] tracking-[0.04em] text-[var(--sirko-ink)] sm:text-6xl md:text-7xl xl:text-8xl">
                {hero.title}
            </h1>

            <p className="mt-6 text-sm font-black uppercase tracking-[0.14em] text-[var(--sirko-bronze-dark)] sm:text-base md:text-lg">
                {hero.subtitle}
            </p>

            <HeroOrnament />

            <p className="mx-auto max-w-2xl text-sm leading-7 text-[var(--sirko-ink-soft)] sm:text-base md:text-lg md:leading-8 lg:mx-0">
                {hero.description}
            </p>

            <HeroActions labels={hero.actions} />
        </div>
    );
};