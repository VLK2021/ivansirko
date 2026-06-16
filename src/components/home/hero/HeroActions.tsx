import Link from "next/link";

import {HERO_ACTIONS} from "@/src/constants/home";
import type {HeroActionKey} from "@/src/constants/home";

type HeroActionsProps = {
    labels: Record<HeroActionKey, string>;
};

export const HeroActions = ({labels}: HeroActionsProps) => {
    return (
        <div className="sirko-hero-actions">
            {HERO_ACTIONS.map((action) => (
                <Link
                    key={action.href}
                    href={action.href}
                    className={
                        action.variant === "primary"
                            ? "sirko-button"
                            : "sirko-button sirko-button-light"
                    }
                >
                    {labels[action.key]}
                </Link>
            ))}
        </div>
    );
};