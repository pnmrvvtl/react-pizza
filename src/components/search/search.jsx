import React from 'react';
import styles from "./search.module.scss";


const Search = ({search, setSearch}) => {
    return (
        <input value={search} onChange={(event) => setSearch(event.target.value)} className={styles.root} type='search' placeholder='Поиск...'/>
    );
};

export default Search;