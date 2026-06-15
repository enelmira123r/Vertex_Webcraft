/* =========================================================
   VERTEX — Sistemi shumëgjuhësh (i18n)
   Çelësi i përkthimit = teksti origjinal shqip (data-i18n).
   Për të shtuar një gjuhë: shto te LANGS + një bllok te DICT.
   ========================================================= */
(function () {
  'use strict';

  // Gjuhët e disponueshme (shfaqen në panel)
  var LANGS = [
    { c: 'sq', n: 'Shqip',      f: '🇦🇱' },
    { c: 'en', n: 'English',    f: '🇬🇧' },
    { c: 'it', n: 'Italiano',   f: '🇮🇹' },
    { c: 'de', n: 'Deutsch',    f: '🇩🇪' },
    { c: 'fr', n: 'Français',   f: '🇫🇷' },
    { c: 'es', n: 'Español',    f: '🇪🇸' },
    { c: 'pt', n: 'Português',  f: '🇵🇹' },
    { c: 'nl', n: 'Nederlands', f: '🇳🇱' },
    { c: 'tr', n: 'Türkçe',     f: '🇹🇷' }
  ];

  var DICT = {
    /* ---------------- ENGLISH ---------------- */
    en: {
      'Puna': 'Work', 'Shërbimet': 'Services', 'Paketat': 'Packages', 'Bisedo me ne': 'Let’s talk',
      'Studio web që e bën biznesin tënd të duket profesional online.': 'A web studio that makes your business look professional online.',
      'Ndërtojmë website, dyqane online dhe identitet vizual për bizneset shqiptare — me dizajn modern, çmime të qarta dhe mbështetje në shqip.': 'We build websites, online stores and visual identity for businesses — with modern design, clear pricing and real support.',
      'Merr ofertë falas': 'Get a free quote', 'Shiko paketat': 'View packages',
      'Çfarë ofrojmë': 'What we offer',
      '(01) — Puna': '(01) — Work', 'Projekte të përzgjedhura': 'Selected work',
      'Disa nga faqet që kemi ndërtuar. Kliko për t\'i parë live.': 'A few of the sites we’ve built. Click to view them live.',
      'Platformë Edukimi': 'Education Platform', 'Dyqan Online · Modë': 'Online Store · Fashion', 'Dyqan & Instalim': 'Store & Installation',
      '(02) — Shërbimet': '(02) — Services', 'Çfarë bëjmë': 'What we do',
      'Website Prezantuese': 'Business Websites', 'Faqe që tregon kush je, çfarë ofron dhe pse të të zgjedhin — e ndërtuar nga e para për biznesin tënd.': 'A site that shows who you are, what you offer and why to choose you — built from scratch for your business.',
      'Dyqan Online': 'Online Store', 'Platforma tregtie që shesin: karrocë blerjeje, pagesa të sigurta dhe menaxhim i lehtë.': 'Stores that sell: shopping cart, secure payments and easy management.',
      'Branding & Identitet': 'Branding & Identity', 'Logo, ngjyra dhe tipografi që e bëjnë markën tënde të paharrueshme dhe konsistente.': 'Logo, colors and typography that make your brand memorable and consistent.',
      'Zhvillim & Performancë': 'Development & Performance', 'Kod i pastër dhe i shpejtë, që ngarkohet menjëherë dhe del në Google.': 'Clean, fast code that loads instantly and ranks on Google.',
      'Mirëmbajtje & Mbështetje': 'Maintenance & Support', 'Përditësime, ndryshime dhe ndihmë e vazhdueshme edhe pas dorëzimit.': 'Updates, changes and ongoing help even after delivery.',
      '(03) — Procesi': '(03) — Process', 'Si punojmë': 'How we work',
      'Bisedojmë': 'We talk', 'Më trego për biznesin dhe qëllimet e tua. Pa pagesë, pa detyrim — vetëm një bisedë.': 'Tell me about your business and goals. Free, no obligation — just a chat.',
      'Dizajnojmë': 'We design', 'Të përgatisim një pamje të faqes që ti e aprovon para se të nisim ndërtimin.': 'We prepare a design of the site that you approve before we start building.',
      'Ndërtojmë': 'We build', 'E kthejmë dizajnin në një faqe të vërtetë, të shpejtë dhe gati për klientët.': 'We turn the design into a real, fast site ready for your customers.',
      'Publikojmë': 'We launch', 'E nxjerrim faqen online, të mësojmë si ta përdorësh dhe mbetemi pranë për ty.': 'We put the site online, teach you how to use it and stay by your side.',
      'Çdo biznez meriton një prani online që e bën krenar. Ne e bëjmë teknologjinë të thjeshtë për ty.': 'Every business deserves an online presence it can be proud of. We make technology simple for you.',
      '(04) — Paketat': '(04) — Packages', 'Paketat tona': 'Our packages',
      'Zgjidh atë që të përshtatet — të japim një ofertë të qartë falas, pa detyrim.': 'Choose what suits you — we’ll give you a clear free quote, no obligation.',
      'Fillestar': 'Starter', 'Ideale për bizneset që duan një prani të parë online.': 'Ideal for businesses that want a first online presence.',
      'Faqe një-faqëshe (one-page)': 'One-page website', 'Dizajn modern & responsive': 'Modern & responsive design', 'Formë kontakti + WhatsApp': 'Contact form + WhatsApp', 'Publikim online': 'Online publishing',
      'Profesional': 'Professional', 'Për bizneset që duan një website të plotë e serioz.': 'For businesses that want a full, serious website.',
      'Deri në 6 faqe': 'Up to 6 pages', 'SEO bazik (dil në Google)': 'Basic SEO (get on Google)', 'Blog / lajme': 'Blog / news', 'Integrim me rrjetet sociale': 'Social media integration', '1 muaj mbështetje falas': '1 month free support',
      'Për ata që duan të shesin produkte online.': 'For those who want to sell products online.',
      'Produkte të palimituara': 'Unlimited products', 'Karrocë blerjeje & pagesa': 'Cart & payments', 'Menaxhim i lehtë porosish': 'Easy order management', 'Trajnim si ta përdorësh': 'Training on how to use it',
      'Merr ofertë': 'Get a quote',
      '(05) — Pyetje të shpeshta': '(05) — FAQ',
      'Sa kushton një website?': 'How much does a website cost?',
      'Varet nga nevojat e tua — shiko paketat më lart. Të japim gjithmonë një ofertë të qartë falas, pa detyrim.': 'It depends on your needs — see the packages above. We always give a clear free quote, no obligation.',
      'Sa kohë merr ndërtimi?': 'How long does it take?',
      'Zakonisht 1–3 javë, varësisht nga madhësia e projektit. Të japim një afat të saktë në fillim dhe e respektojmë.': 'Usually 1–3 weeks, depending on the project size. We give an exact deadline up front and keep it.',
      'A duhet të di gjëra teknike?': 'Do I need technical knowledge?',
      'Aspak. Ne marrim përsipër gjithçka — nga dizajni te publikimi. Ti përqendrohu te biznesi yt.': 'Not at all. We handle everything — from design to launch. You focus on your business.',
      'A mund ta përditësoj vetë faqen më pas?': 'Can I update the site myself later?',
      'Po. Të mësojmë si ta menaxhosh, ose e mirëmbajmë ne për ty me një tarifë mujore të vogël.': 'Yes. We teach you how to manage it, or we maintain it for you for a small monthly fee.',
      'Punoni vetëm me biznese në Tiranë?': 'Do you only work with businesses in Tirana?',
      'Jo. Punojmë me klientë në të gjithë Shqipërinë dhe jashtë saj — gjithçka mund të bëhet online.': 'No. We work with clients across Albania and abroad — everything can be done online.',
      '(06) — Le të fillojmë': '(06) — Let’s start', 'Le të bisedojmë.': 'Let’s talk.',
      'Telefon': 'Phone', 'Na shkruaj →': 'Message us →', 'Vendndodhja': 'Location', 'Tiranë, Shqipëri': 'Tirana, Albania',
      'Emri': 'Name', 'Biznesi (opsionale)': 'Business (optional)', 'Trego për projektin tënd': 'Tell us about your project', 'Dërgo kërkesën': 'Send request',
      'Studio web e pavarur që ndërton prani online për bizneset shqiptare.': 'Independent web studio building online presence for businesses.',
      'Menu': 'Menu', 'Kontakt': 'Contact', 'Social': 'Social'
    },
    /* ---------------- ITALIANO ---------------- */
    it: {
      'Puna': 'Lavori', 'Shërbimet': 'Servizi', 'Paketat': 'Pacchetti', 'Bisedo me ne': 'Parliamone',
      'Studio web që e bën biznesin tënd të duket profesional online.': 'Uno studio web che fa apparire la tua attività professionale online.',
      'Ndërtojmë website, dyqane online dhe identitet vizual për bizneset shqiptare — me dizajn modern, çmime të qarta dhe mbështetje në shqip.': 'Creiamo siti web, negozi online e identità visiva per le aziende — con design moderno, prezzi chiari e supporto reale.',
      'Merr ofertë falas': 'Richiedi un preventivo', 'Shiko paketat': 'Vedi i pacchetti',
      'Çfarë ofrojmë': 'Cosa offriamo',
      '(01) — Puna': '(01) — Lavori', 'Projekte të përzgjedhura': 'Progetti selezionati',
      'Disa nga faqet që kemi ndërtuar. Kliko për t\'i parë live.': 'Alcuni dei siti che abbiamo creato. Clicca per vederli dal vivo.',
      'Platformë Edukimi': 'Piattaforma educativa', 'Dyqan Online · Modë': 'Negozio online · Moda', 'Dyqan & Instalim': 'Negozio e installazione',
      '(02) — Shërbimet': '(02) — Servizi', 'Çfarë bëjmë': 'Cosa facciamo',
      'Website Prezantuese': 'Siti vetrina', 'Faqe që tregon kush je, çfarë ofron dhe pse të të zgjedhin — e ndërtuar nga e para për biznesin tënd.': 'Un sito che mostra chi sei, cosa offri e perché sceglierti — creato da zero per la tua attività.',
      'Dyqan Online': 'Negozio online', 'Platforma tregtie që shesin: karrocë blerjeje, pagesa të sigurta dhe menaxhim i lehtë.': 'Negozi che vendono: carrello, pagamenti sicuri e gestione semplice.',
      'Branding & Identitet': 'Branding e identità', 'Logo, ngjyra dhe tipografi që e bëjnë markën tënde të paharrueshme dhe konsistente.': 'Logo, colori e tipografia che rendono il tuo marchio memorabile e coerente.',
      'Zhvillim & Performancë': 'Sviluppo e performance', 'Kod i pastër dhe i shpejtë, që ngarkohet menjëherë dhe del në Google.': 'Codice pulito e veloce, che carica subito ed esce su Google.',
      'Mirëmbajtje & Mbështetje': 'Manutenzione e supporto', 'Përditësime, ndryshime dhe ndihmë e vazhdueshme edhe pas dorëzimit.': 'Aggiornamenti, modifiche e aiuto continuo anche dopo la consegna.',
      '(03) — Procesi': '(03) — Processo', 'Si punojmë': 'Come lavoriamo',
      'Bisedojmë': 'Parliamo', 'Më trego për biznesin dhe qëllimet e tua. Pa pagesë, pa detyrim — vetëm një bisedë.': 'Raccontami la tua attività e i tuoi obiettivi. Gratis, senza impegno — solo una chiacchierata.',
      'Dizajnojmë': 'Progettiamo', 'Të përgatisim një pamje të faqes që ti e aprovon para se të nisim ndërtimin.': 'Prepariamo un design del sito che approvi prima di iniziare a costruire.',
      'Ndërtojmë': 'Costruiamo', 'E kthejmë dizajnin në një faqe të vërtetë, të shpejtë dhe gati për klientët.': 'Trasformiamo il design in un sito reale, veloce e pronto per i clienti.',
      'Publikojmë': 'Pubblichiamo', 'E nxjerrim faqen online, të mësojmë si ta përdorësh dhe mbetemi pranë për ty.': 'Mettiamo il sito online, ti insegniamo a usarlo e restiamo al tuo fianco.',
      'Çdo biznez meriton një prani online që e bën krenar. Ne e bëjmë teknologjinë të thjeshtë për ty.': 'Ogni attività merita una presenza online di cui essere orgogliosa. Rendiamo la tecnologia semplice per te.',
      '(04) — Paketat': '(04) — Pacchetti', 'Paketat tona': 'I nostri pacchetti',
      'Zgjidh atë që të përshtatet — të japim një ofertë të qartë falas, pa detyrim.': 'Scegli quello che fa per te — ti diamo un preventivo chiaro e gratuito, senza impegno.',
      'Fillestar': 'Base', 'Ideale për bizneset që duan një prani të parë online.': 'Ideale per chi vuole una prima presenza online.',
      'Faqe një-faqëshe (one-page)': 'Sito di una pagina (one-page)', 'Dizajn modern & responsive': 'Design moderno e responsive', 'Formë kontakti + WhatsApp': 'Modulo di contatto + WhatsApp', 'Publikim online': 'Pubblicazione online',
      'Profesional': 'Professionale', 'Për bizneset që duan një website të plotë e serioz.': 'Per chi vuole un sito completo e serio.',
      'Deri në 6 faqe': 'Fino a 6 pagine', 'SEO bazik (dil në Google)': 'SEO di base (su Google)', 'Blog / lajme': 'Blog / notizie', 'Integrim me rrjetet sociale': 'Integrazione social', '1 muaj mbështetje falas': '1 mese di supporto gratis',
      'Për ata që duan të shesin produkte online.': 'Per chi vuole vendere prodotti online.',
      'Produkte të palimituara': 'Prodotti illimitati', 'Karrocë blerjeje & pagesa': 'Carrello e pagamenti', 'Menaxhim i lehtë porosish': 'Gestione facile degli ordini', 'Trajnim si ta përdorësh': 'Formazione all’uso',
      'Merr ofertë': 'Richiedi preventivo',
      '(05) — Pyetje të shpeshta': '(05) — FAQ',
      'Sa kushton një website?': 'Quanto costa un sito web?',
      'Varet nga nevojat e tua — shiko paketat më lart. Të japim gjithmonë një ofertë të qartë falas, pa detyrim.': 'Dipende dalle tue esigenze — vedi i pacchetti sopra. Diamo sempre un preventivo chiaro e gratuito, senza impegno.',
      'Sa kohë merr ndërtimi?': 'Quanto tempo richiede?',
      'Zakonisht 1–3 javë, varësisht nga madhësia e projektit. Të japim një afat të saktë në fillim dhe e respektojmë.': 'Di solito 1–3 settimane, in base alla dimensione del progetto. Diamo una scadenza precisa all’inizio e la rispettiamo.',
      'A duhet të di gjëra teknike?': 'Devo avere conoscenze tecniche?',
      'Aspak. Ne marrim përsipër gjithçka — nga dizajni te publikimi. Ti përqendrohu te biznesi yt.': 'Per niente. Ci occupiamo di tutto — dal design alla pubblicazione. Tu pensa alla tua attività.',
      'A mund ta përditësoj vetë faqen më pas?': 'Posso aggiornare il sito da solo in seguito?',
      'Po. Të mësojmë si ta menaxhosh, ose e mirëmbajmë ne për ty me një tarifë mujore të vogël.': 'Sì. Ti insegniamo a gestirlo, oppure lo manteniamo noi con una piccola quota mensile.',
      'Punoni vetëm me biznese në Tiranë?': 'Lavorate solo con attività di Tirana?',
      'Jo. Punojmë me klientë në të gjithë Shqipërinë dhe jashtë saj — gjithçka mund të bëhet online.': 'No. Lavoriamo con clienti in tutta l’Albania e all’estero — tutto si può fare online.',
      '(06) — Le të fillojmë': '(06) — Iniziamo', 'Le të bisedojmë.': 'Parliamone.',
      'Telefon': 'Telefono', 'Na shkruaj →': 'Scrivici →', 'Vendndodhja': 'Sede', 'Tiranë, Shqipëri': 'Tirana, Albania',
      'Emri': 'Nome', 'Biznesi (opsionale)': 'Attività (opzionale)', 'Trego për projektin tënd': 'Parlaci del tuo progetto', 'Dërgo kërkesën': 'Invia richiesta',
      'Studio web e pavarur që ndërton prani online për bizneset shqiptare.': 'Studio web indipendente che crea presenza online per le aziende.',
      'Menu': 'Menu', 'Kontakt': 'Contatti', 'Social': 'Social'
    },
    /* ---------------- DEUTSCH ---------------- */
    de: {
      'Puna': 'Arbeiten', 'Shërbimet': 'Leistungen', 'Paketat': 'Pakete', 'Bisedo me ne': 'Kontakt',
      'Studio web që e bën biznesin tënd të duket profesional online.': 'Ein Web-Studio, das Ihr Unternehmen online professionell wirken lässt.',
      'Ndërtojmë website, dyqane online dhe identitet vizual për bizneset shqiptare — me dizajn modern, çmime të qarta dhe mbështetje në shqip.': 'Wir bauen Websites, Online-Shops und visuelle Identität für Unternehmen — mit modernem Design, klaren Preisen und echtem Support.',
      'Merr ofertë falas': 'Kostenloses Angebot', 'Shiko paketat': 'Pakete ansehen',
      'Çfarë ofrojmë': 'Was wir bieten',
      '(01) — Puna': '(01) — Arbeiten', 'Projekte të përzgjedhura': 'Ausgewählte Projekte',
      'Disa nga faqet që kemi ndërtuar. Kliko për t\'i parë live.': 'Einige der Websites, die wir gebaut haben. Klicken Sie, um sie live zu sehen.',
      'Platformë Edukimi': 'Bildungsplattform', 'Dyqan Online · Modë': 'Online-Shop · Mode', 'Dyqan & Instalim': 'Shop & Installation',
      '(02) — Shërbimet': '(02) — Leistungen', 'Çfarë bëjmë': 'Was wir tun',
      'Website Prezantuese': 'Unternehmens-Websites', 'Faqe që tregon kush je, çfarë ofron dhe pse të të zgjedhin — e ndërtuar nga e para për biznesin tënd.': 'Eine Seite, die zeigt, wer Sie sind, was Sie bieten und warum man Sie wählt — von Grund auf für Ihr Unternehmen gebaut.',
      'Dyqan Online': 'Online-Shop', 'Platforma tregtie që shesin: karrocë blerjeje, pagesa të sigurta dhe menaxhim i lehtë.': 'Shops, die verkaufen: Warenkorb, sichere Zahlungen und einfache Verwaltung.',
      'Branding & Identitet': 'Branding & Identität', 'Logo, ngjyra dhe tipografi që e bëjnë markën tënde të paharrueshme dhe konsistente.': 'Logo, Farben und Typografie, die Ihre Marke einprägsam und konsistent machen.',
      'Zhvillim & Performancë': 'Entwicklung & Performance', 'Kod i pastër dhe i shpejtë, që ngarkohet menjëherë dhe del në Google.': 'Sauberer, schneller Code, der sofort lädt und bei Google erscheint.',
      'Mirëmbajtje & Mbështetje': 'Wartung & Support', 'Përditësime, ndryshime dhe ndihmë e vazhdueshme edhe pas dorëzimit.': 'Updates, Änderungen und laufende Hilfe auch nach der Übergabe.',
      '(03) — Procesi': '(03) — Prozess', 'Si punojmë': 'So arbeiten wir',
      'Bisedojmë': 'Wir sprechen', 'Më trego për biznesin dhe qëllimet e tua. Pa pagesë, pa detyrim — vetëm një bisedë.': 'Erzählen Sie mir von Ihrem Unternehmen und Ihren Zielen. Kostenlos, unverbindlich — einfach ein Gespräch.',
      'Dizajnojmë': 'Wir gestalten', 'Të përgatisim një pamje të faqes që ti e aprovon para se të nisim ndërtimin.': 'Wir erstellen ein Design der Seite, das Sie freigeben, bevor wir mit dem Bau beginnen.',
      'Ndërtojmë': 'Wir bauen', 'E kthejmë dizajnin në një faqe të vërtetë, të shpejtë dhe gati për klientët.': 'Wir verwandeln das Design in eine echte, schnelle und kundenbereite Seite.',
      'Publikojmë': 'Wir veröffentlichen', 'E nxjerrim faqen online, të mësojmë si ta përdorësh dhe mbetemi pranë për ty.': 'Wir bringen die Seite online, zeigen Ihnen die Nutzung und bleiben an Ihrer Seite.',
      'Çdo biznez meriton një prani online që e bën krenar. Ne e bëjmë teknologjinë të thjeshtë për ty.': 'Jedes Unternehmen verdient eine Online-Präsenz, auf die es stolz sein kann. Wir machen Technik für Sie einfach.',
      '(04) — Paketat': '(04) — Pakete', 'Paketat tona': 'Unsere Pakete',
      'Zgjidh atë që të përshtatet — të japim një ofertë të qartë falas, pa detyrim.': 'Wählen Sie, was zu Ihnen passt — wir geben Ihnen ein klares, kostenloses Angebot, unverbindlich.',
      'Fillestar': 'Starter', 'Ideale për bizneset që duan një prani të parë online.': 'Ideal für Unternehmen, die eine erste Online-Präsenz wollen.',
      'Faqe një-faqëshe (one-page)': 'Einseitige Website (One-Page)', 'Dizajn modern & responsive': 'Modernes & responsives Design', 'Formë kontakti + WhatsApp': 'Kontaktformular + WhatsApp', 'Publikim online': 'Online-Veröffentlichung',
      'Profesional': 'Professional', 'Për bizneset që duan një website të plotë e serioz.': 'Für Unternehmen, die eine vollständige, seriöse Website wollen.',
      'Deri në 6 faqe': 'Bis zu 6 Seiten', 'SEO bazik (dil në Google)': 'Basis-SEO (bei Google erscheinen)', 'Blog / lajme': 'Blog / News', 'Integrim me rrjetet sociale': 'Social-Media-Integration', '1 muaj mbështetje falas': '1 Monat Support gratis',
      'Për ata që duan të shesin produkte online.': 'Für alle, die Produkte online verkaufen wollen.',
      'Produkte të palimituara': 'Unbegrenzte Produkte', 'Karrocë blerjeje & pagesa': 'Warenkorb & Zahlungen', 'Menaxhim i lehtë porosish': 'Einfache Bestellverwaltung', 'Trajnim si ta përdorësh': 'Schulung zur Nutzung',
      'Merr ofertë': 'Angebot anfordern',
      '(05) — Pyetje të shpeshta': '(05) — FAQ',
      'Sa kushton një website?': 'Was kostet eine Website?',
      'Varet nga nevojat e tua — shiko paketat më lart. Të japim gjithmonë një ofertë të qartë falas, pa detyrim.': 'Das hängt von Ihren Anforderungen ab — siehe Pakete oben. Wir geben immer ein klares, kostenloses Angebot, unverbindlich.',
      'Sa kohë merr ndërtimi?': 'Wie lange dauert es?',
      'Zakonisht 1–3 javë, varësisht nga madhësia e projektit. Të japim një afat të saktë në fillim dhe e respektojmë.': 'Meist 1–3 Wochen, je nach Projektgröße. Wir nennen zu Beginn einen genauen Termin und halten ihn ein.',
      'A duhet të di gjëra teknike?': 'Brauche ich technisches Wissen?',
      'Aspak. Ne marrim përsipër gjithçka — nga dizajni te publikimi. Ti përqendrohu te biznesi yt.': 'Überhaupt nicht. Wir kümmern uns um alles — vom Design bis zur Veröffentlichung. Sie konzentrieren sich auf Ihr Geschäft.',
      'A mund ta përditësoj vetë faqen më pas?': 'Kann ich die Seite später selbst aktualisieren?',
      'Po. Të mësojmë si ta menaxhosh, ose e mirëmbajmë ne për ty me një tarifë mujore të vogël.': 'Ja. Wir zeigen Ihnen die Verwaltung, oder wir pflegen sie für Sie gegen eine kleine monatliche Gebühr.',
      'Punoni vetëm me biznese në Tiranë?': 'Arbeiten Sie nur mit Unternehmen in Tirana?',
      'Jo. Punojmë me klientë në të gjithë Shqipërinë dhe jashtë saj — gjithçka mund të bëhet online.': 'Nein. Wir arbeiten mit Kunden in ganz Albanien und im Ausland — alles geht online.',
      '(06) — Le të fillojmë': '(06) — Loslegen', 'Le të bisedojmë.': 'Sprechen wir.',
      'Telefon': 'Telefon', 'Na shkruaj →': 'Schreiben Sie uns →', 'Vendndodhja': 'Standort', 'Tiranë, Shqipëri': 'Tirana, Albanien',
      'Emri': 'Name', 'Biznesi (opsionale)': 'Unternehmen (optional)', 'Trego për projektin tënd': 'Erzählen Sie von Ihrem Projekt', 'Dërgo kërkesën': 'Anfrage senden',
      'Studio web e pavarur që ndërton prani online për bizneset shqiptare.': 'Unabhängiges Web-Studio, das Online-Präsenz für Unternehmen schafft.',
      'Menu': 'Menü', 'Kontakt': 'Kontakt', 'Social': 'Social'
    },
    /* ---------------- FRANÇAIS ---------------- */
    fr: {
      'Puna': 'Projets', 'Shërbimet': 'Services', 'Paketat': 'Forfaits', 'Bisedo me ne': 'Discutons',
      'Studio web që e bën biznesin tënd të duket profesional online.': 'Un studio web qui rend votre entreprise professionnelle en ligne.',
      'Ndërtojmë website, dyqane online dhe identitet vizual për bizneset shqiptare — me dizajn modern, çmime të qarta dhe mbështetje në shqip.': 'Nous créons des sites web, des boutiques en ligne et une identité visuelle pour les entreprises — design moderne, prix clairs et vrai support.',
      'Merr ofertë falas': 'Devis gratuit', 'Shiko paketat': 'Voir les forfaits',
      'Çfarë ofrojmë': 'Ce que nous offrons',
      '(01) — Puna': '(01) — Projets', 'Projekte të përzgjedhura': 'Projets sélectionnés',
      'Disa nga faqet që kemi ndërtuar. Kliko për t\'i parë live.': 'Quelques-uns des sites que nous avons créés. Cliquez pour les voir en direct.',
      'Platformë Edukimi': 'Plateforme éducative', 'Dyqan Online · Modë': 'Boutique en ligne · Mode', 'Dyqan & Instalim': 'Boutique & installation',
      '(02) — Shërbimet': '(02) — Services', 'Çfarë bëjmë': 'Ce que nous faisons',
      'Website Prezantuese': 'Sites vitrines', 'Faqe që tregon kush je, çfarë ofron dhe pse të të zgjedhin — e ndërtuar nga e para për biznesin tënd.': 'Un site qui montre qui vous êtes, ce que vous offrez et pourquoi vous choisir — créé sur mesure pour votre entreprise.',
      'Dyqan Online': 'Boutique en ligne', 'Platforma tregtie që shesin: karrocë blerjeje, pagesa të sigurta dhe menaxhim i lehtë.': 'Des boutiques qui vendent : panier, paiements sécurisés et gestion simple.',
      'Branding & Identitet': 'Branding & identité', 'Logo, ngjyra dhe tipografi që e bëjnë markën tënde të paharrueshme dhe konsistente.': 'Logo, couleurs et typographie qui rendent votre marque mémorable et cohérente.',
      'Zhvillim & Performancë': 'Développement & performance', 'Kod i pastër dhe i shpejtë, që ngarkohet menjëherë dhe del në Google.': 'Un code propre et rapide, qui charge instantanément et apparaît sur Google.',
      'Mirëmbajtje & Mbështetje': 'Maintenance & support', 'Përditësime, ndryshime dhe ndihmë e vazhdueshme edhe pas dorëzimit.': 'Mises à jour, modifications et aide continue même après la livraison.',
      '(03) — Procesi': '(03) — Processus', 'Si punojmë': 'Comment nous travaillons',
      'Bisedojmë': 'On discute', 'Më trego për biznesin dhe qëllimet e tua. Pa pagesë, pa detyrim — vetëm një bisedë.': 'Parlez-moi de votre entreprise et de vos objectifs. Gratuit, sans engagement — juste une discussion.',
      'Dizajnojmë': 'On conçoit', 'Të përgatisim një pamje të faqes që ti e aprovon para se të nisim ndërtimin.': 'Nous préparons une maquette du site que vous validez avant de commencer la construction.',
      'Ndërtojmë': 'On construit', 'E kthejmë dizajnin në një faqe të vërtetë, të shpejtë dhe gati për klientët.': 'Nous transformons le design en un site réel, rapide et prêt pour vos clients.',
      'Publikojmë': 'On publie', 'E nxjerrim faqen online, të mësojmë si ta përdorësh dhe mbetemi pranë për ty.': 'Nous mettons le site en ligne, vous apprenons à l’utiliser et restons à vos côtés.',
      'Çdo biznez meriton një prani online që e bën krenar. Ne e bëjmë teknologjinë të thjeshtë për ty.': 'Chaque entreprise mérite une présence en ligne dont elle est fière. Nous rendons la technologie simple pour vous.',
      '(04) — Paketat': '(04) — Forfaits', 'Paketat tona': 'Nos forfaits',
      'Zgjidh atë që të përshtatet — të japim një ofertë të qartë falas, pa detyrim.': 'Choisissez ce qui vous convient — nous vous donnons un devis clair et gratuit, sans engagement.',
      'Fillestar': 'Découverte', 'Ideale për bizneset që duan një prani të parë online.': 'Idéal pour une première présence en ligne.',
      'Faqe një-faqëshe (one-page)': 'Site une page (one-page)', 'Dizajn modern & responsive': 'Design moderne & responsive', 'Formë kontakti + WhatsApp': 'Formulaire de contact + WhatsApp', 'Publikim online': 'Mise en ligne',
      'Profesional': 'Professionnel', 'Për bizneset që duan një website të plotë e serioz.': 'Pour les entreprises qui veulent un site complet et sérieux.',
      'Deri në 6 faqe': 'Jusqu’à 6 pages', 'SEO bazik (dil në Google)': 'SEO de base (sur Google)', 'Blog / lajme': 'Blog / actualités', 'Integrim me rrjetet sociale': 'Intégration réseaux sociaux', '1 muaj mbështetje falas': '1 mois de support gratuit',
      'Për ata që duan të shesin produkte online.': 'Pour ceux qui veulent vendre des produits en ligne.',
      'Produkte të palimituara': 'Produits illimités', 'Karrocë blerjeje & pagesa': 'Panier & paiements', 'Menaxhim i lehtë porosish': 'Gestion facile des commandes', 'Trajnim si ta përdorësh': 'Formation à l’utilisation',
      'Merr ofertë': 'Demander un devis',
      '(05) — Pyetje të shpeshta': '(05) — FAQ',
      'Sa kushton një website?': 'Combien coûte un site web ?',
      'Varet nga nevojat e tua — shiko paketat më lart. Të japim gjithmonë një ofertë të qartë falas, pa detyrim.': 'Cela dépend de vos besoins — voir les forfaits ci-dessus. Nous donnons toujours un devis clair et gratuit, sans engagement.',
      'Sa kohë merr ndërtimi?': 'Combien de temps cela prend-il ?',
      'Zakonisht 1–3 javë, varësisht nga madhësia e projektit. Të japim një afat të saktë në fillim dhe e respektojmë.': 'En général 1 à 3 semaines, selon la taille du projet. Nous donnons un délai précis au début et le respectons.',
      'A duhet të di gjëra teknike?': 'Dois-je avoir des connaissances techniques ?',
      'Aspak. Ne marrim përsipër gjithçka — nga dizajni te publikimi. Ti përqendrohu te biznesi yt.': 'Pas du tout. Nous nous occupons de tout — du design à la mise en ligne. Vous, concentrez-vous sur votre activité.',
      'A mund ta përditësoj vetë faqen më pas?': 'Puis-je mettre à jour le site moi-même ensuite ?',
      'Po. Të mësojmë si ta menaxhosh, ose e mirëmbajmë ne për ty me një tarifë mujore të vogël.': 'Oui. Nous vous apprenons à le gérer, ou nous l’entretenons pour vous moyennant un petit forfait mensuel.',
      'Punoni vetëm me biznese në Tiranë?': 'Travaillez-vous uniquement avec des entreprises de Tirana ?',
      'Jo. Punojmë me klientë në të gjithë Shqipërinë dhe jashtë saj — gjithçka mund të bëhet online.': 'Non. Nous travaillons avec des clients dans toute l’Albanie et à l’étranger — tout peut se faire en ligne.',
      '(06) — Le të fillojmë': '(06) — Commençons', 'Le të bisedojmë.': 'Discutons.',
      'Telefon': 'Téléphone', 'Na shkruaj →': 'Écrivez-nous →', 'Vendndodhja': 'Localisation', 'Tiranë, Shqipëri': 'Tirana, Albanie',
      'Emri': 'Nom', 'Biznesi (opsionale)': 'Entreprise (facultatif)', 'Trego për projektin tënd': 'Parlez-nous de votre projet', 'Dërgo kërkesën': 'Envoyer la demande',
      'Studio web e pavarur që ndërton prani online për bizneset shqiptare.': 'Studio web indépendant qui crée une présence en ligne pour les entreprises.',
      'Menu': 'Menu', 'Kontakt': 'Contact', 'Social': 'Réseaux'
    },
    /* ---------------- ESPAÑOL ---------------- */
    es: {
      'Puna': 'Proyectos', 'Shërbimet': 'Servicios', 'Paketat': 'Paquetes', 'Bisedo me ne': 'Hablemos',
      'Studio web që e bën biznesin tënd të duket profesional online.': 'Un estudio web que hace que tu negocio se vea profesional en internet.',
      'Ndërtojmë website, dyqane online dhe identitet vizual për bizneset shqiptare — me dizajn modern, çmime të qarta dhe mbështetje në shqip.': 'Creamos sitios web, tiendas online e identidad visual para negocios — con diseño moderno, precios claros y soporte real.',
      'Merr ofertë falas': 'Presupuesto gratis', 'Shiko paketat': 'Ver paquetes',
      'Çfarë ofrojmë': 'Qué ofrecemos',
      '(01) — Puna': '(01) — Proyectos', 'Projekte të përzgjedhura': 'Proyectos seleccionados',
      'Disa nga faqet që kemi ndërtuar. Kliko për t\'i parë live.': 'Algunos de los sitios que hemos creado. Haz clic para verlos en vivo.',
      'Platformë Edukimi': 'Plataforma educativa', 'Dyqan Online · Modë': 'Tienda online · Moda', 'Dyqan & Instalim': 'Tienda e instalación',
      '(02) — Shërbimet': '(02) — Servicios', 'Çfarë bëjmë': 'Qué hacemos',
      'Website Prezantuese': 'Sitios corporativos', 'Faqe që tregon kush je, çfarë ofron dhe pse të të zgjedhin — e ndërtuar nga e para për biznesin tënd.': 'Un sitio que muestra quién eres, qué ofreces y por qué elegirte — creado desde cero para tu negocio.',
      'Dyqan Online': 'Tienda online', 'Platforma tregtie që shesin: karrocë blerjeje, pagesa të sigurta dhe menaxhim i lehtë.': 'Tiendas que venden: carrito, pagos seguros y gestión sencilla.',
      'Branding & Identitet': 'Branding e identidad', 'Logo, ngjyra dhe tipografi që e bëjnë markën tënde të paharrueshme dhe konsistente.': 'Logo, colores y tipografía que hacen tu marca memorable y coherente.',
      'Zhvillim & Performancë': 'Desarrollo y rendimiento', 'Kod i pastër dhe i shpejtë, që ngarkohet menjëherë dhe del në Google.': 'Código limpio y rápido, que carga al instante y aparece en Google.',
      'Mirëmbajtje & Mbështetje': 'Mantenimiento y soporte', 'Përditësime, ndryshime dhe ndihmë e vazhdueshme edhe pas dorëzimit.': 'Actualizaciones, cambios y ayuda continua incluso tras la entrega.',
      '(03) — Procesi': '(03) — Proceso', 'Si punojmë': 'Cómo trabajamos',
      'Bisedojmë': 'Hablamos', 'Më trego për biznesin dhe qëllimet e tua. Pa pagesë, pa detyrim — vetëm një bisedë.': 'Cuéntame sobre tu negocio y tus objetivos. Gratis, sin compromiso — solo una charla.',
      'Dizajnojmë': 'Diseñamos', 'Të përgatisim një pamje të faqes që ti e aprovon para se të nisim ndërtimin.': 'Preparamos un diseño del sitio que apruebas antes de empezar a construir.',
      'Ndërtojmë': 'Construimos', 'E kthejmë dizajnin në një faqe të vërtetë, të shpejtë dhe gati për klientët.': 'Convertimos el diseño en un sitio real, rápido y listo para tus clientes.',
      'Publikojmë': 'Publicamos', 'E nxjerrim faqen online, të mësojmë si ta përdorësh dhe mbetemi pranë për ty.': 'Ponemos el sitio en línea, te enseñamos a usarlo y seguimos a tu lado.',
      'Çdo biznez meriton një prani online që e bën krenar. Ne e bëjmë teknologjinë të thjeshtë për ty.': 'Todo negocio merece una presencia online de la que sentirse orgulloso. Hacemos la tecnología simple para ti.',
      '(04) — Paketat': '(04) — Paquetes', 'Paketat tona': 'Nuestros paquetes',
      'Zgjidh atë që të përshtatet — të japim një ofertë të qartë falas, pa detyrim.': 'Elige el que te convenga — te damos un presupuesto claro y gratuito, sin compromiso.',
      'Fillestar': 'Inicial', 'Ideale për bizneset që duan një prani të parë online.': 'Ideal para una primera presencia en internet.',
      'Faqe një-faqëshe (one-page)': 'Sitio de una página (one-page)', 'Dizajn modern & responsive': 'Diseño moderno y responsive', 'Formë kontakti + WhatsApp': 'Formulario de contacto + WhatsApp', 'Publikim online': 'Publicación online',
      'Profesional': 'Profesional', 'Për bizneset që duan një website të plotë e serioz.': 'Para negocios que quieren un sitio completo y serio.',
      'Deri në 6 faqe': 'Hasta 6 páginas', 'SEO bazik (dil në Google)': 'SEO básico (aparecer en Google)', 'Blog / lajme': 'Blog / noticias', 'Integrim me rrjetet sociale': 'Integración con redes sociales', '1 muaj mbështetje falas': '1 mes de soporte gratis',
      'Për ata që duan të shesin produkte online.': 'Para quienes quieren vender productos online.',
      'Produkte të palimituara': 'Productos ilimitados', 'Karrocë blerjeje & pagesa': 'Carrito y pagos', 'Menaxhim i lehtë porosish': 'Gestión fácil de pedidos', 'Trajnim si ta përdorësh': 'Formación de uso',
      'Merr ofertë': 'Pedir presupuesto',
      '(05) — Pyetje të shpeshta': '(05) — FAQ',
      'Sa kushton një website?': '¿Cuánto cuesta un sitio web?',
      'Varet nga nevojat e tua — shiko paketat më lart. Të japim gjithmonë një ofertë të qartë falas, pa detyrim.': 'Depende de tus necesidades — mira los paquetes arriba. Siempre damos un presupuesto claro y gratuito, sin compromiso.',
      'Sa kohë merr ndërtimi?': '¿Cuánto tiempo lleva?',
      'Zakonisht 1–3 javë, varësisht nga madhësia e projektit. Të japim një afat të saktë në fillim dhe e respektojmë.': 'Normalmente 1–3 semanas, según el tamaño del proyecto. Damos un plazo exacto al inicio y lo cumplimos.',
      'A duhet të di gjëra teknike?': '¿Necesito conocimientos técnicos?',
      'Aspak. Ne marrim përsipër gjithçka — nga dizajni te publikimi. Ti përqendrohu te biznesi yt.': 'Para nada. Nos encargamos de todo — del diseño a la publicación. Tú concéntrate en tu negocio.',
      'A mund ta përditësoj vetë faqen më pas?': '¿Puedo actualizar el sitio yo mismo después?',
      'Po. Të mësojmë si ta menaxhosh, ose e mirëmbajmë ne për ty me një tarifë mujore të vogël.': 'Sí. Te enseñamos a gestionarlo, o lo mantenemos por ti con una pequeña cuota mensual.',
      'Punoni vetëm me biznese në Tiranë?': '¿Solo trabajáis con negocios de Tirana?',
      'Jo. Punojmë me klientë në të gjithë Shqipërinë dhe jashtë saj — gjithçka mund të bëhet online.': 'No. Trabajamos con clientes en toda Albania y fuera — todo se puede hacer online.',
      '(06) — Le të fillojmë': '(06) — Empecemos', 'Le të bisedojmë.': 'Hablemos.',
      'Telefon': 'Teléfono', 'Na shkruaj →': 'Escríbenos →', 'Vendndodhja': 'Ubicación', 'Tiranë, Shqipëri': 'Tirana, Albania',
      'Emri': 'Nombre', 'Biznesi (opsionale)': 'Negocio (opcional)', 'Trego për projektin tënd': 'Cuéntanos sobre tu proyecto', 'Dërgo kërkesën': 'Enviar solicitud',
      'Studio web e pavarur që ndërton prani online për bizneset shqiptare.': 'Estudio web independiente que crea presencia online para negocios.',
      'Menu': 'Menú', 'Kontakt': 'Contacto', 'Social': 'Redes'
    },
    /* ---------------- PORTUGUÊS ---------------- */
    pt: {
      'Puna': 'Trabalhos', 'Shërbimet': 'Serviços', 'Paketat': 'Pacotes', 'Bisedo me ne': 'Vamos falar',
      'Studio web që e bën biznesin tënd të duket profesional online.': 'Um estúdio web que faz o seu negócio parecer profissional online.',
      'Ndërtojmë website, dyqane online dhe identitet vizual për bizneset shqiptare — me dizajn modern, çmime të qarta dhe mbështetje në shqip.': 'Criamos sites, lojas online e identidade visual para empresas — com design moderno, preços claros e apoio real.',
      'Merr ofertë falas': 'Orçamento grátis', 'Shiko paketat': 'Ver pacotes',
      'Çfarë ofrojmë': 'O que oferecemos',
      '(01) — Puna': '(01) — Trabalhos', 'Projekte të përzgjedhura': 'Projetos selecionados',
      'Disa nga faqet që kemi ndërtuar. Kliko për t\'i parë live.': 'Alguns dos sites que criámos. Clique para ver ao vivo.',
      'Platformë Edukimi': 'Plataforma de educação', 'Dyqan Online · Modë': 'Loja online · Moda', 'Dyqan & Instalim': 'Loja e instalação',
      '(02) — Shërbimet': '(02) — Serviços', 'Çfarë bëjmë': 'O que fazemos',
      'Website Prezantuese': 'Sites institucionais', 'Faqe që tregon kush je, çfarë ofron dhe pse të të zgjedhin — e ndërtuar nga e para për biznesin tënd.': 'Um site que mostra quem é, o que oferece e por que escolhê-lo — criado de raiz para o seu negócio.',
      'Dyqan Online': 'Loja online', 'Platforma tregtie që shesin: karrocë blerjeje, pagesa të sigurta dhe menaxhim i lehtë.': 'Lojas que vendem: carrinho, pagamentos seguros e gestão fácil.',
      'Branding & Identitet': 'Branding e identidade', 'Logo, ngjyra dhe tipografi që e bëjnë markën tënde të paharrueshme dhe konsistente.': 'Logótipo, cores e tipografia que tornam a sua marca memorável e consistente.',
      'Zhvillim & Performancë': 'Desenvolvimento e performance', 'Kod i pastër dhe i shpejtë, që ngarkohet menjëherë dhe del në Google.': 'Código limpo e rápido, que carrega de imediato e aparece no Google.',
      'Mirëmbajtje & Mbështetje': 'Manutenção e apoio', 'Përditësime, ndryshime dhe ndihmë e vazhdueshme edhe pas dorëzimit.': 'Atualizações, alterações e ajuda contínua mesmo após a entrega.',
      '(03) — Procesi': '(03) — Processo', 'Si punojmë': 'Como trabalhamos',
      'Bisedojmë': 'Conversamos', 'Më trego për biznesin dhe qëllimet e tua. Pa pagesë, pa detyrim — vetëm një bisedë.': 'Fale-me do seu negócio e dos seus objetivos. Grátis, sem compromisso — apenas uma conversa.',
      'Dizajnojmë': 'Desenhamos', 'Të përgatisim një pamje të faqes që ti e aprovon para se të nisim ndërtimin.': 'Preparamos um design do site que aprova antes de começarmos a construir.',
      'Ndërtojmë': 'Construímos', 'E kthejmë dizajnin në një faqe të vërtetë, të shpejtë dhe gati për klientët.': 'Transformamos o design num site real, rápido e pronto para os clientes.',
      'Publikojmë': 'Publicamos', 'E nxjerrim faqen online, të mësojmë si ta përdorësh dhe mbetemi pranë për ty.': 'Colocamos o site online, ensinamos a usá-lo e ficamos ao seu lado.',
      'Çdo biznez meriton një prani online që e bën krenar. Ne e bëjmë teknologjinë të thjeshtë për ty.': 'Todo negócio merece uma presença online de que se orgulhe. Tornamos a tecnologia simples para si.',
      '(04) — Paketat': '(04) — Pacotes', 'Paketat tona': 'Os nossos pacotes',
      'Zgjidh atë që të përshtatet — të japim një ofertë të qartë falas, pa detyrim.': 'Escolha o que lhe convém — damos um orçamento claro e grátis, sem compromisso.',
      'Fillestar': 'Inicial', 'Ideale për bizneset që duan një prani të parë online.': 'Ideal para uma primeira presença online.',
      'Faqe një-faqëshe (one-page)': 'Site de uma página (one-page)', 'Dizajn modern & responsive': 'Design moderno e responsivo', 'Formë kontakti + WhatsApp': 'Formulário de contacto + WhatsApp', 'Publikim online': 'Publicação online',
      'Profesional': 'Profissional', 'Për bizneset që duan një website të plotë e serioz.': 'Para quem quer um site completo e sério.',
      'Deri në 6 faqe': 'Até 6 páginas', 'SEO bazik (dil në Google)': 'SEO básico (aparecer no Google)', 'Blog / lajme': 'Blog / notícias', 'Integrim me rrjetet sociale': 'Integração com redes sociais', '1 muaj mbështetje falas': '1 mês de apoio grátis',
      'Për ata që duan të shesin produkte online.': 'Para quem quer vender produtos online.',
      'Produkte të palimituara': 'Produtos ilimitados', 'Karrocë blerjeje & pagesa': 'Carrinho e pagamentos', 'Menaxhim i lehtë porosish': 'Gestão fácil de encomendas', 'Trajnim si ta përdorësh': 'Formação de utilização',
      'Merr ofertë': 'Pedir orçamento',
      '(05) — Pyetje të shpeshta': '(05) — FAQ',
      'Sa kushton një website?': 'Quanto custa um site?',
      'Varet nga nevojat e tua — shiko paketat më lart. Të japim gjithmonë një ofertë të qartë falas, pa detyrim.': 'Depende das suas necessidades — veja os pacotes acima. Damos sempre um orçamento claro e grátis, sem compromisso.',
      'Sa kohë merr ndërtimi?': 'Quanto tempo demora?',
      'Zakonisht 1–3 javë, varësisht nga madhësia e projektit. Të japim një afat të saktë në fillim dhe e respektojmë.': 'Normalmente 1–3 semanas, conforme o tamanho do projeto. Damos um prazo exato no início e cumprimo-lo.',
      'A duhet të di gjëra teknike?': 'Preciso de conhecimentos técnicos?',
      'Aspak. Ne marrim përsipër gjithçka — nga dizajni te publikimi. Ti përqendrohu te biznesi yt.': 'De todo. Tratamos de tudo — do design à publicação. Você foca-se no seu negócio.',
      'A mund ta përditësoj vetë faqen më pas?': 'Posso atualizar o site sozinho depois?',
      'Po. Të mësojmë si ta menaxhosh, ose e mirëmbajmë ne për ty me një tarifë mujore të vogël.': 'Sim. Ensinamos a geri-lo, ou mantemo-lo por si por uma pequena taxa mensal.',
      'Punoni vetëm me biznese në Tiranë?': 'Trabalham só com empresas de Tirana?',
      'Jo. Punojmë me klientë në të gjithë Shqipërinë dhe jashtë saj — gjithçka mund të bëhet online.': 'Não. Trabalhamos com clientes em toda a Albânia e no estrangeiro — tudo pode ser feito online.',
      '(06) — Le të fillojmë': '(06) — Vamos começar', 'Le të bisedojmë.': 'Vamos falar.',
      'Telefon': 'Telefone', 'Na shkruaj →': 'Escreva-nos →', 'Vendndodhja': 'Localização', 'Tiranë, Shqipëri': 'Tirana, Albânia',
      'Emri': 'Nome', 'Biznesi (opsionale)': 'Negócio (opcional)', 'Trego për projektin tënd': 'Fale-nos do seu projeto', 'Dërgo kërkesën': 'Enviar pedido',
      'Studio web e pavarur që ndërton prani online për bizneset shqiptare.': 'Estúdio web independente que cria presença online para empresas.',
      'Menu': 'Menu', 'Kontakt': 'Contacto', 'Social': 'Social'
    },
    /* ---------------- NEDERLANDS ---------------- */
    nl: {
      'Puna': 'Werk', 'Shërbimet': 'Diensten', 'Paketat': 'Pakketten', 'Bisedo me ne': 'Neem contact op',
      'Studio web që e bën biznesin tënd të duket profesional online.': 'Een webstudio die jouw bedrijf online professioneel laat overkomen.',
      'Ndërtojmë website, dyqane online dhe identitet vizual për bizneset shqiptare — me dizajn modern, çmime të qarta dhe mbështetje në shqip.': 'Wij bouwen websites, webshops en visuele identiteit voor bedrijven — met modern design, heldere prijzen en echte ondersteuning.',
      'Merr ofertë falas': 'Gratis offerte', 'Shiko paketat': 'Bekijk pakketten',
      'Çfarë ofrojmë': 'Wat we bieden',
      '(01) — Puna': '(01) — Werk', 'Projekte të përzgjedhura': 'Geselecteerd werk',
      'Disa nga faqet që kemi ndërtuar. Kliko për t\'i parë live.': 'Enkele sites die we hebben gebouwd. Klik om ze live te bekijken.',
      'Platformë Edukimi': 'Onderwijsplatform', 'Dyqan Online · Modë': 'Webshop · Mode', 'Dyqan & Instalim': 'Winkel & installatie',
      '(02) — Shërbimet': '(02) — Diensten', 'Çfarë bëjmë': 'Wat we doen',
      'Website Prezantuese': 'Bedrijfswebsites', 'Faqe që tregon kush je, çfarë ofron dhe pse të të zgjedhin — e ndërtuar nga e para për biznesin tënd.': 'Een site die laat zien wie je bent, wat je biedt en waarom voor jou te kiezen — vanaf nul gebouwd voor jouw bedrijf.',
      'Dyqan Online': 'Webshop', 'Platforma tregtie që shesin: karrocë blerjeje, pagesa të sigurta dhe menaxhim i lehtë.': 'Shops die verkopen: winkelwagen, veilige betalingen en eenvoudig beheer.',
      'Branding & Identitet': 'Branding & identiteit', 'Logo, ngjyra dhe tipografi që e bëjnë markën tënde të paharrueshme dhe konsistente.': 'Logo, kleuren en typografie die je merk herkenbaar en consistent maken.',
      'Zhvillim & Performancë': 'Ontwikkeling & performance', 'Kod i pastër dhe i shpejtë, që ngarkohet menjëherë dhe del në Google.': 'Schone, snelle code die direct laadt en op Google verschijnt.',
      'Mirëmbajtje & Mbështetje': 'Onderhoud & support', 'Përditësime, ndryshime dhe ndihmë e vazhdueshme edhe pas dorëzimit.': 'Updates, wijzigingen en doorlopende hulp, ook na oplevering.',
      '(03) — Procesi': '(03) — Proces', 'Si punojmë': 'Hoe we werken',
      'Bisedojmë': 'We praten', 'Më trego për biznesin dhe qëllimet e tua. Pa pagesë, pa detyrim — vetëm një bisedë.': 'Vertel me over je bedrijf en je doelen. Gratis, vrijblijvend — gewoon een gesprek.',
      'Dizajnojmë': 'We ontwerpen', 'Të përgatisim një pamje të faqes që ti e aprovon para se të nisim ndërtimin.': 'We maken een ontwerp van de site dat je goedkeurt voordat we gaan bouwen.',
      'Ndërtojmë': 'We bouwen', 'E kthejmë dizajnin në një faqe të vërtetë, të shpejtë dhe gati për klientët.': 'We zetten het ontwerp om in een echte, snelle site klaar voor klanten.',
      'Publikojmë': 'We lanceren', 'E nxjerrim faqen online, të mësojmë si ta përdorësh dhe mbetemi pranë për ty.': 'We zetten de site online, leren je hoe je hem gebruikt en blijven naast je staan.',
      'Çdo biznez meriton një prani online që e bën krenar. Ne e bëjmë teknologjinë të thjeshtë për ty.': 'Elk bedrijf verdient een online aanwezigheid om trots op te zijn. Wij maken technologie simpel voor jou.',
      '(04) — Paketat': '(04) — Pakketten', 'Paketat tona': 'Onze pakketten',
      'Zgjidh atë që të përshtatet — të japim një ofertë të qartë falas, pa detyrim.': 'Kies wat bij je past — we geven een heldere gratis offerte, vrijblijvend.',
      'Fillestar': 'Starter', 'Ideale për bizneset që duan një prani të parë online.': 'Ideaal voor een eerste online aanwezigheid.',
      'Faqe një-faqëshe (one-page)': 'Eénpagina-website (one-page)', 'Dizajn modern & responsive': 'Modern & responsive ontwerp', 'Formë kontakti + WhatsApp': 'Contactformulier + WhatsApp', 'Publikim online': 'Online publicatie',
      'Profesional': 'Professioneel', 'Për bizneset që duan një website të plotë e serioz.': 'Voor bedrijven die een volledige, serieuze website willen.',
      'Deri në 6 faqe': 'Tot 6 pagina’s', 'SEO bazik (dil në Google)': 'Basis-SEO (vindbaar op Google)', 'Blog / lajme': 'Blog / nieuws', 'Integrim me rrjetet sociale': 'Integratie met social media', '1 muaj mbështetje falas': '1 maand gratis support',
      'Për ata që duan të shesin produkte online.': 'Voor wie producten online wil verkopen.',
      'Produkte të palimituara': 'Onbeperkt producten', 'Karrocë blerjeje & pagesa': 'Winkelwagen & betalingen', 'Menaxhim i lehtë porosish': 'Eenvoudig bestelbeheer', 'Trajnim si ta përdorësh': 'Training in het gebruik',
      'Merr ofertë': 'Offerte aanvragen',
      '(05) — Pyetje të shpeshta': '(05) — FAQ',
      'Sa kushton një website?': 'Wat kost een website?',
      'Varet nga nevojat e tua — shiko paketat më lart. Të japim gjithmonë një ofertë të qartë falas, pa detyrim.': 'Dat hangt af van je wensen — zie de pakketten hierboven. We geven altijd een heldere gratis offerte, vrijblijvend.',
      'Sa kohë merr ndërtimi?': 'Hoe lang duurt het?',
      'Zakonisht 1–3 javë, varësisht nga madhësia e projektit. Të japim një afat të saktë në fillim dhe e respektojmë.': 'Meestal 1–3 weken, afhankelijk van de omvang. We geven vooraf een exacte deadline en houden ons eraan.',
      'A duhet të di gjëra teknike?': 'Heb ik technische kennis nodig?',
      'Aspak. Ne marrim përsipër gjithçka — nga dizajni te publikimi. Ti përqendrohu te biznesi yt.': 'Helemaal niet. Wij regelen alles — van ontwerp tot publicatie. Jij richt je op je bedrijf.',
      'A mund ta përditësoj vetë faqen më pas?': 'Kan ik de site later zelf bijwerken?',
      'Po. Të mësojmë si ta menaxhosh, ose e mirëmbajmë ne për ty me një tarifë mujore të vogël.': 'Ja. We leren je het te beheren, of we onderhouden het voor je tegen een klein maandbedrag.',
      'Punoni vetëm me biznese në Tiranë?': 'Werken jullie alleen met bedrijven in Tirana?',
      'Jo. Punojmë me klientë në të gjithë Shqipërinë dhe jashtë saj — gjithçka mund të bëhet online.': 'Nee. We werken met klanten in heel Albanië en daarbuiten — alles kan online.',
      '(06) — Le të fillojmë': '(06) — Laten we beginnen', 'Le të bisedojmë.': 'Laten we praten.',
      'Telefon': 'Telefoon', 'Na shkruaj →': 'Stuur ons een bericht →', 'Vendndodhja': 'Locatie', 'Tiranë, Shqipëri': 'Tirana, Albanië',
      'Emri': 'Naam', 'Biznesi (opsionale)': 'Bedrijf (optioneel)', 'Trego për projektin tënd': 'Vertel ons over je project', 'Dërgo kërkesën': 'Verzoek versturen',
      'Studio web e pavarur që ndërton prani online për bizneset shqiptare.': 'Onafhankelijke webstudio die online aanwezigheid voor bedrijven bouwt.',
      'Menu': 'Menu', 'Kontakt': 'Contact', 'Social': 'Social'
    },
    /* ---------------- TÜRKÇE ---------------- */
    tr: {
      'Puna': 'İşler', 'Shërbimet': 'Hizmetler', 'Paketat': 'Paketler', 'Bisedo me ne': 'İletişime geç',
      'Studio web që e bën biznesin tënd të duket profesional online.': 'İşletmenizi internette profesyonel gösteren bir web stüdyosu.',
      'Ndërtojmë website, dyqane online dhe identitet vizual për bizneset shqiptare — me dizajn modern, çmime të qarta dhe mbështetje në shqip.': 'İşletmeler için web siteleri, online mağazalar ve görsel kimlik oluşturuyoruz — modern tasarım, net fiyatlar ve gerçek destekle.',
      'Merr ofertë falas': 'Ücretsiz teklif al', 'Shiko paketat': 'Paketleri gör',
      'Çfarë ofrojmë': 'Ne sunuyoruz',
      '(01) — Puna': '(01) — İşler', 'Projekte të përzgjedhura': 'Seçili projeler',
      'Disa nga faqet që kemi ndërtuar. Kliko për t\'i parë live.': 'Yaptığımız sitelerden bazıları. Canlı görmek için tıklayın.',
      'Platformë Edukimi': 'Eğitim Platformu', 'Dyqan Online · Modë': 'Online Mağaza · Moda', 'Dyqan & Instalim': 'Mağaza & Kurulum',
      '(02) — Shërbimet': '(02) — Hizmetler', 'Çfarë bëjmë': 'Ne yapıyoruz',
      'Website Prezantuese': 'Kurumsal Web Siteleri', 'Faqe që tregon kush je, çfarë ofron dhe pse të të zgjedhin — e ndërtuar nga e para për biznesin tënd.': 'Kim olduğunuzu, ne sunduğunuzu ve neden sizi seçmeleri gerektiğini gösteren bir site — işletmeniz için sıfırdan yapılır.',
      'Dyqan Online': 'Online Mağaza', 'Platforma tregtie që shesin: karrocë blerjeje, pagesa të sigurta dhe menaxhim i lehtë.': 'Satış yapan mağazalar: sepet, güvenli ödeme ve kolay yönetim.',
      'Branding & Identitet': 'Marka & Kimlik', 'Logo, ngjyra dhe tipografi që e bëjnë markën tënde të paharrueshme dhe konsistente.': 'Markanızı akılda kalıcı ve tutarlı yapan logo, renk ve tipografi.',
      'Zhvillim & Performancë': 'Geliştirme & Performans', 'Kod i pastër dhe i shpejtë, që ngarkohet menjëherë dhe del në Google.': 'Anında yüklenen ve Google’da çıkan temiz, hızlı kod.',
      'Mirëmbajtje & Mbështetje': 'Bakım & Destek', 'Përditësime, ndryshime dhe ndihmë e vazhdueshme edhe pas dorëzimit.': 'Teslimden sonra da güncellemeler, değişiklikler ve sürekli yardım.',
      '(03) — Procesi': '(03) — Süreç', 'Si punojmë': 'Nasıl çalışırız',
      'Bisedojmë': 'Konuşuruz', 'Më trego për biznesin dhe qëllimet e tua. Pa pagesë, pa detyrim — vetëm një bisedë.': 'Bana işinizden ve hedeflerinizden bahsedin. Ücretsiz, taahhütsüz — sadece bir sohbet.',
      'Dizajnojmë': 'Tasarlarız', 'Të përgatisim një pamje të faqes që ti e aprovon para se të nisim ndërtimin.': 'İnşaata başlamadan önce onaylayacağınız bir site tasarımı hazırlarız.',
      'Ndërtojmë': 'İnşa ederiz', 'E kthejmë dizajnin në një faqe të vërtetë, të shpejtë dhe gati për klientët.': 'Tasarımı gerçek, hızlı ve müşteriye hazır bir siteye dönüştürürüz.',
      'Publikojmë': 'Yayınlarız', 'E nxjerrim faqen online, të mësojmë si ta përdorësh dhe mbetemi pranë për ty.': 'Siteyi yayına alırız, nasıl kullanılacağını öğretiriz ve yanınızda kalırız.',
      'Çdo biznez meriton një prani online që e bën krenar. Ne e bëjmë teknologjinë të thjeshtë për ty.': 'Her işletme gurur duyacağı bir çevrim içi varlığı hak eder. Teknolojiyi sizin için basitleştiririz.',
      '(04) — Paketat': '(04) — Paketler', 'Paketat tona': 'Paketlerimiz',
      'Zgjidh atë që të përshtatet — të japim një ofertë të qartë falas, pa detyrim.': 'Size uygun olanı seçin — net ve ücretsiz bir teklif veririz, taahhütsüz.',
      'Fillestar': 'Başlangıç', 'Ideale për bizneset që duan një prani të parë online.': 'İlk çevrim içi varlık için ideal.',
      'Faqe një-faqëshe (one-page)': 'Tek sayfa site (one-page)', 'Dizajn modern & responsive': 'Modern & responsive tasarım', 'Formë kontakti + WhatsApp': 'İletişim formu + WhatsApp', 'Publikim online': 'Çevrim içi yayın',
      'Profesional': 'Profesyonel', 'Për bizneset që duan një website të plotë e serioz.': 'Tam ve ciddi bir site isteyen işletmeler için.',
      'Deri në 6 faqe': '6 sayfaya kadar', 'SEO bazik (dil në Google)': 'Temel SEO (Google’da çık)', 'Blog / lajme': 'Blog / haberler', 'Integrim me rrjetet sociale': 'Sosyal medya entegrasyonu', '1 muaj mbështetje falas': '1 ay ücretsiz destek',
      'Për ata që duan të shesin produkte online.': 'Online ürün satmak isteyenler için.',
      'Produkte të palimituara': 'Sınırsız ürün', 'Karrocë blerjeje & pagesa': 'Sepet & ödemeler', 'Menaxhim i lehtë porosish': 'Kolay sipariş yönetimi', 'Trajnim si ta përdorësh': 'Kullanım eğitimi',
      'Merr ofertë': 'Teklif al',
      '(05) — Pyetje të shpeshta': '(05) — SSS',
      'Sa kushton një website?': 'Bir web sitesi ne kadar?',
      'Varet nga nevojat e tua — shiko paketat më lart. Të japim gjithmonë një ofertë të qartë falas, pa detyrim.': 'İhtiyaçlarınıza bağlı — yukarıdaki paketlere bakın. Her zaman net ve ücretsiz teklif veririz, taahhütsüz.',
      'Sa kohë merr ndërtimi?': 'Ne kadar sürer?',
      'Zakonisht 1–3 javë, varësisht nga madhësia e projektit. Të japim një afat të saktë në fillim dhe e respektojmë.': 'Genellikle 1–3 hafta, proje boyutuna göre. Başta net bir tarih veririz ve ona uyarız.',
      'A duhet të di gjëra teknike?': 'Teknik bilgi gerekir mi?',
      'Aspak. Ne marrim përsipër gjithçka — nga dizajni te publikimi. Ti përqendrohu te biznesi yt.': 'Hiç gerekmez. Her şeyi biz hallederiz — tasarımdan yayına. Siz işinize odaklanın.',
      'A mund ta përditësoj vetë faqen më pas?': 'Siteyi sonra kendim güncelleyebilir miyim?',
      'Po. Të mësojmë si ta menaxhosh, ose e mirëmbajmë ne për ty me një tarifë mujore të vogël.': 'Evet. Yönetmeyi size öğretiriz ya da küçük bir aylık ücretle biz bakımını yaparız.',
      'Punoni vetëm me biznese në Tiranë?': 'Sadece Tiran’daki işletmelerle mi çalışıyorsunuz?',
      'Jo. Punojmë me klientë në të gjithë Shqipërinë dhe jashtë saj — gjithçka mund të bëhet online.': 'Hayır. Tüm Arnavutluk’ta ve yurt dışında müşterilerle çalışıyoruz — her şey online yapılabilir.',
      '(06) — Le të fillojmë': '(06) — Başlayalım', 'Le të bisedojmë.': 'Konuşalım.',
      'Telefon': 'Telefon', 'Na shkruaj →': 'Bize yazın →', 'Vendndodhja': 'Konum', 'Tiranë, Shqipëri': 'Tiran, Arnavutluk',
      'Emri': 'Ad', 'Biznesi (opsionale)': 'İşletme (isteğe bağlı)', 'Trego për projektin tënd': 'Projenizden bahsedin', 'Dërgo kërkesën': 'Talebi gönder',
      'Studio web e pavarur që ndërton prani online për bizneset shqiptare.': 'İşletmeler için çevrim içi varlık oluşturan bağımsız web stüdyosu.',
      'Menu': 'Menü', 'Kontakt': 'İletişim', 'Social': 'Sosyal'
    }
  };

  /* ---------------- ENGINE ---------------- */
  var nodes = [];
  function initNodes() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.setAttribute('data-sq', el.textContent.trim());
      nodes.push(el);
    });
  }
  function apply(code) {
    document.documentElement.lang = code;
    document.documentElement.dir = (code === 'ar' || code === 'he' || code === 'fa') ? 'rtl' : 'ltr';
    nodes.forEach(function (el) {
      var sq = el.getAttribute('data-sq');
      if (code === 'sq') { el.textContent = sq; return; }
      var d = DICT[code];
      var t = d && d[sq];
      el.textContent = (t != null) ? t : sq;
    });
    try { localStorage.setItem('vx_lang', code); } catch (e) {}
    var cur = LANGS.filter(function (l) { return l.c === code; })[0] || LANGS[0];
    var lbl = document.getElementById('langCurrent');
    if (lbl) lbl.textContent = cur.c.toUpperCase();
    document.querySelectorAll('.lang-opt').forEach(function (o) {
      o.classList.toggle('active', o.getAttribute('data-c') === code);
    });
  }
  function buildGrid() {
    var grid = document.getElementById('langGrid');
    if (!grid) return;
    grid.innerHTML = LANGS.map(function (l) {
      return '<button class="lang-opt" data-c="' + l.c + '"><span class="lang-flag">' + l.f + '</span>' + l.n + '</button>';
    }).join('');
    grid.querySelectorAll('.lang-opt').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-c')); closeModal(); });
    });
  }
  function openModal() { var m = document.getElementById('langModal'); if (m) { m.classList.add('open'); m.setAttribute('aria-hidden', 'false'); } }
  function closeModal() { var m = document.getElementById('langModal'); if (m) { m.classList.remove('open'); m.setAttribute('aria-hidden', 'true'); } }

  document.addEventListener('DOMContentLoaded', function () {
    initNodes();
    buildGrid();
    var saved = null;
    try { saved = localStorage.getItem('vx_lang'); } catch (e) {}
    var urlLang = (location.hash.match(/lang=([a-z]{2})/) || [])[1];
    if (urlLang && (urlLang === 'sq' || DICT[urlLang])) { apply(urlLang); }
    else if (saved) { apply(saved); }
    else { apply('sq'); openModal(); } // vizita e parë → shfaq panelin
    var btn = document.getElementById('langBtn');
    if (btn) btn.addEventListener('click', openModal);
    var cl = document.getElementById('langClose');
    if (cl) cl.addEventListener('click', closeModal);
    var m = document.getElementById('langModal');
    if (m) m.addEventListener('click', function (e) { if (e.target === m) closeModal(); });
  });
})();
