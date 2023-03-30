// import { useState } from 'react';

import './notesListItem.css';

const NotesListItem = (props) => {

    const { id, img, name, date, category, content, dates, completed, deleteItem, archiveItem, onEditItem } = props;
    const archiveClass = completed ? 'card archive' : 'card';
    const pointerClass = completed ? 'material-icons tooltip pointer' : 'material-icons tooltip';

    return (
        <li className={archiveClass} id={id}>
            <div className="card-editable">
                <span className="material-icons" data-action="img">{img}</span>
                <ul className="card-list">
                    <li data-action="name">{name}</li>
                    <li data-action="date">{date}</li>
                    <li data-action="category">{category}</li>
                    <li data-action="content">{content}</li>
                    <li data-action="dates">{dates}</li>
                </ul>
            </div>
            <div className="card-icons">
                <span 
                    className={pointerClass} 
                    data-action="edit"
                    onClick={onEditItem}>edit
                    <span className="tooltiptext">EDIT</span>
                </span>
                <span 
                    className="material-icons tooltip" 
                    data-action="archive"
                    onClick={archiveItem}>
                        archive
                    <span className="tooltiptext">ARCHIVE</span>
                </span>
                <span 
                    className={pointerClass} 
                    data-action="delete"
                    onClick={deleteItem}>delete
                    <span className="tooltiptext">DELETE</span>
                </span>
            </div>
        </li>
    )
}

export default NotesListItem;