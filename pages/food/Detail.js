import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';
import {FixCard, CardContent} from '../../components/card/FixCard';
import * as configs from '../../constant/Configs';
import {RNNumberStepper} from 'react-native-number-stepper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Detail extends Component {
  static navigationOptions = {
    title: 'T e m p a t .com',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: '#713ADC',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      flex: 1,
      fontWeight: 'bold',
      textAlignVertical: 'center',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      items: {},
      accessToken: undefined,
      dataDetail: undefined,
    };
  }

  componentDidMount() {
    const {navigation} = this.props;
    const accessToken = navigation.getParam('accessToken', '');
    console.log('access token', accessToken);
    fetch(configs.GET_BRANCH_DETAIL, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
      },
      method: 'GET',
    }).then(response => {
      console.log('response', response);
      response.json().then(resp => {
        this.setState({dataDetail: resp.data}, () => {
          console.log(this.state.dataDetail);
        });
      });
    });
  }

  render() {
    return (
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{flexGrow: 1}}
        style={{
          backgroundColor: '#713ADC',
          flex: 1,
          borderRadius: 20,
          marginVertical: 7,
        }}>
        <View style={{justifyContent: 'center', marginHorizontal: 10}}>
          <Text style={styles.textTitle}> Happy Hours</Text>
          <Agenda
            items={{
              '2019-12-22': [
                {hour: '15:30-17:00', discount: '40%'},
                {hour: '17:00-21:00', discount: '10%'},
                {hour: '21:00-22:00', discount: '50%'},
              ],
              '2019-12-23': [
                {hour: '15:30-17:00', discount: '40%'},
                {hour: '17:00-21:00', discount: '10%'},
                {hour: '21:00-22:00', discount: '50%'},
              ],
              '2019-12-24': [],
              '2019-12-25': [
                {hour: '15:30-17:00', discount: '40%'},
                {hour: '17:00-21:00', discount: '10%'},
                {hour: '21:00-22:00', discount: '50%'},
              ],
              '2019-12-26': [
                {hour: '15:30-17:00', discount: '40%'},
                {hour: '17:00-21:00', discount: '10%'},
                {hour: '21:00-22:00', discount: '50%'},
              ],
              '2019-12-27': [
                {hour: '15:30-17:00', discount: '40%'},
                {hour: '17:00-21:00', discount: '10%'},
                {hour: '21:00-22:00', discount: '50%'},
              ],
              '2019-12-28': [
                {hour: '15:30-17:00', discount: '40%'},
                {hour: '17:00-21:00', discount: '10%'},
                {hour: '21:00-22:00', discount: '50%'},
              ],
            }}
            // loadItemsForMonth={this.loadItems.bind(this)}
            selected={moment(new Date())
              .format('YYYY-MM-DD')
              .toString()}
            renderItem={this.renderItem.bind(this)}
            renderEmptyDate={this.renderEmptyDate.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
            renderKnob={() => {
              return <View />;
            }}
            renderEmptyData={() => {
              return <View />;
            }}
            // markingType={'period'}
            // markedDates={{
            //    '2017-05-08': {textColor: '#666'},
            //    '2017-05-09': {textColor: '#666'},
            //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
            //    '2017-05-21': {startingDay: true, color: 'blue'},
            //    '2017-05-22': {endingDay: true, color: 'gray'},
            //    '2017-05-24': {startingDay: true, color: 'gray'},
            //    '2017-05-25': {color: 'gray'},
            //    '2017-05-26': {endingDay: true, color: 'gray'}}}
            // monthFormat={'yyyy'}
            // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
            // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
            style={{
              height: 250,
              marginHorizontal: 20,
              marginBottom: 10,
              borderRadius: 20,
              flex: 1,
            }}
          />
          <View
            style={{
              borderRadius: 20,
              height: 255,
              backgroundColor: 'white',
              marginHorizontal: 20,
            }}>
            <View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image
                  style={{height: 40, width: 40, marginHorizontal: 20}}
                  source={{uri: 'http://bit.ly/2GfzooV'}}
                />
                <View
                  style={{
                    top: 0,
                    alignSelf: 'flex-start',
                    flexDirection: 'column',
                  }}>
                  <Text
                    style={{
                      alignSelf: 'flex-start',
                      top: 0,
                      fontWeight: 'bold',
                    }}>
                    All Pastries
                  </Text>
                  <Text style={{color: 'grey'}}>
                    Cakes,pastries,breads,eclair,ice Cream
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 20,
                  justifyContent: 'space-around',
                }}>
                <Text style={{maxWidth: '60%'}}>
                  How many people redeeming this voucher
                </Text>
                <RNNumberStepper
                  value={5}
                  size={1}
                  autoRepeat={true}
                  stepValue={1}
                  onChange={(nValue, oValue) => {
                    console.log(
                      'New Value: ' + nValue + ', Old Value: ' + oValue,
                    );
                  }}
                  width={100}
                  height={25}
                  buttonsContainerWidth={20}
                  // leftButtonText={'M'}
                  // rightButtonText={'P'}
                  buttonsTextColor={'#713ADC'}
                  buttonsBackgroundColor={'#eaeef0'}
                  labelTextColor={'#713ADC'}
                  labelBackgroundColor={'white'}
                  // buttonsContainerWidth={60}
                  borderColor={'grey'}
                  borderWidth={1}
                />
              </View>
            </View>
            <View
              style={{height: 1, backgroundColor: '#E9E9E9', width: '100%'}}
            />

            <View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image
                  style={{height: 40, width: 40, marginHorizontal: 20}}
                  source={{uri: 'http://bit.ly/2GfzooV'}}
                />
                <View
                  style={{
                    top: 0,
                    alignSelf: 'flex-start',
                    flexDirection: 'column',
                  }}>
                  <Text
                    style={{
                      alignSelf: 'flex-start',
                      top: 0,
                      fontWeight: 'bold',
                    }}>
                    All Pastries
                  </Text>
                  <Text style={{color: 'grey'}}>
                    Cakes,pastries,breads,eclair,ice Cream
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 20,
                  justifyContent: 'space-around',
                }}>
                <Text style={{maxWidth: '60%'}}>
                  How many people redeeming this voucher
                </Text>
                <RNNumberStepper
                  value={5}
                  size={1}
                  autoRepeat={true}
                  stepValue={1}
                  onChange={(nValue, oValue) => {
                    console.log(
                      'New Value: ' + nValue + ', Old Value: ' + oValue,
                    );
                  }}
                  width={100}
                  height={25}
                  buttonsContainerWidth={20}
                  // leftButtonText={'M'}
                  // rightButtonText={'P'}
                  buttonsTextColor={'#713ADC'}
                  buttonsBackgroundColor={'#eaeef0'}
                  labelTextColor={'#713ADC'}
                  labelBackgroundColor={'white'}
                  // buttonsContainerWidth={60}
                  borderColor={'grey'}
                  borderWidth={1}
                />
              </View>
            </View>
            <View
              style={{height: 1, backgroundColor: '#E9E9E9', width: '100%'}}
            />

            <View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image
                  style={{height: 40, width: 40, marginHorizontal: 20}}
                  source={{uri: 'http://bit.ly/2GfzooV'}}
                />
                <View
                  style={{
                    top: 0,
                    alignSelf: 'flex-start',
                    flexDirection: 'column',
                  }}>
                  <Text
                    style={{
                      alignSelf: 'flex-start',
                      top: 0,
                      fontWeight: 'bold',
                    }}>
                    All Pastries
                  </Text>
                  <Text style={{color: 'grey'}}>
                    Cakes,pastries,breads,eclair,ice Cream
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 20,
                  justifyContent: 'space-around',
                }}>
                <Text style={{maxWidth: '60%'}}>
                  How many people redeeming this voucher
                </Text>
                <RNNumberStepper
                  value={5}
                  size={1}
                  autoRepeat={true}
                  stepValue={1}
                  onChange={(nValue, oValue) => {
                    console.log(
                      'New Value: ' + nValue + ', Old Value: ' + oValue,
                    );
                  }}
                  width={100}
                  height={25}
                  buttonsContainerWidth={20}
                  // leftButtonText={'M'}
                  // rightButtonText={'P'}
                  buttonsTextColor={'#713ADC'}
                  buttonsBackgroundColor={'#eaeef0'}
                  labelTextColor={'#713ADC'}
                  labelBackgroundColor={'white'}
                  // buttonsContainerWidth={60}
                  borderColor={'grey'}
                  borderWidth={1}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            right: 0,
            alignSelf: 'flex-end',
            height: 40,
            width: '100%',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#eaeef0',
              width: '25%',
              height: 40,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              justifyContent: 'center',
              borderWidth: 0.2,
              borderColor: '#eaeef0',
            }}>
            <Icon
              name="star"
              size={15}
              color={'grey'}
              style={{alignSelf: 'center'}}></Icon>

            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 10,
                color: 'grey',
              }}>
              Add Review
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#eaeef0',
              width: '25%',
              height: 40,
              borderRightColor: '#eaeef0',
              justifyContent: 'center',
            }}>
            <Icon
              name="level-up"
              size={15}
              color={'grey'}
              style={{alignSelf: 'center'}}></Icon>

            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 10,
                color: 'grey',
              }}>
              Directions{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'orange',
              width: '50%',
              height: 40,
              bottom: 0,
              right: 0,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white',
              }}>
              Book Now{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems,
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item]}>
        <Text
          style={{
            color: 'white',
            backgroundColor: '#AE80E9',
            borderRadius: 7,
            width: '100%',
            textAlign: 'center',
            marginBottom: 5,
          }}>
          {item.hour}
        </Text>

        <Text style={{color: 'white', fontWeight: 'bold'}}>
          {item.discount}
        </Text>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>No Discount</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}
const cardStyle = {
  card: {height: '40%', borderRadius: 20, flex: 1, marginHorizontal: 20},
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#8536E9',
    flex: 1,
    borderRadius: 15,
    marginRight: 10,
    marginTop: 17,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: 'white',
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
  },
});
