import React from "react";

function Search(props) {
  let { searchTerm, setSearchTerm, setFilteredProducts, products } = props;

  function handleChange(event) {
    // setting the search term to the value of the input
    setSearchTerm(event.target.value);
    // setting filtered products to a filtered array that checks if the product name includes the search term
    // we are cleaning the data using .toLowerCase and .replace(/ /g, "") which removes the white space
    setFilteredProducts(
        products.filter((product) =>
            product.fields.name
                .toLowerCase()
                .replace(/ /g, "")
                .includes(searchTerm.replace(/ /g, ""))
        )
    );
}


  return (
    <div id='flex-container'>
    
            <label htmlFor='search'>Search</label>
            <input
                type='text'
                name='search'
                id='search'
                value={searchTerm}
                onChange={handleChange}
            />

    </div>

  )

}

export default Search;
