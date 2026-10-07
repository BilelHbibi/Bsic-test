/* ==========================================================
   CONTENU DU SITE (FR / AR)
   - GROUPS : rubriques (titre + image de bannière)
   - PAGES  : pages internes (ouvertes via #/identifiant)
   - MENU, OFFERS, FOOTER, COUNTRIES, AGENCIES : données de l'accueil
   - NEWS   : actualités (photos dans images/actualites/<id>/)
   ========================================================== */

const GROUPS = {
  decouvrir:     { fr: "Découvrez la BSIC", ar: "تعرّف على BSIC", banner: "apropos" },
  particuliers:  { fr: "Particuliers", ar: "الأفراد", banner: "particuliers" },
  professionnels:{ fr: "Professionnels & PME", ar: "المهنيون والمؤسسات الصغيرة", banner: "carrieres" },
  entreprises:   { fr: "Entreprises & Institutionnels", ar: "الشركات والمؤسسات", banner: "entreprises" },
  actualites:    { fr: "BSIC à la une", ar: "أخبار BSIC", banner: "actualites" },
  services:      { fr: "Services", ar: "الخدمات", banner: "contact" },
  infos:         { fr: "Informations", ar: "معلومات", banner: "services" }
};

const PAGES = {
  /* ---------------- DÉCOUVREZ LA BSIC ---------------- */
  presentation: {
    group: "decouvrir", icon: "fa-landmark",
    fr: { title: "Présentation générale",
      intro: "BSIC Bank Côte d'Ivoire : One Vision, One Instrument.",
      body: `<h2>Qui sommes-nous ?</h2>
<p>BSIC Côte d'Ivoire est la filiale ivoirienne de la Banque Sahélo-Saharienne pour l'Investissement et le Commerce (BSIC), groupe bancaire régional créé à l'initiative de la Communauté des États Sahélo-Sahariens (CEN-SAD). Son siège est situé à Abidjan Plateau.</p>
<h2>Nos métiers</h2>
<p>La BSIC propose une gamme complète de services financiers : comptes et épargne, financement d'actifs, financement du commerce international, gestion de trésorerie, conseil et gestion de patrimoine. Elle accompagne les particuliers, les PME, les grandes entreprises et les institutions.</p>
<h2>Notre approche</h2>
<ul class="list"><li>Des décisions prises localement et rapidement</li><li>Des financements construits sur mesure, selon votre activité et vos actifs</li><li>Un interlocuteur dédié qui connaît votre dossier</li></ul>
<h2>Notre réseau en Côte d'Ivoire</h2>
<p>La BSIC développe son réseau d'agences à Abidjan et à l'intérieur du pays, avec notamment les agences de Marcory Résidentiel et d'Abidjan Mall.</p>` },
    ar: { title: "تقديم عام",
      intro: "BSIC بنك كوت ديفوار: رؤية واحدة، أداة واحدة.",
      body: `<h2>من نحن؟</h2>
<p>BSIC كوت ديفوار هو الفرع الإيفواري للمصرف الساحلي الصحراوي للاستثمار والتجارة، وهو مجموعة مصرفية إقليمية أُنشئت بمبادرة من تجمع دول الساحل والصحراء. يقع مقره في أبيدجان بلاتو.</p>
<h2>مهننا</h2>
<p>يقدم المصرف مجموعة متكاملة من الخدمات المالية: الحسابات والادخار، وتمويل الأصول، وتمويل التجارة الدولية، وتسيير الخزينة، والاستشارة وإدارة الثروات. ويرافق الأفراد والمؤسسات الصغيرة والمتوسطة والشركات الكبرى والمؤسسات.</p>
<h2>منهجنا</h2>
<ul class="list"><li>قرارات تُتخذ محليًا وبسرعة</li><li>تمويلات مصممة حسب نشاطكم وأصولكم</li><li>محاور مخصص يعرف ملفكم</li></ul>
<h2>شبكتنا في كوت ديفوار</h2>
<p>يطور المصرف شبكة وكالاته في أبيدجان وداخل البلاد، ولا سيما وكالتي ماركوري ريزيدونسيال وأبيدجان مول.</p>` }
  },

  histoire: {
    group: "decouvrir", icon: "fa-clock-rotate-left",
    fr: { title: "Histoire",
      intro: "Les grandes étapes du Groupe BSIC.",
      body: `<h2>1999 : la naissance du Groupe</h2>
<p>Le Groupe BSIC est créé le 14 avril 1999 avec l'idée de bâtir une grande institution bancaire régionale au sein de l'espace CEN-SAD. Son siège est établi à Tripoli.</p>
<h2>Un réseau qui s'étend</h2>
<p>Au fil des années, le Groupe ouvre des filiales dans plusieurs pays d'Afrique de l'Ouest et du Centre, et compte quatorze pays actionnaires.</p>
<h2>2009 : BSIC Côte d'Ivoire</h2>
<p>La filiale ivoirienne est créée le 4 juin 2009 et devient opérationnelle en janvier 2010, avec son siège à Abidjan Plateau.</p>
<h2>2026 : renforcement au Maroc</h2>
<p>Le Groupe renforce sa présence au Maroc avec l'aménagement de son bureau de représentation à Casablanca Finance City et la signature du premier contrat d'acquisition d'un siège à Rabat.</p>` },
    ar: { title: "تاريخنا",
      intro: "أهم المحطات في مسيرة مجموعة BSIC.",
      body: `<h2>1999: ميلاد المجموعة</h2>
<p>تأسست مجموعة BSIC في 14 أفريل 1999 بهدف بناء مؤسسة مصرفية إقليمية كبرى داخل فضاء تجمع الساحل والصحراء، واتخذت من طرابلس مقرًا لها.</p>
<h2>شبكة تتوسع</h2>
<p>على مر السنين، فتحت المجموعة فروعًا في عدة دول من غرب إفريقيا ووسطها، وتضم أربع عشرة دولة مساهمة.</p>
<h2>2009: BSIC كوت ديفوار</h2>
<p>تأسس الفرع الإيفواري في 4 جوان 2009 وبدأ نشاطه في جانفي 2010، ومقره في أبيدجان بلاتو.</p>
<h2>2026: تعزيز الحضور في المغرب</h2>
<p>عززت المجموعة حضورها في المغرب من خلال تهيئة مكتب تمثيلها بالقطب المالي للدار البيضاء وتوقيع العقد الأول لاقتناء مقر في الرباط.</p>` }
  },

  groupe: {
    group: "decouvrir", icon: "fa-globe-africa",
    fr: { title: "Le Groupe BSIC",
      intro: "Un réseau de filiales et de bureaux de représentation en Afrique.",
      body: `<h2>Un groupe bancaire régional</h2>
<p>Le Groupe BSIC réunit des filiales bancaires et des bureaux de représentation dans les pays de l'espace sahélo-saharien. Cette présence régionale permet d'accompagner les clients dans leurs opérations entre pays et de faciliter le commerce intra-africain.</p>
<h2>Nos implantations</h2>
<ul class="list"><li>Filiales : Bénin, Burkina Faso, Centrafrique, Côte d'Ivoire, Gambie, Ghana, Guinée, Mali, Niger, Sénégal, Soudan, Tchad, Togo</li><li>Bureaux de représentation, notamment au Maroc et en Tunisie</li></ul>
<div class="note">La liste des implantations est donnée à titre indicatif.</div>` },
    ar: { title: "مجموعة BSIC",
      intro: "شبكة من الفروع ومكاتب التمثيل في إفريقيا.",
      body: `<h2>مجموعة مصرفية إقليمية</h2>
<p>تضم مجموعة BSIC فروعًا مصرفية ومكاتب تمثيل في دول الفضاء الساحلي الصحراوي. ويتيح هذا الحضور الإقليمي مرافقة العملاء في عملياتهم بين الدول وتسهيل التجارة البينية الإفريقية.</p>
<h2>تواجدنا</h2>
<ul class="list"><li>الفروع: بنين، بوركينا فاسو، إفريقيا الوسطى، كوت ديفوار، غامبيا، غانا، غينيا، مالي، النيجر، السنغال، السودان، تشاد، توغو</li><li>مكاتب تمثيل، لا سيما في المغرب وتونس</li></ul>
<div class="note">قائمة التواجد مقدمة على سبيل الإرشاد.</div>` }
  },

  vision: {
    group: "decouvrir", icon: "fa-gem",
    fr: { title: "Nos valeurs",
      intro: "Ce qui guide notre relation avec chacun de nos clients.",
      body: `<h2>Nos cinq piliers</h2>
<ul class="list"><li><strong>Qualité de service :</strong> un accueil attentif et des réponses rapides.</li><li><strong>Solutions sur mesure :</strong> des produits adaptés à la situation de chaque client.</li><li><strong>Philosophie d'investissement :</strong> une approche réfléchie et de long terme.</li><li><strong>Prudence :</strong> une gestion rigoureuse des risques.</li><li><strong>Confiance, transparence et durabilité :</strong> une relation qui s'inscrit dans le temps.</li></ul>
<h2>Notre engagement</h2>
<p>Une relation personnalisée, une communication régulière avec nos clients et une totale transparence sur les conditions et les frais.</p>` },
    ar: { title: "قيمنا",
      intro: "ما يوجّه علاقتنا مع كل عميل من عملائنا.",
      body: `<h2>ركائزنا الخمس</h2>
<ul class="list"><li><strong>جودة الخدمة:</strong> استقبال حريص وردود سريعة.</li><li><strong>حلول حسب الطلب:</strong> منتجات ملائمة لوضعية كل عميل.</li><li><strong>فلسفة الاستثمار:</strong> مقاربة مدروسة وطويلة الأمد.</li><li><strong>الحذر:</strong> تسيير صارم للمخاطر.</li><li><strong>الثقة والشفافية والاستدامة:</strong> علاقة تمتد في الزمن.</li></ul>
<h2>التزامنا</h2>
<p>علاقة شخصية، وتواصل منتظم مع عملائنا، وشفافية تامة في الشروط والرسوم.</p>` }
  },

  rse: {
    group: "decouvrir", icon: "fa-leaf",
    fr: { title: "Responsabilité sociétale",
      intro: "Une banque responsable, attentive à son impact économique, social et environnemental.",
      body: `<h2>Notre démarche</h2>
<p>La BSIC intègre les enjeux de durabilité dans ses activités au moyen d'un cadre de gestion des risques environnementaux et sociaux appliqué à ses décisions de financement.</p>
<h2>Trois axes</h2>
<ul class="list"><li><strong>Une meilleure banque :</strong> une gouvernance exigeante et un service de qualité.</li><li><strong>Un monde meilleur :</strong> le soutien au développement économique et social de la région.</li><li><strong>La gestion des risques de durabilité :</strong> l'analyse de l'impact environnemental et social des projets financés.</li></ul>` },
    ar: { title: "المسؤولية المجتمعية",
      intro: "مصرف مسؤول يراعي أثره الاقتصادي والاجتماعي والبيئي.",
      body: `<h2>منهجنا</h2>
<p>يدمج المصرف رهانات الاستدامة في أنشطته من خلال إطار لإدارة المخاطر البيئية والاجتماعية يُطبق على قرارات التمويل.</p>
<h2>ثلاثة محاور</h2>
<ul class="list"><li><strong>مصرف أفضل:</strong> حوكمة صارمة وخدمة ذات جودة.</li><li><strong>عالم أفضل:</strong> دعم التنمية الاقتصادية والاجتماعية للمنطقة.</li><li><strong>إدارة مخاطر الاستدامة:</strong> تحليل الأثر البيئي والاجتماعي للمشاريع الممولة.</li></ul>` }
  },

  gouvernance: {
    group: "decouvrir", icon: "fa-sitemap",
    fr: { title: "Gouvernance",
      intro: "Une organisation au service d'une gestion saine et transparente.",
      body: `<h2>Le Conseil d'administration</h2>
<p>Le Conseil d'administration définit les orientations stratégiques de la banque et veille à leur mise en œuvre. Il s'appuie sur des comités spécialisés, notamment en matière d'audit et de gestion des risques.</p>
<h2>La Direction générale</h2>
<p>La Direction générale assure la gestion opérationnelle de la banque et la mise en œuvre de la stratégie définie par le Conseil d'administration.</p>
<h2>Cadre réglementaire</h2>
<p>La banque exerce ses activités dans le respect de la réglementation bancaire en vigueur et des normes prudentielles applicables.</p>` },
    ar: { title: "الحوكمة",
      intro: "تنظيم في خدمة تسيير سليم وشفاف.",
      body: `<h2>مجلس الإدارة</h2>
<p>يحدد مجلس الإدارة التوجهات الاستراتيجية للمصرف ويسهر على تنفيذها، معتمدًا على لجان متخصصة، لا سيما في مجالي التدقيق وإدارة المخاطر.</p>
<h2>الإدارة العامة</h2>
<p>تتولى الإدارة العامة التسيير العملياتي للمصرف وتنفيذ الاستراتيجية التي يحددها مجلس الإدارة.</p>
<h2>الإطار التنظيمي</h2>
<p>يمارس المصرف نشاطه وفقًا للتشريعات المصرفية السارية والمعايير الاحترازية المعمول بها.</p>` }
  },

  conformite: {
    group: "decouvrir", icon: "fa-shield-halved",
    fr: { title: "Conformité et lutte anti-blanchiment",
      intro: "Notre engagement contre le blanchiment de capitaux et le financement du terrorisme.",
      body: `<h2>Notre engagement</h2>
<p>La BSIC applique une politique stricte de lutte contre le blanchiment de capitaux et le financement du terrorisme (LBC/FT), conformément aux réglementations nationales et internationales.</p>
<h2>Nos dispositifs</h2>
<ul class="list"><li>Connaissance du client (KYC) à l'entrée en relation et tout au long de celle-ci</li><li>Surveillance des opérations et détection des transactions inhabituelles</li><li>Formation régulière des collaborateurs</li><li>Contrôle interne et audit indépendant</li></ul>
<h2>Correspondants bancaires</h2>
<p>Les banques correspondantes peuvent obtenir nos documents de conformité sur simple demande auprès de nos services.</p>` },
    ar: { title: "الامتثال ومكافحة غسل الأموال",
      intro: "التزامنا بمكافحة غسل الأموال وتمويل الإرهاب.",
      body: `<h2>التزامنا</h2>
<p>يطبق المصرف سياسة صارمة لمكافحة غسل الأموال وتمويل الإرهاب، وفقًا للتشريعات الوطنية والدولية.</p>
<h2>آلياتنا</h2>
<ul class="list"><li>التعرف على العميل عند بداية العلاقة وطوال مدتها</li><li>مراقبة العمليات ورصد المعاملات غير الاعتيادية</li><li>تكوين منتظم للموظفين</li><li>رقابة داخلية وتدقيق مستقل</li></ul>
<h2>البنوك المراسلة</h2>
<p>يمكن للبنوك المراسلة الحصول على وثائق الامتثال الخاصة بنا بمجرد طلبها من مصالحنا.</p>` }
  },

  carrieres: {
    group: "decouvrir", icon: "fa-user-tie",
    fr: { title: "Carrières",
      intro: "Rejoignez les équipes de BSIC Côte d'Ivoire.",
      body: `<h2>Votre développement</h2>
<p>Chaque collaborateur bénéficie d'un budget de formation et d'un accompagnement pour développer ses compétences tout au long de sa carrière.</p>
<h2>Préparez votre avenir</h2>
<p>Des programmes de leadership permettent aux talents de prendre progressivement de nouvelles responsabilités au sein du Groupe.</p>
<h2>Pilotez votre progression</h2>
<p>Des entretiens réguliers et un retour d'évaluation à 360° vous aident à fixer vos objectifs et à mesurer vos progrès.</p>
<h2>Candidature spontanée</h2>
<p>Envoyez votre CV et votre lettre de motivation via notre formulaire de contact en choisissant l'objet « Candidature ».</p>` },
    ar: { title: "التوظيف",
      intro: "انضم إلى فرق BSIC كوت ديفوار.",
      body: `<h2>تطورك</h2>
<p>يستفيد كل موظف من ميزانية للتكوين ومن مرافقة لتطوير كفاءاته طوال مسيرته المهنية.</p>
<h2>حضّر مستقبلك</h2>
<p>تتيح برامج القيادة للكفاءات تولي مسؤوليات جديدة تدريجيًا داخل المجموعة.</p>
<h2>قُد تقدّمك</h2>
<p>تساعدك المقابلات المنتظمة والتقييم الشامل بزاوية 360 درجة على تحديد أهدافك وقياس تقدمك.</p>
<h2>طلب تلقائي</h2>
<p>أرسل سيرتك الذاتية ورسالة التحفيز عبر نموذج الاتصال باختيار موضوع «طلب توظيف».</p>` }
  },

  /* ---------------- PARTICULIERS ---------------- */
  "compte-prosper": {
    group: "particuliers", icon: "fa-piggy-bank",
    fr: { title: "Compte épargne Prosper",
      intro: "Un compte épargne rémunéré qui vous donne aussi accès au crédit.",
      body: `<h2>Les avantages</h2>
<ul class="list"><li>Découvert ou prêt possible jusqu'à 75 % de votre solde</li><li>Taux d'intérêt progressifs par paliers</li><li>Une couverture d'assurance</li><li>Aucuns frais de tenue de compte au-delà de 500 000 FCFA de solde moyen (15 000 FCFA en dessous)</li></ul>
<h2>Les caractéristiques</h2>
<ul class="list"><li>Ouverture avec un dépôt de 50 000 FCFA</li><li>Intérêts servis à partir d'un solde de 885 000 FCFA</li><li>Virements gratuits entre comptes BSIC</li></ul>
<h2>Pièces à fournir</h2>
<ul class="list"><li>Une photo d'identité</li><li>Une pièce d'identité en cours de validité</li><li>Un justificatif de domicile de moins de 3 mois</li><li>Un référent</li><li>Vos relevés bancaires</li></ul>
<div class="note">Conditions indicatives, à confirmer auprès de votre agence.</div>` },
    ar: { title: "حساب الادخار بروسبر",
      intro: "حساب ادخار مأجور يمنحك أيضًا إمكانية الحصول على قرض.",
      body: `<h2>المزايا</h2>
<ul class="list"><li>سحب على المكشوف أو قرض يصل إلى 75% من رصيدك</li><li>نسب فائدة تصاعدية حسب الشرائح</li><li>تغطية تأمينية</li><li>دون رسوم تسيير إذا تجاوز متوسط الرصيد 500.000 فرنك إفريقي (15.000 فرنك إفريقي دون ذلك)</li></ul>
<h2>الخصائص</h2>
<ul class="list"><li>فتح الحساب بإيداع 50.000 فرنك إفريقي</li><li>تُصرف الفوائد ابتداءً من رصيد 885.000 فرنك إفريقي</li><li>تحويلات مجانية بين حسابات BSIC</li></ul>
<h2>الوثائق المطلوبة</h2>
<ul class="list"><li>صورة شخصية</li><li>وثيقة هوية سارية المفعول</li><li>إثبات سكن لا يتجاوز 3 أشهر</li><li>شخص مرجعي</li><li>كشوفاتك البنكية</li></ul>
<div class="note">شروط إرشادية، يرجى التأكد منها لدى وكالتك.</div>` }
  },

  "compte-prosaver": {
    group: "particuliers", icon: "fa-shield-heart",
    fr: { title: "Compte ProSaver",
      intro: "Un compte complet avec assurance, découvert et carte Visa Electron offerte.",
      body: `<h2>Pour qui ?</h2>
<p>Le compte ProSaver peut être ouvert à titre individuel, en compte joint ou au nom d'un enfant mineur.</p>
<h2>Les avantages</h2>
<ul class="list"><li>Une assurance accident offerte, jusqu'à 30 000 000 FCFA</li><li>Un découvert possible jusqu'à 90 % de votre solde</li><li>Un conseiller dédié</li><li>Une carte Visa Electron gratuite</li></ul>
<h2>Les conditions</h2>
<ul class="list"><li>Solde minimum de 500 000 FCFA</li><li>Aucuns frais de tenue de compte</li></ul>
<h2>Pièces à fournir</h2>
<p>Les mêmes que pour le compte épargne Prosper : photo, pièce d'identité, justificatif de domicile de moins de 3 mois, un référent et vos relevés bancaires.</p>
<div class="note">Conditions indicatives, à confirmer auprès de votre agence.</div>` },
    ar: { title: "حساب بروسايفر",
      intro: "حساب متكامل مع تأمين وسحب على المكشوف وبطاقة فيزا إلكترون مجانية.",
      body: `<h2>لمن؟</h2>
<p>يمكن فتح حساب بروسايفر بصفة فردية أو كحساب مشترك أو باسم طفل قاصر.</p>
<h2>المزايا</h2>
<ul class="list"><li>تأمين مجاني ضد الحوادث يصل إلى 30.000.000 فرنك إفريقي</li><li>سحب على المكشوف يصل إلى 90% من رصيدك</li><li>مستشار مخصص</li><li>بطاقة فيزا إلكترون مجانية</li></ul>
<h2>الشروط</h2>
<ul class="list"><li>رصيد أدنى قدره 500.000 فرنك إفريقي</li><li>دون رسوم تسيير الحساب</li></ul>
<h2>الوثائق المطلوبة</h2>
<p>نفس وثائق حساب الادخار بروسبر: صورة شخصية، ووثيقة هوية، وإثبات سكن لا يتجاوز 3 أشهر، وشخص مرجعي، وكشوفاتك البنكية.</p>
<div class="note">شروط إرشادية، يرجى التأكد منها لدى وكالتك.</div>` }
  },

  "depots-terme": {
    group: "particuliers", icon: "fa-hourglass-half",
    fr: { title: "Dépôts à terme et devises",
      intro: "Placez votre épargne sur la durée de votre choix, en francs CFA ou en devises.",
      body: `<h2>Les dépôts à terme</h2>
<p>Bloquez une somme pour une durée de 3 mois à 5 ans et bénéficiez d'une rémunération connue à l'avance.</p>
<h2>Les comptes en devises</h2>
<p>Détenez des avoirs en dollars américains et dans d'autres devises pour vos opérations internationales.</p>
<div class="note">Les taux de rémunération sont communiqués en agence.</div>` },
    ar: { title: "الودائع لأجل والعملات",
      intro: "استثمر مدخراتك للمدة التي تختارها، بالفرنك الإفريقي أو بالعملات الأجنبية.",
      body: `<h2>الودائع لأجل</h2>
<p>جمّد مبلغًا لمدة تتراوح بين 3 أشهر و5 سنوات واستفد من عائد معروف مسبقًا.</p>
<h2>الحسابات بالعملات الأجنبية</h2>
<p>احتفظ بأرصدة بالدولار الأمريكي وبعملات أخرى لعملياتك الدولية.</p>
<div class="note">تُقدَّم نسب العائد في الوكالات.</div>` }
  },

  cartes: {
    group: "particuliers", icon: "fa-credit-card",
    fr: { title: "Cartes bancaires",
      intro: "Simplifiez-vous la banque avec nos cartes bancaires.",
      body: `<h2>Votre carte au quotidien</h2>
<p>Retirez de l'argent dans les distributeurs et payez chez les commerçants, en Côte d'Ivoire et à l'étranger, en toute simplicité.</p>
<h2>La carte Visa Electron</h2>
<p>Offerte avec le compte ProSaver, elle vous permet de régler vos achats directement depuis votre compte.</p>
<h2>Votre sécurité</h2>
<ul class="list"><li>Un code confidentiel personnel</li><li>Une mise en opposition rapide en cas de perte ou de vol</li><li>Ne communiquez jamais votre code ni les données de votre carte</li></ul>` },
    ar: { title: "البطاقات المصرفية",
      intro: "سهّل تعاملاتك المصرفية مع بطاقاتنا.",
      body: `<h2>بطاقتك اليومية</h2>
<p>اسحب الأموال من الموزعات الآلية وادفع لدى التجار، في كوت ديفوار وفي الخارج، بكل سهولة.</p>
<h2>بطاقة فيزا إلكترون</h2>
<p>تُمنح مجانًا مع حساب بروسايفر، وتتيح لك تسديد مشترياتك مباشرة من حسابك.</p>
<h2>أمانك</h2>
<ul class="list"><li>رمز سري شخصي</li><li>اعتراض سريع في حالة الضياع أو السرقة</li><li>لا تُفصح أبدًا عن رمزك أو عن بيانات بطاقتك</li></ul>` }
  },

  planification: {
    group: "particuliers", icon: "fa-compass",
    fr: { title: "Planification financière",
      intro: "Un plan financier construit avec vous, pour toutes les étapes de votre vie.",
      body: `<h2>Notre méthode</h2>
<p>Votre conseiller analyse votre situation puis élabore avec vous un plan personnel couvrant votre épargne, vos investissements, votre protection et votre retraite.</p>
<h2>Trois piliers</h2>
<ul class="list"><li><strong>Stratégie :</strong> une vision claire de votre situation</li><li><strong>Objectifs :</strong> des priorités définies avec vous</li><li><strong>Flexibilité :</strong> un plan qui évolue avec votre vie</li></ul>
<h2>Un suivi dans la durée</h2>
<p>Des revues régulières permettent d'ajuster votre plan et de construire une relation de confiance sur le long terme.</p>` },
    ar: { title: "التخطيط المالي",
      intro: "خطة مالية نبنيها معك لكل مراحل حياتك.",
      body: `<h2>منهجيتنا</h2>
<p>يحلل مستشارك وضعيتك ثم يعد معك خطة شخصية تشمل ادخارك واستثماراتك وحمايتك وتقاعدك.</p>
<h2>ثلاث ركائز</h2>
<ul class="list"><li><strong>الاستراتيجية:</strong> رؤية واضحة لوضعيتك</li><li><strong>الأهداف:</strong> أولويات نحددها معك</li><li><strong>المرونة:</strong> خطة تتطور مع حياتك</li></ul>
<h2>متابعة على المدى الطويل</h2>
<p>تتيح المراجعات المنتظمة تعديل خطتك وبناء علاقة ثقة دائمة.</p>` }
  },

  "gestion-patrimoine": {
    group: "particuliers", icon: "fa-gem",
    fr: { title: "Gestion de patrimoine sur mesure",
      intro: "Un gestionnaire dédié pour la clientèle privée, les familles et les institutions.",
      body: `<h2>Pour qui ?</h2>
<p>Ce service s'adresse à la clientèle privée, aux familles, aux associations, aux fondations et aux institutions.</p>
<h2>Pour les familles</h2>
<p>Une gestion consolidée de votre patrimoine : organisation, liquidité, gouvernance familiale et transmission à la génération suivante.</p>
<h2>Pour les associations et institutions</h2>
<p>Des solutions personnalisées pour gérer et faire fructifier les fonds dans le respect de vos objectifs et de vos contraintes.</p>` },
    ar: { title: "إدارة الثروات حسب الطلب",
      intro: "مسيّر مخصص لكبار العملاء والعائلات والمؤسسات.",
      body: `<h2>لمن؟</h2>
<p>تتوجه هذه الخدمة إلى كبار العملاء والعائلات والجمعيات والمؤسسات الخيرية والهيئات.</p>
<h2>للعائلات</h2>
<p>إدارة موحدة لثروتكم: التنظيم والسيولة والحوكمة العائلية والانتقال إلى الجيل القادم.</p>
<h2>للجمعيات والمؤسسات</h2>
<p>حلول مخصصة لتسيير الأموال وتنميتها وفق أهدافكم وقيودكم.</p>` }
  },

  /* ---------------- PROFESSIONNELS & PME ---------------- */
  "location-vente": {
    group: "professionnels", icon: "fa-truck",
    fr: { title: "Location-vente",
      intro: "Devenez propriétaire de vos véhicules et équipements à la fin du remboursement.",
      body: `<h2>Le principe</h2>
<p>La BSIC finance l'achat de votre équipement. Vous l'utilisez immédiatement et vous en devenez propriétaire à la fin du contrat, après le paiement des frais d'option d'achat.</p>
<h2>Équipements financés</h2>
<ul class="list"><li>Véhicules légers et poids lourds</li><li>Engins et équipements de construction</li><li>Bus et cars</li><li>Matériel agricole</li></ul>
<h2>Les avantages</h2>
<ul class="list"><li>Des mensualités fixes, sur 12 à 72 mois</li><li>Des échéances adaptées à la saisonnalité de votre activité</li><li>Un apport initial réduit</li><li>Un traitement fiscal avantageux, selon la réglementation en vigueur</li></ul>` },
    ar: { title: "البيع بالإيجار",
      intro: "تملّك مركباتك ومعداتك عند نهاية السداد.",
      body: `<h2>المبدأ</h2>
<p>يموّل المصرف شراء معداتك، فتستعملها فورًا وتصبح مالكًا لها عند نهاية العقد بعد دفع رسوم خيار الشراء.</p>
<h2>المعدات الممولة</h2>
<ul class="list"><li>المركبات الخفيفة والثقيلة</li><li>الآليات ومعدات البناء</li><li>الحافلات</li><li>المعدات الفلاحية</li></ul>
<h2>المزايا</h2>
<ul class="list"><li>أقساط شهرية ثابتة على مدى 12 إلى 72 شهرًا</li><li>آجال تتلاءم مع موسمية نشاطك</li><li>مساهمة أولية منخفضة</li><li>معاملة جبائية ملائمة حسب التشريع الساري</li></ul>` }
  },

  "credit-bail": {
    group: "professionnels", icon: "fa-file-contract",
    fr: { title: "Crédit-bail (leasing)",
      intro: "Utilisez vos équipements sans supporter les contraintes de la propriété.",
      body: `<h2>Le principe</h2>
<p>La BSIC achète l'équipement et vous le loue. À la fin du contrat, vous pouvez le restituer ou prolonger la location.</p>
<h2>Les avantages</h2>
<ul class="list"><li>Des loyers flexibles, calés sur votre trésorerie</li><li>Un apport initial réduit</li><li>Une préservation de vos capacités d'emprunt</li><li>Un traitement fiscal des loyers selon la réglementation en vigueur</li></ul>` },
    ar: { title: "القرض الإيجاري (الليزينغ)",
      intro: "استعمل معداتك دون تحمل أعباء الملكية.",
      body: `<h2>المبدأ</h2>
<p>يشتري المصرف المعدات ويؤجرها لك. وعند نهاية العقد، يمكنك إرجاعها أو تمديد الإيجار.</p>
<h2>المزايا</h2>
<ul class="list"><li>أقساط إيجار مرنة تتلاءم مع خزينتك</li><li>مساهمة أولية منخفضة</li><li>الحفاظ على قدرتك على الاقتراض</li><li>معاملة جبائية للإيجارات حسب التشريع الساري</li></ul>` }
  },

  refinancement: {
    group: "professionnels", icon: "fa-rotate",
    fr: { title: "Refinancement d'actifs",
      intro: "Libérez de la trésorerie à partir des équipements que vous possédez déjà.",
      body: `<h2>Le principe</h2>
<p>La BSIC rachète votre équipement pour un pourcentage de sa valeur, puis vous le refinance. Vous continuez à l'utiliser normalement.</p>
<h2>Les avantages</h2>
<ul class="list"><li>Un apport immédiat de trésorerie</li><li>L'utilisation continue de vos équipements</li><li>Des mensualités allégées</li><li>Des capitaux disponibles pour de nouveaux investissements</li></ul>` },
    ar: { title: "إعادة تمويل الأصول",
      intro: "حرّر سيولة انطلاقًا من المعدات التي تملكها.",
      body: `<h2>المبدأ</h2>
<p>يشتري المصرف معداتك بنسبة من قيمتها ثم يعيد تمويلها لك، وتواصل استعمالها بشكل عادي.</p>
<h2>المزايا</h2>
<ul class="list"><li>سيولة فورية</li><li>استعمال متواصل لمعداتك</li><li>أقساط شهرية مخففة</li><li>رؤوس أموال متاحة لاستثمارات جديدة</li></ul>` }
  },

  "financement-actifs": {
    group: "professionnels", icon: "fa-boxes-stacked",
    fr: { title: "Financement adossé aux actifs",
      intro: "Obtenez un financement plus important en vous appuyant sur les actifs de votre entreprise.",
      body: `<h2>Le principe</h2>
<p>Le financement est adossé à vos créances clients et à vos actifs : stocks, immobilier, machines et véhicules commerciaux. Plus vos actifs sont importants, plus le montant accessible l'est aussi.</p>
<h2>Les avantages</h2>
<ul class="list"><li>Un financement souple qui suit votre activité</li><li>Des montants plus élevés qu'un crédit classique</li><li>Une solution adaptée à de nombreux secteurs</li></ul>
<h2>Secteurs accompagnés</h2>
<ul class="list"><li>Industrie et ingénierie</li><li>Transport et logistique</li><li>Impression et emballage</li><li>Distribution et commerce de gros</li><li>Services et recrutement</li></ul>` },
    ar: { title: "التمويل المدعوم بالأصول",
      intro: "احصل على تمويل أكبر بالاعتماد على أصول مؤسستك.",
      body: `<h2>المبدأ</h2>
<p>يُدعَم التمويل بمستحقاتك لدى العملاء وبأصولك: المخزون والعقارات والآلات والمركبات التجارية. وكلما كانت أصولك أكبر، ارتفع المبلغ المتاح.</p>
<h2>المزايا</h2>
<ul class="list"><li>تمويل مرن يواكب نشاطك</li><li>مبالغ أعلى من القرض التقليدي</li><li>حل ملائم لعدة قطاعات</li></ul>
<h2>القطاعات المرافَقة</h2>
<ul class="list"><li>الصناعة والهندسة</li><li>النقل واللوجستيك</li><li>الطباعة والتغليف</li><li>التوزيع وتجارة الجملة</li><li>الخدمات والتوظيف</li></ul>` }
  },

  /* ---------------- ENTREPRISES & INSTITUTIONNELS ---------------- */
  "commerce-international": {
    group: "entreprises", icon: "fa-ship",
    fr: { title: "Commerce international",
      intro: "Sécurisez et financez vos importations et exportations.",
      body: `<h2>Nos solutions</h2>
<ul class="list"><li>Crédits documentaires à l'import et à l'export</li><li>Encaissements documentaires</li><li>Garanties bancaires internationales</li><li>Escompte et forfaiting</li><li>Crédits fournisseurs</li></ul>
<h2>L'atout du réseau</h2>
<p>Grâce à ses filiales et bureaux de représentation, le Groupe BSIC facilite les opérations commerciales entre les pays de l'espace sahélo-saharien et au-delà.</p>` },
    ar: { title: "التجارة الدولية",
      intro: "أمّنوا وموّلوا وارداتكم وصادراتكم.",
      body: `<h2>حلولنا</h2>
<ul class="list"><li>الاعتمادات المستندية للاستيراد والتصدير</li><li>التحصيل المستندي</li><li>الضمانات المصرفية الدولية</li><li>الخصم وشراء الديون (الفورفيتينغ)</li><li>قروض الموردين</li></ul>
<h2>ميزة الشبكة</h2>
<p>بفضل فروعها ومكاتب تمثيلها، تسهّل مجموعة BSIC العمليات التجارية بين دول الفضاء الساحلي الصحراوي وخارجه.</p>` }
  },

  affacturage: {
    group: "entreprises", icon: "fa-file-invoice-dollar",
    fr: { title: "Affacturage et financement de factures",
      intro: "Transformez vos factures clients en trésorerie disponible.",
      body: `<h2>L'escompte de factures</h2>
<p>Recevez une avance sur vos factures non encore réglées. Vous conservez la gestion de vos relations clients et le solde vous est versé à l'encaissement, déduction faite des frais.</p>
<h2>L'affacturage</h2>
<p>La BSIC avance le montant de vos factures et se charge du recouvrement auprès de vos clients.</p>
<h2>La protection contre les impayés</h2>
<p>Sécurisez votre chiffre d'affaires grâce au suivi de la solvabilité de vos clients et à une couverture des créances sur les clients validés.</p>
<h2>Les avantages</h2>
<ul class="list"><li>Un fonds de roulement disponible rapidement</li><li>Un financement qui suit la croissance de votre chiffre d'affaires</li><li>Une gestion du poste clients simplifiée</li></ul>` },
    ar: { title: "تحويل الفواتير وتمويلها",
      intro: "حوّل فواتير عملائك إلى سيولة متاحة.",
      body: `<h2>خصم الفواتير</h2>
<p>احصل على تسبقة على فواتيرك غير المسددة بعد، مع الاحتفاظ بتسيير علاقاتك مع العملاء، ويُدفع لك الباقي عند التحصيل بعد خصم الرسوم.</p>
<h2>تحويل الفواتير (الفاكتورينغ)</h2>
<p>يسبّق المصرف مبلغ فواتيرك ويتكفل بتحصيلها لدى عملائك.</p>
<h2>الحماية من عدم السداد</h2>
<p>أمّن رقم معاملاتك بفضل متابعة ملاءة عملائك وتغطية المستحقات على العملاء المعتمدين.</p>
<h2>المزايا</h2>
<ul class="list"><li>رأس مال عامل متاح بسرعة</li><li>تمويل يواكب نمو رقم معاملاتك</li><li>تسيير مبسّط لحسابات العملاء</li></ul>` }
  },

  tresorerie: {
    group: "entreprises", icon: "fa-chart-pie",
    fr: { title: "Gestion de trésorerie",
      intro: "Pilotez vos flux et votre liquidité, en Côte d'Ivoire et à l'international.",
      body: `<h2>Nos solutions</h2>
<ul class="list"><li>Gestion de trésorerie nationale et internationale</li><li>Paiements et virements via le réseau SWIFT</li><li>Un réseau de banques correspondantes partenaires</li><li>Paiements de masse : salaires et fournisseurs</li></ul>
<h2>Un accompagnement dédié</h2>
<p>Nos chargés d'affaires vous aident à optimiser vos flux financiers et à placer vos excédents de trésorerie.</p>` },
    ar: { title: "تسيير الخزينة",
      intro: "قودوا تدفقاتكم وسيولتكم في كوت ديفوار وعلى المستوى الدولي.",
      body: `<h2>حلولنا</h2>
<ul class="list"><li>تسيير الخزينة على المستويين الوطني والدولي</li><li>المدفوعات والتحويلات عبر شبكة سويفت</li><li>شبكة من البنوك المراسلة الشريكة</li><li>المدفوعات الجماعية: الرواتب والموردون</li></ul>
<h2>مرافقة مخصصة</h2>
<p>يساعدكم مكلفو الأعمال لدينا على تحسين تدفقاتكم المالية واستثمار فوائض الخزينة.</p>` }
  },

  sequestre: {
    group: "entreprises", icon: "fa-handshake-simple",
    fr: { title: "Séquestre et règlement",
      intro: "La BSIC, tiers de confiance pour sécuriser vos transactions.",
      body: `<h2>Le principe</h2>
<p>Les fonds sont confiés à la BSIC, qui ne les libère qu'une fois les conditions convenues entre les parties remplies.</p>
<h2>Pour quelles opérations ?</h2>
<ul class="list"><li>Transactions immobilières</li><li>Opérations commerciales</li><li>Transactions internationales</li></ul>
<div class="note">Contactez-nous pour recevoir une proposition adaptée à votre opération.</div>` },
    ar: { title: "الضمان والتسوية",
      intro: "المصرف طرف ثالث موثوق لتأمين معاملاتكم.",
      body: `<h2>المبدأ</h2>
<p>تُودع الأموال لدى المصرف الذي لا يفرج عنها إلا بعد استيفاء الشروط المتفق عليها بين الأطراف.</p>
<h2>لأي عمليات؟</h2>
<ul class="list"><li>المعاملات العقارية</li><li>العمليات التجارية</li><li>المعاملات الدولية</li></ul>
<div class="note">اتصلوا بنا لتلقي عرض ملائم لعمليتكم.</div>` }
  },

  "conseil-financement": {
    group: "entreprises", icon: "fa-briefcase",
    fr: { title: "Conseil et financements structurés",
      intro: "Un accompagnement expert pour vos projets d'envergure.",
      body: `<h2>Conseil</h2>
<ul class="list"><li>Conseil en fusions et acquisitions</li><li>Structuration du capital et des financements</li><li>Solutions de couverture des risques</li></ul>
<h2>Montage de financements</h2>
<ul class="list"><li>Prêts et crédits syndiqués</li><li>Placements privés et financements obligataires</li><li>Financement de biens d'équipement</li></ul>
<h2>Secteurs d'expertise</h2>
<p>Nos équipes, basées en Afrique, accompagnent notamment les secteurs de l'énergie, des matières premières et du transport.</p>` },
    ar: { title: "الاستشارة والتمويلات المهيكلة",
      intro: "مرافقة خبيرة لمشاريعكم الكبرى.",
      body: `<h2>الاستشارة</h2>
<ul class="list"><li>الاستشارة في عمليات الاندماج والاستحواذ</li><li>هيكلة رأس المال والتمويلات</li><li>حلول تغطية المخاطر</li></ul>
<h2>تركيب التمويلات</h2>
<ul class="list"><li>القروض والقروض المشتركة</li><li>التوظيفات الخاصة وتمويلات السندات</li><li>تمويل التجهيزات</li></ul>
<h2>قطاعات الخبرة</h2>
<p>ترافق فرقنا المتواجدة في إفريقيا، على وجه الخصوص، قطاعات الطاقة والمواد الأولية والنقل.</p>` }
  },

  "comptes-entreprises": {
    group: "entreprises", icon: "fa-building-columns",
    fr: { title: "Comptes et placements entreprises",
      intro: "Des solutions pour rémunérer la trésorerie des entreprises, institutions et associations.",
      body: `<h2>Les comptes à préavis</h2>
<p>Réservés aux entreprises, institutions et associations, ils offrent des intérêts calculés chaque jour et versés deux fois par an, moyennant un préavis de retrait.</p>
<h2>Les dépôts à terme</h2>
<p>Placez vos excédents de trésorerie pour une durée de 3 mois à 5 ans.</p>
<h2>Les comptes en devises</h2>
<p>Gérez vos opérations en dollars américains et dans d'autres devises.</p>
<div class="note">Montants minimums et taux communiqués sur demande.</div>` },
    ar: { title: "حسابات الشركات وتوظيفاتها",
      intro: "حلول لتأجير خزينة الشركات والمؤسسات والجمعيات.",
      body: `<h2>الحسابات بإشعار مسبق</h2>
<p>مخصصة للشركات والمؤسسات والجمعيات، وتمنح فوائد تُحتسب يوميًا وتُصرف مرتين في السنة، مقابل إشعار مسبق بالسحب.</p>
<h2>الودائع لأجل</h2>
<p>استثمروا فوائض خزينتكم لمدة تتراوح بين 3 أشهر و5 سنوات.</p>
<h2>الحسابات بالعملات الأجنبية</h2>
<p>سيّروا عملياتكم بالدولار الأمريكي وبعملات أخرى.</p>
<div class="note">تُقدَّم المبالغ الدنيا والنسب عند الطلب.</div>` }
  },

  institutionnels: {
    group: "entreprises", icon: "fa-building-columns",
    fr: { title: "Institutionnels",
      intro: "États, collectivités, organismes publics et ONG.",
      body: `<h2>Un partenaire des institutions</h2>
<p>La BSIC accompagne les institutions dans la gestion de leurs fonds et le financement de leurs programmes de développement.</p>
<ul class="list"><li>Gestion des comptes de projets</li><li>Paiements de masse et décaissements</li><li>Accompagnement des projets publics</li></ul>
<h2>Correspondance bancaire</h2>
<p>Nous entretenons des relations avec un réseau de banques correspondantes pour faciliter les opérations internationales de nos clients.</p>` },
    ar: { title: "المؤسسات",
      intro: "الدول والجماعات والهيئات العمومية والمنظمات غير الحكومية.",
      body: `<h2>شريك للمؤسسات</h2>
<p>يرافق المصرف المؤسسات في تسيير أموالها وتمويل برامجها التنموية.</p>
<ul class="list"><li>تسيير حسابات المشاريع</li><li>المدفوعات الجماعية والصرف</li><li>مرافقة المشاريع العمومية</li></ul>
<h2>المراسلة المصرفية</h2>
<p>نرتبط بشبكة من البنوك المراسلة لتسهيل العمليات الدولية لعملائنا.</p>` }
  },

  /* ---------------- SERVICES ---------------- */
  agences:    { group: "services", icon: "fa-map-location-dot", type: "agences",
    fr: { title: "Nos agences", intro: "Retrouvez notre siège et notre réseau d'agences." },
    ar: { title: "وكالاتنا", intro: "اعثر على مقرنا وشبكة وكالاتنا." } },

  simulateur: { group: "services", icon: "fa-calculator", type: "simulateur",
    fr: { title: "Simulateur de financement", intro: "Estimez les mensualités du financement de vos équipements." },
    ar: { title: "محاكي التمويل", intro: "احسب أقساط تمويل معداتك." } },

  contact:    { group: "services", icon: "fa-headset", type: "contact",
    fr: { title: "Contactez-nous", intro: "Une question, une demande d'information ou un rendez-vous ? Écrivez-nous." },
    ar: { title: "اتصل بنا", intro: "سؤال أو طلب معلومات أو موعد؟ راسلنا." } },

  "communication-financiere": {
    group: "services", icon: "fa-file-lines",
    fr: { title: "Communication financière",
      intro: "Rapports annuels, états financiers et indicateurs d'activité.",
      body: `<h2>Nos publications</h2>
<p>La BSIC publie régulièrement des informations sur son activité et ses résultats, conformément à la réglementation en vigueur.</p>
<ul class="list"><li>Rapports annuels</li><li>États financiers annuels</li><li>Indicateurs d'activité</li><li>Documents de conformité et de lutte anti-blanchiment</li></ul>
<h2>Obtenir un document</h2>
<p>Les actionnaires, investisseurs, correspondants bancaires et journalistes peuvent obtenir ces documents sur demande via notre formulaire de contact, en choisissant l'objet « Demande de document ».</p>` },
    ar: { title: "التواصل المالي",
      intro: "التقارير السنوية والقوائم المالية ومؤشرات النشاط.",
      body: `<h2>منشوراتنا</h2>
<p>ينشر المصرف بانتظام معلومات عن نشاطه ونتائجه، وفقًا للتشريعات السارية.</p>
<ul class="list"><li>التقارير السنوية</li><li>القوائم المالية السنوية</li><li>مؤشرات النشاط</li><li>وثائق الامتثال ومكافحة غسل الأموال</li></ul>
<h2>الحصول على وثيقة</h2>
<p>يمكن للمساهمين والمستثمرين والبنوك المراسلة والصحفيين الحصول على هذه الوثائق عند الطلب عبر نموذج الاتصال باختيار موضوع «طلب وثيقة».</p>` }
  },

  /* ---------------- INFORMATIONS ---------------- */
  "mentions-legales": {
    group: "infos", icon: "fa-scale-balanced",
    fr: { title: "Mentions légales",
      intro: "Informations légales relatives au site.",
      body: `<h2>Éditeur du site</h2>
<p>Banque Sahélo-Saharienne pour l'Investissement et le Commerce (BSIC), établissement de crédit dont le siège est situé : <span data-config="adresse"></span>.</p>
<h2>Activité réglementée</h2>
<p>La BSIC est un établissement de crédit soumis à la réglementation bancaire de l'Union Monétaire Ouest Africaine (UMOA) et au contrôle des autorités de supervision compétentes.</p>
<h2>Propriété intellectuelle</h2>
<p>L'ensemble des contenus de ce site (textes, logos, images) est la propriété de la BSIC. Toute reproduction sans autorisation préalable est interdite.</p>
<h2>Responsabilité</h2>
<p>Les informations publiées sur ce site sont fournies à titre indicatif et ne constituent pas une offre contractuelle. Les conditions applicables sont disponibles en agence.</p>` },
    ar: { title: "الإشعارات القانونية",
      intro: "المعلومات القانونية المتعلقة بالموقع.",
      body: `<h2>ناشر الموقع</h2>
<p>المصرف الساحلي الصحراوي للاستثمار والتجارة (BSIC)، مؤسسة قرض يقع مقرها في: <span data-config="adresse"></span>.</p>
<h2>نشاط منظّم</h2>
<p>المصرف مؤسسة قرض خاضعة للتشريع المصرفي للاتحاد النقدي لغرب إفريقيا ولرقابة سلطات الإشراف المختصة.</p>
<h2>الملكية الفكرية</h2>
<p>جميع محتويات هذا الموقع (النصوص والشعارات والصور) ملك للمصرف، ويُمنع أي نسخ دون ترخيص مسبق.</p>
<h2>المسؤولية</h2>
<p>المعلومات المنشورة على هذا الموقع إرشادية ولا تشكل عرضًا تعاقديًا. الشروط المطبقة متوفرة في الوكالات.</p>` }
  },

  confidentialite: {
    group: "infos", icon: "fa-user-lock",
    fr: { title: "Politique de confidentialité",
      intro: "Comment nous traitons vos données personnelles.",
      body: `<h2>Données collectées</h2>
<p>Ce site ne comporte aucun espace client. Les seules données collectées sont celles que vous saisissez volontairement dans le formulaire de contact ou d'inscription à la newsletter.</p>
<h2>Utilisation</h2>
<p>Ces données sont utilisées uniquement pour répondre à votre demande ou vous envoyer nos actualités. Elles ne sont jamais cédées à des tiers.</p>
<h2>Vos droits</h2>
<p>Vous pouvez demander l'accès, la rectification ou la suppression de vos données en nous contactant.</p>
<h2>Sécurité</h2>
<p>La BSIC ne vous demandera jamais vos codes confidentiels, mots de passe ou données de carte par e-mail, SMS ou téléphone.</p>` },
    ar: { title: "سياسة الخصوصية",
      intro: "كيف نعالج بياناتك الشخصية.",
      body: `<h2>البيانات المجمعة</h2>
<p>لا يتضمن هذا الموقع أي فضاء للعملاء. البيانات الوحيدة المجمعة هي التي تُدخلها طوعًا في نموذج الاتصال أو الاشتراك في النشرة الإخبارية.</p>
<h2>الاستعمال</h2>
<p>تُستعمل هذه البيانات فقط للرد على طلبك أو لإرسال أخبارنا، ولا تُمنح أبدًا لأطراف أخرى.</p>
<h2>حقوقك</h2>
<p>يمكنك طلب الاطلاع على بياناتك أو تصحيحها أو حذفها بالاتصال بنا.</p>
<h2>الأمان</h2>
<p>لن يطلب منك المصرف أبدًا رموزك السرية أو كلمات المرور أو بيانات بطاقتك عبر البريد الإلكتروني أو الرسائل القصيرة أو الهاتف.</p>` }
  },

  reclamations: {
    group: "infos", icon: "fa-comments",
    fr: { title: "Réclamations",
      intro: "Votre satisfaction est notre priorité.",
      body: `<h2>Comment formuler une réclamation ?</h2>
<ul class="list"><li>Auprès de votre conseiller ou du chef de votre agence</li><li>Par écrit, via notre formulaire de contact en choisissant l'objet « Réclamation »</li></ul>
<h2>Traitement</h2>
<p>Chaque réclamation est enregistrée et traitée dans les meilleurs délais. Un accusé de réception vous est adressé et vous êtes informé de la suite donnée à votre demande.</p>` },
    ar: { title: "الشكاوى",
      intro: "رضاكم أولويتنا.",
      body: `<h2>كيف تقدم شكوى؟</h2>
<ul class="list"><li>لدى مستشارك أو رئيس وكالتك</li><li>كتابيًا عبر نموذج الاتصال باختيار موضوع «شكوى»</li></ul>
<h2>المعالجة</h2>
<p>تُسجل كل شكوى وتُعالج في أقرب الآجال. يصلك إشعار بالاستلام ويتم إعلامك بالرد على طلبك.</p>` }
  },

  "plan-du-site": { group: "infos", icon: "fa-sitemap", type: "sitemap",
    fr: { title: "Plan du site", intro: "Toutes les pages du site en un coup d'œil." },
    ar: { title: "خريطة الموقع", intro: "جميع صفحات الموقع في لمحة." } },

  /* ---------------- ACTUALITÉS ---------------- */
  actualites: { group: "actualites", icon: "fa-newspaper", type: "news",
    fr: { title: "Toutes les actualités", intro: "Les rencontres, forums et événements du Groupe BSIC." },
    ar: { title: "كل الأخبار", intro: "لقاءات مجموعة BSIC ومنتدياتها وفعالياتها." } },

  galerie: { group: "actualites", icon: "fa-images", type: "gallery",
    fr: { title: "Galerie photos", intro: "Les photos des événements du Groupe." },
    ar: { title: "معرض الصور", intro: "صور فعاليات المجموعة." } }
};

/* ---------------- MÉGA-MENU ---------------- */
const MENU = [
  { group: "decouvrir", cols: [
      { fr: "Qui sommes-nous ?", ar: "من نحن؟", items: ["presentation", "histoire", "vision"] },
      { fr: "Le Groupe BSIC", ar: "مجموعة BSIC", items: ["groupe", "rse", "carrieres"] },
      { fr: "Gouvernance", ar: "الحوكمة", items: ["gouvernance", "conformite"] } ],
    promo: { fr: ["One Vision, One Instrument", "Une banque au service du développement et de l'intégration économique de l'espace sahélo-saharien."],
             ar: ["رؤية واحدة، أداة واحدة", "مصرف في خدمة التنمية والتكامل الاقتصادي للفضاء الساحلي الصحراوي."], link: "presentation", img: "apropos" } },
  { group: "particuliers", cols: [
      { fr: "Comptes et épargne", ar: "الحسابات والادخار", items: ["compte-prosper", "compte-prosaver", "depots-terme"] },
      { fr: "Moyens de paiement", ar: "وسائل الدفع", items: ["cartes"] },
      { fr: "Patrimoine", ar: "الثروة", items: ["planification", "gestion-patrimoine"] } ],
    promo: { fr: ["Ouvrir un compte", "Découvrez les étapes et les pièces à fournir."],
             ar: ["فتح حساب", "اكتشف الخطوات والوثائق المطلوبة."], link: "#demarches", img: "particuliers" } },
  { group: "professionnels", cols: [
      { fr: "Financer vos équipements", ar: "تمويل معداتكم", items: ["location-vente", "credit-bail"] },
      { fr: "Libérer de la trésorerie", ar: "تحرير السيولة", items: ["refinancement", "financement-actifs"] },
      { fr: "Outils", ar: "أدوات", items: ["simulateur", "affacturage"] } ],
    promo: { fr: ["Simulateur de financement", "Estimez vos mensualités sur 12 à 72 mois."],
             ar: ["محاكي التمويل", "احسب أقساطك على مدى 12 إلى 72 شهرًا."], link: "simulateur", img: "carrieres" } },
  { group: "entreprises", cols: [
      { fr: "Financement", ar: "التمويل", items: ["conseil-financement", "affacturage"] },
      { fr: "International", ar: "الدولي", items: ["commerce-international", "sequestre"] },
      { fr: "Trésorerie et comptes", ar: "الخزينة والحسابات", items: ["tresorerie", "comptes-entreprises", "institutionnels"] } ],
    promo: { fr: ["Trade finance", "Un réseau régional pour vos opérations entre pays de l'espace CEN-SAD."],
             ar: ["تمويل التجارة", "شبكة إقليمية لعملياتكم بين دول فضاء الساحل والصحراء."], link: "commerce-international", img: "entreprises" } },
  { group: "actualites", cols: [
      { fr: "BSIC à la une", ar: "أخبار BSIC", items: ["actualites", "galerie"] } ],
    promo: { fr: ["Nos derniers événements", "Rencontres, forums et nouveaux bureaux du Groupe."],
             ar: ["آخر فعالياتنا", "لقاءات ومنتديات ومكاتب جديدة للمجموعة."], link: "actualites", img: "actualites" } },
  { label: { fr: "Communication financière", ar: "التواصل المالي" }, link: "communication-financiere" }
];

/* ---------------- OFFRES (onglets de l'accueil) ---------------- */
const OFFERS = {
  particuliers:   ["compte-prosper", "compte-prosaver", "depots-terme", "cartes"],
  professionnels: ["location-vente", "credit-bail", "refinancement", "financement-actifs"],
  entreprises:    ["commerce-international", "affacturage", "tresorerie", "conseil-financement"]
};

/* ---------------- FOOTER ---------------- */
const FOOTER = [
  { title: "ftBsic",     items: ["presentation", "histoire", "groupe", "rse", "carrieres"] },
  { title: "ftOffres",   items: ["compte-prosper", "compte-prosaver", "location-vente", "commerce-international", "affacturage"] },
  { title: "ftServices", items: ["agences", "simulateur", "actualites", "galerie", "contact"] },
  { title: "ftInfos",    items: ["conformite", "communication-financiere", "reclamations", "confidentialite", "mentions-legales"] }
];

/* ---------------- RÉSEAU ---------------- */
const COUNTRIES = [
  { fr: "Bénin", ar: "بنين" }, { fr: "Burkina Faso", ar: "بوركينا فاسو" }, { fr: "Centrafrique", ar: "إفريقيا الوسطى" },
  { fr: "Côte d'Ivoire", ar: "كوت ديفوار" }, { fr: "Gambie", ar: "غامبيا" }, { fr: "Ghana", ar: "غانا" },
  { fr: "Guinée", ar: "غينيا" }, { fr: "Mali", ar: "مالي" }, { fr: "Niger", ar: "النيجر" },
  { fr: "Sénégal", ar: "السنغال" }, { fr: "Soudan", ar: "السودان" }, { fr: "Tchad", ar: "تشاد" },
  { fr: "Togo", ar: "توغو" },
  { fr: "Maroc (bureau)", ar: "المغرب (مكتب)", office: true }, { fr: "Tunisie (bureau)", ar: "تونس (مكتب)", office: true }
];

/* ---------------- AGENCES ---------------- */
const AGENCIES = [
  { fr: ["Abidjan Plateau", "Siège social, avenue Noguès"], ar: ["أبيدجان بلاتو", "المقر الرئيسي، شارع نوغيس"], siege: true },
  { fr: ["Marcory Résidentiel", "Abidjan, Marcory"], ar: ["ماركوري ريزيدونسيال", "أبيدجان، ماركوري"] },
  { fr: ["Abidjan Mall", "Abidjan"], ar: ["أبيدجان مول", "أبيدجان"] },
  { fr: ["Abidjan Riviera 3", "Abidjan"], ar: ["أبيدجان ريفييرا 3", "أبيدجان"] },
  { fr: ["Abidjan Abobo", "Abidjan"], ar: ["أبيدجان أبوبو", "أبيدجان"] },
  { fr: ["Bouaké", "Région de Gbêkê"], ar: ["بواكي", "منطقة غبيكي"] },
  { fr: ["San-Pédro", "Région de San-Pédro"], ar: ["سان بيدرو", "منطقة سان بيدرو"] },
  { fr: ["Daloa", "Région du Haut-Sassandra"], ar: ["دالوا", "منطقة ساساندرا العليا"] },
  { fr: ["Gagnoa", "Rue du commerce"], ar: ["غانيوا", "شارع التجارة"] },
  { fr: ["Sassandra", "Région du Gbôklé"], ar: ["ساساندرا", "منطقة غبوكلي"] },
  { fr: ["Bureau de représentation au Maroc", "Casablanca Finance City, Casablanca"], ar: ["مكتب التمثيل بالمغرب", "القطب المالي للدار البيضاء"], office: true }
];

/* ---------------- ACTUALITÉS ----------------
   id = dossier dans images/actualites/ ; n = nombre de photos
   cat : institutionnel | evenement | developpement */
const NEWS = [
  { id: "01", n: 4, cat: "institutionnel", lieu: { fr: "Tanger", ar: "طنجة" },
    fr: ["Rencontre avec la Ministre de l'Économie et des Finances du Royaume du Maroc à Tanger",
         "La délégation de la BSIC a rencontré la Ministre de l'Économie et des Finances du Royaume du Maroc à Tanger, en marge de la réunion ministérielle de haut niveau consacrée à la mobilisation des ressources domestiques pour le développement de l'Afrique. La BSIC a pris part aux travaux aux côtés des délégations des pays africains."],
    ar: ["لقاء مع وزيرة المالية للمملكة المغربية بطنجة",
         "التقى وفد BSIC بوزيرة الاقتصاد والمالية للمملكة المغربية بطنجة، على هامش الاجتماع الوزاري رفيع المستوى حول تعبئة الموارد المحلية لتنمية إفريقيا. وشارك المصرف في الأشغال إلى جانب وفود الدول الإفريقية."] },
  { id: "02", n: 1, cat: "evenement", lieu: { fr: "Tanger", ar: "طنجة" },
    fr: ["Commission des experts de la COM à Tanger",
         "Des représentants de la BSIC ont participé aux travaux de la Commission des experts tenue à Tanger, qui a réuni des responsables et des experts de plusieurs pays africains."],
    ar: ["لجنة الخبراء (COM) بطنجة",
         "شارك ممثلون عن BSIC في أشغال لجنة الخبراء المنعقدة بطنجة، والتي جمعت مسؤولين وخبراء من عدة دول إفريقية."] },
  { id: "10", n: 5, cat: "evenement", lieu: { fr: "Casablanca", ar: "الدار البيضاء" },
    fr: ["Conférence à Casablanca Finance City",
         "La BSIC a participé à une conférence organisée à Casablanca Finance City autour des options de financement, en présence du Privatization and Investment Board of Libya (PIB) et de nombreux acteurs économiques et financiers."],
    ar: ["مؤتمر بالقطب المالي بالدار البيضاء",
         "شارك المصرف في مؤتمر نُظم بالقطب المالي للدار البيضاء حول خيارات التمويل، بحضور هيئة الخصخصة والاستثمار الليبية (PIB) وعدد من الفاعلين الاقتصاديين والماليين."] },
  { id: "13", n: 3, cat: "institutionnel", lieu: { fr: "Maroc", ar: "المغرب" },
    fr: ["Réunion du Conseil d'administration de BSIC Côte d'Ivoire au Maroc",
         "Le Conseil d'administration de BSIC Côte d'Ivoire s'est réuni au Maroc, dans le cadre de la réunion des filiales et du Conseil du Groupe BSIC."],
    ar: ["اجتماع مجلس إدارة BSIC ساحل العاج بالمغرب",
         "انعقد اجتماع مجلس إدارة BSIC ساحل العاج بالمغرب، في إطار اجتماع الفروع ومجلس مجموعة BSIC."] },
  { id: "new1", n: 4, cat: "institutionnel", lieu: { fr: "Casablanca", ar: "الدار البيضاء" },
    fr: ["Premier conseil d'administration du bureau de représentation au Maroc",
         "Le bureau de représentation de la BSIC au Maroc a tenu son premier conseil d'administration à Casablanca Finance City, une étape importante dans le développement de la présence du Groupe au Maroc."],
    ar: ["أول اجتماع لمجلس إدارة المكتب التمثيلي بالمغرب بالقطب المالي",
         "عقد مكتب تمثيل BSIC بالمغرب أول اجتماع لمجلس إدارته بالقطب المالي للدار البيضاء، وهي خطوة مهمة في تطوير حضور المجموعة بالمغرب."] },
  { id: "08", n: 4, cat: "institutionnel", lieu: { fr: "Casablanca", ar: "الدار البيضاء" },
    fr: ["Visite du Directeur Adjoint de la filiale du Burkina Faso au bureau du Maroc",
         "Le bureau de représentation de la BSIC au Maroc a accueilli le Directeur Adjoint de la filiale du Burkina Faso, une visite qui renforce les liens entre les entités du Groupe."],
    ar: ["زيارة نائب المدير لفرع بوركينا فاسو للمكتب بالمغرب",
         "استقبل مكتب تمثيل BSIC بالمغرب نائب المدير لفرع بوركينا فاسو، في زيارة تعزز الروابط بين وحدات المجموعة."] },
  { id: "12", n: 1, cat: "evenement", lieu: { fr: "Casablanca", ar: "الدار البيضاء" },
    fr: ["Participation à l'exposition organisée à Casablanca",
         "La BSIC a pris part à l'exposition organisée à Casablanca. Son stand a présenté le Groupe, son réseau régional dans l'espace CEN-SAD et ses services bancaires."],
    ar: ["المشاركة في المعرض المقام بالدار البيضاء",
         "شارك المصرف في المعرض المقام بالدار البيضاء، وقدّم جناحه المجموعة وشبكتها الإقليمية في فضاء تجمع الساحل والصحراء وخدماتها البنكية."] },
  { id: "05", n: 1, cat: "developpement", lieu: { fr: "Casablanca", ar: "الدار البيضاء" },
    fr: ["Visite de la Direction Générale au nouvel immeuble de Casablanca Finance City",
         "La Direction Générale a visité le nouvel immeuble situé à Casablanca Finance City, la place financière qui accueille le bureau de représentation du Groupe au Maroc."],
    ar: ["زيارة الإدارة العامة للمبنى الجديد بالدار البيضاء بالقطب المالي",
         "زارت الإدارة العامة المبنى الجديد بالقطب المالي للدار البيضاء، الذي يحتضن مكتب تمثيل المجموعة بالمغرب."] },
  { id: "06", n: 2, cat: "developpement", lieu: { fr: "Casablanca", ar: "الدار البيضاء" },
    fr: ["Visite du bureau de représentation pendant les travaux de finition",
         "Une délégation de la BSIC a suivi sur place l'avancement des travaux de finition du bureau de représentation à Casablanca Finance City."],
    ar: ["زيارة المكتب التمثيلي بالقطب المالي في إطار التشطيبات",
         "تابع وفد من المصرف ميدانيًا تقدم أشغال التشطيبات في مكتب التمثيل بالقطب المالي للدار البيضاء."] },
  { id: "04", n: 1, cat: "developpement", lieu: { fr: "Rabat", ar: "الرباط" },
    fr: ["Séance avec le notaire pour l'acquisition du siège de Rabat",
         "Une séance de travail a eu lieu avec le notaire dans le cadre des négociations pour l'acquisition du futur siège de Rabat."],
    ar: ["جلسة مع الموثق للمفاوضات حول شراء مقر الرباط",
         "عُقدت جلسة عمل مع الموثق في إطار المفاوضات حول شراء المقر المستقبلي بالرباط."] },
  { id: "07", n: 1, cat: "institutionnel", lieu: { fr: "Maroc", ar: "المغرب" },
    fr: ["Les journées de négociation pour l'ouverture du bureau de représentation au Maroc",
         "Retour en images sur les journées de négociation qui ont précédé l'ouverture du bureau de représentation de la BSIC au Maroc."],
    ar: ["أيام التفاوض على فتح مكتب تمثيلي بالمغرب",
         "صور من أيام التفاوض التي سبقت فتح مكتب تمثيل BSIC بالمغرب."] }
];
