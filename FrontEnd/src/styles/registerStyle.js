import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#071731'
    },
    containerRegisterText: {
    height: '35%',
    width: '100%',
    backgroundColor: '#071731',
    paddingTop: 45,
    paddingHorizontal: 25,
  },
  containerRegister: {
    height: '65%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 30
  },
  containerIconeBntCadastrar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  setaVoltar: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 200,
    transform: [{ scaleX: -1 }],

  },
  BtnCadastrarTop: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 40,
    width: 120,
    fontFamily: 'Epilogue-ExtraBold',
    textAlign: 'center',
   
  },
  textRegister: {
    fontFamily: 'Epilogue-ExtraBold',
    color: 'white',
    fontSize: 32,
    marginTop: 30
  },
  textFacaCadastro:{
    fontFamily: 'Epilogue-Medium',
    color: 'white',
    fontSize: 18,
    marginTop: 10
  },
  inputCadastro:{
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    width: '85%',
    height:45,
    borderRadius: 5,
    padding: 15,
    color: 'black',
    fontFamily: 'Epilogue-Medium',
    marginVertical: 10
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%'
  },
  icon: {
    color: 'black',
    opacity: 0.5,
    position: 'absolute',
    right: 10,
    top: -15,
  },
  containerBtnCadastrar: {
    backgroundColor: '#071731',
    marginVertical: 5,
    borderRadius: 10,
    width: "85%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    paddingBottom:5
  },
  btnCadastrar: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Epilogue-ExtraBold',
    fontSize: 24
  },
  btnEntrarRedesSociais: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    width: '85%',
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  textoBotao: {
    fontFamily: 'Epilogue-Medium',
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
  containerRedesSociais: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    
  },
  iconRedeSocial: {
    width: 25,
    height: 25,
    marginRight: 15
  }
    
  
  


    
   
  });

  export default styles;
  