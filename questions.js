const SOURCES = {
  TEAM: "Psychologia zespołu pracowniczego",
  TIME: "Zarządzanie czasem",
  COMM: "Komunikacja interpersonalna",
  INFL: "Mechanizmy wywierania wpływu"
};

const CORRECT_INDEXES = (() => {
  const indexes = [];

  for (let i = 0; i < 150; i += 1) {
    indexes.push(i % 4);
  }

  let seed = 20260626;

  function random() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }

  for (let i = indexes.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }

  return indexes;
})();

function buildQuestion(item) {
  const correctIndex = CORRECT_INDEXES[item.id - 1] ?? ((item.id - 1) % 4);
  const answers = [];
  let distractorIndex = 0;

  for (let i = 0; i < 4; i += 1) {
    if (i === correctIndex) {
      answers.push(item.correct);
    } else {
      answers.push(item.distractors[distractorIndex]);
      distractorIndex += 1;
    }
  }

  return {
    id: item.id,
    source: item.source,
    question: item.question,
    answers,
    correctIndex,
    explanation: item.explanation
  };
}

const RAW_QUESTIONS = [
  {
    id: 1,
    source: SOURCES.TEAM,
    question: "Który warunek jest konieczny, aby zbiór osób można było traktować jako grupę w sensie psychologicznym?",
    correct: "Członkowie muszą wchodzić w relacje, mieć świadomość siebie jako grupy i posiadać wspólny cel.",
    distractors: [
      "Członkowie muszą mieć taki sam zakres obowiązków i zajmować podobne stanowiska w strukturze.",
      "Członkowie muszą pracować w jednym miejscu i podlegać temu samemu regulaminowi organizacyjnemu.",
      "Członkowie muszą być dobrani według podobieństwa cech osobowości i poziomu kwalifikacji."
    ],
    explanation: "Grupa psychologiczna nie jest tylko zbiorem osób. Kluczowe są interakcje, wzajemna świadomość, postrzeganie siebie jako grupy i wspólny cel."
  },
  {
    id: 2,
    source: SOURCES.TEAM,
    question: "Co najtrafniej odróżnia zespół pracowniczy od nieformalnej grupy społecznej?",
    correct: "Zespół pracowniczy realizuje cele organizacyjne i opiera się na formalnie określonym kontekście działania.",
    distractors: [
      "Zespół pracowniczy powstaje wyłącznie na podstawie wzajemnej sympatii i spontanicznej integracji.",
      "Zespół pracowniczy nie wymaga wspólnego celu, jeśli członkowie mają podobne kwalifikacje.",
      "Zespół pracowniczy funkcjonuje bez norm, ponieważ wystarcza mu formalny podział stanowisk."
    ],
    explanation: "Zespół pracowniczy jest specyficzną grupą formalną, działającą w ramach organizacji i realizującą jej cele."
  },
  {
    id: 3,
    source: SOURCES.TEAM,
    question: "Które podejście do wielkości grupy jest zgodne z psychologią zespołu?",
    correct: "Liczebność powinna wynikać z charakteru zadania, składu osobowego i sposobu kierowania.",
    distractors: [
      "Najlepsza jest zawsze możliwie mała grupa, ponieważ minimalizuje różnice kompetencyjne.",
      "Najlepsza jest zawsze możliwie duża grupa, ponieważ zwiększa odpowiedzialność jednostek.",
      "Optymalna liczebność jest stała i niezależna od typu zadania oraz dojrzałości zespołu."
    ],
    explanation: "Materiał podkreśla, że nie istnieje jedna stała optymalna wielkość grupy. Liczba członków musi być adekwatna do zadania i warunków."
  },
  {
    id: 4,
    source: SOURCES.TEAM,
    question: "Dlaczego zbyt duża grupa może działać mniej efektywnie?",
    correct: "Ponieważ utrudnia aktywny udział wszystkich członków i może sprzyjać powstawaniu podgrup.",
    distractors: [
      "Ponieważ zawsze obniża różnorodność kwalifikacji i zmniejsza zasób dostępnych informacji.",
      "Ponieważ eliminuje możliwość konfliktu, co paradoksalnie osłabia zaangażowanie członków.",
      "Ponieważ zwiększa spójność do poziomu uniemożliwiającego wykonywanie zadań rutynowych."
    ],
    explanation: "Zbyt duża grupa może ograniczać uczestnictwo, obniżać zadowolenie i utrudniać kierowanie przez powstawanie podgrup."
  },
  {
    id: 5,
    source: SOURCES.TEAM,
    question: "Która zależność najlepiej opisuje małe grupy?",
    correct: "Sprzyjają spójności i kontroli, ale mogą mieć ograniczony zasób kompetencji.",
    distractors: [
      "Zawsze zwiększają konfliktowość, ponieważ członkowie częściej wchodzą w interakcje.",
      "Działają najlepiej przy każdym zadaniu, niezależnie od wymaganej specjalizacji.",
      "Są mniej skuteczne w szybkich decyzjach, ponieważ wymagają wielopoziomowej koordynacji."
    ],
    explanation: "Małe grupy są zwykle bardziej spójne i łatwiejsze do kontrolowania, lecz mogą nie zawierać wszystkich potrzebnych umiejętności."
  },
  {
    id: 6,
    source: SOURCES.TEAM,
    question: "Czym jest atrakcyjność grupy pracowniczej w ujęciu psychologicznym?",
    correct: "Stopniem, w jakim grupa zaspokaja ważne potrzeby jednostki.",
    distractors: [
      "Formalnym poziomem wynagrodzenia niezależnym od więzi i norm grupowych.",
      "Liczbą realizowanych projektów w przeliczeniu na jednego członka zespołu.",
      "Poziomem kontroli sprawowanej nad jednostką przez przełożonego."
    ],
    explanation: "Atrakcyjność grupy wynika z relacji między właściwościami grupy a potrzebami jednostki."
  },
  {
    id: 7,
    source: SOURCES.TEAM,
    question: "Który mechanizm najlepiej wyjaśnia, dlaczego normy grupowe wzmacniają funkcjonowanie zespołu?",
    correct: "Normy zmniejszają niepewność, określając oczekiwane i akceptowane zachowania.",
    distractors: [
      "Normy zastępują potrzebę celu grupowego, bo same wystarczają do osiągania wyników.",
      "Normy usuwają różnice między członkami, dzięki czemu wszyscy reagują identycznie.",
      "Normy eliminują potrzebę komunikacji, ponieważ zachowanie członków staje się automatyczne."
    ],
    explanation: "Normy pozwalają przewidywać zachowania innych oraz rozpoznać, co w grupie jest aprobowane."
  },
  {
    id: 8,
    source: SOURCES.TEAM,
    question: "Jaki jest związek między interakcją w grupie a identyfikacją z zespołem?",
    correct: "Interakcja może prowadzić do utożsamiania się jednostki z grupą i wzrostu więzi grupowej.",
    distractors: [
      "Interakcja osłabia identyfikację, ponieważ zwiększa widoczność różnic indywidualnych.",
      "Identyfikacja pojawia się wyłącznie dzięki regulaminowi, niezależnie od komunikacji.",
      "Więź grupowa powstaje tylko wtedy, gdy członkowie ograniczają wzajemne kontakty."
    ],
    explanation: "Komunikowanie się między członkami sprzyja identyfikacji z grupą i wzmacnia poczucie przynależności."
  },
  {
    id: 9,
    source: SOURCES.TEAM,
    question: "Które stwierdzenie najtrafniej opisuje cel grupowy?",
    correct: "Jest wartością pozytywną dla grupy, która ukierunkowuje działania jej członków.",
    distractors: [
      "Jest indywidualnym zamiarem lidera, który nie musi być zrozumiały dla zespołu.",
      "Jest sumą prywatnych celów członków, nawet jeśli wzajemnie się wykluczają.",
      "Jest formalnym opisem stanowiska, który nie wpływa na ocenę zaangażowania."
    ],
    explanation: "Cel grupowy organizuje działania grupy i stanowi podstawę oceny wkładu poszczególnych członków."
  },
  {
    id: 10,
    source: SOURCES.TEAM,
    question: "Dlaczego efektywność zespołu należy oceniać z perspektywy odbiorcy rezultatu?",
    correct: "Ponieważ odbiorca doświadcza efektu pracy zespołu jako całości.",
    distractors: [
      "Ponieważ odbiorca najlepiej zna wszystkie relacje nieformalne w grupie.",
      "Ponieważ odbiorca ocenia wyłącznie wysiłek lidera, a nie rezultat zespołu.",
      "Ponieważ odbiorca może zastąpić wewnętrzną ocenę norm i spójności."
    ],
    explanation: "Rezultat pracy zespołu jest odbierany całościowo, dlatego słabszy element może wpływać na końcową jakość."
  },
  {
    id: 11,
    source: SOURCES.TEAM,
    question: "Co oznacza struktura grupowa?",
    correct: "Zróżnicowanie pozycji, ról, statusu, zaufania i wpływu między członkami.",
    distractors: [
      "Formalną listę stanowisk niezależną od relacji społecznych i autorytetu.",
      "Zestaw procedur administracyjnych określających wyłącznie czas pracy.",
      "Jednolitość pozycji wszystkich osób wynikającą z przynależności do zespołu."
    ],
    explanation: "W każdej grupie pojawiają się role, pozycje i nieformalne różnice wpływu."
  },
  {
    id: 12,
    source: SOURCES.TEAM,
    question: "Które osoby są szczególnie podatne na normatywny wpływ społeczny?",
    correct: "Osoby zabiegające o akceptację grupy i obawiające się odrzucenia.",
    distractors: [
      "Osoby posiadające najwyższy status i silny kredyt zaufania.",
      "Osoby całkowicie niezależne od opinii grupy i jej norm.",
      "Osoby formalnie nieobecne w strukturze zespołu."
    ],
    explanation: "Normatywny wpływ społeczny prowadzi do konformizmu, ponieważ jednostka chce być lubiana i akceptowana."
  },
  {
    id: 13,
    source: SOURCES.TEAM,
    question: "Czym jest kredyt zaufania w grupie?",
    correct: "Zasobem akceptacji zdobytym przez wcześniejsze respektowanie norm.",
    distractors: [
      "Formalnym uprawnieniem do kierowania pracą innych członków zespołu.",
      "Mechanizmem karania osób, które nie podporządkowują się liderowi.",
      "Zjawiskiem automatycznie przysługującym każdemu nowemu członkowi."
    ],
    explanation: "Osoba bardzo lubiana i akceptowana może pozwolić sobie na większą swobodę, bo wcześniej zdobyła zaufanie grupy."
  },
  {
    id: 14,
    source: SOURCES.TEAM,
    question: "Jak obecność innych wpływa na wykonanie zadań zgodnie z facylitacją społeczną?",
    correct: "Może poprawiać zadania proste, a pogarszać zadania trudne lub nowe.",
    distractors: [
      "Poprawia każde zadanie, ponieważ zawsze zwiększa motywację jednostki.",
      "Pogarsza każde zadanie, ponieważ każda obserwacja wywołuje dezorganizację.",
      "Nie ma wpływu na zadania, jeśli jednostka posiada wystarczające kwalifikacje."
    ],
    explanation: "Obecność innych zwiększa pobudzenie, które pomaga przy zadaniach dobrze opanowanych, ale utrudnia zadania złożone."
  },
  {
    id: 15,
    source: SOURCES.TEAM,
    question: "Które działanie lidera najlepiej wynika ze znajomości facylitacji społecznej?",
    correct: "Dobierać formę pracy do trudności zadania i poziomu opanowania czynności.",
    distractors: [
      "Zawsze wykonywać zadania publicznie, aby podnieść poziom pobudzenia.",
      "Zawsze izolować pracowników, aby wyeliminować wszelki wpływ grupy.",
      "Łączyć ludzi w zespoły tylko przy zadaniach rutynowych i dobrze znanych."
    ],
    explanation: "Przy zadaniach prostych obecność innych może pomagać, ale przy trudnych może obciążać."
  },
  {
    id: 16,
    source: SOURCES.TEAM,
    question: "Czym jest spójność grupy?",
    correct: "Poziomem rozwoju więzi między członkami i miarą atrakcyjności grupy.",
    distractors: [
      "Stopniem formalnego podporządkowania jednostek jednemu przełożonemu.",
      "Liczbą zadań wykonanych przez grupę w określonym czasie.",
      "Zakresem podobieństwa regulaminów obowiązujących w organizacji."
    ],
    explanation: "Spójność oznacza siłę więzi, lojalność, atrakcyjność grupy i poszanowanie norm."
  },
  {
    id: 17,
    source: SOURCES.TEAM,
    question: "Kiedy wysoka spójność grupy może stać się niekorzystna?",
    correct: "Gdy grupa nie identyfikuje się z celami organizacji.",
    distractors: [
      "Gdy członkowie grupy znają swoje obowiązki i role.",
      "Gdy grupa posiada wspólne normy i potrafi współpracować.",
      "Gdy pracownicy czują odpowiedzialność za rezultat."
    ],
    explanation: "Wysoka spójność bez zgodności z celami organizacji może wzmacniać zachowania dysfunkcjonalne."
  },
  {
    id: 18,
    source: SOURCES.TEAM,
    question: "Co wzmacnia spójność grupy?",
    correct: "Bliskość, podobieństwo zadań, mała liczebność, nagrody, styl kierowania i wspólne cechy.",
    distractors: [
      "Duża anonimowość, brak kontaktu, niejasne normy i stały konflikt interesów.",
      "Wyłącznie formalne podporządkowanie, bez relacji i wspólnych doświadczeń.",
      "Brak wspólnego celu, brak komunikacji i celowe rozbijanie więzi."
    ],
    explanation: "Materiał wymienia wiele czynników wzmacniających spójność, w tym bliskość, podobieństwo i styl kierowania."
  },
  {
    id: 19,
    source: SOURCES.TEAM,
    question: "Która sytuacja najtrafniej wskazuje na myślenie grupowe?",
    correct: "Grupa dąży do jednomyślności kosztem krytycznej analizy faktów.",
    distractors: [
      "Grupa dzieli się na podzespoły, aby sprawdzić różne źródła informacji.",
      "Grupa celowo zaprasza osoby z zewnątrz do oceny przyjętych założeń.",
      "Grupa odkłada decyzję, aby zebrać dane sprzeczne z preferowaną opcją."
    ],
    explanation: "Myślenie grupowe pojawia się, gdy spójność i solidarność stają się ważniejsze niż realistyczna ocena sytuacji."
  },
  {
    id: 20,
    source: SOURCES.TEAM,
    question: "Który objaw jest typowy dla myślenia grupowego?",
    correct: "Iluzja jednomyślności, ograniczenie alternatyw i rezygnacja z krytyki.",
    distractors: [
      "Systematyczne sprawdzanie konsekwencji każdej rozważanej opcji.",
      "Aktywne poszukiwanie głosów sprzeciwu i informacji niezgodnych.",
      "Celowe rozdzielenie analizy faktów od potrzeby utrzymania spójności."
    ],
    explanation: "Myślenie grupowe ogranicza krytycyzm i zawęża analizę możliwych rozwiązań."
  },
  {
    id: 21,
    source: SOURCES.TEAM,
    question: "Dlaczego różnice statusu mogą obniżać jakość decyzji grupowych?",
    correct: "Osoby o wysokim statusie mogą dominować, niezależnie od trafności swoich informacji.",
    distractors: [
      "Osoby o wysokim statusie zawsze posiadają najtrafniejsze informacje.",
      "Osoby o niskim statusie z definicji nie wnoszą wartościowych danych.",
      "Status formalny nie wpływa na częstotliwość wypowiedzi w grupie."
    ],
    explanation: "Wysoki status może zwiększać wpływ wypowiedzi, nawet gdy kompetencja w danej sprawie jest po stronie innej osoby."
  },
  {
    id: 22,
    source: SOURCES.TEAM,
    question: "Czym jest polaryzacja grupowa?",
    correct: "Przesunięciem decyzji grupy w stronę bardziej skrajnego stanowiska po dyskusji.",
    distractors: [
      "Automatycznym zbliżaniem się grupy do najbardziej umiarkowanego kompromisu.",
      "Całkowitym brakiem zmiany stanowisk po wymianie argumentów.",
      "Zjawiskiem zaniku norm grupowych w sytuacji wysokiej presji."
    ],
    explanation: "Polaryzacja polega na wzmocnieniu początkowych tendencji grupy po dyskusji."
  },
  {
    id: 23,
    source: SOURCES.TEAM,
    question: "Na czym polega próżniactwo społeczne?",
    correct: "Na zmniejszeniu indywidualnego wysiłku, gdy wkład jednostki trudniej ocenić.",
    distractors: [
      "Na wzroście wysiłku jednostki, gdy odpowiedzialność jest rozproszona.",
      "Na świadomym unikaniu norm przez osoby o najwyższym statusie.",
      "Na zwiększeniu jakości decyzji dzięki anonimowości członków grupy."
    ],
    explanation: "Próżniactwo społeczne wiąże się z mniejszą identyfikowalnością wkładu jednostki."
  },
  {
    id: 24,
    source: SOURCES.TEAM,
    question: "Jak ograniczyć próżniactwo społeczne przy zadaniach prostych?",
    correct: "Zwiększyć identyfikowalność indywidualnego wkładu.",
    distractors: [
      "Ukryć wkład jednostek i oceniać wyłącznie wynik zbiorowy.",
      "Zwiększyć liczebność grupy bez zmiany odpowiedzialności.",
      "Zrezygnować z informacji zwrotnej na temat wykonania."
    ],
    explanation: "Gdy jednostka wie, że jej wkład jest widoczny, ma mniejszą skłonność do obniżania wysiłku."
  },
  {
    id: 25,
    source: SOURCES.TEAM,
    question: "Która zasada odpowiada klasycznej burzy mózgów?",
    correct: "Najpierw generuje się pomysły bez krytyki, a ocenę odkłada na później.",
    distractors: [
      "Najpierw odrzuca się pomysły nietypowe, aby nie zaburzały toku pracy.",
      "Najpierw lider wybiera rozwiązanie, a grupa dopisuje do niego argumenty.",
      "Najpierw ocenia się autorów pomysłów, aby ustalić ich wiarygodność."
    ],
    explanation: "Burza mózgów oddziela fazę generowania pomysłów od fazy oceny."
  },
  {
    id: 26,
    source: SOURCES.TEAM,
    question: "Czym jest „kruszenie obiektu” jako technika pracy nad problemem?",
    correct: "Odwrotną burzą mózgów opartą na wyszukiwaniu wad i krytyce obiektu.",
    distractors: [
      "Metodą, która zakazuje krytyki i wymaga wyłącznie pozytywnych propozycji.",
      "Techniką redukcji konfliktu przez przyjmowanie pierwszego wspólnego stanowiska.",
      "Sposobem na eliminację indywidualnego namysłu przed dyskusją grupową."
    ],
    explanation: "Kruszenie obiektu polega na swobodnym wskazywaniu wad i słabości rozwiązania."
  },
  {
    id: 27,
    source: SOURCES.TEAM,
    question: "Po co stosuje się kontrolne listy pytań w analizie problemów?",
    correct: "Aby uporządkować zbieranie informacji i doprecyzować istotę problemu.",
    distractors: [
      "Aby przyspieszyć decyzję przez ograniczenie liczby możliwych interpretacji.",
      "Aby zastąpić analizę przyczyn szybkim głosowaniem nad rozwiązaniem.",
      "Aby ukryć wcześniejsze próby rozwiązania problemu przed zespołem."
    ],
    explanation: "Kontrolne listy pytań pomagają systematycznie analizować problem, jego przyczyny i cel działania."
  },
  {
    id: 28,
    source: SOURCES.TEAM,
    question: "Co oznacza synergia w pracy zespołowej?",
    correct: "Efekt wspólnego działania przewyższający możliwości pojedynczej osoby.",
    distractors: [
      "Sumę indywidualnych wyników bez dodatkowego efektu współpracy.",
      "Zastąpienie współpracy formalnym podziałem odpowiedzialności.",
      "Obniżenie efektywności wynikające z rozproszenia odpowiedzialności."
    ],
    explanation: "Synergia oznacza, że dzięki współpracy grupa osiąga rezultat niedostępny jednostce."
  },
  {
    id: 29,
    source: SOURCES.TEAM,
    question: "Jak należy rozumieć zgodność celów indywidualnych i zespołowych?",
    correct: "Jako warunek, w którym działania jednostek wzmacniają realizację celu grupy.",
    distractors: [
      "Jako całkowite usunięcie potrzeb indywidualnych z funkcjonowania zespołu.",
      "Jako podporządkowanie celu grupy każdej prywatnej preferencji członka.",
      "Jako brak potrzeby ustalania wspólnego kierunku działania."
    ],
    explanation: "Efektywna współpraca wymaga, aby cele jednostek nie rozbijały celu zespołowego."
  },
  {
    id: 30,
    source: SOURCES.TEAM,
    question: "Dlaczego słuchanie siebie nawzajem jest warunkiem efektywności zespołu?",
    correct: "Pozwala wykorzystać informacje rozproszone między członkami grupy.",
    distractors: [
      "Zastępuje potrzebę podejmowania decyzji przez lidera.",
      "Zmniejsza znaczenie różnic kompetencyjnych do zera.",
      "Powoduje, że grupa nie potrzebuje norm ani wspólnego celu."
    ],
    explanation: "Zespół może nie wykorzystać wiedzy swoich członków, jeśli nie słucha informacji wnoszonych przez jednostki."
  },
  {
    id: 31,
    source: SOURCES.TEAM,
    question: "Jakie ryzyko niesie dominujący przywódca w zwartej grupie?",
    correct: "Może wzmacniać konformizm i tłumić krytyczną analizę.",
    distractors: [
      "Może całkowicie uniemożliwić powstanie spójności grupowej.",
      "Może usunąć potrzebę norm i statusów społecznych.",
      "Może automatycznie zwiększyć liczbę unikatowych informacji."
    ],
    explanation: "Dominujący lider w zwartej grupie może sprzyjać myśleniu grupowemu."
  },
  {
    id: 32,
    source: SOURCES.TEAM,
    question: "Która praktyka może poprawić jakość dyskusji przy dużych różnicach statusu?",
    correct: "Praca w podgrupach o zbliżonym statusie i późniejsze uzgodnienie wniosków.",
    distractors: [
      "Powierzenie całej decyzji osobie o najwyższym stanowisku.",
      "Publiczne ocenianie wypowiedzi osób o najniższym statusie.",
      "Eliminacja anonimowych komentarzy, aby zwiększyć presję grupy."
    ],
    explanation: "Podgrupy o zbliżonym statusie mogą zmniejszać zahamowania i nierówny udział w dyskusji."
  },
  {
    id: 33,
    source: SOURCES.TEAM,
    question: "Jaka jest rola lidera w utrzymaniu atrakcyjności zespołu?",
    correct: "Uświadamianie członkom wartości zespołu i dbanie o utrzymanie jego zalet.",
    distractors: [
      "Zastępowanie więzi grupowej wyłącznie kontrolą formalną.",
      "Ograniczanie interakcji, aby nie powstały normy nieformalne.",
      "Ukrywanie sukcesów zespołu, aby uniknąć nadmiernej spójności."
    ],
    explanation: "Lider powinien przypominać pracownikom o zaletach zespołu i wspierać ich utrzymanie."
  },
  {
    id: 34,
    source: SOURCES.TEAM,
    question: "Które stwierdzenie najlepiej wyjaśnia znaczenie odpowiedzialności za grupę?",
    correct: "Jednostka uwzględnia konsekwencje swoich działań dla całego zespołu.",
    distractors: [
      "Jednostka odpowiada tylko za własne zadania, niezależnie od celu grupy.",
      "Odpowiedzialność przejmuje wyłącznie lider formalny.",
      "Wysoka spójność automatycznie znosi odpowiedzialność osobistą."
    ],
    explanation: "Poczucie odpowiedzialności za grupę jest jednym z warunków efektywnej współpracy zespołowej."
  },
  {
    id: 35,
    source: SOURCES.TEAM,
    question: "Które rozumienie konfliktu wewnętrznego w dużej grupie jest najbardziej trafne?",
    correct: "Podgrupy mogą tworzyć sprzeczne interesy i utrudniać kierowanie całością.",
    distractors: [
      "Podgrupy zawsze zwiększają spójność całej grupy i eliminują napięcia.",
      "Konflikt wewnętrzny wynika wyłącznie z braku formalnego regulaminu.",
      "Duża liczebność usuwa konflikt, bo rozprasza różnice między członkami."
    ],
    explanation: "Większe grupy mogą tworzyć podgrupy, a te mogą utrudniać zarządzanie i sprzyjać konfliktom."
  },
  {
    id: 36,
    source: SOURCES.TEAM,
    question: "Dlaczego grupa może wybrać rozwiązanie gorsze niż najlepsza propozycja jednostki?",
    correct: "Bo nacisk statusu, konformizm lub myślenie grupowe mogą zniekształcić ocenę argumentów.",
    distractors: [
      "Bo decyzje grupowe zawsze są mniej trafne niż indywidualne.",
      "Bo jednostka zawsze ma pełniejszy dostęp do informacji niż grupa.",
      "Bo grupa nigdy nie korzysta z doświadczeń swoich członków."
    ],
    explanation: "Materiał pokazuje, że procesy grupowe mogą zarówno pomagać, jak i zakłócać wybór najlepszego rozwiązania."
  },
  {
    id: 37,
    source: SOURCES.TEAM,
    question: "Co jest pierwszym krokiem do ograniczenia pułapek decyzji grupowych?",
    correct: "Uświadomienie sobie mechanizmów, które zakłócają pracę grupy.",
    distractors: [
      "Całkowita rezygnacja z decyzji zespołowych na rzecz decyzji jednoosobowych.",
      "Zwiększenie liczby członków grupy niezależnie od rodzaju problemu.",
      "Zastąpienie dyskusji głosowaniem bez wcześniejszej analizy."
    ],
    explanation: "Materiał podkreśla, że samoświadomość i poznanie przeszkód jest pierwszym etapem poprawy."
  },
  {
    id: 38,
    source: SOURCES.TEAM,
    question: "Kiedy praca zespołowa jest szczególnie uzasadniona?",
    correct: "Gdy problem wymaga współzależnych kompetencji, wymiany informacji i wspólnego dochodzenia do rozwiązania.",
    distractors: [
      "Gdy zadanie jest całkowicie rutynowe i wymaga jedynie mechanicznego powtórzenia.",
      "Gdy celem jest ukrycie indywidualnej odpowiedzialności za jakość wykonania.",
      "Gdy grupa nie posiada wspólnego celu ani norm regulujących współpracę."
    ],
    explanation: "Zespół jest wartościowy szczególnie wtedy, gdy można wykorzystać uzupełniające się kompetencje członków."
  },

  {
    id: 39,
    source: SOURCES.TIME,
    question: "Które ujęcie najlepiej oddaje sens zarządzania czasem?",
    correct: "Świadome kierowanie sobą i zadaniami w warunkach niekontrolowanego upływu czasu.",
    distractors: [
      "Kontrolowanie obiektywnego tempa upływu czasu przez szczegółowe planowanie.",
      "Wypełnianie całego dnia zadaniami, aby nie pozostawić wolnej przestrzeni.",
      "Eliminowanie komunikacji z innymi jako podstawowy warunek produktywności."
    ],
    explanation: "Materiał podkreśla, że sam czas nie podlega zarządzaniu; zarządzamy własnym działaniem."
  },
  {
    id: 40,
    source: SOURCES.TIME,
    question: "Dlaczego zarządzanie czasem można rozumieć jako element samodyscypliny?",
    correct: "Wymaga konsekwentnego stosowania zasad, technik pracy i priorytetów.",
    distractors: [
      "Opiera się na spontanicznym reagowaniu na wszystkie sprawy pojawiające się w ciągu dnia.",
      "Polega na unikaniu planowania, aby nie ograniczać naturalnej energii działania.",
      "Wymaga przede wszystkim porządku materialnego, a nie decyzji dotyczących zadań."
    ],
    explanation: "Zarządzanie czasem wymaga świadomego kierowania działaniami i konsekwencji w stosowaniu technik organizacji pracy."
  },
  {
    id: 41,
    source: SOURCES.TIME,
    question: "Które zjawisko najczęściej prowadzi do poczucia chaosu czasowego?",
    correct: "Równoczesne rozpoczynanie wielu spraw bez ich domykania.",
    distractors: [
      "Dzielenie dużych zadań na mniejsze elementy wykonawcze.",
      "Nadawanie zadaniom rang według ważności i terminu.",
      "Pozostawianie rezerwy na zdarzenia nieprzewidziane."
    ],
    explanation: "Materiał wskazuje, że robienie wielu rzeczy naraz i niedoprowadzanie ich do końca budzi poczucie popłochu."
  },
  {
    id: 42,
    source: SOURCES.TIME,
    question: "Czym różni się czas obiektywny od subiektywnego?",
    correct: "Obiektywny płynie stale, subiektywny zależy od przeżywania wykonywanej czynności.",
    distractors: [
      "Obiektywny zależy od emocji, subiektywny od zegara i kalendarza.",
      "Oba rodzaje czasu można kontrolować przez skracanie przerw.",
      "Subiektywny dotyczy tylko pracy, a obiektywny tylko odpoczynku."
    ],
    explanation: "Czas obiektywny jest stały, natomiast czas subiektywny może się dłużyć lub przyspieszać w zależności od aktywności."
  },
  {
    id: 43,
    source: SOURCES.TIME,
    question: "Dlaczego komunikacja może stać się pożeraczem czasu?",
    correct: "Inni ludzie mogą narzucać własne priorytety, przerywając realizację naszego planu.",
    distractors: [
      "Każda komunikacja jest z definicji niepotrzebna w pracy zawodowej.",
      "Rozmowy zawsze dotyczą spraw pilnych i ważnych jednocześnie.",
      "Kontakt z innymi automatycznie zwiększa jakość planowania."
    ],
    explanation: "Inni nie znają naszych priorytetów i mogą zajmować czas sprawami ważnymi głównie dla nich."
  },
  {
    id: 44,
    source: SOURCES.TIME,
    question: "Jaką rolę pełni asertywność w zarządzaniu czasem?",
    correct: "Chroni plan działania przed dezorganizacją wynikającą z nieuzasadnionych próśb.",
    distractors: [
      "Pozwala ignorować wszystkie komunikaty, także te związane z zadaniami typu A.",
      "Zastępuje potrzebę ustalania priorytetów i planowania dnia pracy.",
      "Służy do przerzucania własnych zadań na innych bez negocjacji."
    ],
    explanation: "Asertywność umożliwia odmawianie bez poczucia winy i bez fałszywej uprzejmości niszczącej plan dnia."
  },
  {
    id: 45,
    source: SOURCES.TIME,
    question: "Dlaczego lista zadań może redukować stres?",
    correct: "Porządkuje obowiązki i pozwala wybrać sprawy najważniejsze.",
    distractors: [
      "Usuwa konieczność wykonywania zadań o niższym priorytecie.",
      "Powoduje, że wszystkie zadania stają się równie pilne.",
      "Zastępuje odpoczynek i regenerację po pracy umysłowej."
    ],
    explanation: "Lista pomaga zobaczyć zadania i uporządkować je według ważności, co zmniejsza napięcie."
  },
  {
    id: 46,
    source: SOURCES.TIME,
    question: "Kiedy sama lista zadań może być niewystarczająca?",
    correct: "Gdy nie zawiera hierarchii ważności i nie wskazuje kolejności działania.",
    distractors: [
      "Gdy obejmuje zarówno zadania zawodowe, jak i prywatne.",
      "Gdy została przygotowana po przyjściu do pracy.",
      "Gdy dzieli duże zadania na mniejsze kroki."
    ],
    explanation: "Lista bez priorytetów może jedynie pokazać nadmiar obowiązków, zwiększając frustrację."
  },
  {
    id: 47,
    source: SOURCES.TIME,
    question: "Co oznacza zasada 60/40 w planowaniu dnia?",
    correct: "Należy planować tylko część czasu, zostawiając przestrzeń na zakłócenia i spontaniczne działania.",
    distractors: [
      "Należy planować cały dzień, ale wykonywać tylko sześćdziesiąt procent zadań.",
      "Należy przeznaczyć większość czasu na przerwy, a mniejszość na pracę.",
      "Należy uznać czterdzieści procent zadań za nieważne i odrzucić je."
    ],
    explanation: "Reguła 60/40 chroni przed przesadnym planowaniem i uwzględnia nieprzewidywalność dnia."
  },
  {
    id: 48,
    source: SOURCES.TIME,
    question: "Dlaczego zaplanowanie całego dnia pracy może zwiększać stres?",
    correct: "Nie zostawia miejsca na zdarzenia nieprzewidziane, więc łatwo tworzy poczucie porażki.",
    distractors: [
      "Ogranicza liczbę pożeraczy czasu i przez to podnosi wymagania organizacyjne.",
      "Powoduje, że zadania typu C są wykonywane przed zadaniami typu A.",
      "Zmusza do dzielenia dużych zadań na mniejsze elementy."
    ],
    explanation: "Pełne wypełnienie planu ignoruje zakłócenia, co sprzyja frustracji, gdy plan okazuje się nierealny."
  },
  {
    id: 49,
    source: SOURCES.TIME,
    question: "Co oznacza zasada „pilne nie znaczy ważne”?",
    correct: "Presja czasu nie przesądza jeszcze o realnej wartości zadania.",
    distractors: [
      "Sprawy pilne należy zawsze odkładać, bo są cudzymi priorytetami.",
      "Sprawy ważne nie powinny mieć terminów realizacji.",
      "Najważniejsze są zawsze zadania o najkrótszym terminie."
    ],
    explanation: "Pilność odnosi się do czasu, a ważność do wartości zadania wobec celów."
  },
  {
    id: 50,
    source: SOURCES.TIME,
    question: "Co jest sednem metody ABC?",
    correct: "Porządkowanie zadań według poziomu wartości i znaczenia.",
    distractors: [
      "Wykonywanie zadań wyłącznie w kolejności ich pojawiania się.",
      "Odrzucanie wszystkich zadań oznaczonych jako C.",
      "Planowanie wyłącznie czynności rutynowych i łatwych."
    ],
    explanation: "Metoda ABC służy wartościowaniu zadań: A są najważniejsze, B średnie, C najmniej ważne."
  },
  {
    id: 51,
    source: SOURCES.TIME,
    question: "Jak należy traktować zadania typu C?",
    correct: "Jako zadania mniej angażujące, które nie powinny wypierać spraw najważniejszych.",
    distractors: [
      "Jako zadania strategiczne wymagające największej koncentracji.",
      "Jako zadania, które należy zawsze usunąć z planu dnia.",
      "Jako zadania pilne i ważne, które tworzą podstawę zarządzania sobą."
    ],
    explanation: "Zadania C są mniej wartościowe i rutynowe, ale nie muszą być automatycznie pomijane."
  },
  {
    id: 52,
    source: SOURCES.TIME,
    question: "Dlaczego termin zakończenia jest ważny przy priorytetyzacji?",
    correct: "Może zmienić kolejność zadań, jeśli termin jest nieprzekraczalny.",
    distractors: [
      "Zawsze obniża znaczenie zadania, bo ważność jest niezależna od czasu.",
      "Dotyczy tylko zadań łatwych i rutynowych.",
      "Zastępuje analizę wartości zadania dla celu."
    ],
    explanation: "Zadanie ważne, ale odległe w czasie, nie zawsze ma pierwszeństwo przed zadaniem z twardym terminem."
  },
  {
    id: 53,
    source: SOURCES.TIME,
    question: "Czym różni się skowronek od sowy w organizacji pracy?",
    correct: "Różni się naturalnym rytmem najwyższej sprawności psychofizycznej.",
    distractors: [
      "Różni się poziomem odpowiedzialności i ogólną jakością wykonywania zadań.",
      "Różni się zdolnością do stosowania priorytetów ABC.",
      "Różni się podatnością na wszystkie pożeracze czasu."
    ],
    explanation: "Materiał nie wartościuje tych typów jako lepszych lub gorszych; wskazuje różnice rytmu aktywności."
  },
  {
    id: 54,
    source: SOURCES.TIME,
    question: "Jak najlepiej wykorzystać własny rytm sprawności psychofizycznej?",
    correct: "Najtrudniejsze zadania planować na okresy najwyższej wydajności.",
    distractors: [
      "Najtrudniejsze zadania wykonywać w okresach spadku energii.",
      "Zadania typu A przenosić na czas po posiłku.",
      "Ignorować rytm dnia, jeśli lista zadań została przygotowana rano."
    ],
    explanation: "Zadania wymagające koncentracji powinny przypadać na momenty najwyższej sprawności."
  },
  {
    id: 55,
    source: SOURCES.TIME,
    question: "Kiedy najlepiej wykonywać zadania typu A według krzywej aktywności?",
    correct: "W okresie najwyższej sprawności, zwykle przed południem lub około południa.",
    distractors: [
      "W okresie spadku energii po posiłku.",
      "Wyłącznie pod koniec dnia pracy.",
      "W czasie największej liczby zakłóceń."
    ],
    explanation: "Zadania A wymagają największego skupienia, dlatego powinny być wykonywane w szczycie aktywności."
  },
  {
    id: 56,
    source: SOURCES.TIME,
    question: "Dlaczego zadania typu C pasują do okresu spadku energii?",
    correct: "Są rutynowe i wymagają mniejszego zaangażowania poznawczego.",
    distractors: [
      "Są najważniejsze i dlatego powinny być wykonywane mimo zmęczenia.",
      "Wymagają największego skupienia oraz najniższego poziomu zakłóceń.",
      "Zawsze mają nieprzekraczalny termin i wypierają zadania A."
    ],
    explanation: "Zadania C angażują w mniejszym stopniu, dlatego nadają się na czas niższej wydajności."
  },
  {
    id: 57,
    source: SOURCES.TIME,
    question: "Czym jest „cicha godzina” w zarządzaniu czasem?",
    correct: "Okresem nieprzerwanej pracy przeznaczonym na zadania wymagające koncentracji.",
    distractors: [
      "Czasem spontanicznych rozmów służących rozładowaniu napięcia.",
      "Przerwą regeneracyjną po zakończeniu dziewięćdziesięciu minut pracy.",
      "Blokiem na zadania pilne, ale nieważne."
    ],
    explanation: "Cicha godzina ogranicza zakłócenia i podnosi wydajność pracy nad zadaniami typu A."
  },
  {
    id: 58,
    source: SOURCES.TIME,
    question: "Jaki jest sens przerw w pracy umysłowej?",
    correct: "Przywracają energię, zanim koncentracja spadnie do zera.",
    distractors: [
      "Służą do wydłużania czasu pracy bez wpływu na sprawność.",
      "Powinny zaczynać się dopiero po całkowitym wyczerpaniu.",
      "Są stratą czasu, jeśli plan dnia jest dobrze przygotowany."
    ],
    explanation: "Przerwa jest elementem efektywności, a nie stratą czasu. Powinna pojawić się jeszcze przy relatywnie dobrej wydajności."
  },
  {
    id: 59,
    source: SOURCES.TIME,
    question: "Jaka długość przerwy jest w materiale uznana za najbardziej efektywną?",
    correct: "Krótka przerwa, zasadniczo nie dłuższa niż około dziesięć minut.",
    distractors: [
      "Przerwa tak długa, aby całkowicie oderwać się od planu dnia.",
      "Przerwa minimum dziewięćdziesięciominutowa po każdym zadaniu.",
      "Brak przerw, jeśli zadania mają wysoki priorytet."
    ],
    explanation: "Materiał wskazuje, że optymalny efekt przerwy pojawia się do około 10 minut, później spada."
  },
  {
    id: 60,
    source: SOURCES.TIME,
    question: "Czym jest ćwiartka II w macierzy pilności i ważności?",
    correct: "Obszarem spraw ważnych, lecz niepilnych, związanych z planowaniem i rozwojem.",
    distractors: [
      "Obszarem spraw pilnych i ważnych, które nie pozwalają na prewencję.",
      "Obszarem spraw pilnych, ale nieważnych, tworzących iluzję znaczenia.",
      "Obszarem spraw niepilnych i nieważnych, pełnym pożeraczy czasu."
    ],
    explanation: "Ćwiartka II jest najważniejsza dla zarządzania sobą, bo obejmuje przygotowanie, rozwój i zapobieganie kryzysom."
  },
  {
    id: 61,
    source: SOURCES.TIME,
    question: "Dlaczego ćwiartka II jest kluczowa dla efektywności?",
    correct: "Zmniejsza liczbę przyszłych kryzysów przez przygotowanie, rozwój i zapobieganie.",
    distractors: [
      "Pozwala skupić się na cudzych pilnych sprawach i oczekiwaniach.",
      "Obejmuje działania niepilne i nieważne, które pomagają odciążyć psychikę.",
      "Zastępuje wszystkie zadania typu A zadaniami rutynowymi."
    ],
    explanation: "Im więcej świadomej pracy w ćwiartce II, tym mniej spraw przechodzi później do ćwiartki I."
  },
  {
    id: 62,
    source: SOURCES.TIME,
    question: "Co charakteryzuje ćwiartkę III?",
    correct: "Pilność bez rzeczywistej ważności, często związana z cudzymi priorytetami.",
    distractors: [
      "Ważność bez pilności, związana z rozwojem i przygotowaniem.",
      "Pilność i ważność, wymagające natychmiastowej reakcji kryzysowej.",
      "Brak pilności i ważności, typowy dla ucieczki w pożeracze czasu."
    ],
    explanation: "Ćwiartka III jest nazywana ćwiartką ułudy, bo sprawy pilne mogą tylko wyglądać na ważne."
  },
  {
    id: 63,
    source: SOURCES.TIME,
    question: "Co oznacza ćwiartka IV?",
    correct: "Sprawy niepilne i nieważne, które pochłaniają czas bez realnej wartości.",
    distractors: [
      "Sprawy ważne i niepilne, wymagające samodyscypliny.",
      "Sprawy pilne i ważne, które tworzą centrum kryzysu.",
      "Sprawy pilne, ale nieważne, wynikające z presji otoczenia."
    ],
    explanation: "Ćwiartka IV obejmuje typowe pożeracze czasu i nie powinna dominować w planie dnia."
  },
  {
    id: 64,
    source: SOURCES.TIME,
    question: "Jak zaniedbywanie ćwiartki II wpływa na ćwiartkę I?",
    correct: "Może powiększać liczbę spraw pilnych i ważnych, prowadząc do stresu.",
    distractors: [
      "Zmniejsza liczbę kryzysów, ponieważ ogranicza czas planowania.",
      "Przenosi zadania niepilne i nieważne do obszaru rozwoju.",
      "Nie wpływa na ćwiartkę I, bo pilność i ważność są niezależne."
    ],
    explanation: "Brak planowania, zapobiegania i przygotowania powoduje, że więcej spraw staje się kryzysami."
  },
  {
    id: 65,
    source: SOURCES.TIME,
    question: "Co najlepiej opisuje pożeracze czasu?",
    correct: "Czynności lub zakłócenia, które zabierają czas bez adekwatnego wkładu w cele.",
    distractors: [
      "Wszystkie przerwy, nawet krótkie i zaplanowane regeneracyjnie.",
      "Zadania typu A wykonywane w czasie najwyższej sprawności.",
      "Każde spotkanie, niezależnie od celu i jakości przygotowania."
    ],
    explanation: "Pożeracze czasu mogą mieć postać zakłóceń, niepotrzebnych aktywności lub ucieczki w sprawy nieważne."
  },
  {
    id: 66,
    source: SOURCES.TIME,
    question: "Dlaczego planowanie powinno mieć punkt optymalny?",
    correct: "Bo po pewnym czasie dodatkowe planowanie przestaje zwiększać efektywność.",
    distractors: [
      "Bo planowanie jest użyteczne tylko wtedy, gdy zajmuje większość dnia.",
      "Bo planowanie nie ma związku z realizacją obowiązków.",
      "Bo każde planowanie ogranicza motywację do działania."
    ],
    explanation: "Materiał ostrzega przed przesadnym planowaniem, które samo staje się stratą czasu."
  },
  {
    id: 67,
    source: SOURCES.TIME,
    question: "Jak najlepiej postępować z zadaniem bardzo dużym?",
    correct: "Podzielić je na mniejsze części aż stanie się możliwe do rozpoczęcia i kontroli.",
    distractors: [
      "Odkładać je do czasu, aż stanie się pilne i wymusi działanie.",
      "Wykonywać je tylko w okresie spadku energii po posiłku.",
      "Usunąć z listy zadań, jeśli nie mieści się w jednym bloku pracy."
    ],
    explanation: "Dzielenie dużych zadań ogranicza przytłoczenie i ułatwia realne działanie."
  },
  {
    id: 68,
    source: SOURCES.TIME,
    question: "Dlaczego praca po godzinach często jest sygnałem złej organizacji dnia?",
    correct: "Może oznaczać, że właściwa praca została wyparta przez zakłócenia w godzinach urzędowania.",
    distractors: [
      "Zawsze dowodzi wysokiej motywacji i najlepszego wykorzystania rytmu psychofizycznego.",
      "Jest naturalnym skutkiem stosowania reguły 60/40 w planowaniu.",
      "Świadczy o tym, że zadania typu C zostały wykonane w najlepszym czasie."
    ],
    explanation: "Materiał opisuje menedżerów, którzy przez zakłócenia wykonują właściwą pracę dopiero po godzinach."
  },
  {
    id: 69,
    source: SOURCES.TIME,
    question: "Które działanie najlepiej chroni przed realizowaniem cudzych priorytetów?",
    correct: "Asertywne odmawianie i jasne trzymanie się własnych priorytetów.",
    distractors: [
      "Stałe reagowanie na wszystkie sprawy pilne zgłaszane przez otoczenie.",
      "Rezygnacja z listy zadań, aby zachować większą elastyczność.",
      "Planowanie całego dnia bez rezerwy na sytuacje nieoczekiwane."
    ],
    explanation: "Cudze priorytety często pojawiają się jako pilne prośby. Asertywność pomaga nie oddać im całego dnia."
  },
  {
    id: 70,
    source: SOURCES.TIME,
    question: "Co oznacza skuteczne balansowanie między pracą a życiem prywatnym w kontekście materiału?",
    correct: "Świadome kierowanie czasem tak, aby obowiązki nie wypierały całkowicie ważnych obszarów życia.",
    distractors: [
      "Odkładanie spraw zawodowych do momentu, gdy staną się kryzysami.",
      "Planowanie wyłącznie aktywności zawodowych i usuwanie przyjemności.",
      "Traktowanie odpoczynku jako pożeracza czasu niezależnie od sytuacji."
    ],
    explanation: "Zarządzanie czasem ma wspierać satysfakcję i równowagę, nie przesadną pedanterię."
  },
  {
    id: 71,
    source: SOURCES.TIME,
    question: "Która strategia najlepiej odpowiada zasadzie pracy z własną energią?",
    correct: "Dopasować trudność zadań do naturalnych wyżów i niżów wydajności.",
    distractors: [
      "Ignorować zmęczenie, jeśli zadanie ma wysoki priorytet.",
      "Najważniejsze zadania wykonywać zawsze po obiedzie.",
      "Stosować identyczny rozkład dnia niezależnie od rytmu osoby."
    ],
    explanation: "Materiał podkreśla wahania sprawności psychofizycznej i potrzebę planowania zgodnego z nimi."
  },
  {
    id: 72,
    source: SOURCES.TIME,
    question: "Co najlepiej odróżnia zadania typu A od typu B?",
    correct: "Zadania A wymagają najwyższej koncentracji i mają najwyższą wartość.",
    distractors: [
      "Zadania A są zawsze rutynowe, a zadania B zawsze mechaniczne.",
      "Zadania B powinny być wykonywane wyłącznie w czasie najniższej energii.",
      "Zadania A są mniej ważne, ale bardziej pilne niż zadania B."
    ],
    explanation: "Zadania A są najbardziej wartościowe i wymagające, a B mają umiarkowany poziom trudności."
  },
  {
    id: 73,
    source: SOURCES.TIME,
    question: "Dlaczego krótkie przerwy powinny być planowane regularnie?",
    correct: "Pomagają utrzymać koncentrację i zapobiegają spadkowi wydajności.",
    distractors: [
      "Pozwalają zastąpić zadania ważne sprawami spontanicznymi.",
      "Eliminują potrzebę ustalania priorytetów w ciągu dnia.",
      "Są skuteczne tylko wtedy, gdy trwają dłużej niż faza pracy."
    ],
    explanation: "Przerwy są elementem pracy efektywnej, ponieważ człowiek nie może pracować umysłowo bez końca."
  },
  {
    id: 74,
    source: SOURCES.TIME,
    question: "Który przykład najlepiej pasuje do ćwiartki II?",
    correct: "Rozwój kompetencji, przygotowanie, budowanie relacji i zapobieganie problemom.",
    distractors: [
      "Nagłe kryzysy wymagające natychmiastowej reakcji.",
      "Telefony i wizyty narzucające cudze priorytety.",
      "Bezmyślne aktywności wykonywane z przyzwyczajenia."
    ],
    explanation: "Ćwiartka II obejmuje działania ważne, ale niepilne, które rozwijają zdolność działania."
  },
  {
    id: 75,
    source: SOURCES.TIME,
    question: "Co jest najważniejszym warunkiem poprawy zarządzania czasem?",
    correct: "Motywacja do zmiany i konsekwentne wdrażanie technik organizacji pracy.",
    distractors: [
      "Samo poznanie narzędzi bez zmiany nawyków działania.",
      "Całkowite unikanie komunikacji z otoczeniem zawodowym.",
      "Planowanie wszystkich minut dnia bez miejsca na zakłócenia."
    ],
    explanation: "Punktem wyjścia jest pragnienie postępu oraz praktyczne stosowanie zasad samodyscypliny."
  },

  {
    id: 76,
    source: SOURCES.COMM,
    question: "Kiedy komunikacja interpersonalna jest efektywna?",
    correct: "Gdy odbiorca rozumie treść zgodnie z intencją nadawcy.",
    distractors: [
      "Gdy nadawca przekazał komunikat, niezależnie od jego zrozumienia.",
      "Gdy komunikat jest formalny i nie zawiera elementów emocjonalnych.",
      "Gdy odbiorca interpretuje przekaz według własnych schematów."
    ],
    explanation: "Efektywność komunikacji zależy od zgodności między intencją nadawcy a rozumieniem odbiorcy."
  },
  {
    id: 77,
    source: SOURCES.COMM,
    question: "Dlaczego kierownik potrzebuje różnych stylów komunikowania się?",
    correct: "Ponieważ różni odbiorcy mają odmienne role, potrzeby informacyjne i konteksty działania.",
    distractors: [
      "Ponieważ skuteczna komunikacja polega na stosowaniu zawsze tego samego komunikatu.",
      "Ponieważ podwładni i przełożeni powinni otrzymywać identyczne informacje w tej samej formie.",
      "Ponieważ styl komunikacji nie zależy od relacji, lecz wyłącznie od długości wypowiedzi."
    ],
    explanation: "Kierownik komunikuje się z różnymi osobami i musi dostosowywać język, formę oraz moment przekazu."
  },
  {
    id: 78,
    source: SOURCES.COMM,
    question: "Co oznacza, że komunikacja jest jednocześnie procesem i treścią?",
    correct: "Liczy się zarówno to, co przekazujemy, jak i sposób przekazywania komunikatu.",
    distractors: [
      "Treść jest ważna wyłącznie w komunikacji pisemnej, a proces tylko w ustnej.",
      "Proces komunikacji zastępuje treść, jeśli nadawca ma odpowiedni autorytet.",
      "Treść komunikatu jest niezależna od tonu, płynności i sytuacji rozmowy."
    ],
    explanation: "Materiał rozróżnia proces komunikowania się i treść przekazu, wskazując znaczenie obu elementów."
  },
  {
    id: 79,
    source: SOURCES.COMM,
    question: "Na czym polega efekt aureoli?",
    correct: "Pozytywne wrażenie w jednej sferze prowadzi do przypisywania osobie innych pozytywnych cech.",
    distractors: [
      "Ostatnia informacja zawsze całkowicie usuwa znaczenie pierwszego wrażenia.",
      "Negatywne informacje są zawsze zapamiętywane lepiej niż pozytywne.",
      "Częsty kontakt obniża sympatię do osoby mimo przyjemnych doświadczeń."
    ],
    explanation: "Efekt aureoli polega na przenoszeniu pozytywnej oceny na inne cechy osoby."
  },
  {
    id: 80,
    source: SOURCES.COMM,
    question: "Dlaczego pierwsze wrażenie jest trudne do zmiany?",
    correct: "Ponieważ tworzy schemat interpretacyjny dla późniejszych informacji.",
    distractors: [
      "Ponieważ późniejsze informacje są zawsze obiektywnie mniej ważne.",
      "Ponieważ ludzie nie korzystają ze schematów poznawczych.",
      "Ponieważ pierwsze wrażenie powstaje wyłącznie na podstawie słów."
    ],
    explanation: "Pierwsze wrażenie wpływa na interpretację dalszych zachowań i utrwala ocenę osoby."
  },
  {
    id: 81,
    source: SOURCES.COMM,
    question: "Czym jest efekt komety?",
    correct: "Utrzymywaniem się wpływu pierwszego wrażenia na późniejszy odbiór osoby.",
    distractors: [
      "Silniejszym wpływem informacji najnowszych niż początkowych.",
      "Przypisywaniem innym własnych negatywnych cech.",
      "Wzrostem sympatii wyłącznie przez częstą ekspozycję."
    ],
    explanation: "Efekt komety oznacza, że pierwsze wrażenie „ciągnie się” za osobą."
  },
  {
    id: 82,
    source: SOURCES.COMM,
    question: "Czym są schematy poznawcze?",
    correct: "Strukturami organizującymi wiedzę, które wpływają na selekcję i interpretację informacji.",
    distractors: [
      "Formalnymi zasadami komunikacji pionowej i poziomej w organizacji.",
      "Świadomymi technikami manipulowania odbiorcą w sytuacji perswazji.",
      "Zbiorem sygnałów niewerbalnych związanych wyłącznie z mimiką."
    ],
    explanation: "Schematy pomagają porządkować wiedzę, ale mogą prowadzić do uproszczonych ocen."
  },
  {
    id: 83,
    source: SOURCES.COMM,
    question: "Na czym polega efekt uporczywości?",
    correct: "Przekonania utrzymują się mimo podważenia danych, które je wspierały.",
    distractors: [
      "Ostatnie informacje zawsze całkowicie zmieniają wcześniejsze przekonania.",
      "Ludzie łatwo rezygnują z raz przyjętych schematów interpretacji.",
      "Częsty kontakt z osobą automatycznie usuwa wszystkie stereotypy."
    ],
    explanation: "Efekt uporczywości wyjaśnia trwałość przekonań mimo racjonalnych kontrargumentów."
  },
  {
    id: 84,
    source: SOURCES.COMM,
    question: "Czym jest samospełniające się proroctwo?",
    correct: "Oczekiwania wobec osoby wpływają na zachowanie wobec niej i mogą wywołać oczekiwane reakcje.",
    distractors: [
      "Pierwsza informacja zostaje zawsze wyparta przez informację ostatnią.",
      "Osoba automatycznie zachowuje się niezależnie od sposobu traktowania.",
      "Każde przekonanie o człowieku znika, gdy pojawią się dane przeciwne."
    ],
    explanation: "Oczekiwania mogą wpływać na nasze działania wobec osoby, tworząc warunki do potwierdzenia tych oczekiwań."
  },
  {
    id: 85,
    source: SOURCES.COMM,
    question: "Kiedy efekt pierwszeństwa będzie szczególnie istotny?",
    correct: "Gdy pierwsza informacja tworzy punkt odniesienia dla późniejszych ocen.",
    distractors: [
      "Gdy decyzja następuje natychmiast po informacji ostatniej.",
      "Gdy odbiorca nigdy nie tworzy ogólnego wrażenia.",
      "Gdy wszystkie informacje są prezentowane bez żadnej kolejności."
    ],
    explanation: "Efekt pierwszeństwa oznacza silniejszy wpływ informacji otrzymanych wcześniej."
  },
  {
    id: 86,
    source: SOURCES.COMM,
    question: "Na czym polega efekt świeżości?",
    correct: "Informacje otrzymane jako ostatnie mogą silniej wpływać na ocenę.",
    distractors: [
      "Pierwsze informacje zawsze dominują niezależnie od sytuacji.",
      "Częste kontakty osłabiają sympatię do rozmówcy.",
      "Schematy poznawcze uniemożliwiają zapamiętanie końca przekazu."
    ],
    explanation: "Efekt świeżości polega na silniejszym oddziaływaniu informacji najnowszych."
  },
  {
    id: 87,
    source: SOURCES.COMM,
    question: "Dlaczego w prezentacjach znaczenie ma kolejność wystąpienia?",
    correct: "Początek i koniec serii są zwykle lepiej zapamiętywane niż środek.",
    distractors: [
      "Środkowe wystąpienia zawsze wzmacniają autorytet mówcy.",
      "Odbiorcy najlepiej pamiętają komunikaty neutralne i pozbawione struktury.",
      "Kolejność działa tylko wtedy, gdy treść wystąpień jest nieistotna."
    ],
    explanation: "Materiał wiąże skuteczność perswazyjną z efektem pierwszeństwa i świeżości."
  },
  {
    id: 88,
    source: SOURCES.COMM,
    question: "Czym jest efekt częstości kontaktów?",
    correct: "Częstsze kontakty mogą zwiększać prawdopodobieństwo sympatii.",
    distractors: [
      "Częstsze kontakty zawsze zmniejszają zaufanie do rozmówcy.",
      "Sympatia powstaje wyłącznie po pierwszym kontakcie.",
      "Częstotliwość kontaktu nie ma związku z relacjami interpersonalnymi."
    ],
    explanation: "Materiał wskazuje, że częstsze kontakty mogą zwiększać skłonność do polubienia danej osoby."
  },
  {
    id: 89,
    source: SOURCES.COMM,
    question: "Czym różni się efekt czystej ekspozycji od efektu częstości kontaktów?",
    correct: "Czysta ekspozycja dotyczy wzrostu sympatii przez samą powtarzalną obecność bodźca.",
    distractors: [
      "Czysta ekspozycja wymaga zawsze głębokiej rozmowy i wymiany informacji zwrotnej.",
      "Efekt częstości kontaktów dotyczy wyłącznie przedmiotów, a nie osób.",
      "Oba efekty są przeciwstawne i wzajemnie się wykluczają."
    ],
    explanation: "Efekt czystej ekspozycji oznacza wzrost sympatii wskutek częstszego kontaktu z bodźcem."
  },
  {
    id: 90,
    source: SOURCES.COMM,
    question: "Czym jest projekcja w komunikacji interpersonalnej?",
    correct: "Przypisywaniem innym własnych cech, potrzeb lub nastawień.",
    distractors: [
      "Odbieraniem komunikatu zgodnie z intencją nadawcy.",
      "Powtarzaniem komunikatu w celu ograniczenia szumu.",
      "Dostosowywaniem stylu rozmowy do kanału sensorycznego odbiorcy."
    ],
    explanation: "Projekcja zniekształca ocenę rozmówcy przez przenoszenie na niego własnych treści psychicznych."
  },
  {
    id: 91,
    source: SOURCES.COMM,
    question: "Co składa się na pierwsze wrażenie według materiału?",
    correct: "Wygląd, sposób mówienia i treść słów.",
    distractors: [
      "Wyłącznie kompetencje formalne i doświadczenie zawodowe.",
      "Tylko treść wypowiedzi, bez elementów niewerbalnych.",
      "Jedynie ton głosu i kolejność argumentów."
    ],
    explanation: "Pierwsze wrażenie tworzą: to, co widzimy, jak ktoś mówi i o czym mówi."
  },
  {
    id: 92,
    source: SOURCES.COMM,
    question: "Który czynnik należy do komunikacji werbalnej?",
    correct: "Treść wypowiedzi, akcent i płynność mowy.",
    distractors: [
      "Dystans przestrzenny, aranżacja pomieszczenia i postawa ciała.",
      "Wyłącznie mimika, gesty i kontakt wzrokowy.",
      "Tylko ubiór, wygląd zewnętrzny i zachowanie przestrzenne."
    ],
    explanation: "Komunikacja werbalna opiera się na słowie, ale obejmuje też sposób mówienia, np. akcent i płynność."
  },
  {
    id: 93,
    source: SOURCES.COMM,
    question: "Czym jest komunikacja pionowa skierowana ku dołowi?",
    correct: "Przepływem informacji od przełożonych do podwładnych.",
    distractors: [
      "Wymianą informacji między osobami na tym samym poziomie.",
      "Informowaniem przełożonych przez podwładnych o problemach.",
      "Nieformalną rozmową między pracownikami różnych działów."
    ],
    explanation: "Komunikacja ku dołowi obejmuje polecenia, informacje i komunikaty od przełożonych."
  },
  {
    id: 94,
    source: SOURCES.COMM,
    question: "Czym jest komunikacja pionowa skierowana ku górze?",
    correct: "Przekazywaniem informacji od podwładnych do przełożonych.",
    distractors: [
      "Przekazywaniem poleceń od kierownictwa do pracowników.",
      "Komunikacją między osobami pełniącymi tę samą funkcję.",
      "Komunikacją masową kierowaną do wszystkich odbiorców."
    ],
    explanation: "Komunikacja ku górze obejmuje m.in. raportowanie osiągnięć, problemów i stopnia wykonania zadań."
  },
  {
    id: 95,
    source: SOURCES.COMM,
    question: "Kiedy mamy do czynienia z komunikacją poziomą?",
    correct: "Gdy komunikują się osoby z tej samej grupy lub podobnego poziomu organizacyjnego.",
    distractors: [
      "Gdy przełożony wydaje polecenia podwładnemu.",
      "Gdy podwładny raportuje problem przełożonemu.",
      "Gdy komunikat jest jednostronny i bez sprzężenia zwrotnego."
    ],
    explanation: "Komunikacja pozioma zachodzi między osobami na tym samym lub zbliżonym poziomie."
  },
  {
    id: 96,
    source: SOURCES.COMM,
    question: "Co odróżnia komunikację dwukierunkową od jednokierunkowej?",
    correct: "Obecność sprzężenia zwrotnego.",
    distractors: [
      "Wyłącznie liczba odbiorców komunikatu.",
      "Formalny status nadawcy komunikatu.",
      "Długość komunikatu i kanał przekazu."
    ],
    explanation: "Komunikacja dwukierunkowa zakłada informację zwrotną od odbiorcy."
  },
  {
    id: 97,
    source: SOURCES.COMM,
    question: "Kiedy komunikacja jednokierunkowa może być odpowiednia?",
    correct: "Gdy liczy się szybkość, porządek i łatwość zrozumienia prostego komunikatu.",
    distractors: [
      "Gdy trzeba upewnić się, że odbiorca rozumie złożoną instrukcję.",
      "Gdy nadawca oczekuje kontrpropozycji i doprecyzowania.",
      "Gdy komunikat wymaga negocjacji znaczenia."
    ],
    explanation: "Przy prostych, porządkowych komunikatach komunikacja jednokierunkowa może być sprawniejsza."
  },
  {
    id: 98,
    source: SOURCES.COMM,
    question: "Kiedy komunikacja dwukierunkowa jest szczególnie potrzebna?",
    correct: "Gdy ważna jest dokładność zrozumienia złożonego zadania.",
    distractors: [
      "Gdy komunikat jest prosty i nie wymaga pytań.",
      "Gdy priorytetem jest szybkie ogłoszenie zasad.",
      "Gdy porządek jest ważniejszy niż rozumienie."
    ],
    explanation: "Sprzężenie zwrotne pozwala sprawdzić, czy odbiorca właściwie zrozumiał przekaz."
  },
  {
    id: 99,
    source: SOURCES.COMM,
    question: "Czym są masowe metody komunikacji?",
    correct: "Sposobami przekazywania ogólnych komunikatów szerokiemu gronu odbiorców.",
    distractors: [
      "Indywidualnymi rozmowami dotyczącymi prywatnych zadań pracownika.",
      "Spotkaniami przeznaczonymi wyłącznie dla jednej osoby.",
      "Poufnymi kanałami wymagającymi stałej informacji zwrotnej."
    ],
    explanation: "Metody masowe są przeznaczone do treści ogólnych, kierowanych do wielu odbiorców."
  },
  {
    id: 100,
    source: SOURCES.COMM,
    question: "Kiedy właściwa jest selektywna metoda komunikacji?",
    correct: "Gdy komunikat dotyczy konkretnych osób, ich zadań lub indywidualnych spraw.",
    distractors: [
      "Gdy informacja jest ogólna i przeznaczona dla całej organizacji.",
      "Gdy celem jest szybkie przekazanie prostych zasad wszystkim pracownikom.",
      "Gdy nadawca chce uniknąć dopasowania przekazu do odbiorcy."
    ],
    explanation: "Metody selektywne stosuje się wtedy, gdy komunikat wymaga indywidualnego podejścia."
  },
  {
    id: 101,
    source: SOURCES.COMM,
    question: "Dlaczego metoda selektywna nie zawsze jest lepsza od masowej?",
    correct: "Może niepotrzebnie angażować czas, jeśli komunikat ma charakter ogólny.",
    distractors: [
      "Nie pozwala nigdy na dopasowanie treści do odbiorcy.",
      "Nie może być stosowana w relacji przełożony–podwładny.",
      "Zawsze eliminuje możliwość sprzężenia zwrotnego."
    ],
    explanation: "Dobór metody powinien wynikać z treści i odbiorców, a nie z założenia, że indywidualnie zawsze znaczy lepiej."
  },
  {
    id: 102,
    source: SOURCES.COMM,
    question: "Czym są bariery komunikacyjne?",
    correct: "Czynnikami utrudniającymi zrozumienie przekazu zawartego w wypowiedzi.",
    distractors: [
      "Każdymi elementami komunikacji niewerbalnej niezależnie od kontekstu.",
      "Wyłącznie błędami językowymi po stronie nadawcy.",
      "Formalnymi kanałami przepływu informacji w organizacji."
    ],
    explanation: "Bariery komunikacyjne obejmują wszystko, co utrudnia prawidłowe zrozumienie przekazu."
  },
  {
    id: 103,
    source: SOURCES.COMM,
    question: "Na czym polega redundancja w komunikacji?",
    correct: "Na powtarzaniu lub wzmacnianiu przekazu w celu ograniczenia niepewności.",
    distractors: [
      "Na celowym skracaniu komunikatu do minimum niezależnie od złożoności.",
      "Na usuwaniu informacji zwrotnej, aby nie zaburzać przekazu.",
      "Na zastępowaniu treści komunikatu wyłącznie elementami niewerbalnymi."
    ],
    explanation: "Redundancja przeciwdziała szumowi, ale jej nadmiar może stać się irytujący."
  },
  {
    id: 104,
    source: SOURCES.COMM,
    question: "Dlaczego nadmierna redundancja może być problemem?",
    correct: "Powtarzany zbyt często komunikat może zacząć działać jak szum.",
    distractors: [
      "Każde powtórzenie automatycznie usuwa możliwość nieporozumienia.",
      "Redundancja jest potrzebna wyłącznie w komunikacji pisemnej.",
      "Redundancja wyklucza stosowanie sprzężenia zwrotnego."
    ],
    explanation: "Powtarzanie pomaga do pewnego momentu; później może wywołać znudzenie lub złość."
  },
  {
    id: 105,
    source: SOURCES.COMM,
    question: "Co oznacza wspierający komunikat werbalny?",
    correct: "Taki sposób mówienia, który pozwala być zrozumianym bez dominowania odbiorcy.",
    distractors: [
      "Komunikat maksymalnie stanowczy, niezależny od reakcji drugiej osoby.",
      "Komunikat niejasny, aby odbiorca samodzielnie odkrył intencję.",
      "Komunikat oparty wyłącznie na krytyce i ocenie zachowania."
    ],
    explanation: "Komunikat wspierający pomaga przekazać myśl bez wywoływania poczucia odrzucenia lub zdominowania."
  },
  {
    id: 106,
    source: SOURCES.COMM,
    question: "Co oznacza bezpośredniość komunikatu?",
    correct: "Niewychodzenie z założenia, że inni sami wiedzą, czego potrzebujemy.",
    distractors: [
      "Przekazywanie informacji wyłącznie przez osoby trzecie.",
      "Unikanie nazywania potrzeb, aby nie obciążać odbiorcy.",
      "Odkładanie reakcji do momentu, gdy emocje całkowicie znikną."
    ],
    explanation: "Komunikat bezpośredni oznacza jasne powiedzenie tego, co jest istotne, bez liczenia na domysły."
  },
  {
    id: 107,
    source: SOURCES.COMM,
    question: "Czym jest komunikacja niewerbalna?",
    correct: "Przekazem realizowanym inaczej niż przez same słowa.",
    distractors: [
      "Komunikacją ograniczoną wyłącznie do treści wypowiedzi.",
      "Zawsze świadomym i w pełni kontrolowanym sposobem argumentacji.",
      "Kanałem komunikacji występującym tylko w dokumentach pisemnych."
    ],
    explanation: "Komunikacja niewerbalna obejmuje wygląd, postawę, dystans, gesty, mimikę i sposób mówienia."
  },
  {
    id: 108,
    source: SOURCES.COMM,
    question: "Czym jest forma paralingwistyczna komunikacji niewerbalnej?",
    correct: "Aspektami głosu, takimi jak intonacja, tempo, modulacja i barwa.",
    distractors: [
      "Organizacją przestrzeni między rozmówcami.",
      "Doborem słów ze względu na kulturę organizacyjną.",
      "Formalnym kierunkiem przepływu komunikatu."
    ],
    explanation: "Paralingwistyka dotyczy tego, jak mówimy, a nie tylko tego, co mówimy."
  },
  {
    id: 109,
    source: SOURCES.COMM,
    question: "Czym jest proksemika?",
    correct: "Komunikowaniem znaczeń przez dystans i aranżację przestrzeni.",
    distractors: [
      "Komunikacją przez tempo mówienia i intonację.",
      "Porządkowaniem informacji według ważności.",
      "Powtarzaniem komunikatu dla redukcji szumu."
    ],
    explanation: "Proksemika dotyczy przestrzeni, dystansu i ustawienia rozmówców."
  },
  {
    id: 110,
    source: SOURCES.COMM,
    question: "Dlaczego różne preferencje sensoryczne mogą utrudniać komunikację?",
    correct: "Rozmówcy mogą opisywać doświadczenie w różnych kodach, np. wzrokowym i kinestetycznym.",
    distractors: [
      "Preferencje sensoryczne eliminują potrzebę jasnego komunikatu.",
      "Każdy człowiek używa wyłącznie jednego kanału sensorycznego.",
      "Różnice sensoryczne dotyczą tylko komunikacji pisemnej."
    ],
    explanation: "Jeżeli jedna osoba mówi językiem obrazów, a druga odczuć, przepływ informacji może być słabszy."
  },
  {
    id: 111,
    source: SOURCES.COMM,
    question: "Który zestaw najlepiej opisuje skuteczny komunikat werbalny?",
    correct: "Bezpośredni, natychmiastowy, jasny, szczery i wspierający.",
    distractors: [
      "Odroczony, wieloznaczny, pośredni, oceniający i dominujący.",
      "Formalny, długi, powtarzalny, hierarchiczny i bezosobowy.",
      "Niepełny, sugerujący, defensywny, oparty na domysłach i unikaniu."
    ],
    explanation: "Materiał wymienia te cechy jako zasady skutecznej komunikacji werbalnej."
  },
  {
    id: 112,
    source: SOURCES.COMM,
    question: "Po co tworzyć kulturę sprzyjającą sprzężeniom zwrotnym?",
    correct: "Aby nadawca mógł sprawdzać rozumienie komunikatu przez odbiorcę.",
    distractors: [
      "Aby ograniczyć liczbę pytań i utrzymać komunikację jednokierunkową.",
      "Aby zastąpić jasność komunikatu większą liczbą powtórzeń.",
      "Aby każdy komunikat traktować jako masowy i formalny."
    ],
    explanation: "Sprzężenie zwrotne pomaga wykryć nieporozumienia i doprecyzować przekaz."
  },
  {
    id: 113,
    source: SOURCES.COMM,
    question: "Dlaczego pierwsze wrażenie może być niebezpieczne w ocenie zawodowej?",
    correct: "Może uruchamiać schematy i zniekształcać interpretację późniejszych informacji.",
    distractors: [
      "Zawsze trafnie pokazuje kompetencje i motywację ocenianej osoby.",
      "Działa tylko w relacjach prywatnych, a nie w organizacji.",
      "Nie ma związku z komunikacją niewerbalną ani sposobem mówienia."
    ],
    explanation: "Pierwsze wrażenie może utrwalić błędną ocenę i utrudnić rzetelną współpracę."
  },

  {
    id: 114,
    source: SOURCES.INFL,
    question: "Co łączy reguły wpływu społecznego w ujęciu Cialdiniego?",
    correct: "Wykorzystują automatyczne mechanizmy podejmowania decyzji społecznych.",
    distractors: [
      "Działają wyłącznie wtedy, gdy odbiorca świadomie chce zostać przekonany.",
      "Opierają się tylko na racjonalnej analizie kosztów i korzyści.",
      "Nie mają zastosowania w reklamie, negocjacjach ani relacjach zawodowych."
    ],
    explanation: "Reguły wpływu działają dlatego, że uruchamiają uproszczone i często automatyczne reakcje społeczne."
  },
  {
    id: 115,
    source: SOURCES.INFL,
    question: "Na czym polega reguła wzajemności?",
    correct: "Otrzymane dobro tworzy presję odwzajemnienia.",
    distractors: [
      "Człowiek chętniej ulega osobom podobnym do siebie.",
      "Ludzie traktują rzeczy rzadkie jako bardziej wartościowe.",
      "Autorytet zwiększa posłuszeństwo wobec prośby."
    ],
    explanation: "Reguła wzajemności opiera się na normie rewanżu za otrzymaną przysługę."
  },
  {
    id: 116,
    source: SOURCES.INFL,
    question: "Dlaczego reguła wzajemności może prowadzić do niesprawiedliwej wymiany?",
    correct: "Chęć usunięcia poczucia zobowiązania może skłonić do oddania większej przysługi.",
    distractors: [
      "Odbiorca zawsze dokładnie porównuje wartość otrzymanej i oddawanej przysługi.",
      "Reguła działa tylko wtedy, gdy obie strony wcześniej ustaliły równą wymianę.",
      "Poczucie zobowiązania zwykle całkowicie blokuje uleganie cudzym prośbom."
    ],
    explanation: "Człowiek może zgodzić się na nieproporcjonalny rewanż, aby pozbyć się napięcia zobowiązania."
  },
  {
    id: 117,
    source: SOURCES.INFL,
    question: "Czym jest technika „odmowa — wycofanie”?",
    correct: "Najpierw pojawia się duża prośba, potem mniejsza, która wygląda jak ustępstwo.",
    distractors: [
      "Najpierw oferuje się małą przysługę, a potem prosi o rewanż.",
      "Najpierw buduje się sympatię, a potem ukrywa właściwy cel rozmowy.",
      "Najpierw powołuje się na autorytet, a potem ogranicza dostępność dobra."
    ],
    explanation: "Ta technika wykorzystuje wzajemność ustępstw: skoro jedna strona ustępuje, druga czuje presję ustępstwa."
  },
  {
    id: 118,
    source: SOURCES.INFL,
    question: "Jak najlepiej bronić się przed manipulacyjną wzajemnością?",
    correct: "Rozpoznać, czy przysługa jest realna, czy jest elementem taktyki wpływu.",
    distractors: [
      "Odwzajemniać każdą przysługę natychmiast i możliwie większym kosztem.",
      "Odrzucać każdą pomoc, także tę niezwiązaną z późniejszą prośbą.",
      "Ulegać prośbom tylko wtedy, gdy pochodzą od osób o wysokim statusie."
    ],
    explanation: "Jeśli uznamy przysługę za manipulację, nie musimy traktować jej jako zobowiązania."
  },
  {
    id: 119,
    source: SOURCES.INFL,
    question: "Na czym polega społeczny dowód słuszności?",
    correct: "Zachowania innych stają się wskazówką, co uznać za właściwe.",
    distractors: [
      "Wysoki status nadawcy automatycznie zwiększa wiarygodność komunikatu.",
      "Ograniczona dostępność produktu zwiększa jego subiektywną wartość.",
      "Początkowe zaangażowanie skłania do dalszej konsekwencji."
    ],
    explanation: "Społeczny dowód słuszności działa przez odwołanie do zachowań i przekonań innych ludzi."
  },
  {
    id: 120,
    source: SOURCES.INFL,
    question: "Kiedy społeczny dowód słuszności działa najsilniej?",
    correct: "Gdy sytuacja jest niejasna i obserwowani ludzie są podobni do odbiorcy.",
    distractors: [
      "Gdy odbiorca ma pełną pewność i nie identyfikuje się z grupą odniesienia.",
      "Gdy komunikat pochodzi od osoby o formalnym tytule i wysokim statusie.",
      "Gdy produkt jest trudno dostępny i objęty krótkim terminem zakupu."
    ],
    explanation: "Niepewność i podobieństwo innych osób wzmacniają wpływ społecznego dowodu słuszności."
  },
  {
    id: 121,
    source: SOURCES.INFL,
    question: "Jak ograniczać wpływ społecznego dowodu słuszności?",
    correct: "Nie traktować zachowania innych jako jedynej podstawy decyzji.",
    distractors: [
      "Zakładać, że większość zawsze trafniej ocenia sytuację niż jednostka.",
      "Podejmować decyzję natychmiast, zanim pojawią się wątpliwości.",
      "Opierać się głównie na liczbie osób, które już uległy propozycji."
    ],
    explanation: "Postępowanie innych może być wskazówką, ale nie powinno zastępować samodzielnej oceny."
  },
  {
    id: 122,
    source: SOURCES.INFL,
    question: "Na czym polega reguła lubienia i sympatii?",
    correct: "Chętniej spełniamy prośby osób, które lubimy lub z którymi się identyfikujemy.",
    distractors: [
      "Chętniej spełniamy prośby osób, które mają formalny tytuł.",
      "Chętniej spełniamy prośby, gdy dobro jest ograniczone czasowo.",
      "Chętniej spełniamy prośby po wcześniejszym publicznym zobowiązaniu."
    ],
    explanation: "Sympatia do osoby proszącej zwiększa podatność na jej propozycję."
  },
  {
    id: 123,
    source: SOURCES.INFL,
    question: "Który czynnik wzmacnia regułę lubienia i sympatii?",
    correct: "Podobieństwo, atrakcyjność, komplementy, częsty kontakt i pozytywne skojarzenia.",
    distractors: [
      "Niejasność sytuacji, liczba innych osób i obserwacja zachowań większości.",
      "Formalny tytuł, uniform, symbol statusu i specjalistyczny język.",
      "Limit czasu, ograniczona liczba produktów i rywalizacja o dostęp."
    ],
    explanation: "Materiał wskazuje kilka czynników budujących sympatię, które mogą zwiększać uległość."
  },
  {
    id: 124,
    source: SOURCES.INFL,
    question: "Jak bronić się przed wpływem sympatii?",
    correct: "Oddzielić ocenę osoby od oceny samej propozycji.",
    distractors: [
      "Traktować pozytywne emocje jako wystarczający dowód jakości oferty.",
      "Ulegać tylko wtedy, gdy osoba dodatkowo odwoła się do większości.",
      "Wzmacniać kontakt, dopóki propozycja nie wyda się bardziej atrakcyjna."
    ],
    explanation: "Należy rozpoznać nagły przypływ sympatii i ocenić propozycję niezależnie od osoby."
  },
  {
    id: 125,
    source: SOURCES.INFL,
    question: "Na czym polega wpływ autorytetu?",
    correct: "Skłonność do ulegania osobom uznawanym za kompetentne lub posiadającym symbole kompetencji.",
    distractors: [
      "Skłonność do ulegania większości w sytuacji niepewności.",
      "Skłonność do odwzajemniania otrzymanych przysług.",
      "Skłonność do wybierania dóbr, których dostępność jest ograniczona."
    ],
    explanation: "Autorytet działa przez wiedzę, władzę lub symbole takie jak tytuły, strój i oznaki statusu."
  },
  {
    id: 126,
    source: SOURCES.INFL,
    question: "Dlaczego symbole autorytetu są niebezpieczne poznawczo?",
    correct: "Mogą wywołać uległość nawet wtedy, gdy osoba nie jest rzeczywistym ekspertem.",
    distractors: [
      "Zawsze dokładnie potwierdzają realną wiedzę i uczciwość nadawcy.",
      "Działają tylko wtedy, gdy odbiorca wcześniej zna eksperta osobiście.",
      "Nie wpływają na decyzje, jeśli komunikat dotyczy spraw zawodowych."
    ],
    explanation: "Ludzie mogą reagować na oznaki autorytetu, nie sprawdzając rzeczywistej kompetencji."
  },
  {
    id: 127,
    source: SOURCES.INFL,
    question: "Jak bronić się przed niepożądanym wpływem autorytetu?",
    correct: "Sprawdzić, czy osoba jest rzeczywistym ekspertem i czy można jej zaufać w tej sytuacji.",
    distractors: [
      "Uznawać tytuł i wygląd za wystarczające dowody wiarygodności.",
      "Zakładać, że każdy autorytet jest neutralny wobec własnego interesu.",
      "Odrzucać każdą wypowiedź eksperta bez analizy jej treści."
    ],
    explanation: "Materiał proponuje dwa pytania obronne: o rzeczywistą ekspertyzę i wiarygodność w danej sytuacji."
  },
  {
    id: 128,
    source: SOURCES.INFL,
    question: "Na czym polega reguła niedostępności?",
    correct: "To, co trudniej dostępne, wydaje się bardziej wartościowe.",
    distractors: [
      "To, co popularne, wydaje się słuszne dzięki zachowaniu większości.",
      "To, co poleca ekspert, wydaje się prawdziwe dzięki symbolom statusu.",
      "To, co otrzymaliśmy, wywołuje presję odwzajemnienia."
    ],
    explanation: "Niedostępność zwiększa subiektywną atrakcyjność dobra."
  },
  {
    id: 129,
    source: SOURCES.INFL,
    question: "Kiedy reguła niedostępności szczególnie zwiększa presję decyzji?",
    correct: "Gdy ograniczenie jest świeże albo pojawia się konkurencja o dostęp.",
    distractors: [
      "Gdy produkt jest stale dostępny i nie budzi zainteresowania innych.",
      "Gdy odbiorca nie odczuwa straty ani ryzyka utraty możliwości.",
      "Gdy decyzja nie wiąże się z żadnym wyborem ani ograniczeniem."
    ],
    explanation: "Świeże ograniczenie i rywalizacja wzmacniają reakcję na niedostępność."
  },
  {
    id: 130,
    source: SOURCES.INFL,
    question: "Jak bronić się przed presją niedostępności?",
    correct: "Ochłonąć i ocenić, czy dobro ma realną wartość poza samą trudnością zdobycia.",
    distractors: [
      "Kupować natychmiast, bo ograniczenie zawsze oznacza wysoką jakość.",
      "Ulegać presji tylko wtedy, gdy inni też rywalizują o dostęp.",
      "Traktować emocjonalne pobudzenie jako dowód trafności decyzji."
    ],
    explanation: "Niedostępność wzbudza emocje, dlatego trzeba oddzielić pobudzenie od realnej potrzeby."
  },
  {
    id: 131,
    source: SOURCES.INFL,
    question: "Na czym polega reguła zaangażowania i konsekwencji?",
    correct: "Po podjęciu stanowiska człowiek dąży do zachowań zgodnych z wcześniejszym wyborem.",
    distractors: [
      "Po otrzymaniu przysługi człowiek czuje obowiązek rewanżu.",
      "Po zobaczeniu decyzji większości człowiek uznaje ją za właściwą.",
      "Po kontakcie z autorytetem człowiek automatycznie ufa jego propozycji."
    ],
    explanation: "Ludzie chcą być postrzegani jako konsekwentni, dlatego wcześniejsze zaangażowanie wpływa na późniejsze decyzje."
  },
  {
    id: 132,
    source: SOURCES.INFL,
    question: "Dlaczego małe początkowe zaangażowanie może być skuteczne perswazyjnie?",
    correct: "Tworzy punkt odniesienia dla kolejnych zgodnych decyzji.",
    distractors: [
      "Eliminuje potrzebę spójności między postawą a zachowaniem.",
      "Działa wyłącznie wtedy, gdy odbiorca nie pamięta pierwszej decyzji.",
      "Opiera się przede wszystkim na ograniczonej dostępności produktu."
    ],
    explanation: "Początkowe zobowiązanie ułatwia późniejsze decyzje zgodne z wcześniejszym obrazem siebie."
  },
  {
    id: 133,
    source: SOURCES.INFL,
    question: "Jak bronić się przed pułapką konsekwencji?",
    correct: "Zapytać, czy podjęlibyśmy tę samą decyzję bez presji wcześniejszego zobowiązania.",
    distractors: [
      "Trzymać się każdej decyzji, aby uniknąć poczucia niespójności.",
      "Uznawać dyskomfort za dowód, że trzeba kontynuować działanie.",
      "Ignorować nowe informacje, jeśli są sprzeczne z pierwszym wyborem."
    ],
    explanation: "Obrona polega na odróżnieniu rozsądnej konsekwencji od mechanicznego trwania przy wcześniejszym wyborze."
  },
  {
    id: 134,
    source: SOURCES.INFL,
    question: "Na czym polega reguła uzasadnienia?",
    correct: "Prośba staje się skuteczniejsza, gdy towarzyszy jej powód.",
    distractors: [
      "Prośba działa tylko wtedy, gdy wypowiada ją osoba atrakcyjna.",
      "Prośba wymaga ograniczonego czasu, aby wywołać presję.",
      "Prośba jest skuteczna wyłącznie wtedy, gdy popiera ją większość."
    ],
    explanation: "Podanie powodu zwiększa skłonność do spełnienia prośby, nawet gdy powód jest prosty."
  },
  {
    id: 135,
    source: SOURCES.INFL,
    question: "Dlaczego uzasadnienie może działać automatycznie?",
    correct: "Sama obecność powodu może uruchomić schemat akceptacji prośby.",
    distractors: [
      "Odbiorca zawsze dokładnie analizuje jakość każdego uzasadnienia.",
      "Uzasadnienie działa tylko wtedy, gdy pochodzi od formalnego eksperta.",
      "Powód jest skuteczny wyłącznie przy prośbach całkowicie bezkosztowych."
    ],
    explanation: "Reguła uzasadnienia pokazuje, że ludzie reagują na strukturę prośby, nie zawsze na siłę argumentu."
  },
  {
    id: 136,
    source: SOURCES.INFL,
    question: "Jak działa stereotyp „wysoka cena = wysoka jakość”?",
    correct: "Cena staje się uproszczoną wskazówką oceny wartości produktu.",
    distractors: [
      "Cena traci znaczenie, gdy odbiorca nie zna produktu.",
      "Wysoka cena zawsze obiektywnie potwierdza najwyższą jakość.",
      "Niska cena zawsze zwiększa zaufanie do sprzedawcy."
    ],
    explanation: "Cena może pełnić funkcję poznawczego skrótu, zwłaszcza gdy odbiorca nie potrafi samodzielnie ocenić jakości."
  },
  {
    id: 137,
    source: SOURCES.INFL,
    question: "Która reguła najbliżej wiąże się z konformizmem?",
    correct: "Społeczny dowód słuszności.",
    distractors: [
      "Reguła niedostępności.",
      "Reguła wzajemności.",
      "Reguła uzasadnienia."
    ],
    explanation: "Społeczny dowód słuszności opiera się na dostosowaniu do zachowań lub przekonań innych."
  },
  {
    id: 138,
    source: SOURCES.INFL,
    question: "Która reguła najbliżej wiąże się z odczuciem długu?",
    correct: "Reguła wzajemności.",
    distractors: [
      "Reguła niedostępności.",
      "Reguła autorytetu.",
      "Reguła społecznego dowodu."
    ],
    explanation: "Poczucie długu pojawia się po otrzymaniu dobra lub ustępstwa."
  },
  {
    id: 139,
    source: SOURCES.INFL,
    question: "Która reguła najbliżej wiąże się z formalnymi tytułami i uniformem?",
    correct: "Wpływ autorytetu.",
    distractors: [
      "Reguła lubienia.",
      "Reguła konsekwencji.",
      "Reguła wzajemności."
    ],
    explanation: "Tytuły i uniformy są symbolami autorytetu, które mogą wywołać uległość."
  },
  {
    id: 140,
    source: SOURCES.INFL,
    question: "Która reguła najbliżej wiąże się z limitowaną ofertą?",
    correct: "Reguła niedostępności.",
    distractors: [
      "Reguła uzasadnienia.",
      "Efekt czystej ekspozycji.",
      "Reguła społecznego dowodu."
    ],
    explanation: "Limitowana oferta działa przez ograniczenie dostępności dobra."
  },
  {
    id: 141,
    source: SOURCES.INFL,
    question: "Która reguła najbliżej wiąże się z komplementami i podobieństwem?",
    correct: "Reguła lubienia i sympatii.",
    distractors: [
      "Reguła konsekwencji.",
      "Reguła niedostępności.",
      "Reguła autorytetu."
    ],
    explanation: "Komplementy i podobieństwo zwiększają sympatię, a przez to podatność na prośbę."
  },
  {
    id: 142,
    source: SOURCES.INFL,
    question: "Która reguła najbliżej wiąże się z publicznym zobowiązaniem?",
    correct: "Reguła zaangażowania i konsekwencji.",
    distractors: [
      "Reguła wzajemności.",
      "Reguła społecznego dowodu.",
      "Reguła niedostępności."
    ],
    explanation: "Publiczne zobowiązanie wzmacnia potrzebę dalszej konsekwencji."
  },
  {
    id: 143,
    source: SOURCES.INFL,
    question: "Co łączy darmowe próbki, degustacje i materiały promocyjne?",
    correct: "Mogą uruchamiać regułę wzajemności.",
    distractors: [
      "Działają wyłącznie przez społeczne porównanie z większością.",
      "Są przede wszystkim symbolami formalnego autorytetu.",
      "Opierają się głównie na niedostępności produktu."
    ],
    explanation: "Otrzymanie czegoś za darmo może wzbudzić zobowiązanie do odwzajemnienia."
  },
  {
    id: 144,
    source: SOURCES.INFL,
    question: "Co łączy liczbę fanów, tłum użytkowników i hasła typu „wszyscy wybierają”?",
    correct: "Odwołują się do społecznego dowodu słuszności.",
    distractors: [
      "Odwołują się do reguły niedostępności.",
      "Odwołują się do wpływu autorytetu.",
      "Odwołują się do reguły uzasadnienia."
    ],
    explanation: "Takie komunikaty sugerują, że skoro inni wybierają daną opcję, jest ona właściwa."
  },
  {
    id: 145,
    source: SOURCES.INFL,
    question: "Co łączy atrakcyjnych promotorów i schlebianie rozmówcy?",
    correct: "Budują sympatię, która może zwiększać uległość.",
    distractors: [
      "Tworzą zobowiązanie rewanżu przez otrzymane dobra.",
      "Wzmacniają wyłącznie ocenę eksperckości nadawcy.",
      "Działają głównie przez ograniczenie czasu decyzji."
    ],
    explanation: "Atrakcyjność i komplementy należą do czynników wzmacniających regułę lubienia."
  },
  {
    id: 146,
    source: SOURCES.INFL,
    question: "Co łączy tytuł naukowy, biały fartuch i luksusowy samochód w perswazji?",
    correct: "Mogą funkcjonować jako symbole autorytetu.",
    distractors: [
      "Są dowodami zachowania większości.",
      "Są formami odwzajemnienia przysługi.",
      "Są wskaźnikami ograniczonej dostępności."
    ],
    explanation: "Symbole statusu i kompetencji mogą wywoływać automatyczną uległość wobec autorytetu."
  },
  {
    id: 147,
    source: SOURCES.INFL,
    question: "Dlaczego znajomość reguł wpływu nie oznacza odporności na manipulację?",
    correct: "Reguły często działają automatycznie i mogą wyprzedzać świadomą analizę.",
    distractors: [
      "Reguły działają tylko na osoby, które ich wcześniej nie poznały.",
      "Sama wiedza usuwa wszystkie emocje z procesu decyzyjnego.",
      "Mechanizmy wpływu wymagają zawsze pełnej zgody odbiorcy."
    ],
    explanation: "Świadomość pomaga, ale reakcje automatyczne nadal mogą się pojawiać."
  },
  {
    id: 148,
    source: SOURCES.INFL,
    question: "Która reakcja najlepiej chroni przed wpływem społecznym?",
    correct: "Zatrzymanie automatycznej odpowiedzi i analiza mechanizmu, który mógł zostać uruchomiony.",
    distractors: [
      "Szybkie podjęcie decyzji, zanim emocje osłabną.",
      "Kierowanie się wyłącznie pierwszym odczuciem wobec nadawcy.",
      "Uznanie, że większość lub autorytet zawsze mają rację."
    ],
    explanation: "Obrona przed wpływem wymaga rozpoznania reguły i oddzielenia jej od realnej wartości propozycji."
  },
  {
    id: 149,
    source: SOURCES.INFL,
    question: "Które zestawienie reguła–mechanizm jest poprawne?",
    correct: "Wzajemność — poczucie zobowiązania; społeczny dowód — konformizm; autorytet — posłuszeństwo.",
    distractors: [
      "Wzajemność — niedostępność; społeczny dowód — dług; autorytet — podobieństwo.",
      "Wzajemność — ekspozycja; społeczny dowód — cena; autorytet — spontaniczność.",
      "Wzajemność — rytm pracy; społeczny dowód — przerwa; autorytet — planowanie."
    ],
    explanation: "Każda reguła wpływu opiera się na innym mechanizmie psychologicznym."
  },
  {
    id: 150,
    source: SOURCES.INFL,
    question: "Co najlepiej odróżnia perswazję od manipulacyjnego użycia reguł wpływu?",
    correct: "Stopień jawności intencji, uczciwość argumentów i poszanowanie autonomii odbiorcy.",
    distractors: [
      "Sama skuteczność działania, niezależnie od intencji i konsekwencji dla odbiorcy.",
      "To, czy odbiorca zna nazwę zastosowanej reguły psychologicznej.",
      "Liczba użytych technik wpływu w jednej rozmowie lub kampanii."
    ],
    explanation: "Reguły wpływu mogą być stosowane etycznie lub manipulacyjnie; kluczowe są intencje, jawność i autonomia odbiorcy."
  }
];

const QUESTIONS = RAW_QUESTIONS.map(buildQuestion);

(function auditQuestions() {
  if (!Array.isArray(QUESTIONS)) {
    throw new Error("QUESTIONS nie jest tablicą.");
  }

  if (QUESTIONS.length !== 150) {
    throw new Error(`QUESTIONS powinno zawierać 150 pytań, a zawiera ${QUESTIONS.length}.`);
  }

  QUESTIONS.forEach((item, index) => {
    if (!Array.isArray(item.answers) || item.answers.length !== 4) {
      throw new Error(`Pytanie ${index + 1} nie ma dokładnie 4 odpowiedzi.`);
    }

    if (
      typeof item.correctIndex !== "number" ||
      item.correctIndex < 0 ||
      item.correctIndex > 3
    ) {
      throw new Error(`Pytanie ${index + 1} ma błędny correctIndex.`);
    }

    const correctAnswer = RAW_QUESTIONS[index].correct;

    if (item.answers[item.correctIndex] !== correctAnswer) {
      throw new Error(`Pytanie ${index + 1}: correctIndex nie wskazuje poprawnej odpowiedzi.`);
    }
  });

  const distribution = QUESTIONS.reduce(
    (acc, item) => {
      acc[item.correctIndex] += 1;
      return acc;
    },
    [0, 0, 0, 0]
  );

  console.info("[Quiz] Pytań łącznie:", QUESTIONS.length);
  console.info("[Quiz] Rozkład poprawnych odpowiedzi:");
  console.info("A / index 0:", distribution[0]);
  console.info("B / index 1:", distribution[1]);
  console.info("C / index 2:", distribution[2]);
  console.info("D / index 3:", distribution[3]);
})();
