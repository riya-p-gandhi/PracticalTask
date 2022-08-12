import React from 'react';
import {
  Dimensions,
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({

  ////////////////////////// First Screen /////////////////////////////////
  mainView: {
    backgroundColor: "white", height: "100%",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 30,
    alignSelf: "center",
    color: "black"
  },
  subtitleText: {
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 15,
    color: "black"
  },
  subtitleTextDesc: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 15,
    color: "rgb(70,70,70)"
  },
  textinput: {
    marginTop: 15,
    alignSelf: "center",
    width: "93%", padding: 20,
    backgroundColor: "rgb(247,249,252)",
    borderRadius: 10,
  },
  dateText: {
    fontSize: 18,
    color: "rgb(67,68,73)"
  },
  searchButton: {
    justifyContent: "center", alignItems: "center",
    marginTop: 15,
    alignSelf: "center",
    width: "93%", padding: 12,
    backgroundColor: "rgb(247,249,252)",
    borderRadius: 10, borderWidth: 2, borderColor: "rgb(88,108,148)"
  },
  searchText: {
    fontSize: 17,
    color: "rgb(48,67,102)", fontWeight: "bold"
  },
  flatlist: {
    marginTop: 20,
  },
  noResultText: {
    fontSize: 16,
    color: "rgb(59,61,73)",
    marginTop: 10, marginLeft: 17
  },
  img: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    height: 105,
    width: Dimensions.get("window").width / 3 - 10,
  },


  //////////////////////// Second screen ////////////////////////////
  backImg: {
    height: 30, width: 30,
  },
  backBtn: {
    height: 30, width: 30, padding: 5, justifyContent: "center", alignItems: "center", marginTop: 30, marginLeft: 15, backgroundColor: "white"
  },
  imgTitle: {
    fontSize: 20, position: "absolute",
    color: "rgb(16,28,55)", alignSelf: "center",
    marginTop: 30, fontWeight: "bold", width:"70%", textAlign:"center"
  },
  imgView: {
    width: "100%", height: "40%", marginVertical: 30
  },
  descText: {
    fontSize: 17,
    color: "rgb(40,42,66)", alignSelf: "center", paddingHorizontal: 10,
  },
  thumbnail: {
    height: "100%", width: "100%",borderRadius: 5,
  },
});