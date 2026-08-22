export type Testimonial = { name: string; text: string };
export type Block = { title: string; sub?: string; body: string; price?: string; map?: string; bodyAfter?: string };
export type Principio = { n: string; title: string; body: string };
export type PercorsoCard = { title: string; body: string; to: string };

export const percorsiCards: PercorsoCard[] = [
  { title: 'PRIMI PASSI', body: 'Per iniziare insieme fin dai primi mesi.', to: '/pensioni-casalinghe/' },
  { title: 'SINTONIA', body: 'Un percorso individuale costruito sul cane e sulla sua famiglia.', to: '/pensioni-casalinghe/' },
  { title: 'BARBONE IN SINTONIA', body: 'Un percorso dedicato al Barbone, dal Toy alla Grande Mole.', to: '/barbone-in-sintonia/' },
  { title: 'K9 CROSS TRAINING', body: 'Movimento, consapevolezza corporea e attività fisica strutturata.', to: '/rimettersi-in-forma-con-il-k9-cross-training/' },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Alessandra Frigerio',
    text: 'Appena arrivato Ziggy e alla nostra prima esperienza con un cagnolino cucciolo ci siamo rivolti a Raffaella è stata per noi un punto di riferimento per seguire al meglio Ziggy nel suo percorso di crescita e a sviluppare le sue capacità, abbiamo imparato molto moltissimo grazie a lei e Ziggy ormai dopo 4 anni l’adora e noi anche',
  },
  {
    name: 'Beatrice Scuri',
    text: 'Ginger è arrivata dalla Sicilia a 4 mesi e l’esperienza era nuova per tutti..\n\nBene, non ho avuto dubbi. Chiamare Raffaella sarebbe (come di fatto lo è stato) la scelta migliore che potessimo mai fare.\n\nQuello che colpisce è il tono di voce e l’uso delle mani..dei calmanti naturali. Quando ci si rivolge a una persona come Raffaella si vorrebbe avere la soluzione in tasca subito ma quello che si trova è di più. Il suo tranquillizzarti anche quando vorresti “scappare” è una vera arte. È una presenza fondamentale nel rapporto a due con il proprio amico a 4 zampe e a saperla ascoltare bene, infonde una tranquillità impagabile (che manca quando non c’è!)\n\nChe dire, ECCEZIONALE !',
  },
];

export const principi: Principio[] = [
  { n: '1', title: 'Osservare prima di intervenire', body: 'Il comportamento racconta sempre qualcosa.\nPrima di modificarlo, bisogna comprenderlo.' },
  { n: '2', title: 'La relazione viene prima degli esercizi', body: 'Un “seduto” è facile.\nCreare fiducia è molto più importante.' },
  { n: '3', title: 'Nessuna soluzione uguale per tutti', body: 'Ogni percorso è costruito sulle esigenze del cane e della famiglia.' },
  { n: '4', title: 'Anche la famiglia impara', body: 'Il mio lavoro non è addestrare il cane.\nÈ insegnare alle persone a comunicare meglio con lui.' },
  { n: '5', title: 'Continuo a mettermi in discussione', body: 'Studio, mi aggiorno e continuo a confrontarmi con altri professionisti, perché credo che nella cinofilia non si smetta mai di imparare.' },
];

export const percorsiBlocks: Block[] = [
  {
    title: 'Hai appena accolto un cucciolo?',
    sub: 'Le basi di una relazione che durerà tutta la vita.',
    body: 'I primi 8 mesi sono preziosi.\n\nNon perché il cucciolo debba imparare tantissimi esercizi, ma perché inizia a costruire il modo in cui guarderà il mondo.\n\nIn questo percorso lavoreremo sulla comunicazione, sulla gestione della quotidianità, sulle esperienze più importanti e sulle competenze che renderanno la convivenza serena.',
  },
  {
    title: 'La passeggiata è diventata difficile?',
    sub: 'Ritrovare il piacere di camminare insieme.',
    body: 'La passeggiata è uno dei momenti più importanti della giornata.\n\nQuando il guinzaglio è sempre in tensione, spesso non è soltanto un problema di conduzione.\n\nImpareremo a leggere il cane, a comprendere le sue motivazioni e a costruire insieme una passeggiata più serena e collaborativa.',
  },
  {
    title: 'Percorsi personalizzati',
    sub: 'Ogni cane ha bisogni diversi.',
    body: 'Adolescenti.\nCani adulti.\nNuovi inserimenti.\nDifficoltà specifiche.\n\nOgni situazione merita di essere osservata prima di essere affrontata.\n\nPer questo preferisco costruire un percorso su misura piuttosto che proporre programmi standard.',
  },
  {
    title: 'Hai bisogno di un confronto?',
    sub: 'A volte una sola consulenza è sufficiente.',
    body: 'A volte una sola consulenza è sufficiente per fare chiarezza.\n\nAltre volte rappresenta il primo passo di un percorso più lungo.\n\nLo capiremo insieme, senza fretta e senza programmi prestabiliti.',
  },
];

export const barboneBlocks: Block[] = [
  {
    title: 'SE HAI APPENA ACCOLTO UN CUCCIOLO',
    body: 'Con un cucciolo, Barbone in Sintonia comprende il lavoro di Primi Passi: routine, autonomia, morsicatura, comunicazione, esperienze sociali, passeggiata, richiamo, manipolazione e tutte le piccole e grandi difficoltà dei primi mesi insieme.\n\nA questo si aggiunge fin dall’inizio un lavoro specifico sulla collaborazione alle cure e sulla gestione del mantello, affinché spazzola, pettine e manipolazione possano diventare progressivamente esperienze familiari.',
  },
  {
    title: 'SE VIVI GIÀ CON UN BARBONE',
    body: 'Il percorso è pensato anche per Barboni adolescenti e adulti.\n\nIn questo caso partiamo dalle vostre esigenze attuali: passeggiata, richiamo, autonomia, comunicazione, gestione della quotidianità o eventuali difficoltà specifiche.\n\nLa conoscenza della razza è uno strumento in più per comprendere il cane che ho davanti, mai un’etichetta con cui spiegare automaticamente il suo comportamento.',
  },
  {
    title: 'EDUCAZIONE E CURA SI INCONTRANO',
    body: 'Vivere con un Barbone significa anche imparare a gestire correttamente il suo mantello.\n\nPer questo non mi limiterò a dirti che devi spazzolarlo: lo faremo insieme.\n\nTi mostrerò praticamente come utilizzare gli strumenti, come procedere nelle diverse zone del corpo e quali accortezze adottare per il mantenimento quotidiano.\n\nContemporaneamente lavoreremo sulla collaborazione del cane durante spazzolatura e manipolazione.\n\nL’obiettivo non è sostituire il toelettatore professionista, ma permetterti di gestire correttamente il mantello tra una toelettatura e l’altra e rendere le cure quotidiane più semplici e serene per entrambi.',
  },
  {
    title: 'PERCHÉ UN PERCORSO DEDICATO AL BARBONE?',
    body: 'La mia esperienza con questa razza nasce prima di tutto dalla vita quotidiana con i miei cani e si è ampliata negli anni attraverso il lavoro con numerose famiglie, i cuccioli, le esposizioni e lo studio.\n\nCollaboro inoltre con l’allevamento di Lorena Merati, che mi permette di seguire anche cuccioli nelle prime fasi della loro crescita, e ho contribuito al suo libro “Sua Maestà il Barbone Grande Mole” scrivendo tre capitoli dedicati al comportamento.\n\nBarbone in Sintonia nasce dall’incontro tra questa esperienza e il mio lavoro nell’educazione cinofila.',
  },
];

export const k9Blocks: Block[] = [
  {
    title: 'NON È SOLO PER CANI SPORTIVI',
    body: 'Non è necessario praticare uno sport cinofilo per dedicare attenzione alla preparazione fisica del proprio cane.\n\nIl K9 Cross Training può essere un’attività interessante per cani adulti in salute che vogliono sperimentare un lavoro diverso, per binomi che praticano attività sportive e desiderano integrare una preparazione fisica strutturata, oppure semplicemente per chi vuole imparare a proporre al proprio cane un’attività motoria consapevole e di qualità.\n\nOgni cane parte da un punto diverso.\n\nEtà, struttura, esperienza, capacità, stile di vita e attività praticate vengono considerate nella scelta degli esercizi e nella costruzione del programma.\n\nPer questo non utilizzo sequenze standard uguali per tutti: è il lavoro ad adattarsi al cane, non il cane a doversi adattare all’esercizio.',
  },
  {
    title: 'COME SI SVOLGE UNA SESSIONE',
    body: 'Ogni incontro dura 60 minuti ed è suddiviso in tre momenti.\n\nRISCALDAMENTO — Prepariamo progressivamente il cane al lavoro attraverso attività adeguate alla sessione che svolgeremo.\n\nALLENAMENTO — Gli esercizi vengono scelti e proposti in funzione del singolo cane e degli obiettivi del lavoro. Non è importante eseguire il maggior numero possibile di esercizi: mi interessa soprattutto la qualità con cui il cane lavora e utilizza il proprio corpo.\n\nDEFATICAMENTO — La sessione si conclude con una fase dedicata al ritorno graduale a una condizione di riposo.\n\nRiscaldamento e defaticamento non sono elementi accessori: fanno parte dell’allenamento.',
  },
  {
    title: 'UN LAVORO DA FARE INSIEME',
    body: 'Una delle cose che amo del K9 Cross Training è che non lavora soltanto il cane.\n\nDurante gli incontri imparerai a osservare il suo movimento, accompagnarlo negli esercizi, utilizzare correttamente gli strumenti e riconoscere quando è il momento di procedere, semplificare o fermarsi.\n\nIl mio obiettivo non è semplicemente farti ripetere una sequenza di esercizi durante la lezione, ma permetterti di comprendere ciò che stiamo facendo e perché lo stiamo facendo.\n\nIn questo modo il lavoro può diventare anche un’altra occasione per conoscersi, comunicare e fare qualcosa insieme.',
  },
  {
    title: 'DOVE SI SVOLGONO GLI INCONTRI',
    body: 'Presso di me — Gli incontri in presenza si svolgono esclusivamente presso la mia sede a Buccinasco, dove dispongo dell’attrezzatura necessaria per costruire le diverse sessioni di lavoro. L’attrezzatura non è facilmente trasportabile, per questo per il K9 Cross Training non sono previsti incontri a domicilio.\n\nOnline — Il K9 Cross Training può essere seguito anche online. Durante l’incontro lavoriamo insieme in diretta: puoi acquistare l’attrezzatura di base (ti manderò i link necessari) e osservare uno dei miei cani in videochiamata per l’impostazione dell’esercizio. Osservo te e il tuo cane durante l’esecuzione, guidandoti passo dopo passo.\n\nLa modalità online non è quindi una versione ridotta dell’incontro in presenza: cambia lo strumento attraverso cui lavoriamo, non il tempo e l’attenzione dedicati al binomio.',
  },
  {
    title: 'PRIMA DI INIZIARE',
    body: 'Il K9 Cross Training è un’attività di preparazione fisica e non un percorso riabilitativo.\n\nIn presenza di patologie, dolore, infortuni, interventi chirurgici o condizioni che possano influenzare il movimento, il lavoro deve essere valutato insieme alle figure veterinarie competenti e, quando necessario, inserito nel rispetto delle loro indicazioni.',
  },
];

export const tariffeBlocks: Block[] = [
  {
    title: 'Incontro educativo individuale',
    sub: 'Durata: 90 minuti',
    price: '70 €',
    body: 'Un incontro dedicato a te e al tuo cane, per affrontare un’esigenza specifica, fare il punto su una situazione o capire insieme quale percorso intraprendere.\n\nPresso di me (Buccinasco, provincia di Milano) — 70 €\nOnline — 70 €\nA domicilio — a partire da 80 €, in base alla zona.\n\nL’incontro singolo è adatto anche a chi non desidera iniziare un percorso continuativo e preferisce lavorare su una necessità specifica.\n\nConsulenza online breve: per esigenze circoscritte o per chi dispone di meno tempo è disponibile anche una consulenza online di 60 minuti — 55 €. Quando utile alla valutazione, prima dell’appuntamento potrò chiederti alcuni brevi video del cane. Se durante la consulenza emerge la necessità di approfondire, sarà possibile proseguire fino a 90 minuti applicando la tariffa dell’incontro completo.',
  },
  {
    title: 'Primi Passi',
    sub: 'Il percorso dedicato ai cuccioli',
    price: '290 €',
    body: 'I primi mesi insieme sono un periodo prezioso: non servono a costruire un cane “perfetto”, ma a conoscersi, creare buone abitudini e mettere basi solide per la vita futura.\n\nIl percorso viene adattato al singolo cucciolo e alla sua famiglia e può comprendere gestione degli spazi e delle routine, bisogni, sonno, autonomia, morsicatura, comunicazione, manipolazione, esperienze sociali, passeggiata, richiamo e le difficoltà che possono emergere durante la crescita.\n\n4 incontri individuali da 90 minuti\n\nIl percorso comprende una cartella personale, con schede e materiali selezionati in base alle vostre esigenze, e la possibilità di inviarmi brevi aggiornamenti, audio e video relativi al lavoro che stiamo svolgendo.\n\nGli incontri possono svolgersi presso di me oppure online e, quando utile, anche a domicilio con il solo supplemento previsto per la zona.\n\nValidità del percorso: 2 mesi. Al termine dei quattro incontri sarà possibile proseguire, se necessario, attraverso incontri singoli o un nuovo percorso.',
  },
  {
    title: 'Sintonia',
    sub: 'Un percorso, non semplicemente un pacchetto di lezioni',
    price: '360 €',
    body: 'Sintonia è pensato per chi desidera lavorare con continuità, adattando il percorso educativo ai cambiamenti, ai progressi e alle esigenze del cane e della sua famiglia.\n\nNon esiste un programma uguale per tutti: definiamo insieme gli obiettivi e costruiamo il lavoro sulla coppia cane-persona che ho davanti.\n\n5 incontri individuali da 90 minuti\n\nIl percorso comprende una cartella personale, schede e materiali personalizzati e la possibilità di inviarmi brevi video, audio e aggiornamenti tra gli incontri per ricevere un riscontro sul lavoro che stiamo già svolgendo.\n\nIl supporto tra gli incontri è riservato ai percorsi e non sostituisce una consulenza individuale per nuove problematiche.\n\nValidità del percorso: 2 mesi.',
  },
  {
    title: 'Barbone in Sintonia',
    sub: 'Il percorso dedicato al Barbone in tutte le taglie, dal Toy alla Grande Mole',
    price: '390 €',
    body: 'Il Barbone è una razza che conosco profondamente attraverso la mia esperienza personale e professionale.\n\nBarbone in Sintonia nasce per unire il lavoro educativo alla conoscenza delle caratteristiche specifiche della razza, accompagnando la famiglia nella quotidianità con il proprio cane.\n\nCon un cucciolo comprende il lavoro previsto nel percorso Primi Passi; con un adolescente o un adulto viene invece costruito sulle esigenze individuali, come un percorso Sintonia.\n\nLa gestione del mantello: ti mostrerò direttamente come spazzolare correttamente il tuo cane, come utilizzare gli strumenti e quali accortezze adottare nelle diverse zone del corpo. Lavoreremo anche sulla collaborazione del cane durante la manipolazione, affinché le cure quotidiane possano diventare progressivamente più semplici e serene. Anche il taglio unghie e la pulizia delle orecchie non saranno più un problema.\n\n5 incontri individuali da 90 minuti\n\nIl percorso comprende cartella personale, materiali dedicati e supporto tramite brevi audio, video e aggiornamenti durante il percorso.\n\nValidità del percorso: 2 mesi.',
  },
  {
    title: 'Incontri a domicilio',
    sub: 'Quando è utile lavorare dove vive il cane',
    price: 'da 80 €',
    body: 'In alcune situazioni è particolarmente utile lavorare direttamente nell’ambiente in cui il cane vive o nel luogo in cui si presenta una specifica difficoltà.\n\nPer questo è possibile svolgere a domicilio sia un incontro singolo sia uno o più incontri all’interno di un percorso.\n\nLa tariffa base dell’incontro educativo è di 70 €. Per il domicilio viene aggiunto esclusivamente il supplemento relativo alla zona:',
    map: '/images/chatgpt-image-18-ago-2026-12_54_56.png',
    bodyAfter: 'Fascia 1 → +10 €\nFascia 2 → +25 €\nFascia 3 → +35 €\n\nQuesto significa che l’incontro singolo a domicilio avrà un costo complessivo rispettivamente di 80 €, 95 € o 105 €.\n\nHai già acquistato un percorso? Se durante Primi Passi, Sintonia o Barbone in Sintonia riteniamo utile svolgere uno degli incontri a casa tua, nel tuo quartiere o in un’altra area di lavoro, al percorso già acquistato verrà aggiunto soltanto il supplemento relativo a quell’incontro. Gli altri incontri potranno continuare a svolgersi presso di me oppure online.\n\nFuori dalle zone indicate? Indicami il comune o la zona al momento della richiesta: ti confermerò la mia disponibilità e il relativo costo della trasferta.',
  },
  {
    title: 'K9 Cross Training',
    sub: 'Movimento, consapevolezza e preparazione fisica',
    price: '50 €',
    body: 'Un lavoro individuale dedicato alla preparazione fisica del cane attraverso esercizi adattati alle sue caratteristiche e capacità.\n\nOgni sessione comprende una fase di riscaldamento, il lavoro vero e proprio e il defaticamento.\n\nDurata: circa 60 minuti\n\nPresso di me — 50 €. Gli incontri in presenza si svolgono esclusivamente presso la mia sede, dove dispongo dell’attrezzatura necessaria.\n\nOnline — 50 €. Durante gli incontri online lavoreremo insieme in diretta: utilizzerò uno dei miei cani per mostrarti gli esercizi, che potrai riprodurre con il tuo sotto la mia supervisione.\n\nPercorso 5 incontri — 225 €. Validità: 2 mesi.',
  },
];

export const infoBlocks: Block[] = [
  { title: 'Appuntamenti', body: 'Gli incontri si svolgono normalmente dal lunedì al sabato, su appuntamento.\n\nÈ possibile richiedere un appuntamento la domenica con una maggiorazione di 30 €. La disponibilità domenicale è limitata ad alcune date e non può essere garantita con cadenza settimanale.' },
  { title: 'Cancellazioni', body: 'Per gli appuntamenti cancellati con meno di 48 ore di preavviso è dovuto il 50% della tariffa prevista.\n\nIn caso di cancellazione il giorno stesso o di mancata presentazione è dovuto l’intero importo dell’incontro.\n\nSituazioni gravi, imprevedibili o eccezionali verranno naturalmente valutate con buon senso.' },
  { title: 'Maltempo', body: 'Quando il lavoro previsto deve necessariamente svolgersi all’aperto e le condizioni meteorologiche rendono impossibile o poco sicuro l’incontro, l’appuntamento potrà essere riprogrammato.' },
  { title: 'Supporto tra gli incontri', body: 'La possibilità di inviarmi brevi video, audio e aggiornamenti educativi tra un incontro e l’altro è compresa nei percorsi Primi Passi, Sintonia e Barbone in Sintonia.\n\nIl supporto riguarda il lavoro che stiamo già svolgendo insieme e non sostituisce una consulenza dedicata a nuove problematiche.\n\nGli incontri singoli non comprendono consulenza continuativa tramite messaggio.\n\nNaturalmente potrai sempre contattarmi per questioni organizzative relative agli appuntamenti.' },
];
