import { StyleSheet } from 'react-native';

const calstyle = StyleSheet.create({
    default: {
        fontFamily: 'oswald',
    },
    main: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    textbutton: {
        height: 60,
        textAlign: 'center',
        paddingTop: 15,
        fontFamily: 'oswald',
        width: 70,
        fontSize: 20,
        color: 'white',
    },
    buttonstyle: {
        backgroundColor: '#7ebd8f',
        borderRadius: 5,
        margin: 5,
        borderColor: 'black',
        shadowColor: 'black',
        elevation: 25,
    },
    outputbar: {
        height: 100,
        justifyContent: 'flex-end',
        marginHorizontal: 15,
        marginVertical: 10,
    },
    outputbartext: {
        fontSize: 30,
        textAlign: 'right',
        padding: 10,
    },
    resultbartext: {
        fontSize: 30,
        color: '#000',
        textAlign: 'right',
        fontFamily: 'oswald',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    buttonmain: {
        backgroundColor: '#e2f0e1',
        paddingVertical: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
});

export default calstyle;
