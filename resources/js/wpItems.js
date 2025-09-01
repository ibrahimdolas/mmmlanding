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
		en: 'Work Packages'
	},
	
	packages: [
		{
			id: 1,
			title: {
				en: 'WP1: Project Management'
			},
			paragraphs: [
				{
					en: `
					This package covers the overall coordination of the project, monitoring of activities, and evaluation. Under
					the leadership of Adıyaman University, all partners track project progress through regular meetings. With
					Adıyaman University as coordinator, all activities are regularly planned, implemented, and monitored. The
					management process involves not only monitoring the project schedule but also quality assurance, risk
					management, and regular reporting.
					`
				},
				{
					en: `
					Mentors and mentee teachers monitor their own development through self-assessment methods based on adult
					learning theories. They actively participate in the process by uploading teaching videos, writing reflective
					notes, and evaluating the modules. In addition, external evaluations conducted by academic staff and experts
					ensure the progress of the teachers.
					`
				}
			],
			results: [
				{
					en: `
					Implementation of the entire project process in a transparent and measurable way
					`
				},
				{
					en: `
					Documentation of teachers’ development through self-assessment and expert observations
					`
				},
				{
					en: `
					Maintenance of quality standards throughout the project
					`
				}
			]
		},
		{
			id: 2,
			title: {
				en: 'WP2: Content Development'
			},
			paragraphs: [
				{
					en: `
					This package involves the development of culturally and historically sensitive modules designed to foster
					hildren’s love for mathematics. The modules are enriched with stories from different cultures in addition to
					focusing on fundamental skills such as counting, sequencing, measuring, and problem-solving. For example,
					mathematical stories from Rome, Anatolia, or the Far East are used to make abstract concepts concrete.
					`
				},
				{
					en: `
					Led by the academic staff of Adıyaman University, the content is prepared to be both pedagogically appropriate
					and supported with multimedia (animations, gamified activities, visuals). The modules serve as a practical
					guide for teachers.
					`
				}
			],
			results: [
				{
					en: `
					11 original mathematics modules
					`
				},
				{
					en: `
					Materials including cultural diversity and historical context
					`
				},
				{
					en: `
					Content that helps children develop a positive attitude toward mathematics
					`
				}
			]
		},
		{
			id: 3,
			title: {
				en: 'WP3: Research Metodology and Report'
			},
			paragraphs: [
				{
					en: `
					WP3 establishes the evidence-based scientific dimension of the project. First, a comprehensive needs analysis
					is conducted to identify the requirements of both new and experienced teachers. This analysis directly guides
					the development of the modules.
					`
				},
				{
					en: `
					After each session, mentors and new teachers complete reflective notes and feedback forms. These data are
					collected and analyzed regularly. The findings contribute not only to the project but also to the academic
					field by offering insights into the e-mentoring model in early childhood education.
					`
				}
			],
			results: [
				{
					en: `
					A database revealing teachers’ needs and development processes
					`
				},
				{
					en: `
					Research reports available for international dissemination
					`
				},
				{
					en: `
					Guiding findings for policy makers and educational authorities
					`
				}
			]
		},
		{
			id: 4,
			title: {
				en: 'WP4: Use of Digital Technologies'
			},
			paragraphs: [
				{
					en: `
					This package builds the digital infrastructure of the project. A comprehensive web portal is developed for
					access to all educational modules, mentor–mentee pairings, process monitoring, and evaluations.
					`
				},
				{
					en: `
					The portal not only enables teachers to access materials but also allows them to share their own experiences
					and learn from one another. In this way, the project goes beyond geographical boundaries to create an
					international learning community. In addition, animations, videos, and interactive materials become
					accessible through the portal.
					`
				}
			],
			results: [
				{
					en: `
					Animation content suitable for preschool children that makes mathematical concepts fun and easy to understand
					`
				},
				{
					en: `
					Digital educational materials that allow teachers to easily access modules
					`
				},
				{
					en: `
					Wide use and accessibility thanks to all content being available from a central portal
					`
				},
				{
					en: `
					More motivating learning environments for teachers and students who use technology effectively for pedagogical purposes
					`
				}
			]
		},
		{
			id: 5,
			title: {
				en: 'WP5: Dissemination, Promotion, and Sustainability'
			},
			paragraphs: [
				{
					en: `
					The final package ensures that the outcomes of the 3M project are not limited to the project duration. Findings are shared with teachers, academics, families, and policy makers through workshops, seminars, booklets, online publications, and conferences.
					`
				},
				{
					en: `
					In addition, all developed materials, animations, and handbooks remain accessible after the project’s completion, ensuring sustainability. The project outcomes are structured to shed light on preschool education policies across Europe.
					`
				}
			],
			results: [
				{
					en: `
					Broad awareness at local, national, and international levels
					`
				},
				{
					en: `
					Permanent materials and guides for educators
					`
				},
				{
					en: `
					Contribution of the project to the European education agenda
					`
				},
			]
		}
	]
}