import {createContext} from 'react';
import {action, makeObservable, observable} from 'mobx';

import {FirebaseAuthTypes} from '@react-native-firebase/auth';

class CommonStore {
  user: FirebaseAuthTypes.User | null = null;

  constructor() {
    makeObservable(this, {
      user: observable,
      setUser: action,
    });
  }

  setUser = async (user: FirebaseAuthTypes.User | null) => {
    this.user = user;
  };
}

export const CommonStoreContext = createContext(new CommonStore());
