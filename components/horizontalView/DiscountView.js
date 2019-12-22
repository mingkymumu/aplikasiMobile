import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';

const DiscountView = discounts => {
  return (
    <View>
      <ScrollView horizontal={true} style={{height: 50, minWidth: '100%'}}>
        {discounts &&
          discounts.length > 0 &&
          discounts.map(obj => {
            return (
              <View key={obj.id} style={{height: 40, flex: 1}}>
                <Text>{obj.hour}</Text>
                <Text>{obj.discount}</Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default DiscountView;
