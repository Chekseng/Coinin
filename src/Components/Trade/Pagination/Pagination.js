import React from 'react'
import './Pagination.css'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Pagination = ({ coinsPerPage, totalCoins, paginate}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {
        pageNumbers.map((pageNumber, index) => (
          <li className="paginate" key={index}>
            <a to="!#" onClick={(e) => {
              e.preventDefault();
              paginate(pageNumber)
              }}>{pageNumber}</a>
          </li>
        ))
      }
    </div>
  )
}

export default Pagination
