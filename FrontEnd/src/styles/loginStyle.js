import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    logo: {
      width: 300,
      height: 100,
      borderRadius: 5,
      marginBottom: 15,
    },
    formContainer: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
    },
    inputTexto: {
      backgroundColor: 'white',
      width: 300,
      borderRadius: 5,
      padding: 10,
      color: 'black',
    },
    labelInput: {
      marginBottom: 5,
      color: 'white',
      fontFamily: 'MemoirDisplay',
    },
    containerInput: {
      margin: 5,
    },
    containerBtnEntrar: {
      backgroundColor: '#00003F',
      marginTop: 20,
      padding: 15,
      borderRadius: 5,
    },
    btnEntrar: {
      textAlign: 'center',
      color: 'white',
      fontFamily: 'MemoirDisplay',
    },
    footerContainer: {
      marginTop: 'auto', 
      paddingVertical: 10,
      alignItems: 'center',
      width: '100%',
      borderTopWidth: 0.5, 
      borderTopColor: 'white', 
      borderTopStyle: 'solid',
    },
    footerText: {
      color: 'white',
      fontFamily: 'MemoirDisplay',
      textDecorationLine: 'underline',
    },
  });

  export default styles;
  