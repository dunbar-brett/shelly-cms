// check documentation dummy



export const state = () => ({
  userIsLoggedIn: false,
  user: {
      email: "",
      password: "",
  }
});

export const mutations = {
  login(state) {
      console.log("user logged in");
      console.log("Needs Implementation");
      state.userIsLoggedIn = true;
  },
  logout(state) {
    console.log("user logged out");
    console.log("Needs Implementation");
    
    state.userIsLoggedIn = false;
    user.email = "";
    user.password = "";
  }
};

export const getters = {
  isUserLoggedIn(state) {
    return state.userIsLoggedIn;
  }
};
