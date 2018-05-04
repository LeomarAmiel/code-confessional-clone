export const getConfess = ({confess}) => confess;

export const sortFromCategory = ({feed}) => {
	const { category, confessions } = feed;
	switch (category){
		case 'new':
			return confessions.slice().sort((a, b) => {
				return b.date_added.seconds - a.date_added.seconds;
			})
		case 'hot':
			return confessions.slice().sort((a, b) => {
				return b.absolve - a.absolve;
			})
		default:
			return confessions;
	}
}