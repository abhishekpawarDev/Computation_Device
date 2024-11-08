/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import calstyle from '../styles.jsx/calculatorstyle';

const CalculatorComponent = () => {
    React.useEffect(() => {
        Orientation.lockToPortrait();

        return () => {
            Orientation.unlockAllOrientations();
        };
    }, []);
    // calculator logic
    const [count, setCount] = useState('');
    const [result, setResult] = useState('');
    const buttonArray = [
        ['AC', '«', '%', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.','{enter}'],
    ];
    const operators = ['%', '/', '+', '-', '*', '.'];
    const handlePress = (btn) => {
        try {
            setCount(prevState => {
                if (operators.includes(count.substring(count.length - 1, count.length)) && operators.includes(btn)) {
                    return prevState.substring(0, prevState.length - 1) + btn;
                } else {
                    switch (btn) {
                        case 'AC':
                            setResult('');
                            return '';
                        case '«':
                            return prevState.substring(0, prevState.length - 1);
                        case '{enter}':
                            // eslint-disable-next-line no-eval
                            setResult(eval(count));
                            return prevState;
                        case '%':
                            // eslint-disable-next-line no-eval
                            setResult(eval(count) / 100);
                            return prevState;
                        default:
                            return prevState + btn;
                    }
                }
            });
        } catch (error) {
            setResult('Error!');
        }
    };
    return (
        <View style={calstyle.container}>
            <View style={calstyle.outputbar}>
                <Text style={[calstyle.outputbartext ,  {fontFamily: 'oswald'}]}>{count}</Text>
                {result && <Text style={calstyle.resultbartext}>= {result}</Text>}
            </View>
            <View style={calstyle.buttonmain}>
                {buttonArray.map((btnList, index) => {
                    return <View style={calstyle.main} key={index}>
                        {btnList.map(btnName => {
                            return <TouchableOpacity key={btnName} style={calstyle.buttonstyle} onPress={() => handlePress(btnName)}>
                                <Text key={btnName} style={[
                                    calstyle.textbutton,
                                    btnName === '{enter}' && { width: 155 },
                                    ['AC', '%', '/', '*', '-', '+', '=', '.', '0', '{enter}','«'].includes(btnName) && {
                                        backgroundColor: '#87aeed',
                                        borderRadius: 5,
                                        fontSize:25,
                                    },
                                    {
                                    },
                                ]}>
                                    {btnName === '{enter}' ? '=' : btnName}
                                </Text>
                            </TouchableOpacity>;
                        })}
                    </View>;
                })}
            </View>
        </View >
    );
};


export default CalculatorComponent;
