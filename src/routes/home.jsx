import React from 'react';
import Skeleton from "../components/pizza-block/skeleton";
import PizzaBlock from "../components/pizza-block/pizza-block";
import Categories from "../components/categories";
import Sort from "../components/sort";

const Home = () => {
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://62b56ca842c6473c4b320ab2.mockapi.io/items')
            .then((res) => res.json())
            .then((res) => {
                setIsLoading(false);
                setPizzas(res)});
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
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