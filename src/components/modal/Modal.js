import ReactDOM from "react-dom";
// import { useState } from "react";


import './modal.css';

const Modal = ({ isModalOpen, onToggleModal, addItem, formState, resetForm, handleFormChange, forModal, handleEditObject }) => {


    const { name, category, content, date, dates } = formState;

    

    const onSubmit = (e) => {
        e.preventDefault();
console.log(forModal);
        // в залежності від forModal запускаємо або addItem, або editItem

        if (forModal) {
            handleEditObject(formState)
        } else {
            if (name !== '' || content !== '' || date !== '') {
                addItem(formState);
            } else {
                return
            }
        }

        resetForm();
        onToggleModal()
    }

    return ReactDOM.createPortal(
        <div
            className={`notes-modal modal ${isModalOpen ? 'show' : ''}`}>
            <div className="modal_content">
                <div className="modal_container">
                    <form action="#" name="modal" id="form" onSubmit={onSubmit}>
                        <div className="modal_header">
                            <div className="modal_title">
                                <input
                                    type="text"
                                    name="name"
                                    id="modal_title"
                                    placeholder="Name note"
                                    value={name}
                                    onChange={handleFormChange} />
                            </div>
                            <div data-close className="modal_close" onClick={() => onToggleModal()}>&times;</div>
                        </div>
                        <div className="modal_body">
                            <input
                                type="text"
                                name="date"
                                id="date"
                                readOnly />
                            <select
                                name="category"
                                id="select"
                                value={category}
                                onChange={handleFormChange}>
                                <option value="Task">Task</option>
                                <option value="Random Thought">Random Thought</option>
                                <option value="Idea">Idea</option>
                                <option value="Quote">Quote</option>
                            </select>
                            <input
                                type="text"
                                name="content"
                                id="content"
                                placeholder="Content"
                                value={content}
                                onChange={handleFormChange} />
                            <div>
                                <label htmlFor="dates">Date completed</label>
                                <input
                                    name="dates"
                                    type="date"
                                    id="forDates"
                                    value={dates}
                                    onChange={handleFormChange}
                                // onChange={(e) => {
                                //     setDate(e.target.value);
                                //     setDates(e.target.value);
                                // }}
                                />
                                <input
                                    type="text"
                                    name="dates"
                                    id="dates"

                                    // value={date}
                                    // onChange={handleFormChange}
                                    // value={dates}
                                    // onChange={(e) => setDate(e.target.value)}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="modal_footer">
                            <input
                                type="button"
                                className="modal_footer-btnCancel"
                                value="Canсel"
                                onClick={() => onToggleModal()} />
                            <button
                                type="submit"
                                className="modal_footer-btnOk">Ok</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;