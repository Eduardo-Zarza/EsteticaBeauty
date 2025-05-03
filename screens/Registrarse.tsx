import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Cellularconnection from "../assets/cellular-connection.svg";
import Wifi from "../assets/wifi.svg";
import Cap from "../assets/cap.svg";
import Notifications2 from "../assets/notifications2.svg";
import Polygon1 from "../assets/polygon-1.svg";
import Icon3 from "../assets/icon3.svg";
import Add from "../assets/add.svg";
import Icon1 from "../assets/icon1.svg";
import Icon4 from "../assets/icon4.svg";
import {
  Color,
  Border,
  FontSize,
  FontFamily,
  Padding,
  Gap,
} from "../GlobalStyles";

const Registrarse = () => {
  return (
    <SafeAreaView style={styles.registrarse}>
      <View style={styles.statusBar}>
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
              <View style={styles.border} />
              <Cap style={styles.capIcon} />
              <View style={styles.capacity} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bezel}>
        <Image
          style={styles.iphone16ProBlackTitanium}
          contentFit="cover"
          source={require("../assets/iphone-16-pro--black-titanium--portrait.png")}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.estticaBeauty}>Estética Beauty</Text>
        <Notifications2
          style={styles.notificationsIcon}
          width={48}
          height={44}
        />
      </View>
      <View style={[styles.registrarseChild, styles.registrarseChildLayout]} />
      <Text style={styles.nuevaCita}>
        <Text style={styles.nuevaCitaTxtContainer}>
          <Text style={styles.nueva}>Nueva</Text>
          <Text style={styles.cita}> Cita</Text>
        </Text>
      </Text>
      <Text style={[styles.nombreDelCliente, styles.fechaDeLaTypo]}>
        Nombre del cliente...
      </Text>
      <View style={[styles.registrarseItem, styles.registrarseChildLayout]} />
      <View style={[styles.registrarseItem, styles.registrarseChildLayout]} />
      <Text style={[styles.nmeroCelular, styles.fechaDeLaTypo]}>
        Número celular...
      </Text>
      <View style={[styles.rectangleView, styles.registrarseChildLayout]} />
      <View style={[styles.rectangleView, styles.registrarseChildLayout]} />
      <Text style={[styles.tipoDeServicio, styles.fechaDeLaTypo]}>
        Tipo de servicio
      </Text>
      <Polygon1
        style={[styles.polygonIcon, styles.polygonIconLayout]}
        width={29}
        height={28}
      />
      <View style={[styles.registrarseChild2, styles.registrarseChildLayout]} />
      <View style={[styles.registrarseChild2, styles.registrarseChildLayout]} />
      <Text style={[styles.fechaDeLa, styles.fechaDeLaTypo]}>
        Fecha de la cita
      </Text>
      <View style={[styles.registrarseChild4, styles.registrarseChildLayout]} />
      <View style={[styles.registrarseChild4, styles.registrarseChildLayout]} />
      <Polygon1
        style={[styles.registrarseChild6, styles.polygonIconLayout]}
        width={29}
        height={28}
      />
      <View style={styles.registrarseChild7} />
      <Text style={styles.confirmarCita}>Confirmar cita</Text>
      <View style={[styles.navtab, styles.tabLayout]}>
        <View style={[styles.tab, styles.tabLayout]} />
        <View style={[styles.home, styles.homeLayout]}>
          <Icon3 style={[styles.icon, styles.iconLayout]} />
        </View>
        <Add style={styles.addIcon} width={43} height={39} />
        <View style={[styles.calendar, styles.homeLayout]}>
          <Icon1 style={[styles.icon, styles.iconLayout]} />
        </View>
        <View style={[styles.user, styles.homeLayout]}>
          <Icon4 style={[styles.icon2, styles.iconLayout]} />
        </View>
        <Text style={styles.inicio}>Inicio</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  registrarseChildLayout: {
    height: 65,
    borderWidth: 5,
    borderColor: Color.colorThistle_200,
    borderRadius: Border.br_xl,
    width: 362,
    left: 20,
    borderStyle: "solid",
    position: "absolute",
  },
  fechaDeLaTypo: {
    width: 288,
    color: Color.colorDarkgray,
    fontSize: FontSize.size_xl,
    left: 46,
    height: 41,
    display: "flex",
    textAlign: "left",
    lineHeight: 40,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    alignItems: "center",
    position: "absolute",
  },
  polygonIconLayout: {
    height: 28,
    width: 29,
    left: 329,
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
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
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
    left: "50%",
    position: "absolute",
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
    display: "none",
    left: 0,
    top: 0,
    position: "absolute",
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
    display: "none",
    left: 0,
    top: 0,
    position: "absolute",
    height: 874,
  },
  estticaBeauty: {
    fontSize: FontSize.size_13xl,
    width: 296,
    color: Color.colorDarkslateblue,
    lineHeight: 90,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
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
    height: 90,
    width: 362,
    left: 20,
    position: "absolute",
  },
  registrarseChild: {
    top: 213,
  },
  nueva: {
    fontFamily: FontFamily.poppinsRegular,
  },
  cita: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  nuevaCitaTxtContainer: {
    width: "100%",
  },
  nuevaCita: {
    top: 144,
    fontSize: FontSize.size_9xl,
    width: 267,
    height: 41,
    textAlign: "left",
    display: "flex",
    lineHeight: 40,
    color: Color.colorDarkslateblue,
    left: 20,
    alignItems: "center",
    position: "absolute",
  },
  nombreDelCliente: {
    top: 225,
  },
  registrarseItem: {
    top: 306,
  },
  nmeroCelular: {
    top: 318,
  },
  rectangleView: {
    top: 399,
  },
  tipoDeServicio: {
    top: 411,
  },
  polygonIcon: {
    top: 418,
  },
  registrarseChild2: {
    top: 492,
  },
  fechaDeLa: {
    top: 504,
  },
  registrarseChild4: {
    top: 585,
  },
  registrarseChild6: {
    top: 511,
  },
  registrarseChild7: {
    top: 698,
    left: 87,
    borderRadius: Border.br_61xl,
    backgroundColor: Color.colorDarkslateblue,
    width: 228,
    height: 58,
    position: "absolute",
  },
  confirmarCita: {
    top: 707,
    left: 144,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    lineHeight: 40,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
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
    width: 53,
    height: 15,
    display: "flex",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 90,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  navtab: {
    top: 788,
  },
  registrarse: {
    height: 874,
    flex: 1,
    width: "100%",
  },
});

export default Registrarse;
