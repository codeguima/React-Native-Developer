import { StatusBar } from "expo-status-bar";
import React from "react";
import { View} from "react-native";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { styles } from "./Style";
import { BatButton } from "../../components/BatButton/BatButton";


export default function Home() {
  return (
  <View style={styles.appContainer}>
    <View style={styles.logoContainer}>
      <BatLogo />
    </View>
    <View style={styles.inputContainer}>
      <BatButton/>
    </View>
      <StatusBar style="light" />
  </View>
  );
}