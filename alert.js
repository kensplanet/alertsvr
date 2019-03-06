import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    PanResponder,
    Text,
    View, Image, asset, Animated,
} from 'react-360';
//import Draggable from 'react-draggable';
export default class Alert extends React.Component {

    constructor() {
        super();
        this.state = {
            z: new Animated.Value(-1000),
            showDraggable: true,
            dropAreaValues: null,
            pan: new Animated.ValueXY(),
            opacity: new Animated.Value(1)
        }
    }

    componentDidMount() {
        this.animateAlerts();
    }

    componentWillMount() {
        console.log('Component will mount called');
        this._val = { x:0, y:0 }
        this.state.pan.addListener((value) => this._val = value);
        console.log('PanResponder is ',PanResponder);
        /*this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onPanResponderGrant: (e, gesture) => {
                this.state.pan.setOffset({
                    x: this._val.x,
                    y:this._val.y
                })
                this.state.pan.setValue({ x:0, y:0})
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: this.state.pan.y }
            ]),
            onPanResponderRelease: (e, gesture) => {
                if (this.isDropArea(gesture)) {
                    Animated.timing(this.state.opacity, {
                        toValue: 0,
                        duration: 1000
                    }).start(() =>
                        this.setState({
                            showDraggable: false
                        })
                    );
                }
            }
        });*/
    }

    isDropArea(gesture) {
        return gesture.moveY < 200;
    }

    animateAlerts() {
        Animated.timing(this.state.z, {
            toValue: 0,
            duration: 10000000 / this.props.amount,
        }).start();
    }

    render() {
        let alert = this.props;
        return (

            <Animated.View style={{
                height: 40,
                width: 100,
                backgroundColor: '#000',
				alignItems: 'center',
				borderRadius: 4,
				borderWidth: 0.5,
				borderColor: '#d6d7da',
                transform: [
                    {translate: [100 ,800, -500]},
                    {translateZ: this.state.z}
                ]
            }}
            onStartShouldSetResponder = {(e)=> {console.log('started responding ',e); return true;}}
            onResponderRelease ={(e)=> { console.log('the end event e is',e);}}
            onResponderGrant = {(e)=>{ console.log('On Responder Grant');}}

            >
                <Text style={{
                color: 'white',
                fontSize: 10,
                fontWeight: '400'
            }}>{alert.type}{"\n"}

                    - {alert.amount}${"\n"}
                    - {alert.issuer}
                </Text>
            </Animated.View>
        )
    }

}