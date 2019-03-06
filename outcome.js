import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Image, asset, Animated,
} from 'react-360';

export default class Outcome extends React.Component {

    constructor() {
        super();
    }

    render() {
        let outcome = this.props;
        return (
            <View>
                <Image source={asset('bucket.png')}
                       style={{
                            height: 100,
                            width: 100,
                            transform: [
                                {
                                    translate: outcome.coordinates
                                }
                             ]
                        }}/>
                <Text style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '400',
                 transform: [
                    {
                        translate: outcome.coordinates
                    }
                  ]
                  }}>
                    {outcome.type}
                </Text>
            </View>
        )


    }
}