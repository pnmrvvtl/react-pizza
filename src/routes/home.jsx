import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";
import Skeleton from "../components/pizza-block/skeleton";
import PizzaBlock from "../components/pizza-block/pizza-block";
import Categories from "../components/categories";
import Sort from "../components/sort";
import Pagination from "../components/pagination/pagination";
import axios from "axios";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import {setItems} from "../redux/slices/pizzaSlice";

const Home = ({search}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const categoryId = useSelector((state) => state.filterSlice.categoryId);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = React.useState(1);
    const sortList = ['rating', 'price', 'title'];
    const sortId = useSelector((state) => state.filterSlice.sortId);
    const items = useSelector((state) => state.pizzaSlice.items);


    React.useEffect(() => {
        const fetchPizza = async () => {
            setIsLoading(true);
            //todo asc and desc sort
            await axios.get(`https://62b56ca842c6473c4b320ab2.mockapi.io/items?page=${currentPage}&limit=6&${
                categoryId > 0 ? `category=${categoryId}` : ``}&sortBy=${sortList[sortId]}`)
                .then((response) => {
                    dispatch(setItems(response.data));
                    setIsLoading(false);
                });
            window.scrollTo(0, 0);
        }
        fetchPizza();
    }, [currentPage, sortId, categoryId]);

    React.useEffect(() => {
        const queryString = qs.stringify({
            sortId,
            categoryId,
            currentPage
        });
        navigate(`?${queryString}`);
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
                    items.filter((item) => item.title.toLowerCase().includes(search)).map((obj) => (
                        <PizzaBlock key={obj.id} {...obj}/>))}
            </div>
            <Pagination onChangePage={number => setCurrentPage(number)}/>
        </div>
    );
};

export default Home;