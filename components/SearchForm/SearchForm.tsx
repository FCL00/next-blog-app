import Form from 'next/form'
import styles from "./SearchForm.module.css"

import SearchFormReset from './partials/SearchFormReset';
import { Search } from 'lucide-react';

export default function SearchForm({query} : {query?: string}){

    return (
        <Form action="/" scroll={false} id='search-form' className={styles['search-form']}>
            <input type="text" name='query' defaultValue={query} className={styles['search-input']} placeholder='Search' />
            <div className="flex gap-2">
                {query && <SearchFormReset />}
                <button type="submit" className={styles['search-btn']}>
                    <Search className='size-5'/>
                </button>
            </div>
        </Form>
    );
}