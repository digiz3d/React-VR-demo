import React from 'react';
import {
  AppRegistry,
  asset,
  SpotLight,
  Box,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class testVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <SpotLight
          intensity={0.5}
          style={{
            transform: [
              {translate: [0, 5, -5]},
              {scale : 1 }
            ], lit: true
          }}
        />
        {/*<Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          BLYAT
        </Text>*/}
        <Box
          lit={true}
          style={{
                transform: [
                  {translate: [0, 0, -5]},
                  {rotateZ: 15},
                  {rotateX: 15},
                  {scale : 1 }
                ], lit: true
              }}
          dimWidth={1}
          dimDepth={1}
          dimHeight={1}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('testVR', () => testVR);
