import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Cellularconnection from "../assets/cellular-connection.svg";
import Wifi from "../assets/wifi.svg";
import Cap from "../assets/cap.svg";
import Notifications3 from "../assets/notifications3.svg";
import NavTab from "../components/NavTab";
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

const Inventario = () => {
  return (
    <SafeAreaView style={styles.inventario}>
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
          source={require("../assets/iphone-16-pro--black-titanium--portrait1.png")}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.estticaBeauty}>Estética Beauty</Text>
        <Notifications3
          style={styles.notificationsIcon}
          width={48}
          height={44}
        />
      </View>
      <Text style={[styles.gestionarInventario, styles.inventarioFlexBox]}>
        <Text style={styles.gestionarInventarioTxtContainer}>
          <Text style={styles.gestionar}>{`Gestionar `}</Text>
          <Text style={styles.inventario1}>Inventario</Text>
        </Text>
      </Text>
      <Image
        style={[styles.imageIcon, styles.imageIconLayout]}
        contentFit="cover"
        source={require("../assets/image3.png")}
      />
      <Text style={[styles.cera, styles.ceraTypo]}>Cera</Text>
      <Image
        style={[styles.imageIcon1, styles.imageIconLayout]}
        contentFit="cover"
        source={require("../assets/image4.png")}
      />
      <Text style={[styles.acondicionador, styles.ceraTypo]}>
        Acondicionador
      </Text>
      <Image
        style={[styles.imageIcon2, styles.imageIconLayout]}
        contentFit="cover"
        source={require("../assets/image5.png")}
      />
      <Text style={[styles.tintes, styles.ceraTypo]}>Tintes</Text>
      <Image
        style={[styles.imageIcon, styles.imageIconLayout]}
        contentFit="cover"
        source={require("../assets/image6.png")}
      />
      <Image
        style={[styles.imageIcon1, styles.imageIconLayout]}
        contentFit="cover"
        source={require("../assets/image7.png")}
      />
      <Image
        style={[styles.imageIcon2, styles.imageIconLayout]}
        contentFit="cover"
        source={require("../assets/image8.png")}
      />
      <Text style={[styles.shampoo, styles.gelTypo]}>Shampoo</Text>
      <Image
        style={[styles.imageIcon6, styles.imageIconPosition]}
        contentFit="cover"
        source={require("../assets/image3.png")}
      />
      <Text style={[styles.cremaCapilar, styles.gelTypo]}>Crema capilar</Text>
      <Image
        style={[styles.imageIcon7, styles.imageIconPosition]}
        contentFit="cover"
        source={require("../assets/image4.png")}
      />
      <Text style={[styles.gel, styles.gelTypo]}>Gel</Text>
      <Image
        style={[styles.imageIcon8, styles.imageIconPosition]}
        contentFit="cover"
        source={require("../assets/image5.png")}
      />
      <Text style={[styles.shampoo, styles.gelTypo]}>Shampoo</Text>
      <Image
        style={[styles.imageIcon6, styles.imageIconPosition]}
        contentFit="cover"
        source={require("../assets/image9.png")}
      />
      <Text style={[styles.cremaCapilar, styles.gelTypo]}>Crema capilar</Text>
      <Image
        style={[styles.imageIcon7, styles.imageIconPosition]}
        contentFit="cover"
        source={require("../assets/image10.png")}
      />
      <Text style={[styles.gel, styles.gelTypo]}>Gel</Text>
      <Image
        style={[styles.imageIcon8, styles.imageIconPosition]}
        contentFit="cover"
        source={require("../assets/image11.png")}
      />
      <Text
        style={[styles.todoElInventarioContainer, styles.inventarioFlexBox]}
      >
        <Text style={styles.gestionarInventarioTxtContainer}>
          <Text style={styles.gestionar}>{`Todo el `}</Text>
          <Text style={styles.inventario1}>inventario</Text>
        </Text>
      </Text>
      <NavTab />
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
  inventarioFlexBox: {
    display: "flex",
    textAlign: "left",
    lineHeight: 40,
    color: Color.colorDarkslateblue,
    alignItems: "center",
    position: "absolute",
  },
  imageIconLayout: {
    height: 93,
    width: 94,
    top: 573,
    position: "absolute",
  },
  ceraTypo: {
    height: 24,
    fontSize: FontSize.size_sm,
    top: 679,
    fontFamily: FontFamily.poppinsRegular,
    display: "flex",
    lineHeight: 40,
    color: Color.colorDarkslateblue,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  gelTypo: {
    top: 835,
    height: 24,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    display: "flex",
    lineHeight: 40,
    color: Color.colorDarkslateblue,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  imageIconPosition: {
    top: 729,
    height: 93,
    width: 94,
    position: "absolute",
  },
  time1: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFPro,
    color: Color.colorBlack,
    width: 37,
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
  estticaBeauty: {
    fontSize: FontSize.size_13xl,
    lineHeight: 90,
    width: 296,
    color: Color.colorDarkslateblue,
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
    width: 362,
    height: 90,
    left: 20,
    position: "absolute",
  },
  gestionar: {
    fontFamily: FontFamily.poppinsRegular,
  },
  inventario1: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  gestionarInventarioTxtContainer: {
    width: "100%",
  },
  gestionarInventario: {
    top: 165,
    fontSize: FontSize.size_9xl,
    width: 296,
    left: 20,
  },
  imageIcon: {
    left: 46,
  },
  cera: {
    left: 253,
    width: 113,
  },
  imageIcon1: {
    left: 263,
  },
  acondicionador: {
    left: 145,
    width: 112,
  },
  imageIcon2: {
    left: 154,
  },
  tintes: {
    left: 37,
    width: 113,
  },
  shampoo: {
    left: 36,
    width: 113,
  },
  imageIcon6: {
    left: 45,
  },
  cremaCapilar: {
    left: 252,
    width: 113,
  },
  imageIcon7: {
    left: 262,
  },
  gel: {
    left: 144,
    width: 112,
  },
  imageIcon8: {
    left: 153,
  },
  todoElInventarioContainer: {
    top: 490,
    left: 22,
    fontSize: FontSize.size_5xl,
    width: 267,
    height: 69,
  },
  inventario: {
    height: 874,
    width: "100%",
    flex: 1,
  },
});

export default Inventario;
