type LegacyQuoteProps = {
    quote: string;
};

export const LegacyQuote = ({quote}: LegacyQuoteProps) => {
    return (
        <div className="relative mb-20 overflow-hidden border border-[#9b6a2c]/70 bg-[#160903] px-6 py-12 shadow-[0_35px_120px_rgba(22,9,3,0.38)] sm:px-10 lg:px-16">
            <div className="absolute left-0 top-0 h-full w-1 bg-[#d8b16a]" />
            <div className="absolute right-10 top-8 text-[160px] font-serif leading-none text-[#d8b16a]/10">
                ”
            </div>

            <p className="relative z-10 mx-auto max-w-5xl text-center text-2xl font-semibold leading-10 text-[#f7d78a] sm:text-3xl sm:leading-[3.4rem]">
                {quote}
            </p>
        </div>
    );
};