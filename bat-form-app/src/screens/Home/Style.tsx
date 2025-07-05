import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
  logoContainer:{
    flexDirection: 'column',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#4D4D4D',
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    padding: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D4D4D',
  },
  formTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 12,
  },
  formHistory:{
    width: 300,
    marginBottom: 8, 
    backgroundColor: '#555', 
    padding: 8, borderRadius: 6 
  },
  buttonReturnPosition:{
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 10,
  },
  buttonColorReturn:{
    backgroundColor: '#222',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  }
  
});
