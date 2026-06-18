import Image from "next/image";

import {HistoricalSection} from "@/src/common/historicalSection";

export const EarlyYearsSectionUk = () => {
    return (
        <HistoricalSection
            id="early-years"
            number="01"
            title="Походження та молоді роки"
        >
            <div className="space-y-7">
                <p>
                    Іван Сірко належить до тих постатей української історії, чиє
                    доросле життя відоме значно краще, ніж дитинство та юність.
                    У народній памʼяті й багатьох пізніших біографіях роком його
                    народження найчастіше подають <strong>1605 рік</strong>, хоча
                    ранній період життя отамана залишається не до кінця
                    документованим.
                </p>

                <figure className="mx-auto max-w-[720px]">
                    <div className="border border-[rgba(91,43,14,0.42)] bg-[rgba(238,199,122,0.22)] p-3 shadow-[0_18px_34px_rgba(55,24,7,0.16)]">
                        <Image
                            src="/images/sirko/biography/early-years/podillia-map.jpg"
                            alt="Карта Східного Поділля XVII століття"
                            width={1100}
                            height={620}
                            className="h-auto w-full object-cover"
                        />
                    </div>

                    <figcaption className="mt-3 text-center font-serif text-sm italic leading-6 text-[var(--sirko-ink-soft)]">
                        Орієнтовна історична мапа Східного Поділля — краю, з яким
                        повʼязують походження Івана Сірка.
                    </figcaption>
                </figure>

                <p>
                    Найпереконливішою версією сьогодні виглядає походження Сірка
                    зі <strong>Східного Поділля</strong>. Саме з цим регіоном
                    повʼязують його раннє середовище, а серед можливих місць
                    народження найчастіше називають <strong>Мурафу</strong> на
                    Вінниччині. Версія про Мерефу важлива для біографії Сірка,
                    але вона більше стосується пізнішого періоду його життя та
                    перебування родини на Слобожанщині.
                </p>

                <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                    <figure>
                        <div className="border border-[rgba(91,43,14,0.38)] bg-[rgba(238,199,122,0.2)] p-3 shadow-[0_14px_28px_rgba(55,24,7,0.14)]">
                            <Image
                                src="/images/sirko/biography/early-years/murafa-landscape.png"
                                alt="Історичний краєвид Мурафи"
                                width={760}
                                height={540}
                                className="h-auto w-full object-cover"
                            />
                        </div>

                        <figcaption className="mt-3 font-serif text-sm italic leading-6 text-[var(--sirko-ink-soft)]">
                            Мурафа — одна з найважливіших версій місця походження
                            Івана Сірка.
                        </figcaption>
                    </figure>

                    <p>
                        Про родину Сірка в ранній період відомо небагато, але
                        його часто повʼязують із дрібною православною шляхтою або
                        заможнішим козацьким середовищем. Саме таке походження
                        могло дати йому не лише військову витримку, а й розуміння
                        тогочасної політики, звичаїв, козацької честі та
                        відповідальності перед громадою.
                    </p>
                </div>

                <p>
                    Молоді роки майбутнього кошового отамана, найімовірніше,
                    минали в середовищі, де військова справа, прикордонна
                    небезпека, козацькі звичаї та боротьба за волю були не
                    абстрактними поняттями, а частиною щоденного життя. Саме цей
                    світ поступово сформував людину, яка пізніше стане одним із
                    найавторитетніших провідників запорожців.
                </p>

                <div className="grid gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
                    <p>
                        Важливо не прикрашати ранню біографію Сірка вигадками.
                        Ми не маємо достатньо надійних свідчень про його
                        дитинство, навчання чи перші роки служби. Але вже сам
                        факт, що з середини XVII століття Сірко зʼявляється в
                        історії як досвідчений і впливовий козак, свідчить: до
                        цього моменту за ним уже стояв значний життєвий і
                        військовий досвід.
                    </p>

                    <figure>
                        <div className="border border-[rgba(91,43,14,0.38)] bg-[rgba(238,199,122,0.2)] p-3 shadow-[0_14px_28px_rgba(55,24,7,0.14)]">
                            <Image
                                src="/images/sirko/biography/early-years/young-cossack.png"
                                alt="Молодий козак XVII століття"
                                width={760}
                                height={540}
                                className="h-auto w-full object-cover"
                            />
                        </div>

                        <figcaption className="mt-3 font-serif text-sm italic leading-6 text-[var(--sirko-ink-soft)]">
                            Узагальнений образ молодого козака XVII століття —
                            середовища, у якому формувався Сірко.
                        </figcaption>
                    </figure>
                </div>
            </div>
        </HistoricalSection>
    );
};