import {PageContainer} from "@/src/components/layout";

import {HeaderActions} from "./HeaderActions";
import {HeaderLogo} from "./HeaderLogo";
import {HeaderNav} from "./HeaderNav";

export const Header = () => {
    return (
        <header className="sirko-wood sticky top-0 z-50">
            <PageContainer>
                <div className="flex min-h-20 items-center justify-between gap-6">
                    <HeaderLogo />
                    <HeaderNav />
                    <HeaderActions />
                </div>
            </PageContainer>
        </header>
    );
};