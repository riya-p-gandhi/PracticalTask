import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image, TouchableOpacity, ScrollView
} from 'react-native';
 import {styles} from "./Stylesheet"

class SecondScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
          title: this.props.route.params.title,
          url:this.props.route.params.img,
          desc:this.props.route.params.desc,
          type: this.props.route.params.type
        };
    }

    render(){
        return(
            <SafeAreaView style={{backgroundColor:"white", flex:1}}>
              <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.goBack()}>
              <Image style={styles.backImg} resizeMode={"contain"} source={require("./Images/back1.png")}/>
              </TouchableOpacity>
              <Text style={styles.imgTitle}>{this.state.title}</Text>
              <View style={styles.imgView}>
                <Image style={styles.thumbnail} resizeMode="cover" source={this.state.type==="video"?require("./Images/placeholder-video.jpg"):{uri: this.state.url}}></Image>
              </View>
              <ScrollView style={{marginBottom: 30}}>
              <Text style={styles.descText}>{this.state.desc}</Text>
              </ScrollView>
            </SafeAreaView>
        );
    }
}

export default SecondScreen;