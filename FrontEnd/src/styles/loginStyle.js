import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black'
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
      objectFit: 'contain'
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
      backgroundColor: '#5D9DD1',
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
      position: 'absolute', 
      paddingVertical: 10,
      alignItems: 'center',
      width: '100%',
      borderTopWidth: 0.5, 
      borderTopColor: 'white', 
      borderTopStyle: 'solid',
      bottom: 0
    },
    footerText: {
      color: 'white',
      fontFamily: 'MemoirDisplay',
      textDecorationLine: 'underline',
    },
    forgetPassword:{
      color:'white',
      fontFamily: 'MemoirDisplay',
      marginTop: 10,
      fontSize: 15

    },
    inputArea:{
      flexDirection: 'row',
      alignItems: 'center',

    },
    icon:{
      color:'black',
      opacity: 0.5,
      position: 'absolute',
      right: 10,
      top:-15 ,
    
     
    }
  });

  export default styles;
  