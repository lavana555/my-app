import React, {Component} from 'react';
import UsersPaginator from "../common/Paginator/UsersPaginator";
import User from "./User";

const Users = ({follow,unfollow, isFolowwingProgres,totalUsersCount,onPageChged,currentPage,pageSize,...props}) => {

    return (
        <div>
            <UsersPaginator  totalUsersCount={totalUsersCount}
                             pageSize={pageSize}
                             onPageChged={onPageChged}
                             currentPage={currentPage} />
            {
                props.users.map(user => <div key={user.id}><User key={user.id} user={user}
                                                                 follow={follow}
                                                                 unfollow={unfollow}
                                                                 isFolowwingProgres={isFolowwingProgres}  />
                </div>
                )
            }
        </div>
    )
}

export default Users;