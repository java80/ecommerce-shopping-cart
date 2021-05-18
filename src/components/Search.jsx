import React from "react";

function Search(props) {
  let { searchTerm, setSearchTerm, setFilteredProducts, products } = props;

  function handleChange(event) {
    setSearchTerm(event.target.value);
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
    
            <label htmlFor='search'></label>
      <input
        className="form-control mr-sm-2"
        placeholder="Search" 
                type='text'
                name='search'
                id='search'
                value={searchTerm}
        onChange={handleChange}
        autoComplete="off"
            />
    </div>

  )

}

export default Search;
