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
    formContainer:{
        backgroundColor: '#11111E',
        margin: 10,
        padding: 20,
        borderColor: '#5BC2E7',
        borderWidth: 2,
        borderRadius: 10
    },
    containerButtonForm:{
        padding: 10,
        width: '50%'
    },
    buttonForm:{
        color:'white',
        backgroundColor: '#5BC2E7',
        padding: 15,
        borderRadius: 5,
        textAlign: 'center',
        fontFamily: 'MemoirDisplay'
   
       
       

    },
    textForgetPassword:{
        color:'white',
        fontFamily: 'MemoirDisplay',
        margin: 10
    },
    textForgetPasswordTittle:{
        color:'white',
        fontFamily: 'MemoirDisplay',
        margin: 10,
        fontSize: 20
    },
    inputForgetPassword:{
        backgroundColor:'white',
        margin: 10,
        borderRadius: 5,
        padding: 10,
        
    },
    containerButtons:{
        display: 'flex',
        flexDirection: 'row'
    }
   
  });

  export default styles;
  