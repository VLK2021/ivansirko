import type {ReactNode} from "react";

type SiteShellProps = {
    children: ReactNode;
};

export const SiteShell = ({children}: SiteShellProps) => {
    return (
        <div className="sirko-page relative flex min-h-screen flex-col overflow-hidden">
            <main className="relative z-10 flex-1">
                {children}
            </main>
        </div>
    );
};