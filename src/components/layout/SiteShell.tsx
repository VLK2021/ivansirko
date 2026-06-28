import type {ReactNode} from "react";

import {Header} from "@/src/components/header";
import {Footer} from "@/src/components/footer";

type SiteShellProps = {
    children: ReactNode;
};

export const SiteShell = ({children}: SiteShellProps) => {
    return (
        <div className="sirko-page relative flex min-h-screen flex-col overflow-hidden">
            <div className="fixed left-0 top-0 z-50 w-full">
                <Header/>
            </div>

            <main className="relative z-10 flex-1 pt-[76px]">
                {children}
            </main>

            <Footer/>
        </div>
    );
};