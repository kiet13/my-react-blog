import React from 'react';
import styles from './Pagination.module.scss';

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}


export default function Pagination({ postsPerPage, currentPage, pageRange, totalPosts, paginate }) {
  let pageNumbers = [];
  const numSiblings = Math.floor(pageRange / 2);
  console.log(numSiblings);

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  console.log(totalPosts);
  if (currentPage <= numSiblings) {
    pageNumbers = range(1, pageRange);
  } else if (currentPage >= totalPages - numSiblings) {
    pageNumbers = range(totalPages - pageRange + 1, totalPages);
  } else { 
    pageNumbers = range(currentPage - numSiblings, currentPage + numSiblings);
  }

  
  
  const renderedNumbers = pageNumbers.reduce((arr, number) => {
    const classes = [styles.PageNumber];
    if (number === currentPage) {
      classes.push(styles.Active);
    }
    arr.push(
      <div key={number} className={classes.join(' ')} onClick={() => paginate(number)}>
        {number}
      </div> 
    )
    return arr;
  }, []);


  return (
    <nav>
      <div className={styles.Pagination}>
        {renderedNumbers}
      </div> 
    </nav>
  )
}
