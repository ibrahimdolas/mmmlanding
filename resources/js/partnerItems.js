import PartnersBG from "../_src/img/partnerElements/bg.jpg"

import Adyu from "../_src/img/partnerElements/adyu.jpg"
import Catechiste from "../_src/img/partnerElements/catechiste.jpg"
import Casuta from "../_src/img/partnerElements/casuta.jpg"


export const partnerPageData = {
	parallaxBG: PartnersBG,
	title: {
		en: 'Partners',
		tr: 'Ortaklar',
		ro: 'Parteneri',
		it: 'Partner'
	},
	partners: [
		{
			id: 1,
			title: 'Adıyaman Üniversitesi',
			address: 'Atatürk Bulvarı No:1 02040 Adıyaman Türkiye',
			url: 'https://adiyaman.edu.tr',
			isCoordinator: true,
			image: Adyu,
			delay: '0.25s',
			flag: 'tr',
			descriptions: {
				en: `
				<p>
				Adıyaman University, with its 14 faculties, 6 vocational schools, and thousands of students, is one of Turkey's well-established higher education institutions.
				Within the Faculty of Education, it has a strong academic staff particularly in the fields of early childhood education and teacher training.
				</p>
				<p>
				Within the scope of the project, the university is responsible not only for coordination but also for the development of all educational modules, the design of the digital
				platform, the preparation of animations, and the management of quality processes. With its national and international experience, Adıyaman University provides the scientific and
				pedagogical foundation of the 3M Project!
</p>
				`,
				tr: `
				<p>
				Adıyaman Üniversitesi, 14 fakülte, 6 meslek yüksekokulu ve binlerce öğrencisiyle Türkiye’nin köklü yükseköğretim kurumlarından biridir. Eğitim Fakültesi bünyesinde özellikle <strong>okul öncesi eğitim ve öğretmen yetiştirme</strong> alanında güçlü bir akademik kadroya sahiptir.
</p>
<p>
Üniversite, proje kapsamında koordinasyonu üstlenmenin yanı sıra, tüm eğitim modüllerinin geliştirilmesi, dijital platformun tasarımı, animasyonların hazırlanması ve kalite süreçlerinin yürütülmesinden sorumludur. ADYÜ, ulusal ve uluslararası düzeydeki tecrübesiyle 3M projesinin bilimsel ve pedagojik temelini sağlamaktadır.
</p>
				`,
				it: `
				<p>
				L'Università di Adıyaman, con le sue 14 facoltà, 6 scuole professionali e migliaia di studenti, è uno degli istituti di istruzione superiore più affermati della Turchia. All'interno della Facoltà di Scienze della Formazione, vanta un forte staff accademico, in particolare nei settori dell'educazione della prima infanzia e della formazione degli insegnanti.
</p>
<p>
Nell'ambito del progetto, l'università è responsabile non solo del coordinamento, ma anche dello sviluppo di tutti i moduli didattici, della progettazione della piattaforma digitale, della preparazione delle animazioni e della gestione dei processi di qualità. Con la sua esperienza nazionale e internazionale, l'Università di Adıyaman fornisce le basi scientifiche e pedagogiche del progetto 3M.
</p>
				`,
				ro: `
				<p>instituție de învățământ superior cu experiență națională și internațională, responsabilă de coordonare, dezvoltare module, platformă digitală și animații.</p>
				`
			}
		},
		{
			id: 2,
			title: 'Grădinița cu Program Prelungit “Căsuța Bucuriei” nr.11',
			url: 'https://casutabucuriei.ro/',
			isCoordinator: false,
			image: Casuta,
			delay: '0.35s',
			flag: 'ro',
			descriptions: {
				en: `
				<p>
				Located in the city of Brașov, the “Căsuța Bucuriei” Kindergarten is one of Romania’s pioneering institutions in
				preschool education, with 47 years of history. With 366 students and 25 teachers, it adopts a modern and inclusive approach to education.
				</p>
				<p>
				The kindergarten carries out projects that support children’s growth with cultural diversity, environmental awareness,
				digital skills, and social values. As the Romanian partner in the 3M project, it is responsible for implementing the prepared materials
				in practice, providing feedback, and disseminating the results.
</p>
				`,
				tr: `
				<p>
				Brasov şehrinde yer alan <strong>“Căsuța Bucuriei” Anaokulu</strong>, 47 yıllık geçmişiyle Romanya’nın okul öncesi eğitiminde öncü kurumlarından biridir. 366 öğrencisi ve 25 öğretmeniyle modern ve kapsayıcı eğitim anlayışını benimser.
</p>
<p>
Anaokulu, çocukların <strong>kültürel çeşitlilik, çevre bilinci, dijital beceriler ve toplumsal değerlerle</strong> büyümesini destekleyen projeler yürütmektedir. 3M projesinde Romanya ortağı olarak, hazırlanan materyallerin sahada uygulanması, geri bildirim verilmesi ve sonuçların yaygınlaştırılması görevini üstlenmiştir.
</p>
				`,
				it: `
				<p>
				Situato nella città di Brașov, l'asilo “Căsuța Bucuriei” è una delle istituzioni pionieristiche della Romania nell'ambito dell'istruzione prescolare, con 47 anni di storia. Con 366 studenti e 25 insegnanti, adotta un approccio moderno e inclusivo all'istruzione.
</p>
				<p>
				L'asilo realizza progetti che sostengono la crescita dei bambini attraverso la diversità culturale, la consapevolezza ambientale, le competenze digitali e i valori sociali. In qualità di partner rumeno del progetto 3M, è responsabile dell'implementazione pratica dei materiali preparati, fornendo feedback e diffondendo i risultati.
</p>
				`,
				ro: `
				<p>situată în Brașov, cu tradiție de 47 de ani, partener responsabil de implementare practică, feedback și diseminare.</p>
				`
			}
		},
		{
			id: 3,
			title: 'Scuola Paritaria dell’Infanzia e Primaria “Missionarie Catechiste del Sacro Cuore” ',
			url: 'https://scuolasacrocuoreportici.it/',
			isCoordinator: false,
			image: Catechiste,
			delay: '0.45s',
			flag: 'it',
			descriptions: {
				en: `
				<p>
				Founded in 1940 in Portici, this institution has been providing education at the preschool and primary school
				levels for many years. With its experienced staff applying the Montessori method, it guides students on their individual learning journeys.
				</p>
				<p>
				The institution attaches special importance to cultural diversity and innovative teaching methods. Within the 3M
				project, it plays an active role particularly in teachers’ needs analyses, testing classroom practices, and disseminating results.
				In addition, the school’s rich infrastructure (theater hall, digital classrooms, garden) provides opportunities for the implementation of the project’s content.
</p>
				`,
				tr: `
				<p>
				1940 yılında Portici’de kurulan bu kurum, uzun yıllardır okul öncesi ve ilkokul düzeyinde eğitim vermektedir. Montessori yöntemini uygulayan deneyimli kadrosuyla, öğrencilerin bireysel öğrenme yolculuklarına rehberlik eder.
</p>
<p>
Kültürel çeşitliliğe ve yenilikçi öğretim yöntemlerine özel önem veren kurum, 3M projesinde özellikle <strong>öğretmenlerin ihtiyaç analizleri</strong>, sınıf içi uygulamaların test edilmesi ve sonuçların yaygınlaştırılması alanlarında aktif rol almaktadır. Ayrıca okulun zengin altyapısı (tiyatro salonu, dijital sınıflar, bahçe) projenin içeriklerinin uygulanmasına olanak tanımaktadır.
</p>
				`,
				it: `
				<p>Fondata nel 1940 a Portici, questa istituzione offre da molti anni un percorso formativo a livello prescolare e primario. Grazie al suo personale esperto che applica il metodo Montessori, guida gli studenti nel loro percorso di apprendimento individuale.</p>
				<p>L'istituto attribuisce particolare importanza alla diversità culturale e ai metodi di insegnamento innovativi. Nell'ambito del progetto 3M, la scuola svolge un ruolo attivo soprattutto nell'analisi delle esigenze degli insegnanti, nella sperimentazione delle pratiche didattiche e nella diffusione dei risultati. Inoltre, la scuola dispone di una ricca infrastruttura (sala teatro, aule digitali aule digitali, giardino) offrendo opportunità per l'attuazione dei contenuti del progetto.</p>
				`,
				ro: `
				<p>fondată în 1940, aplică metoda Montessori, implicată în analiza nevoilor profesorilor, testare practici și diseminare.</p>
				`
			}
		},
	]
}