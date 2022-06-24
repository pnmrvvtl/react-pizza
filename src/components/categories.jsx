import React from 'react';

const Categories = () => {
    const [active, setActive] = React.useState(0);
    const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
    const onClickHandler = (item) => {
        setActive(item)
    }


    return (
        <div className="categories">
            <ul>
                {categories.map((item, index) => (
                    <li key={index} onClick={() => onClickHandler(index)} className={active === index ? 'active' : ''}>{item}</li>))}
            </ul>
        </div>
    );
};

export default Categories;