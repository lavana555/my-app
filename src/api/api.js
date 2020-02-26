import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "5f6c2ab3-57e3-4d52-8437-82b984ef36cf"}
})


export const UserAPI = {
    getUsersPage(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(responce => {
            return responce.data
        })
    },
    FollowUsers(id) {
        return instance.post(`follow/${id}`, {},)
    },
    UnFollowUsers(id) {
        return instance.delete(`/follow/${id}`)
    },
    Authfunc() {
        return instance.get(`auth/me`).then(responce => {
            return responce.data
        })
    },
    // Loginfunc(formData) {
    //     return instance.post(`/auth/login`,{},{formData}).then(responce => {
    //         return responce.data
    //     })
    // },
    getUserId(userId) {
        console.warn('obsolete method.Please profile object ')
        return ProfileAPI.getUserId(userId)
    }
}


export const ProfileAPI = {
    getUserId(userId) {
        return instance.get(`profile/${userId}`).then(responce => {
            return responce.data
        })
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
        //     .then(responce=>{
        //     return responce.data
        // })
    },
    setStatus(status) {
        return instance.put(`/profile/status`, {status: status})
        //     .then(responce=>{
        //     return responce.data
        // })
    }


}



