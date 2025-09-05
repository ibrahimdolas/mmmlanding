import AboutBG from "../_src/img/aboutElements/bg.png";
import Palm from "../_src/img/characters/ch5.png";
import TopLeft from "../_src/img/aboutElements/image-top-left.jpg";
import BottomRight from "../_src/img/aboutElements/image-bottom-right.jpg";
import Plane from "../_src/img/aboutElements/plane.svg";
import Balloons from "../_src/img/aboutElements/balloons.svg";
import Lines from "../_src/img/aboutElements/lines.png";
import AboutPageBG from "../_src/img/bg/breadcrumb-bg-3.jpg";

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
					Within WP1 Project Management, the progress, quality, and level of achievement of the objectives will be monitored regularly. This process will be carried out by a team consisting of project managers, coordinators, and experts, and will be based on a preliminary evaluation conducted before the start of activities. During the project, progress will be reviewed on a monthly or quarterly basis, with semi-annual or annual evaluations taking place, and at the end, a comprehensive final report will be prepared. Quality checks will be applied at critical stages, such as curriculum development, animation production, and teacher training, while continuous feedback will be gathered through surveys and focus groups. All monitoring results will be documented and shared with partners and stakeholders, while budget and time management will be ensured through detailed planning, using adaptive and flexible approaches whenever necessary
					`,
					tr: `
					WP1 Proje Yönetimi kapsamında, proje faaliyetlerinin ilerleyişi, kalitesi ve hedeflere ulaşma düzeyi düzenli olarak izlenecektir. Bu süreç, proje yöneticileri, koordinatörler ve uzmanlardan oluşan bir ekip tarafından yürütülecek ve proje başlamadan önce yapılan ön değerlendirme ile temellendirilecektir. Proje süresince aylık veya üç aylık aralıklarla ilerleme gözden geçirilecek, yarıyıl veya yıllık değerlendirmeler yapılacak ve proje sonunda kapsamlı bir nihai rapor hazırlanacaktır. Müfredat geliştirme, animasyon üretimi ve öğretmen eğitimleri gibi kritik aşamalarda kalite kontrolleri uygulanacak, anketler ve odak grup çalışmaları aracılığıyla sürekli geri bildirim toplanacaktır. Tüm bulgular raporlanarak proje ortakları ve ilgili paydaşlarla paylaşılacak, bütçe ve zaman yönetimi ayrıntılı planlamayla sağlanacak ve gerektiğinde uyarlanabilir yönetim yaklaşımları kullanılacaktır.
					`,
					it: `
					Nell’ambito del WP1 Gestione del Progetto, i progressi, la qualità e il livello di raggiungimento degli obiettivi saranno monitorati regolarmente. Questo processo sarà realizzato da un team composto da project manager, coordinatori ed esperti, ed avrà come base una valutazione preliminare effettuata prima dell’avvio delle attività. Durante il progetto, i progressi saranno analizzati con cadenza mensile o trimestrale, saranno svolte valutazioni semestrali o annuali e, al termine, verrà redatto un rapporto complessivo. Controlli di qualità saranno applicati nelle fasi critiche, come lo sviluppo del curriculum, la produzione delle animazioni e la formazione degli insegnanti, mentre un feedback costante sarà raccolto tramite questionari e focus group. Tutti i risultati del monitoraggio saranno documentati e condivisi con i partner e le parti interessate, mentre la gestione del budget e del tempo sarà garantita da una pianificazione dettagliata, ricorrendo, se necessario, ad approcci adattivi e flessibili
					`,
					ro: 'În cadrul WP1 Managementul Proiectului, progresul, calitatea și nivelul de atingere a obiectivelor proiectului vor fi monitorizate periodic. Acest proces va fi realizat de o echipă formată din manageri de proiect, coordonatori și experți, fiind fundamentat pe o evaluare preliminară desfășurată înainte de începutul activităților. Pe parcursul proiectului, progresul va fi analizat lunar sau trimestrial, vor avea loc evaluări semestriale sau anuale, iar la final va fi întocmit un raport comprehensiv. Vor fi aplicate controale de calitate în etapele critice, precum elaborarea curriculumului, producerea animațiilor și formarea cadrelor didactice, iar feedbackul constant va fi colectat prin chestionare și grupuri de discuție. Toate rezultatele monitorizării vor fi documentate și comunicate partenerilor și părților interesate, iar managementul bugetului și al timpului va fi asigurat printr-o planificare detaliată, utilizându-se, dacă este necesar, abordări flexibile de adaptare'
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
10 module originale de matematică cu diversitate culturală.
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
					10 original mathematics modules
					`,
					tr: `
					10 özgün matematik modülü
					`,
					it: `
					10 moduli matematici innovativi
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
					Within WP3, the aim is to develop and report the research methodology. This package contributes to the overall and specific objectives of the project by planning the research, selecting appropriate tools, and ensuring that the process runs smoothly from start to finish. In the initial phase, data will be collected from teachers, building on the previous needs analysis to better understand the context of preschool mathematics education and multiculturalism. Data will be gathered through surveys and/or interviews, pre-tests will be applied, and teachers will engage weekly on the web portal with the training modules. The collected data will then be analyzed and used to develop the modules. The main outputs include a needs analysis, pre-tests, data collection process, national reports, a final report, and a transnational meeting to discuss the findings. Success indicators include teachers’ opinions, four national reports, the final report, and academic feedback.
					`,
					tr: `
					WP3 kapsamında, araştırma metodolojisinin geliştirilmesi ve raporlanması hedeflenmektedir. Bu paket, araştırmanın planlanmasını, uygun araçların belirlenmesini ve sürecin baştan sona doğru şekilde ilerlemesini sağlayarak projenin genel ve özel hedeflerine katkıda bulunur. Çalışmanın ilk aşamasında öğretmenlerden veri toplanacak, daha önce yapılan ihtiyaç analizi genişletilerek okul öncesi matematik eğitimi ve çokkültürlülük bağlamında gereksinimler ve katılımcı profilleri belirlenecektir. Bu süreçte anketler ve/veya görüşmeler yoluyla veriler toplanacak, ön testler uygulanacak ve öğretmenlerin haftalık olarak web portalındaki eğitim modülleri üzerine düşünmeleri ve etkileşimde bulunmaları sağlanacaktır. Elde edilen veriler analiz edilerek eğitim modüllerinin geliştirilmesine temel oluşturacaktır.
					`,
					it: `
					Nell’ambito del WP3, l’obiettivo è sviluppare e riportare la metodologia di ricerca. Questo pacchetto contribuisce agli obiettivi generali e specifici del progetto attraverso la pianificazione della ricerca, la scelta degli strumenti adeguati e la garanzia che il processo si svolga correttamente dall’inizio alla fine. Nella fase iniziale verranno raccolti dati dagli insegnanti, ampliando l’analisi dei bisogni già realizzata, al fine di comprendere meglio il contesto dell’educazione matematica nella scuola dell’infanzia e del multiculturalismo. I dati saranno raccolti tramite questionari e/o interviste, saranno effettuati test preliminari e gli insegnanti interagiranno settimanalmente sul portale web riguardo ai moduli formativi. I risultati saranno analizzati e utilizzati per sviluppare i moduli. I principali output previsti sono: analisi dei bisogni, test preliminari, processo di raccolta dati, rapporti nazionali, rapporto finale e un incontro internazionale per discutere i rapporti. Gli indicatori di successo includono le opinioni degli insegnanti, i quattro rapporti nazionali, il rapporto finale e il feedback degli accademici.
					`,
					ro: `
					În cadrul WP3, se urmărește dezvoltarea și raportarea metodologiei de cercetare. Acest pachet contribuie la obiectivele generale și specifice ale proiectului prin planificarea cercetării, alegerea instrumentelor potrivite și asigurarea desfășurării corecte a procesului de la început până la sfârșit. În prima etapă, vor fi colectate date de la cadrele didactice, extinzând analiza nevoilor realizată anterior pentru a înțelege mai bine contextul educației matematice preșcolare și multiculturalismul. Datele vor fi obținute prin chestionare și/sau interviuri, vor fi aplicate teste preliminare, iar profesorii vor interacționa săptămânal pe portalul web privind modulele de formare. Rezultatele vor fi analizate și utilizate pentru dezvoltarea modulelor. Printre rezultatele principale se numără analiza nevoilor, testele preliminare, procesul de colectare a datelor, rapoartele naționale, raportul final și o reuniune internațională pentru discutarea rapoartelor. Indicatorii de succes includ opiniile cadrelor didactice, cele patru rapoarte naționale, raportul final și feedbackul experților academici.
`
				},
				{
					en: '',
					tr: `
					Ana çıktılar arasında ihtiyaç analizi, ön testler, veri toplama süreci, ulusal raporlar, nihai rapor ve raporların tartışıldığı uluslararası bir toplantı yer almaktadır. Başarı göstergeleri, her ülkeden öğretmen görüşleri, toplam dört ulusal rapor, bir nihai rapor ve akademisyenlerden alınacak geri bildirimlerdir. Ortak kurumların sorumlulukları arasında öğretmenlerin web portalına katılımını sağlamak, akademik görüşleri toplamak, verileri derlemek ve analiz etmek, nihai raporları oluşturmak ve uluslararası toplantılarda sunmak bulunmaktadır. Bu paket, partner ülkelerin ihtiyaçlarına en uygun eğitim araçlarını geliştirmeyi hedeflediği için proje açısından kritik önemdedir.
					`,
					it: '',
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
					Within WP4, the aim is to develop a mathematics education program suitable for preschool children and present it through engaging visual and auditory stimuli. Animations will be used to capture children’s interest and prevent the development of fear or prejudice towards mathematics. An online training program for teachers, combining multiculturalism and mathematics education, will also be designed and delivered through a dedicated web portal. This portal will facilitate communication among teachers while ensuring a cost-effective and environmentally friendly approach.
					`,
					tr: `
					WP4 kapsamında, okul öncesi çocuklar için uygun içeriklerle bir matematik eğitim programı hazırlanması ve bu programın öğrencilere eğlenceli, görsel-işitsel uyaranlarla sunulması hedeflenmektedir. Bu amaçla, çocukların ilgisini çekecek ve matematiğe yönelik kaygı ya da önyargı geliştirmelerini önleyecek animasyonlar kullanılacaktır. Ayrıca, öğretmenler için hem çokkültürlülük hem de matematik eğitimi konularında çevrim içi bir eğitim programı tasarlanacak ve bunun için bir web portalı geliştirilecektir. Bu portal, öğretmenler arasında iletişimi ve erişimi kolaylaştırırken ekonomik ve çevre dostu bir yaklaşım da sunacaktır.
					`,
					it: `
					Nell’ambito del WP4, l’obiettivo è sviluppare un programma di educazione matematica adeguato per i bambini della scuola dell’infanzia e presentarlo attraverso stimoli visivi e uditivi accattivanti. Le animazioni saranno utilizzate per catturare l’interesse dei bambini e prevenire lo sviluppo di paure o pregiudizi verso la matematica. Sarà inoltre progettato un programma di formazione online per insegnanti, che combini multiculturalismo ed educazione matematica, tramite un portale web dedicato. Il portale faciliterà la comunicazione tra insegnanti e offrirà un approccio economico ed ecologico.
					`,
					ro: `
					În cadrul WP4, scopul este elaborarea unui program de educație matematică adecvat pentru copiii de vârstă preșcolară și prezentarea acestuia prin stimuli vizuali și auditivi atractivi. Animațiile vor fi folosite pentru a capta interesul copiilor și pentru a preveni dezvoltarea fricii sau prejudecăților față de matematică. De asemenea, va fi conceput un program de formare online pentru cadrele didactice, care să îmbine multiculturalismul și educația matematică, prin intermediul unui portal web dedicat. Portalul va facilita comunicarea între cadrele didactice și va asigura o abordare prietenoasă cu mediul și sustenabilă.
`
				},
				{
					en: `
					The main outputs include: event-based animations, multilingual animations adapted to children’s levels, integration of multicultural themes into the animations, and the creation of a web portal hosting e-learning modules. Success indicators will include an English-language web portal, animations prepared in the languages of each partner country, and English animations accessible to the wider public. Quality will be assessed by external experts.
					`,
					tr: `
					Ana çıktılar arasında etkinlik temelli animasyonların hazırlanması, çocukların seviyelerine uygun çok dilli animasyonların üretilmesi, çokkültürlülük temasının animasyonlara entegre edilmesi ve e-öğrenme modüllerini barındıracak bir web portalının oluşturulması yer almaktadır. Başarı göstergeleri arasında İngilizce bir web portalı, her ülkenin kendi dilinde hazırlanmış animasyonlar, ayrıca uluslararası kullanıma açık İngilizce animasyonlar bulunmaktadır. Hazırlanan web portalı ve animasyonların kalitesi, dış uzmanlar tarafından değerlendirilecek; güncel görsel efektler ve dijital araçlarla matematiksel içerikleri aktarabilme yeterliliği esas alınacaktır.
					`,
					it: `
					I principali risultati includono: animazioni basate su eventi, animazioni multilingue adeguate al livello dei bambini, l’integrazione del tema del multiculturalismo nelle animazioni e la creazione di un portale web con moduli di e-learning. Gli indicatori di successo saranno: un portale web in lingua inglese, animazioni preparate nelle lingue di ciascun paese partner e animazioni in inglese disponibili per il pubblico generale. La qualità sarà valutata da esperti esterni.
					`,
					ro: 'Rezultatele principale includ: animații bazate pe evenimente, animații multilingve adaptate nivelului copiilor, integrarea temei multiculturalismului în animații și crearea unui portal web cu module de e-learning. Indicatorii de succes vor fi: existența unui portal web în limba engleză, animații pregătite în limbile fiecărei țări partenere și animații în limba engleză disponibile pentru publicul larg. Calitatea va fi evaluată de experți externi.'
				},
				{
					tr: `
					Bu iş paketinde <strong>tüm sorumluluk Adıyaman Üniversitesi tarafından yürütülecektir</strong>. Web portalı ve animasyonların geliştirilmesi Adıyaman Üniversitesi tarafından üstlenilecek; Romanya ve İtalya öğretmen ve öğrenci pilot uygulamalarıyla destek verecek; Gürcistan ise matematiksel içeriklerin dijital animasyonlara dönüştürülmesi konusunda katkı sağlayacaktır. Ayrıca tüm ortaklar, web portalı ve animasyonların İngilizce’den kendi dillerine çevirisini gerçekleştirecektir.
					`,
					ro: `
					Toată responsabilitatea pentru acest pachet de lucru revine <strong>Universității din Adıyaman</strong>. Universitatea va dezvolta portalul web și animațiile. România și Italia vor sprijini cu aplicarea pilot alături de cadrele didactice și copiii de vârstă preșcolară, iar Georgia va contribui la transformarea conținuturilor matematice în animații digitale. De asemenea, fiecare partener va sprijini traducerea portalului și a animațiilor în propria limbă.
					`,
					it: `
					Tutta la responsabilità per questo pacchetto di lavoro sarà assunta <strong>dall’Università di Adıyaman</strong>. L’università si occuperà dello sviluppo del portale web e delle animazioni. La Romania e l’Italia forniranno supporto con sperimentazioni pilota con insegnanti e bambini della scuola dell’infanzia, mentre la Georgia contribuirà alla trasformazione dei contenuti matematici in animazioni digitali. Inoltre, ciascun partner sosterrà la traduzione del portale e delle animazioni nella propria lingua.
					`,
					en: `
					All responsibility for this work package lies with <strong>Adıyaman University</strong>. The university will lead the development of the web portal and animations. Romania and Italy will support with pilot applications involving preschool teachers and children, while Georgia will contribute to transforming mathematical content into digital animations. Additionally, each partner will support the translation of the web portal and animations into their own language.
					`
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