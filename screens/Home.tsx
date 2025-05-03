import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Cellularconnection from "../assets/cellular-connection.svg";
import Wifi from "../assets/wifi.svg";
import Cap from "../assets/cap.svg";
import Notifications from "../assets/notifications.svg";
import Ellipse1 from "../assets/ellipse-1.svg";
import Group1 from "../assets/group-1.svg";
import Group2 from "../assets/group-2.svg";
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

const Home = () => {
  return (
    <SafeAreaView style={styles.home}>
      <View style={[styles.statusBar, styles.bezelPosition]}>
        <View style={styles.frame}>
          <View style={[styles.time, styles.timeFlexBox]}>
            <Text style={styles.time1}>9:41</Text>
          </View>
          <View style={[styles.dynamicIslandSpacer, styles.timeFlexBox]} />
          <View style={[styles.levels, styles.timeFlexBox]}>
            <Cellularconnection
              style={styles.cellularConnectionIcon}
              width={19}
              height={12}
            />
            <Wifi style={styles.wifiIcon} width={17} height={12} />
            <View style={styles.battery}>
              <View style={[styles.border, styles.borderPosition]} />
              <Cap style={[styles.capIcon, styles.borderPosition]} />
              <View style={[styles.capacity, styles.borderPosition]} />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bezel, styles.bezelPosition]}>
        <Image
          style={styles.iphone16ProBlackTitanium}
          contentFit="cover"
          source={require("../assets/iphone-16-pro--black-titanium--portrait.png")}
        />
      </View>
      <Text style={[styles.holaMariana, styles.holaMarianaFlexBox]}>
        <Text style={styles.holaMarianaTxtContainer}>
          <Text style={styles.hola}>{`¡Hola `}</Text>
          <Text style={styles.marianaTypo}>Mariana</Text>
          <Text style={styles.hola}>!</Text>
        </Text>
      </Text>
      <View style={styles.header}>
        <Text style={[styles.estticaBeauty, styles.marianaTypo]}>
          Estética Beauty
        </Text>
        <Notifications
          style={styles.notificationsIcon}
          width={48}
          height={44}
        />
        <Ellipse1 style={styles.headerChild} width={12} height={12} />
      </View>
      <View style={styles.homeChild} />
      <Text style={[styles.irAInventario, styles.irAInventarioLayout]}>
        Ir a inventario
      </Text>
      <Text style={[styles.shampoo, styles.gelLayout]}>Shampoo</Text>
      <Image
        style={[styles.imageIcon, styles.imageIconLayout]}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
      <Text style={[styles.cremaCapilar, styles.gelLayout]}>Crema capilar</Text>
      <Image
        style={[styles.imageIcon1, styles.imageIconLayout]}
        contentFit="cover"
        source={require("../assets/image1.png")}
      />
      <Text style={[styles.gel, styles.gelLayout]}>Gel</Text>
      <Image
        style={[styles.imageIcon2, styles.imageIconLayout]}
        contentFit="cover"
        source={require("../assets/image2.png")}
      />
      <Text
        style={[styles.prximoAAgotarseContainer, styles.irAInventarioLayout]}
      >
        <Text style={styles.holaMarianaTxtContainer}>
          <Text style={styles.hola}>{`Próximo a `}</Text>
          <Text style={styles.marianaTypo}>agotarse</Text>
        </Text>
      </Text>
      <Group1
        style={[styles.homeItem, styles.homeLayout]}
        width={178}
        height={161}
      />
      <Group2
        style={[styles.homeInner, styles.homeLayout]}
        width={178}
        height={161}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bezelPosition: {
    display: "none",
    left: 0,
    top: 0,
    position: "absolute",
  },
  timeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  holaMarianaFlexBox: {
    display: "flex",
    textAlign: "left",
    color: Color.colorDarkslateblue,
    alignItems: "center",
  },
  marianaTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  irAInventarioLayout: {
    lineHeight: 40,
    position: "absolute",
  },
  gelLayout: {
    height: 31,
    width: 144,
    fontSize: FontSize.size_sm,
    top: 632,
    lineHeight: 40,
    fontFamily: FontFamily.poppinsRegular,
    display: "flex",
    color: Color.colorDarkslateblue,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  imageIconLayout: {
    height: 120,
    width: 120,
    top: 495,
    position: "absolute",
  },
  homeLayout: {
    height: 161,
    width: 178,
    top: 215,
    position: "absolute",
  },
  time1: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFPro,
    color: Color.colorBlack,
    textAlign: "center",
  },
  time: {
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_7xs,
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  dynamicIslandSpacer: {
    width: 124,
    height: 10,
  },
  cellularConnectionIcon: {},
  wifiIcon: {},
  border: {
    height: "100%",
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    maxHeight: "100%",
    width: 1,
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.colorBlack,
    width: 21,
  },
  battery: {
    width: 27,
    height: 13,
  },
  levels: {
    paddingLeft: Padding.p_7xs,
    paddingRight: Padding.p_base,
    gap: Gap.gap_md,
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  frame: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    gap: Gap.gap_0,
    alignItems: "center",
    flexDirection: "row",
  },
  statusBar: {
    right: 0,
    height: 76,
    paddingTop: Padding.p_2xl,
  },
  iphone16ProBlackTitanium: {
    top: -23,
    left: -24,
    width: 450,
    height: 920,
    position: "absolute",
  },
  bezel: {
    width: 402,
    height: 874,
  },
  hola: {
    fontFamily: FontFamily.poppinsRegular,
  },
  holaMarianaTxtContainer: {
    width: "100%",
  },
  holaMariana: {
    top: 144,
    fontSize: FontSize.size_9xl,
    width: 284,
    height: 46,
    lineHeight: 90,
    display: "flex",
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  estticaBeauty: {
    fontSize: FontSize.size_13xl,
    width: 296,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 90,
    textAlign: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  notificationsIcon: {
    top: 23,
    left: 314,
    overflow: "hidden",
    position: "absolute",
  },
  headerChild: {
    top: 26,
    left: 344,
    position: "absolute",
  },
  header: {
    top: 54,
    width: 362,
    height: 90,
    left: 20,
    position: "absolute",
  },
  homeChild: {
    top: 692,
    left: 87,
    borderRadius: Border.br_61xl,
    backgroundColor: Color.colorDarkslateblue,
    width: 228,
    height: 58,
    position: "absolute",
  },
  irAInventario: {
    top: 701,
    left: 146,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
  },
  shampoo: {
    left: -9,
  },
  imageIcon: {
    left: 3,
  },
  cremaCapilar: {
    left: 268,
  },
  imageIcon1: {
    left: 280,
  },
  gel: {
    left: 129,
  },
  imageIcon2: {
    left: 141,
  },
  prximoAAgotarseContainer: {
    top: 409,
    left: 24,
    fontSize: FontSize.size_5xl,
    width: 267,
    height: 69,
    display: "flex",
    textAlign: "left",
    color: Color.colorDarkslateblue,
    alignItems: "center",
  },
  homeItem: {
    left: 20,
  },
  homeInner: {
    left: 205,
  },
  home: {
    height: 874,
    width: "100%",
    flex: 1,
  },
});

export default Home;
