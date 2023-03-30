import './notesHeader.css';

const NotesHeader = () => {
    return (
        <div className="notes-header">
            <ul className="notes-header-list">
                <li>Name</li>
                <li>Created</li>
                <li>Category</li>
                <li>Content</li>
                <li>Dates</li>
            </ul>
            <div className="notes-icons">
                <span className="material-icons">archive</span>
                <span className="material-icons">delete</span>
            </div>
        </div>
    )
}

export default NotesHeader;