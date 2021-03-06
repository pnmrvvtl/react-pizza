import React from 'react';

const Categories = ({value, onClickCategory}) => {
    const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {categories.map((item, index) => (
                    <li key={index} onClick={() => onClickCategory(index)} className={value === index ? 'active' : ''}>{item}</li>))}
            </ul>
        </div>
    );
};

export default Categories;