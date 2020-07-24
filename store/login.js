// check documentation dummy

export const state = () => ({
    userIsLoggedIn: false
})

export const mutations =  {
    login (state) {
        console.log("user logged in");
        state.userIsLoggedIn = true;
    },
    logout (state) {
        console.log("user logged out");
        state.userIsLoggedIn = false;
    },

}

export const getters = {
    isUserLoggedIn (state) {
        return state.userIsLoggedIn;
    }
}