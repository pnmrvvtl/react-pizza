import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";
import Skeleton from "../components/pizza-block/skeleton";
import PizzaBlock from "../components/pizza-block/pizza-block";
import Categories from "../components/categories";
import Sort from "../components/sort";
import Pagination from "../components/pagination/pagination";

const Home = ({search}) => {
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const categoryId = useSelector((state) => state.filterSlice.categoryId);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = React.useState(1);
    const sortList = ['rating', 'price', 'title'];
    const sortId = useSelector((state) => state.filterSlice.sortId);


    React.useEffect(() => {
        setIsLoading(true);
        //todo asc and desc sort
        fetch(`https://62b56ca842c6473c4b320ab2.mockapi.io/items?page=${currentPage}&limit=6&${
            categoryId > 0 ? `category=${categoryId}` : ``}&sortBy=${sortList[sortId]}`)
            .then((res) => res.json())
            .then((res) => {
                setIsLoading(false);
                setPizzas(res)
            });
        window.scrollTo(0, 0);
    }, [currentPage, sortId, categoryId])

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(id) => dispatch(setCategoryId(id))}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ?
                    [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                    :
                    pizzas.filter((item) => item.title.toLowerCase().includes(search)).map((obj) => (<PizzaBlock key={obj.id} {...obj}/>))}
            </div>
            <Pagination onChangePage={number => setCurrentPage(number)}/>
        </div>
    );
};

export default Home;