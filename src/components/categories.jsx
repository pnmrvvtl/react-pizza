import React from 'react';

const Categories = () => {
    const [active, setActive] = React.useState(0);

    const onClickHandler = (item) => {
        setActive(item)
    }

    return (
        <div className="categories">
            <ul>
                <li onClick={() => onClickHandler(0)} className={active === 0 ? 'active' : ''}>Все</li>
                <li onClick={() => onClickHandler(1)} className={active === 1 ? 'active' : ''}>Мясные</li>
                <li onClick={() => onClickHandler(2)} className={active === 2 ? 'active' : ''}>Вегетарианская</li>
                <li onClick={() => onClickHandler(3)} className={active === 3 ? 'active' : ''}>Гриль</li>
                <li onClick={() => onClickHandler(4)} className={active === 4 ? 'active' : ''}>Острые</li>
                <li onClick={() => onClickHandler(5)} className={active === 5 ? 'active' : ''}>Закрытые</li>
            </ul>
        </div>
    );
};

export default Categories;