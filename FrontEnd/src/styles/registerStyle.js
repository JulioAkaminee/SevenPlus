import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    },
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
  
    },
    formContainer:{
        backgroundColor: '#11111E',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 30,
        paddingLeft: 30,
        borderColor: '#5BC2E7',
        borderWidth: 2,
        borderRadius: 10,
        width: 320,
    
    },
    inputCadastro:{
      backgroundColor:'white',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        padding: 10,
        width:'100%'
      
    },
    textLabelRegister:{
      margin: 5,
      color: 'white',
      fontFamily: 'MemoirDisplay'
    },
    containerButton:{
 
      width:'100%',
      marginTop: 10
    },
    buttonCadastrar:{
      color:'white',
      backgroundColor: '#5BC2E7',
      fontFamily: 'MemoirDisplay',
      padding: 15,
      borderRadius: 5,
      marginTop: 10,
      textAlign: 'center',
      width:'100%'
      
    
    },
    textLogin:{
      color: 'white',
      fontFamily: 'MemoirDisplay',
      fontSize: 12,
      margin: 5
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
    title:{
      color:'white',
      fontFamily: 'MemoirDisplay',
      marginTop: 0,
      marginBottom: 15,
      fontSize: 24,
      textAlign:'center'

    },
    inputArea:{
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%'

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
  