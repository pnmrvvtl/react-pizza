import React from 'react';
import Skeleton from "../components/pizza-block/skeleton";
import PizzaBlock from "../components/pizza-block/pizza-block";
import Categories from "../components/categories";
import Sort from "../components/sort";

const Home = () => {
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [activeSort, setActiveSort] = React.useState(0);
    const [activeCategory, setActiveCategory] = React.useState(0);

    const sortList = ['rating', 'price', 'title'];

    React.useEffect(() => {
        setIsLoading(true);
        //todo asc and desc sort
        fetch(`https://62b56ca842c6473c4b320ab2.mockapi.io/items?${
            activeCategory > 0 ? `category=${activeCategory}` : ``}&sortBy=${sortList[activeSort]}`)
            .then((res) => res.json())
            .then((res) => {
                setIsLoading(false);
                setPizzas(res)
            });
        window.scrollTo(0, 0);
    }, [activeCategory, activeSort])

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={activeCategory} onClickCategory={(i) => setActiveCategory(i)}/>
                <Sort value={activeSort} onClickSort={(i) => setActiveSort(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ?
                    [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                    :
                    pizzas.map((obj) => (<PizzaBlock key={obj.id} {...obj}/>))}
            </div>
        </div>
    );
};

export default Home;