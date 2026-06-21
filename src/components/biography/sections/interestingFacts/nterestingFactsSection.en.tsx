import {HistoricalImage} from "@/src/common/historicalImage";
import {HistoricalSection} from "@/src/common/historicalSection";

export const InterestingFactsSectionEn = () => {
    return (
        <HistoricalSection
            id="interesting-facts"
            number="14"
            title="Interesting Facts"
        >
            <div className="space-y-8">
                <p>
                    The biography of Ivan Sirko is so rich in events, military
                    campaigns, and legends that many interesting facts have
                    formed around his figure. Some of them are supported by
                    historical sources, while others belong to folk tradition,
                    but all of them help explain why Sirko holds such a special
                    place in Ukrainian history.
                </p>

                <p>
                    One of the best known facts is that Ivan Sirko was elected
                    Kish Otaman of the Zaporizhian Sich many times. Different
                    works give different numbers, but the figure of about
                    fifteen elections is often mentioned. For the Sich, this
                    was an exceptional sign of trust, because the Zaporizhians
                    could easily remove leaders who lost the support of the
                    brotherhood.
                </p>

                <p>
                    Sirko took part in dozens of military campaigns. In popular
                    tradition, he is often described as an almost invincible
                    otaman. This does not mean that his life had no difficult
                    moments or failures, but the scale of his military fame was
                    truly remarkable for his era.
                </p>

                <p>
                    Another interesting fact is that Sirko never became a
                    hetman. Despite his enormous authority, he remained first of
                    all a man of the Zaporizhian Sich. His influence was
                    sometimes so significant that even hetmans had to take his
                    position into account, although he never held the hetman
                    mace himself.
                </p>

                <HistoricalImage
                    src="/images/sirko/biography/interesting-facts/sirko-facts.png"
                    alt="Interesting facts about Ivan Sirko"
                    width={1100}
                    height={620}
                    caption="Ivan Sirko became one of the most famous figures in the history of Ukrainian Cossacks and the hero of many legends."
                    closeLabel="Close"
                    downloadLabel="Download"
                    className="mx-auto max-w-[760px]"
                />

                <p>
                    The figure of Sirko is often connected with the legendary
                    letter of the Zaporizhian Cossacks to the Turkish sultan.
                    Historians treat different versions of this story with
                    caution, but in cultural memory Sirko became one of the
                    central images of this episode.
                </p>

                <p>
                    This episode became the basis for the famous painting about
                    the Zaporizhians writing a letter to the sultan. In artistic
                    tradition, Sirko appears as a stern, witty, and confident
                    Cossack leader. Through such images, his figure became
                    recognizable even to people who do not know the full
                    biography of the otaman.
                </p>

                <p>
                    There is also a legend about the birth of Sirko. According
                    to one tradition, he was supposedly born with teeth, which
                    in folk belief was seen as a sign of an unusual destiny.
                    Such a story cannot be confirmed by documents, but it shows
                    how strong the legendary aura around his figure became.
                </p>

                <p>
                    Another popular legend tells about the hand of Sirko.
                    According to folk tradition, after the death of the otaman,
                    Cossacks supposedly took his right hand on campaigns as a
                    protective talisman. There is no historical proof of this,
                    but the very existence of the legend shows the scale of
                    respect for Sirko among the Zaporizhians.
                </p>

                <p>
                    In folk tradition, Sirko was often called a kharakternyk.
                    In Cossack folklore, this word was used for people believed
                    to possess extraordinary abilities. That is why legends
                    could present Sirko not only as an experienced warrior, but
                    also as a man able to avoid danger, foresee events, and
                    outwit enemies.
                </p>

                <p>
                    Even centuries after his death, Sirko remains one of the
                    best known Kish Otamans of the Zaporizhian Sich. His figure
                    appears in street names, monuments, museum exhibitions,
                    historical works, and popular stories about the Cossacks.
                </p>

                <p>
                    Interesting facts about Sirko show not only a real
                    historical person, but also the way collective memory
                    works. Around him, military victories, political events,
                    legends, artistic images, and cultural symbols came
                    together. That is why Ivan Sirko remains one of the most
                    interesting figures of seventeenth-century Ukrainian
                    history even today.
                </p>
            </div>
        </HistoricalSection>
    );
};