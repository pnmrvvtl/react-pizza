import React from 'react';
import styles from "./search.module.scss";
import {SearchContext} from "../../App";
import debounce from 'lodash.debounce';
//todo repair debounce
const Search = () => {
    const [value, setValue] = React.useState('');
    const {setSearchStr} = React.useContext(SearchContext);

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearchStr(str);
        }, 1000), [])

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value)
    }


    return (
        <input value={value} onChange={onChangeInput} className={styles.root} type='search' placeholder='Поиск...'/>
    );
};

export default Search;