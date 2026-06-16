import type {ReactNode} from "react";

import {Header} from "@/src/components/header";

type SiteShellProps = {
    children: ReactNode;
};

export const SiteShell = ({children}: SiteShellProps) => {
    return (
        <div className="sirko-page relative flex min-h-screen flex-col overflow-hidden">
            <Header />

            <main className="relative z-10 flex-1">
                {children}
            </main>
        </div>
    );
};