import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Notifications4 from "../assets/notifications4.svg";
import Header from "../assets/header.svg";
import Icon from "../assets/icon.svg";
import Add from "../assets/add.svg";
import Icon5 from "../assets/icon5.svg";
import Icon4 from "../assets/icon4.svg";
import Icon6 from "../assets/icon6.svg";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const Group = () => {
  return (
    <SafeAreaView style={styles.backgroundParent}>
      <View style={styles.background} />
      <View style={styles.header}>
        <Text style={styles.estticaBeauty}>Estética Beauty</Text>
        <Notifications4
          style={styles.notificationsIcon}
          width={48}
          height={44}
        />
      </View>
      <Text style={[styles.prximasCitas, styles.citasContainerLayout]}>
        <Text style={styles.prximasCitasTxtContainer}>
          <Text style={styles.prximas}>{`Próximas `}</Text>
          <Text style={styles.citas}>Citas</Text>
        </Text>
      </Text>
      <Text style={[styles.citasParaLaContainer, styles.citasContainerLayout]}>
        <Text style={styles.prximasCitasTxtContainer}>
          <Text style={styles.prximas}>{`Citas para la `}</Text>
          <Text style={styles.citas}>siguiente semana</Text>
        </Text>
      </Text>
      <View style={styles.groupChild} />
      <View style={[styles.groupItem, styles.groupChildLayout2]} />
      <Text
        style={[styles.confirmarCitaVia, styles.informacinTypo1]}
      >{`Confirmar cita 
via WhatsApp`}</Text>
      <View style={[styles.groupInner, styles.groupLayout]} />
      <Text style={styles.nombreDelUsuario}>{`Nombre del usuario
0:00
31/12/2025`}</Text>
      <Text
        style={[styles.nombreDelUsuario1, styles.nombreLayout1]}
      >{`Nombre del usuario
0:00
31/12/2025`}</Text>
      <View style={[styles.rectangleView, styles.groupLayout]} />
      <Text
        style={[styles.nombreDelUsuario2, styles.nombreLayout1]}
      >{`Nombre del usuario
0:00
31/12/2025`}</Text>
      <View style={[styles.groupChild1, styles.groupLayout]} />
      <Text
        style={[styles.nombreDelUsuario3, styles.nombreLayout1]}
      >{`Nombre del usuario
0:00
31/12/2025`}</Text>
      <Header style={styles.headerIcon} width={48} height={44} />
      <Text
        style={[
          styles.revisarCalendarioManualmenteContainer,
          styles.citasContainerLayout,
        ]}
      >
        <Text style={styles.prximasCitasTxtContainer}>
          <Text style={styles.prximas}>{`Revisar calendario `}</Text>
          <Text style={styles.citas}>manualmente</Text>
        </Text>
      </Text>
      <View style={styles.groupChild2} />
      <Text style={styles.irACalendario}>Ir a calendario</Text>
      <View style={[styles.groupChild3, styles.groupChildLayout1]} />
      <View style={[styles.groupChild4, styles.groupChildLayout]} />
      <Text
        style={[styles.nombreDelUsuario4, styles.nombreLayout]}
      >{`Nombre del usuario
0:00
31/12/2025`}</Text>
      <Text style={[styles.msInformacin, styles.informacinTypo]}>
        Más información
      </Text>
      <View style={[styles.groupChild5, styles.groupChildLayout1]} />
      <View style={[styles.groupChild6, styles.groupChildLayout]} />
      <Text
        style={[styles.nombreDelUsuario5, styles.nombreLayout]}
      >{`Nombre del usuario
0:00
31/12/2025`}</Text>
      <Text style={[styles.msInformacin1, styles.informacinTypo]}>
        Más información
      </Text>
      <View style={[styles.groupChild7, styles.groupChildLayout1]} />
      <View style={[styles.groupChild8, styles.groupChildLayout]} />
      <Text
        style={[styles.nombreDelUsuario6, styles.nombreLayout]}
      >{`Nombre del usuario
0:00
31/12/2025`}</Text>
      <Text style={[styles.msInformacin2, styles.informacinTypo]}>
        Más información
      </Text>
      <View style={[styles.groupChild9, styles.groupChildLayout2]} />
      <Text style={[styles.msInformacin3, styles.informacinTypo1]}>
        Más información
      </Text>
      <View style={[styles.groupChild10, styles.groupChildLayout]} />
      <Text style={[styles.msInformacin4, styles.informacinTypo]}>
        Más información
      </Text>
      <View style={[styles.groupChild11, styles.groupChildLayout2]} />
      <Text style={[styles.msInformacin5, styles.informacinTypo1]}>
        Más información
      </Text>
      <View style={[styles.navtab, styles.tabLayout]}>
        <View style={[styles.tab, styles.tabLayout]} />
        <View style={[styles.home, styles.homeLayout]}>
          <Icon style={[styles.icon, styles.iconLayout]} />
        </View>
        <Add style={styles.addIcon} width={43} height={39} />
        <View style={[styles.calendar, styles.homeLayout]}>
          <Icon5 style={[styles.icon, styles.iconLayout]} />
        </View>
        <View style={[styles.user, styles.homeLayout]}>
          <Icon4 style={[styles.icon2, styles.iconLayout]} />
        </View>
        <Text style={styles.inicio}>Inicio</Text>
      </View>
      <Text style={styles.registrar}>{`Registrar `}</Text>
      <Text style={[styles.citas1, styles.citas1Typo]}>Citas</Text>
      <Icon6 style={[styles.icon3, styles.iconLayout]} />
      <Text style={styles.inventario}>Inventario</Text>
      <Text style={[styles.perfil, styles.citas1Typo]}>Perfil</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  citasContainerLayout: {
    height: 69,
    width: 267,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_9xl,
    lineHeight: 40,
    color: Color.colorDarkslateblue,
    left: 18,
    position: "absolute",
  },
  groupChildLayout2: {
    height: 43,
    width: 137,
    left: 219,
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_61xl,
    position: "absolute",
  },
  informacinTypo1: {
    height: 33,
    width: 126,
    justifyContent: "center",
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    left: 225,
    color: Color.colorWhite,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupLayout: {
    height: 77,
    width: 330,
    backgroundColor: Color.colorThistle_200,
    borderRadius: Border.br_xl,
    left: 34,
    position: "absolute",
  },
  nombreLayout1: {
    width: 249,
    lineHeight: 25,
    fontSize: FontSize.size_base,
    left: 60,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    height: 69,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout1: {
    left: 28,
    height: 77,
    width: 330,
    backgroundColor: Color.colorThistle_200,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  groupChildLayout: {
    left: 210,
    height: 43,
    width: 137,
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_61xl,
    position: "absolute",
  },
  nombreLayout: {
    left: 54,
    width: 249,
    lineHeight: 25,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    height: 69,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  informacinTypo: {
    left: 216,
    height: 33,
    width: 126,
    justifyContent: "center",
    color: Color.colorWhite,
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  citas1Typo: {
    top: 1535,
    width: 62,
    height: 15,
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 90,
    position: "absolute",
  },
  background: {
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorWhite,
    width: 402,
    left: 0,
    top: 0,
    position: "absolute",
    height: 1569,
  },
  estticaBeauty: {
    fontSize: FontSize.size_13xl,
    width: 296,
    textAlign: "center",
    lineHeight: 90,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
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
    top: 81,
    width: 362,
    height: 90,
    left: 18,
    position: "absolute",
  },
  prximas: {
    fontFamily: FontFamily.poppinsRegular,
  },
  citas: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  prximasCitasTxtContainer: {
    width: "100%",
  },
  prximasCitas: {
    top: 171,
  },
  citasParaLaContainer: {
    top: 604,
  },
  groupChild: {
    top: 257,
    height: 109,
    width: 330,
    backgroundColor: Color.colorThistle_200,
    borderRadius: Border.br_xl,
    left: 34,
    position: "absolute",
  },
  groupItem: {
    top: 314,
  },
  confirmarCitaVia: {
    top: 319,
  },
  groupInner: {
    top: 394,
  },
  nombreDelUsuario: {
    top: 262,
    fontSize: FontSize.size_xl,
    lineHeight: 33,
    width: 218,
    height: 100,
    left: 60,
    color: Color.colorWhite,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  nombreDelUsuario1: {
    top: 398,
  },
  rectangleView: {
    top: 499,
  },
  nombreDelUsuario2: {
    top: 503,
  },
  groupChild1: {
    top: 710,
  },
  nombreDelUsuario3: {
    top: 714,
  },
  headerIcon: {
    top: 810,
    left: 334,
    position: "absolute",
  },
  revisarCalendarioManualmenteContainer: {
    top: 1247,
  },
  groupChild2: {
    top: 1360,
    left: 87,
    width: 228,
    height: 58,
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_61xl,
    position: "absolute",
  },
  irACalendario: {
    top: 1369,
    left: 144,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    lineHeight: 40,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild3: {
    top: 854,
  },
  groupChild4: {
    top: 880,
  },
  nombreDelUsuario4: {
    top: 858,
  },
  msInformacin: {
    top: 885,
  },
  groupChild5: {
    top: 1082,
  },
  groupChild6: {
    top: 1108,
  },
  nombreDelUsuario5: {
    top: 1086,
  },
  msInformacin1: {
    top: 1113,
  },
  groupChild7: {
    top: 966,
  },
  groupChild8: {
    top: 992,
  },
  nombreDelUsuario6: {
    top: 970,
  },
  msInformacin2: {
    top: 997,
  },
  groupChild9: {
    top: 420,
  },
  msInformacin3: {
    top: 425,
  },
  groupChild10: {
    top: 736,
  },
  msInformacin4: {
    top: 741,
  },
  groupChild11: {
    top: 527,
  },
  msInformacin5: {
    top: 532,
  },
  tab: {
    borderTopLeftRadius: Border.br_41xl,
    borderTopRightRadius: Border.br_41xl,
    backgroundColor: Color.colorThistle_100,
    top: 0,
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
    width: 53,
    height: 15,
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    color: Color.colorWhite,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 90,
    position: "absolute",
  },
  navtab: {
    top: 1490,
  },
  registrar: {
    top: 1534,
    left: 92,
    width: 62,
    height: 15,
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    color: Color.colorWhite,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 90,
    position: "absolute",
  },
  citas1: {
    left: 171,
    color: Color.colorDarkslateblue,
    top: 1535,
  },
  icon3: {
    height: "1.87%",
    width: "6.92%",
    top: "95.67%",
    right: "27.16%",
    bottom: "2.47%",
    left: "65.92%",
  },
  inventario: {
    top: 1537,
    left: 247,
    width: 64,
    height: 12,
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    color: Color.colorWhite,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 90,
    position: "absolute",
  },
  perfil: {
    left: 330,
    color: Color.colorWhite,
  },
  backgroundParent: {
    flex: 1,
    height: 1569,
    width: "100%",
  },
});

export default Group;
