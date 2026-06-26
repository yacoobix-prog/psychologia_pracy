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
  let wrongIndex = 0;

  for (let i = 0; i < 4; i += 1) {
    if (i === correctIndex) {
      answers.push(item.correct);
    } else {
      answers.push(item.distractors[wrongIndex]);
      wrongIndex += 1;
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
    source: "Psychologia zespołu pracowniczego",
    question: "Który zestaw warunków najpełniej odróżnia grupę w sensie psychologicznym od przypadkowego zbioru osób?",
    correct: "Interakcje, wzajemna świadomość psychologiczna, postrzeganie siebie jako grupy oraz wspólny cel",
    distractors: [
      "Formalny regulamin, podobne stanowiska, wspólna przestrzeń oraz jeden przełożony",
      "Podobny wiek, identyczne kwalifikacje, stała liczebność oraz wspólna nazwa",
      "Wspólny budynek, podobny rytm pracy, podobne wynagrodzenie oraz wspólna dokumentacja"
    ],
    explanation: "Materiał definiuje grupę przez relacje i świadomość członków, a nie przez same warunki formalne lub organizacyjne."
  },
  {
    id: 2,
    source: "Psychologia zespołu pracowniczego",
    question: "Dlaczego zespół pracowniczy jest w materiale opisany jako szczególny typ grupy formalnej?",
    correct: "Realizuje cele narzucone przez organizację wyższego rzędu i korzysta z uzupełniających się kompetencji członków",
    distractors: [
      "Powstaje spontanicznie poza organizacją i nie wymaga gratyfikacji materialnych ani pozamaterialnych",
      "Opiera się wyłącznie na więzi emocjonalnej, a cele pojawiają się dopiero po zakończeniu pracy",
      "Składa się z osób o identycznych kwalifikacjach, aby ograniczyć zależność między stanowiskami"
    ],
    explanation: "Zespół pracowniczy jest grupą formalną, powiązaną z organizacją, celami i podziałem kompetencji."
  },
  {
    id: 3,
    source: "Psychologia zespołu pracowniczego",
    question: "Która interpretacja wielkości grupy jest zgodna z materiałem?",
    correct: "Optymalna liczebność zależy od zadania, osobowości członków i efektywności kierowania",
    distractors: [
      "Najlepsza grupa zawsze liczy tyle osób, aby reprezentować wszystkie działy firmy",
      "Efektywność grupy rośnie liniowo wraz z liczbą członków, bo rośnie zasób wiedzy",
      "Mała grupa jest z definicji gorsza, gdyż nie pozwala na kontrolę ze strony kierownika"
    ],
    explanation: "W materiale nie ma stałej optymalnej liczby; liczebność musi być adekwatna do sytuacji."
  },
  {
    id: 4,
    source: "Psychologia zespołu pracowniczego",
    question: "W jakiej sytuacji większa grupa może obniżać zarówno efektywność, jak i zadowolenie członków?",
    correct: "Gdy jej rozmiar uniemożliwia aktywny udział wszystkim uczestnikom",
    distractors: [
      "Gdy kierownik pozwala członkom zadawać pytania przed podjęciem decyzji",
      "Gdy w grupie pojawiają się osoby o zróżnicowanych kwalifikacjach zawodowych",
      "Gdy zadanie wymaga udziału reprezentantów różnych grup interesów"
    ],
    explanation: "Efektywna grupa wymaga aktywnego uczestnictwa, a zbyt duża liczebność może to utrudnić."
  },
  {
    id: 5,
    source: "Psychologia zespołu pracowniczego",
    question: "Które zestawienie trafnie oddaje napięcie między małą a dużą grupą?",
    correct: "Mała grupa zwykle sprzyja spójności, lecz może mieć deficyt talentów; duża może tworzyć podgrupy i konflikty",
    distractors: [
      "Mała grupa zawsze utrudnia kontrolę, a duża eliminuje ryzyko konfliktów dzięki większej liczbie ról",
      "Mała grupa obniża jakość dyskusji, a duża automatycznie zwiększa zaangażowanie każdej osoby",
      "Mała grupa wymaga formalnych podgrup, a duża naturalnie usuwa różnice statusu między członkami"
    ],
    explanation: "Materiał pokazuje plusy i minusy obu rozwiązań: spójność kontra zasób kompetencji i ryzyko podgrup."
  },
  {
    id: 6,
    source: "Psychologia zespołu pracowniczego",
    question: "Co w materiale stanowi psychologiczne kryterium atrakcyjności grupy pracowniczej?",
    correct: "Stopień, w jakim grupa zaspokaja osobiste potrzeby członka",
    distractors: [
      "Liczba zadań, które można wykonać bez kontaktu z innymi osobami",
      "Poziom formalizacji procedur niezależnie od relacji między ludźmi",
      "Częstotliwość awansów niezależnie od poczucia przynależności"
    ],
    explanation: "Atrakcyjność grupy jest oceniana przez odniesienie jej walorów do potrzeb jednostki."
  },
  {
    id: 7,
    source: "Psychologia zespołu pracowniczego",
    question: "Dlaczego przykład pani Ewy dobrze ilustruje subiektywny charakter atrakcyjności zespołu?",
    correct: "Bo ten sam zespół jest dla niej atrakcyjny dzięki kooperacji i ograniczeniu samotnego decydowania",
    distractors: [
      "Bo pokazuje, że atrakcyjność zespołu wynika wyłącznie z wysokości wynagrodzenia",
      "Bo dowodzi, że osoby komunikatywne najlepiej funkcjonują na stanowiskach całkowicie samodzielnych",
      "Bo wskazuje, że atrakcyjność zespołu nie zależy od potrzeb jednostki, lecz tylko od procedur"
    ],
    explanation: "Pani Ewa ocenia zespół przez własne potrzeby: współpracę, pomoc i brak konieczności samodzielnego organizowania wszystkiego."
  },
  {
    id: 8,
    source: "Psychologia zespołu pracowniczego",
    question: "Jaki jest związek między interakcją, identyfikacją z grupą i efektywnością?",
    correct: "Interakcja sprzyja identyfikacji z zespołem, a ta może wzmacniać jakość pracy i efektywność",
    distractors: [
      "Identyfikacja pojawia się dopiero po zakończeniu pracy i nie wpływa na jakość działań",
      "Silna interakcja zawsze zastępuje potrzebę celu grupowego i formalnych norm",
      "Efektywność zależy od izolacji jednostek, ponieważ identyfikacja obniża odpowiedzialność"
    ],
    explanation: "Materiał łączy komunikowanie się z identyfikacją, więzią grupową i jakością pracy."
  },
  {
    id: 9,
    source: "Psychologia zespołu pracowniczego",
    question: "Która funkcja norm grupowych została w materiale najmocniej podkreślona?",
    correct: "Porządkują zachowanie i pozwalają przewidywać, co będzie uznane za aprobowane",
    distractors: [
      "Zastępują konieczność komunikacji, ponieważ każdy pracownik działa automatycznie",
      "Służą głównie temu, aby uniemożliwić powstanie więzi grupowej",
      "Eliminują indywidualne potrzeby członków przez formalny zakaz różnic"
    ],
    explanation: "Normy wskazują oczekiwane zachowania i pomagają regulować życie społeczne w grupie."
  },
  {
    id: 10,
    source: "Psychologia zespołu pracowniczego",
    question: "Dlaczego cel grupowy jest podstawą oceny wkładu członków zespołu?",
    correct: "Bo członkowie są oceniani przez pryzmat zaangażowania w osiągnięcie celu mającego wartość dla grupy",
    distractors: [
      "Bo cel grupowy jest prywatną ambicją lidera, więc wkład pozostałych nie jest istotny",
      "Bo wkład członków ocenia się wyłącznie według stażu, niezależnie od realizacji planu",
      "Bo cel grupowy znosi potrzebę rozpoznawania indywidualnego zaangażowania"
    ],
    explanation: "Materiał wskazuje, że grupa ocenia swoich członków według ich wkładu w realizację wspólnego celu."
  },
  {
    id: 11,
    source: "Psychologia zespołu pracowniczego",
    question: "Dlaczego efektywność zespołu warto rozpatrywać z punktu widzenia klienta?",
    correct: "Bo klient doświadcza rezultatu pracy całego zespołu albo jego braku",
    distractors: [
      "Bo klient widzi wyłącznie działania lidera, więc nie ocenia efektu grupowego",
      "Bo klient zna wszystkie procesy psychologiczne zachodzące w zespole",
      "Bo klient najlepiej rozpoznaje nieformalne podgrupy i statusy społeczne"
    ],
    explanation: "W materiale klient jest punktem odniesienia, bo odbiera końcowy rezultat pracy zespołowej."
  },
  {
    id: 12,
    source: "Psychologia zespołu pracowniczego",
    question: "Która sytuacja najlepiej ilustruje pojęcie struktury grupowej?",
    correct: "Pracownicy wiedzą, do kogo zwrócić się po poradę fachową, a do kogo po wsparcie integracyjne",
    distractors: [
      "Każdy pracownik ma identyczny status i identyczny wpływ na wszystkie decyzje",
      "Członkowie zespołu nie różnią się zaufaniem, autorytetem ani komunikatywnością",
      "Grupa funkcjonuje wyłącznie jako lista stanowisk w dokumentacji kadrowej"
    ],
    explanation: "Struktura grupowa oznacza zróżnicowanie pozycji społecznych, ról, autorytetu i zaufania."
  },
  {
    id: 13,
    source: "Psychologia zespołu pracowniczego",
    question: "Czym w materiale jest „kredyt zaufania” osoby bardzo lubianej?",
    correct: "Zaufaniem zdobytym przez długie dostosowywanie się do norm, które zmniejsza ryzyko odwetu za chwilowe odstępstwo",
    distractors: [
      "Formalnym uprawnieniem lidera do uchylania norm wobec wybranych pracowników",
      "Nagrodą finansową przyznawaną osobie, która najczęściej zgadza się z grupą",
      "Mechanizmem, przez który osoby średnio lubiane zawsze unikają presji konformizmu"
    ],
    explanation: "Kredyt zaufania wynika z historii zgodności z normami i wysokiej akceptacji w grupie."
  },
  {
    id: 14,
    source: "Psychologia zespołu pracowniczego",
    question: "Kogo według materiału najmocniej dotyczy normatywny wpływ społeczny w grupie?",
    correct: "Osób mniej lub średnio lubianych, które chcą być akceptowane i dlatego ulegają konformizmowi",
    distractors: [
      "Osób o najwyższym statusie, które nie odczuwają potrzeby bycia akceptowanymi",
      "Osób całkowicie izolowanych, które nie znają norm grupowych i nie próbują ich spełniać",
      "Wyłącznie formalnych liderów, którzy ulegają presji podwładnych przy każdym zadaniu"
    ],
    explanation: "Normatywny wpływ społeczny prowadzi do konformizmu z potrzeby akceptacji."
  },
  {
    id: 15,
    source: "Psychologia zespołu pracowniczego",
    question: "Jak lider powinien wykorzystać wiedzę o strukturze grupy przy przydziale zadań?",
    correct: "Autorytety mogą być konsultantami, osoby komunikatywne scalać zespół, a narażonym na konformizm warto dawać zadania samodzielne",
    distractors: [
      "Osoby średnio lubiane powinny zawsze wykonywać zadania publicznie, aby szybciej dopasować się do większości",
      "Osoby komunikatywne należy izolować, bo ich wpływ na klimat grupy osłabia spójność",
      "Osobom z autorytetem nie należy powierzać funkcji instruktażowych, bo to wzmacnia normy grupowe"
    ],
    explanation: "Materiał sugeruje dopasowanie zadań do pozycji i cech społecznych członków grupy."
  },
  {
    id: 16,
    source: "Psychologia zespołu pracowniczego",
    question: "Jak facylitacja społeczna różnicuje wykonanie zadań prostych i trudnych?",
    correct: "Obecność innych zwykle poprawia wykonanie prostych zadań, ale może pogorszyć wykonanie trudnych",
    distractors: [
      "Obecność innych zawsze pogarsza każde zadanie, bo pobudzenie obniża koncentrację",
      "Obecność innych poprawia tylko zadania trudne, ponieważ znosi lęk przed oceną",
      "Obecność innych nie wpływa na działanie, jeśli zadanie jest wykonywane w pracy"
    ],
    explanation: "Facylitacja społeczna zależy od trudności zadania: pobudzenie pomaga przy prostych, a obciąża przy trudnych."
  },
  {
    id: 17,
    source: "Psychologia zespołu pracowniczego",
    question: "Która decyzja organizacyjna wynika z opisu facylitacji społecznej?",
    correct: "Nie mnożyć wykonawców przy rutynowych zadaniach, ale wspierać grupowe wdrażanie przy zadaniach nowych",
    distractors: [
      "Każde zadanie przekazywać maksymalnie dużej grupie, aby zwiększyć presję społeczną",
      "Zawsze izolować osoby początkujące, bo obecność innych nie ma funkcji motywacyjnej",
      "Trudne zadania wykonywać wyłącznie publicznie, aby podnieść poziom pobudzenia"
    ],
    explanation: "Materiał wskazuje różne rozwiązania zależnie od rutynowości lub nowości zadania."
  },
  {
    id: 18,
    source: "Psychologia zespołu pracowniczego",
    question: "Który zestaw najlepiej opisuje spójność grupy w ujęciu materiału?",
    correct: "Poziom więzi między członkami, miara atrakcyjności zespołu i źródło lojalności wobec norm",
    distractors: [
      "Formalny schemat organizacyjny, liczba stanowisk i sposób raportowania przełożonemu",
      "Liczba spotkań, częstotliwość maili i ilość dokumentów tworzonych przez zespół",
      "Zgodność wieku członków, jednak bez znaczenia dla lojalności i norm grupowych"
    ],
    explanation: "Spójność dotyczy więzi, atrakcyjności, lojalności i poszanowania norm."
  },
  {
    id: 19,
    source: "Psychologia zespołu pracowniczego",
    question: "Dlaczego wysoka spójność może być dysfunkcjonalna?",
    correct: "Gdy grupa nie identyfikuje się z celami organizacji, silna więź może wzmacniać opór wobec tych celów",
    distractors: [
      "Bo każda wysoka spójność automatycznie zwiększa absencję i fluktuację pracowników",
      "Bo silna więź zawsze uniemożliwia jakąkolwiek motywację do wykonywania zadań",
      "Bo spójność usuwa potrzebę komunikacji i przez to eliminuje odpowiedzialność"
    ],
    explanation: "Materiał uznaje za szczególnie dysfunkcjonalną grupę bardzo spójną, ale oderwaną od celów organizacji."
  },
  {
    id: 20,
    source: "Psychologia zespołu pracowniczego",
    question: "Które pytanie najlepiej diagnozuje spójność grupy, a nie jedynie satysfakcję z wynagrodzenia?",
    correct: "Czy przy tej samej pracy i płacy pracownik zostałby w obecnym zespole?",
    distractors: [
      "Czy pracownik ma wystarczająco duże biurko do wykonywania pracy papierkowej?",
      "Czy pracownik zna dokładną liczbę dokumentów przygotowanych przez dział?",
      "Czy pracownik potrafi wskazać formalny numer swojego stanowiska w strukturze?"
    ],
    explanation: "Pytanie o pozostanie w zespole przy stałej pracy i płacy bada przywiązanie do grupy."
  },
  {
    id: 21,
    source: "Psychologia zespołu pracowniczego",
    question: "Jakie ryzyko wynika z faktu, że człowiek odbiera tylko część przekazu drugiej osoby?",
    correct: "Może źle zinterpretować intencje, kwalifikacje, polecenia i wnioski",
    distractors: [
      "Może automatycznie zwiększyć precyzję komunikatu dzięki redukcji bodźców",
      "Może uniknąć wszystkich konfliktów, bo odbiera wyłącznie treści najważniejsze",
      "Może zastąpić słuchanie normami grupowymi, bez szkody dla współpracy"
    ],
    explanation: "Materiał wskazuje, że ograniczona zdolność odbioru przekazu zwiększa ryzyko błędów komunikacyjnych."
  },
  {
    id: 22,
    source: "Psychologia zespołu pracowniczego",
    question: "Jaka jest prawidłowa kolejność pracy nad problemem według opisu procesu rozwiązywania problemów?",
    correct: "Najpierw indywidualne zapoznanie się z problemem, potem dyskusja grupowa",
    distractors: [
      "Najpierw głosowanie grupowe, potem dopiero poznanie danych przez jednostki",
      "Najpierw ocena pomysłów lidera, potem zakaz indywidualnej analizy",
      "Najpierw wybór dominującej osoby, potem dopasowanie problemu do jej stanowiska"
    ],
    explanation: "Materiał podkreśla połączenie indywidualnego namysłu z późniejszą dyskusją grupową."
  },
  {
    id: 23,
    source: "Psychologia zespołu pracowniczego",
    question: "Która zasada burzy mózgów jest zgodna z materiałem?",
    correct: "Zapisywać każdy pomysł i koncentrować się na maksymalnej liczbie propozycji",
    distractors: [
      "Krytykować pomysły od razu, aby odsiać propozycje najmniej realistyczne",
      "Dopuścić tylko pomysły całkowicie nowe, bez wariantów podobnych do wcześniejszych",
      "Ograniczyć swobodną grę wyobraźni, żeby grupa nie odchodziła od hierarchii"
    ],
    explanation: "Burza mózgów wymaga braku krytyki, dużej liczby pomysłów i zapisu nawet podobnych propozycji."
  },
  {
    id: 24,
    source: "Psychologia zespołu pracowniczego",
    question: "Czym „kruszenie obiektu” różni się od klasycznej burzy mózgów?",
    correct: "Zaczyna od swobodnego wyliczania wad i krytycznej analizy istniejącego obiektu lub sytuacji",
    distractors: [
      "Zakazuje wskazywania wad, aby nie obniżać motywacji uczestników",
      "Polega na szybkim wyborze pierwszego pomysłu osoby o najwyższym statusie",
      "Służy wyłącznie do tworzenia list pytań, bez oceny istniejących rozwiązań"
    ],
    explanation: "Kruszenie obiektu jest nazywane odwrotną burzą mózgów, bo wychodzi od wad i krytyki totalnej."
  },
  {
    id: 25,
    source: "Psychologia zespołu pracowniczego",
    question: "Jaki jest sens kontrolnych list pytań w rozwiązywaniu problemów?",
    correct: "Systematycznie zbierają informacje i pomagają ustalić istotę, przyczyny oraz cel rozwiązania",
    distractors: [
      "Zastępują analizę problemu przez spontaniczne wybieranie najbardziej atrakcyjnych pomysłów",
      "Służą do publicznego oceniania autorów błędnych pomysłów w czasie burzy mózgów",
      "Mają ograniczyć liczbę informacji, aby grupa nie znała wcześniejszych prób rozwiązania"
    ],
    explanation: "Kontrolne listy porządkują analizę przez serię pytań o istotę, przyczyny, wcześniejsze próby i cel."
  },
  {
    id: 26,
    source: "Psychologia zespołu pracowniczego",
    question: "Kiedy pojawia się myślenie grupowe według materiału?",
    correct: "Gdy zwarta grupa z dominującym przywódcą bardziej chroni spójność niż realistyczną ocenę faktów",
    distractors: [
      "Gdy grupa jest rozproszona, bez lidera i bez potrzeby zachowania solidarności",
      "Gdy każdy członek najpierw samodzielnie analizuje problem, a potem dopiero dyskutuje",
      "Gdy grupa celowo zaprasza krytyków z zewnątrz i rozważa konsekwencje różnych opcji"
    ],
    explanation: "Myślenie grupowe polega na przedkładaniu jednomyślności nad krytyczną analizę."
  },
  {
    id: 27,
    source: "Psychologia zespołu pracowniczego",
    question: "Które zachowanie jest symptomem myślenia grupowego?",
    correct: "Rezygnacja z krytykowania pomysłów, złudzenie jednomyślności i ignorowanie alternatyw",
    distractors: [
      "Celowe dzielenie się unikatowymi informacjami przez wszystkich członków grupy",
      "Ocenianie konsekwencji każdej opcji przed wyborem rozwiązania kompromisowego",
      "Zapraszanie osób o niższym statusie do anonimowych komentarzy pisemnych"
    ],
    explanation: "W materiale grupa myśląca grupowo zawęża dyskusję i wybiera wariant godzący poglądy zamiast najlepszego."
  },
  {
    id: 28,
    source: "Psychologia zespołu pracowniczego",
    question: "Dlaczego różny status członków może obniżać efektywność decyzji grupowej?",
    correct: "Osoby o wyższym statusie mówią częściej i więcej, a kompetentne osoby z niższym statusem mogą zostać pominięte",
    distractors: [
      "Osoby o niższym statusie zawsze mówią więcej i narzucają własne rozwiązania przełożonym",
      "Różnice statusu całkowicie eliminują stres, więc każdy wypowiada się równie swobodnie",
      "Status nie wpływa na dyskusję, jeśli zadanie nie dotyczy bezpośrednio hierarchii służbowej"
    ],
    explanation: "Przykład ze szpitalem pokazuje, że grupa może wybrać wynik ordynatora mimo większej trafności kucharza."
  },
  {
    id: 29,
    source: "Psychologia zespołu pracowniczego",
    question: "Czym jest polaryzacja grupy?",
    correct: "Przesunięciem stanowiska grupy ku większej skrajności niż stanowiska jednostek przed dyskusją",
    distractors: [
      "Automatycznym zbliżeniem stanowisk do umiarkowanego kompromisu po każdej dyskusji",
      "Procesem zanikania różnic opinii wyłącznie dzięki formalnym normom organizacji",
      "Zjawiskiem, w którym grupa zawsze wybiera najbezpieczniejsze rozwiązanie niezależnie od preferencji"
    ],
    explanation: "Polaryzacja może przesuwać grupę ku większemu ryzyku albo większej ostrożności, zależnie od wcześniejszych preferencji."
  },
  {
    id: 30,
    source: "Psychologia zespołu pracowniczego",
    question: "Na czym polega próżniactwo społeczne w materiale?",
    correct: "Na spadku indywidualnego wkładu, gdy obecność w grupie utrudnia ocenę pracy jednostki",
    distractors: [
      "Na zwiększeniu wysiłku jednostki, bo grupa zawsze wzmacnia poczucie odpowiedzialności",
      "Na publicznym ocenianiu każdego wkładu, które obniża motywację do działania",
      "Na świadomym odrzucaniu wszystkich zadań trudnych przez lidera zespołu"
    ],
    explanation: "Próżniactwo społeczne wynika z wtopienia się w grupę i zmniejszenia lęku przed indywidualną oceną."
  },
  {
    id: 31,
    source: "Psychologia zespołu pracowniczego",
    question: "Dlaczego próżniactwo społeczne może inaczej działać przy zadaniach prostych i trudnych?",
    correct: "Osłabia wykonanie prostych, ale przy trudnych może zmniejszać lęk przed oceną i ułatwiać działanie",
    distractors: [
      "Zawsze poprawia zadania proste, ponieważ brak oceny indywidualnej zwiększa presję pracy",
      "Zawsze pogarsza zadania trudne, bo grupa całkowicie usuwa motywację poznawczą",
      "Nie zależy od trudności zadania, tylko od formalnej liczby stanowisk w strukturze"
    ],
    explanation: "Materiał rozróżnia wpływ próżniactwa w zależności od typu zadania i lęku przed oceną."
  },
  {
    id: 32,
    source: "Psychologia zespołu pracowniczego",
    question: "Co najlepiej przeciwdziała próżniactwu społecznemu przy zadaniach prostych?",
    correct: "Możliwość określenia indywidualnej pracy każdego członka",
    distractors: [
      "Uniemożliwienie rozpoznania wkładu jednostek, aby zmniejszyć napięcie",
      "Zwiększenie liczby osób bez zmiany odpowiedzialności za wynik",
      "Rezygnacja z mierzenia efektów i przejście na ocenę wyłącznie grupową"
    ],
    explanation: "Przy prostych zadaniach identyfikowalność wkładu ogranicza spadek wysiłku."
  },
  {
    id: 33,
    source: "Psychologia zespołu pracowniczego",
    question: "Dlaczego grupa może nie wykorzystać unikatowych informacji posiadanych przez członków?",
    correct: "Członkowie częściej omawiają informacje wspólne i nie słuchają wystarczająco tego, co wiedzą tylko pojedyncze osoby",
    distractors: [
      "Unikatowe informacje są zawsze bardziej oczywiste, dlatego nie wymagają rozmowy",
      "Informacje wspólne są z definicji mniej atrakcyjne i grupa szybko je pomija",
      "Każdy członek ma identyczną wiedzę, jeśli zespół jest formalnie powołany"
    ],
    explanation: "Materiał wskazuje barierę w postaci niesłuchania siebie i nieprzekazywania informacji unikatowych."
  },
  {
    id: 34,
    source: "Psychologia zespołu pracowniczego",
    question: "Czym jest synergia w pracy zespołowej?",
    correct: "Efektem grupowym, którego żaden członek nie mógłby osiągnąć samodzielnie",
    distractors: [
      "Sytuacją, w której wynik grupy jest zawsze średnią arytmetyczną indywidualnych wyników",
      "Mechanizmem, przez który lider przejmuje wkład wszystkich osób i usuwa odpowiedzialność grupy",
      "Zasadą, że praca indywidualna zawsze daje lepsze wyniki niż kooperacja"
    ],
    explanation: "Przykładem synergii jest podniesienie ciężaru, którego pojedynczy członek nie podniósłby sam."
  },
  {
    id: 35,
    source: "Psychologia zespołu pracowniczego",
    question: "Od czego zależy skuteczne przekazywanie poleceń w zespole?",
    correct: "Od dopasowania formy komunikacji do sytuacji, presji czasu, poziomu stresu i akceptacji pracowników",
    distractors: [
      "Od używania zawsze tej samej formy komunikacji, aby utrzymać jednolity styl zarządzania",
      "Wyłącznie od hierarchii formalnej, bo polecenia nie wymagają dopasowania do odbiorcy",
      "Od unikania komunikacji z osobą wydającą polecenie, aby nie obciążać zespołu"
    ],
    explanation: "Materiał traktuje przekazywanie poleceń jako element komunikacji zespołu z osobą wydającą polecenia."
  },
  {
    id: 36,
    source: "Psychologia zespołu pracowniczego",
    question: "Jaka jest poprawna kolejność faz reakcji na zmianę opisana w materiale?",
    correct: "Zaprzeczenie, opór, rozgryzanie, akceptacja",
    distractors: [
      "Opór, akceptacja, zaprzeczenie, rozgryzanie",
      "Rozgryzanie, zaprzeczenie, akceptacja, opór",
      "Akceptacja, opór, rozgryzanie, zaprzeczenie"
    ],
    explanation: "Materiał przedstawia cztery fazy: najpierw zaprzeczenie, potem opór, następnie rozgryzanie i akceptacja."
  },
  {
    id: 37,
    source: "Psychologia zespołu pracowniczego",
    question: "Która przyczyna oporu wobec zmian wiąże się bezpośrednio z udziałem pracowników w decyzjach?",
    correct: "Utrata kontroli, czyli brak wpływu na zmianę, która bezpośrednio ich dotyczy",
    distractors: [
      "Nawyk, czyli lepsze funkcjonowanie wyłącznie w warunkach zupełnie nowych",
      "Pogłoski, czyli pełne i rzetelne informowanie o wszystkich skutkach zmiany",
      "Strach przed niepowodzeniem, czyli pewność sukcesu w nowej rzeczywistości"
    ],
    explanation: "Reakcja na zmianę zależy od tego, czy pracownicy mają wpływ na proces i współdecydują."
  },
  {
    id: 38,
    source: "Psychologia zespołu pracowniczego",
    question: "Które działania lidera najlepiej zmniejszają opór wobec zmian?",
    correct: "Przygotowanie, informowanie, zaangażowanie pracowników i stworzenie możliwości pytań oraz wyjaśnień",
    distractors: [
      "Ukrywanie powodów zmiany, szybkie wdrożenie wielu zmian naraz i ograniczenie dyskusji",
      "Wyłącznie formalne ogłoszenie decyzji bez szkolenia oraz bez omówienia korzyści",
      "Wzmocnienie plotek, pominięcie obaw i odłożenie komunikacji do końca procesu"
    ],
    explanation: "Materiał wskazuje, że lider powinien przygotować ludzi, dostarczać informacji, angażować ich i zapewniać komunikację."
  },
  {
    id: 39,
    source: "Zarządzanie czasem",
    question: "Która interpretacja najlepiej oddaje sens definicji zarządzania czasem z materiału?",
    correct: "Nie zarządzamy samym upływem czasu, lecz sobą, priorytetami i sposobem używania dostępnego czasu",
    distractors: [
      "Możemy kontrolować czas obiektywny, jeśli dokładnie zaplanujemy każdą minutę dnia",
      "Zarządzanie czasem sprowadza się do pedantycznego porządku na biurku i kalendarza spotkań",
      "Najważniejsze jest reagowanie na sprawy pilne, bo one zawsze określają realne cele"
    ],
    explanation: "Materiał mówi o świadomym sterowaniu czasem jako zarządzaniu sobą, nie o kontroli samego czasu obiektywnego."
  },
  {
    id: 40,
    source: "Zarządzanie czasem",
    question: "Co według materiału najczęściej wywołuje poczucie popłochu z powodu szybkiego upływu czasu?",
    correct: "Robienie wielu rzeczy naraz i niedoprowadzanie spraw do końca",
    distractors: [
      "Zbyt częste stosowanie zasady 60/40 i pozostawianie rezerwy czasu",
      "Rozbijanie dużych zadań na mniejsze elementy przed rozpoczęciem pracy",
      "Planowanie nie więcej niż jednego procenta okresu przeznaczonego na działanie"
    ],
    explanation: "Materiał wskazuje multitasking i brak domykania spraw jako źródło chaosu."
  },
  {
    id: 41,
    source: "Zarządzanie czasem",
    question: "Jaka różnica między czasem obiektywnym i subiektywnym jest kluczowa dla materiału?",
    correct: "Obiektywny płynie niezmiennie, a subiektywny zmienia się wraz z postawą i wykonywaną czynnością",
    distractors: [
      "Subiektywny płynie zawsze w tym samym tempie, a obiektywny zależy od nastroju pracownika",
      "Oba rodzaje czasu można zatrzymać, jeśli stosuje się techniki asertywne",
      "Obiektywny dotyczy tylko pracy, a subiektywny wyłącznie odpoczynku po pracy"
    ],
    explanation: "Czas obiektywny jest poza kontrolą, natomiast odczuwanie czasu zależy od aktywności i nastawienia."
  },
  {
    id: 42,
    source: "Zarządzanie czasem",
    question: "Dlaczego komunikacja z innymi może stać się czynnikiem zakłócającym zarządzanie czasem?",
    correct: "Inni działają według własnych priorytetów i mogą nie znać naszego planu dnia",
    distractors: [
      "Komunikacja zawsze tworzy priorytety typu A, dlatego nie wymaga asertywności",
      "Rozmowy biurowe są przewidywalne i dlatego powinny zajmować pełne 40% czasu pracy",
      "Każde pytanie współpracownika jest ważniejsze od zadań wpisanych na listę"
    ],
    explanation: "Materiał opisuje sytuację, gdy prośba o minutkę zajmuje godzinę, bo rozmówca ma własny porządek spraw."
  },
  {
    id: 43,
    source: "Zarządzanie czasem",
    question: "Jaką funkcję pełni asertywność w zarządzaniu czasem?",
    correct: "Pozwala chronić własne prawa i odmawiać bez dezorganizowania dnia fałszywą uprzejmością",
    distractors: [
      "Pozwala przerzucać wszystkie zadania pilne na innych bez wyjaśnienia",
      "Służy do unikania komunikacji, nawet gdy informacja jest konieczna do wykonania pracy",
      "Zastępuje planowanie, bo osoba asertywna nie potrzebuje listy zadań"
    ],
    explanation: "Asertywność ma pomóc w odmawianiu i ochronie własnego planu pracy bez ranienia innych."
  },
  {
    id: 44,
    source: "Zarządzanie czasem",
    question: "Kiedy lista zadań jest szczególnie potrzebna według materiału?",
    correct: "Gdy wykonujemy wiele różnych zadań, popełniamy błędy lub często zapominamy o obowiązkach",
    distractors: [
      "Gdy mamy tylko jedno proste zadanie i nie istnieje ryzyko zapomnienia",
      "Gdy chcemy całkowicie zastąpić priorytety przypadkową kolejnością czynności",
      "Gdy wszystkie zadania są niepilne i nieważne, więc nie wymagają żadnej selekcji"
    ],
    explanation: "Lista zadań działa jako narzędzie porządkowania i reduktor stresu przy wielu obowiązkach."
  },
  {
    id: 45,
    source: "Zarządzanie czasem",
    question: "Dlaczego sama lista zadań bez rang może zwiększyć napięcie?",
    correct: "Pokazuje nadmiar obowiązków, ale nie pomaga zdecydować, co naprawdę ma pierwszeństwo",
    distractors: [
      "Usuwa wszystkie zadania typu C, więc sztucznie zawęża zakres obowiązków",
      "Wymusza planowanie 100% dnia, choć materiał zaleca 60% czynności spontanicznych",
      "Zawsze kieruje uwagę na zadania niepilne i nieważne z czwartej ćwiartki"
    ],
    explanation: "Materiał podkreśla, że lista bez priorytetów może wywołać frustrację z powodu nadmiaru zadań."
  },
  {
    id: 46,
    source: "Zarządzanie czasem",
    question: "Co oznacza wskazanie, że na planowanie 8 godzin pracy warto poświęcić 5 minut?",
    correct: "Planowanie jest konieczne, ale po przekroczeniu punktu optymalnego staje się nieefektywne",
    distractors: [
      "Planowanie powinno trwać tak długo, aż obejmie dokładnie każdą minutę dnia",
      "Pięć minut wystarcza tylko wtedy, gdy rezygnujemy z priorytetyzacji ABC",
      "Krótki czas planowania ma zastąpić potrzebę późniejszej kontroli wykonania"
    ],
    explanation: "Materiał ostrzega przed przesadnym planowaniem i sugeruje, by na planowanie poświęcać najwyżej około 1% czasu."
  },
  {
    id: 47,
    source: "Zarządzanie czasem",
    question: "Która interpretacja reguły 60/40 jest poprawna?",
    correct: "Planować około 60% czasu, a resztę zostawić na zakłócenia, sprawy nieoczekiwane i spontaniczne",
    distractors: [
      "Planować 100% dnia, ale tylko 60% zadań wykonywać w kolejności priorytetów",
      "Przeznaczyć 60% czasu na przerwy, aby uniknąć spadku energii po posiłku",
      "Uznawać 40% zadań za nieważne i usuwać je z listy bez analizy"
    ],
    explanation: "Reguła 60/40 chroni przed przeciążeniem planu i zostawia rezerwę na realne zakłócenia."
  },
  {
    id: 48,
    source: "Zarządzanie czasem",
    question: "Jak według materiału należy traktować zadania duże podczas przygotowywania listy?",
    correct: "Dzielić je na mniejsze elementy aż staną się operacyjnie wykonalne",
    distractors: [
      "Zawsze przesuwać je do zadań typu C, bo duże zadania są z natury mniej pilne",
      "Zostawiać je jako ogólne hasła, aby nie tracić czasu na ich doprecyzowanie",
      "Wykonywać je dopiero po wszystkich drobnych pożeraczach czasu"
    ],
    explanation: "Duże zadania powinny być rozłożone na mniejsze części, co ułatwia rozpoczęcie i kontrolę pracy."
  },
  {
    id: 49,
    source: "Zarządzanie czasem",
    question: "Co w praktyce znaczy zasada „pilne nie znaczy ważne”?",
    correct: "Terminowość lub presja otoczenia nie przesądza jeszcze o realnej wartości zadania",
    distractors: [
      "Zadania pilne powinny być zawsze ignorowane, bo nigdy nie mają związku z celami",
      "Ważne są tylko te zadania, które mają najkrótszy możliwy termin wykonania",
      "Zadania ważne nie powinny mieć dat realizacji, bo wtedy stają się mało wartościowe"
    ],
    explanation: "Materiał rozdziela pilność od ważności i ostrzega przed automatycznym reagowaniem na presję pilności."
  },
  {
    id: 50,
    source: "Zarządzanie czasem",
    question: "Dlaczego przy ustalaniu priorytetów należy uwzględnić datę zakończenia?",
    correct: "Zadanie z nieprzekraczalnym terminem może stać się pierwszorzędne mimo innych wartościowań",
    distractors: [
      "Data zakończenia zawsze obniża wagę zadania, bo priorytety wynikają wyłącznie z trudności",
      "Termin ma znaczenie tylko przy zadaniach typu C wykonywanych po posiłku",
      "Zadania z terminem za dwa miesiące zawsze muszą być pierwsze na liście"
    ],
    explanation: "Materiał wskazuje, że ważność trzeba zestawiać z horyzontem czasowym i terminem ostatecznym."
  }
