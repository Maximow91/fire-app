import {createContext} from 'react';
import {action, makeObservable, observable} from 'mobx';

import {FirebaseAuthTypes} from '@react-native-firebase/auth';

class CommonStore {
  user: FirebaseAuthTypes.User | null = null;
  error: string | null = null;

  constructor() {
    makeObservable(this, {
      user: observable,
      error: observable,
      setUser: action,
      setError: action,
    });
  }

  setUser = async (user: FirebaseAuthTypes.User | null) => {
    this.user = user;
  };
  setError = async (message: string) => {
    this.error = message;
  };
}

export const CommonStoreContext = createContext(new CommonStore());
