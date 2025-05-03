import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Cellularconnection from "../assets/cellular-connection.svg";
import Wifi from "../assets/wifi.svg";
import Cap from "../assets/cap.svg";
import Notifications1 from "../assets/notifications1.svg";
import Icon from "../assets/icon.svg";
import Add from "../assets/add.svg";
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

const Perfill = () => {
  return (
    <SafeAreaView style={styles.perfill}>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={[styles.frame, styles.timeFlexBox]}>
          <View style={[styles.time, styles.timeFlexBox]}>
            <Text style={styles.time1}>9:41</Text>
          </View>
          <View style={styles.dynamicIslandSpacer} />
          <View style={[styles.levels, styles.timeFlexBox]}>
            <Cellularconnection
              style={styles.cellularConnectionIcon}
              width={19}
              height={12}
            />
            <Wifi style={styles.wifiIcon} width={17} height={12} />
            <View style={styles.battery}>
              <View style={[styles.border, styles.borderPosition]} />
              <Cap style={styles.capIcon} />
              <View style={[styles.capacity, styles.borderPosition]} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bezel}>
        <Image
          style={styles.iphone16ProBlackTitanium}
          contentFit="cover"
          source={require("../assets/iphone-16-pro--black-titanium--portrait1.png")}
        />
      </View>
      <View style={styles.header}>
        <Text style={[styles.estticaBeauty, styles.tuPerfilLayout]}>
          Estética Beauty
        </Text>
        <Notifications1
          style={styles.notificationsIcon}
          width={48}
          height={44}
        />
      </View>
      <Text style={[styles.tuPerfil, styles.inicioFlexBox]}>
        <Text style={styles.tuPerfilTxtContainer}>
          <Text style={styles.tu}>{`Tu `}</Text>
          <Text style={styles.perfilTypo}>Perfil</Text>
        </Text>
      </Text>
      <View style={[styles.navtab, styles.tabLayout]}>
        <View style={[styles.tab, styles.tabLayout]} />
        <View style={[styles.home, styles.homeLayout]}>
          <Icon style={[styles.icon, styles.iconLayout]} />
        </View>
        <Add style={styles.addIcon} width={43} height={39} />
        <View style={[styles.calendar, styles.homeLayout]}>
          <Icon1 style={[styles.icon, styles.iconLayout]} />
        </View>
        <View style={[styles.user, styles.homeLayout]}>
          <Icon2 style={[styles.icon2, styles.iconLayout]} />
        </View>
        <Text style={[styles.inicio, styles.inicioFlexBox]}>Inicio</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  timeFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  tuPerfilLayout: {
    width: 296,
    color: Color.colorDarkslateblue,
  },
  inicioFlexBox: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  tabLayout: {
    height: 79,
    width: 402,
    left: 0,
    position: "absolute",
  },
  homeLayout: {
    height: 35,
    width: 37,
    top: 7,
    overflow: "hidden",
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  dynamicIslandSpacer: {
    width: 124,
    height: 10,
    justifyContent: "center",
    alignItems: "center",
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
    width: 1,
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
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
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  frame: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    gap: Gap.gap_0,
    alignItems: "center",
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
    left: 0,
    top: 0,
    position: "absolute",
    height: 874,
  },
  estticaBeauty: {
    fontSize: FontSize.size_13xl,
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
  header: {
    top: 54,
    width: 362,
    height: 90,
    left: 20,
    position: "absolute",
  },
  tu: {
    fontFamily: FontFamily.poppinsRegular,
  },
  perfilTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  tuPerfilTxtContainer: {
    width: "100%",
  },
  tuPerfil: {
    top: 144,
    fontSize: FontSize.size_9xl,
    lineHeight: 40,
    textAlign: "left",
    height: 82,
    width: 296,
    color: Color.colorDarkslateblue,
    left: 20,
  },
  tab: {
    top: 79,
    borderTopLeftRadius: Border.br_41xl,
    borderTopRightRadius: Border.br_41xl,
    backgroundColor: Color.colorThistle_100,
  },
  icon: {
    height: "83.43%",
    width: "75.14%",
    top: "8.29%",
    right: "12.43%",
    bottom: "8.29%",
    left: "12.43%",
  },
  home: {
    left: 25,
  },
  addIcon: {
    top: 2,
    left: 101,
    position: "absolute",
  },
  calendar: {
    left: 183,
  },
  icon2: {
    height: "75.14%",
    width: "66.76%",
    top: "12.57%",
    right: "16.49%",
    bottom: "12.29%",
    left: "16.76%",
  },
  user: {
    left: 342,
  },
  inicio: {
    top: 44,
    left: 17,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    width: 53,
    height: 15,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 90,
    textAlign: "center",
    justifyContent: "center",
  },
  navtab: {
    top: 795,
  },
  perfill: {
    height: 874,
    width: "100%",
    flex: 1,
  },
});

export default Perfill;
