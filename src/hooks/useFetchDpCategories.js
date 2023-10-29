import { useEffect, useState } from "react";
import { FetchNewsCategories } from "../helpers/FetchNewsCategories";
import { FetchdPCategories } from "../helpers/FetchDpCategories";


export const useFetchDpCategories = () => {
    const [dPCategories, setdPCategories] = useState([]);

    const getdPCategories = async () => {
        const categories = await FetchdPCategories();
        setdPCategories(categories)
    }

    useEffect(() => {
        getdPCategories();
    }, []);

    return {
        dPCategories: dPCategories
    }
}
