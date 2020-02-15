import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "5f6c2ab3-57e3-4d52-8437-82b984ef36cf"}
})


export const UserAPI ={
    getUsersPage  (currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(responce => {
            return responce.data
        })
    },
    getUsersPage2  (currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(responce => {
            return responce.data
        })
    },
}



export const getUsersPage = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
    ).then(responce => {
        return responce.data
    })

}


export const UnFollowUsers = (id) => {
    return instance.delete(`follow/${id}`,
    ).then(responce => {
        return responce.data
    })
}

export const FollowUsers = (id) => {
    return instance.post(`follow/${id}`, {},
    ).then(responce => {
        return responce.data
    })
}

export const getUserId = (userId) => {
    return instance.get(`profile/${userId}`, {instance}).then(responce => {
        return responce.data
    })
}


export const Authfunc = () => {
    return instance.get(`auth/me`, {instance}).then(responce => {
        return responce.data
    })
}