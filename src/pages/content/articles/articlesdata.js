const data = [
  {
    title:
      "Перекрытые районы, эвакуированный холодильник. Что происходит в Петропавловске",
    link: "https://tengrinews.kz/article//article/perekryityie-rayonyi-evakuirovannyiy-holodilnik-proishodit-2414/",
    image_src: "/userdata/article/2024/article_2414/thumb_b/photo_3512.jpeg",
    description:
      "Жители Петропавловска и пригородных поселков готовятся к приходу большой воды. В областном центре и окрестностях наращивают дамбы вдоль реки",
  },
  {
    title: "Когда мы заселим Марс, или Как найти казахстанского Илона Маска",
    link: "https://tengrinews.kz/article//article/myi-zaselim-mars-kak-nayti-kazahstanskogo-ilona-maska-2413/",
    image_src: "/userdata/article/2024/article_2413/thumb_b/photo_3510.png",
    description:
      "Куда мы пришли спустя 63 года после первого полета в космос? Мы поговорили с казахстанским астрономом и кандидатом физико-математических наук",
  },
  {
    title:
      "Эвакуируют даже эвакопункты: Петропавловск в ожидании самой большой воды в истории города",
    link: "https://tengrinews.kz/article//article/evakuiruyut-evakopunktyi-petropavlovsk-ojidanii-bolshoy-2412/",
    image_src: "/userdata/article/2024/article_2412/thumb_b/photo_3508.jpeg",
    description:
      "В Петропавловск начала подходить первая волна большой воды. В городе, огражденном со всех сторон дамбами из глины и песка, тревожно. Как выяснил",
  },
  {
    title:
      "Нархоз откроет программы двойного диплома с ведущим американским вузом",
    link: "https://tengrinews.kz/article//article/narhoz-otkroet-programmyi-dvoynogo-diploma-veduschim-2410/",
    image_src: "/userdata/article/2024/article_2410/thumb_b/photo_3506.png",
    description:
      "Университет Нархоз и Университет штата Пенсильвания открыли новую главу своего сотрудничества, расширяющую международные возможности для студентов",
  },
  {
    title:
      '"10 лет сексуального рабства у отца". Невыдуманные истории из кризисного центра в Шымкенте',
    link: "https://tengrinews.kz/article//article/10-let-seksualnogo-rabstva-ottsa-nevyidumannyie-istorii-2403/",
    image_src: "/userdata/article/2024/article_2403/thumb_b/photo_3501.jpeg",
    description:
      '"Приемный отец насиловал и избивал дочь каждый день. Сексуальное рабство продолжалось 10 лет. Он даже продавал ее своим знакомым", - рассказывает',
  },
  {
    title: "Сделано бабушкой. Кто и почему продает закрутки на улицах Астаны?",
    link: "https://tengrinews.kz/article//article/sdelano-babushkoy-i-pochemu-prodaet-zakrutki-ulitsah-astanyi-2407/",
    image_src: "/userdata/article/2024/article_2407/thumb_b/photo_3503.jpeg",
    description:
      "Салат осенний и ассорти в банке, помидоры с хреном и чесноком, компот из винограда и баклажанная икра, лечо и аджика, различные варенья и маринованные",
  },
  {
    title:
      "Многолетний бардак в системе госзакупок: решит ли проблему новый закон",
    link: "https://tengrinews.kz/article//article/mnogoletniy-bardak-sisteme-goszakupok-reshit-problemu-novyiy-2406/",
    image_src: "/userdata/article/2024/article_2406/thumb_b/photo_3504.png",
    description:
      "В системе госзакупок грядут изменения. Ранее ее раскритиковал Президент Касым-Жомарт Токаев. Как будут выявлять недобросовестных поставщиков?",
  },
  {
    title:
      '"Вода зашла во все дома": где нашли пристанище казахстанцы, чьи дома затопили паводки',
    link: "https://tengrinews.kz/article//article/voda-zashla-vse-doma-nashli-pristanische-kazahstantsyi-chi-2404/",
    image_src: "/userdata/article/2024/article_2404/thumb_b/photo_3498.jpeg",
    description:
      "Как проходит эвакуация людей и доставка гуманитарной помощи пострадавшим в результате паводков, которые настигли этой весной несколько регионов",
  },
  {
    title:
      '"Место возможностей". Как дети из Мангистау учатся в международной школе',
    link: "https://tengrinews.kz/article//article/mesto-vozmojnostey-deti-mangistau-uchatsya-mejdunarodnoy-2405/",
    image_src: "/userdata/article/2024/article_2405/thumb_b/photo_3499.jpeg",
    description:
      "В курортной зоне Бурабай на берегу озера Щучье уже четвертый год работает международная школа IQanat High School of Burabay. Она предлагает",
  },
  {
    title:
      'В тени Туркестана. Почему мужчины покидают "райский" город на юге Казахстана',
    link: "https://tengrinews.kz/article//article/teni-turkestana-pochemu-mujchinyi-pokidayut-rayskiy-gorod-2399/",
    image_src: "/userdata/article/2024/article_2399/thumb_b/photo_3494.jpeg",
    description:
      '"Работы как не было, так и нет. Зато в Туркестане стройка не останавливается ни на день. Так и живем в тени областного центра", - рассказывает',
  },
  {
    title: 'Знаменитые "подснежники". Как выглядят дороги Алматы весной',
    link: "https://tengrinews.kz/article//article/znamenityie-podsnejniki-vyiglyadyat-dorogi-almatyi-vesnoy-2398/",
    image_src: "/userdata/article/2024/article_2398/thumb_b/photo_3493.jpeg",
    description:
      "3097 километров - такова общая протяженность дорог в Алматы, по данным управления городской мобильности. Как и в других городах нашей большой",
  },
  {
    title: "Mono Concept: Как выгодно купить мебель вашей мечты",
    link: "https://tengrinews.kz/article//article/mono-concept-kak-vyigodno-kupit-mebel-vashey-mechtyi-2402/",
    image_src: "/userdata/article/2024/article_2402/thumb_b/photo_3497.jpeg",
    description:
      "Многие казахстанцы, затеявшие ремонт, сталкиваются с серьезной проблемой. Вложившись в хороший ремонт и закупив дорогие материалы, они забывают",
  },
  {
    title:
      'Куда исчезли попрошайки в Астане, или Как работает "бизнес на милосердии"',
    link: "https://tengrinews.kz/article//article/ischezli-poproshayki-astane-kak-rabotaet-biznes-miloserdii-2388/",
    image_src: "/userdata/article/2024/article_2388/thumb_b/photo_3479.jpeg",
    description:
      '"Ораза кабыл болсын", - произносит женщина в инвалидном кресле с картонной коробочкой на коленях. Эти слова я слышу каждый раз, как прохожие',
  },
  {
    title: '"Портал к предкам". Тайна уникального двора в Шымкенте',
    link: "https://tengrinews.kz/article//article/portal-k-predkam-tayna-unikalnogo-dvora-v-shyimkente-2396/",
    image_src: "/userdata/article/2024/article_2396/thumb_b/photo_3489.jpeg",
    description:
      "В центре Шымкента есть необычный двор. Нет, здесь не живет какая-нибудь звезда и не расположена самая дорогая квартира в городе. Хотя когда-то",
  },
  {
    title:
      "Удивила цифровизация, восхитил смелый казах и полюбился бешбармак: интервью с послом Кореи",
    link: "https://tengrinews.kz/article//article/udivila-tsifrovizatsiya-voshitil-smelyiy-kazah-polyubilsya-2385/",
    image_src: "/userdata/article/2024/article_2385/thumb_b/photo_3490.png",
    description:
      "Когда казахстанцы смогут легально работать в Южной Корее, чем похожи казахи и корейцы, что отличает отношения двух стран и особенности кухни",
  },
  {
    title: "Храм в воде, собаки ждут хозяев. Что происходит в Петропавловске",
    link: "https://tengrinews.kz/article//article/hram-vode-sobaki-jdut-hozyaev-proishodit-petropavlovske-2419/",
    image_src: "/userdata/article/2024/article_2419/thumb_b/photo_3520.jpeg",
    description:
      "В Петропавловске паводком затоплен старейший православный храм региона, который охраняется как памятник архитектуры дореволюционного периода",
  },
];

export default data;
