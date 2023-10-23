export const FetchdPCategories = async () => {

    try {
      const res = await fetch('http://localhost:4001/api/punto-digital-cat/list/all');

      const { categories } = await res.json();
      return categories;
     
    } catch (error) {
      console.log(error);
    }
  }