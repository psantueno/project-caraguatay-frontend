import { useEffect, useState } from "react";
import { FetchNewsCategories } from "../helpers/FetchNewsCategories";

export const useFetchNewsCategories = () => {

    const [newsCategories, setNewsCategories] = useState([]);

    const getNewsCategories = async () => {
        const categories = await FetchNewsCategories();
        setNewsCategories(categories)
    }

    useEffect(() => {
        getNewsCategories();
    }, []);

    return {
        newsCategories: newsCategories
    }
}