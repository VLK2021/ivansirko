import {HistoricalImage} from "@/src/common/historicalImage";
import {HistoricalSection} from "@/src/common/historicalSection";

export const EarlyYearsSectionEn = () => {
    return (
        <HistoricalSection
            id="early-years"
            number="01"
            title="Origin and Early Years"
        >
            <div className="space-y-8">
                <p>
                    Ivan Sirko belongs to those figures of Ukrainian history
                    whose mature military career is known far better than their
                    childhood, youth, and family background. The year
                    <strong> 1605 </strong>
                    is traditionally considered the year of his birth, although
                    the earliest period of the future otamans life remains only
                    partially documented. For this reason, this section should
                    be approached with caution, separating historically probable
                    facts from later legends and interpretations.
                </p>

                <HistoricalImage
                    src="/images/sirko/biography/early-years/podillia-map.jpg"
                    alt="Map of Eastern Podillia in the seventeenth century"
                    width={1100}
                    height={620}
                    caption="Eastern Podillia — the region most frequently associated with the origin of Ivan Sirko."
                    closeLabel="Close"
                    downloadLabel="Download"
                    className="mx-auto max-w-[720px]"
                />

                <p>
                    The strongest theory regarding Sirkos origin today is the
                    <strong> Podillian theory</strong>. Historians commonly
                    associate him with the village of
                    <strong> Murafa</strong> near Sharhorod in present-day
                    Vinnytsia Oblast. This region aligns most closely with the
                    image of Sirko as a member of the local Orthodox gentry and
                    a future Cossack leader.
                </p>

                <p>
                    Another version, once widespread, connected Sirkos birth
                    with Merefa in Slobozhanshchyna. However, this theory is now
                    considered less convincing because Merefa is more closely
                    linked to the later life of his family rather than to the
                    otamans actual birthplace. Although important in his
                    biography, the settlement is not regarded as the most likely
                    location of his birth.
                </p>

                <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                    <HistoricalImage
                        src="/images/sirko/biography/early-years/murafa-landscape.jpg"
                        alt="Landscape of Murafa"
                        width={760}
                        height={540}
                        caption="Murafa in Podillia — one of the principal theories regarding the birthplace of Ivan Sirko."
                        closeLabel="Close"
                        downloadLabel="Download"
                    />

                    <div className="space-y-6">
                        <p>
                            Very little reliable information has survived about
                            Sirkos parents. Modern historical sources do not
                            provide confirmed names for either his father or his
                            mother. Therefore, assigning specific names without
                            documentary evidence would be historically
                            inaccurate.
                        </p>

                        <p>
                            The most cautious conclusion is that Sirko likely
                            came from the
                            <strong> lesser Orthodox nobility</strong> or from a
                            prosperous social group closely connected to it.
                            Such a background could explain why he later emerged
                            not only as a warrior but also as a leader capable
                            of navigating the complex political realities of the
                            seventeenth century.
                        </p>
                    </div>
                </div>

                <p>
                    If this interpretation is correct, the future Kosh Otaman
                    grew up in an environment where Orthodox traditions, family
                    honor, military readiness, and ties to the Cossack frontier
                    played an important role. Such conditions may have helped
                    shape the disciplined, resilient, and determined character
                    for which he later became famous.
                </p>

                <p>
                    No detailed descriptions of Sirkos childhood have survived.
                    We do not know where he received his education, who his
                    earliest mentors were, or precisely when he first joined
                    the Cossack world. Nevertheless, the fact that he appears in
                    historical records by the mid-seventeenth century as an
                    experienced military figure suggests that he had already
                    accumulated substantial life and military experience before
                    entering the spotlight of history.
                </p>

                <div className="grid gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
                    <div className="space-y-6">
                        <p>
                            Sirkos youth unfolded during a period when
                            Ukrainian lands were marked by constant danger,
                            warfare, frontier conflicts, and struggles for
                            freedom. For a man from Podillia, military service
                            was not something distant or unusual—it was part of
                            everyday reality.
                        </p>

                        <p>
                            For this reason, Sirkos early biography should not
                            be presented as a romantic legend about a miraculous
                            childhood. Instead, it is the story of a future
                            leader shaped by the harsh realities of the
                            seventeenth century. His origins, the frontier world
                            of Podillia, and the Cossack environment gradually
                            prepared him for the path that would later make him
                            one of the most renowned leaders of the Zaporizhian
                            Cossacks.
                        </p>
                    </div>

                    <HistoricalImage
                        src="/images/sirko/biography/early-years/young-cossack.jpg"
                        alt="Young Cossack of the seventeenth century"
                        width={760}
                        height={540}
                        caption="A generalized image of a young seventeenth-century Cossack — the environment in which Sirko may have been shaped."
                        closeLabel="Close"
                        downloadLabel="Download"
                    />
                </div>
            </div>
        </HistoricalSection>
    );
};