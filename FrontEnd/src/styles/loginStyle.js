import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071731'
  },
  logo: {
    width: 300,
    height: 100,
    borderRadius: 5,
    marginBottom: 15,
    objectFit: 'contain'
  },
  inputTexto: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    width: '85%',
    height:54,
    borderRadius: 5,
    padding: 15,
    color: 'black',
    fontFamily: 'Epilogue-Medium',
    marginVertical: 10
  },
  containerInput: {
    margin: 5,
  },
  forgetPassword: {
    color: 'black',
    fontFamily: 'Epilogue-Medium',
    textAlign:'right',
    margin:5,
    fontSize: 15,
    color: "rgba(0, 0, 0, 0.59)",
    textDecorationLine:'underline'
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: 'black',
    opacity: 0.5,
    position: 'absolute',
    right: 10,
    top: -15,
  },
  containerLoginText: {
    height: '35%',
    width: '100%',
    backgroundColor: '#071731',
    paddingTop: 45,
    paddingHorizontal: 25,
  },
  containerLogin: {
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
    transform: [{ scaleX: -1 }]
  },
  BtnCadastrarTop: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 40,
    width: 120,
    fontFamily: 'Epilogue-ExtraBold',
    textAlign: 'center'
  },
  textLogin: {
    fontFamily: 'Epilogue-ExtraBold',
    color: 'white',
    fontSize: 32,
    marginTop: 30
  },
  textWelcomeLogin: {
    fontFamily: 'Epilogue-Medium',
    color: 'white',
    fontSize: 18,
    marginTop: 10
  },
  containerForgetPassword: {
    width: "85%",

  },
  containerBtnEntrar: {
    backgroundColor: '#071731',
    marginVertical: 10,
    borderRadius: 10,
    width: "85%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 54
  },
  btnEntrar: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Epilogue-ExtraBold',
    fontSize: 24
  },
  btnEntrarRedesSociais: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    width: '85%',
    height: 54,
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
    marginTop: 40
  },
  iconRedeSocial: {
    width: 25,
    height: 25,
    marginRight: 15
  }
});

export default styles;
