import {MilitaryCampaign} from "@/src/types/military";

const SOURCES = {
    encyclopedia: "Encyclopedia of Ukraine: Ivan Sirko",
    museumDnipro: "Dnipropetrovsk National Historical Museum: Ivan Sirko",
    sirkoOttomanTatar: "Боротьба Івана Сірка з турецько-татарськими ордами",
    yavornytskyi: "Д. Яворницький: історія запорозьких козаків",
};

export const MILITARY_CAMPAIGNS: MilitaryCampaign[] = [
    {
        id: "early-years",
        slug: "early-years",
        order: 1,
        direction: "early-years",

        titleUk: "Ранні військові роки",
        titleEn: "Early Military Years",

        shortTitleUk: "Ранні роки",
        shortTitleEn: "Early Years",

        periodUk: "1653–1659",
        periodEn: "1653–1659",

        summaryUk:
            "Період першої документальної появи Івана Сірка та його ранньої військової активності проти Виговського, татарських сил, ногайських улусів і союзників Кримського ханства.",

        summaryEn:
            "The period of Ivan Sirko's first documentary appearance and early military activity against Vyhovsky, Tatar forces, Nogai uluses, and allies of the Crimean Khanate.",

        contentUk: [
            "Ім’я Івана Сірка вперше згадується в документах під 1653 роком.",
            "У другій половині 1650-х років Сірко вже діяв як помітна військово-політична постать козацької України.",
            "У 1657–1659 роках він виступав проти курсу Івана Виговського на зближення з Річчю Посполитою та Кримським ханством.",
            "Найконкретніші військові епізоди цього періоду припадають на 1659 рік: похід на Аккерман, удар по ногайських улусах біля Самарників, розгром загону полковника Тимоша та дії на Бузькому напрямку.",
        ],

        contentEn: [
            "Ivan Sirko's name is first mentioned in documents under the year 1653.",
            "In the second half of the 1650s, Sirko was already acting as a notable military-political figure in Cossack Ukraine.",
            "In 1657–1659, he opposed Ivan Vyhovsky's policy of rapprochement with the Polish-Lithuanian Commonwealth and the Crimean Khanate.",
            "The most specific military episodes of this period belong to 1659: the campaign toward Akkerman, the strike against Nogai uluses near Samarnyky, the defeat of Colonel Tymosh's detachment, and actions in the Buh direction.",
        ],

        image: "/images/military/early-years.webp",

        events: [
            {
                id: "first-documentary-mention-1653",
                slug: "first-documentary-mention-1653",
                order: 1,
                year: "1653",
                dateUk: "1653 рік",
                dateEn: "1653",

                type: "political-military",
                direction: "early-years",
                importance: "medium",
                resultType: "political-result",
                confidence: "high",

                titleUk: "Перша документальна згадка про Івана Сірка",
                titleEn: "First Documentary Mention of Ivan Sirko",

                locationUk: "Козацька Україна",
                locationEn: "Cossack Ukraine",

                opponentsUk: [],
                opponentsEn: [],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk: "Не застосовується.",
                forcesEn: "Not applicable.",

                lossesUk: "Не застосовується.",
                lossesEn: "Not applicable.",

                resultUk:
                    "Ім’я Сірка вперше з’являється в документальних джерелах.",
                resultEn:
                    "Sirko's name first appears in documentary sources.",

                summaryUk:
                    "Це не бойова подія, але вона є початковою точкою документально простежуваної біографії Сірка.",

                summaryEn:
                    "This is not a combat event, but it is the starting point of Sirko's documentable biography.",

                courseUk: [
                    "До 1653 року відомості про Сірка залишаються непевними й значною мірою спираються на пізніші перекази.",
                    "Документальна згадка 1653 року дозволяє відділити перевірену частину біографії від легендарної традиції.",
                    "У військовому роуті ця подія виконує роль стартової точки, від якої починається подальший реєстр його походів.",
                ],

                courseEn: [
                    "Before 1653, information about Sirko remains uncertain and largely depends on later traditions.",
                    "The documentary mention of 1653 makes it possible to separate the verified part of his biography from legendary tradition.",
                    "In the military route, this event serves as the starting point for the later register of his campaigns.",
                ],

                significanceUk: [
                    "Фіксує найранішу документальну точку біографії Сірка.",
                    "Не є битвою, але важлива для хронології військового шляху.",
                ],

                significanceEn: [
                    "Marks the earliest documentary point in Sirko's biography.",
                    "It is not a battle, but it is important for the chronology of his military path.",
                ],

                historicalNoteUk:
                    "Подія залишена в масиві не як битва, а як початкова документальна точка військово-політичної кар’єри.",

                historicalNoteEn:
                    "The event is included not as a battle, but as the first documentary point of Sirko's military-political career.",

                hasDetailPage: false,
                image: "/images/military/events/first-documentary-mention-1653.webp",

                sources: [
                    "Енциклопедія історії України: Сірко Іван",
                ],
            },
            {
                id: "akerman-nogai-campaign-1659",
                slug: "akerman-nogai-campaign-1659",
                order: 2,
                year: "1659",
                dateUk: "друга половина літа 1659 року; згадка посланців — 28 серпня 1659 року",
                dateEn: "second half of the summer of 1659; envoys' report — August 28, 1659",

                type: "campaign",
                direction: "early-years",
                importance: "major",
                resultType: "strategic-success",
                confidence: "high",

                titleUk: "Похід на Аккерман і ногайські улуси",
                titleEn: "Campaign toward Akkerman and the Nogai Uluses",

                locationUk:
                    "Аккерманський напрямок, ногайські улуси біля Самарників",
                locationEn:
                    "Akkerman direction, Nogai uluses near Samarnyky",

                opponentsUk: [
                    "ногайські татари",
                    "сили, пов’язані з Кримським ханством",
                    "політичні союзники Івана Виговського",
                ],

                opponentsEn: [
                    "Nogai Tatars",
                    "forces connected with the Crimean Khanate",
                    "political allies of Ivan Vyhovsky",
                ],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "Точна чисельність війська Сірка в джерелах не подається.",
                forcesEn:
                    "The exact strength of Sirko's force is not given in the sources.",

                lossesUk:
                    "Джерело повідомляє про знищення багатьох людей у ногайських улусах, визволення литовських невільників, захоплення двох мурз і частини кримського ясиру; точні цифри втрат не подані.",
                lossesEn:
                    "The source reports many people killed in the Nogai uluses, the liberation of Lithuanian captives, the capture of two murzas and part of the Crimean yasyr; exact losses are not given.",

                resultUk:
                    "Похід завадив Виговському розвинути успіх після Конотопської битви разом із татарськими ордами.",

                resultEn:
                    "The campaign prevented Vyhovsky from developing his success after the Battle of Konotop together with the Tatar hordes.",

                summaryUk:
                    "У другій половині літа 1659 року Сірко здійснив похід на Аккерман і ногайські улуси, вдаривши по союзниках Кримського ханства.",

                summaryEn:
                    "In the second half of the summer of 1659, Sirko conducted a campaign toward Akkerman and the Nogai uluses, striking forces allied with the Crimean Khanate.",

                courseUk: [
                    "Похід відбувався на тлі конфлікту між Сірком і політичним курсом Івана Виговського.",
                    "Сірко виступав проти союзу Виговського з Річчю Посполитою та Кримським ханством.",
                    "За повідомленням посланців Івана Безпалого, Сірко з запорожцями ходив війною під Аккерман і до ногайських улусів, які кочували поблизу Самарників.",
                    "Під час походу було визволено литовських невільників, захоплено двох мурз і частину кримського ясиру.",
                    "Після удару по улусах Сірко рушив у напрямку Києва на допомогу боярину Шереметєву.",
                ],

                courseEn: [
                    "The campaign took place against the background of conflict between Sirko and Ivan Vyhovsky's political course.",
                    "Sirko opposed Vyhovsky's alliance with the Polish-Lithuanian Commonwealth and the Crimean Khanate.",
                    "According to the envoys of Ivan Bezpaly, Sirko and the Zaporozhians campaigned toward Akkerman and the Nogai uluses near Samarnyky.",
                    "During the campaign, Lithuanian captives were freed, two murzas were captured, and part of the Crimean yasyr was taken.",
                    "After the strike against the uluses, Sirko moved toward Kyiv to assist boyar Sheremetev.",
                ],

                significanceUk: [
                    "Це одна з перших конкретно описаних військових дій Сірка.",
                    "Подія мала прямий вплив на розвиток Конотопської кампанії 1659 року.",
                    "Похід показує ранню антикримську спрямованість військової діяльності Сірка.",
                ],

                significanceEn: [
                    "This is one of the first specifically described military actions of Sirko.",
                    "The event directly influenced the development of the 1659 Konotop campaign.",
                    "The campaign shows the early anti-Crimean direction of Sirko's military activity.",
                ],

                historicalNoteUk:
                    "Подія достатньо конкретна для основного military timeline, але точна чисельність війська й втрати сторін у джерелі не подані.",

                historicalNoteEn:
                    "The event is specific enough for the main military timeline, but exact troop strength and losses are not given in the source.",

                hasDetailPage: false,
                image: "/images/military/events/akerman-nogai-campaign-1659.webp",

                sources: [
                    "Енциклопедія історії України: Сірко Іван",
                    "Дніпропетровський національний історичний музей: Іван Сірко — походи в Крим та Волоську землю",
                ],
            },
            {
                id: "tymosh-detachment-defeat-1659",
                slug: "tymosh-detachment-defeat-1659",
                order: 3,
                year: "1659",
                dateUk: "після походу на Аккерман і ногайські улуси, 1659 рік",
                dateEn: "after the Akkerman and Nogai campaign, 1659",

                type: "battle",
                direction: "early-years",
                importance: "major",
                resultType: "victory",
                confidence: "medium",

                titleUk: "Розгром загону полковника Тимоша",
                titleEn: "Defeat of Colonel Tymosh's Detachment",

                locationUk:
                    "точна локалізація в доступному викладі не подана; напрямок руху Сірка — до Києва",
                locationEn:
                    "exact location is not given in the available account; Sirko was moving toward Kyiv",

                opponentsUk: [
                    "полковник Тиміш",
                    "військо Івана Виговського",
                ],

                opponentsEn: [
                    "Colonel Tymosh",
                    "Ivan Vyhovsky's force",
                ],

                commandersUk: ["Іван Сірко", "полковник Тиміш"],
                commandersEn: ["Ivan Sirko", "Colonel Tymosh"],

                forcesUk:
                    "Точна чисельність загону Сірка і війська Тимоша не подана.",
                forcesEn:
                    "The exact strength of Sirko's detachment and Tymosh's force is not given.",

                lossesUk:
                    "Джерело повідомляє про повну поразку війська Тимоша; сам Тиміш, за викладом, утік лише з двома супутниками. Точні цифри втрат не подані.",
                lossesEn:
                    "The source reports a complete defeat of Tymosh's force; Tymosh himself reportedly escaped with only two companions. Exact losses are not given.",

                resultUk:
                    "Сірко розбив загін, який Виговський вислав, щоб не допустити його до Києва.",

                resultEn:
                    "Sirko defeated the detachment sent by Vyhovsky to prevent him from reaching Kyiv.",

                summaryUk:
                    "Після походу на Аккерман і ногайські улуси Виговський вислав проти Сірка полковника Тимоша, але Сірко несподівано атакував і розгромив його військо.",

                summaryEn:
                    "After the Akkerman and Nogai campaign, Vyhovsky sent Colonel Tymosh against Sirko, but Sirko unexpectedly attacked and defeated his force.",

                courseUk: [
                    "Після удару по ногайських улусах Сірко рушив до Києва на допомогу Шереметєву.",
                    "Іван Виговський вислав навперейми полковника Тимоша з військом, щоб не допустити Сірка до Києва.",
                    "Сірко, дізнавшись про це, несподівано напав на Тимоша.",
                    "У результаті військо Тимоша було розбите, а сам Тиміш, за джерельним викладом, ледве втік до Виговського.",
                ],

                courseEn: [
                    "After striking the Nogai uluses, Sirko moved toward Kyiv to assist Sheremetev.",
                    "Ivan Vyhovsky sent Colonel Tymosh with a force to intercept Sirko and prevent him from reaching Kyiv.",
                    "Sirko, learning of this, unexpectedly attacked Tymosh.",
                    "As a result, Tymosh's force was defeated, and Tymosh himself reportedly barely escaped back to Vyhovsky.",
                ],

                significanceUk: [
                    "Це вже не загальний політичний контекст, а конкретний бойовий епізод 1659 року.",
                    "Подія показує Сірка як самостійного військового лідера, здатного діяти швидко й раптово.",
                    "Розгром загону Тимоша послаблював можливості Виговського контролювати ситуацію після Конотопської кампанії.",
                ],

                significanceEn: [
                    "This is not general political context, but a specific combat episode of 1659.",
                    "The event shows Sirko as an independent military leader capable of rapid and unexpected action.",
                    "The defeat of Tymosh's detachment weakened Vyhovsky's ability to control the situation after the Konotop campaign.",
                ],

                historicalNoteUk:
                    "Подія відома за викладом Яворницького/музейного матеріалу; точні географічні координати, чисельність і втрати потребують додаткової джерельної перевірки.",

                historicalNoteEn:
                    "The event is known from the Yavornytsky/museum account; exact location, troop strength, and losses require additional source verification.",

                hasDetailPage: false,
                image: "/images/military/events/tymosh-detachment-defeat-1659.webp",

                sources: [
                    "Дніпропетровський національний історичний музей: Іван Сірко — походи в Крим та Волоську землю",
                ],
            },
            {
                id: "bug-campaign-1659",
                slug: "bug-campaign-1659",
                order: 4,
                year: "1659",
                dateUk: "1659 рік",
                dateEn: "1659",

                type: "campaign",
                direction: "early-years",
                importance: "medium",
                resultType: "strategic-success",
                confidence: "medium",

                titleUk: "Похід на Буг і татарські улуси",
                titleEn: "Campaign toward the Buh and Tatar Uluses",

                locationUk:
                    "Буг, район навпроти Умані, острів Андріївський у гирлі Бугу",
                locationEn:
                    "Buh River, area opposite Uman, Andriivskyi Island at the mouth of the Buh",

                opponentsUk: [
                    "татарські улуси",
                    "сили, пов’язані з Виговським",
                ],

                opponentsEn: [
                    "Tatar uluses",
                    "forces connected with Vyhovsky",
                ],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "У джерелі згадується “велике військо”, але точна чисельність не подана.",
                forcesEn:
                    "The source mentions a “large force,” but exact numbers are not given.",

                lossesUk:
                    "Точні втрати не подані.",
                lossesEn:
                    "Exact losses are not given.",

                resultUk:
                    "Сірко діяв на Бузькому напрямку проти татарських улусів і сил, які вважалися ворожими московському царю та наказному гетьману.",

                resultEn:
                    "Sirko operated in the Buh direction against Tatar uluses and forces considered hostile to the Muscovite tsar and the acting hetman.",

                summaryUk:
                    "У 1659 році Сірко з військом рухався човнами вгору по Бугу, висадився навпроти Умані, розгромив татарські улуси й потім став на острові Андріївському.",

                summaryEn:
                    "In 1659, Sirko moved with his force by boats up the Buh, landed opposite Uman, defeated Tatar uluses, and then stationed himself on Andriivskyi Island.",

                courseUk: [
                    "За повідомленням Безпалого, Сірко з великим військом на човнах піднявся з Запорожжя вгору по Бугу.",
                    "Навпроти Умані козаки вийшли на суходіл.",
                    "Після висадки Сірко завдав удару по татарських улусах.",
                    "Потім військо знову сіло на човни, спустилося до гирла Бугу й розташувалося на острові Андріївському.",
                    "Звідти Сірко підтримував зв’язки з наказним гетьманом Сомком і продовжував дії проти татар.",
                ],

                courseEn: [
                    "According to Bezpaly's report, Sirko moved with a large force by boats from Zaporizhia up the Buh River.",
                    "Opposite Uman, the Cossacks landed.",
                    "After landing, Sirko struck the Tatar uluses.",
                    "The force then returned to the boats, descended to the mouth of the Buh, and positioned itself on Andriivskyi Island.",
                    "From there, Sirko maintained contact with acting Hetman Somko and continued actions against the Tatars.",
                ],

                significanceUk: [
                    "Подія показує мобільність Сірка: рух човнами, висадка, удар і повернення до водного маршруту.",
                    "Бузький напрямок доповнює Аккермансько-ногайський цикл 1659 року.",
                    "Це конкретний військовий епізод, але без точних чисел і втрат.",
                ],

                significanceEn: [
                    "The event shows Sirko's mobility: movement by boats, landing, strike, and return to the water route.",
                    "The Buh direction complements the Akkerman-Nogai cycle of 1659.",
                    "It is a specific military episode, but without exact numbers and losses.",
                ],

                historicalNoteUk:
                    "Подія має конкретний маршрут у джерельному викладі, але не має точної реконструкції бою, чисельності війська та втрат.",

                historicalNoteEn:
                    "The event has a specific route in the source account, but no exact reconstruction of the battle, troop strength, or losses.",

                hasDetailPage: false,
                image: "/images/military/events/bug-campaign-1659.webp",

                sources: [
                    "Дніпропетровський національний історичний музей: Іван Сірко — походи в Крим та Волоську землю",
                ],
            },
            {
                id: "pereiaslav-council-1659",
                slug: "pereiaslav-council-1659",
                order: 5,
                year: "1659",
                dateUk: "9–10 жовтня 1659 року",
                dateEn: "October 9–10, 1659",

                type: "political-military",
                direction: "early-years",
                importance: "medium",
                resultType: "political-result",
                confidence: "high",

                titleUk: "Участь у Переяславській раді",
                titleEn: "Participation in the Pereiaslav Council",

                locationUk: "Переяслав",
                locationEn: "Pereiaslav",

                opponentsUk: [],
                opponentsEn: [],

                commandersUk: [
                    "Іван Сірко",
                    "Юрій Хмельницький",
                    "Олексій Трубецькой",
                    "Іван Безпалий",
                ],

                commandersEn: [
                    "Ivan Sirko",
                    "Yurii Khmelnytsky",
                    "Aleksey Trubetskoy",
                    "Ivan Bezpaly",
                ],

                forcesUk:
                    "Не застосовується: це військово-політична рада, а не битва.",
                forcesEn:
                    "Not applicable: this was a military-political council, not a battle.",

                lossesUk: "Не застосовується.",
                lossesEn: "Not applicable.",

                resultUk:
                    "Сірко прибув на раду як кальницький полковник і підтримав обрання Юрія Хмельницького.",

                resultEn:
                    "Sirko arrived at the council as Kalnyk colonel and supported the election of Yurii Khmelnytsky.",

                summaryUk:
                    "Восени 1659 року Сірко підтримував Юрія Хмельницького в боротьбі за гетьманську булаву й брав участь у Переяславській раді.",

                summaryEn:
                    "In the autumn of 1659, Sirko supported Yurii Khmelnytsky in the struggle for the hetman's mace and took part in the Pereiaslav Council.",

                courseUk: [
                    "Після військових дій літа 1659 року Сірко перейшов до участі у вирішенні питання гетьманської влади.",
                    "9–10 жовтня 1659 року він був присутній на Переяславській раді.",
                    "У джерелі Сірко названий кальницьким полковником.",
                    "Юрія Хмельницького було проголошено гетьманом Лівобережної України під протекцією московського царя.",
                ],

                courseEn: [
                    "After the military actions of the summer of 1659, Sirko moved into participation in the question of hetman authority.",
                    "On October 9–10, 1659, he was present at the Pereiaslav Council.",
                    "The source names Sirko as Kalnyk colonel.",
                    "Yurii Khmelnytsky was proclaimed hetman of Left-Bank Ukraine under the protection of the Muscovite tsar.",
                ],

                significanceUk: [
                    "Подія пояснює військово-політичний статус Сірка наприкінці 1659 року.",
                    "Показує, що після бойових дій він уже діяв як полковник і учасник загальноукраїнської політики.",
                    "Не є битвою, але важлива для розуміння переходу Сірка до наступного етапу військової кар’єри.",
                ],

                significanceEn: [
                    "The event explains Sirko's military-political status at the end of 1659.",
                    "It shows that after military actions he already acted as a colonel and participant in all-Ukrainian politics.",
                    "It is not a battle, but it is important for understanding Sirko's transition to the next stage of his military career.",
                ],

                historicalNoteUk:
                    "Це не бойовий event, але він напряму пов’язаний із військовим статусом Сірка після кампаній 1659 року.",

                historicalNoteEn:
                    "This is not a combat event, but it is directly connected with Sirko's military status after the campaigns of 1659.",

                hasDetailPage: false,
                image: "/images/military/events/pereiaslav-council-1659.webp",

                sources: [
                    "Енциклопедія історії України: Сірко Іван",
                    "Дніпропетровський національний історичний музей: Іван Сірко — походи в Крим та Волоську землю",
                ],
            },
        ],
    },
    {
        id: "crimean-direction",
        slug: "crimean-direction",
        order: 2,
        direction: "crimea",

        titleUk: "Кримський напрямок",
        titleEn: "Crimean Direction",

        shortTitleUk: "Крим",
        shortTitleEn: "Crimea",

        periodUk: "1660–1663",
        periodEn: "1660–1663",

        summaryUk:
            "Період активних походів Сірка проти Кримського ханства, татарських загонів і турецько-татарських укріплень на виході з Дніпра до Чорного моря.",

        summaryEn:
            "A period of Sirko's active campaigns against the Crimean Khanate, Tatar detachments, and Ottoman-Tatar fortifications at the Dnipro exit to the Black Sea.",

        contentUk: [
            "На початку 1660-х років Сірко діяв переважно на південному напрямку: Очаків, Аслан-Кермен, Перекоп, Чорноморське узбережжя.",
            "Ці походи поєднували удари по фортецях, степові рейди, морські операції на чайках і визволення християнських полонених.",
            "Для частини подій джерела дають точніші деталі, для частини — лише загальний перебіг без повної реконструкції бою.",
        ],

        contentEn: [
            "In the early 1660s, Sirko acted mainly in the southern direction: Ochakiv, Aslam-Kermen, Perekop, and the Black Sea coast.",
            "These campaigns combined strikes against fortresses, steppe raids, naval operations in chaikas, and the liberation of Christian captives.",
            "For some events, sources provide more precise details; for others, only the general course is known without full battle reconstruction.",
        ],

        image: "/images/military/crimean-direction.webp",

        events: [
            {
                id: "ochakiv-aslam-kermen-1660",
                slug: "ochakiv-aslam-kermen-1660",
                order: 1,
                year: "1660",
                dateUk: "1660 рік",
                dateEn: "1660",

                type: "campaign",
                direction: "crimea",
                importance: "major",
                resultType: "victory",
                confidence: "medium",

                titleUk: "Похід на Очаків і Аслан-Кермен",
                titleEn: "Campaign against Ochakiv and Aslam-Kermen",

                locationUk: "Очаків, Аслан-Кермен, гирло Дніпра",
                locationEn: "Ochakiv, Aslam-Kermen, Dnipro estuary",

                opponentsUk: ["турецькі гарнізони", "османські сили"],
                opponentsEn: ["Turkish garrisons", "Ottoman forces"],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "У популярному викладі згадується близько 5000 козаків; точність цієї цифри потребує перевірки за академічними джерелами.",
                forcesEn:
                    "A popular account mentions about 5,000 Cossacks; the accuracy of this figure requires verification in academic sources.",

                lossesUk:
                    "Точні втрати сторін не подані.",
                lossesEn:
                    "Exact losses of the sides are not given.",

                resultUk:
                    "Козаки атакували Очаків і Аслан-Кермен, зруйнувавши або тяжко пошкодивши турецькі укріплення.",
                resultEn:
                    "The Cossacks attacked Ochakiv and Aslam-Kermen, destroying or heavily damaging the Ottoman fortifications.",

                summaryUk:
                    "У 1660 році Сірко виступив проти турецьких укріплень, які контролювали вихід із Дніпра до Чорного моря.",

                summaryEn:
                    "In 1660, Sirko moved against Ottoman fortifications that controlled the Dnipro exit to the Black Sea.",

                courseUk: [
                    "За джерельним викладом, турки намагалися перекрити козакам вихід у море в гирлі Дніпра, закидаючи прохід великим камінням.",
                    "Сірко зібрав козацьке військо й розділив його для удару з різних напрямків.",
                    "Частина козаків діяла на чайках з боку лиману, інша частина атакувала з суші.",
                    "У результаті козаки вдарили по Очакову й Аслан-Кермену, які були важливими пунктами османського контролю над південним напрямком.",
                    "Після цього султан був змушений знову посилати флот до Очакова для чергування в лимані.",
                ],

                courseEn: [
                    "According to the account, the Turks attempted to block Cossack access to the sea at the Dnipro estuary by filling the passage with large stones.",
                    "Sirko gathered a Cossack force and divided it for a strike from different directions.",
                    "Part of the Cossacks acted in chaikas from the estuary, while another part attacked from land.",
                    "As a result, the Cossacks struck Ochakiv and Aslam-Kermen, important Ottoman control points in the southern direction.",
                    "After this, the sultan had to send a fleet to Ochakiv again to maintain patrols in the estuary.",
                ],

                significanceUk: [
                    "Похід показав здатність Сірка атакувати укріплені пункти, а не лише вести степові рейди.",
                    "Очаків і Аслан-Кермен контролювали важливий вихід із Дніпра до Чорного моря.",
                    "Подія відкриває серію активних дій Сірка проти турецько-татарської системи укріплень на півдні.",
                ],

                significanceEn: [
                    "The campaign showed Sirko's ability to attack fortified points, not only conduct steppe raids.",
                    "Ochakiv and Aslam-Kermen controlled an important exit from the Dnipro to the Black Sea.",
                    "The event opens a series of Sirko's active operations against the Ottoman-Tatar fortification system in the south.",
                ],

                historicalNoteUk:
                    "Джерело подає загальний перебіг і приблизну чисельність козаків, але не дає точних втрат і повної реконструкції бою.",

                historicalNoteEn:
                    "The source gives the general course and approximate Cossack strength, but does not provide exact losses or a full battle reconstruction.",

                hasDetailPage: false,
                image: "/images/military/events/ochakiv-aslam-kermen-1660.webp",

                sources: [
                    "Опис походу Сірка на Очаків і Аслан-Кермен",
                    "Матеріали про боротьбу Сірка з турецько-татарськими силами",
                ],
            },
            {
                id: "samara-ambush-1660",
                slug: "samara-ambush-1660",
                order: 2,
                year: "1660",
                dateUk: "кінець 1660 року",
                dateEn: "late 1660",

                type: "battle",
                direction: "crimea",
                importance: "major",
                resultType: "victory",
                confidence: "medium",

                titleUk: "Засідка біля гирла Самари",
                titleEn: "Ambush near the Mouth of the Samara",

                locationUk: "район гирла Самари, територія сучасного Дніпра",
                locationEn: "area of the Samara mouth, territory of modern Dnipro",

                opponentsUk: ["татарський загін"],
                opponentsEn: ["Tatar detachment"],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "Точна чисельність козацького й татарського загонів не подана.",
                forcesEn:
                    "The exact strength of the Cossack and Tatar detachments is not given.",

                lossesUk:
                    "Точні втрати не подані; згадується перехоплення ординців, обтяжених здобиччю та ясиром.",
                lossesEn:
                    "Exact losses are not given; the account mentions the interception of Horde forces burdened with loot and captives.",

                resultUk:
                    "Сірко перехопив ординців, які поверталися з походу на Правобережжя.",
                resultEn:
                    "Sirko intercepted Horde forces returning from a raid on the Right Bank.",

                summaryUk:
                    "Наприкінці 1660 року Сірко влаштував засідку на татарський загін біля гирла Самари, коли той повертався з походу з великою здобиччю та ясиром.",

                summaryEn:
                    "In late 1660, Sirko ambushed a Tatar detachment near the mouth of the Samara as it returned from a raid with large booty and captives.",

                courseUk: [
                    "Татарський загін повертався з успішного походу на Правобережжя.",
                    "Ординці були обтяжені здобиччю та ясиром, що ускладнювало швидкий рух.",
                    "Вони намагалися перейти Дніпро в районі гирла Самари.",
                    "Саме там на них чекала козацька засідка Сірка.",
                    "Доступний виклад не дає детального опису бою, але сам епізод подається як успішне перехоплення татарського загону.",
                ],

                courseEn: [
                    "The Tatar detachment was returning from a successful raid on the Right Bank.",
                    "The Horde forces were burdened with loot and captives, which slowed their movement.",
                    "They attempted to cross the Dnipro near the mouth of the Samara.",
                    "There they were met by Sirko's Cossack ambush.",
                    "The available account does not provide a detailed battle reconstruction, but presents the episode as a successful interception of the Tatar detachment.",
                ],

                significanceUk: [
                    "Подія показує Сірка як майстра засідки й перехоплення противника на переправах.",
                    "Це не похід на далеку фортецю, а локальна бойова операція на важливому дніпровському напрямку.",
                    "Епізод добре пояснює тактику Сірка: бити ворога тоді, коли той обтяжений здобиччю й менш рухливий.",
                ],

                significanceEn: [
                    "The event shows Sirko as a master of ambush and interception at crossings.",
                    "This was not a campaign against a distant fortress, but a local combat operation in an important Dnipro area.",
                    "The episode explains Sirko's tactics well: strike the enemy when it is burdened with loot and less mobile.",
                ],

                historicalNoteUk:
                    "Подія має конкретну локалізацію й загальний перебіг, але без точних цифр щодо чисельності, втрат і складу татарського загону.",

                historicalNoteEn:
                    "The event has a specific location and general course, but lacks exact figures on strength, losses, and composition of the Tatar detachment.",

                hasDetailPage: false,
                image: "/images/military/events/samara-ambush-1660.webp",

                sources: [
                    "Дніпровська міська бібліотека: матеріал про Івана Сірка",
                ],
            },
            {
                id: "danube-sea-campaign-1663",
                slug: "danube-sea-campaign-1663",
                order: 3,
                year: "1663",
                dateUk: "літо 1663 року",
                dateEn: "summer 1663",

                type: "campaign",
                direction: "crimea",
                importance: "major",
                resultType: "unclear",
                confidence: "medium",

                titleUk: "Морський похід до Дунаю і триденна битва під Очаковом",
                titleEn: "Naval Campaign to the Danube and Three-Day Battle near Ochakiv",

                locationUk: "Чорне море, Дунайський напрямок, Очаків",
                locationEn: "Black Sea, Danube direction, Ochakiv",

                opponentsUk: ["турецький флот", "османські прибережні сили"],
                opponentsEn: ["Turkish fleet", "Ottoman coastal forces"],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "Козацька флотилія була укріплена гарматами; точна кількість чайок і козаків не подана.",
                forcesEn:
                    "The Cossack flotilla was strengthened with cannons; the exact number of chaikas and Cossacks is not given.",

                lossesUk:
                    "Точні втрати не подані; джерело зазначає, що у триденній битві жодна сторона не здобула перемоги.",
                lossesEn:
                    "Exact losses are not given; the source states that neither side won the three-day battle.",

                resultUk:
                    "Козаки здійснили морський похід до Дунаю, але під Очаковом зіткнулися з турецьким флотом у триденній битві без вирішальної перемоги.",
                resultEn:
                    "The Cossacks conducted a naval campaign to the Danube, but near Ochakiv encountered the Turkish fleet in a three-day battle without decisive victory.",

                summaryUk:
                    "Улітку 1663 року Сірко здійснив морський похід на чайках до Дунаю, а на зворотному шляху під Очаковом вступив у триденну битву з турецьким флотом.",

                summaryEn:
                    "In the summer of 1663, Sirko conducted a naval campaign in chaikas toward the Danube and, on the return route near Ochakiv, fought a three-day battle with the Turkish fleet.",

                courseUk: [
                    "Після подій 1660 року турецький флот чергував у лимані біля Очакова, контролюючи козацький вихід до моря.",
                    "Сірко зміцнив козацьку флотилію гарматами.",
                    "Улітку 1663 року він вирушив у морський похід і дістався до Дунаю.",
                    "Під час походу козаки вдарили по прибережних містах.",
                    "На зворотному шляху під Очаковом козацька флотилія зустріла турецький флот.",
                    "Битва тривала три доби, але джерело прямо зазначає, що жодна сторона не здобула перемоги.",
                ],

                courseEn: [
                    "After the events of 1660, the Turkish fleet patrolled the estuary near Ochakiv, controlling Cossack access to the sea.",
                    "Sirko strengthened the Cossack flotilla with cannons.",
                    "In the summer of 1663, he launched a naval campaign and reached the Danube.",
                    "During the campaign, the Cossacks struck coastal towns.",
                    "On the return route near Ochakiv, the Cossack flotilla encountered the Turkish fleet.",
                    "The battle lasted three days, but the source directly states that neither side gained victory.",
                ],

                significanceUk: [
                    "Це важливий морський епізод у військовій діяльності Сірка.",
                    "Подія показує, що Сірко діяв не лише в степу, а й на чорноморському напрямку.",
                    "Триденна битва під Очаковом не була перемогою Сірка, тому її треба чесно подавати як невирішене зіткнення.",
                ],

                significanceEn: [
                    "This is an important naval episode in Sirko's military activity.",
                    "The event shows that Sirko acted not only in the steppe, but also in the Black Sea direction.",
                    "The three-day battle near Ochakiv was not Sirko's victory, so it should be honestly presented as an undecided clash.",
                ],

                historicalNoteUk:
                    "Подія має добру сюжетну конкретику, але не має точних даних про чисельність флотилії, втрати й склад турецького флоту.",

                historicalNoteEn:
                    "The event has good narrative specificity, but lacks exact data on the flotilla's strength, losses, and the composition of the Turkish fleet.",

                hasDetailPage: false,
                image: "/images/military/events/danube-sea-campaign-1663.webp",

                sources: [
                    "Очаківський історичний матеріал про Івана Сірка",
                ],
            },
            {
                id: "perekop-campaigns-1663",
                slug: "perekop-campaigns-1663",
                order: 4,
                year: "1663",
                dateUk: "осінь 1663 року",
                dateEn: "autumn 1663",

                type: "campaign",
                direction: "crimea",
                importance: "major",
                resultType: "strategic-success",
                confidence: "medium",

                titleUk: "Походи на Перекопські укріплення",
                titleEn: "Campaigns against the Perekop Fortifications",

                locationUk: "Перекоп, кримський перешийок",
                locationEn: "Perekop, Crimean Isthmus",

                opponentsUk: ["Кримське ханство", "татарські сили"],
                opponentsEn: ["Crimean Khanate", "Tatar forces"],

                commandersUk: ["Іван Сірко", "Григорій Косагов"],
                commandersEn: ["Ivan Sirko", "Grigory Kosagov"],

                forcesUk:
                    "У джерельному викладі зазначаються загони Косагова, донські козаки, калмики та запорожці Сірка; точна загальна чисельність не подана.",
                forcesEn:
                    "The account mentions Kosagov's detachments, Don Cossacks, Kalmyks, and Sirko's Zaporozhians; exact total strength is not given.",

                lossesUk:
                    "Точні втрати не подані.",
                lossesEn:
                    "Exact losses are not given.",

                resultUk:
                    "Походи відволікали кримських татар від підтримки великого походу польського короля Яна II Казимира.",
                resultEn:
                    "The campaigns diverted Crimean Tatars from supporting the major campaign of Polish king Jan II Casimir.",

                summaryUk:
                    "У 1663 році Сірко разом із Григорієм Косаговим діяв проти Перекопу, стратегічних воріт Криму.",

                summaryEn:
                    "In 1663, Sirko together with Grigory Kosagov acted against Perekop, the strategic gateway to Crimea.",

                courseUk: [
                    "На тлі русько-польської війни кримські татари підтримували польського короля Яна II Казимира.",
                    "Щоб відволікти татарські сили від підтримки польського наступу, Косагов із союзними силами здійснив рейд до Дністра.",
                    "Після цього сили Косагова з’єдналися із запорожцями Сірка й несподівано підійшли до Перекопу.",
                    "Косагов командував кіннотою, а Сірко взяв на себе командування піхотою.",
                    "Подія була частиною ширшої кампанії 1663 року, спрямованої на стримування Кримського ханства.",
                ],

                courseEn: [
                    "During the Russo-Polish War, the Crimean Tatars supported Polish king Jan II Casimir.",
                    "To divert Tatar forces from supporting the Polish offensive, Kosagov with allied forces raided toward the Dniester.",
                    "After that, Kosagov's forces joined Sirko's Zaporozhians and unexpectedly approached Perekop.",
                    "Kosagov commanded the cavalry, while Sirko took command of the infantry.",
                    "The event was part of the broader 1663 campaign aimed at restraining the Crimean Khanate.",
                ],

                significanceUk: [
                    "Перекоп був ключовим проходом до Криму.",
                    "Операція мала стратегічне значення, бо відволікала кримські сили від участі у війні на боці Польщі.",
                    "Подія показує взаємодію Сірка з союзними військовими силами, зокрема з Косаговим, донцями й калмиками.",
                ],

                significanceEn: [
                    "Perekop was the key passage into Crimea.",
                    "The operation had strategic significance because it diverted Crimean forces from participating in the war on Poland's side.",
                    "The event shows Sirko's cooperation with allied military forces, including Kosagov, Don Cossacks, and Kalmyks.",
                ],

                historicalNoteUk:
                    "Це не одна ізольована битва, а серія походів і рейдових дій проти Перекопського напрямку восени 1663 року.",

                historicalNoteEn:
                    "This was not one isolated battle, but a series of campaigns and raiding actions against the Perekop direction in autumn 1663.",

                hasDetailPage: false,
                image: "/images/military/events/perekop-campaigns-1663.webp",

                sources: [
                    "Вікіпедія: Походи на Перекоп 1663",
                    "Матеріали про кампанію 1663 року",
                ],
            },
            {
                id: "perekop-raid-december-1663",
                slug: "perekop-raid-december-1663",
                order: 5,
                year: "1663",
                dateUk: "6 грудня 1663 року",
                dateEn: "December 6, 1663",

                type: "raid",
                direction: "crimea",
                importance: "major",
                resultType: "victory",
                confidence: "high",

                titleUk: "Рейд на Перекоп",
                titleEn: "Raid on Perekop",

                locationUk: "Перекоп, узбережжя Чорного моря",
                locationEn: "Perekop, Black Sea coast",

                opponentsUk: ["кримські татари"],
                opponentsEn: ["Crimean Tatars"],

                commandersUk: ["Іван Сірко", "Григорій Косагов"],
                commandersEn: ["Ivan Sirko", "Grigory Kosagov"],

                forcesUk:
                    "За музейним викладом: 90 козаків, 30 донців і 60 калмиків.",
                forcesEn:
                    "According to the museum account: 90 Cossacks, 30 Don Cossacks, and 60 Kalmyks.",

                lossesUk:
                    "Точні втрати не подані; згадується спалення татарських сіл і визволення християнських полонених.",
                lossesEn:
                    "Exact losses are not given; the burning of Tatar villages and liberation of Christian captives are mentioned.",

                resultUk:
                    "Сірко здійснив швидкий рейд на Перекопський напрямок, палив татарські села й визволяв християнських полонених.",
                resultEn:
                    "Sirko conducted a rapid raid in the Perekop direction, burned Tatar villages, and liberated Christian captives.",

                summaryUk:
                    "6 грудня 1663 року Сірко з невеликим змішаним загоном вирушив на Перекоп і дійшов до берегів Чорного моря.",

                summaryEn:
                    "On December 6, 1663, Sirko led a small mixed detachment toward Perekop and reached the Black Sea coast.",

                courseUk: [
                    "Сірко разом із Косаговим узяв невеликий загін: 90 козаків, 30 донців і 60 калмиків.",
                    "Загін вирушив на Перекопський напрямок.",
                    "Козаки успішно дійшли до берегів Чорного моря.",
                    "Під час рейду вони палили татарські села.",
                    "Окремо згадується визволення християнських полонених.",
                ],

                courseEn: [
                    "Sirko together with Kosagov took a small detachment: 90 Cossacks, 30 Don Cossacks, and 60 Kalmyks.",
                    "The detachment moved toward Perekop.",
                    "The Cossacks successfully reached the Black Sea coast.",
                    "During the raid, they burned Tatar villages.",
                    "The liberation of Christian captives is specifically mentioned.",
                ],

                significanceUk: [
                    "Це одна з найконкретніших подій раннього кримського циклу Сірка.",
                    "Подія має точну дату й конкретну чисельність загону в музейному викладі.",
                    "Рейд добре показує тактику Сірка: мала група, швидкий рух, удар по тилових поселеннях, визволення полонених.",
                ],

                significanceEn: [
                    "This is one of the most specific events of Sirko's early Crimean cycle.",
                    "The event has an exact date and specific detachment strength in the museum account.",
                    "The raid clearly shows Sirko's tactics: a small group, rapid movement, a strike against rear settlements, and liberation of captives.",
                ],

                historicalNoteUk:
                    "Чисельність загону подана за музейним викладом; втрати сторін не деталізовані.",

                historicalNoteEn:
                    "The detachment strength is taken from the museum account; losses of the sides are not detailed.",

                hasDetailPage: false,
                image: "/images/military/events/perekop-raid-december-1663.webp",

                sources: [
                    "Дніпропетровський національний історичний музей: Іван Сірко — походи в Крим та Волоську землю",
                ],
            },
        ],
    },
    {
        id: "right-bank-uprising",
        slug: "right-bank-uprising",
        order: 3,
        direction: "ruina",

        titleUk: "Правобережне повстання",
        titleEn: "Right-Bank Uprising",

        shortTitleUk: "Правобережжя",
        shortTitleEn: "Right Bank",

        periodUk: "1664–1665",
        periodEn: "1664–1665",

        summaryUk:
            "Період участі Івана Сірка у Правобережному повстанні проти влади Павла Тетері, польських сил і татарської підтримки Речі Посполитої.",

        summaryEn:
            "The period of Ivan Sirko's participation in the Right-Bank uprising against Pavlo Teteria's authority, Polish forces, and Tatar support for the Polish-Lithuanian Commonwealth.",

        contentUk: [
            "Правобережне повстання 1664–1665 років почалося в умовах війни Московії з Річчю Посполитою та боротьби за владу в козацькій Україні.",
            "Сірко виступив на Правобережжя з запорожцями в першій половині лютого 1664 року.",
            "Повстання швидко охопило значну частину Брацлавщини й Київщини, а чисельність його учасників, за даними ЕІУ, зросла приблизно до 20 тисяч осіб.",
            "Цей блок важливий тим, що показує Сірка не лише як противника татар і турків, а й як активного учасника внутрішньої війни доби Руїни.",
        ],

        contentEn: [
            "The Right-Bank uprising of 1664–1665 began in the context of the Muscovite-Polish war and the struggle for power in Cossack Ukraine.",
            "Sirko marched to the Right Bank with the Zaporozhians in the first half of February 1664.",
            "The uprising quickly covered much of Bratslavshchyna and Kyivshchyna, and according to the Encyclopedia of Ukrainian History, the number of participants rose to about 20,000.",
            "This block is important because it shows Sirko not only as an enemy of the Tatars and Ottomans, but also as an active participant in the internal war of the Ruin period.",
        ],

        image: "/images/military/right-bank-uprising.webp",

        events: [
            {
                id: "bratslav-campaign-february-1664",
                slug: "bratslav-campaign-february-1664",
                order: 1,
                year: "1664",
                dateUk: "перша половина лютого 1664 року",
                dateEn: "first half of February 1664",

                type: "campaign",
                direction: "ruina",
                importance: "major",
                resultType: "strategic-success",
                confidence: "high",

                titleUk: "Похід Сірка на Брацлавщину",
                titleEn: "Sirko's Campaign to Bratslavshchyna",

                locationUk: "Брацлавщина, Правобережна Україна",
                locationEn: "Bratslavshchyna, Right-Bank Ukraine",

                opponentsUk: [
                    "прибічники Павла Тетері",
                    "сили Речі Посполитої",
                ],
                opponentsEn: [
                    "supporters of Pavlo Teteria",
                    "forces of the Polish-Lithuanian Commonwealth",
                ],

                commandersUk: [
                    "Іван Сірко",
                    "Дмитро Сулима",
                    "Семен Височан",
                ],
                commandersEn: [
                    "Ivan Sirko",
                    "Dmytro Sulyma",
                    "Semen Vysochan",
                ],

                forcesUk:
                    "Точна чисельність війська Сірка на початку походу не подана; згодом кількість учасників повстання зросла приблизно до 20 тисяч осіб.",
                forcesEn:
                    "The exact strength of Sirko's force at the beginning of the campaign is not given; later the number of uprising participants rose to about 20,000.",

                lossesUk:
                    "Точні втрати на початковому етапі походу не подані.",
                lossesEn:
                    "Exact losses at the initial stage of the campaign are not given.",

                resultUk:
                    "Похід Сірка став початком широкого Правобережного повстання.",
                resultEn:
                    "Sirko's campaign became the beginning of a broad Right-Bank uprising.",

                summaryUk:
                    "У першій половині лютого 1664 року Сірко з запорожцями вирушив на Брацлавщину, де його підтримали місцеві козацькі сили.",

                summaryEn:
                    "In the first half of February 1664, Sirko and the Zaporozhians marched to Bratslavshchyna, where local Cossack forces supported him.",

                courseUk: [
                    "Похід Сірка на Брацлавщину став початком Правобережного повстання 1664–1665 років.",
                    "На місці його підтримали торговицький сотник Дмитро Сулима та полковник Семен Височан.",
                    "Повстання швидко розширилося за межі початкового району.",
                    "За короткий час воно охопило значні території Брацлавщини та Київщини.",
                ],

                courseEn: [
                    "Sirko's campaign to Bratslavshchyna became the beginning of the Right-Bank uprising of 1664–1665.",
                    "He was supported locally by Dmytro Sulyma, sotnyk of Torgovytsia, and Colonel Semen Vysochan.",
                    "The uprising quickly expanded beyond its initial area.",
                    "Within a short time, it covered significant territories of Bratslavshchyna and Kyivshchyna.",
                ],

                significanceUk: [
                    "Це одна з головних військово-політичних подій Сірка доби Руїни.",
                    "Похід показує його здатність не лише вести рейди, а й запускати масштабний повстанський рух.",
                    "Подія має чітку дату, регіон і політичний контекст.",
                ],

                significanceEn: [
                    "This is one of Sirko's main military-political events of the Ruin period.",
                    "The campaign shows his ability not only to conduct raids, but also to initiate a large uprising movement.",
                    "The event has a clear date, region, and political context.",
                ],

                historicalNoteUk:
                    "Це не одна битва, а старт кампанії і повстанського руху на Правобережжі.",

                historicalNoteEn:
                    "This was not a single battle, but the beginning of a campaign and uprising movement on the Right Bank.",

                hasDetailPage: false,
                image: "/images/military/events/bratslav-campaign-february-1664.webp",

                sources: [
                    "Енциклопедія історії України: Правобережне повстання 1664–1665",
                ],
            },
            {
                id: "uprising-expansion-bila-tserkva-1664",
                slug: "uprising-expansion-bila-tserkva-1664",
                order: 2,
                year: "1664",
                dateUk: "лютий — березень 1664 року",
                dateEn: "February — March 1664",

                type: "campaign",
                direction: "ruina",
                importance: "major",
                resultType: "strategic-success",
                confidence: "high",

                titleUk: "Розгортання повстання до Білої Церкви",
                titleEn: "Expansion of the Uprising toward Bila Tserkva",

                locationUk: "Брацлавщина, Київщина, Білоцерківський напрямок",
                locationEn: "Bratslavshchyna, Kyivshchyna, Bila Tserkva direction",

                opponentsUk: [
                    "Павло Тетеря",
                    "коронні війська Речі Посполитої",
                    "кримські татарські орди",
                ],
                opponentsEn: [
                    "Pavlo Teteria",
                    "Crown forces of the Polish-Lithuanian Commonwealth",
                    "Crimean Tatar hordes",
                ],

                commandersUk: [
                    "Іван Сірко",
                    "Дмитро Сулима",
                    "Семен Височан",
                ],
                commandersEn: [
                    "Ivan Sirko",
                    "Dmytro Sulyma",
                    "Semen Vysochan",
                ],

                forcesUk:
                    "За ЕІУ, кількість учасників повстання зросла приблизно до 20 тисяч осіб.",
                forcesEn:
                    "According to the Encyclopedia of Ukrainian History, the number of uprising participants rose to about 20,000.",

                lossesUk:
                    "Точні втрати на цьому етапі не подані.",
                lossesEn:
                    "Exact losses at this stage are not given.",

                resultUk:
                    "Повстанці наблизилися до Білоцерківської фортеці, найпотужнішого укріплення Правобережжя.",
                resultEn:
                    "The insurgents approached the Bila Tserkva fortress, the strongest fortification on the Right Bank.",

                summaryUk:
                    "Після початку виступу повстання швидко поширилося й наблизилося до Білої Церкви.",

                summaryEn:
                    "After the uprising began, it spread rapidly and approached Bila Tserkva.",

                courseUk: [
                    "Після походу Сірка на Брацлавщину повстання охопило значні території.",
                    "До руху долучалися місцеві сили Брацлавщини та Київщини.",
                    "Кількість учасників, за даними ЕІУ, зросла приблизно до 20 тисяч.",
                    "Повстанці підійшли до Білоцерківської фортеці, яка була найпотужнішою на Правобережжі.",
                    "Для придушення руху Тетері й коронним силам знадобилася підтримка татарських орд.",
                ],

                courseEn: [
                    "After Sirko's campaign to Bratslavshchyna, the uprising covered significant territories.",
                    "Local forces of Bratslavshchyna and Kyivshchyna joined the movement.",
                    "According to the Encyclopedia of Ukrainian History, the number of participants grew to about 20,000.",
                    "The insurgents approached the Bila Tserkva fortress, the strongest on the Right Bank.",
                    "To suppress the movement, Teteria and Crown forces needed the support of Tatar hordes.",
                ],

                significanceUk: [
                    "Подія показує масштаб повстання, яке почалося з походу Сірка.",
                    "Білоцерківський напрямок мав стратегічне значення для контролю Правобережжя.",
                    "Це один із найбільших епізодів військово-політичної активності Сірка в 1664 році.",
                ],

                significanceEn: [
                    "The event shows the scale of the uprising that began with Sirko's campaign.",
                    "The Bila Tserkva direction had strategic importance for control of the Right Bank.",
                    "This is one of the largest episodes of Sirko's military-political activity in 1664.",
                ],

                historicalNoteUk:
                    "Подію варто подавати як етап повстанської кампанії, а не як окрему точно реконструйовану битву.",

                historicalNoteEn:
                    "The event should be presented as a stage of the uprising campaign, not as a precisely reconstructed separate battle.",

                hasDetailPage: false,
                image: "/images/military/events/uprising-expansion-bila-tserkva-1664.webp",

                sources: [
                    "Енциклопедія історії України: Правобережне повстання 1664–1665",
                ],
            },
            {
                id: "uman-letter-march-1664",
                slug: "uman-letter-march-1664",
                order: 3,
                year: "1664",
                dateUk: "13 березня 1664 року",
                dateEn: "March 13, 1664",

                type: "political-military",
                direction: "ruina",
                importance: "medium",
                resultType: "political-result",
                confidence: "high",

                titleUk: "Лист Сірка з Умані про оборону міст",
                titleEn: "Sirko's Letter from Uman about the Defense of Towns",

                locationUk: "Умань",
                locationEn: "Uman",

                opponentsUk: [
                    "противники повстанців на Правобережжі",
                    "польсько-татарські сили",
                ],
                opponentsEn: [
                    "opponents of the insurgents on the Right Bank",
                    "Polish-Tatar forces",
                ],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "Не подано; джерело фіксує лист і потребу оборони міст, а не чисельність війська.",
                forcesEn:
                    "Not given; the source records the letter and the need to defend towns, not troop strength.",

                lossesUk:
                    "Не застосовується.",
                lossesEn:
                    "Not applicable.",

                resultUk:
                    "Сірко просив надіслати ратних людей для оборони Брацлава, Умані, Кальника та інших міст.",
                resultEn:
                    "Sirko requested military men to defend Bratslav, Uman, Kalnyk, and other towns.",

                summaryUk:
                    "13 березня 1664 року Сірко з Умані писав про необхідність оборони правобережних міст від ворога.",

                summaryEn:
                    "On March 13, 1664, Sirko wrote from Uman about the need to defend Right-Bank towns from the enemy.",

                courseUk: [
                    "Лист був написаний з Умані в розпал подій Правобережного повстання.",
                    "Сірко повідомляв про потребу посилення оборони міст.",
                    "Окремо згадувалися Брацлав, Умань, Кальник та інші подібні міста.",
                    "Цей документ показує, що Сірко діяв не лише рейдами, а й займався організацією оборони території.",
                ],

                courseEn: [
                    "The letter was written from Uman during the events of the Right-Bank uprising.",
                    "Sirko reported the need to strengthen the defense of towns.",
                    "Bratslav, Uman, Kalnyk, and other similar towns were specifically mentioned.",
                    "This document shows that Sirko acted not only through raids, but also through organizing territorial defense.",
                ],

                significanceUk: [
                    "Подія має точну дату й документальне підтвердження.",
                    "Показує Сірка як організатора оборони, а не лише польового командира.",
                    "Добре пояснює військовий стан Правобережжя у березні 1664 року.",
                ],

                significanceEn: [
                    "The event has an exact date and documentary confirmation.",
                    "It shows Sirko as an organizer of defense, not only a field commander.",
                    "It helps explain the military situation on the Right Bank in March 1664.",
                ],

                historicalNoteUk:
                    "Це документальна військово-політична подія, а не битва, але вона прямо пов’язана з кампанією 1664 року.",

                historicalNoteEn:
                    "This is a documentary military-political event, not a battle, but it is directly connected with the 1664 campaign.",

                hasDetailPage: false,
                image: "/images/military/events/uman-letter-march-1664.webp",

                sources: [
                    "Дніпропетровський національний історичний музей: матеріали до монографії Д. Яворницького про Івана Сірка",
                ],
            },
            {
                id: "fighting-teteria-czarniecki-1664",
                slug: "fighting-teteria-czarniecki-1664",
                order: 4,
                year: "1664",
                dateUk: "1664 рік",
                dateEn: "1664",

                type: "battle",
                direction: "ruina",
                importance: "major",
                resultType: "unclear",
                confidence: "medium",

                titleUk: "Бої з прибічниками Тетері та військами Чарнецького",
                titleEn: "Fighting against Teteria's Supporters and Czarniecki's Forces",

                locationUk: "Правобережна Україна",
                locationEn: "Right-Bank Ukraine",

                opponentsUk: [
                    "прибічники Павла Тетері",
                    "польські війська Стефана Чарнецького",
                ],
                opponentsEn: [
                    "supporters of Pavlo Teteria",
                    "Polish troops of Stefan Czarniecki",
                ],

                commandersUk: [
                    "Іван Сірко",
                    "Павло Тетеря",
                    "Стефан Чарнецький",
                ],
                commandersEn: [
                    "Ivan Sirko",
                    "Pavlo Teteria",
                    "Stefan Czarniecki",
                ],

                forcesUk:
                    "Точна чисельність сил у конкретних боях не подана.",
                forcesEn:
                    "Exact troop strength in the specific clashes is not given.",

                lossesUk:
                    "Точні втрати не подані.",
                lossesEn:
                    "Exact losses are not given.",

                resultUk:
                    "Сірко воював проти прибічників Тетері та вступав у бої з польськими військами Чарнецького; загальний підсумок кампанії для повстанців був несприятливим.",
                resultEn:
                    "Sirko fought against Teteria's supporters and clashed with Polish troops under Czarniecki; the overall outcome of the campaign was unfavorable for the insurgents.",

                summaryUk:
                    "У 1664 році Сірко діяв на Правобережжі проти сил Павла Тетері та польських військ Стефана Чарнецького.",

                summaryEn:
                    "In 1664, Sirko operated on the Right Bank against Pavlo Teteria's forces and Stefan Czarniecki's Polish troops.",

                courseUk: [
                    "Павло Тетеря спирався на підтримку Речі Посполитої та татарських сил.",
                    "Сірко очолював запорожців і повстанські сили, які виступали проти Тетері.",
                    "У ході кампанії Сірку доводилося воювати не лише з прибічниками Тетері, а й з польськими військами під проводом Стефана Чарнецького.",
                    "Джерела не дають єдиної детальної реконструкції кожного бою, тому цей event подається як група бойових зіткнень у межах Правобережного повстання.",
                ],

                courseEn: [
                    "Pavlo Teteria relied on the support of the Polish-Lithuanian Commonwealth and Tatar forces.",
                    "Sirko led the Zaporozhians and insurgent forces opposing Teteria.",
                    "During the campaign, Sirko had to fight not only Teteria's supporters, but also Polish troops led by Stefan Czarniecki.",
                    "Sources do not provide one detailed reconstruction of every clash, so this event is presented as a group of combat actions within the Right-Bank uprising.",
                ],

                significanceUk: [
                    "Подія показує Сірка у війні не проти татар чи турків, а в складному внутрішньому конфлікті Руїни.",
                    "Чарнецький був одним із найвідоміших польських воєначальників того часу.",
                    "Цей блок важливий для пояснення, чому Правобережне повстання стало великим військово-політичним конфліктом.",
                ],

                significanceEn: [
                    "The event shows Sirko in a war not against Tatars or Ottomans, but in the complex internal conflict of the Ruin.",
                    "Czarniecki was one of the most prominent Polish commanders of the time.",
                    "This block is important for explaining why the Right-Bank uprising became a major military-political conflict.",
                ],

                historicalNoteUk:
                    "Подія має підтверджений загальний факт бойової участі Сірка, але без точного опису кожної окремої сутички.",

                historicalNoteEn:
                    "The event has a confirmed general fact of Sirko's combat involvement, but without an exact description of each separate clash.",

                hasDetailPage: false,
                image: "/images/military/events/fighting-teteria-czarniecki-1664.webp",

                sources: [
                    "Дніпровська міська бібліотека: Іван Сірко — легендарний кошовий Запорозької Січі",
                    "Енциклопедія історії України: Правобережне повстання 1664–1665",
                ],
            },
            {
                id: "stavyshche-uprising-context-1664-1665",
                slug: "stavyshche-uprising-context-1664-1665",
                order: 5,
                year: "1664–1665",
                dateUk: "липень — жовтень 1664 року; січень 1665 року",
                dateEn: "July — October 1664; January 1665",

                type: "siege",
                direction: "ruina",
                importance: "medium",
                resultType: "defeat",
                confidence: "medium",

                titleUk: "Бої під Ставищами в контексті повстання",
                titleEn: "Fighting near Stavyshche in the Context of the Uprising",

                locationUk: "Ставище, Правобережна Україна",
                locationEn: "Stavyshche, Right-Bank Ukraine",

                opponentsUk: [
                    "Річ Посполита",
                    "Кримське ханство",
                ],
                opponentsEn: [
                    "Polish-Lithuanian Commonwealth",
                    "Crimean Khanate",
                ],

                commandersUk: [
                    "Стефан Чарнецький",
                    "полковник Дячко",
                    "полковник Булганін",
                ],
                commandersEn: [
                    "Stefan Czarniecki",
                    "Colonel Diachko",
                    "Colonel Bulganin",
                ],

                forcesUk:
                    "У доступній довідці по битві конкретна чисельність сторін у цьому уривку не подана.",
                forcesEn:
                    "The available summary of the battle does not provide exact strength figures in this excerpt.",

                lossesUk:
                    "Точні втрати в цьому масиві не подані; результатом стала перемога польсько-литовських і кримських сил.",
                lossesEn:
                    "Exact losses are not given in this dataset; the result was a victory for Polish-Lithuanian and Crimean forces.",

                resultUk:
                    "Перемога Речі Посполитої, Литви та Кримського ханства над повстанськими силами.",
                resultEn:
                    "Victory of the Polish-Lithuanian Commonwealth, Lithuania, and the Crimean Khanate over the insurgent forces.",

                summaryUk:
                    "Бої під Ставищами були одним із важливих епізодів Правобережного повстання 1664–1665 років, хоча пряме командування Сірка саме в цій битві потребує обережного подання.",

                summaryEn:
                    "The fighting near Stavyshche was one of the important episodes of the Right-Bank uprising of 1664–1665, although Sirko's direct command in this particular battle must be presented cautiously.",

                courseUk: [
                    "Ставище стало одним із центрів опору під час Правобережного повстання.",
                    "Бої тривали в кілька етапів: у липні — жовтні 1664 року та знову в січні 1665 року.",
                    "Проти повстанців діяли сили Речі Посполитої та Кримського ханства.",
                    "У доступних довідках командувачами з боку противника названо Стефана Чарнецького, а з боку повстанців — полковників Дячка й Булганіна.",
                    "Подія включена до цієї кампанії як важливий епізод повстання, але не подається як особисто очолювана Сірком битва.",
                ],

                courseEn: [
                    "Stavyshche became one of the centers of resistance during the Right-Bank uprising.",
                    "The fighting took place in several stages: July — October 1664 and again in January 1665.",
                    "The insurgents faced forces of the Polish-Lithuanian Commonwealth and the Crimean Khanate.",
                    "Available summaries name Stefan Czarniecki on the opposing side, and Colonels Diachko and Bulganin among the insurgent commanders.",
                    "The event is included in this campaign as an important episode of the uprising, but not presented as a battle personally commanded by Sirko.",
                ],

                significanceUk: [
                    "Подія показує масштаб і драматизм Правобережного повстання.",
                    "Вона пояснює, чому кампанія 1664–1665 років завершилася важко для повстанців.",
                    "У масиві її треба тримати з приміткою про обережну атрибуцію ролі Сірка.",
                ],

                significanceEn: [
                    "The event shows the scale and drama of the Right-Bank uprising.",
                    "It explains why the 1664–1665 campaign ended badly for the insurgents.",
                    "In the dataset it should be kept with a note about cautious attribution of Sirko's role.",
                ],

                historicalNoteUk:
                    "Це подія контексту Правобережного повстання. Вона не повинна подаватися як особиста перемога Сірка або як битва, де він точно командував.",

                historicalNoteEn:
                    "This is an event in the context of the Right-Bank uprising. It should not be presented as Sirko's personal victory or as a battle he certainly commanded.",

                hasDetailPage: false,
                image: "/images/military/events/stavyshche-uprising-context-1664-1665.webp",

                sources: [
                    "Вікіпедія: Битва під Ставищами",
                    "Енциклопедія історії України: Правобережне повстання 1664–1665",
                ],
            },
        ],
    },
    {
        id: "sloboda-crimean-campaigns",
        slug: "sloboda-crimean-campaigns",
        order: 4,
        direction: "ruina",

        titleUk: "Слобожанщина і Крим",
        titleEn: "Sloboda Ukraine and Crimea",

        shortTitleUk: "1668",
        shortTitleEn: "1668",

        periodUk: "1668",
        periodEn: "1668",

        summaryUk:
            "Кампанія 1668 року поєднує участь Сірка у виступах проти царських воєвод на Слобожанщині та його подальші походи проти Кримського ханства.",

        summaryEn:
            "The 1668 campaign combines Sirko's participation in uprisings against Muscovite voivodes in Sloboda Ukraine and his later campaigns against the Crimean Khanate.",

        contentUk: [
            "У 1668 році Сірко на певний час залишив Січ і з’явився на Слобожанщині.",
            "Там його обрали полковником Зміївського полку, а місцеве населення й козаки виступили проти царських воєвод.",
            "Після невдачі під Харковом Сірко повернувся на Запорожжя й продовжив боротьбу проти татарських сил.",
            "У цьому ж році джерела згадують кілька походів Сірка до Криму, зокрема похід у напрямку Кафи, Ширимбеївських улусів і Бахчисарая.",
        ],

        contentEn: [
            "In 1668, Sirko temporarily left the Sich and appeared in Sloboda Ukraine.",
            "There he was elected colonel of the Zmiiv regiment, while local people and Cossacks rose against Muscovite voivodes.",
            "After failure near Kharkiv, Sirko returned to Zaporizhia and continued the struggle against Tatar forces.",
            "In the same year, sources mention several Sirko campaigns into Crimea, including actions toward Kaffa, the Shyrymbei uluses, and Bakhchysarai.",
        ],

        image: "/images/military/sloboda-crimean-campaigns.webp",

        events: [
            {
                id: "zmiiv-regiment-uprising-1668",
                slug: "zmiiv-regiment-uprising-1668",
                order: 1,
                year: "1668",
                dateUk: "початок 1668 року",
                dateEn: "early 1668",

                type: "political-military",
                direction: "ruina",
                importance: "major",
                resultType: "political-result",
                confidence: "medium",

                titleUk: "Сірко на Слобожанщині",
                titleEn: "Sirko in Sloboda Ukraine",

                locationUk: "Слобожанщина, Зміївський полк",
                locationEn: "Sloboda Ukraine, Zmiiv regiment",

                opponentsUk: [
                    "царські воєводи",
                    "московські залоги",
                ],
                opponentsEn: [
                    "Muscovite voivodes",
                    "Muscovite garrisons",
                ],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "Точна чисельність сил Сірка на Слобожанщині не подана.",
                forcesEn:
                    "The exact strength of Sirko's forces in Sloboda Ukraine is not given.",

                lossesUk:
                    "Точні втрати не подані.",
                lossesEn:
                    "Exact losses are not given.",

                resultUk:
                    "Сірко очолив виступи проти царських воєвод у регіоні, але повстання не стало тривалим успішним рухом.",
                resultEn:
                    "Sirko led actions against Muscovite voivodes in the region, but the uprising did not become a lasting successful movement.",

                summaryUk:
                    "У 1668 році Сірко з’явився на Слобожанщині, де його обрали полковником Зміївського полку.",

                summaryEn:
                    "In 1668, Sirko appeared in Sloboda Ukraine, where he was elected colonel of the Zmiiv regiment.",

                courseUk: [
                    "Сірко на певний час залишив Січ і прибув на Слобожанщину.",
                    "Там його обрали полковником Зміївського полку.",
                    "У регіоні виступили мешканці Красного Кута, робітники Торських соляних заводів і козаки Зміївського полку.",
                    "Виступ був спрямований проти гніту царських воєвод.",
                ],

                courseEn: [
                    "Sirko temporarily left the Sich and arrived in Sloboda Ukraine.",
                    "There he was elected colonel of the Zmiiv regiment.",
                    "The people of Krasnyi Kut, workers of the Tor salt works, and Cossacks of the Zmiiv regiment rose in the region.",
                    "The uprising was directed against the oppression of Muscovite voivodes.",
                ],

                significanceUk: [
                    "Подія показує Сірка не лише як запорозького кошового, а і як лідера ширшого антимосковського виступу.",
                    "Зміївський епізод пов’язує військову біографію Сірка зі Слобожанщиною.",
                    "Це військово-політична подія, а не окрема битва.",
                ],

                significanceEn: [
                    "The event shows Sirko not only as a Zaporizhian leader but also as the leader of a broader anti-Muscovite uprising.",
                    "The Zmiiv episode connects Sirko's military biography with Sloboda Ukraine.",
                    "This is a military-political event, not a separate battle.",
                ],

                historicalNoteUk:
                    "Подія має загальний опис у джерелах, але без точної чисельності війська та втрат.",

                historicalNoteEn:
                    "The event has a general description in sources, but no exact troop strength or losses.",

                hasDetailPage: false,
                image: "/images/military/events/zmiiv-regiment-uprising-1668.webp",

                sources: [
                    "Енциклопедія історії України: Повстання лівобережне 1668",
                    "Біографічні матеріали про Івана Сірка",
                ],
            },
            {
                id: "kharkiv-failure-1668",
                slug: "kharkiv-failure-1668",
                order: 2,
                year: "1668",
                dateUk: "1668 рік",
                dateEn: "1668",

                type: "siege",
                direction: "ruina",
                importance: "major",
                resultType: "defeat",
                confidence: "high",

                titleUk: "Невдала спроба здобути Харків",
                titleEn: "Failed Attempt to Take Kharkiv",

                locationUk: "Харків, Слобожанщина",
                locationEn: "Kharkiv, Sloboda Ukraine",

                opponentsUk: [
                    "царська залога Харкова",
                    "московські ратні люди",
                ],
                opponentsEn: [
                    "Muscovite garrison of Kharkiv",
                    "Muscovite troops",
                ],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "Точна чисельність повстанців не подана.",
                forcesEn:
                    "The exact number of insurgents is not given.",

                lossesUk:
                    "Точні втрати не подані; джерело фіксує невдачу Сірка під Харковом.",
                lossesEn:
                    "Exact losses are not given; the source records Sirko's failure near Kharkiv.",

                resultUk:
                    "Сірко не зміг здобути Харків; після цього повстання на Слобожанщині пішло на спад.",
                resultEn:
                    "Sirko failed to take Kharkiv; after that, the uprising in Sloboda Ukraine declined.",

                summaryUk:
                    "Спроба Сірка здобути Харків завершилася невдачею й стала переломним моментом слобожанського виступу.",

                summaryEn:
                    "Sirko's attempt to take Kharkiv failed and became a turning point of the Sloboda uprising.",

                courseUk: [
                    "Повстанський рух на Слобожанщині розгортався проти царських воєвод.",
                    "Сірко спробував поширити виступ на Харків.",
                    "Харківська залога виявилася достатньо сильною, щоб втримати місто.",
                    "Після невдачі під Харковом повстання на Слобожанщині почало спадати.",
                ],

                courseEn: [
                    "The uprising in Sloboda Ukraine developed against Muscovite voivodes.",
                    "Sirko tried to extend the movement to Kharkiv.",
                    "The Kharkiv garrison proved strong enough to hold the town.",
                    "After the failure near Kharkiv, the uprising in Sloboda Ukraine began to decline.",
                ],

                significanceUk: [
                    "Це важливий епізод, бо тут Сірко зазнав політично-військової невдачі.",
                    "Подія пояснює, чому він повернувся до запорозького й кримського напрямку.",
                    "У роуті її треба подавати чесно як поразку або невдачу, а не як перемогу.",
                ],

                significanceEn: [
                    "This is important because Sirko suffered a military-political failure here.",
                    "The event explains why he returned to the Zaporizhian and Crimean direction.",
                    "In the route, it should be presented honestly as a defeat or failure, not as a victory.",
                ],

                historicalNoteUk:
                    "ЕІУ прямо фіксує, що Сірко не зміг здобути Харків; точні деталі бою не подані.",

                historicalNoteEn:
                    "The Encyclopedia of Ukrainian History directly records that Sirko failed to take Kharkiv; exact battle details are not given.",

                hasDetailPage: false,
                image: "/images/military/events/kharkiv-failure-1668.webp",

                sources: [
                    "Енциклопедія історії України: Повстання лівобережне 1668",
                ],
            },
            {
                id: "crimean-raid-october-1668",
                slug: "crimean-raid-october-1668",
                order: 3,
                year: "1668",
                dateUk: "жовтень 1668 року",
                dateEn: "October 1668",

                type: "raid",
                direction: "crimea",
                importance: "major",
                resultType: "victory",
                confidence: "high",

                titleUk: "Похід на Крим із Іваном Жданом-Рогом",
                titleEn: "Campaign into Crimea with Ivan Zhdan-Rih",

                locationUk: "Крим, Арбаутук, Кафа, Ширимбеївські улуси",
                locationEn: "Crimea, Arbautuk, Kaffa, Shyrymbei uluses",

                opponentsUk: [
                    "Кримське ханство",
                    "татарські улуси",
                ],
                opponentsEn: [
                    "Crimean Khanate",
                    "Tatar uluses",
                ],

                commandersUk: ["Іван Сірко", "Іван Ждан-Ріг"],
                commandersEn: ["Ivan Sirko", "Ivan Zhdan-Rih"],

                forcesUk:
                    "Точна чисельність загонів Сірка і Ждана-Рога не подана.",
                forcesEn:
                    "The exact strength of Sirko's and Zhdan-Rih's detachments is not given.",

                lossesUk:
                    "Джерело згадує, що було побито багато татар і визволено близько двох тисяч руських бранців; точні втрати татар не подані.",
                lossesEn:
                    "The source mentions that many Tatars were killed and about two thousand Ruthenian captives were freed; exact Tatar losses are not given.",

                resultUk:
                    "Козаки спустошили кілька татарських поселень і визволили близько 2000 бранців.",
                resultEn:
                    "The Cossacks devastated several Tatar settlements and liberated about 2,000 captives.",

                summaryUk:
                    "У жовтні 1668 року Сірко разом із кошовим Іваном Жданом-Рогом здійснив похід у Крим двома загонами.",

                summaryEn:
                    "In October 1668, Sirko together with Kish Otaman Ivan Zhdan-Rih conducted a campaign into Crimea in two detachments.",

                courseUk: [
                    "Сірко й Іван Ждан-Ріг вирішили діяти проти Криму двома окремими загонами.",
                    "Ждан-Ріг рушив до Арбаутука.",
                    "Сірко зайшов від Кафи, тобто Феодосії, на Ширимбеївські улуси.",
                    "У ході походу козаки спустошили кілька татарських сіл.",
                    "Було визволено близько двох тисяч руських бранців.",
                ],

                courseEn: [
                    "Sirko and Ivan Zhdan-Rih decided to act against Crimea in two separate detachments.",
                    "Zhdan-Rih moved toward Arbautuk.",
                    "Sirko advanced from Kaffa, that is Feodosia, toward the Shyrymbei uluses.",
                    "During the campaign, the Cossacks devastated several Tatar villages.",
                    "About two thousand Ruthenian captives were liberated.",
                ],

                significanceUk: [
                    "Це одна з найконкретніше описаних кримських операцій Сірка 1668 року.",
                    "Подія має чітку географію: Арбаутук, Кафа, Ширимбеївські улуси.",
                    "Визволення бранців було одним із головних мотивів таких походів.",
                ],

                significanceEn: [
                    "This is one of the most specifically described Crimean operations of Sirko in 1668.",
                    "The event has clear geography: Arbautuk, Kaffa, and the Shyrymbei uluses.",
                    "The liberation of captives was one of the main motives of such campaigns.",
                ],

                historicalNoteUk:
                    "Джерело подає конкретний напрямок і результат, але не дає точної чисельності військ і втрат.",

                historicalNoteEn:
                    "The source gives a specific direction and result, but does not provide exact troop strength or losses.",

                hasDetailPage: false,
                image: "/images/military/events/crimean-raid-october-1668.webp",

                sources: [
                    "Дніпропетровський національний історичний музей: Іван Сірко — походи в Крим та Волоську землю",
                    "Вікіпедія: Іван Ждан-Ріг",
                ],
            },
            {
                id: "third-crimean-campaign-1668",
                slug: "third-crimean-campaign-1668",
                order: 4,
                year: "1668",
                dateUk: "1668 рік, третій похід на Крим",
                dateEn: "1668, third campaign into Crimea",

                type: "campaign",
                direction: "crimea",
                importance: "major",
                resultType: "victory",
                confidence: "medium",

                titleUk: "Третій кримський похід 1668 року",
                titleEn: "Third Crimean Campaign of 1668",

                locationUk: "Кримський напрямок",
                locationEn: "Crimean direction",

                opponentsUk: [
                    "Кримське ханство",
                    "ординці",
                ],
                opponentsEn: [
                    "Crimean Khanate",
                    "Horde warriors",
                ],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "Точна чисельність війська Сірка не подана.",
                forcesEn:
                    "The exact strength of Sirko's force is not given.",

                lossesUk:
                    "У популярних викладах згадується знищення до 3000 ординців і захоплення близько 500 у полон; ці цифри потребують обережного подання.",
                lossesEn:
                    "Popular accounts mention up to 3,000 Horde warriors killed and about 500 captured; these figures should be presented cautiously.",

                resultUk:
                    "Похід завершився значним розгромом ординських сил за джерельним переказом.",
                resultEn:
                    "The campaign ended with a significant defeat of Horde forces according to the source tradition.",

                summaryUk:
                    "Джерела згадують, що під час третього кримського походу 1668 року Сірко завдав великих втрат ординцям.",

                summaryEn:
                    "Sources mention that during the third Crimean campaign of 1668, Sirko inflicted heavy losses on Horde forces.",

                courseUk: [
                    "Після повернення на Запорожжя Сірко продовжив антитатарські походи.",
                    "Протягом 1668 року джерела згадують чотири походи на Крим.",
                    "Під час третього походу, за популярним викладом, було знищено до трьох тисяч ординців.",
                    "Близько п’ятисот ворогів, за тим самим викладом, було взято в полон.",
                    "Точна локалізація й докладний перебіг бою в коротких джерелах не подані.",
                ],

                courseEn: [
                    "After returning to Zaporizhia, Sirko continued anti-Tatar campaigns.",
                    "Sources mention four campaigns into Crimea during 1668.",
                    "During the third campaign, according to popular accounts, up to three thousand Horde warriors were killed.",
                    "About five hundred enemies were reportedly taken prisoner.",
                    "The exact location and detailed course of the fighting are not provided in short sources.",
                ],

                significanceUk: [
                    "Подія показує інтенсивність антитатарської кампанії Сірка 1668 року.",
                    "Цифри втрат роблять її важливою, але їх треба подавати як джерельний переказ, а не абсолютно встановлений факт.",
                    "Окрему single page робити не варто без кращого джерела.",
                ],

                significanceEn: [
                    "The event shows the intensity of Sirko's anti-Tatar campaign in 1668.",
                    "The casualty figures make it important, but they should be presented as a source tradition, not as an absolutely established fact.",
                    "A separate single page should not be made without a better source.",
                ],

                historicalNoteUk:
                    "Цифри 3000 убитих і 500 полонених зустрічаються в популярних викладах; для академічного подання їх треба маркувати як неповністю перевірені.",

                historicalNoteEn:
                    "The figures of 3,000 killed and 500 captured appear in popular accounts; for academic presentation they should be marked as not fully verified.",

                hasDetailPage: false,
                image: "/images/military/events/third-crimean-campaign-1668.webp",

                sources: [
                    "Популярні історичні виклади про походи Сірка 1668 року",
                    "Матеріали про боротьбу Івана Сірка з турецько-татарськими силами",
                ],
            },
            {
                id: "bakhchysarai-campaign-1668",
                slug: "bakhchysarai-campaign-1668",
                order: 5,
                year: "1668",
                dateUk: "1668 рік, четвертий похід на Крим",
                dateEn: "1668, fourth campaign into Crimea",

                type: "campaign",
                direction: "crimea",
                importance: "major",
                resultType: "strategic-success",
                confidence: "medium",

                titleUk: "Похід до Бахчисарая",
                titleEn: "Campaign toward Bakhchysarai",

                locationUk: "Бахчисарай, Крим",
                locationEn: "Bakhchysarai, Crimea",

                opponentsUk: [
                    "Кримське ханство",
                    "кримськотатарські сили",
                ],
                opponentsEn: [
                    "Crimean Khanate",
                    "Crimean Tatar forces",
                ],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "У популярних викладах згадуються запорожці, донські козаки та калмики; точна чисельність не подана.",
                forcesEn:
                    "Popular accounts mention Zaporozhians, Don Cossacks, and Kalmyks; exact strength is not given.",

                lossesUk:
                    "Точні втрати не подані.",
                lossesEn:
                    "Exact losses are not given.",

                resultUk:
                    "Запорожці з союзниками дійшли до Бахчисарая й створили загрозу ханській столиці.",
                resultEn:
                    "The Zaporozhians and their allies reached Bakhchysarai and threatened the khan's capital.",

                summaryUk:
                    "Під час четвертого кримського походу 1668 року Сірко з союзниками дійшов до Бахчисарая.",

                summaryEn:
                    "During the fourth Crimean campaign of 1668, Sirko and his allies reached Bakhchysarai.",

                courseUk: [
                    "Після кількох кримських походів 1668 року Сірко здійснив ще один удар углиб Криму.",
                    "У популярних викладах зазначається, що разом із запорожцями діяли донські козаки й калмики.",
                    "Військо дійшло до Бахчисарая, столиці Кримського ханства.",
                    "Сам факт наближення до ханської столиці мав сильний психологічний ефект.",
                    "Докладної реконструкції штурму або бою біля Бахчисарая короткі джерела не подають.",
                ],

                courseEn: [
                    "After several Crimean campaigns in 1668, Sirko carried out another strike deep into Crimea.",
                    "Popular accounts state that Don Cossacks and Kalmyks acted together with the Zaporozhians.",
                    "The force reached Bakhchysarai, the capital of the Crimean Khanate.",
                    "The very approach to the khan's capital had a strong psychological effect.",
                    "Short sources do not provide a detailed reconstruction of an assault or battle near Bakhchysarai.",
                ],

                significanceUk: [
                    "Бахчисарай був центром влади Кримського ханства.",
                    "Похід показав, що Сірко міг не лише обороняти Запорожжя, а й загрожувати серцю ханства.",
                    "Це одна з найсимволічніших подій кримського циклу 1668 року.",
                ],

                significanceEn: [
                    "Bakhchysarai was the center of power of the Crimean Khanate.",
                    "The campaign showed that Sirko could not only defend Zaporizhia, but also threaten the heart of the khanate.",
                    "This is one of the most symbolic events of the 1668 Crimean cycle.",
                ],

                historicalNoteUk:
                    "Подія має сильне символічне значення, але джерела не дають повної реконструкції бою чи точних втрат.",

                historicalNoteEn:
                    "The event has strong symbolic significance, but sources do not provide a full battle reconstruction or exact losses.",

                hasDetailPage: false,
                image: "/images/military/events/bakhchysarai-campaign-1668.webp",

                sources: [
                    "Популярні історичні виклади про чотири походи Сірка на Крим 1668 року",
                    "Енциклопедія історії України: Сірко Іван",
                ],
            },
        ],
    },
    {
        id: "ottoman-wars",
        slug: "ottoman-wars",
        order: 5,
        direction: "ottoman",

        titleUk: "Османи",
        titleEn: "Ottomans",

        shortTitleUk: "Османи",
        shortTitleEn: "Ottomans",

        periodUk: "1673–1679",
        periodEn: "1673–1679",

        summaryUk:
            "Блок походів і бойових дій Івана Сірка проти османських фортець, турецьких гарнізонів, татарських союзників Османської імперії та комунікацій ворога на Дніпрі й Чорноморському напрямку.",

        summaryEn:
            "A block of Ivan Sirko's campaigns and military actions against Ottoman fortresses, Turkish garrisons, Tatar allies of the Ottoman Empire, and enemy communications on the Dnipro and Black Sea routes.",

        contentUk: [
            "Після повернення із заслання Сірко знову став одним із головних організаторів боротьби Запорожжя проти турецько-татарської загрози.",
            "У 1670-х роках його дії були спрямовані проти Очакова, Іслам-Кермена, Кизикермена, Тавані, а також проти постачання османських і татарських сил під час Чигиринських походів.",
            "У цих подіях Сірко діяв як рейдовий командир: бив по фортецях, комунікаціях, переправах, флотиліях і тилових пунктах противника.",
            "Для частини походів джерела дають точні дати й місця, для частини — лише загальний напрямок і результат, тому в подіях окремо позначено, де дані потребують обережного подання.",
        ],

        contentEn: [
            "After returning from exile, Sirko again became one of the main organizers of Zaporizhia's struggle against the Ottoman-Tatar threat.",
            "In the 1670s, his actions were directed against Ochakiv, Islam-Kermen, Kyzykermen, Tavan, and against the supply lines of Ottoman and Tatar forces during the Chyhyryn campaigns.",
            "In these events, Sirko acted as a raiding commander: striking fortresses, communications, crossings, flotillas, and rear enemy points.",
            "For some campaigns, sources provide exact dates and places; for others, only the general direction and outcome are known, so the events mark where the data should be presented cautiously.",
        ],

        image: "/images/military/ottoman-wars.webp",

        events: [
            {
                id: "return-from-exile-1673",
                slug: "return-from-exile-1673",
                order: 1,
                year: "1673",
                dateUk: "1673 рік",
                dateEn: "1673",

                type: "political-military",
                direction: "ottoman",
                importance: "major",
                resultType: "political-result",
                confidence: "high",

                titleUk: "Повернення Сірка із заслання",
                titleEn: "Sirko's Return from Exile",

                locationUk: "Московія, Запорожжя",
                locationEn: "Muscovy, Zaporizhia",

                opponentsUk: [
                    "Османська імперія",
                    "Кримське ханство",
                ],
                opponentsEn: [
                    "Ottoman Empire",
                    "Crimean Khanate",
                ],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "Не застосовується: це військово-політична подія, а не бойове зіткнення.",
                forcesEn:
                    "Not applicable: this was a military-political event, not a combat engagement.",

                lossesUk: "Не застосовується.",
                lossesEn: "Not applicable.",

                resultUk:
                    "Сірко повернувся до військово-політичної діяльності на Запорожжі в умовах нової османської загрози.",
                resultEn:
                    "Sirko returned to military-political activity in Zaporizhia under the conditions of a renewed Ottoman threat.",

                summaryUk:
                    "Після заслання Сірка повернули, бо загроза з боку Османської імперії та Кримського ханства вимагала досвідченого запорозького воєначальника.",

                summaryEn:
                    "After exile, Sirko was returned because the threat from the Ottoman Empire and the Crimean Khanate required an experienced Zaporizhian commander.",

                courseUk: [
                    "Сірко був засланий до Сибіру після конфлікту з московською владою.",
                    "Однак ситуація на південному напрямку загострилася через османську активність.",
                    "Запорожжю був потрібен досвідчений командир, який добре знав степову війну й турецько-татарські маршрути.",
                    "Після повернення Сірко знову включився в боротьбу проти Османської імперії та Кримського ханства.",
                ],

                courseEn: [
                    "Sirko had been exiled to Siberia after conflict with Muscovite authorities.",
                    "However, the southern frontier became more dangerous because of Ottoman activity.",
                    "Zaporizhia needed an experienced commander who knew steppe warfare and Ottoman-Tatar routes well.",
                    "After returning, Sirko again joined the struggle against the Ottoman Empire and the Crimean Khanate.",
                ],

                significanceUk: [
                    "Ця подія пояснює, чому після заслання Сірко знову став важливою військовою фігурою.",
                    "Повернення відкрило його пізній період боротьби проти османсько-татарських сил.",
                    "Подія не є битвою, але є важливою точкою переходу до наступних кампаній.",
                ],

                significanceEn: [
                    "This event explains why Sirko again became an important military figure after exile.",
                    "His return opened the late period of his struggle against Ottoman-Tatar forces.",
                    "It is not a battle, but it is an important transition point toward the following campaigns.",
                ],

                historicalNoteUk:
                    "Подія залишена в military-масиві як перехід до пізніх османських кампаній Сірка.",

                historicalNoteEn:
                    "The event is kept in the military dataset as a transition to Sirko's late Ottoman campaigns.",

                hasDetailPage: false,
                image: "/images/military/events/return-from-exile-1673.webp",

                sources: [
                    "Енциклопедія історії України: Сірко Іван",
                    "Юрій Мицик: Отаман Іван Сірко",
                ],
            },
            {
                id: "ochakiv-campaigns-1673",
                slug: "ochakiv-campaigns-1673",
                order: 2,
                year: "1673",
                dateUk: "1673 рік",
                dateEn: "1673",

                type: "campaign",
                direction: "ottoman",
                importance: "major",
                resultType: "strategic-success",
                confidence: "medium",

                titleUk: "Походи на Очаків",
                titleEn: "Campaigns against Ochakiv",

                locationUk: "Очаків, Нижнє Побужжя, Дніпровсько-Бузький лиман",
                locationEn: "Ochakiv, Lower Buh region, Dnipro-Buh estuary",

                opponentsUk: [
                    "османські гарнізони",
                    "турецько-татарські сили",
                ],
                opponentsEn: [
                    "Ottoman garrisons",
                    "Ottoman-Tatar forces",
                ],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "Точна чисельність козацьких сил у походах 1673 року на Очаків у коротких джерелах не подана.",
                forcesEn:
                    "The exact strength of the Cossack forces in the 1673 Ochakiv campaigns is not given in short sources.",

                lossesUk:
                    "Точні втрати сторін не подані.",
                lossesEn:
                    "Exact losses of the sides are not given.",

                resultUk:
                    "Сірко здійснив кілька походів на Очаківський напрямок, чинячи тиск на важливий османський пункт біля виходу до Чорного моря.",
                resultEn:
                    "Sirko conducted several campaigns in the Ochakiv direction, putting pressure on an important Ottoman point near the route to the Black Sea.",

                summaryUk:
                    "У 1673 році Сірко, за Мициком, устиг очолити кілька вдалих походів на Очаків.",

                summaryEn:
                    "In 1673, according to Mytsyk, Sirko managed to lead several successful campaigns against Ochakiv.",

                courseUk: [
                    "Очаків був одним із ключових османських пунктів на південному напрямку.",
                    "Фортеця контролювала простір Дніпровсько-Бузького лиману й була небезпечною для козацького виходу до Чорного моря.",
                    "Після повернення із заслання Сірко знову розгорнув активні дії проти турецьких укріплень.",
                    "У 1673 році він очолив кілька походів на Очаківський напрямок.",
                    "Доступні короткі джерела не дають повної реконструкції кожного з цих походів, тому event подано як групу пов’язаних операцій.",
                ],

                courseEn: [
                    "Ochakiv was one of the key Ottoman points in the southern direction.",
                    "The fortress controlled the Dnipro-Buh estuary and threatened Cossack access to the Black Sea.",
                    "After returning from exile, Sirko again launched active operations against Turkish fortifications.",
                    "In 1673, he led several campaigns in the Ochakiv direction.",
                    "Available short sources do not provide a full reconstruction of each campaign, so the event is presented as a group of related operations.",
                ],

                significanceUk: [
                    "Очаків був постійною ціллю запорозьких ударів через своє стратегічне положення.",
                    "Походи 1673 року показують, що після заслання Сірко швидко повернувся до активної війни.",
                    "Подію варто подавати як серію походів, а не одну точно реконструйовану битву.",
                ],

                significanceEn: [
                    "Ochakiv was a constant target of Zaporizhian strikes because of its strategic position.",
                    "The 1673 campaigns show that after exile Sirko quickly returned to active war.",
                    "The event should be presented as a series of campaigns, not as one precisely reconstructed battle.",
                ],

                historicalNoteUk:
                    "Мицик згадує кілька вдалих походів на Очаків у 1673 році, але без повної деталізації кожної окремої операції.",

                historicalNoteEn:
                    "Mytsyk mentions several successful campaigns against Ochakiv in 1673, but without full details of each separate operation.",

                hasDetailPage: false,
                image: "/images/military/events/ochakiv-campaigns-1673.webp",

                sources: [
                    "Юрій Мицик: Отаман Іван Сірко",
                    "Матеріали про боротьбу Івана Сірка з турецько-татарськими силами",
                ],
            },
            {
                id: "islam-kermen-actions-1673",
                slug: "islam-kermen-actions-1673",
                order: 3,
                year: "1673",
                dateUk: "1673 рік",
                dateEn: "1673",

                type: "siege",
                direction: "ottoman",
                importance: "major",
                resultType: "strategic-success",
                confidence: "medium",

                titleUk: "Дії проти Іслам-Кермена",
                titleEn: "Actions against Islam-Kermen",

                locationUk: "Іслам-Кермен, Нижнє Подніпров’я",
                locationEn: "Islam-Kermen, Lower Dnipro region",

                opponentsUk: [
                    "османський гарнізон",
                    "турецько-татарські сили",
                ],
                opponentsEn: [
                    "Ottoman garrison",
                    "Ottoman-Tatar forces",
                ],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "Точна чисельність козацьких сил не подана.",
                forcesEn:
                    "Exact Cossack strength is not given.",

                lossesUk:
                    "Точні втрати не подані.",
                lossesEn:
                    "Exact losses are not given.",

                resultUk:
                    "Сірко діяв проти важливого османського укріплення на Дніпровському напрямку.",
                resultEn:
                    "Sirko acted against an important Ottoman stronghold in the Dnipro direction.",

                summaryUk:
                    "Іслам-Кермен був одним із ключових укріплених пунктів турецько-татарської системи на Нижньому Дніпрі.",

                summaryEn:
                    "Islam-Kermen was one of the key fortified points of the Ottoman-Tatar system on the Lower Dnipro.",

                courseUk: [
                    "Іслам-Кермен контролював важливий простір у нижній течії Дніпра.",
                    "Такі фортеці обмежували рух запорожців і створювали загрозу для козацьких чайок.",
                    "Сірко неодноразово діяв проти османських пунктів на цьому напрямку.",
                    "У доступних коротких джерелах Іслам-Кермен згадується як один із важливих об’єктів його антиосманських дій.",
                    "Повної реконструкції облоги або штурму для цього епізоду в коротких джерелах немає.",
                ],

                courseEn: [
                    "Islam-Kermen controlled an important area in the lower Dnipro region.",
                    "Such fortresses limited Zaporozhian movement and threatened Cossack chaikas.",
                    "Sirko repeatedly acted against Ottoman points in this direction.",
                    "In available short sources, Islam-Kermen is mentioned as one of the important targets of his anti-Ottoman actions.",
                    "A full reconstruction of a siege or assault for this episode is not available in short sources.",
                ],

                significanceUk: [
                    "Іслам-Кермен був одним із ключових вузлів османського контролю над Дніпровським низом.",
                    "Дії проти нього вписуються в ширшу боротьбу за вихід запорожців до Чорного моря.",
                    "Подія важлива для пояснення, чому Сірко постійно бив по фортецях нижнього Дніпра.",
                ],

                significanceEn: [
                    "Islam-Kermen was one of the key nodes of Ottoman control over the lower Dnipro.",
                    "Actions against it fit into the wider struggle for Zaporozhian access to the Black Sea.",
                    "The event is important for explaining why Sirko constantly struck the fortresses of the lower Dnipro.",
                ],

                historicalNoteUk:
                    "Подія має підтверджений напрямок і стратегічний сенс, але її не треба подавати як повністю реконструйовану битву без додаткових джерел.",

                historicalNoteEn:
                    "The event has a confirmed direction and strategic meaning, but should not be presented as a fully reconstructed battle without additional sources.",

                hasDetailPage: false,
                image: "/images/military/events/islam-kermen-actions-1673.webp",

                sources: [
                    "Енциклопедія історії України: Сірко Іван",
                    "Матеріали про боротьбу Івана Сірка з турецько-татарськими силами",
                ],
            },
            {
                id: "chyhyryn-supply-disruption-1677-1678",
                slug: "chyhyryn-supply-disruption-1677-1678",
                order: 4,
                year: "1677–1678",
                dateUk: "1677–1678 роки",
                dateEn: "1677–1678",

                type: "campaign",
                direction: "ottoman",
                importance: "major",
                resultType: "strategic-success",
                confidence: "medium",

                titleUk: "Удари по постачанню під час Чигиринських походів",
                titleEn: "Strikes against Supply Lines during the Chyhyryn Campaigns",

                locationUk:
                    "нижньодніпровський і степовий напрямки, комунікації турецько-татарських військ",
                locationEn:
                    "Lower Dnipro and steppe directions, communications of Ottoman-Tatar forces",

                opponentsUk: [
                    "Османська імперія",
                    "Кримське ханство",
                    "турецько-татарські війська",
                ],
                opponentsEn: [
                    "Ottoman Empire",
                    "Crimean Khanate",
                    "Ottoman-Tatar forces",
                ],

                commandersUk: [
                    "Іван Сірко",
                    "османські та татарські командири Чигиринських походів",
                ],
                commandersEn: [
                    "Ivan Sirko",
                    "Ottoman and Tatar commanders of the Chyhyryn campaigns",
                ],

                forcesUk:
                    "Точна чисельність запорозьких загонів Сірка в цих діях не подана.",
                forcesEn:
                    "Exact strength of Sirko's Zaporizhian detachments in these actions is not given.",

                lossesUk:
                    "Точні втрати не подані.",
                lossesEn:
                    "Exact losses are not given.",

                resultUk:
                    "Запорожці під проводом Сірка дошкульними ударами перешкоджали постачанню турецьких і татарських військ під час Чигиринських походів.",
                resultEn:
                    "The Zaporozhians under Sirko disrupted the supply of Ottoman and Tatar forces during the Chyhyryn campaigns with painful strikes.",

                summaryUk:
                    "Під час Чигиринських походів 1677–1678 років Сірко діяв не обов’язково біля самих мурів Чигирина, а насамперед по комунікаціях і постачанню ворога.",

                summaryEn:
                    "During the Chyhyryn campaigns of 1677–1678, Sirko acted not necessarily at the walls of Chyhyryn itself, but mainly against enemy communications and supply.",

                courseUk: [
                    "Чигиринські походи були великою війною Османської імперії, Московії та козацьких сил за стратегічно важливий Чигирин.",
                    "Османські й татарські війська потребували постійного постачання степовими маршрутами.",
                    "Запорожці під проводом Сірка завдавали ударів по цих маршрутах і тилових пунктах.",
                    "Такі дії ускладнювали забезпечення турецько-татарських військ.",
                    "Короткі джерела не подають точного списку кожної атаки, тому event подано як групу операцій проти постачання.",
                ],

                courseEn: [
                    "The Chyhyryn campaigns were a major war of the Ottoman Empire, Muscovy, and Cossack forces for strategically important Chyhyryn.",
                    "Ottoman and Tatar armies needed constant supply through steppe routes.",
                    "The Zaporozhians under Sirko struck these routes and rear points.",
                    "Such actions complicated the supply of Ottoman-Tatar forces.",
                    "Short sources do not provide an exact list of each attack, so the event is presented as a group of operations against supply lines.",
                ],

                significanceUk: [
                    "Подія показує Сірка як командира рейдової війни проти логістики ворога.",
                    "Його роль у Чигиринському контексті була не лише фронтальною, а й комунікаційною: бити по шляхах, запасах і тилу.",
                    "Це важливий event для пояснення військової користі Запорожжя в великій війні 1677–1678 років.",
                ],

                significanceEn: [
                    "The event shows Sirko as a commander of raiding warfare against enemy logistics.",
                    "His role in the Chyhyryn context was not only frontal but also communicational: striking routes, supplies, and rear areas.",
                    "This is an important event for explaining the military value of Zaporizhia in the major war of 1677–1678.",
                ],

                historicalNoteUk:
                    "Подію треба подавати як серію рейдових дій проти постачання, а не як одну конкретну битву з точною датою.",

                historicalNoteEn:
                    "The event should be presented as a series of raiding actions against supply, not as one specific battle with an exact date.",

                hasDetailPage: false,
                image: "/images/military/events/chyhyryn-supply-disruption-1677-1678.webp",

                sources: [
                    "Вікіпедія: Чигиринські походи",
                    "Походи Івана Сірка: Чигиринські походи 1677–1678 років",
                ],
            },
            {
                id: "dnipro-liman-turkish-squadron-1678",
                slug: "dnipro-liman-turkish-squadron-1678",
                order: 5,
                year: "1678",
                dateUk: "1678 рік",
                dateEn: "1678",

                type: "battle",
                direction: "ottoman",
                importance: "major",
                resultType: "victory",
                confidence: "medium",

                titleUk: "Розгром турецької ескадри в Дніпровському лимані",
                titleEn: "Defeat of the Turkish Squadron in the Dnipro Estuary",

                locationUk: "Дніпровський лиман",
                locationEn: "Dnipro estuary",

                opponentsUk: [
                    "турецька ескадра",
                    "Османська імперія",
                ],
                opponentsEn: [
                    "Turkish squadron",
                    "Ottoman Empire",
                ],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "Точна кількість козацьких чайок не подана; у джерелі згадано турецьку ескадру з 40 великих галер.",
                forcesEn:
                    "The exact number of Cossack chaikas is not given; the source mentions a Turkish squadron of 40 large galleys.",

                lossesUk:
                    "Точні втрати не подані; джерело говорить про розгром турецької ескадри.",
                lossesEn:
                    "Exact losses are not given; the source speaks of the defeat of the Turkish squadron.",

                resultUk:
                    "Козацька флотилія під проводом Сірка розгромила турецьку ескадру з 40 великих галер.",
                resultEn:
                    "The Cossack flotilla under Sirko defeated a Turkish squadron of 40 large galleys.",

                summaryUk:
                    "У 1678 році флотилія Сірка в Дніпровському лимані розгромила турецьку ескадру, яку джерело описує як 40 великих галер.",

                summaryEn:
                    "In 1678, Sirko's flotilla in the Dnipro estuary defeated a Turkish squadron described by the source as 40 large galleys.",

                courseUk: [
                    "Дніпровський лиман був ключовим простором для виходу запорожців у Чорне море.",
                    "Турецька ескадра контролювала або загрожувала цьому району.",
                    "Сірко використав козацьку флотилію для удару по османських морських силах.",
                    "За джерельним викладом, було розгромлено турецьку ескадру з 40 великих галер.",
                    "Докладний перебіг морського бою, кількість козацьких суден і точні втрати сторін не подані.",
                ],

                courseEn: [
                    "The Dnipro estuary was a key area for Zaporozhian access to the Black Sea.",
                    "The Turkish squadron controlled or threatened this area.",
                    "Sirko used the Cossack flotilla to strike Ottoman naval forces.",
                    "According to the source account, a Turkish squadron of 40 large galleys was defeated.",
                    "The detailed course of the naval battle, the number of Cossack vessels, and exact losses are not given.",
                ],

                significanceUk: [
                    "Подія показує морський вимір військової діяльності Сірка.",
                    "Розгром ескадри в лимані мав значення для свободи дій запорожців на Дніпровсько-Чорноморському напрямку.",
                    "Це один із найяскравіших епізодів боротьби Сірка проти османських сил у 1670-х роках.",
                ],

                significanceEn: [
                    "The event shows the naval dimension of Sirko's military activity.",
                    "The defeat of the squadron in the estuary mattered for the freedom of Zaporozhian action in the Dnipro-Black Sea direction.",
                    "It is one of the most striking episodes of Sirko's struggle against Ottoman forces in the 1670s.",
                ],

                historicalNoteUk:
                    "Цифра 40 великих галер подається за джерельним викладом і має бути відображена як така, без додаткових вигаданих деталей.",

                historicalNoteEn:
                    "The figure of 40 large galleys is taken from the source account and should be presented as such, without additional invented details.",

                hasDetailPage: false,
                image: "/images/military/events/dnipro-liman-turkish-squadron-1678.webp",

                sources: [
                    "Запорізька Січ у другій половині XVII ст. Іван Сірко",
                ],
            },
            {
                id: "kyzykermen-tavan-campaign-1679",
                slug: "kyzykermen-tavan-campaign-1679",
                order: 6,
                year: "1679",
                dateUk: "початок 1679 року",
                dateEn: "early 1679",

                type: "campaign",
                direction: "ottoman",
                importance: "major",
                resultType: "victory",
                confidence: "medium",

                titleUk: "Похід на Кизикермен і Тавань",
                titleEn: "Campaign against Kyzykermen and Tavan",

                locationUk: "Кизикермен, Тавань, Нижній Дніпро",
                locationEn: "Kyzykermen, Tavan, Lower Dnipro",

                opponentsUk: [
                    "османські гарнізони",
                    "татарські сили",
                ],
                opponentsEn: [
                    "Ottoman garrisons",
                    "Tatar forces",
                ],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "Точна чисельність козацького десанту не подана.",
                forcesEn:
                    "The exact strength of the Cossack landing force is not given.",

                lossesUk:
                    "Точні втрати не подані; джерело повідомляє про зруйнування фортець.",
                lossesEn:
                    "Exact losses are not given; the source reports the destruction of the fortresses.",

                resultUk:
                    "Козацький десант під проводом Сірка розгромив і зруйнував турецькі й татарські фортеці на Дніпрі.",
                resultEn:
                    "The Cossack landing force under Sirko defeated and destroyed Turkish and Tatar fortresses on the Dnipro.",

                summaryUk:
                    "На початку 1679 року запорожці під проводом Сірка рушили проти Кизикермена й Тавані, які перешкоджали виходу козацьких чайок у Чорне море.",

                summaryEn:
                    "In early 1679, the Zaporozhians under Sirko moved against Kyzykermen and Tavan, which blocked the Cossack chaikas' access to the Black Sea.",

                courseUk: [
                    "Кизикермен і Тавань були важливими пунктами контролю над нижнім Дніпром.",
                    "Ці фортеці перешкоджали виходу запорозьких чайок у Чорне море.",
                    "На початку 1679 року Сірко очолив похід проти цих укріплень.",
                    "Козацький десант атакував турецько-татарські пункти на Дніпрі.",
                    "За джерелом, Кизикермен і Тавань були зруйновані.",
                ],

                courseEn: [
                    "Kyzykermen and Tavan were important control points on the lower Dnipro.",
                    "These fortresses blocked the Zaporozhian chaikas' access to the Black Sea.",
                    "In early 1679, Sirko led a campaign against these fortifications.",
                    "The Cossack landing force attacked Ottoman-Tatar points on the Dnipro.",
                    "According to the source, Kyzykermen and Tavan were destroyed.",
                ],

                significanceUk: [
                    "Похід мав стратегічне значення для свободи дій запорожців на Дніпрі.",
                    "Зруйнування фортець послабило османсько-татарський контроль над нижньодніпровським напрямком.",
                    "Це одна з ключових пізніх антиосманських операцій Сірка.",
                ],

                significanceEn: [
                    "The campaign had strategic importance for the freedom of Zaporozhian action on the Dnipro.",
                    "The destruction of the fortresses weakened Ottoman-Tatar control over the lower Dnipro direction.",
                    "This is one of Sirko's key late anti-Ottoman operations.",
                ],

                historicalNoteUk:
                    "Подія має чітко визначені об’єкти атаки й результат, але без точних цифр чисельності та втрат.",

                historicalNoteEn:
                    "The event has clearly defined targets and outcome, but no exact figures for strength and losses.",

                hasDetailPage: false,
                image: "/images/military/events/kyzykermen-tavan-campaign-1679.webp",

                sources: [
                    "Походи Івана Сірка",
                    "Запорізька Січ у другій половині XVII ст. Іван Сірко",
                ],
            },
        ],
    },
    {
        id: "zaporizhzhia",
        slug: "zaporizhzhia",
        order: 6,
        direction: "zaporizhia",

        titleUk: "Запорожжя",
        titleEn: "Zaporizhia",

        shortTitleUk: "Запорожжя",
        shortTitleEn: "Zaporizhia",

        periodUk: "1675",
        periodEn: "1675",

        summaryUk:
            "Кампанія 1675 року — один із найвідоміших кримських походів Івана Сірка, пов’язаний із переходом через Сиваш, ударами по Гезлеву, Карасубазару й Бахчисараю, розгромом ханських сил та визволенням бранців.",

        summaryEn:
            "The 1675 campaign is one of Ivan Sirko's best-known Crimean campaigns, connected with the crossing of Syvash, strikes against Gezlev, Karasubazar and Bakhchysarai, the defeat of the khan's forces, and the liberation of captives.",

        contentUk: [
            "У 1675 році Сірко організував великий похід на Кримське ханство.",
            "Похід відбувся після татарсько-турецьких загроз Запорожжю та став відповіддю на небезпеку з боку Криму.",
            "За даними Вікіпедії, Кримський похід 1675 року датують 23–29 вересня 1675 року.",
            "У джерелах згадується перехід через Сиваш, удари по Гезлеву, Карасубазару й Бахчисараю, втеча хана в гори та визволення великої кількості невільників.",
        ],

        contentEn: [
            "In 1675, Sirko organized a major campaign against the Crimean Khanate.",
            "The campaign followed Tatar-Ottoman threats to Zaporizhia and became a response to the danger from Crimea.",
            "According to Wikipedia, the Crimean campaign of 1675 is dated September 23–29, 1675.",
            "Sources mention the crossing of Syvash, strikes against Gezlev, Karasubazar and Bakhchysarai, the khan's flight into the mountains, and the liberation of many captives.",
        ],

        image: "/images/military/zaporizhzhia.webp",

        events: [
            {
                id: "crimean-campaign-preparation-1675",
                slug: "crimean-campaign-preparation-1675",
                order: 1,
                year: "1675",
                dateUk: "липень — вересень 1675 року",
                dateEn: "July — September 1675",

                type: "campaign",
                direction: "zaporizhia",
                importance: "major",
                resultType: "strategic-success",
                confidence: "medium",

                titleUk: "Підготовка великого кримського походу",
                titleEn: "Preparation of the Great Crimean Campaign",

                locationUk: "Запорозька Січ",
                locationEn: "Zaporizhian Sich",

                opponentsUk: [
                    "Кримське ханство",
                    "Османська імперія",
                ],
                opponentsEn: [
                    "Crimean Khanate",
                    "Ottoman Empire",
                ],

                commandersUk: [
                    "Іван Сірко",
                    "Фрол Мінаєв",
                    "Касбулат Черкаський",
                    "Мазан-батир",
                ],
                commandersEn: [
                    "Ivan Sirko",
                    "Frol Minaev",
                    "Kasbulat Cherkassky",
                    "Mazan Batyr",
                ],

                forcesUk:
                    "Вікіпедія подає для союзних сил 20 000 запорожців, 1 500–2 500 донців, 300 московських ратних людей, 546–800 калмиків і 1 000 черкесів; ці цифри варто подавати як дані конкретного джерела.",
                forcesEn:
                    "Wikipedia gives the allied strength as 20,000 Zaporozhians, 1,500–2,500 Don Cossacks, 300 Muscovite troops, 546–800 Kalmyks, and 1,000 Circassians; these figures should be presented as source data.",

                lossesUk:
                    "На етапі підготовки втрати не застосовуються.",
                lossesEn:
                    "Losses are not applicable at the preparation stage.",

                resultUk:
                    "Було зібрано велике союзне військо для походу проти Кримського ханства.",
                resultEn:
                    "A large allied force was assembled for a campaign against the Crimean Khanate.",

                summaryUk:
                    "У 1675 році Сірко підготував великий похід на Крим, у якому разом із запорожцями діяли донці, калмики, черкеси й московські ратні люди.",

                summaryEn:
                    "In 1675, Sirko prepared a major campaign against Crimea, in which Don Cossacks, Kalmyks, Circassians, and Muscovite troops acted together with the Zaporozhians.",

                courseUk: [
                    "За джерельним викладом, Сірко повернувся на Запорозьку Січ і організував похід як відповідь на кримсько-османську загрозу.",
                    "Похід був підтриманий усім військом.",
                    "У складі союзних сил джерела називають запорожців, донських козаків, калмиків, черкесів і московських ратних людей.",
                    "Після підготовки військо рушило в напрямку Криму.",
                ],

                courseEn: [
                    "According to the source account, Sirko returned to the Zaporizhian Sich and organized the campaign as a response to the Crimean-Ottoman threat.",
                    "The campaign was supported by the whole host.",
                    "Sources name Zaporozhians, Don Cossacks, Kalmyks, Circassians, and Muscovite troops among the allied forces.",
                    "After preparation, the army moved toward Crimea.",
                ],

                significanceUk: [
                    "Це старт найвідомішої пізньої кримської кампанії Сірка.",
                    "Подія показує, що Сірко діяв не лише із запорожцями, а й із союзниками.",
                    "У масиві її варто тримати як окремий event, бо вона пояснює масштаб походу 1675 року.",
                ],

                significanceEn: [
                    "This is the beginning of Sirko's best-known late Crimean campaign.",
                    "The event shows that Sirko acted not only with Zaporozhians, but also with allies.",
                    "It should remain a separate event in the dataset because it explains the scale of the 1675 campaign.",
                ],

                historicalNoteUk:
                    "Чисельність військ подана за Вікіпедією і має бути відображена як джерельна оцінка, а не як абсолютно безспірний факт.",

                historicalNoteEn:
                    "The troop numbers are taken from Wikipedia and should be presented as a source estimate, not as an absolutely undisputed fact.",

                hasDetailPage: false,
                image: "/images/military/events/crimean-campaign-preparation-1675.webp",

                sources: [
                    "Вікіпедія: Кримський похід (1675)",
                    "Кримський похід Івана Сірка через Сиваш",
                ],
            },
            {
                id: "syvash-crossing-1675",
                slug: "syvash-crossing-1675",
                order: 2,
                year: "1675",
                dateUk: "вересень 1675 року",
                dateEn: "September 1675",

                type: "raid",
                direction: "zaporizhia",
                importance: "major",
                resultType: "strategic-success",
                confidence: "high",

                titleUk: "Перехід через Сиваш",
                titleEn: "Crossing of Syvash",

                locationUk: "Сиваш, Кримський півострів",
                locationEn: "Syvash, Crimean Peninsula",

                opponentsUk: [
                    "Кримське ханство",
                ],
                opponentsEn: [
                    "Crimean Khanate",
                ],

                commandersUk: [
                    "Іван Сірко",
                ],
                commandersEn: [
                    "Ivan Sirko",
                ],

                forcesUk:
                    "Ті самі союзні сили, що брали участь у Кримському поході 1675 року; точний склад групи, яка переходила через Сиваш, окремо не поданий.",
                forcesEn:
                    "The same allied forces that took part in the Crimean campaign of 1675; the exact composition of the group that crossed Syvash is not separately given.",

                lossesUk:
                    "Втрати під час самого переходу в джерелах не деталізовані.",
                lossesEn:
                    "Losses during the crossing itself are not detailed in the sources.",

                resultUk:
                    "Козаки обійшли Перекоп і несподівано увійшли до Криму через Сиваш.",
                resultEn:
                    "The Cossacks bypassed Perekop and unexpectedly entered Crimea through Syvash.",

                summaryUk:
                    "Перехід через Сиваш дозволив Сірку обійти Перекопські укріплення й несподівано з’явитися в Криму.",

                summaryEn:
                    "The crossing of Syvash allowed Sirko to bypass the Perekop fortifications and unexpectedly appear in Crimea.",

                courseUk: [
                    "Перекоп був головним укріпленим входом до Криму.",
                    "Сірко обрав нестандартний шлях через Сиваш, що дозволило уникнути прямого удару по головній оборонній лінії.",
                    "Несподіваний перехід дав козакам тактичну перевагу.",
                    "Після цього військо змогло діяти вглиб Кримського ханства.",
                ],

                courseEn: [
                    "Perekop was the main fortified entrance to Crimea.",
                    "Sirko chose an unusual route through Syvash, avoiding a direct strike against the main defensive line.",
                    "The unexpected crossing gave the Cossacks a tactical advantage.",
                    "After this, the army was able to operate deep inside the Crimean Khanate.",
                ],

                significanceUk: [
                    "Це ключовий маневр у поході 1675 року.",
                    "Перехід через Сиваш пояснює, чому кримські сили були застигнуті зненацька.",
                    "Подія добре показує характер тактики Сірка: раптовість, обхід і удар у тил.",
                ],

                significanceEn: [
                    "This was the key maneuver of the 1675 campaign.",
                    "The crossing through Syvash explains why Crimean forces were caught off guard.",
                    "The event clearly shows Sirko's tactical style: surprise, bypassing, and striking from the rear.",
                ],

                historicalNoteUk:
                    "Подія підтверджується описами Кримського походу 1675 року, але джерела не дають технічних деталей самого переходу.",
                historicalNoteEn:
                    "The event is confirmed by descriptions of the 1675 Crimean campaign, but sources do not provide technical details of the crossing itself.",

                hasDetailPage: false,
                image: "/images/military/events/syvash-crossing-1675.webp",

                sources: [
                    "Вікіпедія: Кримський похід (1675)",
                    "Кримський похід Івана Сірка через Сиваш",
                ],
            },
            {
                id: "gezlev-karasubazar-raid-1675",
                slug: "gezlev-karasubazar-raid-1675",
                order: 3,
                year: "1675",
                dateUk: "вересень 1675 року",
                dateEn: "September 1675",

                type: "raid",
                direction: "zaporizhia",
                importance: "major",
                resultType: "victory",
                confidence: "medium",

                titleUk: "Удари по Гезлеву й Карасубазару",
                titleEn: "Strikes against Gezlev and Karasubazar",

                locationUk: "Гезлев, Карасубазар, Крим",
                locationEn: "Gezlev, Karasubazar, Crimea",

                opponentsUk: [
                    "Кримське ханство",
                    "кримськотатарські сили",
                ],
                opponentsEn: [
                    "Crimean Khanate",
                    "Crimean Tatar forces",
                ],

                commandersUk: [
                    "Іван Сірко",
                ],
                commandersEn: [
                    "Ivan Sirko",
                ],

                forcesUk:
                    "Точна чисельність загонів, які діяли саме біля Гезлева й Карасубазара, не подана.",
                forcesEn:
                    "The exact strength of the detachments acting near Gezlev and Karasubazar is not given.",

                lossesUk:
                    "Точні втрати не подані.",
                lossesEn:
                    "Exact losses are not given.",

                resultUk:
                    "Козаки атакували важливі кримські міста й татарські поселення.",
                resultEn:
                    "The Cossacks attacked important Crimean towns and Tatar settlements.",

                summaryUk:
                    "Після переходу через Сиваш козацькі сили діяли вглиб Криму, зокрема в напрямку Гезлева й Карасубазара.",

                summaryEn:
                    "After crossing Syvash, the Cossack forces operated deep inside Crimea, including in the direction of Gezlev and Karasubazar.",

                courseUk: [
                    "Після несподіваного входу до Криму козацьке військо почало рейдові дії.",
                    "У джерелах згадуються удари по Гезлеву, тобто сучасній Євпаторії.",
                    "Також згадується Карасубазар як один із важливих пунктів походу.",
                    "Козаки завдали шкоди кримськотатарським поселенням і центрам ханства.",
                ],

                courseEn: [
                    "After the unexpected entry into Crimea, the Cossack army began raiding actions.",
                    "Sources mention strikes against Gezlev, modern Yevpatoria.",
                    "Karasubazar is also mentioned as one of the important points of the campaign.",
                    "The Cossacks inflicted damage on Crimean Tatar settlements and centers of the khanate.",
                ],

                significanceUk: [
                    "Гезлев і Карасубазар були важливими кримськими пунктами.",
                    "Удар по них показав, що похід не обмежився прикордонним рейдом.",
                    "Подія демонструє глибину проникнення Сірка в Крим.",
                ],

                significanceEn: [
                    "Gezlev and Karasubazar were important Crimean points.",
                    "The strike against them showed that the campaign was not limited to a border raid.",
                    "The event demonstrates the depth of Sirko's penetration into Crimea.",
                ],

                historicalNoteUk:
                    "Подія є частиною опису Кримського походу 1675 року; точний перебіг окремих боїв біля цих міст у коротких джерелах не поданий.",
                historicalNoteEn:
                    "The event is part of the description of the 1675 Crimean campaign; the exact course of separate battles near these towns is not given in short sources.",

                hasDetailPage: false,
                image: "/images/military/events/gezlev-karasubazar-raid-1675.webp",

                sources: [
                    "Вікіпедія: Кримський похід (1675)",
                    "Походи Івана Сірка",
                ],
            },
            {
                id: "bakhchysarai-campaign-1675",
                slug: "bakhchysarai-campaign-1675",
                order: 4,
                year: "1675",
                dateUk: "вересень 1675 року",
                dateEn: "September 1675",

                type: "campaign",
                direction: "zaporizhia",
                importance: "major",
                resultType: "victory",
                confidence: "medium",

                titleUk: "Похід на Бахчисарай",
                titleEn: "Campaign against Bakhchysarai",

                locationUk: "Бахчисарай, Крим",
                locationEn: "Bakhchysarai, Crimea",

                opponentsUk: [
                    "Кримське ханство",
                    "війська Селіма I Ґерая",
                ],
                opponentsEn: [
                    "Crimean Khanate",
                    "forces of Selim I Giray",
                ],

                commandersUk: [
                    "Іван Сірко",
                    "Селім I Ґерай",
                ],
                commandersEn: [
                    "Ivan Sirko",
                    "Selim I Giray",
                ],

                forcesUk:
                    "Для всього Кримського походу джерела подають великі союзні сили; окрема чисельність саме під Бахчисараєм подається в різних викладах по-різному.",
                forcesEn:
                    "For the whole Crimean campaign, sources give large allied forces; the exact strength specifically near Bakhchysarai varies between accounts.",

                lossesUk:
                    "Вікіпедія подає для всієї кампанії значні втрати ханських сил; точні втрати саме під Бахчисараєм треба подавати обережно.",
                lossesEn:
                    "Wikipedia gives heavy losses for the khan's forces in the whole campaign; exact losses specifically near Bakhchysarai should be presented cautiously.",

                resultUk:
                    "Козаки дійшли до столиці ханства; хан Селім I Ґерай, за джерельним викладом, утік у гори.",
                resultEn:
                    "The Cossacks reached the khanate's capital; Khan Selim I Giray reportedly fled into the mountains.",

                summaryUk:
                    "Похід на Бахчисарай став центральним епізодом кампанії 1675 року, бо козаки загрожували самій столиці Кримського ханства.",

                summaryEn:
                    "The campaign against Bakhchysarai became the central episode of the 1675 campaign because the Cossacks threatened the very capital of the Crimean Khanate.",

                courseUk: [
                    "Після ударів по кримських містах козацькі сили рушили до Бахчисарая.",
                    "Бахчисарай був політичним центром Кримського ханства.",
                    "За джерельним викладом, хан Селім I Ґерай не зміг організувати успішну оборону й утік у гори.",
                    "Козаки завдали удару по столиці ханства й продовжили рейдові дії.",
                ],

                courseEn: [
                    "After strikes against Crimean towns, the Cossack forces moved toward Bakhchysarai.",
                    "Bakhchysarai was the political center of the Crimean Khanate.",
                    "According to the source account, Khan Selim I Giray failed to organize successful defense and fled into the mountains.",
                    "The Cossacks struck the khanate's capital and continued raiding actions.",
                ],

                significanceUk: [
                    "Бахчисарай був символічним і політичним центром ханської влади.",
                    "Досягнення столиці Криму мало величезний психологічний ефект.",
                    "Це один із найвідоміших епізодів усієї військової біографії Сірка.",
                ],

                significanceEn: [
                    "Bakhchysarai was the symbolic and political center of khanate power.",
                    "Reaching the Crimean capital had a huge psychological effect.",
                    "This is one of the best-known episodes of Sirko's entire military biography.",
                ],

                historicalNoteUk:
                    "Подія згадується у Вікіпедії та популярних викладах, але сторінка про похід на Бахчисарай має неперевірений статус, тому деталі треба подавати обережно.",
                historicalNoteEn:
                    "The event is mentioned in Wikipedia and popular accounts, but the article on the Bakhchysarai campaign is marked as unchecked, so details should be presented cautiously.",

                hasDetailPage: false,
                image: "/images/military/events/bakhchysarai-campaign-1675.webp",

                sources: [
                    "Вікіпедія: Кримський похід (1675)",
                    "Вікіпедія: Похід на Бахчисарай",
                ],
            },
            {
                id: "liberation-of-captives-1675",
                slug: "liberation-of-captives-1675",
                order: 5,
                year: "1675",
                dateUk: "вересень 1675 року",
                dateEn: "September 1675",

                type: "raid",
                direction: "zaporizhia",
                importance: "major",
                resultType: "victory",
                confidence: "medium",

                titleUk: "Визволення невільників",
                titleEn: "Liberation of Captives",

                locationUk: "Крим",
                locationEn: "Crimea",

                opponentsUk: [
                    "Кримське ханство",
                    "татарські сили",
                ],
                opponentsEn: [
                    "Crimean Khanate",
                    "Tatar forces",
                ],

                commandersUk: [
                    "Іван Сірко",
                ],
                commandersEn: [
                    "Ivan Sirko",
                ],

                forcesUk:
                    "У межах загального війська Кримського походу 1675 року.",
                forcesEn:
                    "Within the general army of the 1675 Crimean campaign.",

                lossesUk:
                    "Точні втрати в цьому епізоді не подані.",
                lossesEn:
                    "Exact losses in this episode are not given.",

                resultUk:
                    "Було визволено велику кількість невільників; джерела називають українців, росіян і поляків.",
                resultEn:
                    "A large number of captives were liberated; sources mention Ukrainians, Russians, and Poles.",

                summaryUk:
                    "Одним із головних результатів походу 1675 року стало визволення багатьох християнських бранців із Криму.",

                summaryEn:
                    "One of the main results of the 1675 campaign was the liberation of many Christian captives from Crimea.",

                courseUk: [
                    "Під час рейдів по Криму козаки знаходили й визволяли бранців.",
                    "У джерелах згадуються українці, росіяни й поляки серед визволених.",
                    "Визволення невільників було одним із ключових мотивів запорозьких походів проти Кримського ханства.",
                    "Частину визволених було виведено з Криму разом із козацьким військом.",
                ],

                courseEn: [
                    "During the raids across Crimea, the Cossacks found and liberated captives.",
                    "Sources mention Ukrainians, Russians, and Poles among the liberated people.",
                    "The liberation of captives was one of the key motives of Zaporozhian campaigns against the Crimean Khanate.",
                    "Some of the liberated people were taken out of Crimea together with the Cossack army.",
                ],

                significanceUk: [
                    "Визволення бранців було одним із головних моральних і військових результатів походу.",
                    "Цей сюжет став важливою частиною пам’яті про Сірка.",
                    "Подія пояснює, чому кримські походи мали не лише військовий, а й соціальний сенс.",
                ],

                significanceEn: [
                    "The liberation of captives was one of the main moral and military results of the campaign.",
                    "This episode became an important part of the memory of Sirko.",
                    "The event explains why Crimean campaigns had not only military but also social meaning.",
                ],

                historicalNoteUk:
                    "Кількість визволених у різних викладах може відрізнятися, тому в UI краще не подавати одну цифру як остаточну, якщо вона не підтверджена конкретним джерелом.",
                historicalNoteEn:
                    "The number of liberated captives may differ between accounts, so the UI should not present one figure as final unless tied to a specific source.",

                hasDetailPage: false,
                image: "/images/military/events/liberation-of-captives-1675.webp",

                sources: [
                    "Вікіпедія: Кримський похід (1675)",
                    "Вікіпедія: Похід на Бахчисарай",
                ],
            },
            {
                id: "returning-captives-episode-1675",
                slug: "returning-captives-episode-1675",
                order: 6,
                year: "1675",
                dateUk: "після виходу з Криму, 1675 рік",
                dateEn: "after leaving Crimea, 1675",

                type: "political-military",
                direction: "zaporizhia",
                importance: "major",
                resultType: "political-result",
                confidence: "medium",

                titleUk: "Епізод із бранцями, які захотіли повернутися до Криму",
                titleEn: "Episode with Captives Who Wanted to Return to Crimea",

                locationUk: "шлях із Криму на Запорожжя",
                locationEn: "route from Crimea to Zaporizhia",

                opponentsUk: [],
                opponentsEn: [],

                commandersUk: [
                    "Іван Сірко",
                ],
                commandersEn: [
                    "Ivan Sirko",
                ],

                forcesUk:
                    "Не застосовується: це епізод після основних бойових дій.",
                forcesEn:
                    "Not applicable: this was an episode after the main combat actions.",

                lossesUk:
                    "У літописній традиції цей епізод має трагічний характер; точні дані треба подавати лише з прив’язкою до джерела.",
                lossesEn:
                    "In the chronicle tradition, this episode has a tragic character; exact data should be presented only with source attribution.",

                resultUk:
                    "Частина визволених людей, за літописною традицією, вирішила повернутися до Криму, бо вже мала там родини або майно.",
                resultEn:
                    "According to the chronicle tradition, some liberated people decided to return to Crimea because they already had families or property there.",

                summaryUk:
                    "Відомий літописний епізод походу 1675 року пов’язаний із частиною звільнених невільників, які не захотіли йти на Україну.",

                summaryEn:
                    "A well-known chronicle episode of the 1675 campaign concerns some liberated captives who did not want to go to Ukraine.",

                courseUk: [
                    "Після визволення бранців частина людей рушила разом із козаками.",
                    "За літописною традицією, частина звільнених захотіла повернутися назад до Криму.",
                    "Причиною називали те, що за роки неволі вони вже мали там родини або майно.",
                    "Цей епізод часто згадується в описах походу 1675 року як складна й трагічна частина історії.",
                ],

                courseEn: [
                    "After the liberation of captives, some people moved together with the Cossacks.",
                    "According to the chronicle tradition, some of the liberated people wanted to return to Crimea.",
                    "The reason given was that during years of captivity they had already acquired families or property there.",
                    "This episode is often mentioned in descriptions of the 1675 campaign as a complex and tragic part of the story.",
                ],

                significanceUk: [
                    "Епізод показує людський вимір козацьких походів.",
                    "Він пояснює, що визволення з неволі не завжди було простим поверненням додому.",
                    "Це важлива частина історичної пам’яті про похід Сірка 1675 року.",
                ],

                significanceEn: [
                    "The episode shows the human dimension of Cossack campaigns.",
                    "It explains that liberation from captivity was not always a simple return home.",
                    "It is an important part of historical memory about Sirko's 1675 campaign.",
                ],

                historicalNoteUk:
                    "Цей сюжет походить із літописної традиції, зокрема з опису Самійла Величка, тому його треба подавати саме як літописний епізод, а не як повністю перевірену статистичну подію.",
                historicalNoteEn:
                    "This story comes from the chronicle tradition, especially the account of Samiilo Velychko, so it should be presented as a chronicle episode, not as a fully verified statistical event.",

                hasDetailPage: false,
                image: "/images/military/events/returning-captives-episode-1675.webp",

                sources: [
                    "Вікіпедія: Кримський похід (1675)",
                    "Літописна традиція Самійла Величка",
                ],
            },
            {
                id: "tiahyn-campaign-november-1675",
                slug: "tiahyn-campaign-november-1675",
                order: 7,
                year: "1675",
                dateUk: "листопад 1675 року",
                dateEn: "November 1675",

                type: "campaign",
                direction: "zaporizhia",
                importance: "major",
                resultType: "victory",
                confidence: "medium",

                titleUk: "Похід на Тягинь",
                titleEn: "Campaign against Tiahyn",

                locationUk: "Тягинь, Білгородщина, Волощина",
                locationEn: "Tiahyn, Bilhorod region, Wallachia",

                opponentsUk: [
                    "турецькі сили",
                    "татарські орди",
                ],
                opponentsEn: [
                    "Turkish forces",
                    "Tatar hordes",
                ],

                commandersUk: [
                    "Іван Сірко",
                ],
                commandersEn: [
                    "Ivan Sirko",
                ],

                forcesUk:
                    "За популярним викладом: 10 000 козаків і кілька сотень союзників-калмиків.",
                forcesEn:
                    "According to a popular account: 10,000 Cossacks and several hundred allied Kalmyks.",

                lossesUk:
                    "Точні втрати не подані; джерело говорить про поразку турецьких і татарських орд, полонених і трофеї.",
                lossesEn:
                    "Exact losses are not given; the source mentions the defeat of Turkish and Tatar hordes, prisoners, and trophies.",

                resultUk:
                    "Козаки спалили фортецю Тягинь, завдали поразки турецьким і татарським силам, захопили полонених і трофеї.",
                resultEn:
                    "The Cossacks burned the fortress of Tiahyn, defeated Turkish and Tatar forces, and captured prisoners and trophies.",

                summaryUk:
                    "У листопаді 1675 року Сірко здійснив похід на Крим, Білгородщину й Волощину, під час якого було спалено фортецю Тягинь.",

                summaryEn:
                    "In November 1675, Sirko carried out a campaign toward Crimea, the Bilhorod region, and Wallachia, during which the fortress of Tiahyn was burned.",

                courseUk: [
                    "Після великого кримського походу Сірко продовжив активні дії на південно-західному напрямку.",
                    "У джерельному викладі згадується похід на Крим, Білгородщину й Волощину.",
                    "У поході, за популярним викладом, брали участь 10 тисяч козаків і кілька сотень союзників-калмиків.",
                    "Козаки завдали поразки турецьким і татарським ордам.",
                    "Фортецю Тягинь було спалено, також згадуються полонені й трофеї.",
                ],

                courseEn: [
                    "After the great Crimean campaign, Sirko continued active operations in the southwestern direction.",
                    "The source account mentions a campaign toward Crimea, the Bilhorod region, and Wallachia.",
                    "According to a popular account, 10,000 Cossacks and several hundred allied Kalmyks took part.",
                    "The Cossacks defeated Turkish and Tatar hordes.",
                    "The fortress of Tiahyn was burned, and prisoners and trophies are also mentioned.",
                ],

                significanceUk: [
                    "Похід показує, що кампанія 1675 року не обмежилася самим Кримом.",
                    "Тягинь був важливим пунктом османсько-татарського прикордоння.",
                    "Подія доповнює великий кримський похід і показує широту дій Сірка в 1675 році.",
                ],

                significanceEn: [
                    "The campaign shows that the 1675 operations were not limited to Crimea itself.",
                    "Tiahyn was an important point of the Ottoman-Tatar frontier.",
                    "The event complements the great Crimean campaign and shows the breadth of Sirko's actions in 1675.",
                ],

                historicalNoteUk:
                    "Цифри щодо 10 тисяч козаків і калмицьких союзників подаються в популярному історичному викладі; для академічного тексту їх варто маркувати як джерельні, а не безумовно остаточні.",
                historicalNoteEn:
                    "The figures of 10,000 Cossacks and Kalmyk allies are given in a popular historical account; for academic text they should be marked as source-based, not absolutely final.",

                hasDetailPage: false,
                image: "/images/military/events/tiahyn-campaign-november-1675.webp",

                sources: [
                    "Походи Івана Сірка",
                    "Укрінформ: Іван Сірко. У руках Пуруші",
                ],
            },
        ],
    },
    {
        id: "final-years",
        slug: "final-years",
        order: 7,
        direction: "final-years",

        titleUk: "Останні роки",
        titleEn: "Final Years",

        shortTitleUk: "Останні роки",
        shortTitleEn: "Final Years",

        periodUk: "1676–1680",
        periodEn: "1676–1680",

        summaryUk:
            "Останній етап військової діяльності Івана Сірка: дипломатичні контакти з турецькими посланцями, участь у протидії турецько-татарським силам, останній похід 1680 року та смерть кошового отамана.",

        summaryEn:
            "The final stage of Ivan Sirko's military activity: contacts with Ottoman envoys, resistance to Ottoman-Tatar forces, the last campaign of 1680, and the death of the Kish Otaman.",

        contentUk: [
            "У другій половині 1670-х років Сірко залишався активним військовим керівником Запорожжя.",
            "Джерела згадують його дії проти військ Османської імперії та Кримського ханства, участь запорожців у відсічі Чигиринським походам і останню воєнну акцію 1680 року.",
            "Окремо важливими є події навколо турецьких посланців 1676 року, які показують роботу запорозької розвідки й полонених високого рангу.",
            "1 серпня 1680 року Сірко помер на пасіці в Грушівці; його тіло перевезли до Чортомлицької Січі й поховали на військовому цвинтарі.",
        ],

        contentEn: [
            "In the second half of the 1670s, Sirko remained an active military leader of Zaporizhia.",
            "Sources mention his actions against Ottoman and Crimean Tatar forces, the Zaporozhians' role in resisting the Chyhyryn campaigns, and the last military action of 1680.",
            "The events around the Ottoman envoys of 1676 are also important because they show Zaporizhian intelligence work and high-ranking captives.",
            "On August 1, 1680, Sirko died at his apiary in Hrushivka; his body was transported to the Chortomlyk Sich and buried at the military cemetery.",
        ],

        image: "/images/military/final-years.webp",

        events: [
            {
                id: "mustafa-aga-hapich-pasha-1676",
                slug: "mustafa-aga-hapich-pasha-1676",
                order: 1,
                year: "1676",
                dateUk: "1676 рік",
                dateEn: "1676",

                type: "political-military",
                direction: "final-years",
                importance: "medium",
                resultType: "political-result",
                confidence: "medium",

                titleUk: "Турецькі посланці на Чортомлицькій Січі",
                titleEn: "Ottoman Envoys at the Chortomlyk Sich",

                locationUk: "Чортомлицька Січ",
                locationEn: "Chortomlyk Sich",

                opponentsUk: [
                    "Османська імперія",
                    "турецькі посланці",
                ],
                opponentsEn: [
                    "Ottoman Empire",
                    "Ottoman envoys",
                ],

                commandersUk: [
                    "Іван Сірко",
                    "Мустафа-ага",
                    "Хапіч-паша",
                ],
                commandersEn: [
                    "Ivan Sirko",
                    "Mustafa Agha",
                    "Hapich Pasha",
                ],

                forcesUk:
                    "Не застосовується: це дипломатично-розвідувальний епізод, а не битва.",
                forcesEn:
                    "Not applicable: this was a diplomatic-intelligence episode, not a battle.",

                lossesUk:
                    "Не застосовується.",
                lossesEn:
                    "Not applicable.",

                resultUk:
                    "Сірко викрив справжню мету турецьких посланців і встановив, що вони розшукували не лише Мустафу-агу, а важливішого полоненого — Хапіч-пашу.",
                resultEn:
                    "Sirko uncovered the real purpose of the Ottoman envoys and established that they were looking not only for Mustafa Agha, but for a more important captive — Hapich Pasha.",

                summaryUk:
                    "У 1676 році на Чортомлицьку Січ прибули люди з Туреччини, нібито щоб викупити Мустафу-агу; Сірко запідозрив обман і через розвідку з’ясував, що насправді йшлося про Хапіч-пашу.",

                summaryEn:
                    "In 1676, people from Turkey arrived at the Chortomlyk Sich, allegedly to ransom Mustafa Agha; Sirko suspected deception and learned through intelligence that the real target was Hapich Pasha.",

                courseUk: [
                    "У 1676 році на Чортомлицьку Січ прибули посланці з Туреччини.",
                    "Вони заявили, що хочуть знайти й викупити з полону Мустафу-агу.",
                    "Сірко не повірив у повну щирість цієї місії.",
                    "Він використав розвідку й дізнався, що посланці насправді шукали значно важливішу особу — Хапіч-пашу.",
                    "За викладом джерела, Хапіч-паша приховував свій статус у полоні, щоб за нього не вимагали більшого викупу.",
                ],

                courseEn: [
                    "In 1676, envoys from Turkey arrived at the Chortomlyk Sich.",
                    "They claimed they wanted to find and ransom Mustafa Agha from captivity.",
                    "Sirko did not fully believe the sincerity of this mission.",
                    "He used intelligence and learned that the envoys were actually searching for a much more important person — Hapich Pasha.",
                    "According to the source account, Hapich Pasha hid his status in captivity so that a larger ransom would not be demanded for him.",
                ],

                significanceUk: [
                    "Подія показує роботу розвідки Сірка.",
                    "Епізод не є битвою, але напряму пов’язаний із війною проти Османської імперії.",
                    "Він демонструє, що Сірко контролював не лише бойові дії, а й полон, обміни та дипломатичні контакти.",
                ],

                significanceEn: [
                    "The event shows Sirko's intelligence work.",
                    "The episode is not a battle, but it is directly connected with the war against the Ottoman Empire.",
                    "It demonstrates that Sirko controlled not only combat actions, but also captivity, exchanges, and diplomatic contacts.",
                ],

                historicalNoteUk:
                    "Подія подана за історичним викладом про військову розвідку Сірка; її варто тримати як військово-політичний епізод, а не як бойову операцію.",

                historicalNoteEn:
                    "The event is presented according to a historical account of Sirko's military intelligence; it should be kept as a military-political episode, not as a combat operation.",

                hasDetailPage: false,
                image: "/images/military/events/mustafa-aga-hapich-pasha-1676.webp",

                sources: [
                    "Сергій Тороп: Іван Сірко — складові військових успіхів",
                ],
            },
            {
                id: "chyhyryn-campaigns-support-1677-1678",
                slug: "chyhyryn-campaigns-support-1677-1678",
                order: 2,
                year: "1677–1678",
                dateUk: "1677–1678 роки",
                dateEn: "1677–1678",

                type: "campaign",
                direction: "final-years",
                importance: "major",
                resultType: "strategic-success",
                confidence: "medium",

                titleUk: "Участь запорожців у відсічі Чигиринським походам",
                titleEn: "Zaporozhian Participation in Resisting the Chyhyryn Campaigns",

                locationUk: "Чигиринський напрямок, степові комунікації турецько-татарського війська",
                locationEn: "Chyhyryn direction, steppe communications of the Ottoman-Tatar army",

                opponentsUk: [
                    "Османська імперія",
                    "Кримське ханство",
                    "турецько-татарські війська",
                ],
                opponentsEn: [
                    "Ottoman Empire",
                    "Crimean Khanate",
                    "Ottoman-Tatar forces",
                ],

                commandersUk: [
                    "Іван Сірко",
                    "запорозькі козаки",
                ],
                commandersEn: [
                    "Ivan Sirko",
                    "Zaporozhian Cossacks",
                ],

                forcesUk:
                    "Точна чисельність запорозьких загонів у цих діях не подана.",
                forcesEn:
                    "Exact strength of Zaporozhian detachments in these actions is not given.",

                lossesUk:
                    "Точні втрати не подані.",
                lossesEn:
                    "Exact losses are not given.",

                resultUk:
                    "Запорожці брали участь у протидії другому Чигиринському походу турецько-татарського війська.",
                resultEn:
                    "The Zaporozhians took part in resisting the second Chyhyryn campaign of the Ottoman-Tatar army.",

                summaryUk:
                    "У 1677–1678 роках запорожці, пов’язані з Сірком, брали участь у відсічі Чигиринським походам турецько-татарського війська.",

                summaryEn:
                    "In 1677–1678, Zaporozhians connected with Sirko took part in resisting the Chyhyryn campaigns of the Ottoman-Tatar army.",

                courseUk: [
                    "Чигиринські походи стали великим етапом османського наступу на українські землі.",
                    "Запорожці брали участь у протидії цим походам.",
                    "Сірко діяв у ширшому контексті війни проти Османської імперії та Кримського ханства.",
                    "Джерела згадують участь запорожців у відсічі другого Чигиринського походу.",
                    "Детального переліку кожної операції Сірка в межах цього епізоду короткі джерела не подають.",
                ],

                courseEn: [
                    "The Chyhyryn campaigns were a major stage of the Ottoman advance into Ukrainian lands.",
                    "The Zaporozhians took part in resisting these campaigns.",
                    "Sirko acted within the broader context of war against the Ottoman Empire and the Crimean Khanate.",
                    "Sources mention Zaporozhian participation in resisting the second Chyhyryn campaign.",
                    "Short sources do not provide a detailed list of each Sirko operation within this episode.",
                ],

                significanceUk: [
                    "Подія пояснює роль Сірка й Запорожжя в загальноукраїнській війні проти Османської імперії.",
                    "Вона показує, що пізня діяльність Сірка не зводилася лише до кримських рейдів.",
                    "Цей event має бути в загальному military timeline як частина великої війни 1677–1678 років.",
                ],

                significanceEn: [
                    "The event explains the role of Sirko and Zaporizhia in the broader Ukrainian war against the Ottoman Empire.",
                    "It shows that Sirko's late activity was not limited only to Crimean raids.",
                    "This event should be included in the general military timeline as part of the major war of 1677–1678.",
                ],

                historicalNoteUk:
                    "Подія не є однією битвою під особистим командуванням Сірка, а відображає участь запорожців у ширшій Чигиринській кампанії.",

                historicalNoteEn:
                    "The event is not one battle personally commanded by Sirko, but reflects Zaporozhian participation in the broader Chyhyryn campaign.",

                hasDetailPage: false,
                image: "/images/military/events/chyhyryn-campaigns-support-1677-1678.webp",

                sources: [
                    "Іван Сірко: яким ми його не знаємо",
                    "Вікіпедія: Чигиринські походи",
                ],
            },
            {
                id: "last-military-campaign-1680",
                slug: "last-military-campaign-1680",
                order: 3,
                year: "1680",
                dateUk: "1680 рік",
                dateEn: "1680",

                type: "campaign",
                direction: "final-years",
                importance: "major",
                resultType: "victory",
                confidence: "medium",

                titleUk: "Останній воєнний похід Сірка",
                titleEn: "Sirko's Last Military Campaign",

                locationUk: "південний степовий напрямок; точна локалізація в короткому джерелі не подана",
                locationEn: "southern steppe direction; exact location is not given in the short source",

                opponentsUk: [
                    "турецько-татарські сили",
                    "загони Ібрагіма-паші",
                ],
                opponentsEn: [
                    "Ottoman-Tatar forces",
                    "detachments of Ibrahim Pasha",
                ],

                commandersUk: [
                    "Іван Сірко",
                    "донські козаки",
                    "калмики",
                    "Ібрагім-паша",
                ],
                commandersEn: [
                    "Ivan Sirko",
                    "Don Cossacks",
                    "Kalmyks",
                    "Ibrahim Pasha",
                ],

                forcesUk:
                    "Джерело згадує об’єднані сили запорожців, донських козаків і калмиків; точна чисельність не подана.",
                forcesEn:
                    "The source mentions united forces of Zaporozhians, Don Cossacks, and Kalmyks; exact strength is not given.",

                lossesUk:
                    "Точні втрати не подані; джерело говорить про нищівний удар по нападниках.",
                lossesEn:
                    "Exact losses are not given; the source speaks of a devastating blow against the attackers.",

                resultUk:
                    "Об’єднані сили запорожців, донців і калмиків завдали поразки загонам Ібрагіма-паші.",
                resultEn:
                    "The united forces of Zaporozhians, Don Cossacks, and Kalmyks defeated the detachments of Ibrahim Pasha.",

                summaryUk:
                    "Останньою воєнною акцією Сірка був похід 1680 року, перед яким він звернувся до донського козацтва із закликом до спільних дій.",

                summaryEn:
                    "Sirko's last military action was the campaign of 1680, before which he appealed to the Don Cossacks for joint action.",

                courseUk: [
                    "Напередодні останнього походу Сірко надіслав спеціальне звернення донському козацтву.",
                    "Метою було організувати спільні дії проти турецько-татарських сил.",
                    "Джерело згадує загони Ібрагіма-паші, які вдерлися на українські землі.",
                    "Проти них виступили об’єднані сили запорожців, донських козаків і калмиків.",
                    "Нападники зазнали нищівного удару.",
                ],

                courseEn: [
                    "Before his last campaign, Sirko sent a special appeal to the Don Cossacks.",
                    "The goal was to organize joint action against Ottoman-Tatar forces.",
                    "The source mentions detachments of Ibrahim Pasha that invaded Ukrainian lands.",
                    "They were opposed by united forces of Zaporozhians, Don Cossacks, and Kalmyks.",
                    "The attackers suffered a devastating blow.",
                ],

                significanceUk: [
                    "Це остання відома воєнна акція Сірка.",
                    "Подія показує, що навіть у фінальний рік життя він залишався активним військовим керівником.",
                    "Вона завершує бойовий шлях Сірка в military-роуті.",
                ],

                significanceEn: [
                    "This is Sirko's last known military action.",
                    "The event shows that even in the final year of his life he remained an active military leader.",
                    "It closes Sirko's combat path in the military route.",
                ],

                historicalNoteUk:
                    "Коротке джерело підтверджує сам факт останньої воєнної акції 1680 року та участь запорожців, донців і калмиків, але не подає повної карти бою, точної дати, чисельності та втрат.",

                historicalNoteEn:
                    "The short source confirms the fact of the last military action of 1680 and the participation of Zaporozhians, Don Cossacks, and Kalmyks, but does not provide a full battle map, exact date, strength, or losses.",

                hasDetailPage: false,
                image: "/images/military/events/last-military-campaign-1680.webp",

                sources: [
                    "Іван Сірко: яким ми його не знаємо",
                ],
            },
            {
                id: "death-at-hrushivka-1680",
                slug: "death-at-hrushivka-1680",
                order: 4,
                year: "1680",
                dateUk: "1 серпня 1680 року",
                dateEn: "August 1, 1680",

                type: "political-military",
                direction: "final-years",
                importance: "major",
                resultType: "political-result",
                confidence: "high",

                titleUk: "Смерть Івана Сірка в Грушівці",
                titleEn: "Death of Ivan Sirko in Hrushivka",

                locationUk: "пасіка Грушівка, Запорожжя",
                locationEn: "Hrushivka apiary, Zaporizhia",

                opponentsUk: [],
                opponentsEn: [],

                commandersUk: [
                    "Іван Сірко",
                ],
                commandersEn: [
                    "Ivan Sirko",
                ],

                forcesUk:
                    "Не застосовується.",
                forcesEn:
                    "Not applicable.",

                lossesUk:
                    "Помер Іван Сірко.",
                lossesEn:
                    "Ivan Sirko died.",

                resultUk:
                    "Завершився військовий шлях одного з найвідоміших кошових отаманів Запорозької Січі.",
                resultEn:
                    "The military path of one of the most famous Kish Otamans of the Zaporizhian Sich came to an end.",

                summaryUk:
                    "1 серпня 1680 року Іван Сірко помер на своїй пасіці в Грушівці після певної хвороби.",

                summaryEn:
                    "On August 1, 1680, Ivan Sirko died at his apiary in Hrushivka after an illness.",

                courseUk: [
                    "Самійло Величко повідомляє, що Сірко помер 1 серпня 1680 року.",
                    "Місцем смерті названо його пасіку в Грушівці.",
                    "У джерельній традиції згадується, що перед смертю він певний час хворів.",
                    "Смерть Сірка стала завершенням його багаторічної військової діяльності на Запорожжі.",
                ],

                courseEn: [
                    "Samiilo Velychko reports that Sirko died on August 1, 1680.",
                    "The place of death is given as his apiary in Hrushivka.",
                    "The source tradition mentions that he had been ill for some time before his death.",
                    "Sirko's death marked the end of his long military activity in Zaporizhia.",
                ],

                significanceUk: [
                    "Це фінальна хронологічна точка військового шляху Сірка.",
                    "Подія має чітку дату й місце в джерелах.",
                    "Вона логічно завершує весь military timeline.",
                ],

                significanceEn: [
                    "This is the final chronological point of Sirko's military path.",
                    "The event has a clear date and place in sources.",
                    "It logically closes the entire military timeline.",
                ],

                historicalNoteUk:
                    "Дата 1 серпня 1680 року й місце Грушівка стабільно згадуються в історичних матеріалах; окремі джерела можуть подавати старий/новий стиль датування.",

                historicalNoteEn:
                    "The date August 1, 1680 and the place Hrushivka are consistently mentioned in historical materials; some sources may use old/new style dating.",

                hasDetailPage: false,
                image: "/images/military/events/death-at-hrushivka-1680.webp",

                sources: [
                    "В. Шконда: Тут похований кошовий отаман Іван Сірко",
                    "Укрінформ: Неспокійний отаман",
                    "Енциклопедія історії України: Сірко Іван",
                ],
            },
            {
                id: "burial-at-chortomlyk-sich-1680",
                slug: "burial-at-chortomlyk-sich-1680",
                order: 5,
                year: "1680",
                dateUk: "2 серпня 1680 року",
                dateEn: "August 2, 1680",

                type: "political-military",
                direction: "final-years",
                importance: "major",
                resultType: "political-result",
                confidence: "high",

                titleUk: "Поховання біля Чортомлицької Січі",
                titleEn: "Burial near the Chortomlyk Sich",

                locationUk: "військовий цвинтар Чортомлицької Січі",
                locationEn: "military cemetery of the Chortomlyk Sich",

                opponentsUk: [],
                opponentsEn: [],

                commandersUk: [
                    "запорозькі козаки",
                    "Іван Сірко",
                ],
                commandersEn: [
                    "Zaporozhian Cossacks",
                    "Ivan Sirko",
                ],

                forcesUk:
                    "Не застосовується.",
                forcesEn:
                    "Not applicable.",

                lossesUk:
                    "Не застосовується.",
                lossesEn:
                    "Not applicable.",

                resultUk:
                    "Тіло Сірка перевезли водою до Запорозької Січі й поховали на військовому цвинтарі з козацькими почестями.",
                resultEn:
                    "Sirko's body was transported by water to the Zaporizhian Sich and buried at the military cemetery with Cossack honors.",

                summaryUk:
                    "Після смерті тіло Сірка перевезли до Чортомлицької Січі й поховали на військовому цвинтарі з гарматною та мушкетною салютацією.",

                summaryEn:
                    "After his death, Sirko's body was taken to the Chortomlyk Sich and buried at the military cemetery with cannon and musket salutes.",

                courseUk: [
                    "Після смерті в Грушівці тіло Сірка перевезли водою до Запорозької Січі.",
                    "Поховання відбулося на військовому цвинтарі Чортомлицької Січі.",
                    "Літописна традиція згадує урочисті військові почесті.",
                    "У джерелах прямо згадується гарматна й мушкетна салютація.",
                ],

                courseEn: [
                    "After his death in Hrushivka, Sirko's body was transported by water to the Zaporizhian Sich.",
                    "The burial took place at the military cemetery of the Chortomlyk Sich.",
                    "The chronicle tradition mentions solemn military honors.",
                    "Sources specifically mention cannon and musket salutes.",
                ],

                significanceUk: [
                    "Поховання підкреслило особливий статус Сірка серед запорожців.",
                    "Військові почесті показують, що його сприймали як одного з головних лідерів Січі.",
                    "Це фінальна подія всього розділу Military.",
                ],

                significanceEn: [
                    "The burial emphasized Sirko's special status among the Zaporozhians.",
                    "The military honors show that he was perceived as one of the main leaders of the Sich.",
                    "This is the final event of the entire Military section.",
                ],

                historicalNoteUk:
                    "Поховання не є бойовою подією, але належить до military-роуту як завершення військового життя кошового отамана.",

                historicalNoteEn:
                    "The burial is not a combat event, but belongs to the military route as the conclusion of the Kish Otaman's military life.",

                hasDetailPage: false,
                image: "/images/military/events/burial-at-chortomlyk-sich-1680.webp",

                sources: [
                    "В. Шконда: Тут похований кошовий отаман Іван Сірко",
                    "Некрополістичні пам’ятки: могила Івана Сірка",
                    "Укрінформ: Неспокійний отаман",
                ],
            },
        ],
    },
];