import React, {useContext} from 'react';
import styles from "./search.module.scss";
import {SearchContext} from "../../App";


const Search = () => {
    const {searchStr , setSearchStr} = useContext(SearchContext);

    return (
        <input value={searchStr} onChange={(event) => setSearchStr(event.target.value)} className={styles.root} type='search' placeholder='Поиск...'/>
    );
};

export default Search;