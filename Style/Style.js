import { Dimensions, Platform, StyleSheet } from "react-native";
const platform = Platform.OS;
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
    ...Platform.select({
      ios: {
        marginTop:
          windowWidth >= 375 && windowWidth < 392
            ? 120
            : windowWidth >= 392 && windowWidth < 430
            ? 120
            : windowWidth >= 430 && 130,
      },
      android: {
        marginTop: 70,
      },
    }),
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
  },
  tasbihatText: {
    fontSize: windowWidth / 24,
    color: "#fff",
    paddingBottom: 120,
    lineHeight: 23,
  },
  textArabic: {
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    lineHeight: 60,
  },
  textRus: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    lineHeight: 30,
  },
  menu: {
    width: "100%",
    height: windowWidth >= 428 ? "114%" : "100%",
    backgroundColor: "#320548",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 50,
  },
  logoAndText: {
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    color: "#F1DC1A",
    fontWeight: "900",
    fontSize: 22,
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
    fontSize: 15,
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
    marginTop: 60,
  },
  sur_cont_row: {
    display: "flex",
    flexDirection: "column",
    ...Platform.select({
      ios: {
        marginTop:
          windowWidth <= 430 && windowWidth >= 392
            ? 70
            : windowWidth <= 391 && windowWidth >= 350
            ? 40
            : windowWidth <= 349 && windowWidth >= 300
            ? 20
            : 30,
      },
    }),
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
    width: "100%",
    padding: 20,
    paddingBottom: 15,
    paddingTop: Platform.OS === "ios" ? 45 : Platform.OS === "android" && 10,
    position: "absolute",
    zIndex: 10,
    left: 0,
    right: 0,
    borderBottomColor: "#2A043D",
    borderBottomWidth: 1,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },

  header_row_flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    ...Platform.select({
      ios: {
        height: windowWidth <= 430 && windowWidth >= 390 ? 60 : 50,
      },
      android: {
        height: "auto",
      },
    }),
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
    fontSize: 20,
    color: "yellow",
    fontWeight: "500",
    textAlign: "center",
  },
  surArabic: {
    color: "white",
    fontSize: 23,
    lineHeight: 55,
    textAlign: "right",
  },
  surRus: {
    color: "white",
    fontSize: 16,
    lineHeight: 38,
  },
  about: {
    alignSelf: "center",
    color: "#F1DC1A",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginTop: 20,
  },
});

//
//
// /
