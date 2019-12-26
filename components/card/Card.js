import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DiscountView from '../horizontalView/DiscountView';
import {object} from 'prop-types';
import ViewPager from '@react-native-community/viewpager';
import PropTypes from 'prop-types';

// Create a component
export default class Card extends Component {
  static propTypes = {
    image: PropTypes.string,
    rating: PropTypes.string,
    type:PropTypes.string,
    subType: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    bookedTimes: PropTypes.string,
    discounts: PropTypes.string,
    onPress:PropTypes.func,
  };
  constructor(props) {
    super(props);
  }

  render() {
    const {
      image,
      rating,
      type,
      subType,
      name,
      address,
      bookedTimes,
      discounts,
    } = this.props;
    return (
      <View style={styles.containerStyle}>
        <ImageBackground
          style={{height: 200, width:null, borderRadius: 5, margin: 1}}
          source={{uri: image}}
          imageStyle={{borderRadius: 5}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#50E213',
                opacity: 0.8,
                height: 25,
                width: 50,
                borderRadius: 7,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="star" size={20} color={'white'}></Icon>
              <Text style={{color: 'white', paddingLeft: 5}}>{rating}</Text>
            </View>

            <TouchableOpacity style={styles.socialBarButton}>
              <Icon name="heart-o" size={20} color={'white'}></Icon>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignSelf: 'flex-start',
              flex: 1,
              backgroundColor: 'orange',
              marginBottom: 0,
              marginTop: 135,
              borderBottomLeftRadius: 5,
              borderTopRightRadius: 20,
              paddingHorizontal: 15,
            }}>
            <Text style={{color: 'white', marginTop: 5}}>{type}</Text>
          </View>
        </ImageBackground>
        <View style={{marginBottom: 10}}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.addressTitle}>{address}</Text>
          <Text style={styles.subTypeTitle}>{subType}</Text>
        </View>

        <View
          style={{
            height: 80,
            backgroundColor: '#F4F6F6',
            margin: 1,
            marginTop: 5,
            borderBottomWidth: 1,
            borderColor: 'white',
            minWidth: '100%',
            justifyContent: 'center',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}>
          <ViewPager
            style={{
              height: 50,
              minWidth: '100%',
            }}
            initialPage={0}
            pageMargin={20}>
            {discounts &&
              discounts.length > 0 &&
              discounts.map((obj, index) => {
                return (
                  <View key={index} style={styles.discountStyle}>
                    <Text style={styles.discountTextStyleHour}>{obj.hour}</Text>
                    <Text style={styles.discountTextStyleDisc}>
                      {obj.discount}
                    </Text>
                  </View>
                );
              })}
          </ViewPager>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              marginRight: 5,
              marginBottom: 5,
            }}>
            <Text style={styles.textGreyStyle}>booked </Text>
            <Text style={styles.textGreyStyleBold}>{bookedTimes}</Text>
            <Text style={styles.textGreyStyle}> times since yesterday</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.bookingButtonStyle}
            onPress={this.props.onPress}>
            <Text style={styles.bookingButtonStyleText}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom:10
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  scrollViewStyle: {
    height: 40,
    backgroundColor: '#D6DBDF',
    
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  addressTitle: {
    fontSize: 15,
    color: 'grey',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  subTypeTitle: {
    fontSize: 15,
    color: '#AEB6BF',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  discountStyle: {
    backgroundColor: '#F4F6F6',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  discountTextStyleHour: {
    marginLeft: 10,
    marginTop: 5,
    color: 'purple',
    fontWeight: 'bold',
  },
  discountTextStyleDisc: {
    marginLeft: 10,
    marginTop: 5,
    color: 'blue',
    fontWeight: 'bold',
  },
  bookingButtonStyle: {
    height: 50,
    backgroundColor: '#F4F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#ABB2B9',
    borderTopWidth: 0.7,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
  },
  bookingButtonStyleText: {
    color: '#E26413',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textGreyStyle: {
    color: 'grey',
  },
  textGreyStyleBold: {
    color: 'grey',
    fontWeight: 'bold',
  },
});


