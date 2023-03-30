import NotesListItem from '../notesListItem/NotesListItem';

import './notesList.css';

const NotesList = ({data, deleteItem, archiveItem, onEditItem }) => {

    const elements = data.map((item, i) => {
     
        return (
            <NotesListItem 
            key={i}
            {...item}
            deleteItem={() => deleteItem(item.id)}
            archiveItem={() => archiveItem(item.id)}
            onEditItem={() => onEditItem(item.id)}/>
        )
    })

    return (
        <ul className="notes-list">
           {elements}
        </ul>
    )
}

export default NotesList;