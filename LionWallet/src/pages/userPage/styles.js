import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    background: {
      flex: 1,
    },
    container: {
      flex: 1,
      opacity: 0.85,
    },
    logout:{
      marginTop: 50,
      flexDirection:'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 5,
    },
    other: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    button: {
      width: 300,
      height: 50,
      paddingVertical: 5,
      borderRadius: 10,
      borderWidth: 0.8,
      alignSelf: 'center',
      backgroundColor: 'transparent',
      borderColor:"#59595C",
      marginTop: -300,
      marginBottom: 10,
      justifyContent: 'center',
    },
    buttonText: {
      color: '#59595C',
      alignSelf: 'center',
      fontSize: 20,
      fontFamily: 'Lato',
    },
    titulo: {
      marginLeft: 50,
      marginTop: -30,
      fontSize: 35,
      opacity: 0.85,
      color: '#59595C',
      paddingBottom: 10,
      paddingTop: 10,
      fontFamily: 'Lato-Bold',
      justifyContent: "center",
    },
    eventos:{
      width: 340,
      height: 50,
      borderRadius: 3,
      backgroundColor: '#f5f5f5',
      marginTop: 10,
      alignSelf: 'center',
      justifyContent: "center",
      color:'black',
      textAlignVertical:'center',
    },
    icon: {
      color: '#59595C',
      marginTop: 5,
    },
    fab: {
      borderRadius: 70,
      backgroundColor: 'white',
      height: 70,
      width: 70,
      bottom: 0,
      position: 'absolute',
      marginBottom: -5,
      top:-35,
      right: 175,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 1,
      borderWidth:6,
      borderColor: '#F7E5E5',
    },
    fabicon: {
      color: '#59595C',
      alignSelf: 'center',
    }
  });