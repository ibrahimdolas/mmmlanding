import AboutBG from "../_src/img/aboutElements/bg.png";
import Palm from "../_src/img/aboutElements/palm.png";
import TopLeft from "../_src/img/aboutElements/image-top-left.jpg";
import BottomRight from "../_src/img/aboutElements/image-bottom-right.jpg";
import Plane from "../_src/img/aboutElements/plane.svg";
import Balloons from "../_src/img/aboutElements/balloons.svg";
import Lines from "../_src/img/aboutElements/lines.png";
import AboutPageBG from "../_src/img/bg/breadcrumb-bg-2.jpg";

export const wpPageData = {
	bg: AboutBG,
	palm: Palm,
	topLeft: TopLeft,
	bottomRight: BottomRight,
	plane: Plane,
	balloons: Balloons,
	lines: Lines,
	parallaxBg: AboutPageBG,
	pageTitle: {
		en: 'Work Packages',
		tr: 'İş Paketleri',
		it: 'Pacchetti di Lavoro',
		ro: 'Pachete de lucru'
	},
	
	packages: [
		{
			id: 1,
			title: {
				en: 'WP1: Project Management',
				tr: 'WP1: Proje Yönetimi',
				it: 'WP1: Gestione del progetto',
				ro: 'WP1: Managementul proiectului'
			},
			paragraphs: [
				{
					en: `
					This package covers the overall coordination of the project, monitoring of activities, and evaluation. Under
					the leadership of Adıyaman University, all partners track project progress through regular meetings. With
					Adıyaman University as coordinator, all activities are regularly planned, implemented, and monitored. The
					management process involves not only monitoring the project schedule but also quality assurance, risk
					management, and regular reporting.
					`,
					tr: `
					Bu paket, projenin genel koordinasyonu, faaliyetlerin izlenmesi ve değerlendirilmesini kapsar. Adıyaman
					Üniversitesi liderliğinde, tüm ortaklar düzenli toplantılarla proje ilerlemesini takip eder. Adıyaman Üniversitesi
					koordinatörlüğünde, tüm faaliyetler düzenli olarak planlanır, yürütülür ve izlenir. Yönetim süreci yalnızca
					proje takviminin kontrol edilmesi değil; aynı zamanda <strong>kalite güvencesi, risk yönetimi ve düzenli raporlama</strong>
					süreçlerini de içerir.
					`,
					it: `
					Questo pacchetto copre il coordinamento generale del progetto, il monitoraggio delle attività e la valutazione. Sotto la guida dell'Università di Adıyaman, tutti i partner monitorano lo stato di avanzamento del progetto attraverso riunioni periodiche. Tutte le attività vengono regolarmente pianificate, implementate e monitorate. Il processo di gestione non comprende solo il controllo della tabella di marcia del progetto, ma anche la garanzia della qualità, la gestione dei rischi e la rendicontazione periodica. I mentori e gli insegnanti tutor monitorano il potenziamento delle proprie competenze  attraverso metodi di autovalutazione basati sulle teorie dell'apprendimento degli adulti. Partecipano attivamente al processo di creazione dei contenuti anche digitali ad esempio caricando video didattici, scrivendo note di riflessione e valutando i moduli di fromazione in progress. Le valutazioni esterne saranno  condotte da esperti esterni e da un comitato di esperti garantiscono la qualità del progetto.
					`,
					ro: `
					Coordonare generală, monitorizare activități, evaluare și raportare.
Autoevaluare profesori prin note reflexive și videoclipuri.
Evaluări externe pentru progresul profesorilor.
`
				},
				{
					en: `
					Mentors and mentee teachers monitor their own development through self-assessment methods based on adult
					learning theories. They actively participate in the process by uploading teaching videos, writing reflective
					notes, and evaluating the modules. In addition, external evaluations conducted by academic staff and experts
					ensure the progress of the teachers.
					`,
					tr: `
					Mentorlar ve mentorluk alan öğretmenler, yetişkin öğrenme teorilerine dayalı <strong>öz değerlendirme</strong> yöntemleriyle
					kendi gelişimlerini izler. Öğretim videoları yükleyerek, yansıtıcı notlar yazarak ve modülleri değerlendirerek
					sürece aktif katılırlar. Bunun yanı sıra, akademik personel ve uzmanlar tarafından yapılan <strong>dış değerlendirmeler</strong>
					öğretmenlerin ilerlemesini güvence altına alır.
					`,
					it: `
					I mentori e gli insegnanti allievi monitorano il proprio percorso di sviluppo attraverso metodi di autovalutazione basati sulle teorie dell'apprendimento degli adulti. Questi ultimi partecipano attivamente al processo caricando video didattici, scrivendo note di riflessione e valutando i moduli. Inoltre, le valutazioni esterne condotte da personale accademico ed esperti garantiscono il progressi dei docenti.
					`,
					ro: ''
				}
			],
			results: [
				{
					en: `
					Implementation of the entire project process in a transparent and measurable way
					`,
					tr: `
					Tüm proje sürecinin şeffaf ve ölçülebilir şekilde yürütülmesi
					`,
					it: `
					Attuazione dell'intero processo del progetto in modo trasparente e verificabile
					`
				},
				{
					en: `
					Documentation of teachers’ development through self-assessment and expert observations
					`,
					tr: `
					Öğretmenlerin gelişiminin öz değerlendirme ve uzman gözlemleriyle belgelenmesi
					`,
					it: `
					Documentazione dello sviluppo degli insegnanti attraverso l'autovalutazione e le osservazioni degli esperti
					`
				},
				{
					en: `
					Maintenance of quality standards throughout the project
					`,
					tr: `
					Proje boyunca kalite standartlarının korunması
					`,
					it: `
					Mantenimento degli standard di qualità durante tutto il progetto
					`
				}
			]
		},
		{
			id: 2,
			title: {
				en: 'WP2: Content Development',
				tr: 'WP2: İçerik Hazırlığı',
				it: 'WP2: Sviluppo dei contenuti',
				ro: 'WP2: Dezvoltarea conținutului'
			},
			paragraphs: [
				{
					en: `
					This package involves the development of culturally and historically sensitive modules designed to foster
					hildren’s love for mathematics. The modules are enriched with stories from different cultures in addition to
					focusing on fundamental skills such as counting, sequencing, measuring, and problem-solving. For example,
					mathematical stories from Rome, Anatolia, or the Far East are used to make abstract concepts concrete.
					`,
					tr: `
					Bu paket, çocuklara matematiği sevdirecek <strong>kültürel ve tarihsel açıdan duyarlı modüllerin geliştirilmesini</strong> içerir.
					Modüller, sayma, sıralama, ölçme ve problem çözme gibi temel becerilerin yanı sıra farklı kültürlerden hikâyelerle
					zenginleştirilir. Örneğin, Roma’dan, Anadolu’dan veya Uzak Doğu’dan gelen matematiksel öykülerle soyut kavramlar
					somut hale getirilir.
					`,
					it: `
					Questo pacchetto prevede lo sviluppo di moduli sviluppati secondo  punto di vista culturale e storico, progettati per promuovere l'amore per la matematica da parte dei bambini. I moduli sono arricchiti da storie provenienti da culture diverse, oltre a concentrarsi sulla trasmissione di competenze fondamentali quali la numerazione, la sequenzialità, la misurazione e la risoluzione dei problemi. Ad esempio, vengono utilizzate storie matematiche provenienti da Roma, dall'Anatolia o dall'Estremo Oriente per rendere concreti concetti astratti.
					`,
					ro: `
					Elaborare de module culturale și istorice pentru a stimula dragostea pentru matematică.
Conținut pedagogic susținut de multimedia (animații, activități gamificate, vizuale).
11 module originale de matematică cu diversitate culturală.
`
				},
				{
					en: `
					Led by the academic staff of Adıyaman University, the content is prepared to be both pedagogically appropriate
					and supported with multimedia (animations, gamified activities, visuals). The modules serve as a practical
					guide for teachers.
					`,
					tr: `
					Adıyaman Üniversitesi’nin akademik kadrosu liderliğinde, içerikler hem pedagojik açıdan uygun hem de <strong>multimedya
					destekli</strong> (animasyon, oyunlaştırılmış etkinlikler, görseller) olacak şekilde hazırlanır. Modüller öğretmenler için yol gösterici bir kılavuz niteliği taşır.
					`,
					it: `
					Sotto la guida del personale accademico dell'Università di Adıyaman, i contenuti sono preparati in modo da essere pedagogicamente appropriati e supportati da contenuti multimediali (animazioni, attività ludiche, immagini). I moduli fungono da guida pratica per gli insegnanti.
					`,
					ro: ''
				}
			],
			results: [
				{
					en: `
					11 original mathematics modules
					`,
					tr: `
					11 özgün matematik modülü
					`,
					it: `
					11 moduli matematici innovativi
					`
				},
				{
					en: `
					Materials including cultural diversity and historical context
					`,
					tr: `
					Kültürel çeşitlilik ve tarihsel bağlamı içeren materyaller
					`,
					it: `
					Materiali che includono la diversità culturale e il contesto storico
					`
				},
				{
					en: `
					Content that helps children develop a positive attitude toward mathematics
					`,
					tr: `
					Çocukların matematiğe olumlu yaklaşım geliştirmesini sağlayacak içerikler
					`,
					it: `
					Contenuti che aiutano i bambini a sviluppare un atteggiamento positivo nei confronti della matematica
					`
				}
			]
		},
		{
			id: 3,
			title: {
				en: 'WP3: Research Metodology and Report',
				tr: 'WP3: Araştırma Metodolojisi ve Rapor',
				it: 'WP3: Metodologia di ricerca e relazione',
				ro: 'WP3: Metodologie de cercetare și raport'
			},
			paragraphs: [
				{
					en: `
					WP3 establishes the evidence-based scientific dimension of the project. First, a comprehensive needs analysis
					is conducted to identify the requirements of both new and experienced teachers. This analysis directly guides
					the development of the modules.
					`,
					tr: `
					WP3, projenin <strong>bilimsel kanıt temelli yönünü</strong> oluşturur. Öncelikle yeni ve deneyimli öğretmenlerin ihtiyaçlarını
					belirlemek için kapsamlı bir ihtiyaç analizi yapılır. Bu analiz, modüllerin geliştirilmesine doğrudan rehberlik eder.
					`,
					it: `
					Il WP3 definisce la dimensione scientifica basata su dati concretirilevati durante l’esecuzione del progetto. Innanzitutto, si condurrà  un'analisi completa dei bisogni per identificare i requisiti sia dei docenti nuovi che di quelli esperti. Questa analisi guiderà direttamente lo sviluppo dei moduli.
					`,
					ro: `
					Analiză de nevoi pentru profesori.
Colectare și analiză de date prin note reflexive și formulare de feedback.
Rapoarte internaționale și contribuții pentru factorii de decizie.
`
				},
				{
					en: `
					After each session, mentors and new teachers complete reflective notes and feedback forms. These data are
					collected and analyzed regularly. The findings contribute not only to the project but also to the academic
					field by offering insights into the e-mentoring model in early childhood education.
					`,
					tr: `
					Mentorlar ve yeni öğretmenler, her oturum sonrası <strong>yansıtıcı notlar ve geribildirim formları</strong> doldurur. Bu
					veriler düzenli olarak toplanır ve analiz edilir. Ortaya çıkan sonuçlar yalnızca proje için değil, aynı
					zamanda erken çocukluk eğitiminde e-mentorluk modeline dair akademik dünyaya katkı sağlar.
					`,
					it: `
					Dopo ogni sessione, i mentori e gli insegnanti esperti invieranno notenote di riflessione e compileranno moduli di feedback. Questi dati saranno raccolti e analizzati regolarmente. I risultati attesi contribuiscono non solo all’implementazione del  progetto, ma anche saranno fruibili in ambito  accademico, offrendo approfondimenti sul modello di e-mentoring nell'educazione della prima infanzia.
					`,
					ro: ''
				}
			],
			results: [
				{
					en: `
					A database revealing teachers’ needs and development processes
					`,
					tr: `
					Öğretmenlerin gereksinimlerini ve gelişim süreçlerini ortaya koyan veri tabanı
					`,
					it: `
					Un database che rivela le esigenze degli insegnanti e i processi di sviluppo
					`
				},
				{
					en: `
					Research reports available for international dissemination
					`,
					tr: `
					Uluslararası paylaşıma açık araştırma raporları
					`,
					it: `
					Relazioni di ricerca disponibili per la diffusione internazionale
					`
				},
				{
					en: `
					Guiding findings for policy makers and educational authorities
					`,
					tr: `
					Politika yapıcılar ve eğitim otoriteleri için yol gösterici bulgular
					`,
					it: `
					Risultati guida per i responsabili politici e le autorità educative
					`
				}
			]
		},
		{
			id: 4,
			title: {
				en: 'WP4: Use of Digital Technologies',
				tr: 'WP4: Dijital Teknolojilerin Kullanımı',
				it: 'WP4: Uso delle tecnologie digitali',
				ro: 'WP4: Utilizarea tehnologiilor digitale'
			},
			paragraphs: [
				{
					en: `
					This package builds the digital infrastructure of the project. A comprehensive web portal is developed for
					access to all educational modules, mentor–mentee pairings, process monitoring, and evaluations.
					`,
					tr: `
					Bu paket, projenin <strong>dijital altyapısını</strong> inşa eder. Tüm eğitim modüllerine erişim, mentor–mentee eşleştirmeleri,
					süreç takibi ve değerlendirmeler için kapsamlı bir <strong>web portalı</strong> geliştirilir.
					`,
					it: `
					Questo pacchetto costituisce l'infrastruttura digitale del progetto. Viene sviluppato un portale web completo per l'accesso a tutti i moduli didattici, agli abbinamenti mentore-allievo, al monitoraggio dei processi e alle valutazioni.
					`,
					ro: `
					Dezvoltarea portalului web pentru acces la module, mentorat și resurse.
Crearea de animații și materiale interactive pentru copii.
Comunitate internațională de învățare și resurse accesibile dintr-un portal central.
`
				},
				{
					en: `
					The portal not only enables teachers to access materials but also allows them to share their own experiences
					and learn from one another. In this way, the project goes beyond geographical boundaries to create an
					international learning community. In addition, animations, videos, and interactive materials become
					accessible through the portal.
					`,
					tr: `
					Portal, öğretmenlerin sadece materyallere erişimini değil, aynı zamanda kendi deneyimlerini paylaşmalarını ve birbirlerinden öğrenmelerini de sağlar. Böylece proje, coğrafi sınırları aşarak uluslararası bir öğrenme topluluğu yaratır. Ayrıca animasyonlar, videolar ve etkileşimli materyaller bu portal üzerinden erişilebilir hale gelir.
					`,
					it: `
					Il portale non solo consente agli insegnanti di accedere ai materiali, ma permette loro anche di condividere le proprie esperienze e imparare gli uni dagli altri. In questo modo, il progetto supera i confini geografici per creare una comunità di apprendimento internazionale. Inoltre, attraverso il portale è possibile accedere ad animazioni, video e materiali interattivi.
					`,
					ro: ''
				}
			],
			results: [
				{
					en: `
					Animation content suitable for preschool children that makes mathematical concepts fun and easy to understand
					`,
					tr: `
					Okul öncesi döneme uygun, matematik kavramlarını eğlenceli ve anlaşılır hale getiren <strong>animasyon içerikleri</strong>
					`,
					it: `
					Contenuti animati adatti ai bambini in età prescolare che rendono i concetti matematici divertenti e facili da comprendere
					`
				},
				{
					en: `
					Digital educational materials that allow teachers to easily access modules
					`,
					tr: `
					Öğretmenlerin eğitim modüllerine kolayca ulaşabileceği <strong>dijital eğitim materyalleri</strong>
					`,
					it: `
					Materiali didattici digitali che consentono agli insegnanti di accedere facilmente ai moduli
					`
				},
				{
					en: `
					Wide use and accessibility thanks to all content being available from a central portal
					`,
					tr: `
					Tüm içeriklerin merkezi bir portaldan erişilebilir hale gelmesi sayesinde <strong>yaygın kullanım ve erişilebilirlik</strong>
					`,
					it: `
					Ampia diffusione e accessibilità grazie alla disponibilità di tutti i contenuti su un portale centrale
					`
				},
				{
					en: `
					More motivating learning environments for teachers and students who use technology effectively for pedagogical purposes
					`,
					tr: `
					Teknolojiyi pedagojik amaçlarla etkili kullanan öğretmenler ve öğrenciler için <strong>daha motive edici öğrenme ortamları</strong>
					`,
					it: `
					Ambienti di apprendimento più motivanti per insegnanti e studenti che utilizzano la tecnologia in modo efficace a fini pedagogici
					`
				}
			]
		},
		{
			id: 5,
			title: {
				en: 'WP5: Dissemination, Promotion, and Sustainability',
				tr: 'WP5: Yaygınlaştırma, Tanıtım ve Sürdürülebilirlik',
				it: 'WP5: Diffusione, promozione e sostenibilità',
				ro: 'WP5: Diseminare, promovare și sustenabilitate'
			},
			paragraphs: [
				{
					en: `
					The final package ensures that the outcomes of the 3M project are not limited to the project duration. Findings are shared with teachers, academics, families, and policy makers through workshops, seminars, booklets, online publications, and conferences.
					`,
					tr: `
					Son paket, 3M projesinin çıktılarının yalnızca proje süresiyle sınırlı kalmamasını sağlar. Çalıştaylar,
					seminerler, kitapçıklar, çevrimiçi yayınlar ve konferanslar yoluyla <strong>öğretmenler, akademisyenler, aileler ve politika yapıcılarla</strong> bulgular paylaşılır.
					`,
					it: `
					Il pacchetto finale garantisce che i risultati del progetto 3M non siano limitati alla durata del progetto. I risultati vengono condivisi con insegnanti, accademici, famiglie e responsabili politici attraverso workshop, seminari, opuscoli, pubblicazioni online e conferenze.
					`,
					ro: `
					Organizarea de ateliere, seminarii, conferințe și publicații online.
Materiale accesibile și după finalizarea proiectului.
Contribuție la agenda educațională europeană.
`
				},
				{
					en: `
					In addition, all developed materials, animations, and handbooks remain accessible after the project’s completion, ensuring sustainability. The project outcomes are structured to shed light on preschool education policies across Europe.
					`,
					tr: `
					Ayrıca, geliştirilen tüm materyaller, animasyonlar ve el kitapları proje bitiminden sonra da erişilebilir kılınarak sürdürülebilirlik güvence altına alınır. Proje çıktıları, Avrupa genelinde okul öncesi eğitim politikalarına ışık tutacak şekilde yapılandırılır.
					`,
					it: `
					Inoltre, tutti i materiali, le animazioni e i manuali sviluppati rimangono accessibili dopo il completamento del progetto, garantendone la sostenibilità. I risultati del progetto sono strutturati in modo da far luce sulle politiche di istruzione prescolare in tutta Europa.
					`,
					ro: ''
				}
			],
			results: [
				{
					en: `
					Broad awareness at local, national, and international levels
					`,
					tr: `
					Yerel, ulusal ve uluslararası düzeyde geniş farkındalık
					`,
					it: `
					Ampia sensibilizzazione a livello locale, nazionale e internazionale
					`
				},
				{
					en: `
					Permanent materials and guides for educators
					`,
					tr: `
					Eğitimciler için kalıcı materyaller ve rehberler
					`,
					it: `
					Materiali e guide permanenti per gli educatori
					`
				},
				{
					en: `
					Contribution of the project to the European education agenda
					`,
					tr: `
					Projenin Avrupa eğitim gündemine katkı sunması
					`,
					it: `
					Contributo del progetto all'agenda europea in materia di istruzione
					`
				},
			]
		}
	]
}