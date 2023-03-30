import { useState } from 'react';

import NotesHeader from '../notesHeader/NotesHeader';
import NotesList from '../notesList/NotesList';
import CreateBtn from '../createBtn/CreateBtn';
import TotalHeader from '../totalHeader/TotalHeader';
import TotalList from '../totalList/TotalList';
import Modal from '../modal/Modal';
import useAppService from '../../services/AppService';

import './app.css';

function App() {
    const dataArr = [
        { id: 1, img: 'shopping_cart', name: 'Shopping list', date: '', category: 'Task', content: 'Bread', dates: '', completed: false },
        { id: 2, img: 'lightbulb_outline', name: 'Buy house', date: '03-03-2023', category: 'Idea', content: 'Smth', dates: '', completed: true },
        { id: 3, img: 'psychology', name: 'I`m ok', date: '', category: 'Random Thought', content: 'All right', dates: '', completed: false }
    ];
    const { setImgFromCategory, newItem } = useAppService();

    const [data, setData] = useState(dataArr);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState(4);
    const [forModal, setforModal] = useState(false);
    const [formState, setFormState] = useState(newItem());

    const resetForm = () => {
        setFormState(newItem());
    }

    const onToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    // Функція, яка змінює стан форми
    function handleFormChange(event) {
        const { name, value } = event.target;
        const img = name === 'category' ? value : formState.category;
        setFormState({ 
            ...formState, 
            [name]: value, 
            'img': setImgFromCategory(img),
            'date': new Date().toISOString().substring(0, 10),
        });
    }

    const openModal = () => {
        onToggleModal();
        setforModal(false);
    }

    const onEditItem = (id) => {
        onToggleModal();

        const obj = data.find(item => item.id === id);
        setFormState(newItem(obj));
        // Знайти об'єкт відповідно id, та додати його через setFormState()

        setforModal(true);
    }

    const deleteItem = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const archiveItem = (id) => {
        setData(data.map(item => {
            if (item.id === id) {
                return { ...item, completed: !item.completed }
            }
            return item;
        }))
    }

    const addItem = (obj) => {

        setId(id + 1);
        // ДОДАТИ Ф-Ю newItem СЮДИ, ТА ЗМІНИТИ У APPSERVICE newItem(OBJ)

        setData([...data, { ...newItem(obj), id: id }]);
    }

    const handleEditObject = (obj) => {
        // видаляєм із data об'єкт відповідно id та заміняєм його новим с таким самим id(або новим)
        const index = data.findIndex(item => item.id === obj.id);
        const newData = [...data];
        newData[index] = obj;
        setData(newData);
    }

    return (
        < >
            <header>
                <h1> <span>Notes</span> application</h1>
            </header>
            <main className="container">
                <section className="notes">
                    <NotesHeader />
                    <NotesList
                        data={data}
                        deleteItem={deleteItem}
                        archiveItem={archiveItem}
                        onEditItem={onEditItem} />
                    <CreateBtn
                        openModal={openModal} />
                </section>
                <section className="total">
                    <TotalHeader />
                    <TotalList />
                </section>
            </main>
            <Modal
                isModalOpen={isModalOpen}
                onToggleModal={onToggleModal}
                addItem={addItem}
                handleEditObject={handleEditObject}
                formState={formState}
                resetForm={resetForm}
                handleFormChange={handleFormChange}
                forModal={forModal}
            />
        </>
    );
}

export default App;