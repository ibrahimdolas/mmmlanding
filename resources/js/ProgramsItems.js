import ProgramBg from "../_src/img/programElements/bg.png"
import ProgramElement1 from "../_src/img/programElements/ele1.png"
import ProgramElement2 from "../_src/img/programElements/ele2.png"
import ProgramElement3 from "../_src/img/programElements/ele3.png"



export const programPageData = {
	bg: ProgramBg,
	ele1: ProgramElement1,
	ele2: ProgramElement2,
	ele3: ProgramElement3,
	
	topTitle: 'Grade Level',
	title: 'Grade Programs',
	subtitle: 'Work And Play Come Together?',
	
	grades: [
		{
			id: 1,
			ribbon: {
				top: 'Grade',
				bottom: 1,
				color: 'bg-color1'
			},
			title: 'Grade 1',
			subtitle: 'Age 1-2',
			delay: '0.25s'
		},
		{
			id: 2,
			ribbon: {
				top: 'Grade',
				bottom: 2,
				color: 'bg-color2'
			},
			title: 'Grade 2',
			subtitle: 'Age 3-4',
			delay: '0.35s'
		},
		{
			id: 3,
			ribbon: {
				top: 'Grade',
				bottom: 3,
				color: 'bg-color3'
			},
			title: 'Grade 3',
			subtitle: 'Age 5-6',
			delay: '0.45s'
		},
		{
			id: 4,
			ribbon: {
				top: 'Grade',
				bottom: 4,
				color: 'bg-color4'
			},
			title: 'Grade 4',
			subtitle: 'Age 7-8',
			delay: '0.55s'
		}
	]
}