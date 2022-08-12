import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Keyboard,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { styles } from "./Stylesheet"
import DatePicker from 'react-native-date-picker'
import NetInfo from "@react-native-community/netinfo";

class FirstScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: "Start date",
      start_apiDate:"",
      endDate: "End date",
      end_apiDate:"",
      resultData: [],
      modalOpen: false,
      tag: 0
    }
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.img} activeOpacity={0.9} onPress={() => this.props.navigation.push('Second', { title: item.title, img: item.hdurl, desc: item.explanation, type: item.media_type })}>
        <Image style={styles.thumbnail} resizeMode="cover" defaultSource={require("./Images/placeholder.jpg")} source={item.media_type==="video"?require("./Images/placeholder-video.jpg"):{uri: item.url}}></Image>
      </TouchableOpacity>
    );
  };

  onPressSearch = () => {
    this.setState({ isLoading: true, })
      NetInfo.fetch().then(state => {
        if (state.isConnected) {

            var data = {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            }

            fetch("https://api.nasa.gov/planetary/apod?start_date="+this.state.start_apiDate+"&end_date="+this.state.end_apiDate+"&api_key=2SmZMUTdL9F3gKztnYufhC7nckjSAoGy0bg6gicz", data)
                .then((response) => response.json())
                .then((responseData) => {
                 // console.log("category: ",responseData); 
                    if (responseData.code === 400) {
                      alert(responseData.msg)
                      this.setState({ isLoading: false, });
                    } else {
                      this.setState({ isLoading: false, resultData: responseData});

                    }
                })
                .then();
        } else {
            this.setState({ isLoading: false, });
            alert("There is no internet connectivity")
        }
    });
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.mainView}>
          <Text style={styles.titleText}>Picture of the day</Text>
          <Text style={styles.subtitleText}>Picture of the day:</Text>
          <Text style={styles.subtitleTextDesc}>Search for Astronomy: Picture of the day by date.</Text>
          <TouchableOpacity style={styles.textinput} activeOpacity={0.9} onPress={() => this.setState({ modalOpen: true, tag: 0 })}>
            <Text style={styles.dateText}>{this.state.startDate.toLocaleString()}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textinput} activeOpacity={0.9} onPress={() => this.setState({ modalOpen: true, tag: 1 })}>
            <Text style={styles.dateText}>{this.state.endDate.toLocaleString()}</Text>
          </TouchableOpacity>

          <DatePicker style={{ height: 200, alignSelf: "center" }}
            date={new Date()}
            onConfirm={(date) => {
              var day = date.getDate() < 10 ? ("0" + date.getDate()) : (date.getDate())
              var month = date.getMonth() < 10 ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1)
              const year = date.getFullYear();
              this.setState({ modalOpen: false })
              if (this.state.tag === 0) {
                this.setState({ startDate: day + "-" + month + "-" + year, start_apiDate: year+"-"+month+"-"+day })
              }
              else {
                this.setState({ endDate: day + "-" + month + "-" + year,end_apiDate: year+"-"+month+"-"+day })
              }
            }
            }
            onCancel={() => this.setState({ modalOpen: false })}
            mode={"date"}
            modal
            open={this.state.modalOpen}
          />

          <TouchableOpacity style={styles.searchButton} activeOpacity={0.9} onPress={() => {
            if(this.state.startDate === "Start date" || this.state.endDate === "End date"){
              alert("Please enter start and end date")
            }
            else{
              this.onPressSearch()
            }
           }}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>

          {
              this.state.isLoading ?
              <View style={{position:"absolute", backgroundColor:"rgba(0,0,0,0.2)",width:"100%",alignSelf:"center", height:"100%", justifyContent:"center", alignItems:"center"}} ><ActivityIndicator size="large" color="#00a7b4" /></View>                
                :
                null
            }

          <View style={{ marginTop: 20, height: 350 }}>
            <Text style={[styles.searchText, { marginLeft: 17 }]}>Results ({this.state.resultData.length}):</Text>
            {
              this.state.resultData.length === 0 ?
                <Text style={styles.noResultText}>No results found. Enter a start and end date.</Text>
                :
                <FlatList
                  style={styles.flatlist}
                  data={this.state.resultData}
                  bounces={false}
                  numColumns={3}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={this.renderItem}
                />
            }
          </View>

        </View>
      </SafeAreaView>


    );
  }
}

export default FirstScreen;