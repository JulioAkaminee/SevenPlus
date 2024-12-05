import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
    
    },

    containerIconeBntCadastrar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      },
      setaVoltar: {
        backgroundColor: '#071731',
        width: 40,
        height: 40,
        borderRadius: 200,
        transform: [{ scaleX: -1 }],
        color:'white'
      },
      BtnCadastrarTop: {
        backgroundColor: '#071731',
        padding: 10,
        borderRadius: 40,
        width: 120,
        fontFamily: 'Epilogue-ExtraBold',
        textAlign: 'center',
        color:'white'
      },
      containerForgetPassword:{
        paddingTop: 45,
        paddingHorizontal: 25,
        backgroundColor:'white',
        height:'70%'
      },
      containerForgetPasswordInput:{
        backgroundColor:'#071731',
        height: '30%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      },
      containerTextCenter:{
        height:'100%',
         display:'flex',
          alignItems:'center', 
          justifyContent:"center"
      },
      inputTexto: {
        backgroundColor: 'white',
        width: '85%',
        height:54,
        borderRadius: 5,
        padding: 15,
        color: 'black',
        fontFamily: 'Epilogue-Medium',
        marginVertical: 10
      },
      btnEnviar:{
        backgroundColor: 'white',
        width: '85%',
        height:54,
        borderRadius: 5,
        padding: 8,
        color: 'black',
        fontFamily: 'Epilogue-ExtraBold',
        marginVertical: 10,
        textAlign:'center',
        fontSize:24
      }
  });

  export default styles;
  