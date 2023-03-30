
const useAppService = () => {

    // Формування іконки відповідно до категорії нотатки
    const setImgFromCategory = (category) => {
        let imgNote;

        switch (category) {
            case "Task":
                imgNote = 'shopping_cart';
                break;
            case "Random Thought":
                imgNote = 'psychology';
                break;
            case "Idea":
                imgNote = 'lightbulb_outline';
                break;
            case "Quote":
                imgNote = 'format_quote';
                break;
            default:
                break;
        }
        return imgNote;
    }

    // Ф-я створення дати у форматі MM dd, yy
    const today = () => {
        const today = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        const now = today.toLocaleString('en-US', options);
        return now;
    }

    // Ф-я створення дати у форматі yyyy-MM-dd
    const todayForReact = () => {
        const today = new Date();
        let day = today.getDate();
        let month = today.getMonth();
        let year = today.getFullYear();

        const now = `${year}-0${month + 1}-${day}`;
        return now;
    }


    // Ф-я створення нового об'єкта
    const newItem = (object) => {

        const newItem = {
            img: '',
            name: '',
            date: '',
            category: 'Task',
            content: '',
            dates: '',
            completed: false,
        }

      return  object === undefined ? newItem : {...object}
    }

    return { setImgFromCategory, today, newItem, todayForReact };

}

export default useAppService;