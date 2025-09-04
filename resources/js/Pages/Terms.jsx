import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import {usePage} from "@inertiajs/react";
import LegalParagraph from "@/Components/LegalParagraph.jsx";

const title = {
	en: 'Terms & Conditions',
	tr: 'Kullanım Şartları',
	it: 'Termini di Utilizzo',
	ro: 'Termeni de Utilizare'
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
		tr: '1. Giriş',
		en: '1. Introduction',
		it: '1. Introduzione',
		ro: '1. Introducere'
	},
	{
		tr: `Bu Kullanım Koşulları, Erasmus+ programı kapsamında yürütülen "<strong>MATH MAGIC IN MOTION (3M): CULTURALLY AND HISTORICALLY RESPONSIVE ADVENTURES FOR PRESCHOOL EXPLORERS</strong>" projesi (Proje No: 2024-1-TR01-KA220-SCH-000254193) kapsamında geliştirilen bu web portalının (bundan böyle "Portal" olarak anılacaktır) kullanımına ilişkin hüküm ve koşulları düzenler. Portala erişim sağlayarak ve kullanmaya devam ederek, aşağıdaki koşulları kabul etmiş sayılırsınız.`,
		en: `
		These Terms of Use govern the rules and conditions for the use of this web portal (hereinafter referred to as the “Portal”)
		developed within the Erasmus+ project "<strong>MATH MAGIC IN MOTION (3M): Culturally and Historically Responsive Adventures for Preschool Explorers</strong>"
		(Project No: 2024-1-TR01-KA220-SCH-000254193). By accessing and continuing to use the Portal, you are deemed to have accepted the following terms.
		`,
		it: `I presenti Termini di Utilizzo disciplinano le regole e le condizioni per l’utilizzo di questo portale web (di seguito denominato “Portale”),
		sviluppato nell’ambito del progetto Erasmus+ “<strong>MATH MAGIC IN MOTION (3M): Culturally and Historically Responsive Adventures for Preschool Explorers</strong>” (Numero di Progetto: 2024-1-TR01-KA220-SCH-000254193). Accedendo e continuando a utilizzare il Portale, si considera che abbiate accettato i seguenti termini.`,
		ro: `Acești Termeni de Utilizare reglementează regulile și condițiile de utilizare a acestui portal web (denumit în continuare „Portalul”), dezvoltat în cadrul proiectului Erasmus+ „<strong>MATH MAGIC IN MOTION (3M): Culturally and Historically Responsive Adventures for Preschool Explorers</strong>” (Nr. Proiect: 2024-1-TR01-KA220-SCH-000254193). Prin accesarea și continuarea utilizării Portalului, sunteți considerat că ați acceptat următorii termeni.`
	},
	{
		title: true,
		tr: '2 Portalın Amacı ve Kullanımı',
		en: '2. Purpose and Use of the Portal',
		it: '2. Scopo e utilizzo del Portale',
		ro: '2. Scopul și utilizarea Portalului'
	},
	{
		tr: 'Portal, 3M projesi kapsamında okul öncesi matematik eğitimi için geliştirilen eğitim modülleri, animasyonlar, öğretmen eğitim içerikleri ve proje çıktılarına erişim sağlamak amacıyla oluşturulmuştur. Portal yalnızca eğitim, araştırma ve içerik paylaşımı amaçlı kullanılabilir.',
		en: 'The Portal has been created to provide access to educational modules, animations, teacher training content, and project outputs developed within the scope of the 3M project for early childhood mathematics education. The Portal may only be used for educational, research, and content-sharing purposes.',
		it: 'Il Portale è stato creato per fornire accesso a moduli educativi, animazioni, contenuti di formazione per insegnanti e risultati del progetto sviluppati nell’ambito del progetto 3M per l’educazione matematica nella prima infanzia. Il Portale può essere utilizzato esclusivamente a fini educativi, di ricerca e di condivisione di contenuti.',
		ro: 'Portalul a fost creat pentru a oferi acces la module educaționale, animații, conținuturi de formare pentru cadrele didactice și rezultatele proiectului dezvoltate în cadrul proiectului 3M pentru educația matematică timpurie. Portalul poate fi utilizat exclusiv în scopuri educaționale, de cercetare și de partajare a conținutului.'
	},
	{
		title: true,
		tr: '3. Fikri Mülkiyet Hakları',
		en: '3. Intellectual Property Rights',
		it: '3. Diritti di proprietà intellettuale',
		ro: '3. Drepturi de proprietate intelectuală'
	},
	{
		tr: 'Portaldaki tüm içerikler (metin, grafik, logo, görsel, animasyon, video, ses kaydı, yazılım vb.) Adıyaman Üniversitesi koordinatörlüğündeki proje ortaklarına aittir ve uluslararası fikri mülkiyet yasaları ve telif hakkı sözleşmeleri ile korunmaktadır. İçerikler, proje ortaklarının önceden yazılı izni olmaksızın ticari amaçla kullanılamaz, kopyalanamaz, dağıtılamaz, değiştirilemez veya yeniden yayımlanamaz.',
		en: 'All content on the Portal (texts, graphics, logos, visuals, animations, videos, audio recordings, software, etc.) belongs to the project partners under the coordination of Adıyaman University and is protected by international intellectual property laws and copyright agreements. The content may not be used for commercial purposes, copied, distributed, altered, or republished without the prior written permission of the project partners.',
		it: 'Tutti i contenuti presenti sul Portale (testi, grafici, loghi, immagini, animazioni, video, registrazioni audio, software, ecc.) appartengono ai partner del progetto sotto il coordinamento dell’Università di Adıyaman e sono protetti dalle leggi internazionali sulla proprietà intellettuale e dagli accordi sul diritto d’autore. I contenuti non possono essere utilizzati per scopi commerciali, copiati, distribuiti, modificati o ripubblicati senza l’autorizzazione scritta preventiva dei partner del progetto.',
		ro: 'Toate conținuturile de pe Portal (texte, grafice, logo-uri, imagini, animații, videoclipuri, înregistrări audio, software etc.) aparțin partenerilor de proiect sub coordonarea Universității din Adıyaman și sunt protejate de legile internaționale privind proprietatea intelectuală și de acordurile de drepturi de autor. Conținutul nu poate fi utilizat în scopuri comerciale, copiat, distribuit, modificat sau republicat fără permisiunea scrisă prealabilă a partenerilor de proiect.'
	},
	{
		title: true,
		tr: '4. Kullanıcı Yükümlülükleri',
		en: '4. User Obligations',
		it: '4. Obblighi degli utenti',
		ro: '4. Obligațiile utilizatorilor'
	},
	{
		tr: 'Kullanıcılar Portalı aşağıdaki durumlarda kullanamaz:',
		en: 'Users may not use the Portal in the following ways:',
		it: 'Gli utenti non possono utilizzare il Portale per i seguenti scopi:',
		ro: 'Utilizatorii nu pot utiliza Portalul în următoarele scopuri:'
	},
	{
		list: true,
		items: [
			{
				tr: 'Yasa dışı faaliyetlerde bulunmak veya yasa dışı içerik paylaşmak için.',
				en: 'For unlawful activities or sharing illegal content,',
				it: 'Per attività illegali o la condivisione di contenuti illegali,',
				ro: 'Pentru activități ilegale sau partajarea de conținut ilegal,'
			},
			{
				tr: 'Başkalarının haklarını ihlal etmek veya rahatsız etmek için.',
				en: 'To infringe or disturb the rights of others,',
				it: 'Per violare o disturbare i diritti altrui,',
				ro: 'Pentru a încălca sau deranja drepturile altora,'
			},
			{
				tr: 'Zararlı yazılım (virüs, truva atı, solucan vb.) yaymak için.',
				en: 'To spread harmful software (viruses, trojans, worms, etc.),',
				it: 'Per diffondere software dannosi (virus, trojan, worm, ecc.),',
				ro: 'Pentru a răspândi software dăunător (viruși, troieni, viermi etc.),'
			},
			{
				tr: 'Portalın çalışmasını engelleyecek veya aksatacak her türlü faaliyette bulunmak için.',
				en: 'To engage in any activity that may prevent or disrupt the operation of the Portal.',
				it: 'Per svolgere qualsiasi attività che possa impedire o compromettere il funzionamento del Portale.',
				ro: 'Pentru a desfășura orice activitate care ar putea împiedica sau perturba funcționarea Portalului.'
			}
		]
	},
	{
		tr: 'Hesap bilgilerinizi güvende tutmak ve üçüncü şahıslarla paylaşmamak sizin sorumluluğunuzdadır.',
		en: 'You are responsible for keeping your account information secure and not sharing it with third parties.',
		it: 'L’utente è responsabile di mantenere sicure le informazioni del proprio account e di non condividerle con terzi.',
		ro: 'Sunteți responsabil pentru păstrarea în siguranță a informațiilor contului dumneavoastră și pentru a nu le împărtăși cu terți.'
	},
	{
		title: true,
		tr: '5. Sorumluluk Reddi',
		en: '5. Disclaimer',
		it: '5. Esclusione di responsabilità',
		ro: '5. Declarație de responsabilitate'
	},
	{
		tr: 'Portal içeriği "olduğu gibi" sunulmaktadır. Proje ortakları, içeriklerin doğruluğu, bütünlüğü veya güncelliği konusunda herhangi bir garanti vermemektedir. Portalı kullanmanız nedeniyle doğabilecek doğrudan veya dolaylı hiçbir zarardan proje ortakları sorumlu tutulamaz.',
		en: 'The Portal content is provided “as is.” The project partners make no guarantees regarding the accuracy, completeness, or timeliness of the content. The project partners shall not be held responsible for any direct or indirect damages arising from the use of the Portal.',
		it: 'Il contenuto del Portale è fornito “così com’è”. I partner del progetto non rilasciano alcuna garanzia in merito all’accuratezza, completezza o attualità dei contenuti. I partner del progetto non possono essere ritenuti responsabili per eventuali danni diretti o indiretti derivanti dall’uso del Portale.',
		ro: 'Conținutul Portalului este furnizat „ca atare”. Partenerii de proiect nu oferă garanții cu privire la acuratețea, completitudinea sau actualitatea conținuturilor. Partenerii de proiect nu pot fi trași la răspundere pentru niciun fel de daune directe sau indirecte care pot apărea în urma utilizării Portalului.'
	},
	{
		title: true,
		tr: '6. Değişiklikler ve Sonlandırma',
		en: '6. Changes and Termination',
		it: '6. Modifiche e cessazione',
		ro: '6. Modificări și încetare'
	},
	{
		tr: 'Proje ortakları, dilediği zaman Portala erişimi durdurma veya Kullanım Koşulları\'nda değişiklik yapma hakkını saklı tutar. Değişiklikler, Portal üzerinde yayımlandığı tarihten itibaren geçerlilik kazanır.',
		en: 'The project partners reserve the right to suspend access to the Portal or modify the Terms of Use at any time. Changes become effective as of the date they are published on the Portal.',
		it: 'I partner del progetto si riservano il diritto di sospendere l’accesso al Portale o di modificare i Termini di Utilizzo in qualsiasi momento. Le modifiche diventano effettive dalla data di pubblicazione sul Portale.',
		ro: 'Partenerii de proiect își rezervă dreptul de a suspenda accesul la Portal sau de a modifica Termenii de Utilizare în orice moment. Modificările devin valabile din momentul publicării pe Portal.'
	},
	{
		title: true,
		tr: '7. Uygulanacak Hukuk ve Yetki',
		en: '7. Applicable Law and Jurisdiction',
		it: '7. Legge applicabile e foro competente',
		ro: '7. Legea aplicabilă și jurisdicția'
	},
	{
		tr: 'Bu Kullanım Koşulları’nın uygulanmasında Türkiye Cumhuriyeti yasaları geçerlidir. Doğabilecek uyuşmazlıklarda Adıyaman Merkez Mahkemeleri ve İcra Daireleri yetkilidir.',
		en: 'The laws of the Republic of Turkey shall apply to the implementation of these Terms of Use. Adıyaman Central Courts and Enforcement Offices shall have jurisdiction over any disputes.',
		it: 'Le leggi della Repubblica di Turchia si applicano all’attuazione dei presenti Termini di Utilizzo. I tribunali e gli uffici esecutivi centrali di Adıyaman sono competenti per eventuali controversie.',
		ro: 'Legile Republicii Turcia se aplică punerii în aplicare a acestor Termeni de Utilizare. Instanțele și Oficiile de Executare din centrul Adıyaman sunt competente pentru orice litigii.'
	},
	{
		title: true,
		tr: '8. İletişim',
		en: '8. Contact',
		it: '8. Contatti',
		ro: '8. Contact'
	},
	{
		tr: 'Kullanım Koşulları ile ilgili sorularınız için proje koordinatörü Adıyaman Üniversitesi ile iletişime geçebilirsiniz.',
		en: 'For questions regarding the Terms of Use, you may contact the project coordinator, Adıyaman University.',
		it: 'Per domande relative ai Termini di Utilizzo, potete contattare il coordinatore del progetto, Università di Adıyaman.',
		ro: 'Pentru întrebări legate de Termenii de Utilizare, puteți contacta coordonatorul proiectului, Universitatea din Adıyaman.'
	}
]



const Terms = () => {
	
	const {locale} = usePage().props
	
	return (
		<Layout title="Terms">
			
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
										<LegalParagraph key={index} paragraph={para}/>
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

export default Terms;
