import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Navigator';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const useFirebase = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const registration = async (
    email: string,
    password: string,
    callback?: () => void,
  ) => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        callback && callback();
        navigation.navigate('Tabs');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const login = async (
    email: string,
    password: string,
    callback?: () => void,
  ) => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        callback && callback();
        navigation.navigate('Tabs');
        console.log('User signed in!');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const logout = async (callback?: () => void) => {
    await auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        callback && callback();
        navigation.navigate('LoginScreen');
      });
  };

  const googleLogin = async () => {
    try {
      console.log('login');
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      await auth()
        .signInWithCredential(googleCredential)
        .then(() => {
 
          navigation.navigate('Tabs');
        });
    } catch (e) {
      console.log(e);
    }
  };

  return {registration, login, logout, googleLogin};
};
