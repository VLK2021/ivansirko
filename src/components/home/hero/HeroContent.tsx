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
        <div className="sirko-hero-content">
            <p className="sirko-hero-kicker">{hero.kicker}</p>
            <h1 className="sirko-hero-title">{hero.title}</h1>
            <p className="sirko-hero-subtitle">{hero.subtitle}</p>

            <HeroOrnament />

            <p className="sirko-hero-description">{hero.description}</p>

            <HeroActions labels={hero.actions} />
        </div>
    );
};