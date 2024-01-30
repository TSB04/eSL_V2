import * as React from "react";
import {
  getItem as getToken,
  setItem as setToken,
  removeItem as removeToken,
} from "./async-storage";

const AuthContext = React.createContext({
  status: "idle",
  authToken: null,
  signIn: () => {},
  signOut: () => {},
});

export const useAuthorization = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export const AuthProvider = React.memo((props) => {
  const [state, dispatch] = React.useReducer(reducer, {
    status: "idle",
    authToken: null,
  });

  React.useEffect(() => {
    const initState = async () => {
      try {
        const authToken = await getToken();
        if (authToken !== null) {
          dispatch({ type: "SIGN_IN", token: authToken });
        } else {
          dispatch({ type: "SIGN_OUT" });
        }
      } catch (e) {
        console.log(e);
      }
    };
    initState();
  }, []);

  const actions = React.useMemo(
    () => ({
      signIn: async (token) => {
        dispatch({ type: "SIGN_IN", token });
        await setToken(token);
      },
      signOut: async () => {
        dispatch({ type: "SIGN_OUT" });
        await removeToken();
      },
    }),
    []
  );

  const contextValue = React.useMemo(() => ({ ...state, ...actions }), [
    state,
    actions,
  ]);

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
});

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGN_OUT":
      return {
        ...state,
        status: "signOut",
        authToken: null,
      };
    case "SIGN_IN":
      return {
        ...state,
        status: "signIn",
        authToken: action.token,
      };
    default:
      return state;
  }
};
