import { View, Text, ScrollView } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./Header";
import { gStyle } from "../Style/Style";

const DuaData = [
  {
    arabicText:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    rusText:
      "Раббана атина фи-ддунья ẍасанатан ва филь-ахирати ẍасанатан ва ḱина ‘аҙаба-ннар",
    meaningKgText:
      "О Эгем, бизге дүйнөдө да жакшылык бер, Акыретте да жакшылык бер, бизди Тозок азабынан куткар! («Аль-Бакара» сүрөсү, 201 аяты).",
    meaningRusText:
      "О наш Господь, даруй нам благо в этом мире и на том свете, и сохрани нас от мучений Ада. (сура «Аль-Бакара», аят 201).",
  },
  {
    arabicText:
      "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    rusText:
      "Раббана hаб ляна мин азважина ва ҙуррийятина ḱуррата а‘юнин важ‘альна лильмуттаḱина имама",
    meaningKgText:
      "Оо Эгебиз! Бизге жубайларыбыздан жана урпактарыбыздан көзүбүзгө кубаныч тартуула жана бизди такыбалар үчүн үлгү кыл!. («Аль-Фуркан» сүрөсү, 74 аяты).",
    meaningRusText:
      "О наш Господь, даруй нам отраду глаз в наших женах и потомках и сделай нас образцом для богобоязненных (сура «Аль-Фуркан», аят 74).",
  },
  {
    arabicText:
      "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِّلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَّحِيمٌ",
    rusText:
      "Раббана-ґфирляна ва лиихванина-лляҙина сабаḱуна биль имани ва ля таж‘аль фи ḱулюбина ґиллян лилляҙина аману, раббана иннака Рауфу-рРаẍим",
    meaningKgText:
      "Эгебиз, бизди жана бизден мурун ыйманга келген туугандарыбызды кечир. Биздин жүрөгүбүзгө ыйман келтиргендерге кек салба. Эгебиз, Сен албетте Мээримдүү, Боорукерсиң. («Аль-Хашр» сүрөсү, 10 аяты).",
    meaningRusText:
      "О наш Господь, прости грехи нам и нашим братьям, которые уверовали до нас, и не вселяй в наши сердца злобы к тем, которые уверовали! Господь наш! Поистине, Твоё милосердие и Твоя милость безграничны! (сура «Аль-Хашр», аят 10).",
  },
  {
    arabicText:
      "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
    rusText:
      "Раббана ля тузиґ ḱулюбана ба‘да иҙ hадайтана ва hаб ляна мил-лядунка раẍматан иннака анталь-ваhhаб",
    meaningKgText:
      "Оо, Эгебиз! Бизди туура жолго салгандан кийин бизди жүрөгубүздү адаштырба. Бизге Өзүңдүн алдыңдагы Ырайымыңдан бер. Чындыгында Сен - Айкөлсүң! («Аль-Имран» сүрөсү, 8 аяты).",
    meaningRusText:
      "О наш Господь, не уклоняй наши сердца от истины после того, как Ты вывел нас на прямой путь! Одари нас Своей милостью! Ведь, поистине, Ты – Дарующий! (сура «Алю Имран», аят 8).",
  },
  {
    arabicText:
      "رَّبَّنَا إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِي لِلْإِيمَانِ أَنْ آمِنُوا بِرَبِّكُمْ فَآمَنَّا رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الْأَبْرَارِ * رَبَّنَا وَآتِنَا مَا وَعَدتَّنَا عَلَى رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لَا تُخْلِفُ الْمِيعَادَ",
    rusText:
      "Раббана иннана сами‘на мунадиян юнади лиль-имани ан амину бираббикум фа-аманна, Раббана фаґфир ляна ҙунубана ва каффир ‘анна саййиатина ва таваффана ма‘аль-абрар. Раббана ва атина ма ва‘аттана ‘аля русулика ва ля тухзина явмаль-Ḱиямати, иннака ля тухлифуль-ми‘ад",
    meaningKgText:
      "Оо Эгебиз! Биз: <<Эгеңерге ыйман келтиргиле>>, - деп чакырган ун салуучуну угуп, ыйман келтирдик. Оо, Эгебиз! Биздин күнөөлөрүбүздү кечирип, жамандактырыбызды жашыр, жакшылар менен бирге өлүүнү насип эт. («Аль Имран» сүрөсү, 193-194 аяттары).",
    meaningRusText:
      "О наш Господь, мы услышали Твоего Посланника ﷺ, призывающего нас к вере в Аллаха ﷻ. Мы ему повиновались и уверовали. Господь наш! Прости же нам наши большие грехи и очисти нас от наших скверных деяний и забери наши души вместе с Твоими верными рабами! Господь наш! Даруй нам то, что Ты обещал нам через Своих посланников, и не позорь нас в День воскресения, ведь Ты не нарушаешь обещаний (сура «Алю Имран», аяты 193, 194).",
  },
  {
    arabicText: "رَّبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ",
    rusText: "Рабби-ґфир ва-рẍам ва анта хайру-рраẍимин",
    meaningKgText:
      "Эгем! Мени кечир жана ырайымыңа бөлө! Сен мээримдүүлөрдүн эң жакшысысың. («Аль Муъминун» сүрөсү, 118 аятты).",
    meaningRusText:
      "О мой Господь, прости мне грехи и прояви милость ко мне, ведь Ты самый милостивый! (сура «Аль-Муъминун», аят 118).",
  },
  {
    arabicText: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    rusText: "Рабби-рẍамhума кама раббаяни ĉаґира",
    meaningKgText:
      "Эгем! Алар мени кичинемден чоңойтуп өстүргөндөй, аларды мээримиңе бөлө. («Аль-Исра» сүрөсү, 24 аятты).",
    meaningRusText:
      "О мой Господь, прояви милость к ним (моим родителям) подобно тому, как они растили меня в детстве (проявляя милость). (сура «Аль-Исра», аят 24).",
  },
  {
    arabicText:
      "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    rusText:
      "Раббана ля туахиҙна ин насина ав ахҭаъна, раббана ва ля таẍмиль ‘аляйна иĉран кама ẍамальтаhу ‘аля лляҙина мин ḱаблина. Раббана ва ля туẍаммильна ма ля ҭаḱата ляна биhи ва‘фу ‘анна ваґфир ляна варẍамна, анта мавляна фанĉурна ‘аляль ḱавмиль кафирин",
    meaningKgText:
      "Оо Эгем, эгер унутуп, же жаңылып калсакбизди азаптай көрбө! оо Эгем, бизди мурункуларга жүктөгөнүңдөй оор жүк жүтөй көрбө! Оо Эгем, бизге күчүбүз жетпегенди жүктөбө! Бизди (Оттон) куткар! Бизди кечир! Бизге ырайым көр! Сен - биздин Кожоюнубузсуң! Каапыр коомдорго каршы бизге жардам бер! («Аль-Бакара» сүрөсү, 286 аятты).",
    meaningRusText:
      "О наш Господь, не наказывай нас, если мы позабыли или ошиблись. Господь наш! Не возлагай на нас бремя, которое Ты возложил на наших предшественников. Господь наш! Не обременяй нас тем, что нам не под силу. Будь снисходителен к нам! Прости нас и помилуй! Ты – наш Покровитель. Помоги же нам одержать верх над неверующими людьми (сура «Аль-Бакара», аят 286).",
  },
  {
    arabicText:
      "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ",
    rusText:
      "Рабби авзи‘ни ан ашкура ни‘матака-лляти ан‘амта ‘аляййа ва ‘аля валидаййа ва ан а‘маля ĉалиẍан тарḓаhу ва адхильни бираẍматика фи ‘ибадика-ĉĉалиẍин",
    meaningKgText:
      "Эгем, мен Сага жагаарлык жакшылык иштерди кылуум үчүн Сенинмага жана ата-энеме көргөзгөн мээримдүүлүктөрүңө шүгүр кылуучулардан кыл жана мени Өз мээримиңе алып, өзүңдүн жакшы иштерди жасоочу пенделериңдин катарына кошо көр. («Ан-Намль» сүрөсү, 19 аятты).",
    meaningRusText:
      "О мой Господь, внуши мне быть благодарным за Твою милость, которую Ты оказал мне и моим родителям, и совершать праведные деяния, которыми Ты будешь доволен. Введи меня по Своей милости в число Своих праведных рабов (сура «Ан-Намль», аят 19).",
  },
  {
    arabicText:
      "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ * رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
    rusText:
      "Рабби-ж‘альни муḱимаĉĉаляти ва мин ҙурриййати. Раббана ва таḱаббаль ду‘аъ. Раббана-ґфир ли ва ливалидаййа ва лильмуъминина явма яḱумуль ẍисаб",
    meaningKgText:
      "Оо Эгем! Мени, жана урпактарымды намазды толук окуучу кыл. Эгебиз! Тилегибизди кабыл кыл. Эгебиз! Мени, ата-энемди жана момундарды эсеп алына турган Күндө кечир. («Ибрахим» сүрөсү, 40-41 аяты).",
    meaningRusText:
      "О мой Господь, включи меня и часть моего потомства в число тех, кто совершает намаз. Господь наш! Прими мою мольбу. Господь наш! Прости меня, моих родителей и верующих в тот день, когда будет представлен счёт (в День суда)(сура «Ибрахим», аяты 40-41).",
  },
];

const Prayer = () => {
  const [lang, setLang] = React.useState(null);

  React.useEffect(() => {
    loadLang();
  }, []);

  const loadLang = async () => {
    try {
      const savedLang = await AsyncStorage.getItem("currentLanguage");
      setLang(savedLang);
    } catch (e) {
      console.log("Error loading languages: ", e);
    }
  };

  return (
    <View style={gStyle.main}>
      <View style={gStyle.header}>
        <Header title="Дубалар" />
      </View>
      <ScrollView>
        <View style={gStyle.container}>
          <View style={gStyle.container_row}>
            <View style={gStyle.dual}>
              {DuaData.map((value, index) => {
                return (
                  <View key={index} style={gStyle.duaContainer}>
                    <Text
                      style={[
                        gStyle.text,
                        {
                          color: "#F2BB4A",
                          fontSize: 22,
                          fontFamily: "Montserrat Semibold",
                          textAlign: "right",
                        },
                      ]}
                    >
                      Logo
                    </Text>
                    <Text
                      style={[
                        gStyle.textArabic,
                        gStyle.dualArab,
                        { fontFamily: "Montserrat Medium" },
                      ]}
                    >
                      {value.arabicText}
                    </Text>
                    <Text
                      style={[
                        gStyle.text,
                        {
                          color: "#F2BB4A",
                          fontSize: 20,
                          fontFamily: "Montserrat Medium",
                        },
                      ]}
                    >
                      Транскрипция
                    </Text>
                    <Text style={[gStyle.textRus, gStyle.dualRuss]}>
                      {value.rusText}
                    </Text>
                    <Text
                      style={[
                        gStyle.text,
                        {
                          color: "#F2BB4A",
                          fontSize: 20,
                          fontFamily: "Montserrat Medium",
                        },
                      ]}
                    >
                      {lang === "kg" ? "Мааниси" : "Значение"}
                    </Text>
                    <Text style={[gStyle.textRus, gStyle.dualMeaning]}>
                      {lang === "kg"
                        ? value.meaningKgText
                        : value.meaningRusText}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Prayer;
