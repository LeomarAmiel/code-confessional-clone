export const getConfess = ({ confess }) => confess;

export const sortFromCategory = ({ feed }) => {
    const { category, confessions } = feed;
    switch (category) {
        case "new":
            return confessions.slice().sort((a, b) => {
                return b.date_added.seconds - a.date_added.seconds;
            });
        case "hot":
            return confessions.slice().sort((a, b) => {
                return b.absolve - a.absolve;
            });
        case "random":
			return shuffleArray(confessions);
        default:
            return confessions;
    }
};

function shuffleArray(array) {
	var newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
}
