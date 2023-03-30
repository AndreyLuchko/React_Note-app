import './totalListItem.css';

const TotalListItem = () => {
    return (
        <li className="card">
            <div className="card-editable total-list-editable">
                <span className="material-icons">
                    shopping_cart
                </span>
                <ul className="card-list total-list-card">
                    <li className="category-name">Shopping list</li>
                    <li className="active-tasks">0</li>
                    <li className="archive-tasks">0</li>
                </ul>
                <button className="total-btn">Show archive</button>
            </div>
        </li>
    )
}

export default TotalListItem;