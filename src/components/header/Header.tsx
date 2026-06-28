import {PageContainer} from "@/src/components/layout";

import {HeaderActions} from "./HeaderActions";
import {HeaderLogo} from "./HeaderLogo";
import {HeaderMobileMenu} from "./HeaderMobileMenu";
import {HeaderNav} from "./HeaderNav";

export const Header = () => {
    return (
        <header className="sirko-wood sticky top-0 z-50">
            <PageContainer>
                <div className="flex min-h-20 items-center justify-between gap-4">
                    <HeaderLogo />

                    <div className="hidden xl:block">
                        <HeaderNav />
                    </div>

                    <div className="flex items-center gap-3">
                        <HeaderActions />
                        <HeaderMobileMenu />
                    </div>
                </div>
            </PageContainer>
        </header>
    );
};