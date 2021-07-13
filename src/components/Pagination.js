import React from 'react'
import { Link } from 'react-router-dom';

 const Pagination = (props) => {
  const { productPerPage, totalProducts, paginate } = props;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++){
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number,index) => {
          return (
            <li key={index} className="page-item"> <Link to = "" onClick = {()=> paginate(number)} className
              ="page-link"> {number} </Link> </li>
          );
        })}
      </ul>
    </nav>
  )
}
export default Pagination;