import { Dimensions, Platform, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const gStyle = StyleSheet.create({
  app: {
    backgroundColor: "#320548",
    height: "100%",
    width: "100%",
  },
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#320548",
  },
  menu_container: {
    backgroundColor: "red",
    height: "100%",
    width: "100%",
  },
  container: {
    width: "100%",
    alignSelf: "center",
    marginTop: windowWidth <= 375 ? 100 : (windowWidth > 392 && 70),
  },
  container_row: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 30,
    alignItems: "center",
    width: "85%",
    display: "flex",
    alignSelf: "center",
  },
  text: {
    color: "#fff",
    // fontFamily: "Montserrat Medium",
  },
  textArabic: {
    textAlign: "center",
    fontSize: 28,
    color: "#fff",
  },
  textRus: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    lineHeight: 38,
  },
  menu: {
    width: "100%",
    height: "100%",
    backgroundColor: "#320548",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    paddingBottom: 50
  },
  logoAndText: {
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    color: "#F1DC1A",
    // fontFamily: "Montserrat SemiBold",
    fontWeight: "bold",
    fontSize: 25,
  },
  language: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: 20,
    height: 35,
    marginTop: 20,
  },
  lanContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    height: "100%",
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 10,
  },
  langText: {
    color: "#fff",
    // fontFamily: "Montserrat Medium",
    fontWeight: "bold",
    fontSize: 15
  },
  buttonContainer: {
    alignItems: "center",
    maxWidth: 400,
  },
  // 11 Pro
  buttonList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    marginLeft: windowWidth <= 375 ? 35 : windowWidth >= 392 ? 55 : 100,
  },

  button: {
    backgroundColor: "#7100A9",
    height: 60,
    paddingVertical: 14,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 30,
    width: Dimensions.get("window").width * 0.9,
  },
  img: {
    width: 30,
    height: 30,
    objectFit: "scale-down",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    // fontFamily: "Montserrat SemiBold",
  },
  section: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  // Tasbihat
  tasbih: {
    width: "100%",
    height: "100%",
    backgroundColor: "#320548",
    paddingTop: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },

  // Sur
  sur_cont: {
    width: "100%",
    backgroundColor: "#320548",
    paddingHorizontal: 25,
    marginTop: 70,
  },
  sur_cont_row: {
    display: "flex",
    flexDirection: "column",
  },
  sur_btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
  },
  sur_btn_row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text1: {
    color: "#fff",
    fontSize: 20,
    width: 30,
  },
  text2: {
    color: "#fff",
    fontSize: 19,
    // fontFamily: 'Montserrat Medium'
  },

  // Tafrijia
  counter: {
    backgroundColor: "#320548",
    height: 100,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    padding: 20,
    gap: 20,
  },
  closeIcon: {
    alignSelf: "center",
    padding: 10,
    backgroundColor: "#7100A9",
    borderRadius: 20,
  },
  current_number: {
    backgroundColor: "#7100A9",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  text3: {
    color: "#fff",
    fontSize: 25,
  },
  touchableArea: {
    width: "100%",
    height: "100%",
  },

  // HEADER
  header: {
    backgroundColor: "#320548",
    // backgroundColor: 'red',
    width: "100%",
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 45 : (Platform.OS === 'android' && 10),
    position: "absolute",
    zIndex: 10,
    left: 0,
    right: 0,
    borderBottomColor: "#2A043D",
    borderBottomWidth: 1,
  },

  header_row_flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    color: "#fff",
    fontSize: Dimensions.get("window").width <= 375 ? 18 : 20,
    // fontFamily: "Montserrat SemiBold",
  },
  // FAJR
  soundArea: {
    width: "100%",
    height: 100,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  slider: {
    width: "90%",
    height: 40,
  },
  playArea: {
    backgroundColor: "#7100A9",
    width: "90%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  sliderMinutes: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  minSecText: {
    color: "#fff",
    fontSize: 10,
  },
  surSample: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "100%",
    paddingBottom: 30,
  },
  surTitle: {
    fontSize: 30,
    color: "yellow",
    fontWeight: "500",
    textAlign: "center",
  },
  surArabic: {
    color: "white",
    fontSize: 23,
    lineHeight: 55,
  },
  surRus: {
    color: "white",
    fontSize: 16,
    lineHeight: 38,
    // fontFamily: "Montserrat Medium",
  },
  about: {
    alignSelf: 'center',
    color: '#F1DC1A',
    // fontFamily: 'Montserrat Medium',
  }
});


// 
// 
// /