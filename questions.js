function q(id, source, question, answers, correctIndex, explanation) {
  return { id, source, question, answers, correctIndex, explanation };
}

const QUESTIONS = [
  q(
    1,
    "Psychologia zespołu pracowniczego",
    "Czym według materiału charakteryzuje się grupa?",
    [
      "Wzajemnymi interakcjami, świadomością siebie, postrzeganiem siebie jako grupy i wspólnym celem",
      "Wyłącznie formalnym regulaminem i hierarchią służbową",
      "Jedynie wspólnym miejscem pracy bez relacji między ludźmi",
      "Tym, że wszyscy członkowie wykonują identyczne obowiązki"
    ],
    0,
    "Grupa istnieje wtedy, gdy osoby wchodzą w interakcje, są siebie psychologicznie świadome, widzą siebie jako grupę i mają wspólny cel."
  ),

  q(
    2,
    "Psychologia zespołu pracowniczego",
    "Czym zespół pracowniczy różni się od ogólnie rozumianej grupy?",
    [
      "Nie ma celu ani formalnej struktury",
      "Jest formalną grupą realizującą cele narzucone przez organizację wyższego rzędu",
      "Składa się wyłącznie z osób o takich samych kwalifikacjach",
      "Powstaje tylko poza miejscem pracy"
    ],
    1,
    "Zespół pracowniczy jest specyficzną grupą formalną, działającą dla organizacji i korzystającą z uzupełniających się umiejętności członków."
  ),

  q(
    3,
    "Psychologia zespołu pracowniczego",
    "Od czego powinna zależeć wielkość grupy pracowniczej?",
    [
      "Od liczby wolnych biurek w firmie",
      "Od wieku lidera zespołu",
      "Od zadań, osobowości członków i efektywności kierowania",
      "Od tego, aby zawsze liczyła dokładnie 7 osób"
    ],
    2,
    "Materiał podkreśla, że nie ma jednej optymalnej liczby członków. Liczba osób musi być adekwatna do zadań i warunków pracy."
  ),

  q(
    4,
    "Psychologia zespołu pracowniczego",
    "Jaka grupa jest określona jako efektywna?",
    [
      "Taka, w której decyzje podejmuje tylko lider",
      "Taka, w której członkowie nie muszą się komunikować",
      "Taka, która jest jak największa",
      "Taka, w której aktywnie uczestniczą wszystkie osoby"
    ],
    3,
    "Efektywność grupy wiąże się z aktywnym udziałem wszystkich członków, a zbyt duża grupa może ten udział utrudniać."
  ),

  q(
    5,
    "Psychologia zespołu pracowniczego",
    "Co może się stać, gdy grupa jest zbyt duża?",
    [
      "Może spaść efektywność i zadowolenie członków",
      "Automatycznie wzrośnie spójność grupy",
      "Zniknie potrzeba kierowania grupą",
      "Każdy członek będzie bardziej zaangażowany"
    ],
    0,
    "Zbyt duża grupa utrudnia aktywne uczestnictwo wszystkich osób, co może obniżać skuteczność i satysfakcję."
  ),

  q(
    6,
    "Psychologia zespołu pracowniczego",
    "Która sytuacja jest wskazana jako zaleta małej grupy?",
    [
      "Kiedy trzeba ukryć odpowiedzialność jednostek",
      "Kiedy wymagane jest szybkie działanie",
      "Kiedy potrzebna jest bardzo duża liczba podgrup",
      "Kiedy zadania nie wymagają żadnej kontroli"
    ],
    1,
    "Małe grupy sprawdzają się przy szybkim działaniu, jakościowej dyskusji i łatwiejszej kontroli przez kierownika."
  ),

  q(
    7,
    "Psychologia zespołu pracowniczego",
    "Jaką potencjalną wadę mają mniejsze grupy?",
    [
      "Zawsze są mniej spójne niż duże grupy",
      "Nie mogą podejmować szybkich działań",
      "Może brakować w nich określonych talentów i umiejętności",
      "Uniemożliwiają bezpośrednią komunikację"
    ],
    2,
    "Mniejsze zespoły są zwykle bardziej spójne, ale ograniczona liczba osób może oznaczać brak niektórych kompetencji."
  ),

  q(
    8,
    "Psychologia zespołu pracowniczego",
    "Jakie ryzyko wiąże się z większymi grupami?",
    [
      "Całkowity brak różnorodności kompetencji",
      "Niemożność wyznaczenia celu",
      "Brak jakichkolwiek norm grupowych",
      "Powstawanie podgrup i konflikty wewnętrzne"
    ],
    3,
    "Większe grupy mogą zawierać podgrupy, które utrudniają kierowanie i sprzyjają konfliktom wewnętrznym."
  ),

  q(
    9,
    "Psychologia zespołu pracowniczego",
    "Na czym polega atrakcyjność grupy pracowniczej?",
    [
      "Na zdolności grupy do zaspokajania potrzeb jej członków",
      "Na liczbie dokumentów tworzonych przez zespół",
      "Na tym, że grupa nie ma żadnych zasad",
      "Wyłącznie na wysokości wynagrodzenia lidera"
    ],
    0,
    "Atrakcyjność grupy oceniamy przez pryzmat osobistych potrzeb, które grupa może zaspokoić."
  ),

  q(
    10,
    "Psychologia zespołu pracowniczego",
    "Który zestaw potrzeb pojawia się w materiale jako podstawowy w sytuacji pracy?",
    [
      "Estetyczne, zakupowe, sportowe i medialne",
      "Fizjologiczne, bezpieczeństwa, społeczne, uznania i samorealizacji",
      "Wyłącznie potrzeby finansowe",
      "Techniczne, prawne i księgowe"
    ],
    1,
    "Materiał odwołuje się do sekwencji potrzeb: od fizjologicznych, przez bezpieczeństwo i potrzeby społeczne, po uznanie i samorealizację."
  ),

  q(
    11,
    "Psychologia zespołu pracowniczego",
    "Dlaczego pani Ewa uznała swój zespół za atrakcyjny?",
    [
      "Bo wymagał pełnej izolacji od innych ludzi",
      "Bo dawał jej wyłącznie samodzielne decyzje bez kontaktu z zespołem",
      "Bo zaspokajał jej potrzebę współpracy i wzajemnej pomocy",
      "Bo wykluczał komunikację między pracownikami"
    ],
    2,
    "Przykład pokazuje osobę towarzyską, która ceni kooperację i dobrze czuje się w zespole opartym na współpracy."
  ),

  q(
    12,
    "Psychologia zespołu pracowniczego",
    "Co w materiale jest cechą atrakcyjności grupy?",
    [
      "Brak komunikacji między pracownikami",
      "Losowy dobór zadań",
      "Całkowity brak norm",
      "Wzajemna interakcja między członkami grupy"
    ],
    3,
    "Interakcja, czyli komunikowanie się między członkami, prowadzi do identyfikowania się z grupą."
  ),

  q(
    13,
    "Psychologia zespołu pracowniczego",
    "Do czego prowadzi wzajemna interakcja w grupie?",
    [
      "Do identyfikowania się członków z grupą",
      "Do zaniku celu grupowego",
      "Do automatycznego konfliktu z klientem",
      "Do rezygnacji z norm"
    ],
    0,
    "Komunikowanie się między członkami buduje więź i utożsamianie pojedynczego pracownika z zespołem."
  ),

  q(
    14,
    "Psychologia zespołu pracowniczego",
    "Jak normy wpływają na życie grupy pracowniczej?",
    [
      "Powodują, że grupa nie potrzebuje celu",
      "Ukierunkowują zachowanie i pozwalają przewidywać reakcje innych",
      "Zastępują wszystkie kompetencje zawodowe",
      "Służą wyłącznie karaniu pracowników"
    ],
    1,
    "Normy wskazują, jak członek grupy powinien się zachowywać, co pomaga regulować życie społeczne w pracy."
  ),

  q(
    15,
    "Psychologia zespołu pracowniczego",
    "Dlaczego znajomość norm w pracy jest ważna dla pracownika?",
    [
      "Pozwala ignorować obowiązki",
      "Zwalnia z odpowiedzialności za zadania",
      "Pomaga rozpoznać oczekiwane i aprobowane zachowania",
      "Uniemożliwia identyfikację z grupą"
    ],
    2,
    "Dzięki normom pracownik wie, jakie zwyczaje, obowiązki i przywileje funkcjonują w zespole."
  ),

  q(
    16,
    "Psychologia zespołu pracowniczego",
    "Czym jest cel grupowy?",
    [
      "Prywatną ambicją tylko jednego członka",
      "Nieformalną plotką w zespole",
      "Dowolnym działaniem bez wartości dla grupy",
      "Pozytywną wartością dla grupy, do której osiągnięcia podejmuje ona działania"
    ],
    3,
    "Cel grupowy jest punktem mającym wartość pozytywną dla całej grupy i organizującym jej działania."
  ),

  q(
    17,
    "Psychologia zespołu pracowniczego",
    "Z jakiego punktu widzenia najlepiej rozpatrywać efektywność zespołu?",
    [
      "Z punktu widzenia klienta",
      "Z punktu widzenia wyłącznie najgłośniejszego pracownika",
      "Z punktu widzenia liczby spotkań",
      "Z punktu widzenia długości dokumentacji"
    ],
    0,
    "Klient doświadcza rezultatu pracy całego zespołu albo jego braku, dlatego jest właściwym punktem odniesienia."
  ),

  q(
    18,
    "Psychologia zespołu pracowniczego",
    "Jaka jest rola lidera wobec atrakcyjności zespołu?",
    [
      "Ukrywać sukcesy grupy przed pracownikami",
      "Pokazywać zalety zespołu i dbać o ich utrzymanie",
      "Zawsze zwiększać liczebność zespołu",
      "Eliminować wszystkie normy grupowe"
    ],
    1,
    "Materiał wskazuje, że pracownik może nie zauważać wartości zespołu, więc lider powinien ją przypominać i wzmacniać."
  ),

  q(
    19,
    "Psychologia zespołu pracowniczego",
    "Co jest nieodłącznym elementem grupy społecznej?",
    [
      "Brak współzależności między ludźmi",
      "Wyłącznie regulamin biurowy",
      "Procesy psychologiczne zachodzące w grupie",
      "Stała liczba członków"
    ],
    2,
    "Tam, gdzie ludzie współdziałają i są współzależni, pojawia się grupa społeczna oraz procesy psychologiczne."
  ),

  q(
    20,
    "Psychologia zespołu pracowniczego",
    "Czym są struktury grupowe?",
    [
      "Zróżnicowaniem pozycji społecznych i ról w grupie",
      "Spisem adresów pracowników",
      "Wyłącznie układem biurek w pokoju",
      "Zbiorem przypadkowych zadań"
    ],
    0,
    "W grupie pojawiają się różne pozycje: osoby lubiane, pomocne, komunikatywne, autorytety czy osoby z mniejszym zaufaniem."
  ),

  q(
    21,
    "Psychologia zespołu pracowniczego",
    "Czym jest kredyt zaufania w grupie?",
    [
      "Formalną pożyczką udzielaną przez pracodawcę",
      "Zaufaniem zdobytym przez długotrwałe dostosowywanie się do norm grupowych",
      "Dokumentem potwierdzającym awans",
      "Przymusem wykonywania zadań za innych"
    ],
    1,
    "Osoba bardzo lubiana może mieć kredyt zaufania, dzięki któremu drobne odstępstwa od norm nie wywołują odwetu grupy."
  ),

  q(
    22,
    "Psychologia zespołu pracowniczego",
    "Kto według materiału najbardziej zabiega o przypodobanie się grupie?",
    [
      "Osoby całkowicie odrzucone",
      "Wyłącznie liderzy",
      "Osoby średnio lubiane",
      "Osoby posiadające najwyższy status"
    ],
    2,
    "Badania wskazują, że o akceptację grupy najbardziej zabiegają osoby średnio lubiane."
  ),

  q(
    23,
    "Psychologia zespołu pracowniczego",
    "Na czym polega normatywny wpływ społeczny?",
    [
      "Na chęci bycia lubianym i akceptowanym, prowadzącej do konformizmu",
      "Na całkowitym braku presji społecznej",
      "Na formalnym systemie wynagrodzeń",
      "Na automatycznym wzroście kompetencji"
    ],
    0,
    "Normatywny wpływ społeczny skłania ludzi do dostosowania się do grupy, bo chcą być lubiani i akceptowani."
  ),

  q(
    24,
    "Psychologia zespołu pracowniczego",
    "Jak wiedza o strukturze grupy może pomóc liderowi?",
    [
      "Pozwala zrezygnować z podziału zadań",
      "Ułatwia właściwy podział zadań i wykorzystanie ról członków",
      "Służy wyłącznie do tworzenia konfliktów",
      "Zastępuje potrzebę komunikacji"
    ],
    1,
    "Znając pozycje i cechy osób, lider może dobrać im funkcje, np. instruktora, konsultanta albo osoby scalającej zespół."
  ),

  q(
    25,
    "Psychologia zespołu pracowniczego",
    "Jaką rolę mogą pełnić osoby komunikatywne i towarzyskie?",
    [
      "Osób izolujących zespół",
      "Osób odpowiedzialnych wyłącznie za kontrolę formalną",
      "Osób scalających zespół i wpływających na klimat grupy",
      "Osób eliminujących normy grupowe"
    ],
    2,
    "Materiał wskazuje, że osoby komunikatywne mogą wzmacniać klimat grupy i spajać zespół."
  ),

  q(
    26,
    "Psychologia zespołu pracowniczego",
    "Czym jest facylitacja społeczna?",
    [
      "Spadkiem każdej aktywności w grupie",
      "Zjawiskiem wpływu obecności innych osób na poziom wykonania zadania",
      "Formalną oceną pracowniczą",
      "Techniką planowania czasu"
    ],
    1,
    "Facylitacja społeczna opisuje, jak obecność obserwatorów wpływa na wykonanie zadań."
  ),

  q(
    27,
    "Psychologia zespołu pracowniczego",
    "Jak obecność innych wpływa na proste zadanie?",
    [
      "Zwykle poprawia wykonanie dzięki pobudzeniu",
      "Zawsze uniemożliwia pracę",
      "Nie ma żadnego znaczenia",
      "Automatycznie powoduje konflikt"
    ],
    0,
    "Przy zadaniach prostych obecność innych zwiększa pobudzenie i może poprawiać poziom działania."
  ),

  q(
    28,
    "Psychologia zespołu pracowniczego",
    "Jak obecność innych może działać przy zadaniu trudnym?",
    [
      "Zawsze poprawia wynik",
      "Może obciążać i obniżać poziom wykonania",
      "Nie wpływa na koncentrację",
      "Zastępuje potrzebę kompetencji"
    ],
    1,
    "Przy trudnych zadaniach pobudzenie i presja oceny mogą utrudniać działanie."
  ),

  q(
    29,
    "Psychologia zespołu pracowniczego",
    "Jaki przykład ilustruje facylitację społeczną?",
    [
      "Planowanie kalendarza",
      "Gra w bilarda obserwowana przez innych",
      "Wypełnianie ankiety kadrowej",
      "Liczenie urlopów"
    ],
    1,
    "Mistrz gry w bilarda może grać lepiej przy publiczności, a nowicjusz gorzej, co pokazuje wpływ obecności innych."
  ),

  q(
    30,
    "Psychologia zespołu pracowniczego",
    "Kiedy nie warto zlecać zadania kilku osobom i zachęcać do współpracy?",
    [
      "Gdy zadanie jest proste i rutynowe",
      "Gdy zadanie jest nowe i wymaga wdrożenia",
      "Gdy trzeba uczyć się od innych",
      "Gdy problem jest złożony"
    ],
    0,
    "Materiał sugeruje, że przy prostych i rutynowych zadaniach praca wielu osób nie zawsze zwiększa efektywność."
  ),

  q(
    31,
    "Psychologia zespołu pracowniczego",
    "Kiedy warto łączyć pracowników w grupy?",
    [
      "Gdy zadanie jest nowe i pracownicy dopiero się wdrażają",
      "Gdy nie ma potrzeby wymiany informacji",
      "Gdy zadanie jest całkowicie mechaniczne",
      "Gdy celem jest ograniczenie komunikacji"
    ],
    0,
    "Przy nowych zadaniach współpraca może pomóc w wypracowaniu lepszych rozwiązań."
  ),

  q(
    32,
    "Psychologia zespołu pracowniczego",
    "Który zestaw należy do warunków efektywnej współpracy zespołowej?",
    [
      "Rywalizacja, brak zaufania, cisza i izolacja",
      "Spójność, motywacja, zaufanie, komunikacja i współdziałanie",
      "Kontrola, tajemnica, przypadkowość i presja",
      "Brak celu, brak norm i brak odpowiedzialności"
    ],
    1,
    "Materiał wymienia m.in. spójność, motywację, zaufanie, komunikację, współdziałanie i odpowiedzialność za grupę."
  ),

  q(
    33,
    "Psychologia zespołu pracowniczego",
    "Czym jest spójność grupy?",
    [
      "Poziomem rozwoju więzi między członkami grupy",
      "Liczbą dokumentów wytworzonych przez zespół",
      "Formalną strukturą wynagrodzeń",
      "Brakiem różnic między pracownikami"
    ],
    0,
    "Spójność oznacza rozwój więzi między członkami i stanowi miarę atrakcyjności zespołu."
  ),

  q(
    34,
    "Psychologia zespołu pracowniczego",
    "Co charakteryzuje bardzo spójne grupy?",
    [
      "Brak lojalności i lekceważenie norm",
      "Silne powiązania, wzajemna lojalność i poszanowanie norm",
      "Niechęć do jakiejkolwiek współpracy",
      "Całkowity brak identyfikacji"
    ],
    1,
    "Bardzo spójne grupy wykazują silne więzi, lojalność i respektowanie norm."
  ),

  q(
    35,
    "Psychologia zespołu pracowniczego",
    "Co wpływa na spójność grupy?",
    [
      "Bliskość przestrzenna, podobieństwo zadań, mała wielkość grupy i styl kierowania",
      "Wyłącznie kolor firmowych identyfikatorów",
      "Brak nagród i całkowita anonimowość",
      "Losowość zadań i izolacja członków"
    ],
    0,
    "Na spójność wpływają m.in. bliskość, podobieństwo zadań, wielkość grupy, styl kierowania, nagrody i wspólne cechy."
  ),

  q(
    36,
    "Psychologia zespołu pracowniczego",
    "Jaki typ zespołu uznano za szczególnie dysfunkcjonalny?",
    [
      "Grupę o niskiej spójności i jasnych celach",
      "Grupę o wysokiej spójności, która nie identyfikuje się z celami organizacji",
      "Mały zespół z jasnym liderem",
      "Zespół z różnorodnymi kompetencjami"
    ],
    1,
    "Wysoka spójność bez identyfikacji z celami organizacji może wzmacniać zachowania sprzeczne z interesem firmy."
  ),

  q(
    37,
    "Psychologia zespołu pracowniczego",
    "Które pytanie może pomóc diagnozować spójność grupy?",
    [
      "Czy pracownik czuje, że stanowi część swojego zespołu roboczego?",
      "Ile kosztuje wyposażenie biura?",
      "Jaki jest kolor ścian w firmie?",
      "Ile dokumentów wysłano w zeszłym miesiącu?"
    ],
    0,
    "Materiał proponuje pytania o poczucie przynależności, gotowość zmiany zespołu oraz ocenę współpracy i wzajemnej sympatii."
  ),

  q(
    38,
    "Psychologia zespołu pracowniczego",
    "Dlaczego pojedynczy słabszy pracownik może wpływać na ocenę całego zespołu?",
    [
      "Bo klient doświadcza końcowego rezultatu pracy zespołu jako całości",
      "Bo każdy klient ocenia tylko jednego pracownika",
      "Bo normy grupowe nie mają znaczenia",
      "Bo zespół nie realizuje wspólnych celów"
    ],
    0,
    "Efekt pracy zespołu jest odbierany całościowo, dlatego słabsze ogniwo może obniżać jakość końcowego rezultatu."
  ),

  q(
    39,
    "Zarządzanie czasem",
    "Czym jest zarządzanie czasem według materiału?",
    [
      "Próbą zatrzymania czasu obiektywnego",
      "Świadomym sterowaniem czasem, aby koncentrować się na najważniejszych sprawach i minimalizować straty",
      "Układaniem wszystkiego równo na biurku",
      "Wyłącznie tworzeniem kalendarza spotkań"
    ],
    1,
    "Zarządzanie czasem jest opisane jako świadome sterowanie pracą i sobą, które pomaga skupić się na priorytetach."
  ),

  q(
    40,
    "Zarządzanie czasem",
    "Z czym materiał wiąże zarządzanie czasem?",
    [
      "Z osobistą samodyscypliną i konsekwentnym stosowaniem technik pracy",
      "Z całkowitą rezygnacją z planowania",
      "Z wykonywaniem wszystkiego naraz",
      "Z ignorowaniem własnych celów"
    ],
    0,
    "Zarządzanie czasem jest przedstawione jako zestaw zasad samodyscypliny i praktycznych technik organizacji pracy."
  ),

  q(
    41,
    "Zarządzanie czasem",
    "Co jest najczęstszą przyczyną poczucia popłochu z powodu upływającego czasu?",
    [
      "Zbyt długie przerwy",
      "Wykonywanie zbyt wielu rzeczy naraz i niedoprowadzanie spraw do końca",
      "Zbyt krótka lista zadań",
      "Brak dokumentów firmowych"
    ],
    1,
    "Materiał wskazuje, że chaos wynika często z multitaskingu i braku zamykania rozpoczętych spraw."
  ),

  q(
    42,
    "Zarządzanie czasem",
    "Co jest punktem wyjściowym w doskonaleniu zarządzania czasem?",
    [
      "Pragnienie i chęć osiągnięcia postępu",
      "Zakup nowego zegarka",
      "Przypadkowy dobór zadań",
      "Praca wyłącznie po godzinach"
    ],
    0,
    "Aby lepiej zarządzać czasem, trzeba najpierw chcieć zmiany i zmotywować się korzyściami."
  ),

  q(
    43,
    "Zarządzanie czasem",
    "Czym różni się czas obiektywny od subiektywnego?",
    [
      "Obiektywny zależy od nastroju, a subiektywny zawsze płynie równo",
      "Obiektywny płynie stale, a subiektywny zależy od naszego odczuwania i aktywności",
      "Oba są w pełni kontrolowane przez człowieka",
      "Subiektywny istnieje tylko w pracy biurowej"
    ],
    1,
    "Czas obiektywny płynie niezmiennie, natomiast subiektywne odczuwanie czasu może przyspieszać lub zwalniać."
  ),

  q(
    44,
    "Zarządzanie czasem",
    "Dlaczego komunikacja może zakłócać zarządzanie czasem?",
    [
      "Bo inni ludzie mają własne priorytety i mogą przerywać naszą pracę",
      "Bo komunikacja zawsze przyspiesza wszystkie zadania",
      "Bo rozmowy nie wymagają czasu",
      "Bo każdy zna nasz plan dnia"
    ],
    0,
    "Inni ludzie często nie znają naszych priorytetów i zadań, przez co mogą dezorganizować dzień pracy."
  ),

  q(
    45,
    "Zarządzanie czasem",
    "Co pomaga radzić sobie z osobami zakłócającymi pracę?",
    [
      "Fałszywa uprzejmość wobec każdej prośby",
      "Techniki asertywne",
      "Rezygnacja z planowania",
      "Praca bez komunikacji"
    ],
    1,
    "Asertywność pozwala odmawiać bez ranienia innych i bez dezorganizowania własnego dnia pracy."
  ),

  q(
    46,
    "Zarządzanie czasem",
    "Do czego służy lista zadań?",
    [
      "Do zapisywania wyłącznie spraw nieważnych",
      "Do gromadzenia czynności i porządkowania ich według ważności",
      "Do ukrywania obowiązków",
      "Do zastąpienia wszystkich decyzji automatem"
    ],
    1,
    "Lista zadań pozwala uporządkować działania, wybrać najważniejsze i zmniejszyć stres."
  ),

  q(
    47,
    "Zarządzanie czasem",
    "Kiedy lista zadań jest szczególnie potrzebna?",
    [
      "Gdy mamy dużo różnych zadań lub często o czymś zapominamy",
      "Tylko wtedy, gdy nie mamy żadnych obowiązków",
      "Wyłącznie podczas urlopu",
      "Nigdy, bo lista zwiększa chaos"
    ],
    0,
    "Materiał wskazuje, że lista pomaga przy dużej liczbie zadań i skłonności do zapominania."
  ),

  q(
    48,
    "Zarządzanie czasem",
    "Na czym polega planowanie dnia pracy?",
    [
      "Na przygotowaniu spisu czynności do wykonania w najbliższym czasie",
      "Na usunięciu wszystkich przerw",
      "Na zaplanowaniu 100% czasu co do minuty",
      "Na przyjmowaniu wszystkich próśb współpracowników"
    ],
    0,
    "Planowanie dnia to stworzenie listy czynności, które zamierzamy wykonać."
  ),

  q(
    49,
    "Zarządzanie czasem",
    "Ile czasu według materiału warto przeznaczyć na planowanie danego okresu?",
    [
      "Nie więcej niż 1%",
      "Co najmniej 50%",
      "Dokładnie połowę dnia",
      "Cały pierwszy dzień tygodnia"
    ],
    0,
    "Materiał podaje, że przesadne planowanie przestaje być efektywne, a na planowanie nie powinno się przeznaczać więcej niż 1% czasu."
  ),

  q(
    50,
    "Zarządzanie czasem",
    "Ile czasu sugeruje materiał na zaplanowanie 8 godzin pracy?",
    [
      "5 minut",
      "2 godziny",
      "45 minut",
      "Cały poranek"
    ],
    0,
    "W materiale pojawia się wskazówka: na zaplanowanie 8 godzin pracy poświęć 5 minut."
  ),

  q(
    51,
    "Zarządzanie czasem",
    "Na czym polega reguła 60/40?",
    [
      "Na planowaniu tylko około 60% czasu pracy i zostawieniu 40% na rezerwę oraz spontaniczne działania",
      "Na przeznaczaniu 60% czasu na przerwy",
      "Na wykonywaniu 40% zadań bez priorytetów",
      "Na planowaniu 100% dnia pracy"
    ],
    0,
    "Reguła 60/40 chroni przed przesadnym planowaniem i zostawia przestrzeń na zakłócenia oraz nieprzewidziane sprawy."
  ),

  q(
    52,
    "Zarządzanie czasem",
    "Co według reguły 60/40 przypada na pozostałe 40% czasu?",
    [
      "Wyłącznie sen",
      "Nieprzewidziane wydarzenia, zakłócenia i czynności spontaniczne",
      "Tylko spotkania z przełożonym",
      "Zadania typu A"
    ],
    1,
    "Pozostały czas obejmuje rezerwę na nieoczekiwane wydarzenia oraz aktywność spontaniczną."
  ),

  q(
    53,
    "Zarządzanie czasem",
    "Jaki rozkład czasu pracy podaje materiał?",
    [
      "60% czynności zaplanowane, 20% nieoczekiwane, 20% spontaniczne",
      "100% czynności zaplanowane",
      "20% praca, 80% przerwy",
      "40% planowanie, 60% kontrola"
    ],
    0,
    "Materiał dzieli czas na trzy bloki: zaplanowany, nieoczekiwany oraz spontaniczny."
  ),

  q(
    54,
    "Zarządzanie czasem",
    "Dlaczego zaplanowanie pełnego dnia pracy może być problemem?",
    [
      "Może budzić frustrację i stres, gdy nie uda się zrealizować wszystkich założeń",
      "Zawsze zwiększa odpoczynek",
      "Eliminuje wszystkie zakłócenia",
      "Powoduje, że zadania same się wykonują"
    ],
    0,
    "Planowanie całego dnia bez rezerwy zwiększa ryzyko poczucia porażki i obniżenia samooceny."
  ),

  q(
    55,
    "Zarządzanie czasem",
    "Co należy zrobić z dużymi zadaniami na liście?",
    [
      "Rozłożyć je na mniejsze elementy",
      "Usunąć je zawsze z listy",
      "Zostawić bez opisu",
      "Nadać im najniższy priorytet bez analizy"
    ],
    0,
    "Duże zadania warto dzielić na mniejsze kroki, aż staną się możliwe do wykonania."
  ),

  q(
    56,
    "Zarządzanie czasem",
    "Jaką zasadę dotyczącą pilności i ważności podkreśla materiał?",
    [
      "Pilne zawsze oznacza najważniejsze",
      "Pilne nie znaczy ważne",
      "Ważne zadania nie mają terminów",
      "Nie należy ustalać priorytetów"
    ],
    1,
    "Materiał wyraźnie przypomina, że pilność zadania nie jest tym samym co jego ważność."
  ),

  q(
    57,
    "Zarządzanie czasem",
    "Od czego warto rozpocząć określanie priorytetów?",
    [
      "Od daty zakończenia",
      "Od koloru notatnika",
      "Od najłatwiejszych czynności",
      "Od zadań innych osób"
    ],
    0,
    "Przy ustalaniu priorytetów trzeba brać pod uwagę termin wykonania, szczególnie gdy jest nieprzekraczalny."
  ),

  q(
    58,
    "Zarządzanie czasem",
    "Co oznacza zasada ABC?",
    [
      "Grupowanie zadań według wartości: A najwyższa, B niższa, C najniższa",
      "Losowe układanie zadań",
      "Rezygnację z zadań C",
      "Planowanie tylko zadań łatwych"
    ],
    0,
    "Metoda ABC pozwala wartościować zadania i ustalać kolejność ich wykonania."
  ),

  q(
    59,
    "Zarządzanie czasem",
    "Czy zadanie A oznacza, że należy zrezygnować z zadania C?",
    [
      "Tak, zawsze",
      "Nie, oznacza jedynie ustawienie zadań w odpowiedniej relacji",
      "Tak, jeśli zadanie C jest rutynowe",
      "Nie, bo A i C mają zawsze tę samą wartość"
    ],
    1,
    "Zadania C nadal mogą być wykonane, ale po zadaniach o wyższej wartości."
  ),

  q(
    60,
    "Zarządzanie czasem",
    "Dlaczego lista priorytetów redukuje stres?",
    [
      "Bo porządkuje obowiązki i zmniejsza poczucie chaosu",
      "Bo usuwa wszystkie zadania",
      "Bo wymaga planowania 100% dnia",
      "Bo zastępuje odpoczynek"
    ],
    0,
    "Nadanie zadaniom rangi zmniejsza napięcie wynikające z nadmiaru obowiązków."
  ),

  q(
    61,
    "Zarządzanie czasem",
    "Kim jest „skowronek” w kontekście organizacji dnia?",
    [
      "Osobą najlepiej funkcjonującą rano",
      "Osobą najwydajniejszą wyłącznie w nocy",
      "Osobą bez rytmu pracy",
      "Osobą unikającą zadań typu A"
    ],
    0,
    "Skowronek, czyli ranny ptaszek, najlepiej pracuje we wcześniejszej części dnia."
  ),

  q(
    62,
    "Zarządzanie czasem",
    "Kim jest „sowa” w kontekście organizacji dnia?",
    [
      "Osobą o późnym rytmie, która rozkręca się później i chętniej pracuje do wieczora",
      "Osobą, która zawsze najlepiej pracuje o świcie",
      "Osobą bez zdolności planowania",
      "Osobą wykonującą tylko zadania C"
    ],
    0,
    "Sowa, czyli nocny marek, osiąga lepszą sprawność później niż osoby o wczesnym rytmie."
  ),

  q(
    63,
    "Zarządzanie czasem",
    "Czy według materiału skowronek pracuje obiektywnie lepiej niż sowa?",
    [
      "Tak, zawsze",
      "Nie, te typy nie pracują lepiej lub gorzej, tylko inaczej",
      "Tak, ale tylko po obiedzie",
      "Nie, bo sowa nie pracuje wcale"
    ],
    1,
    "Materiał podkreśla, że różnice dotyczą rytmu aktywności, a nie ogólnej wartości pracy."
  ),

  q(
    64,
    "Zarządzanie czasem",
    "Kiedy według średniej statystycznej przypada najlepszy czas na zadania typu A?",
    [
      "Przed południem lub około południa",
      "Wyłącznie po obiedzie",
      "Tuż przed końcem pracy",
      "W trakcie największego zmęczenia"
    ],
    0,
    "Zadania typu A wymagają największego skupienia, więc najlepiej wykonywać je przy najwyższej sprawności."
  ),

  q(
    65,
    "Zarządzanie czasem",
    "Jakie zadania najlepiej wykonywać po posiłku, gdy spada energia?",
    [
      "Zadania typu A",
      "Zadania typu C",
      "Najtrudniejsze negocjacje",
      "Najważniejsze decyzje strategiczne"
    ],
    1,
    "Po obiedzie pojawia się spadek sprawności, dlatego lepiej wybierać zadania rutynowe i mało angażujące."
  ),

  q(
    66,
    "Zarządzanie czasem",
    "Kiedy według materiału wypada dobry czas na zadania typu B?",
    [
      "Podczas szczytu późnym popołudniem",
      "Tylko o świcie",
      "W trakcie największego spadku po obiedzie",
      "Wyłącznie przed rozpoczęciem pracy"
    ],
    0,
    "Zadania typu B mają umiarkowany stopień trudności i pasują do popołudniowego wzrostu formy."
  ),

  q(
    67,
    "Zarządzanie czasem",
    "Dlaczego warto uwzględniać wahania sprawności psychofizycznej?",
    [
      "Aby planować zadania zgodnie z indywidualnymi wyżami i niżami wydajności",
      "Aby wykonywać najtrudniejsze zadania w najgorszym momencie",
      "Aby całkowicie zrezygnować z przerw",
      "Aby ignorować naturalny rytm dnia"
    ],
    0,
    "Planowanie zgodne z rytmem wydajności pozwala efektywniej wykorzystywać własną energię."
  ),

  q(
    68,
    "Zarządzanie czasem",
    "Czym jest „cicha godzina”?",
    [
      "Czasem przeznaczonym na nieprzerwaną pracę tylko dla siebie",
      "Godziną obowiązkowych spotkań",
      "Czasem na odbieranie wszystkich telefonów",
      "Przerwą bez celu"
    ],
    0,
    "Cicha godzina ma ograniczyć zakłócenia i umożliwić koncentrację, szczególnie przy zadaniach typu A."
  ),

  q(
    69,
    "Zarządzanie czasem",
    "Dlaczego wielu menedżerów wykonuje właściwą pracę dopiero po godzinach?",
    [
      "Bo w dzień przeszkadzają im współpracownicy, klienci, telefony, posiedzenia i konflikty",
      "Bo w ciągu dnia nie mają żadnych obowiązków",
      "Bo planują za mało spotkań",
      "Bo przerwy zawsze są zbyt długie"
    ],
    0,
    "Materiał opisuje, że liczne zakłócenia w ciągu dnia utrudniają skupienie na właściwej pracy."
  ),

  q(
    70,
    "Zarządzanie czasem",
    "Po co robi się przerwy w czasie pracy?",
    [
      "Aby przeciwdziałać spadkowi efektywności i dać umysłowi odpocząć",
      "Aby całkowicie zrezygnować z pracy",
      "Aby wydłużyć listę zadań",
      "Aby zastąpić planowanie"
    ],
    0,
    "Nikt nie może pracować umysłowo bez końca, dlatego przerwy pomagają utrzymać efektywność."
  ),

  q(
    71,
    "Zarządzanie czasem",
    "Co oznacza stwierdzenie, że zarządzanie czasem jest w pewnym sensie zarządzaniem sobą?",
    [
      "Nie kontrolujemy samego upływu czasu, ale możemy kontrolować swoje działania, priorytety i organizację pracy",
      "Możemy zatrzymać czas obiektywny",
      "Nie mamy wpływu na żadne decyzje",
      "Czasem zarządza wyłącznie przełożony"
    ],
    0,
    "Czas płynie niezależnie, ale człowiek może decydować, jak wykorzystuje dostępne godziny."
  ),

  q(
    72,
    "Zarządzanie czasem",
    "Co grozi, gdy zbyt wiele zadań otrzyma wysoki priorytet?",
    [
      "Priorytety przestaną pomagać w wyborze tego, co naprawdę najważniejsze",
      "Wszystkie zadania automatycznie wykonają się szybciej",
      "Lista zadań stanie się zbędna",
      "Nie będzie potrzeby planowania"
    ],
    0,
    "Jeśli wszystko jest priorytetem, trudno wybrać realnie najważniejsze zadania."
  ),

  q(
    73,
    "Zarządzanie czasem",
    "Jaką rolę pełni termin ostateczny w priorytetyzacji?",
    [
      "Może sprawić, że zadanie stanie się pierwszorzędne",
      "Zawsze obniża wagę zadania",
      "Nie ma żadnego znaczenia",
      "Dotyczy wyłącznie zadań typu C"
    ],
    0,
    "Zadanie z nieprzekraczalnym terminem może wymagać wykonania przed innymi sprawami."
  ),

  q(
    74,
    "Zarządzanie czasem",
    "Co oznacza zadanie typu C?",
    [
      "Zadanie rutynowe, łatwe i najmniej angażujące",
      "Zadanie wymagające najwyższego skupienia",
      "Zadanie strategiczne o najwyższej wartości",
      "Zadanie, którego nie wolno wykonać"
    ],
    0,
    "Zadania typu C są mało angażujące i nadają się na okres niższej energii."
  ),

  q(
    75,
    "Zarządzanie czasem",
    "Co jest przykładem pożeracza czasu w pracy?",
    [
      "Nieprzewidziane zakłócenia, telefony i niezapowiedziane wizyty",
      "Dobrze określony priorytet",
      "Krótka lista zadań",
      "Cicha godzina"
    ],
    0,
    "Pożeracze czasu to zakłócenia, które rozbijają plan pracy i utrudniają koncentrację."
  ),

  q(
    76,
    "Komunikacja interpersonalna",
    "Dlaczego zdolność komunikacji jest szczególnie ważna w życiu zawodowym?",
    [
      "Bo wpływa na skuteczność kontaktów, współpracy i osiąganie celów",
      "Bo pozwala unikać wszystkich ludzi",
      "Bo zastępuje wiedzę zawodową",
      "Bo dotyczy wyłącznie handlowców"
    ],
    0,
    "Materiał wskazuje, że komunikacja jest podstawową umiejętnością, ważną m.in. u handlowców, kierowników i dyrektorów."
  ),

  q(
    77,
    "Komunikacja interpersonalna",
    "Dlaczego kierownik znajduje się w centralnym punkcie komunikacji?",
    [
      "Bo każdy jego kontakt wymaga odpowiedniej formy komunikowania się",
      "Bo nie musi komunikować się z podwładnymi",
      "Bo komunikuje się wyłącznie pisemnie",
      "Bo zawsze mówi tym samym językiem do wszystkich"
    ],
    0,
    "Kierownik komunikuje się z przełożonymi, podwładnymi i kolegami, a każda z tych relacji wymaga innego sposobu przekazu."
  ),

  q(
    78,
    "Komunikacja interpersonalna",
    "Jakie umiejętności komunikacyjne są potrzebne menedżerowi?",
    [
      "Jasne wypowiadanie się, słuchanie, otwartość i radzenie sobie z różnymi stylami komunikacji",
      "Wyłącznie szybkie mówienie",
      "Unikanie informacji zwrotnej",
      "Ignorowanie potrzeb odbiorców"
    ],
    0,
    "Menedżer musi umieć jasno mówić, słuchać, być otwarty i dobierać narzędzia komunikacji do sytuacji."
  ),

  q(
    79,
    "Komunikacja interpersonalna",
    "Dlaczego pracownicy w organizacji potrzebują różnych komunikatów?",
    [
      "Bo mają różne zadania, doświadczenia, potrzeby i poziomy wiedzy",
      "Bo wszyscy wykonują identyczną pracę",
      "Bo komunikacja nie ma znaczenia",
      "Bo każdy potrzebuje tylko jednego typu informacji"
    ],
    0,
    "Organizacja składa się z różnych ludzi, dlatego kierownik powinien rozumieć i zaspokajać różne potrzeby informacyjne."
  ),

  q(
    80,
    "Komunikacja interpersonalna",
    "Kiedy możemy mówić o efektywnej komunikacji?",
    [
      "Gdy treść wypowiedzi jest zrozumiana zgodnie z intencjami nadawcy",
      "Gdy odbiorca domyśla się znaczenia",
      "Gdy komunikat jest jak najdłuższy",
      "Gdy nie ma kontaktu z odbiorcą"
    ],
    0,
    "Efektywna komunikacja zachodzi wtedy, gdy odbiorca rozumie przekaz tak, jak zamierzał nadawca."
  ),

  q(
    81,
    "Komunikacja interpersonalna",
    "Co często powoduje nieporozumienia w relacjach interpersonalnych?",
    [
      "Zła komunikacja i niewłaściwe odczytanie intencji",
      "Zbyt jasne komunikaty",
      "Nadmierna zgodność intencji i treści",
      "Brak jakichkolwiek emocji"
    ],
    0,
    "Materiał wskazuje, że trudności wynikają m.in. z błędnego odczytania intencji i ukrytych oczekiwań."
  ),

  q(
    82,
    "Komunikacja interpersonalna",
    "Jak brzmi jedna z głównych myśli dotyczących pierwszego wrażenia?",
    [
      "Nie można wywrzeć pierwszego wrażenia po raz drugi",
      "Pierwsze wrażenie nigdy nie ma znaczenia",
      "Pierwsze wrażenie zawsze można łatwo usunąć",
      "Pierwsze wrażenie dotyczy wyłącznie słów"
    ],
    0,
    "Materiał podkreśla wagę pierwszych chwil kontaktu, ponieważ pierwsze wrażenie silnie wpływa na późniejszą ocenę."
  ),

  q(
    83,
    "Komunikacja interpersonalna",
    "Na czym polega efekt aureoli?",
    [
      "Osobom sympatycznym przypisujemy więcej pozytywnych cech",
      "Osobom sympatycznym przypisujemy wyłącznie cechy negatywne",
      "Oceniamy ludzi bez żadnych skrótów poznawczych",
      "Ignorujemy wygląd i zachowanie"
    ],
    0,
    "Efekt aureoli sprawia, że pozytywne wrażenie w jednej sferze przenosimy na inne cechy osoby."
  ),

  q(
    84,
    "Komunikacja interpersonalna",
    "Ile według materiału trwa efekt pierwszego wrażenia?",
    [
      "Do około 3 minut, przy czym pierwsze kilkanaście sekund to podświadoma ocena",
      "Zawsze dokładnie 30 minut",
      "Tylko jedną sekundę",
      "Dopiero po kilku tygodniach"
    ],
    0,
    "Pierwsze wrażenie powstaje bardzo szybko, głównie na podstawie sygnałów niewerbalnych."
  ),

  q(
    85,
    "Komunikacja interpersonalna",
    "Co składa się na pierwsze wrażenie?",
    [
      "Wygląd, zachowanie, pierwsze słowa i mowa ciała",
      "Wyłącznie treść CV",
      "Tylko długość rozmowy",
      "Wyłącznie stanowisko osoby"
    ],
    0,
    "Pierwsze wrażenie opiera się na wyglądzie, sposobie zachowania, słowach i sygnałach niewerbalnych."
  ),

  q(
    86,
    "Komunikacja interpersonalna",
    "Dlaczego mowa ciała jest ważna?",
    [
      "Może wzmocnić albo osłabić nasz wizerunek",
      "Nie wpływa na wiarygodność",
      "Zastępuje wszystkie kompetencje zawodowe",
      "Dotyczy wyłącznie rozmów prywatnych"
    ],
    0,
    "Mowa ciała może potwierdzać lub podważać to, co mówimy."
  ),

  q(
    87,
    "Komunikacja interpersonalna",
    "Na czym polega efekt komety?",
    [
      "Pierwsze wrażenie ciągnie się za nami i wpływa na interpretację późniejszych zachowań",
      "Ludzie natychmiast zapominają pierwsze wrażenie",
      "Ostatnie zdanie zawsze kasuje wcześniejsze oceny",
      "Ocena człowieka nie ma związku z początkiem kontaktu"
    ],
    0,
    "Dobre lub złe pierwsze wrażenie wpływa na to, jak odbierane są kolejne wypowiedzi i zachowania."
  ),

  q(
    88,
    "Komunikacja interpersonalna",
    "Czym są schematy poznawcze?",
    [
      "Strukturami, które pomagają organizować wiedzę o świecie i wpływają na to, co zauważamy i pamiętamy",
      "Dokumentami księgowymi",
      "Wyłącznie błędami formalnymi",
      "Zasadami tworzenia listy zadań"
    ],
    0,
    "Schematy są skrótami myślowymi, które pomagają oszczędzać czas i energię, ale mogą prowadzić do uproszczonych ocen."
  ),

  q(
    89,
    "Komunikacja interpersonalna",
    "Na czym polega efekt uporczywości?",
    [
      "Przekonania utrzymują się nawet po podważeniu danych, które je wspierały",
      "Ludzie zawsze natychmiast zmieniają zdanie",
      "Każda opinia znika po pierwszej rozmowie",
      "To mechanizm wyłącznie techniczny"
    ],
    0,
    "Efekt uporczywości wyjaśnia, dlaczego trudno zmienić raz ukształtowane nastawienie."
  ),

  q(
    90,
    "Komunikacja interpersonalna",
    "Na czym polega samospełniające się proroctwo?",
    [
      "Oczekiwania wobec osoby wpływają na nasze zachowanie, a to może sprawić, że osoba zacznie zachowywać się zgodnie z tymi oczekiwaniami",
      "Każda opinia o człowieku jest zawsze błędna",
      "Ludzie działają niezależnie od sposobu traktowania",
      "Proroctwo dotyczy tylko planowania czasu"
    ],
    0,
    "Jeśli zakładamy, że ktoś jest kompetentny, możemy dawać mu lepsze zadania i wsparcie, co ułatwia mu rzeczywisty rozwój."
  ),

  q(
    91,
    "Komunikacja interpersonalna",
    "Czym jest efekt świeżości?",
    [
      "Silniejszym oddziaływaniem informacji otrzymanych jako ostatnie",
      "Lepszym zapamiętywaniem wyłącznie informacji z początku",
      "Brakiem wpływu kolejności informacji",
      "Zjawiskiem dotyczącym tylko komunikacji pisemnej"
    ],
    0,
    "Efekt świeżości oznacza, że najnowsze informacje mogą silniej wpływać na ocenę."
  ),

  q(
    92,
    "Komunikacja interpersonalna",
    "Czym jest efekt pierwszeństwa?",
    [
      "Informacja otrzymana wcześniej zwykle silniej wpływa na ogólne wrażenie",
      "Informacja z końca zawsze usuwa początek",
      "Początek komunikatu nigdy nie ma znaczenia",
      "To wyłącznie zasada wystąpień publicznych"
    ],
    0,
    "Pierwsza informacja staje się punktem odniesienia dla późniejszych ocen."
  ),

  q(
    93,
    "Komunikacja interpersonalna",
    "Kiedy w cyklu prezentacji jednodniowych warto wystąpić jako pierwszy?",
    [
      "Gdy prezentacje odbywają się jednego dnia i narasta zmęczenie odbiorcy",
      "Wyłącznie gdy decyzja zapada po kilku miesiącach",
      "Nigdy, bo pierwsze wystąpienie jest zawsze zapomniane",
      "Tylko gdy nie ma konkurencji"
    ],
    0,
    "Przy prezentacjach jednego dnia zmęczenie odbiorcy może wzmacniać efekt pierwszeństwa."
  ),

  q(
    94,
    "Komunikacja interpersonalna",
    "Kiedy w cyklu prezentacji warto wystąpić jako ostatni?",
    [
      "Gdy prezentacje odbywają się przez kilka dni i zadziała efekt świeżości",
      "Zawsze w środku cyklu",
      "Nigdy, bo ostatnie wystąpienie jest ignorowane",
      "Tylko wtedy, gdy prezentacja jest najkrótsza"
    ],
    0,
    "Jeśli prezentacje rozciągają się w czasie, ostatnie wystąpienie może zostać najlepiej zapamiętane."
  ),

  q(
    95,
    "Komunikacja interpersonalna",
    "Na czym polega efekt częstości kontaktów?",
    [
      "Im częściej widzimy daną osobę i kontaktujemy się z nią, tym większa szansa, że ją polubimy",
      "Częsty kontakt zawsze zwiększa niechęć",
      "Częsty kontakt nie wpływa na relacje",
      "To wyłącznie zasada komunikacji mailowej"
    ],
    0,
    "Powtarzający się kontakt może wzmacniać sympatię, zwłaszcza gdy ma przyjemny charakter."
  ),

  q(
    96,
    "Komunikacja interpersonalna",
    "Czym jest efekt czystej ekspozycji?",
    [
      "Im częściej jesteśmy wystawieni na bodziec, tym bardziej możemy go polubić",
      "Im częściej widzimy bodziec, tym zawsze bardziej go odrzucamy",
      "Jednorazowy kontakt zawsze wystarcza do sympatii",
      "To zasada dotycząca wyłącznie dokumentów"
    ],
    0,
    "Sama powtarzalna ekspozycja na bodziec może zwiększać jego atrakcyjność."
  ),

  q(
    97,
    "Komunikacja interpersonalna",
    "Czym jest projekcja?",
    [
      "Przypisywaniem innym własnych poglądów, zachowań lub cech",
      "Dokładnym słuchaniem rozmówcy",
      "Przekazywaniem informacji zwrotnej",
      "Planowaniem zadań według priorytetów"
    ],
    0,
    "Projekcja polega na interpretowaniu innych przez pryzmat własnych cech, potrzeb lub oczekiwań."
  ),

  q(
    98,
    "Komunikacja interpersonalna",
    "Jaka przestroga wynika z mechanizmów pierwszego wrażenia?",
    [
      "Należy uważać na własną autoprezentację i nie szufladkować innych zbyt pochopnie",
      "Należy zawsze ufać pierwszej ocenie",
      "Nie warto analizować mowy ciała",
      "Trzeba unikać każdej rozmowy"
    ],
    0,
    "Mechanizmy pierwszego wrażenia pokazują, że łatwo wpaść w schematy i utrudnić sobie współpracę."
  ),

  q(
    99,
    "Komunikacja interpersonalna",
    "Jakie trzy elementy składają się na pierwsze wrażenie według podsumowania materiału?",
    [
      "Wygląd, sposób mówienia i słowa",
      "Cena, czas i miejsce",
      "Wiek, adres i stanowisko",
      "Lista zadań, kalendarz i termin"
    ],
    0,
    "Podsumowanie wskazuje: to, co widzimy, jak mówimy oraz o czym mówimy."
  ),

  q(
    100,
    "Komunikacja interpersonalna",
    "Czym jest komunikacja werbalna?",
    [
      "Przekazywaniem informacji za pomocą wyrazów",
      "Przekazywaniem tylko gestów",
      "Wyłącznie milczeniem",
      "Zbiorem sygnałów technicznych"
    ],
    0,
    "Komunikacja werbalna opiera się na słowach używanych w rozmowie, piśmie lub czytaniu."
  ),

  q(
    101,
    "Komunikacja interpersonalna",
    "Jakie czynniki odgrywają dużą rolę w komunikacji werbalnej?",
    [
      "Akcent, płynność mowy i treść wypowiedzi",
      "Tylko kolor ubrania",
      "Wyłącznie układ biurka",
      "Tylko liczba odbiorców"
    ],
    0,
    "Materiał wymienia akcent, stopień płynności mowy i zawartość wypowiedzi."
  ),

  q(
    102,
    "Komunikacja interpersonalna",
    "Czym jest komunikacja pionowa skierowana ku dołowi?",
    [
      "Przekazywaniem informacji od przełożonych do podwładnych",
      "Rozmową między osobami na tym samym poziomie",
      "Nieformalną plotką",
      "Komunikacją bez poleceń"
    ],
    0,
    "Komunikacja ku dołowi obejmuje polecenia, informacje i komunikaty formalne płynące od przełożonych."
  ),

  q(
    103,
    "Komunikacja interpersonalna",
    "Czym jest komunikacja pionowa skierowana ku górze?",
    [
      "Informowaniem przełożonych przez podwładnych o zadaniach, osiągnięciach i problemach",
      "Przekazem reklamowym do klientów",
      "Rozmową między równorzędnymi pracownikami",
      "Komunikatem bez odbiorcy"
    ],
    0,
    "Komunikacja ku górze pomaga przełożonym kierować i monitorować działalność."
  ),

  q(
    104,
    "Komunikacja interpersonalna",
    "Kiedy mamy do czynienia z komunikacją poziomą?",
    [
      "Gdy komunikacja przebiega między członkami tej samej grupy lub pracownikami na tym samym poziomie",
      "Gdy szef wydaje polecenie podwładnemu",
      "Gdy klient pisze reklamację",
      "Gdy nie ma żadnej informacji zwrotnej"
    ],
    0,
    "Komunikacja pozioma dotyczy osób znajdujących się na podobnym poziomie organizacyjnym."
  ),

  q(
    105,
    "Komunikacja interpersonalna",
    "Czym różni się komunikacja jednokierunkowa od dwukierunkowej?",
    [
      "Występowaniem lub brakiem informacji zwrotnej",
      "Wyłącznie długością zdań",
      "Tylko liczbą dokumentów",
      "Kolorem kanału komunikacji"
    ],
    0,
    "Komunikacja dwukierunkowa zawiera sprzężenie zwrotne, a jednokierunkowa go nie wymaga."
  ),

  q(
    106,
    "Komunikacja interpersonalna",
    "Kiedy komunikowanie jednokierunkowe może być odpowiedniejsze?",
    [
      "Gdy komunikat ma być szybki, prosty i nie wymaga dyskusji",
      "Gdy zadanie jest złożone i wymaga upewnienia się, że odbiorca zrozumiał",
      "Gdy potrzebna jest kontrpropozycja",
      "Gdy odbiorca musi zadać wiele pytań"
    ],
    0,
    "Jednokierunkowy przekaz sprawdza się przy prostych informacjach, zasadach lub komunikatach porządkowych."
  ),

  q(
    107,
    "Komunikacja interpersonalna",
    "Kiedy komunikacja dwukierunkowa jest niemal niezbędna?",
    [
      "Gdy ważna jest dokładność, np. przy instrukcjach dotyczących złożonych zadań",
      "Gdy wystarczy ogłoszenie na tablicy",
      "Gdy informacja nie wymaga zrozumienia",
      "Gdy trzeba uniknąć pytań"
    ],
    0,
    "Sprzężenie zwrotne pozwala sprawdzić, czy odbiorca właściwie zrozumiał komunikat."
  ),

  q(
    108,
    "Komunikacja interpersonalna",
    "Czym są masowe metody komunikacji?",
    [
      "Metody kierowane do szerokiego grona odbiorców, np. tablice ogłoszeń lub zebrania wszystkich pracowników",
      "Wyłącznie rozmowy indywidualne z szefem",
      "Poufne rozmowy dotyczące jednej osoby",
      "Komunikaty bez odbiorców"
    ],
    0,
    "Metody masowe służą do przekazywania treści ogólnych wielu osobom."
  ),

  q(
    109,
    "Komunikacja interpersonalna",
    "Który przykład należy do selektywnych metod komunikacji?",
    [
      "Umówione spotkanie z szefem",
      "Tablica ogłoszeń",
      "Roczne sprawozdanie dla wszystkich pracowników",
      "Gazetka zakładowa"
    ],
    0,
    "Metody selektywne dotyczą wybranych osób lub grup i ich konkretnych spraw."
  ),

  q(
    110,
    "Komunikacja interpersonalna",
    "Dlaczego metoda selektywna nie zawsze jest lepsza od masowej?",
    [
      "Bo musi być dostosowana do ważności komunikatu dla konkretnego odbiorcy, a spotkania indywidualne przy ogólnych komunikatach zabierają zbyt dużo czasu",
      "Bo nigdy nie daje informacji zwrotnej",
      "Bo zawsze jest publiczna",
      "Bo nie dotyczy pracowników"
    ],
    0,
    "Dobór metody powinien zależeć od charakteru komunikatu, a nie od założenia, że indywidualnie zawsze znaczy lepiej."
  ),

  q(
    111,
    "Komunikacja interpersonalna",
    "Co oznacza sprzężenie zwrotne?",
    [
      "Informację zwrotną od odbiorcy do nadawcy",
      "Brak odpowiedzi odbiorcy",
      "Komunikat bez treści",
      "Wyłącznie formalny raport roczny"
    ],
    0,
    "Sprzężenie zwrotne pozwala nadawcy ocenić, czy komunikat został zrozumiany."
  ),

  q(
    112,
    "Komunikacja interpersonalna",
    "Dlaczego pierwsze wrażenie ma znaczenie w rozmowie kwalifikacyjnej?",
    [
      "Bo niekorzystne pierwsze wrażenie znacząco zmniejsza szanse zatrudnienia",
      "Bo kandydat oceniany jest dopiero po roku",
      "Bo rozmówca zawsze ignoruje początek",
      "Bo wygląd i sposób mówienia nie mają żadnego wpływu"
    ],
    0,
    "Materiał przywołuje dane pokazujące, że pierwsze minuty rozmowy silnie wpływają na decyzję rekrutacyjną."
  ),

  q(
    113,
    "Komunikacja interpersonalna",
    "Jaka jest praktyczna lekcja z efektu pierwszeństwa i świeżości?",
    [
      "W prezentacjach i debatach warto świadomie wybierać kolejność wystąpienia, ale nie wolno zaniedbywać przygotowania merytorycznego",
      "Wystarczy manipulować kolejnością i nie przygotowywać treści",
      "Najlepiej zawsze występować w środku",
      "Kolejność nigdy nie wpływa na zapamiętywanie"
    ],
    0,
    "Materiał wskazuje, że kolejność pomaga, ale najważniejsze pozostaje rzetelne przygotowanie."
  ),

  q(
    114,
    "Mechanizmy wywierania wpływu",
    "Kto jest klasykiem badań nad technikami wpływu społecznego według materiału?",
    [
      "Robert Cialdini",
      "Abraham Maslow",
      "Peter Drucker",
      "Daniel Goleman"
    ],
    0,
    "Materiał rozpoczyna się od wskazania Roberta Cialdiniego jako klasyka w obszarze wywierania wpływu."
  ),

  q(
    115,
    "Mechanizmy wywierania wpływu",
    "Ile podstawowych reguł wpływu wyróżnił Cialdini w omawianej koncepcji?",
    [
      "Sześć",
      "Dwie",
      "Dwanaście",
      "Sto pięćdziesiąt"
    ],
    0,
    "Materiał mówi o sześciu grupach technik wpływu określonych jako reguły."
  ),

  q(
    116,
    "Mechanizmy wywierania wpływu",
    "Na czym polega reguła wzajemności?",
    [
      "Jeśli ktoś zrobił dla nas coś dobrego, czujemy potrzebę odwdzięczenia się",
      "Chętniej ulegamy tylko osobom sławnym",
      "Decyzje podejmujemy wyłącznie na podstawie ceny",
      "Ignorujemy otrzymane przysługi"
    ],
    0,
    "Reguła wzajemności wymaga, aby za otrzymane dobro odwdzięczyć się dobrem."
  ),

  q(
    117,
    "Mechanizmy wywierania wpływu",
    "Jak reguła wzajemności może prowadzić do manipulacji?",
    [
      "Ktoś oferuje małą przysługę przed wyjawieniem właściwej prośby",
      "Ktoś całkowicie rezygnuje z kontaktu",
      "Ktoś od razu mówi, że niczego nie chce",
      "Ktoś usuwa wszystkie zobowiązania"
    ],
    0,
    "Mała przysługa może wzbudzić zobowiązanie i zwiększyć szansę spełnienia większej prośby."
  ),

  q(
    118,
    "Mechanizmy wywierania wpływu",
    "Na czym polega technika „odmowa — wycofanie”?",
    [
      "Na rozpoczęciu od dużej prośby, a potem wycofaniu się do mniejszej",
      "Na proszeniu tylko raz i bez ustępstw",
      "Na unikaniu jakiejkolwiek prośby",
      "Na dawaniu prezentu bez kontaktu"
    ],
    0,
    "Duża prośba zostaje odrzucona, a mniejsza wygląda jak ustępstwo, co zwiększa szansę jej spełnienia."
  ),

  q(
    119,
    "Mechanizmy wywierania wpływu",
    "Jak bronić się przed regułą wzajemności?",
    [
      "Odróżniać realne przysługi od prób manipulacji",
      "Zawsze odwzajemniać każdą przysługę większą przysługą",
      "Nigdy nie analizować intencji",
      "Ulegać każdej prośbie po otrzymaniu drobiazgu"
    ],
    0,
    "Jeśli rozpoznamy przysługę jako manipulację, nie musimy czuć się zobowiązani do rewanżu."
  ),

  q(
    120,
    "Mechanizmy wywierania wpływu",
    "Który przykład marketingowy wykorzystuje regułę wzajemności?",
    [
      "Darmowa próbka produktu",
      "Ukrycie ceny",
      "Brak kontaktu z klientem",
      "Losowe usunięcie produktu z oferty"
    ],
    0,
    "Darmowe próbki, degustacje czy materiały promocyjne mogą wzbudzać poczucie zobowiązania."
  ),

  q(
    121,
    "Mechanizmy wywierania wpływu",
    "Na czym polega społeczny dowód słuszności?",
    [
      "Uznajemy zachowanie innych za wskazówkę, co jest właściwe",
      "Podejmujemy decyzje wyłącznie wbrew innym",
      "Ignorujemy opinie ludzi podobnych do nas",
      "Ulegamy tylko symbolom autorytetu"
    ],
    0,
    "Jeśli inni postępują w dany sposób, możemy uznać, że jest to zachowanie słuszne."
  ),

  q(
    122,
    "Mechanizmy wywierania wpływu",
    "Na jakim mechanizmie opiera się społeczny dowód słuszności?",
    [
      "Na konformizmie",
      "Na izolacji społecznej",
      "Na całkowitej niezależności od grupy",
      "Na braku obserwacji innych"
    ],
    0,
    "Społeczny dowód słuszności wykorzystuje skłonność ludzi do dostosowania się do zachowania innych."
  ),

  q(
    123,
    "Mechanizmy wywierania wpływu",
    "Kiedy społeczny dowód słuszności działa najsilniej?",
    [
      "Gdy ludzie są niepewni oraz gdy dowody pochodzą od ludzi podobnych do nich",
      "Gdy wszystko jest jasne i oczywiste",
      "Wyłącznie przy produktach technicznych",
      "Tylko w sytuacji całkowitej samotności"
    ],
    0,
    "Materiał wskazuje dwa warunki: niepewność oraz podobieństwo osób, których zachowanie obserwujemy."
  ),

  q(
    124,
    "Mechanizmy wywierania wpływu",
    "Jak bronić się przed społecznym dowodem słuszności?",
    [
      "Nie opierać decyzji wyłącznie na zachowaniu innych i uważać na sfałszowane dowody",
      "Zawsze robić to, co większość",
      "Uznawać liczbę fanów za jedyne kryterium",
      "Nigdy nie analizować faktów"
    ],
    0,
    "Postępowanie innych może być wskazówką, ale nie powinno być jedyną podstawą decyzji."
  ),

  q(
    125,
    "Mechanizmy wywierania wpływu",
    "Który przykład wykorzystuje społeczny dowód słuszności?",
    [
      "Pokazywanie tłumów korzystających z produktu",
      "Pytanie, czy ekspert jest wiarygodny",
      "Darmowa próbka kosmetyku",
      "Limitowana edycja produktu"
    ],
    0,
    "Tłumy użytkowników, liczba fanów czy hasła typu „wszyscy to mają” pokazują, że inni już wybrali daną opcję."
  ),

  q(
    126,
    "Mechanizmy wywierania wpływu",
    "Na czym polega reguła lubienia i sympatii?",
    [
      "Chętniej spełniamy prośby osób, które lubimy i znamy",
      "Chętniej ulegamy rzeczom niedostępnym",
      "Ulegamy wyłącznie osobom z tytułami",
      "Odrzucamy każdą prośbę osoby podobnej"
    ],
    0,
    "Sympatia do proszącego zwiększa szansę spełnienia jego prośby."
  ),

  q(
    127,
    "Mechanizmy wywierania wpływu",
    "Co nasila sympatię do innego człowieka według materiału?",
    [
      "Atrakcyjność fizyczna, podobieństwo, komplementy, częsty kontakt i pozytywne skojarzenia",
      "Wyłącznie wysoka cena produktu",
      "Brak kontaktu i dystans",
      "Niejasne uzasadnienia"
    ],
    0,
    "Materiał wymienia kilka czynników budujących sympatię, które mogą zwiększać podatność na wpływ."
  ),

  q(
    128,
    "Mechanizmy wywierania wpływu",
    "Jak komplementy mogą działać w regule lubienia?",
    [
      "Zwiększają sympatię, ale zbyt nachalne mogą przynieść odwrotny efekt",
      "Zawsze wywołują wyłącznie niechęć",
      "Nie mają żadnego znaczenia",
      "Działają tylko wtedy, gdy są obraźliwe"
    ],
    0,
    "Pochwały mogą wzmacniać sympatię do osoby, ale nadmierna nachalność budzi podejrzenia."
  ),

  q(
    129,
    "Mechanizmy wywierania wpływu",
    "Jak bronić się przed niepożądanym wpływem sympatii?",
    [
      "Oddzielić uczucia wobec osoby od oceny jej propozycji",
      "Podejmować decyzję wyłącznie dlatego, że kogoś lubimy",
      "Nigdy nie analizować propozycji",
      "Zawsze zwiększać kontakt"
    ],
    0,
    "Po wykryciu nagłego przypływu sympatii warto ochłodzić ocenę i skupić się na samej propozycji."
  ),

  q(
    130,
    "Mechanizmy wywierania wpływu",
    "Który przykład wykorzystuje regułę lubienia i sympatii?",
    [
      "Atrakcyjne hostessy lub schlebianie partnerom w negocjacjach",
      "Oferta last minute",
      "Ukrycie liczby klientów",
      "Losowe zwiększenie ceny"
    ],
    0,
    "Wzbudzanie sympatii przez wygląd, podobieństwo lub pochwały może zwiększać uległość wobec propozycji."
  ),

  q(
    131,
    "Mechanizmy wywierania wpływu",
    "Na czym polega wpływ autorytetu?",
    [
      "Chętniej spełniamy prośby osób uznawanych za autorytety",
      "Chętniej ulegamy wyłącznie osobom podobnym",
      "Kupujemy tylko produkty tanie",
      "Ulegamy zawsze pierwszej osobie w kolejce"
    ],
    0,
    "Autorytety kojarzą się z wiedzą, mądrością i władzą, dlatego mogą uruchamiać automatyczne posłuszeństwo."
  ),

  q(
    132,
    "Mechanizmy wywierania wpływu",
    "Jakie symbole mogą wzmacniać pozorny autorytet?",
    [
      "Tytuły, ubrania i samochody",
      "Wyłącznie liczba pytań w quizie",
      "Tylko długość rozmowy",
      "Kolor tła strony"
    ],
    0,
    "Materiał wskazuje, że można ulegać nie tylko rzeczywistemu autorytetowi, ale też jego oznakom."
  ),

  q(
    133,
    "Mechanizmy wywierania wpływu",
    "Jak bronić się przed regułą autorytetu?",
    [
      "Zapytać, czy autorytet jest rzeczywistym ekspertem i czy można mu zaufać w tej sytuacji",
      "Ulegać każdemu, kto wygląda profesjonalnie",
      "Nie sprawdzać kompetencji eksperta",
      "Kierować się wyłącznie tytułem"
    ],
    0,
    "Te pytania przenoszą uwagę z symboli autorytetu na realną wiedzę i wiarygodność osoby."
  ),

  q(
    134,
    "Mechanizmy wywierania wpływu",
    "Który przykład marketingowy wykorzystuje autorytet?",
    [
      "Osoba w stroju lekarza polecająca lek",
      "Oferta last minute",
      "Liczba fanów na Facebooku",
      "Darmowa degustacja"
    ],
    0,
    "Strój lekarza działa jako symbol autorytetu, nawet gdy odbiorca nie sprawdzi realnych kompetencji tej osoby."
  ),

  q(
    135,
    "Mechanizmy wywierania wpływu",
    "Na czym polega reguła niedostępności?",
    [
      "Rzecz rzadka lub trudno osiągalna wydaje się bardziej wartościowa",
      "Rzecz powszechna zawsze wydaje się najcenniejsza",
      "Brak dostępu obniża pragnienie",
      "Niedostępność nie wpływa na decyzje"
    ],
    0,
    "Niedostępność automatycznie zwiększa atrakcyjność dobra, bo pojawia się poczucie ograniczonej szansy."
  ),

  q(
    136,
    "Mechanizmy wywierania wpływu",
    "Kiedy reguła niedostępności działa szczególnie mocno?",
    [
      "Gdy niedostępność pojawiła się niedawno oraz gdy konkurujemy z innymi",
      "Gdy produkt zawsze był łatwo dostępny",
      "Gdy nie ma presji wyboru",
      "Gdy nikt nie jest zainteresowany produktem"
    ],
    0,
    "Nowe ograniczenie i rywalizacja z innymi wzmacniają pragnienie posiadania dobra."
  ),

  q(
    137,
    "Mechanizmy wywierania wpływu",
    "Jak bronić się przed regułą niedostępności?",
    [
      "Ochłonąć i zapytać siebie, po co naprawdę chcemy mieć trudno dostępne dobro",
      "Kupować natychmiast wszystko, co limitowane",
      "Uznawać emocje za jedyne kryterium",
      "Ignorować cel zakupu"
    ],
    0,
    "Niedostępność wywołuje emocje, dlatego warto zatrzymać się i ocenić realną potrzebę."
  ),

  q(
    138,
    "Mechanizmy wywierania wpływu",
    "Który przykład wykorzystuje regułę niedostępności?",
    [
      "Oferta last minute lub limitowana edycja",
      "Stała dostępność bez ograniczeń",
      "Prośba bez uzasadnienia",
      "Długa lista zadań ABC"
    ],
    0,
    "Ograniczenie czasowe lub ilościowe zwiększa atrakcyjność oferty."
  ),

  q(
    139,
    "Mechanizmy wywierania wpływu",
    "Na czym polega reguła zaangażowania i konsekwencji?",
    [
      "Po zaangażowaniu chcemy kontynuować działanie, aby być postrzegani jako konsekwentni",
      "Po podjęciu decyzji zawsze natychmiast ją odwołujemy",
      "Nie zależy nam na zgodności słów i czynów",
      "Ulegamy tylko dlatego, że ktoś jest podobny"
    ],
    0,
    "Ludzie dążą do zgodności między słowami, przekonaniami, postawami i czynami."
  ),

  q(
    140,
    "Mechanizmy wywierania wpływu",
    "Co jest kluczem do sukcesu w wykorzystywaniu reguły zaangażowania?",
    [
      "Zaskarbienie sobie początkowego zaangażowania",
      "Zabranie wszystkich argumentów",
      "Całkowity brak pierwszego kroku",
      "Pokazanie wyłącznie droższego produktu"
    ],
    0,
    "Po wzbudzeniu początkowego stanowiska ludzie łatwiej ulegają kolejnym prośbom zgodnym z tym zaangażowaniem."
  ),

  q(
    141,
    "Mechanizmy wywierania wpływu",
    "Jak bronić się przed regułą konsekwencji?",
    [
      "Wsłuchiwać się w sygnały dyskomfortu i pytać, czy dziś podjęlibyśmy tę samą decyzję",
      "Zawsze trwać przy decyzji mimo szkód",
      "Nie analizować nowych informacji",
      "Uznawać konsekwencję za wartość absolutną"
    ],
    0,
    "Materiał proponuje zwracanie uwagi na wewnętrzny dyskomfort i ponowną ocenę decyzji."
  ),

  q(
    142,
    "Mechanizmy wywierania wpływu",
    "Który przykład wykorzystuje regułę zaangażowania i konsekwencji?",
    [
      "Miesiąc darmowego korzystania z abonamentu",
      "Sama liczba fanów na stronie",
      "Jednorazowe odrzucenie prośby",
      "Komunikat bez pierwszego kroku"
    ],
    0,
    "Darmowy okres testowy buduje początkowe zaangażowanie, które może skłonić do kontynuacji."
  ),

  q(
    143,
    "Mechanizmy wywierania wpływu",
    "Jak działa reguła uzasadnienia?",
    [
      "Prośba ma większą skuteczność, gdy podamy powód",
      "Uzasadnienie zawsze zmniejsza szanse spełnienia prośby",
      "Ludzie wolą prośby bez powodu",
      "Uzasadnienie działa tylko przy produktach drogich"
    ],
    0,
    "Materiał pokazuje, że samo podanie powodu może zwiększyć skłonność do spełnienia prośby."
  ),

  q(
    144,
    "Mechanizmy wywierania wpływu",
    "Jaki przykład w materiale obrazuje regułę uzasadnienia?",
    [
      "Prośba o przepuszczenie przy ksero z podaniem powodu",
      "Gra w bilarda przy publiczności",
      "Lista zadań ABC",
      "Cicha godzina w biurze"
    ],
    0,
    "Eksperyment z kopiarką pokazuje, że prośba z uzasadnieniem może być skuteczniejsza niż prośba bez powodu."
  ),

  q(
    145,
    "Mechanizmy wywierania wpływu",
    "Jaki stereotyp opisuje zasada „wysoka cena = wysoka jakość”?",
    [
      "Drogi produkt jest postrzegany jako cenny, a tani jako gorszy",
      "Drogi zawsze oznacza fałszywy",
      "Tani zawsze oznacza najlepszy",
      "Cena nie wpływa na ocenę jakości"
    ],
    0,
    "Gdy ludzie nie są pewni jakości, mogą mechanicznie używać ceny jako skrótu oceny."
  ),

  q(
    146,
    "Mechanizmy wywierania wpływu",
    "Dlaczego reguły wpływu są skuteczne?",
    [
      "Bo działają jako uproszczone mechanizmy podejmowania decyzji",
      "Bo wymagają długiej analizy każdej informacji",
      "Bo zawsze są świadomie rozpoznawane",
      "Bo usuwają wszystkie emocje"
    ],
    0,
    "Reguły wpływu często działają jak automatyczne skróty, które przyspieszają decyzje, ale mogą być wykorzystywane manipulacyjnie."
  ),

  q(
    147,
    "Mechanizmy wywierania wpływu",
    "Co łączy wiele technik wpływu społecznego?",
    [
      "Wykorzystują naturalne mechanizmy psychologiczne człowieka",
      "Są całkowicie niezależne od emocji",
      "Działają tylko w reklamie telewizyjnej",
      "Nie mają związku z zachowaniem społecznym"
    ],
    0,
    "Techniki wpływu opierają się na naturalnych skłonnościach, takich jak wzajemność, konformizm, sympatia, autorytet czy konsekwencja."
  ),

  q(
    148,
    "Mechanizmy wywierania wpływu",
    "Która reakcja jest najrozsądniejsza wobec silnej presji sprzedażowej?",
    [
      "Zatrzymać się, rozpoznać możliwą regułę wpływu i ocenić realną wartość propozycji",
      "Natychmiast ulec presji",
      "Kupować wyłącznie dlatego, że oferta jest limitowana",
      "Nigdy nie pytać o szczegóły"
    ],
    0,
    "Świadomość mechanizmów wpływu pozwala odróżnić realną wartość od presji psychologicznej."
  ),

  q(
    149,
    "Mechanizmy wywierania wpływu",
    "Która para najlepiej pasuje do opisu: „inni już to robią, więc ja też”?",
    [
      "Społeczny dowód słuszności i konformizm",
      "Autorytet i cena",
      "Niedostępność i przerwa",
      "Asertywność i lista zadań"
    ],
    0,
    "Społeczny dowód słuszności opiera się na konformizmie, czyli dostosowaniu do zachowań innych."
  ),

  q(
    150,
    "Mechanizmy wywierania wpływu",
    "Która postawa najlepiej chroni przed manipulacją?",
    [
      "Świadoma analiza sytuacji, intencji nadawcy i własnych emocji",
      "Automatyczne uleganie każdej prośbie",
      "Podejmowanie decyzji wyłącznie pod wpływem sympatii",
      "Ignorowanie powodów i konsekwencji"
    ],
    0,
    "Najlepszą ochroną jest świadomość mechanizmów wpływu, zatrzymanie automatycznej reakcji i ocena propozycji na chłodno."
  )
];

(function rebalanceCorrectAnswers() {
  if (!Array.isArray(QUESTIONS)) {
    throw new Error("QUESTIONS nie istnieje albo nie jest tablicą.");
  }

  const ANSWERS_PER_QUESTION = 4;
  const seed = 20260626;

  function createBalancedIndexes(totalQuestions) {
    const indexes = [];

    for (let i = 0; i < totalQuestions; i += 1) {
      indexes.push(i % ANSWERS_PER_QUESTION);
    }

    return shuffleWithSeed(indexes, seed);
  }

  function shuffleWithSeed(array, initialSeed) {
    const result = [...array];
    let currentSeed = initialSeed;

    function random() {
      currentSeed = (currentSeed * 9301 + 49297) % 233280;
      return currentSeed / 233280;
    }

    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
  }

  function validateQuestion(item, index) {
    const number = index + 1;

    if (!item || typeof item !== "object") {
      throw new Error(`Pytanie ${number} ma błędny format.`);
    }

    if (!Array.isArray(item.answers)) {
      throw new Error(`Pytanie ${number} nie ma tablicy answers.`);
    }

    if (item.answers.length !== ANSWERS_PER_QUESTION) {
      throw new Error(`Pytanie ${number} musi mieć dokładnie 4 odpowiedzi.`);
    }

    if (
      typeof item.correctIndex !== "number" ||
      item.correctIndex < 0 ||
      item.correctIndex >= item.answers.length
    ) {
      throw new Error(`Pytanie ${number} ma błędny correctIndex.`);
    }
  }

  const targetIndexes = createBalancedIndexes(QUESTIONS.length);

  QUESTIONS.forEach((item, index) => {
    validateQuestion(item, index);

    const originalCorrectIndex = item.correctIndex;
    const correctAnswer = item.answers[originalCorrectIndex];

    const wrongAnswers = item.answers.filter((_, answerIndex) => {
      return answerIndex !== originalCorrectIndex;
    });

    const targetCorrectIndex = targetIndexes[index];

    const reorderedAnswers = [];
    let wrongAnswerIndex = 0;

    for (let i = 0; i < ANSWERS_PER_QUESTION; i += 1) {
      if (i === targetCorrectIndex) {
        reorderedAnswers.push(correctAnswer);
      } else {
        reorderedAnswers.push(wrongAnswers[wrongAnswerIndex]);
        wrongAnswerIndex += 1;
      }
    }

    item.answers = reorderedAnswers;
    item.correctIndex = targetCorrectIndex;
  });

  const audit = QUESTIONS.reduce(
    (acc, item) => {
      acc[item.correctIndex] += 1;
      return acc;
    },
    [0, 0, 0, 0]
  );

  console.info("[Quiz] Poprawiono rozkład poprawnych odpowiedzi:");
  console.info(`A / correctIndex 0: ${audit[0]}`);
  console.info(`B / correctIndex 1: ${audit[1]}`);
  console.info(`C / correctIndex 2: ${audit[2]}`);
  console.info(`D / correctIndex 3: ${audit[3]}`);
})();