import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Image, asset, Animated, NativeModules,
} from 'react-360';
import Alert from './alert';
import Outcome from './outcome';

export default class alertsvr extends React.Component {
    constructor() {
        super();
        const {AudioModule} = NativeModules;
        AudioModule.playEnvironmental({
            source: asset('music.mp3'),
            volume: 1,
        });
    }

    render() {
        return (
            <View>
                <Outcome type="STOPPED" coordinates={[-100, 250, -600]}/>
                <Outcome type="TOO LATE" coordinates={[-300, 550, -800]}/>
                <Outcome type="RESOLVED" coordinates={[400, 500, -500]}/>
                <Outcome type="REFUNDED" coordinates={[-300, 550, -700]}/>


                <Alert type="Confirmed Fraud" amount="90" issuer="Wells Fargo"/>
                <Alert type="Confirmed Fraud" amount="130" issuer="Bank of Montreal"/>
                <Alert type="Customer Dispute" amount="115" issuer="TD Bank"/>
                <Alert type="Customer Dispute" amount="255" issuer="Bank of Montreal"/>
                <Alert type="Customer Dispute" amount="500" issuer="Bank of America"/>
                <Alert type="Confirmed Fraud" amount="45" issuer="TD Bank"/>
                <Alert type="Customer Dispute" amount="50" issuer="TD Bank"/>
                <Alert type="Confirmed Fraud" amount="75" issuer="Bank of Montreal"/>
                <Alert type="Confirmed Fraud" amount="55" issuer="Bank of Montreal"/>
                <Alert type="Confirmed Fraud" amount="90" issuer="Bank of Montreal"/>
                <Alert type="Confirmed Fraud" amount="16" issuer="RBC"/>
                <Alert type="Confirmed Fraud" amount="229" issuer="Scotia Bank"/>
                <Alert type="Customer Dispute" amount="80" issuer="Scotia Bank"/>
                <Alert type="Confirmed Fraud" amount="65" issuer="Bank of America"/>
                <Alert type="Customer Dispute" amount="45" issuer="TD Bank"/>
            </View>
        );
    }
};

AppRegistry.registerComponent('alertsvr', () => alertsvr);
