import PartnersBG from "../_src/img/partnerElements/bg.jpg"

import Adyu from "../_src/img/partnerElements/adyu.jpg"
import Catechiste from "../_src/img/partnerElements/catechiste.jpg"
import Casuta from "../_src/img/partnerElements/casuta.jpg"


export const partnerPageData = {
	parallaxBG: PartnersBG,
	title: 'Partners',
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
			flag: 'tr',
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
				
				`
			}
		},
	]
}