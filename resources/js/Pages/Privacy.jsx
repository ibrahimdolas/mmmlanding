import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import {usePage} from "@inertiajs/react";
import LegalParagraph from "@/Components/LegalParagraph.jsx";

const title = {
	en: 'Privacy Policy',
	tr: 'Gizlilik Politikası',
	it: 'Informativa Sulla Privacy',
	ro: 'Politica de Confidențialitate'
}


const updateText = {
	tr: 'Son Güncelleme',
	en: 'Last Updated',
	it: 'Ultimo aggiornamento',
	ro: 'Ultima actualizare'
}

const updateDate = '04/09/2025'


const paragraphs = [
	{
		title: true,
		tr: '1. Veri Sorumlusu',
		en: '1. Data Controller',
		it: '1. Titolare del trattamento',
		ro: '1. Operator de date'
	},
	{
		tr: `
		Kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Birliği Genel Veri Koruma Tüzüğü
		(GDPR) uyarınca, proje koordinatörü olan <strong>Adıyaman Üniversitesi</strong> (Veri Sorumlusu) ve proje ortakları (<strong>Gradinita cu Program
		Prelungit "Casuta bucuriei" nr.11, Scuola Paritaria Dell'infanzia E Primaria "Missionarie Catechiste Del Sacro Cuore" Portici</strong>)
		tarafından işlenecektir.
		`,
		en: `
		Your personal data will be processed in accordance with the Law on the Protection of Personal Data (KVKK) No. 6698
		and the European Union General Data Protection Regulation (GDPR) by the project coordinator Adıyaman University
		(Data Controller) and the project partners (<strong>Gradinita cu Program Prelungit "Casuta bucuriei" nr.11, Scuola Paritaria
		Dell'infanzia E Primaria "Missionarie Catechiste Del Sacro Cuore" Portici</strong>).
		`,
		it: `
		I vostri dati personali saranno trattati in conformità alla Legge n. 6698 sulla Protezione dei Dati Personali (KVKK)
		e al Regolamento Generale sulla Protezione dei Dati dell’Unione Europea (GDPR), dall’Università di Adıyaman
		(Titolare del trattamento) e dai partner del progetto (<strong>Gradinita cu Program Prelungit "Casuta bucuriei" nr.11,
		Scuola Paritaria Dell’infanzia e Primaria "Missionarie Catechiste Del Sacro Cuore" Portici</strong>).
		`,
		ro: `
		Datele dumneavoastră personale vor fi prelucrate în conformitate cu Legea nr. 6698 privind Protecția Datelor cu
		Caracter Personal (KVKK) și Regulamentul General al Uniunii Europene privind Protecția Datelor (GDPR), de către coordonatorul
		de proiect Universitatea din Adıyaman (Operator de date) și partenerii de proiect
		(<strong>Grădinița cu Program Prelungit „Căsuța Bucuriei” nr.11, Scuola Paritaria Dell’infanzia e Primaria „Missionarie Catechiste Del Sacro Cuore” Portici</strong>).
		`
	},
	{
		title: true,
		tr: '2. Toplanan Kişisel Veriler, İşleme Amaçları ve Hangi Amaçla Aktarılabileceği',
		en: '2. Collected Personal Data, Processing Purposes, and Possible Transfers',
		it: '2. Dati personali raccolti, finalità del trattamento e possibili trasferimenti',
		ro: '2. Datele personale colectate, scopurile prelucrării și posibilele transferuri'
	},
	{
		tr: 'Portalı kullanırken sizden aşağıdaki bilgiler toplanabilir:',
		en: 'The following data may be collected when you use the Portal:',
		it: 'I seguenti dati possono essere raccolti quando utilizzate il Portale:',
		ro: 'Următoarele date pot fi colectate atunci când utilizați Portalul:'
	},
	{
		list: true,
		items: [
			{
				tr: 'Kimlik ve İletişim Bilgileri: Ad,soyad, e-posta adresi.',
				en: 'Identity and Contact Information: Name, surname, email address.',
				it: 'Dati di identità e contatto: Nome, cognome, indirizzo e-mail.',
				ro: 'Date de identitate și contact: Nume, prenume, adresă de e-mail.'
			},
			{
				tr: 'Mesleki Bilgiler: Kurum, unvan ve öğretmenlik deneyimi',
				en: 'Professional Information: Institution, title, teaching experience.',
				it: 'Dati professionali: Istituzione, titolo, esperienza di insegnamento.',
				ro: 'Date profesionale: Instituție, titlu, experiență în predare.'
			},
			{
				tr: 'Kullanım Verileri: IP adresi, tarayıcı türü, işletim sistemi, ziyaret zamanı ve görüntülenen sayfalar (çerezler aracılığıyla).',
				en: 'Usage Data: IP address, browser type, operating system, visit time, and viewed pages (via cookies).',
				it: 'Dati di utilizzo: Indirizzo IP, tipo di browser, sistema operativo, orario di visita e pagine visualizzate (tramite cookie).',
				ro: 'Date de utilizare: Adresă IP, tip de browser, sistem de operare, timp de vizită și pagini vizualizate (prin cookie-uri).'
			},
			{
				tr: 'Eğitim Verileri: Eğitim modüllerine katılım durumu, anket ve değerlendirme sonuçları.',
				en: 'Educational Data: Participation in educational modules, survey, and evaluation results.',
				it: 'Dati educativi: Partecipazione ai moduli educativi, risultati di questionari e valutazioni.',
				ro: 'Date educaționale: Participarea la module educaționale, rezultate la chestionare și evaluări.'
			}
		]
	},
	{
		tr: 'Bu veriler şu amaçla işlenir:',
		en: 'These data are processed for the following purposes:',
		it: 'Questi dati vengono trattati per le seguenti finalità:',
		ro: 'Aceste date sunt prelucrate în următoarele scopuri:'
	},
	{
		list: true,
		items: [
			{
				tr: 'Portalı kullanmanızı sağlamak ve hesabınızı yönetmek,',
				en: 'To enable your use of the Portal and manage your account,',
				it: 'Consentire l’utilizzo del Portale e la gestione del vostro account,',
				ro: 'Pentru a vă permite utilizarea Portalului și gestionarea contului dumneavoastră,'
			},
			{
				tr: 'Öğretmen eğitimlerini yürütmek ve sizi bilgilendirmek,',
				en: 'To conduct teacher training and provide information,',
				it: 'Svolgere attività di formazione degli insegnanti e fornire informazioni,',
				ro: 'Pentru desfășurarea formării cadrelor didactice și informarea dumneavoastră,'
			},
			{
				tr: 'Proje çıktılarını değerlendirmek,',
				en: 'To evaluate project outputs,',
				it: 'Valutare i risultati del progetto,',
				ro: 'Pentru evaluarea rezultatelor proiectului,'
			},
			{
				tr: 'Duyuru ve güncellemeleri iletmek,',
				en: 'To deliver announcements and updates,',
				it: 'Inviare avvisi e aggiornamenti,',
				ro: 'Pentru transmiterea de anunțuri și actualizări,'
			},
			{
				tr: 'Portalın teknik işleyişini analiz etmek ve geliştirmek.',
				en: 'To analyze and improve the technical functioning of the Portal.',
				it: 'Analizzare e migliorare il funzionamento tecnico del Portale.',
				ro: 'Pentru analizarea și îmbunătățirea funcționării tehnice a Portalului.'
			}
		]
	},
	{
		tr: 'Bu veriler yalnızca birinci maddede belirtilen konsorsiyum ortaklarına (Romanya, İtalya ve Türkiye) eksiklerin giderilmesi, olası hataların düzeltilmesi, veri analizlerinin yapılması ve projenin hedeflerine ulaşılabilmesi amaçları doğrultusunda aktarılabilecektir. ',
		en: 'These data may be transferred solely to the consortium partners specified in Article 1 (Romania, Italy, and Turkey) for the purposes of addressing deficiencies, correcting potential errors, conducting data analyses, and achieving the objectives of the project.',
		it: 'Questi dati possono essere trasferiti esclusivamente ai partner del consorzio indicati all’articolo 1 (Romania, Italia e Turchia) per correggere eventuali carenze, risolvere errori, effettuare analisi dei dati e raggiungere gli obiettivi del progetto.',
		ro: 'Aceste date pot fi transferate exclusiv partenerilor din consorțiul menționat la articolul 1 (România, Italia și Turcia), în scopul remedierii deficiențelor, corectării posibilelor erori, efectuării analizelor de date și atingerii obiectivelor proiectului.'
	},
	{
		title: true,
		tr: '3. Kişisel Verileri Toplama Yöntemimiz ve Hukuki Sebepleri',
		en: '3. Data Collection Methods and Legal Grounds',
		it: '3. Modalità di raccolta dei dati e basi giuridiche',
		ro: '3. Metode de colectare a datelor și temeiuri legale'
	},
	{
		tr: 'KVKK gereğince kişisel verileri otomatik yahut otomatik olmayan yollarla, sözlü, yazılı veya elektronik şekilde toplamakta ve Kişisel verileriniz, KVKK\'nın 5, 6/3 maddesi ve GDPR\'ın 6. maddesi uyarınca aşağıdaki hukuki sebeplerle işlenmektedir:',
		en: 'In accordance with the KVKK, personal data are collected automatically or non-automatically, orally, in writing, or electronically. Your personal data are processed under Article 5 and Article 6/3 of the KVKK and Article 6 of the GDPR based on the following legal grounds:',
		it: 'In conformità al KVKK, i dati personali vengono raccolti con mezzi automatici o non automatici, oralmente, per iscritto o in formato elettronico. I vostri dati personali sono trattati ai sensi dell’articolo 5 e dell’articolo 6/3 del KVKK e dell’articolo 6 del GDPR sulla base dei seguenti presupposti legali:',
		ro: 'În conformitate cu KVKK, datele personale sunt colectate prin mijloace automate sau non-automate, oral, scris sau electronic. Datele dumneavoastră personale sunt prelucrate în baza articolului 5 și articolului 6/3 din KVKK și a articolului 6 din GDPR, pe baza următoarelor temeiuri legale:'
	},
	{
		list: true,
		items: [
			{
				tr: 'Açık Rıza: Belirli iletişim faaliyetleri için,',
				en: 'Explicit Consent: For specific communication activities,',
				it: 'Consenso esplicito: Per specifiche attività di comunicazione,',
				ro: 'Consimțământ explicit: Pentru anumite activități de comunicare,'
			},
			{
				tr: 'Sözleşmenin İfası: Portal kullanımının sağlanması için,',
				en: 'Performance of Contract: To ensure the use of the Portal,',
				it: 'Esecuzione del contratto: Per garantire l’utilizzo del Portale,',
				ro: 'Executarea contractului: Pentru a asigura utilizarea Portalului,'
			},
			{
				tr: 'Meşru Menfaat: Portalın güvenliği ve iyileştirilmesi için.',
				en: 'Legitimate Interest: For the security and improvement of the Portal.',
				it: 'Interesse legittimo: Per la sicurezza e il miglioramento del Portale.',
				ro: 'Interes legitim: Pentru securitatea și îmbunătățirea Portalului.'
			}
		]
	},
	{
		title: true,
		tr: '4. Veri Güvenliği',
		en: '4. Data Security',
		it: '4. Sicurezza dei dati',
		ro: '4. Securitatea datelor'
	},
	{
		tr: 'Kişisel verilerinizin yetkisiz erişim, kayıp veya ifşa edilmesini önlemek için uygun teknik (örneğin, şifreleme) ve idari tedbirler alınmaktadır.',
		en: 'Appropriate technical (e.g., encryption) and administrative measures are taken to prevent unauthorized access, loss, or disclosure of your personal data.',
		it: 'Sono adottate misure tecniche (ad esempio crittografia) e amministrative adeguate per prevenire accessi non autorizzati, perdite o divulgazioni dei vostri dati personali.',
		ro: 'Sunt luate măsuri tehnice (de exemplu, criptare) și administrative adecvate pentru a preveni accesul neautorizat, pierderea sau divulgarea datelor dumneavoastră personale.'
	},
	{
		title: true,
		tr: '5. Veri Saklama Süresi',
		en: '5. Data Retention Period',
		it: '5. Periodo di conservazione dei dati',
		ro: '5. Perioada de stocare a datelor'
	},
	{
		tr: 'Kişisel verileriniz, proje süresi (24 ay) ve ardından yasal yükümlülüklerimizi yerine getirebilmemiz için gerekli olan süre boyunca saklanacak, ardından anonim hale getirilecek veya imha edilecektir.',
		en: 'Your personal data will be retained for the duration of the project (24 months) and thereafter for as long as necessary to fulfill our legal obligations, after which they will be anonymized or destroyed.',
		it: 'I vostri dati personali saranno conservati per la durata del progetto (24 mesi) e successivamente per il tempo necessario a soddisfare i nostri obblighi legali, dopodiché saranno anonimizzati o distrutti.',
		ro: 'Datele dumneavoastră personale vor fi păstrate pe durata proiectului (24 luni) și ulterior atât timp cât este necesar pentru a ne îndeplini obligațiile legale, după care vor fi anonimizate sau distruse.'
	},
	{
		title: true,
		tr: '6. Haklarınız',
		en: '6. Your Rights',
		it: '6. Diritti dell’interessato',
		ro: '6. Drepturile dumneavoastră'
	},
	{
		tr: 'KVKK ve GDPR uyarınca sahip olduğunuz haklar şunlardır:',
		en: 'Under the KVKK and GDPR, you have the following rights:',
		it: 'Ai sensi del KVKK e del GDPR, avete i seguenti diritti:',
		ro: 'În conformitate cu KVKK și GDPR, aveți următoarele drepturi:'
	},
	{
		list: true,
		items: [
			{
				tr: 'a) Kişisel veri işlenip işlenmediğini öğrenme,',
				en: 'a) To learn whether personal data are being processed,',
				it: 'a) Sapere se i dati personali sono trattati,',
				ro: 'a) Să aflați dacă datele personale sunt prelucrate,'
			},
			{
				tr: 'b) Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,',
				en: 'b) To request information if your personal data have been processed,',
				it: 'b) Richiedere informazioni se i vostri dati personali sono stati trattati,',
				ro: 'b) Să solicitați informații dacă datele dumneavoastră personale au fost prelucrate,'
			},
			{
				tr: 'c) Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,',
				en: 'c) To learn the purpose of the processing of personal data and whether they are used in accordance with this purpose,',
				it: 'c) Conoscere la finalità del trattamento e se i dati vengono utilizzati conformemente a tale finalità,',
				ro: 'c) Să aflați scopul prelucrării datelor personale și dacă acestea sunt utilizate în conformitate cu acest scop,'
			},
			{
				tr: 'd) Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,',
				en: 'd) To know the third parties to whom personal data are transferred domestically or abroad,',
				it: 'd) Conoscere i terzi ai quali i dati personali sono stati trasferiti, in Turchia o all’estero,',
				ro: 'd) Să cunoașteți terții cărora li s-au transferat datele personale, în țară sau în străinătate,'
			},
			{
				tr: 'e) Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,',
				en: 'e) To request correction of personal data if they are incomplete or inaccurate,',
				it: 'e) Richiedere la rettifica dei dati personali se incompleti o inesatti,',
				ro: 'e) Să solicitați corectarea datelor personale dacă acestea sunt incomplete sau inexacte,'
			},
			{
				tr: 'f) KVKK 7 nci maddede öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,',
				en: 'f) To request the deletion or destruction of personal data within the framework of Article 7 of the KVKK,',
				it: 'f) Richiedere la cancellazione o la distruzione dei dati personali ai sensi dell’articolo 7 del KVKK,',
				ro: 'f) Să solicitați ștergerea sau distrugerea datelor personale în conformitate cu articolul 7 din KVKK,'
			},
			{
				tr: 'g) (e) ve (f) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,',
				en: 'g) To request that transactions carried out under subparagraphs (e) and (f) be notified to third parties to whom personal data have been transferred,',
				it: 'g) Richiedere che le operazioni effettuate ai sensi delle lettere (e) ed (f) siano comunicate ai terzi ai quali i dati sono stati trasferiti,',
				ro: 'g) Să solicitați notificarea terților cărora li s-au transferat datele personale cu privire la tranzacțiile efectuate în temeiul literelor (e) și (f),'
			},
			{
				tr: 'h) İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,',
				en: 'h) To object to any outcome that is to your detriment resulting from the analysis of processed data exclusively through automated systems,',
				it: 'h) Opporsi a qualsiasi risultato a voi sfavorevole derivante dall’analisi dei dati trattati esclusivamente mediante sistemi automatizzati,',
				ro: 'h) Să vă opuneți oricărui rezultat care vă este defavorabil, rezultat din analiza datelor prelucrate exclusiv prin sisteme automatizate,'
			},
			{
				tr: 'i) Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.',
				en: 'i) To request compensation in case of damage due to unlawful processing of personal data.',
				it: 'i) Richiedere il risarcimento dei danni in caso di trattamento illecito dei dati personali.',
				ro: 'i) Să solicitați despăgubiri în caz de prejudicii cauzate de prelucrarea ilegală a datelor personale.'
			},
		]
	},
	{
		title: true,
		tr: '7. İletişim',
		en: '7. Contact',
		it: '7. Contatti',
		ro: '7. Contact'
	},
	{
		tr: `Haklarınızı kullanmak veya sorularınızı yöneltmek için <a href="mailto:mathmagicinmotion@gmail.com" target="_blank">mathmagicinmotion@gmail.com</a> adresi üzerinden bizimle
		 iletişime geçebilirsiniz. GDPR kapsamında, AB içinde ikamet eden kullanıcılar için atanmış bir temsilci bulunmamaktadır;
		 tüm talepler doğrudan Adıyaman Üniversitesi’ne iletilmelidir. Ayrıca, şikâyetleriniz için Türkiye’de Kişisel Verileri
		 Koruma Kurumu (KVKK) veya bulunduğunuz ülkenin ilgili otoritesine başvurma hakkınız vardır.`,
		en: `To exercise your rights or for questions, you can contact us at <a href="mailto:mathmagicinmotion@gmail.com" target="_blank">mathmagicinmotion@gmail.com</a>. Under GDPR, no
		representative has been appointed within the EU; all requests must be directed to Adıyaman University. In addition, you have the right to lodge complaints with the Turkish Data Protection Authority (KVKK) or the relevant authority in your country of residence.`,
		it: `Per esercitare i vostri diritti o per domande, potete contattarci all’indirizzo <a href="mailto:mathmagicinmotion@gmail.com" target="_blank">mathmagicinmotion@gmail.com</a>. Ai sensi del GDPR, non è stato nominato alcun rappresentante nell’UE; tutte le richieste devono essere indirizzate direttamente all’Università di Adıyaman.
		Inoltre, avete il diritto di presentare reclami all’Autorità Turca per la Protezione dei Dati Personali (KVKK) o all’autorità competente del vostro Paese di residenza.`,
		ro: 'Pentru a vă exercita drepturile sau pentru întrebări, ne puteți contacta la <a href="mailto:mathmagicinmotion@gmail.com" target="_blank">mathmagicinmotion@gmail.com</a>. În temeiul GDPR, nu a fost desemnat niciun reprezentant în UE; toate solicitările trebuie transmise direct Universității din Adıyaman. În plus, aveți dreptul de a depune plângeri la Autoritatea pentru Protecția Datelor cu Caracter Personal din Turcia (KVKK) sau la autoritatea relevantă din țara dumneavoastră de reședință.'
	}
]



const Privacy = () => {
	const {locale} = usePage().props
	return (
		<Layout title="Privacy">
			
			<section className="vs-about--section pt-30 space space-extra-bottom z-index-common overflow-hidden">
				
				
				<div className="container">
					
					<div className="row align-items-center pt-30 gx-50">
						
						<div className="col-12 mb-30 wow">
							
							<div className="vs-title text-center title-anime animation-style2">
								<div className="title-anime__wrap">
									<h2 className="vs-title__main">{title[locale] ?? title.en}</h2>
								</div>
							</div>
							
							<h6>{updateText[locale] ?? updateText.en}: {updateDate}</h6>
							
							<div className="d-flex flex-column gap-2.5 w-100">
								{
									paragraphs.map((para, index) => (
										<LegalParagraph key={index} paragraph={para} />
									))
								}
							</div>
							
						</div>
						
					</div>
					
				</div>
				
				
			</section>
			
		</Layout>
	);
};

export default Privacy;
