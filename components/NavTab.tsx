import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Icon from "../assets/icon.svg";
import Add from "../assets/add.svg";
import Icon1 from "../assets/icon1.svg";
import Icon4 from "../assets/icon4.svg";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const NavTab = () => {
  return (
    <View style={[styles.navtab, styles.tabPosition]}>
      <View style={[styles.tab, styles.tabPosition]} />
      <View style={[styles.home, styles.homeLayout]}>
        <Icon style={[styles.icon, styles.iconLayout]} />
      </View>
      <Add style={styles.addIcon} width={43} height={39} />
      <View style={[styles.calendar, styles.homeLayout]}>
        <Icon1 style={[styles.icon, styles.iconLayout]} />
      </View>
      <View style={[styles.user, styles.homeLayout]}>
        <Icon4 style={[styles.icon2, styles.iconLayout]} />
      </View>
      <Text style={[styles.inicio, styles.inicioTypo]}>Inicio</Text>
      <Text style={[styles.registrar, styles.citasTypo]}>{`Registrar `}</Text>
      <Text style={[styles.citas, styles.citasTypo]}>Citas</Text>
      <Text style={[styles.perfil, styles.citasTypo]}>Perfil</Text>
      <Text style={[styles.inventario, styles.inicioTypo]}>Inventario</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabPosition: {
    width: 420,
    left: 0,
    position: "absolute",
  },
  homeLayout: {
    overflow: "hidden",
    height: 35,
    width: 37,
    top: 5,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  inicioTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 90,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  citasTypo: {
    width: 62,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 90,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  tab: {
    top: 80,
    borderTopLeftRadius: Border.br_41xl,
    borderTopRightRadius: Border.br_41xl,
    backgroundColor: Color.colorThistle_100,
    height: 79,
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
    top: 0,
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
    left: 17,
    width: 53,
    color: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 90,
    fontSize: FontSize.size_xs,
    top: 4,
  },
  registrar: {
    top: 1,
    left: 91,
  },
  citas: {
    left: 170,
    top: 4,
    width: 62,
  },
  perfil: {
    left: 329,
    top: 4,
    width: 62,
  },
  inventario: {
    top: 3,
    left: 254,
    color: Color.colorDarkslateblue,
    width: 64,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 90,
    fontSize: FontSize.size_xs,
  },
  navtab: {
    top: 797,
    height: 94,
  },
});

export default NavTab;
