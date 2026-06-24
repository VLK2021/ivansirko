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
            "Період першої документальної появи Івана Сірка та його входження у військово-політичне життя Запорожжя.",

        summaryEn:
            "The period of Ivan Sirko's first documentary appearance and his entry into the military-political life of Zaporizhia.",

        contentUk: [
            "Ім’я Івана Сірка вперше документально згадується під 1653 роком.",
            "Активну роль у політичному й військовому житті України він почав відігравати з другої половини 1650-х років.",
            "У 1657–1659 роках Сірко перебував в опозиції до Івана Виговського та його курсу на зближення з Річчю Посполитою і Кримським ханством.",
        ],

        contentEn: [
            "Ivan Sirko's name is first documented under the year 1653.",
            "He began to play an active role in the political and military life of Ukraine in the second half of the 1650s.",
            "In 1657–1659, Sirko opposed Ivan Vyhovsky and his policy of rapprochement with the Polish-Lithuanian Commonwealth and the Crimean Khanate.",
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
                importance: "major",
                resultType: "political-result",
                confidence: "high",

                titleUk: "Перша документальна згадка про Сірка",
                titleEn: "First Documentary Mention of Sirko",

                locationUk: "Козацька Україна",
                locationEn: "Cossack Ukraine",

                opponentsUk: [],
                opponentsEn: [],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk: "Не застосовується",
                forcesEn: "Not applicable",

                lossesUk: "Не застосовується",
                lossesEn: "Not applicable",

                resultUk:
                    "Ім’я Сірка з’являється в документальному полі середини XVII століття.",
                resultEn:
                    "Sirko's name appears in the documentary record of the mid-seventeenth century.",

                summaryUk:
                    "1653 рік є першою відомою документальною згадкою про Івана Сірка.",

                summaryEn:
                    "1653 is the first known documentary mention of Ivan Sirko.",

                courseUk: [
                    "Ця подія не є битвою або походом, але вона важлива для військового розділу як початок документально простежуваної біографії Сірка.",
                    "До цього періоду відомості про його життя залишаються непевними й часто спираються на пізніші перекази.",
                ],

                courseEn: [
                    "This event is not a battle or campaign, but it is important for the military section as the beginning of Sirko's documentable biography.",
                    "Before this period, information about his life remains uncertain and often relies on later traditions.",
                ],

                significanceUk: [
                    "Фіксує найранішу документальну точку біографії Сірка.",
                    "Допомагає відділити перевірені дані від пізніших легендарних нашарувань.",
                ],

                significanceEn: [
                    "Marks the earliest documentary point in Sirko's biography.",
                    "Helps separate verified information from later legendary layers.",
                ],

                historicalNoteUk:
                    "Це не бойова подія, але вона залишена в розділі як початкова точка військово-політичної кар’єри.",

                historicalNoteEn:
                    "This is not a combat event, but it is included as the starting point of Sirko's military-political career.",

                hasDetailPage: false,
                image: "/images/military/events/first-documentary-mention-1653.webp",

                sources: [
                    "Енциклопедія історії України: Сірко Іван",
                ],
            },
            {
                id: "opposition-to-vyhovsky-1657-1659",
                slug: "opposition-to-vyhovsky-1657-1659",
                order: 2,

                year: "1657–1659",
                dateUk: "1657–1659 роки",
                dateEn: "1657–1659",

                type: "political-military",
                direction: "early-years",
                importance: "major",
                resultType: "political-result",
                confidence: "high",

                titleUk: "Опозиція до курсу Івана Виговського",
                titleEn: "Opposition to Ivan Vyhovsky's Policy",

                locationUk: "Запорожжя, українські землі",
                locationEn: "Zaporizhia, Ukrainian lands",

                opponentsUk: ["політичний курс Івана Виговського"],
                opponentsEn: ["Ivan Vyhovsky's political course"],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "Точна чисельність прихильників Сірка в цей період не встановлена.",
                forcesEn:
                    "The exact number of Sirko's supporters in this period is not established.",

                lossesUk: "Не застосовується",
                lossesEn: "Not applicable",

                resultUk:
                    "Сірко виступав проти зближення з Річчю Посполитою та Кримським ханством.",
                resultEn:
                    "Sirko opposed rapprochement with the Polish-Lithuanian Commonwealth and the Crimean Khanate.",

                summaryUk:
                    "У 1657–1659 роках Сірко активно виступав проти політики Івана Виговського.",

                summaryEn:
                    "In 1657–1659, Sirko actively opposed Ivan Vyhovsky's policy.",

                courseUk: [
                    "Після смерті Богдана Хмельницького українські землі увійшли в період політичної нестабільності.",
                    "Іван Виговський орієнтувався на складні союзи з Річчю Посполитою та Кримським ханством.",
                    "Сірко виступав проти такого курсу, що стало одним із перших помітних проявів його військово-політичної позиції.",
                ],

                courseEn: [
                    "After Bohdan Khmelnytsky's death, Ukrainian lands entered a period of political instability.",
                    "Ivan Vyhovsky pursued complex alliances with the Polish-Lithuanian Commonwealth and the Crimean Khanate.",
                    "Sirko opposed this course, which became one of the first visible expressions of his military-political stance.",
                ],

                significanceUk: [
                    "Показує Сірка не лише як воїна, а як самостійну політичну фігуру.",
                    "Пояснює його подальший зв’язок із Запорожжям і антикримським напрямком.",
                ],

                significanceEn: [
                    "Shows Sirko not only as a warrior but as an independent political figure.",
                    "Explains his later connection with Zaporizhia and the anti-Crimean direction.",
                ],

                historicalNoteUk:
                    "Це військово-політична подія, а не окрема битва; точна реконструкція бойових дій у межах цього сюжету потребує окремої джерельної перевірки.",

                historicalNoteEn:
                    "This is a military-political event, not a separate battle; exact reconstruction of combat actions within this episode requires separate source verification.",

                hasDetailPage: false,
                image: "/images/military/events/opposition-to-vyhovsky-1657-1659.webp",

                sources: [
                    "Енциклопедія історії України: Сірко Іван",
                ],
            },
            {
                id: "akerman-campaign-late-1650s",
                slug: "akerman-campaign-late-1650s",
                order: 3,

                year: "1657–1659",
                dateUk: "друга половина 1650-х років",
                dateEn: "second half of the 1650s",

                type: "campaign",
                direction: "early-years",
                importance: "medium",
                resultType: "strategic-success",
                confidence: "medium",

                titleUk: "Похід на Аккерманський напрямок",
                titleEn: "Campaign toward Akkerman",

                locationUk: "Аккерманський напрямок",
                locationEn: "Akkerman direction",

                opponentsUk: ["сили, пов’язані з Кримським ханством та османським прикордонням"],
                opponentsEn: ["forces connected with the Crimean Khanate and Ottoman frontier"],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk: "Точна чисельність невідома.",
                forcesEn: "Exact strength is unknown.",

                lossesUk: "Точні втрати невідомі.",
                lossesEn: "Exact losses are unknown.",

                resultUk:
                    "Сірко організував похід на Аккерманський напрямок у контексті боротьби проти курсу Виговського.",
                resultEn:
                    "Sirko organized a campaign toward Akkerman in the context of opposition to Vyhovsky's policy.",

                summaryUk:
                    "Похід на Аккерман згадується як один із ранніх військових виступів Сірка другої половини 1650-х років.",

                summaryEn:
                    "The campaign toward Akkerman is mentioned as one of Sirko's early military actions of the second half of the 1650s.",

                courseUk: [
                    "У джерелах похід на Аккерман подається як елемент боротьби Сірка проти політичного курсу Івана Виговського.",
                    "Аккерманський напрямок мав значення через близькість до османсько-татарського прикордоння.",
                    "Докладна реконструкція маршруту, чисельності війська та втрат у доступних коротких довідках не подається.",
                ],

                courseEn: [
                    "Sources present the campaign toward Akkerman as part of Sirko's struggle against Ivan Vyhovsky's political course.",
                    "The Akkerman direction mattered because of its proximity to the Ottoman-Tatar frontier.",
                    "Detailed reconstruction of the route, troop strength, and losses is not provided in short reference sources.",
                ],

                significanceUk: [
                    "Один із ранніх підтверджених напрямків військової активності Сірка.",
                    "Показує зв’язок його політичної позиції з конкретними військовими діями.",
                ],

                significanceEn: [
                    "One of the early confirmed directions of Sirko's military activity.",
                    "Shows the connection between his political stance and concrete military actions.",
                ],

                historicalNoteUk:
                    "Подія має середній рівень деталізації: напрямок підтверджується, але точні бойові подробиці потребують додаткової перевірки.",

                historicalNoteEn:
                    "The event has a medium level of detail: the direction is confirmed, but exact combat details require additional verification.",

                hasDetailPage: false,
                image: "/images/military/events/akerman-campaign-late-1650s.webp",

                sources: [
                    "Енциклопедія історії України: Сірко Іван",
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

        periodUk: "1660–1668",
        periodEn: "1660–1668",

        summaryUk:
            "Походи Івана Сірка проти Кримського ханства, татарських улусів і турецько-татарських укріплень на південному напрямку.",

        summaryEn:
            "Ivan Sirko's campaigns against the Crimean Khanate, Tatar settlements, and Ottoman-Tatar strongholds in the southern direction.",

        contentUk: [
            "Кримський напрямок став одним із головних у військовій діяльності Сірка.",
            "У цих походах він діяв не лише оборонно, а й переносив бойові дії на територію противника.",
            "Джерела часто не дають повної реконструкції боїв, але дозволяють визначити головні напрямки, учасників і результати походів.",
        ],

        contentEn: [
            "The Crimean direction became one of the main areas of Sirko's military activity.",
            "In these campaigns, he acted not only defensively but also carried military action into enemy territory.",
            "Sources often do not provide full battle reconstructions, but they allow us to identify the main directions, participants, and results of the campaigns.",
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

                opponentsUk: ["Османські гарнізони", "турецько-татарські сили"],
                opponentsEn: ["Ottoman garrisons", "Ottoman-Tatar forces"],

                commandersUk: ["Іван Сірко"],
                commandersEn: ["Ivan Sirko"],

                forcesUk:
                    "У популярних викладах згадується близько 5000 козаків; академічне підтвердження цієї цифри потребує перевірки.",
                forcesEn:
                    "Popular accounts mention about 5,000 Cossacks; academic confirmation of this number requires verification.",

                lossesUk: "Точні втрати сторін невідомі.",
                lossesEn: "Exact losses are unknown.",

                resultUk:
                    "Козаки завдали удару по Очакову та Аслан-Кермену, які контролювали вихід із Дніпра до Чорного моря.",
                resultEn:
                    "The Cossacks struck Ochakiv and Aslam-Kermen, which controlled the exit from the Dnipro to the Black Sea.",

                summaryUk:
                    "У 1660 році Сірко здійснив похід проти турецьких укріплень біля гирла Дніпра.",

                summaryEn:
                    "In 1660, Sirko conducted a campaign against Ottoman fortifications near the Dnipro estuary.",

                courseUk: [
                    "За популярним викладом, турки намагалися перекрити козакам вихід у Чорне море біля гирла Дніпра.",
                    "Сірко зібрав козацьке військо й організував удар по Очакову та Аслан-Кермену.",
                    "Частина козаків діяла з боку суші, частина — з боку лиману на чайках.",
                    "Похід завершився руйнуванням або значним пошкодженням укріплень.",
                ],

                courseEn: [
                    "According to popular accounts, Ottoman forces attempted to block Cossack access to the Black Sea near the Dnipro estuary.",
                    "Sirko gathered a Cossack force and organized a strike against Ochakiv and Aslam-Kermen.",
                    "Part of the Cossacks acted from land, while another part moved from the estuary in chaikas.",
                    "The campaign ended with the destruction or serious damage of the fortifications.",
                ],

                significanceUk: [
                    "Похід показав, що Сірко міг діяти проти укріплених пунктів, а не лише проти степових загонів.",
                    "Очаків і Аслан-Кермен були важливими вузлами контролю над південним напрямком.",
                    "Подія має конкретну локалізацію, але чисельність війська та втрати потребують обережного подання.",
                ],

                significanceEn: [
                    "The campaign showed that Sirko could act against fortified points, not only against steppe detachments.",
                    "Ochakiv and Aslam-Kermen were important control points in the southern direction.",
                    "The event has a specific location, but troop numbers and losses must be presented cautiously.",
                ],

                historicalNoteUk:
                    "Деталі походу відомі переважно з популярних історичних викладів; чисельність війська не варто подавати як остаточно встановлений факт.",

                historicalNoteEn:
                    "Details of the campaign are known mainly from popular historical accounts; troop numbers should not be presented as firmly established fact.",

                hasDetailPage: false,
                image: "/images/military/events/ochakiv-aslam-kermen-1660.webp",

                sources: [
                    "Матеріали про похід Сірка на Очаків і Аслан-Кермен",
                    "Популярні історичні виклади про боротьбу Сірка з турецько-татарськими силами",
                ],
            },

            {
                id: "perekop-campaigns-1663",
                slug: "perekop-campaigns-1663",
                order: 2,

                year: "1663",
                dateUk: "1663 рік",
                dateEn: "1663",

                type: "campaign",
                direction: "crimea",
                importance: "major",
                resultType: "strategic-success",
                confidence: "medium",

                titleUk: "Походи на Перекоп",
                titleEn: "Campaigns against Perekop",

                locationUk: "Перекопський напрямок",
                locationEn: "Perekop direction",

                opponentsUk: ["Кримське ханство"],
                opponentsEn: ["Crimean Khanate"],

                commandersUk: ["Іван Сірко", "Григорій Косагов"],
                commandersEn: ["Ivan Sirko", "Grigory Kosagov"],

                forcesUk: "Точна чисельність війська невідома.",
                forcesEn: "Exact troop strength is unknown.",

                lossesUk: "Точні втрати невідомі.",
                lossesEn: "Exact losses are unknown.",

                resultUk:
                    "Козацькі дії на Перекопському напрямку ускладнювали вихід кримських сил із півострова.",
                resultEn:
                    "Cossack actions in the Perekop direction complicated the movement of Crimean forces from the peninsula.",

                summaryUk:
                    "У 1663 році Сірко разом із Григорієм Косаговим діяв проти Перекопських укріплень.",

                summaryEn:
                    "In 1663, Sirko and Grigory Kosagov acted against the Perekop fortifications.",

                courseUk: [
                    "Перекоп був ключовим пунктом між материковим степом і Кримом.",
                    "Сірко діяв на цьому напрямку разом із Григорієм Косаговим.",
                    "Метою походів було стримати кримські сили та не допустити їхнього вільного виходу на українські землі.",
                    "Докладна реконструкція перебігу боїв у доступних коротких джерелах не подається.",
                ],

                courseEn: [
                    "Perekop was a key point between the mainland steppe and Crimea.",
                    "Sirko acted in this direction together with Grigory Kosagov.",
                    "The purpose of the campaigns was to restrain Crimean forces and prevent their free movement into Ukrainian lands.",
                    "A detailed reconstruction of the fighting is not provided in short available sources.",
                ],

                significanceUk: [
                    "Перекоп був стратегічними воротами Криму.",
                    "Дії на цьому напрямку мали не лише тактичне, а й стратегічне значення.",
                    "Цю подію варто подавати як кампанію, а не як одну точно реконструйовану битву.",
                ],

                significanceEn: [
                    "Perekop was the strategic gateway to Crimea.",
                    "Actions in this direction had not only tactical but also strategic importance.",
                    "This event should be presented as a campaign, not as one precisely reconstructed battle.",
                ],

                historicalNoteUk:
                    "Подія має підтверджений напрямок і учасників, але без надійних даних про чисельність, втрати та точний перебіг боїв.",

                historicalNoteEn:
                    "The event has a confirmed direction and participants, but lacks reliable data on troop strength, losses, and exact course of fighting.",

                hasDetailPage: false,
                image: "/images/military/events/perekop-campaigns-1663.webp",

                sources: [
                    "Матеріали про походи Сірка на Перекоп",
                    "Історичні довідки про військову діяльність Івана Сірка",
                ],
            },

            {
                id: "perekop-raid-december-1663",
                slug: "perekop-raid-december-1663",
                order: 3,

                year: "1663",
                dateUk: "6 грудня 1663 року",
                dateEn: "December 6, 1663",

                type: "raid",
                direction: "crimea",
                importance: "major",
                resultType: "victory",
                confidence: "medium",

                titleUk: "Рейд на Перекоп",
                titleEn: "Raid on Perekop",

                locationUk: "Перекоп, узбережжя Чорного моря",
                locationEn: "Perekop, Black Sea coast",

                opponentsUk: ["Кримські татари"],
                opponentsEn: ["Crimean Tatars"],

                commandersUk: ["Іван Сірко", "Григорій Косагов"],
                commandersEn: ["Ivan Sirko", "Grigory Kosagov"],

                forcesUk:
                    "За музейним викладом: 90 козаків, 30 донців і 60 калмиків.",
                forcesEn:
                    "According to a museum account: 90 Cossacks, 30 Don Cossacks, and 60 Kalmyks.",

                lossesUk: "Точні втрати невідомі.",
                lossesEn: "Exact losses are unknown.",

                resultUk:
                    "Здійснено швидкий рейд на кримському напрямку, зруйновано частину татарських поселень і визволено християнських полонених.",
                resultEn:
                    "A rapid raid was carried out in the Crimean direction; part of the Tatar settlements were destroyed and Christian captives were liberated.",

                summaryUk:
                    "6 грудня 1663 року Сірко з невеликим змішаним загоном здійснив рейд на Перекоп.",

                summaryEn:
                    "On December 6, 1663, Sirko led a small mixed detachment in a raid on Perekop.",

                courseUk: [
                    "Загін Сірка складався з козаків, донців і калмиків.",
                    "Військо рушило на Перекопський напрямок і дійшло до узбережжя Чорного моря.",
                    "Під час рейду було завдано удару по татарських поселеннях.",
                    "Окремо згадується визволення християнських полонених.",
                ],

                courseEn: [
                    "Sirko's detachment consisted of Cossacks, Don Cossacks, and Kalmyks.",
                    "The force moved toward Perekop and reached the Black Sea coast.",
                    "During the raid, Tatar settlements were attacked.",
                    "The liberation of Christian captives is also mentioned.",
                ],

                significanceUk: [
                    "Рейд демонструє типову для Сірка тактику: мала мобільна група, швидкість і раптовість.",
                    "Подія має точну дату, що робить її однією з найконкретніших у ранньому кримському циклі.",
                    "Чисельність загону подається з обережністю, бо вона залежить від конкретного викладу.",
                ],

                significanceEn: [
                    "The raid demonstrates Sirko's typical tactics: a small mobile group, speed, and surprise.",
                    "The event has an exact date, making it one of the most specific in the early Crimean cycle.",
                    "The force strength is presented cautiously because it depends on a particular account.",
                ],

                historicalNoteUk:
                    "Цифри щодо складу загону подані за музейним викладом і потребують звірки з академічними працями.",

                historicalNoteEn:
                    "Figures for the detachment are taken from a museum account and require checking against academic works.",

                hasDetailPage: false,
                image: "/images/military/events/perekop-raid-december-1663.webp",

                sources: [
                    "Дніпровський історичний музей: матеріали про походи Івана Сірка",
                ],
            },

            {
                id: "crimean-campaigns-1668",
                slug: "crimean-campaigns-1668",
                order: 4,

                year: "1668",
                dateUk: "жовтень — листопад 1668 року",
                dateEn: "October — November 1668",

                type: "campaign",
                direction: "crimea",
                importance: "major",
                resultType: "victory",
                confidence: "medium",

                titleUk: "Похід у Крим 1668 року",
                titleEn: "Crimean Campaign of 1668",

                locationUk: "Крим, напрямок Кафи та Бахчисарая",
                locationEn: "Crimea, direction of Kaffa and Bakhchysarai",

                opponentsUk: ["Кримське ханство"],
                opponentsEn: ["Crimean Khanate"],

                commandersUk: ["Іван Сірко", "Іван Ждан-Ріг"],
                commandersEn: ["Ivan Sirko", "Ivan Zhdan-Rih"],

                forcesUk: "Точна чисельність війська невідома.",
                forcesEn: "Exact troop strength is unknown.",

                lossesUk:
                    "У джерельних переказах згадуються значні втрати татар і визволення близько 2000 полонених; цифри потребують обережного подання.",
                lossesEn:
                    "Source accounts mention significant Tatar losses and the liberation of about 2,000 captives; the figures should be presented cautiously.",

                resultUk:
                    "Козаки завдали ударів по татарських улусах, визволили полонених і загрожували центрам ханства.",
                resultEn:
                    "The Cossacks struck Tatar settlements, liberated captives, and threatened centers of the khanate.",

                summaryUk:
                    "У 1668 році Сірко разом з Іваном Жданом-Рогом здійснив похід у Крим двома напрямками.",

                summaryEn:
                    "In 1668, Sirko and Ivan Zhdan-Rih conducted a campaign into Crimea in two directions.",

                courseUk: [
                    "Кошовий Іван Ждан-Ріг і Сірко вирішили діяти двома загонами.",
                    "Ждан-Ріг рушив до Арбаутука.",
                    "Сірко зайшов від Кафи на Ширимбеївські улуси.",
                    "Під час походу було спустошено кілька татарських поселень і звільнено значну кількість руських бранців.",
                ],

                courseEn: [
                    "Kish Otaman Ivan Zhdan-Rih and Sirko decided to act in two detachments.",
                    "Zhdan-Rih moved toward Arbautuk.",
                    "Sirko advanced from Kaffa toward the Shyrymbei uluses.",
                    "During the campaign, several Tatar settlements were devastated and many Ruthenian captives were liberated.",
                ],

                significanceUk: [
                    "Похід показав здатність запорожців діяти вглиб Криму.",
                    "Визволення полонених було одним із ключових мотивів таких походів.",
                    "Дії біля Кафи та напрямок на Бахчисарай мали сильний психологічний ефект.",
                ],

                significanceEn: [
                    "The campaign showed the Zaporozhians' ability to operate deep inside Crimea.",
                    "The liberation of captives was one of the key motives of such campaigns.",
                    "Actions near Kaffa and toward Bakhchysarai had a strong psychological effect.",
                ],

                historicalNoteUk:
                    "Подія має конкретні географічні орієнтири, але чисельність війська та втрати сторін у доступних джерелах подаються неповно.",

                historicalNoteEn:
                    "The event has specific geographical markers, but troop strength and losses are incompletely presented in available sources.",

                hasDetailPage: false,
                image: "/images/military/events/crimean-campaigns-1668.webp",

                sources: [
                    "Дніпровський історичний музей: Іван Сірко — походи в Крим та Волоську землю",
                    "Енциклопедія історії України: Сірко Іван",
                ],
            },
        ],
    },
    {
        id: "steppe-direction",
        slug: "steppe-direction",
        order: 3,
        direction: "steppe",

        titleUk: "Степовий напрямок",
        titleEn: "Steppe Direction",

        shortTitleUk: "Степ",
        shortTitleEn: "Steppe",

        periodUk: "1669–1674",
        periodEn: "1669–1674",

        summaryUk:
            "Період найактивніших рейдів Сірка проти ногайських і кримських орд, коли його ім'я стало відомим далеко за межами Запорожжя.",

        summaryEn:
            "The period of Sirko's most active raids against Nogai and Crimean forces, when his name became known far beyond Zaporizhia.",

        contentUk: [
            "На початку 1670-х років Сірко регулярно здійснював походи в степ і на кримський напрямок.",
            "Саме в цей період сформувалася його репутація непередбачуваного й надзвичайно мобільного полководця."
        ],

        contentEn: [],

        image: "/images/military/steppe-direction.webp",

        events: [
            {
                id: "ochakiv-campaign-1670",
                slug: "ochakiv-campaign-1670",

                order: 1,

                year: "1670",
                dateUk: "1670 рік",
                dateEn: "1670",

                type: "campaign",
                direction: "steppe",

                importance: "major",

                resultType: "victory",

                confidence: "medium",

                titleUk:
                    "Похід на Очаківський напрямок",

                titleEn:
                    "Campaign toward Ochakiv",

                locationUk:
                    "Очаківський напрямок",

                locationEn:
                    "Ochakiv direction",

                opponentsUk: [
                    "Османська імперія",
                    "Кримське ханство"
                ],

                opponentsEn: [
                    "Ottoman Empire",
                    "Crimean Khanate"
                ],

                commandersUk: [
                    "Іван Сірко"
                ],

                commandersEn: [
                    "Ivan Sirko"
                ],

                forcesUk:
                    "Точна чисельність невідома",

                forcesEn:
                    "Unknown",

                lossesUk:
                    "Невідомо",

                lossesEn:
                    "Unknown",

                resultUk:
                    "Успішний рейд на турецько-татарські позиції",

                resultEn:
                    "Successful raid",

                summaryUk:
                    "Сірко продовжив тиск на османсько-татарські укріплення біля чорноморського узбережжя.",

                summaryEn:
                    "",

                courseUk: [
                    "Козацькі загони діяли швидкими мобільними групами.",
                    "Основною метою було руйнування логістики противника.",
                    "Походи змушували татарські сили відволікати значні ресурси на оборону."
                ],

                courseEn: [],

                significanceUk: [
                    "Посилення контролю над південним напрямком.",
                    "Підтвердження репутації Сірка як майстра рейдової війни."
                ],

                significanceEn: [],

                hasDetailPage: true,

                image:
                    "/images/military/events/ochakiv-campaign-1670.webp"
            },

            {
                id: "islam-kermen-1673",
                slug: "islam-kermen-1673",

                order: 2,

                year: "1673",
                dateUk: "1673 рік",
                dateEn: "1673",

                type: "siege",

                direction: "steppe",

                importance: "major",

                resultType: "victory",

                confidence: "high",

                titleUk:
                    "Здобуття Іслам-Кермена",

                titleEn:
                    "Capture of Islam-Kermen",

                locationUk:
                    "Іслам-Кермен",

                locationEn:
                    "Islam-Kermen",

                opponentsUk: [
                    "Османський гарнізон"
                ],

                opponentsEn: [
                    "Ottoman garrison"
                ],

                commandersUk: [
                    "Іван Сірко"
                ],

                commandersEn: [
                    "Ivan Sirko"
                ],

                forcesUk:
                    "Точна чисельність потребує уточнення за академічними джерелами",

                forcesEn:
                    "Requires verification",

                lossesUk:
                    "Точні дані невідомі",

                lossesEn:
                    "Unknown",

                resultUk:
                    "Фортеця захоплена козаками",

                resultEn:
                    "Fortress captured",

                summaryUk:
                    "Одна з найвідоміших перемог Сірка над османськими силами.",

                summaryEn:
                    "",

                courseUk: [
                    "Іслам-Кермен був важливим турецьким укріпленням на Дніпрі.",
                    "Після штурму фортеця була взята козаками.",
                    "Перемога суттєво послабила позиції Османської імперії на цьому напрямку."
                ],

                courseEn: [],

                significanceUk: [
                    "Одна з найзначніших перемог Сірка.",
                    "Посилення контролю над дніпровським напрямком.",
                    "Ключова подія для окремої single page."
                ],

                significanceEn: [],

                historicalNoteUk:
                    "Ця подія добре документована в історичних працях і має високий рівень достовірності.",

                historicalNoteEn:
                    "",

                hasDetailPage: true,

                image:
                    "/images/military/events/islam-kermen-1673.webp",

                sources: [
                    "Енциклопедія історії України",
                    "Яворницький"
                ]
            },

            {
                id: "crimean-raid-1674",
                slug: "crimean-raid-1674",

                order: 3,

                year: "1674",
                dateUk: "1674 рік",
                dateEn: "1674",

                type: "raid",

                direction: "steppe",

                importance: "major",

                resultType: "victory",

                confidence: "medium",

                titleUk:
                    "Великий рейд у Крим",

                titleEn:
                    "Major Raid into Crimea",

                locationUk:
                    "Кримський півострів",

                locationEn:
                    "Crimean Peninsula",

                opponentsUk: [
                    "Кримське ханство"
                ],

                opponentsEn: [
                    "Crimean Khanate"
                ],

                commandersUk: [
                    "Іван Сірко"
                ],

                commandersEn: [
                    "Ivan Sirko"
                ],

                forcesUk:
                    "Невідомо",

                forcesEn:
                    "Unknown",

                lossesUk:
                    "Невідомо",

                lossesEn:
                    "Unknown",

                resultUk:
                    "Успішний рейд із визволенням полонених",

                resultEn:
                    "Successful raid",

                summaryUk:
                    "Сірко здійснив черговий глибокий рейд на територію ханства.",

                summaryEn:
                    "",

                courseUk: [
                    "Козацькі сили проникли вглиб території ханства.",
                    "Було завдано ударів по населених пунктах та військових об'єктах.",
                    "За традицією таких походів частину невільників вдалося визволити."
                ],

                courseEn: [],

                significanceUk: [
                    "Підтримання постійного тиску на Кримське ханство.",
                    "Демонстрація високої мобільності запорозьких сил."
                ],

                significanceEn: [],

                hasDetailPage: true,

                image:
                    "/images/military/events/crimean-raid-1674.webp"
            }
        ]
    },
    {
        id: "ruina-events",
        slug: "ruina-events",
        order: 4,
        direction: "ruina",
        titleUk: "Доба Руїни",
        titleEn: "The Ruin",
        shortTitleUk: "Руїна",
        shortTitleEn: "Ruin",
        periodUk: "1657–1670-ті роки",
        periodEn: "1657–1670s",
        summaryUk:
            "Військово-політичні події Руїни, у яких Сірко діяв між гетьманськими угрупованнями, Московією, Річчю Посполитою, Дорошенком та запорозьким середовищем.",
        summaryEn:
            "Military-political events of the Ruin, where Sirko acted between Hetman factions, Muscovy, the Polish-Lithuanian Commonwealth, Doroshenko, and the Zaporizhian environment.",
        contentUk: [
            "Доба Руїни була для Сірка не лише періодом боїв, а й періодом складних політичних рішень.",
            "Його військові дії часто були пов'язані з боротьбою між різними центрами влади та спробами зберегти автономію Запорожжя.",
        ],
        contentEn: [
            "For Sirko, the Ruin was not only a period of battles, but also a period of difficult political decisions.",
            "His military actions were often connected with the struggle between different centers of power and attempts to preserve Zaporizhian autonomy.",
        ],
        image: "/images/military/ruina-events.jpg",
        events: [
            {
                id: "varenytsia-uprising-1664-1665",
                slug: "varenytsia-uprising-1664-1665",
                order: 1,
                year: "1664–1665",
                type: "political-military",
                direction: "ruina",
                importance: "major",
                resultType: "political-result",
                confidence: "high",
                titleUk: "Участь у повстанні Варениці",
                titleEn: "Participation in Varenytsia's Uprising",
                locationUk: "Правобережна Україна",
                locationEn: "Right-Bank Ukraine",
                opponentsUk: ["Сили Речі Посполитої", "союзні їм угруповання"],
                opponentsEn: ["Polish-Lithuanian forces", "allied factions"],
                resultUk:
                    "Сірко діяв у контексті антипольського руху на Правобережжі.",
                resultEn:
                    "Sirko acted in the context of an anti-Polish movement on the Right Bank.",
                summaryUk:
                    "У 1664–1665 роках Сірко був пов'язаний із повстанням Варениці на Правобережній Україні.",
                summaryEn:
                    "In 1664–1665, Sirko was connected with Varenytsia's uprising in Right-Bank Ukraine.",
                contentUk: [
                    "Ця подія належить до складного військово-політичного контексту Руїни.",
                    "Для Сірка вона важлива тим, що показує його участь не лише в антиосманських і антитатарських походах, а й у внутрішній боротьбі за напрям розвитку козацької України.",
                ],
                contentEn: [
                    "This event belongs to the complex military-political context of the Ruin.",
                    "For Sirko, it is important because it shows his participation not only in anti-Ottoman and anti-Tatar campaigns, but also in the internal struggle over the future direction of Cossack Ukraine.",
                ],
                hasDetailPage: true,
                image: "/images/military/varenytsia-uprising-1664-1665.jpg",
                sources: [SOURCES.encyclopedia],
            },
            {
                id: "conflict-charnecki",
                slug: "conflict-charnecki",
                order: 2,
                year: "1660-ті",
                dateEn: "1660s",
                type: "political-military",
                direction: "ruina",
                importance: "medium",
                resultType: "unclear",
                confidence: "medium",
                titleUk: "Зіткнення із Чарнецьким",
                titleEn: "Clash with Czarniecki",
                locationUk: "Правобережна Україна",
                locationEn: "Right-Bank Ukraine",
                opponentsUk: ["Стефан Чарнецький", "польські сили"],
                opponentsEn: ["Stefan Czarniecki", "Polish forces"],
                resultUk:
                    "Епізод військово-політичної боротьби доби Руїни.",
                resultEn:
                    "An episode of military-political struggle during the Ruin.",
                summaryUk:
                    "У переліках військових дій Сірка згадується зіткнення із Чарнецьким.",
                summaryEn:
                    "Lists of Sirko's military actions mention a clash with Czarniecki.",
                contentUk: [
                    "Ця подія потребує подальшого уточнення за джерелами, бо часто подається коротким пунктом без докладної реконструкції.",
                    "У межах загального роуту її варто показувати як частину політично-військового контексту Руїни, а не як повністю окрему задокументовану битву.",
                ],
                contentEn: [
                    "This event requires further clarification through sources, because it is often presented as a short item without detailed reconstruction.",
                    "Within the general route, it should be shown as part of the military-political context of the Ruin rather than as a fully reconstructed separate battle.",
                ],
                hasDetailPage: false,
                image: "/images/military/conflict-charnecki.jpg",
                sources: [SOURCES.museumDnipro],
            },
            {
                id: "doroshenko-conflict",
                slug: "doroshenko-conflict",
                order: 3,
                year: "1660–1670-ті",
                dateEn: "1660s–1670s",
                type: "political-military",
                direction: "ruina",
                importance: "major",
                resultType: "political-result",
                confidence: "medium",
                titleUk: "Боротьба і союзи з Дорошенком",
                titleEn: "Conflict and Alliances with Doroshenko",
                locationUk: "Правобережжя, Запорожжя",
                locationEn: "Right Bank, Zaporizhia",
                opponentsUk: ["Петро Дорошенко", "його союзники", "змінні політичні сили"],
                opponentsEn: ["Petro Doroshenko", "his allies", "shifting political forces"],
                resultUk:
                    "Складні військово-політичні відносини, що змінювалися залежно від обставин.",
                resultEn:
                    "Complex military-political relations that shifted depending on circumstances.",
                summaryUk:
                    "Відносини Сірка з Дорошенком не були простими: у джерелах згадуються і боротьба, і періоди взаємодії.",
                summaryEn:
                    "Sirko's relations with Doroshenko were complex: sources mention both conflict and periods of interaction.",
                contentUk: [
                    "Дорошенко був однією з ключових фігур доби Руїни, а Сірко діяв у політичному просторі, де союзи могли швидко змінюватися.",
                    "Тому цю тему краще подавати не як одну битву, а як окремий військово-політичний напрям.",
                ],
                contentEn: [
                    "Doroshenko was one of the key figures of the Ruin, while Sirko acted in a political space where alliances could change rapidly.",
                    "Therefore, this subject is better presented not as one battle, but as a separate military-political direction.",
                ],
                hasDetailPage: true,
                image: "/images/military/doroshenko-conflict.jpg",
                sources: [SOURCES.museumDnipro],
            },
        ],
    },
    {
        id: "ottoman-wars",
        slug: "ottoman-wars",
        order: 5,
        direction: "ottoman",
        titleUk: "Османські війни",
        titleEn: "Ottoman Wars",
        shortTitleUk: "Османи",
        shortTitleEn: "Ottomans",
        periodUk: "1660–1670-ті роки",
        periodEn: "1660s–1670s",
        summaryUk:
            "Походи Сірка проти османських фортець, прикордонних укріплень і союзних сил Османської імперії.",
        summaryEn:
            "Sirko's campaigns against Ottoman fortresses, border strongholds, and allied forces of the Ottoman Empire.",
        contentUk: [
            "Османський напрямок був одним із центральних у військовій діяльності Івана Сірка.",
            "До цього блоку належать походи на Очаків, Іслам-Кермен, Кизикермен, Тягиню, Кам'янецький напрямок та інші укріплені пункти, пов'язані з османською військовою системою на півдні.",
        ],
        contentEn: [
            "The Ottoman direction was one of the central parts of Ivan Sirko's military activity.",
            "This block includes campaigns against Ochakiv, Islam-Kermen, Kyzykermen, Tiahynea, the Kamianets direction, and other fortified points connected with the Ottoman military system in the south.",
        ],
        image: "/images/military/ottoman-wars.jpg",
        events: [
            {
                id: "ochakiv-campaign-1670-1671",
                slug: "ochakiv-campaign-1670-1671",
                order: 1,
                year: "1670–1671",
                type: "campaign",
                direction: "ottoman",
                importance: "major",
                resultType: "strategic-success",
                confidence: "high",
                titleUk: "Походи проти Очакова",
                titleEn: "Campaigns against Ochakiv",
                locationUk: "Очаків, Нижнє Побужжя",
                locationEn: "Ochakiv, Lower Buh region",
                opponentsUk: ["Османська імперія", "турецькі гарнізони"],
                opponentsEn: ["Ottoman Empire", "Turkish garrisons"],
                resultUk:
                    "Успішні дії проти османського укріплення на південному напрямку.",
                resultEn:
                    "Successful actions against an Ottoman stronghold in the southern direction.",
                summaryUk:
                    "У 1670–1671 роках Сірко діяв проти турецьких укріплень, зокрема Очакова.",
                summaryEn:
                    "In 1670–1671, Sirko acted against Turkish strongholds, including Ochakiv.",
                contentUk: [
                    "Очаків був одним із важливих османських опорних пунктів на півдні, що контролював вихід до Чорного моря та степові комунікації.",
                    "Дії Сірка проти Очакова демонструють його прагнення не лише обороняти Запорожжя, а й бити по ключових пунктах противника.",
                    "Ця подія добре підходить для майбутньої окремої сторінки, тому що має чіткий напрям, противника, стратегічне значення та прив'язку до відомого укріплення.",
                ],
                contentEn: [
                    "Ochakiv was one of the important Ottoman strongholds in the south, controlling access to the Black Sea and steppe communications.",
                    "Sirko's actions against Ochakiv show his intention not only to defend Zaporizhia, but also to strike key enemy positions.",
                    "This event is suitable for a future separate page because it has a clear direction, opponent, strategic meaning, and connection to a known fortress.",
                ],
                hasDetailPage: true,
                image: "/images/military/ochakiv-campaign-1670-1671.jpg",
                sources: [SOURCES.encyclopedia, SOURCES.museumDnipro],
            },
            {
                id: "islam-kermen-campaign-1670-1671",
                slug: "islam-kermen-campaign-1670-1671",
                order: 2,
                year: "1670–1671",
                type: "siege",
                direction: "ottoman",
                importance: "major",
                resultType: "strategic-success",
                confidence: "high",
                titleUk: "Дії проти Іслам-Кермена",
                titleEn: "Actions against Islam-Kermen",
                locationUk: "Іслам-Кермен, Нижнє Подніпров'я",
                locationEn: "Islam-Kermen, Lower Dnipro region",
                opponentsUk: ["Османська імперія", "татарські й турецькі сили"],
                opponentsEn: ["Ottoman Empire", "Tatar and Turkish forces"],
                resultUk:
                    "Удар по важливому укріпленню на Дніпровському напрямку.",
                resultEn:
                    "Strike against an important fortress in the Dnipro direction.",
                summaryUk:
                    "Іслам-Кермен був одним із ключових укріплених пунктів на південному напрямку, проти якого діяв Сірко.",
                summaryEn:
                    "Islam-Kermen was one of the key fortified points in the southern direction against which Sirko operated.",
                contentUk: [
                    "Іслам-Кермен контролював важливий простір у нижній течії Дніпра, тому був постійною загрозою для запорожців.",
                    "Дії Сірка проти цього пункту входять до ширшої системи його боротьби з османсько-татарською присутністю на півдні.",
                    "Для загального роуту цю подію варто показувати як один із вузлів османського напрямку, а пізніше її можна винести в single page.",
                ],
                contentEn: [
                    "Islam-Kermen controlled an important area in the lower Dnipro region and therefore remained a constant threat to the Zaporozhians.",
                    "Sirko's actions against this point were part of his broader struggle against Ottoman-Tatar presence in the south.",
                    "For the general route, this event should be shown as one of the key nodes of the Ottoman direction, and later it can be developed into a single page.",
                ],
                hasDetailPage: true,
                image: "/images/military/islam-kermen-campaign-1670-1671.jpg",
                sources: [SOURCES.encyclopedia, SOURCES.museumDnipro],
            },
            {
                id: "kyzykermen-actions",
                slug: "kyzykermen-actions",
                order: 3,
                year: "1670-ті",
                dateEn: "1670s",
                type: "siege",
                direction: "ottoman",
                importance: "medium",
                resultType: "strategic-success",
                confidence: "medium",
                titleUk: "Дії проти Кизикермена",
                titleEn: "Actions against Kyzykermen",
                locationUk: "Кизикермен, Нижнє Подніпров'я",
                locationEn: "Kyzykermen, Lower Dnipro region",
                opponentsUk: ["Османські й татарські сили"],
                opponentsEn: ["Ottoman and Tatar forces"],
                resultUk:
                    "Тиск на систему османських укріплень у нижній течії Дніпра.",
                resultEn:
                    "Pressure on the system of Ottoman fortifications in the lower Dnipro region.",
                summaryUk:
                    "Кизикермен входив до групи південних укріплень, пов'язаних із османсько-татарським контролем над степом.",
                summaryEn:
                    "Kyzykermen belonged to the group of southern fortifications connected with Ottoman-Tatar control of the steppe.",
                contentUk: [
                    "У військовій біографії Сірка важливі не лише окремі великі битви, а й систематичний тиск на прикордонні укріплення.",
                    "Кизикермен треба розглядати саме в цьому контексті: як частину боротьби за контроль над південними комунікаціями.",
                ],
                contentEn: [
                    "In Sirko's military biography, not only large battles are important, but also systematic pressure on frontier fortifications.",
                    "Kyzykermen should be understood in this context: as part of the struggle for control over southern communications.",
                ],
                hasDetailPage: false,
                image: "/images/military/kyzykermen-actions.jpg",
                sources: [SOURCES.sirkoOttomanTatar, SOURCES.museumDnipro],
            },
            {
                id: "tiahynea-budjak-bilhorod",
                slug: "tiahynea-budjak-bilhorod",
                order: 4,
                year: "1670-ті",
                dateEn: "1670s",
                type: "campaign",
                direction: "ottoman",
                importance: "medium",
                resultType: "strategic-success",
                confidence: "medium",
                titleUk: "Тягиня, Буджак і Білгородчина",
                titleEn: "Tiahynea, Budjak, and Bilhorod Region",
                locationUk: "Тягиня, Буджак, Білгородчина",
                locationEn: "Tiahynea, Budjak, Bilhorod region",
                opponentsUk: ["Османські сили", "татарські загони"],
                opponentsEn: ["Ottoman forces", "Tatar detachments"],
                resultUk:
                    "Дії на південно-західному напрямку проти османсько-татарських сил.",
                resultEn:
                    "Operations in the southwestern direction against Ottoman-Tatar forces.",
                summaryUk:
                    "У переліках військових дій Сірка згадуються Тягиня, Буджак і Білгородчина як напрямки його походів.",
                summaryEn:
                    "Lists of Sirko's military actions mention Tiahynea, Budjak, and the Bilhorod region as directions of his campaigns.",
                contentUk: [
                    "Цей блок краще подавати не як одну битву, а як південно-західний напрямок походів.",
                    "Тут Сірко діяв проти османсько-татарського прикордоння, яке становило небезпеку для козацьких і українських земель.",
                    "Подію треба додатково деталізувати, якщо в майбутньому буде знайдено точніші описи окремих сутичок.",
                ],
                contentEn: [
                    "This block is better presented not as a single battle, but as a southwestern campaign direction.",
                    "Here Sirko acted against the Ottoman-Tatar frontier, which threatened Cossack and Ukrainian lands.",
                    "The event should be further detailed if more precise descriptions of individual clashes are found in the future.",
                ],
                hasDetailPage: false,
                image: "/images/military/tiahynea-budjak-bilhorod.jpg",
                sources: [SOURCES.museumDnipro],
            },
            {
                id: "kamianets-direction",
                slug: "kamianets-direction",
                order: 5,
                year: "1670-ті",
                dateEn: "1670s",
                type: "campaign",
                direction: "ottoman",
                importance: "medium",
                resultType: "strategic-success",
                confidence: "medium",
                titleUk: "Кам'янецький напрямок",
                titleEn: "Kamianets Direction",
                locationUk: "Кам'янецький напрямок",
                locationEn: "Kamianets direction",
                opponentsUk: ["Османська імперія", "союзні сили"],
                opponentsEn: ["Ottoman Empire", "allied forces"],
                resultUk:
                    "Дії в контексті боротьби проти османського впливу на Правобережжі.",
                resultEn:
                    "Actions in the context of struggle against Ottoman influence on the Right Bank.",
                summaryUk:
                    "Кам'янецький напрямок пов'язаний із ширшим османським контекстом 1670-х років.",
                summaryEn:
                    "The Kamianets direction is connected with the broader Ottoman context of the 1670s.",
                contentUk: [
                    "Після захоплення Кам'янця османський фактор став ще важливішим у політиці та війнах Правобережжя.",
                    "Для Сірка цей напрямок був частиною загальної боротьби з османським просуванням і його союзниками.",
                ],
                contentEn: [
                    "After the capture of Kamianets, the Ottoman factor became even more important in the politics and wars of the Right Bank.",
                    "For Sirko, this direction was part of the broader struggle against Ottoman advance and its allies.",
                ],
                hasDetailPage: false,
                image: "/images/military/kamianets-direction.jpg",
                sources: [SOURCES.museumDnipro],
            },
        ],
    },
    {
        id: "zaporizhian-defense",
        slug: "zaporizhian-defense",
        order: 6,
        direction: "zaporizhia",
        titleUk: "Оборона Запорожжя",
        titleEn: "Defense of Zaporizhia",
        shortTitleUk: "Запорожжя",
        shortTitleEn: "Zaporizhia",
        periodUk: "1660–1670-ті роки",
        periodEn: "1660s–1670s",
        summaryUk:
            "Оборонні дії, контрудари, захист Січі та боротьба за безпеку запорозьких земель.",
        summaryEn:
            "Defensive actions, counterstrikes, protection of the Sich, and the struggle for the security of Zaporizhian lands.",
        contentUk: [
            "Сірко відомий не лише як організатор наступальних походів, а й як оборонець Запорожжя.",
            "Цей напрямок об'єднує події, де головною метою було зупинити ворога, захистити Січ або перехопити нападників до того, як вони досягнуть козацьких земель.",
        ],
        contentEn: [
            "Sirko is known not only as an organizer of offensive campaigns, but also as a defender of Zaporizhia.",
            "This direction brings together events whose main goal was to stop the enemy, protect the Sich, or intercept raiders before they reached Cossack lands.",
        ],
        image: "/images/military/zaporizhian-defense.jpg",
        events: [
            {
                id: "defense-against-tatar-raids",
                slug: "defense-against-tatar-raids",
                order: 1,
                year: "1660–1670-ті",
                dateEn: "1660s–1670s",
                type: "defense",
                direction: "zaporizhia",
                importance: "major",
                resultType: "strategic-success",
                confidence: "medium",
                titleUk: "Оборона від татарських набігів",
                titleEn: "Defense against Tatar Raids",
                locationUk: "Запорозькі землі, степові шляхи",
                locationEn: "Zaporizhian lands, steppe routes",
                opponentsUk: ["Кримські татари", "ногайські загони"],
                opponentsEn: ["Crimean Tatars", "Nogai detachments"],
                resultUk:
                    "Стримування набігів і захист запорозького простору.",
                resultEn:
                    "Containment of raids and defense of the Zaporizhian space.",
                summaryUk:
                    "Боротьба Сірка з татарськими набігами була постійною складовою його військового шляху.",
                summaryEn:
                    "Sirko's struggle against Tatar raids was a constant part of his military path.",
                contentUk: [
                    "Не всі військові дії Сірка можна звести до окремих битв із точною датою.",
                    "Велика частина його ролі як кошового отамана полягала у швидкій відповіді на загрози, перехопленні ворога та захисті запорозьких земель від набігів.",
                ],
                contentEn: [
                    "Not all of Sirko's military actions can be reduced to separate battles with exact dates.",
                    "A large part of his role as Kish Otaman consisted of rapid response to threats, interception of enemy forces, and defense of Zaporizhian lands against raids.",
                ],
                hasDetailPage: false,
                image: "/images/military/defense-against-tatar-raids.jpg",
                sources: [SOURCES.sirkoOttomanTatar, SOURCES.yavornytskyi],
            },
            {
                id: "defense-of-the-sich",
                slug: "defense-of-the-sich",
                order: 2,
                year: "1660–1670-ті",
                dateEn: "1660s–1670s",
                type: "defense",
                direction: "zaporizhia",
                importance: "major",
                resultType: "strategic-success",
                confidence: "medium",
                titleUk: "Захист Запорозької Січі",
                titleEn: "Defense of the Zaporizhian Sich",
                locationUk: "Запорозька Січ",
                locationEn: "Zaporizhian Sich",
                opponentsUk: ["Кримське ханство", "Османські союзники"],
                opponentsEn: ["Crimean Khanate", "Ottoman allies"],
                resultUk:
                    "Збереження військового центру запорожців.",
                resultEn:
                    "Preservation of the military center of the Zaporozhians.",
                summaryUk:
                    "Сірко як кошовий отаман був відповідальний за безпеку Січі та її військового простору.",
                summaryEn:
                    "As Kish Otaman, Sirko was responsible for the security of the Sich and its military space.",
                contentUk: [
                    "Оборона Січі була не лише воєнним завданням, а й питанням існування запорозького устрою.",
                    "Саме тому дії Сірка треба розглядати не тільки як серію походів, а як системну боротьбу за безпеку й автономію Запорожжя.",
                ],
                contentEn: [
                    "The defense of the Sich was not only a military task, but also a question of the existence of the Zaporizhian order.",
                    "For this reason, Sirko's actions should be viewed not only as a series of campaigns, but as a systematic struggle for the security and autonomy of Zaporizhia.",
                ],
                hasDetailPage: false,
                image: "/images/military/defense-of-the-sich.jpg",
                sources: [SOURCES.yavornytskyi],
            },
            {
                id: "counterstrikes-from-zaporizhia",
                slug: "counterstrikes-from-zaporizhia",
                order: 3,
                year: "1660–1670-ті",
                dateEn: "1660s–1670s",
                type: "raid",
                direction: "zaporizhia",
                importance: "medium",
                resultType: "strategic-success",
                confidence: "medium",
                titleUk: "Контрудари із Запорожжя",
                titleEn: "Counterstrikes from Zaporizhia",
                locationUk: "Запорожжя, південний степ",
                locationEn: "Zaporizhia, southern steppe",
                opponentsUk: ["Татарські й турецькі сили"],
                opponentsEn: ["Tatar and Turkish forces"],
                resultUk:
                    "Перенесення бойових дій на територію противника.",
                resultEn:
                    "Transfer of combat actions into enemy territory.",
                summaryUk:
                    "Запорожжя було не лише оборонним центром, а й базою для наступальних рейдів Сірка.",
                summaryEn:
                    "Zaporizhia was not only a defensive center, but also a base for Sirko's offensive raids.",
                contentUk: [
                    "Сірко часто діяв за логікою активної оборони: не чекати нападу, а завдавати удару першим.",
                    "Саме тому оборона Запорожжя нерозривно пов'язана з рейдами, переслідуваннями й ударами по ворожих таборах.",
                ],
                contentEn: [
                    "Sirko often acted according to the logic of active defense: not waiting for an attack, but striking first.",
                    "That is why the defense of Zaporizhia is inseparably connected with raids, pursuit actions, and strikes against enemy camps.",
                ],
                hasDetailPage: false,
                image: "/images/military/counterstrikes-from-zaporizhia.jpg",
                sources: [SOURCES.sirkoOttomanTatar, SOURCES.yavornytskyi],
            },
        ],
    },
    {
        id: "final-campaigns",
        slug: "final-campaigns",
        order: 7,
        direction: "final-years",
        titleUk: "Останні кампанії",
        titleEn: "Final Campaigns",
        shortTitleUk: "Останні роки",
        shortTitleEn: "Final years",
        periodUk: "1677–1680 роки",
        periodEn: "1677–1680",
        summaryUk:
            "Пізній етап військової діяльності Сірка: Чигиринський контекст, дії проти турецько-татарських сил і останні походи перед смертю.",
        summaryEn:
            "The late stage of Sirko's military activity: the Chyhyryn context, actions against Ottoman-Tatar forces, and the final campaigns before his death.",
        contentUk: [
            "Навіть у пізні роки Сірко залишався активним військовим діячем.",
            "Цей період пов'язаний із загостренням османського тиску, Чигиринськими подіями та останніми ударами запорожців проти ворога.",
        ],
        contentEn: [
            "Even in his later years, Sirko remained an active military figure.",
            "This period is connected with the intensification of Ottoman pressure, the Chyhyryn events, and the final strikes of the Zaporozhians against the enemy.",
        ],
        image: "/images/military/final-campaigns.jpg",
        events: [
            {
                id: "chyhyryn-context-1677-1678",
                slug: "chyhyryn-context-1677-1678",
                order: 1,
                year: "1677–1678",
                type: "political-military",
                direction: "final-years",
                importance: "major",
                resultType: "political-result",
                confidence: "high",
                titleUk: "Чигиринський контекст",
                titleEn: "Chyhyryn Context",
                locationUk: "Чигиринський напрямок, Правобережжя",
                locationEn: "Chyhyryn direction, Right Bank",
                opponentsUk: ["Османська імперія", "татарські сили"],
                opponentsEn: ["Ottoman Empire", "Tatar forces"],
                resultUk:
                    "Участь Сірка в подіях, пов'язаних із боротьбою навколо Чигирина.",
                resultEn:
                    "Sirko's participation in events connected with the struggle around Chyhyryn.",
                summaryUk:
                    "У 1677–1678 роках Сірко згадується в контексті Чигиринських подій та боротьби проти османсько-татарського наступу.",
                summaryEn:
                    "In 1677–1678, Sirko is mentioned in the context of the Chyhyryn events and the struggle against the Ottoman-Tatar advance.",
                contentUk: [
                    "Чигиринські події стали одним із ключових епізодів протистояння Османської імперії, Московії, козацьких сил і гетьманських угруповань.",
                    "Сірко діяв у цьому контексті як запорозький військовий лідер, для якого боротьба з турецько-татарською загрозою залишалася головним напрямком.",
                ],
                contentEn: [
                    "The Chyhyryn events became one of the key episodes in the confrontation between the Ottoman Empire, Muscovy, Cossack forces, and Hetman factions.",
                    "Sirko acted in this context as a Zaporizhian military leader for whom the struggle against the Ottoman-Tatar threat remained central.",
                ],
                hasDetailPage: true,
                image: "/images/military/chyhyryn-context-1677-1678.jpg",
                sources: [SOURCES.encyclopedia, SOURCES.museumDnipro],
            },
            {
                id: "voloshchyna-campaign",
                slug: "voloshchyna-campaign",
                order: 2,
                year: "1670-ті",
                dateEn: "1670s",
                type: "campaign",
                direction: "final-years",
                importance: "medium",
                resultType: "strategic-success",
                confidence: "medium",
                titleUk: "Похід у Волощину",
                titleEn: "Campaign into Wallachia",
                locationUk: "Волощина",
                locationEn: "Wallachia",
                opponentsUk: ["османські союзники", "місцеві сили"],
                opponentsEn: ["Ottoman allies", "local forces"],
                resultUk:
                    "Дії на південно-західному напрямку в пізній період військової активності.",
                resultEn:
                    "Operations in the southwestern direction during the late period of military activity.",
                summaryUk:
                    "У переліках походів Сірка згадується похід у Волощину, який належить до пізнього етапу його військового шляху.",
                summaryEn:
                    "Lists of Sirko's campaigns mention a campaign into Wallachia, belonging to the late stage of his military path.",
                contentUk: [
                    "Похід у Волощину показує широту географії військових дій Сірка.",
                    "Це не лише Крим чи Запорожжя, а ширший південно-західний простір, пов'язаний із османською політикою та її союзниками.",
                    "Для повної single page цю подію потрібно буде додатково деталізувати за джерелами.",
                ],
                contentEn: [
                    "The campaign into Wallachia shows the breadth of the geography of Sirko's military actions.",
                    "It was not only Crimea or Zaporizhia, but a broader southwestern space connected with Ottoman policy and its allies.",
                    "For a full single page, this event will need additional detail from sources.",
                ],
                hasDetailPage: false,
                image: "/images/military/voloshchyna-campaign.jpg",
                sources: [SOURCES.museumDnipro],
            },
            {
                id: "final-anti-tatar-actions-1679",
                slug: "final-anti-tatar-actions-1679",
                order: 3,
                year: "1679",
                type: "campaign",
                direction: "final-years",
                importance: "medium",
                resultType: "strategic-success",
                confidence: "medium",
                titleUk: "Останні дії проти татар",
                titleEn: "Final Actions against the Tatars",
                locationUk: "Південний степ, запорозький напрямок",
                locationEn: "Southern steppe, Zaporizhian direction",
                opponentsUk: ["Кримські татари"],
                opponentsEn: ["Crimean Tatars"],
                resultUk:
                    "Продовження активної боротьби з татарськими силами напередодні смерті Сірка.",
                resultEn:
                    "Continuation of active struggle against Tatar forces shortly before Sirko's death.",
                summaryUk:
                    "У 1679 році Сірко ще згадується у зв'язку з активними діями проти татарських сил.",
                summaryEn:
                    "In 1679, Sirko is still mentioned in connection with active actions against Tatar forces.",
                contentUk: [
                    "Пізній етап життя Сірка не означав повного відходу від військової діяльності.",
                    "Навіть напередодні смерті він залишався пов'язаний із боротьбою проти татарської загрози та обороною запорозького простору.",
                ],
                contentEn: [
                    "The late stage of Sirko's life did not mean a complete withdrawal from military activity.",
                    "Even shortly before his death, he remained connected with the struggle against the Tatar threat and the defense of the Zaporizhian space.",
                ],
                hasDetailPage: false,
                image: "/images/military/final-anti-tatar-actions-1679.jpg",
                sources: [SOURCES.encyclopedia, SOURCES.sirkoOttomanTatar],
            },
        ],
    },
];