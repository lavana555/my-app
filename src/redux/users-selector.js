
export const userSelctor=(state)=>{
    return state.usersPage.users
}

export const pageSizeSelctor=(state)=>{
    return state.usersPage.pageSize
}

export const totalUsersCountSelctor=(state)=>{
    return state.usersPage.totalUsersCount
}

export const currentPageSelctor=(state)=>{
    return state.usersPage.currentPage
}

export const isFetchingSelctor=(state)=>{
    return state.usersPage.isFetching
}

export const isFolowwingProgresSelctor=(state)=>{
    return state.usersPage.isFolowwingProgres
}


