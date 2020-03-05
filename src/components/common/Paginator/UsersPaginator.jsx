import React from 'react';
import classes from './UsersPaginator.module.css';


const UsersPaginator = ({totalUsersCount,pageSize,onPageChged,currentPage}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span onClick={() => onPageChged(p)}
                             className={currentPage === p && classes.selectedPage}>{p}</span>

            })}
        </div>
            )


}

export default UsersPaginator;