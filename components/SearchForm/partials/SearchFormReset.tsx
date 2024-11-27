"use client";
import Link from "next/link";
import styles from "../SearchForm.module.css";
import { X } from "lucide-react";

export default function SearchFormReset(){

    function reset() {
        const form = document.querySelector('#search-form') as HTMLFormElement;

        if(form){
            form.reset();
        }
    }

    return (
        <>
            <button type="reset" onClick={reset}>
                <Link href="/" className={styles['search-btn']}>
                   <X className="size-5"/>
                </Link>
            </button>
        </>
    )
}