import './createBtn.css';

const CreateBtn = (props) => {
    return (
        <div className="notes_create">
            <button
                className="notes_create-btn"
                onClick={props.openModal}>Cereate Note</button>
        </div>
    )
}

export default CreateBtn;