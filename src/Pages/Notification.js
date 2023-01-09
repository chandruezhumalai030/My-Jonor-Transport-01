import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "../Components/Header";
import ToggleSwitch from "toggle-switch-react-native";
import { design } from "../config/design.config";
import { colors } from "../config/colors.config";
import { hs, ws } from "../utils/design/measurement.design";

export default class Notification extends Component {
  state = {
    isOnBlueToggleSwitch: false,
    isOnBlueToggleSwitch1: false,
    isOnBlueToggleSwitch2: false,
  };

  onToggle(isOn) {
    console.log("Changed to " + isOn);
  }

  render(props) {
    return (
      <Header
        {...props}
        rightIcon={false}
        isLeftIcon
        title={"Notification Settings"}
        labelStyle={styles.labelStyle}
      >
        <View style={styles.container}>
          <View style={styles.Notification}>
            <View style={styles.Group0}>
              <View style={styles.AutoLayoutVertical2}>
                <View style={styles.AutoLayoutVertical1}>
                  <View style={styles.AutoLayoutVertical}>
                    <View style={styles.AutoLayoutHorizontal}>
                      <Text style={styles.Txt8109}>General</Text>
                      <View style={{marginLeft:ws(200)}}>
                      <ToggleSwitch
                        onColor="#0F437B"
                        isOn={this.state.isOnBlueToggleSwitch}
                        onToggle={(isOnBlueToggleSwitch) => {
                          this.setState({ isOnBlueToggleSwitch });
                          this.onToggle(isOnBlueToggleSwitch);
                        }}
                      />
                      </View>
                      <Image
                        style={styles._speakerIcon}
                        source={require("../assets/Notification/sound.png")}
                        resizeMode={'contain'}
                      />
                    </View>
                    <View style={styles.AutoLayoutHorizontal}>
                      <Text style={styles.Txt8109}>Special Offers & Promo</Text>
                      <ToggleSwitch
                        onColor="#0F437B"
                        isOn={this.state.isOnBlueToggleSwitch1}
                        onToggle={(isOnBlueToggleSwitch1) => {
                          this.setState({ isOnBlueToggleSwitch1 });
                          this.onToggle(isOnBlueToggleSwitch1);
                        }}
                      />
                      <Image
                        style={styles._speakerIcon}
                        source={require("../assets/Notification/sound1.png")}
                        resizeMode={'contain'}
                      />
                    </View>
                    <View style={styles.AutoLayoutHorizontal1}>
                      <Text style={styles.Txt81091}>Payment & Receipt</Text>
                      <ToggleSwitch
                        onColor="#0F437B"
                        isOn={this.state.isOnBlueToggleSwitch2}
                        onToggle={(isOnBlueToggleSwitch2) => {
                          this.setState({ isOnBlueToggleSwitch2 });
                          this.onToggle(isOnBlueToggleSwitch2);
                        }}
                      />
                      <Image
                        style={styles._speakerIcon1}
                        source={require("../assets/Notification/sound1.png")}
                        resizeMode={'contain'}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  Notification: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 589,
    paddingLeft: 0,
    paddingRight: 0,
  },
  Group0: {
    display: "flex",
    flexDirection: "column",
  },
  Group: {
    width: 18,
    height: 10,
    marginRight: 5,
  },
  Group1: {
    width: 15.27,
    height: 10.97,
    marginRight: 6,
  },
  Group2: {
    width: 26.98,
    height: 13,
  },
  AutoLayoutVertical2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 31,
    paddingBottom: 31,
    paddingLeft: 23,
    paddingRight: 23,
    width: 428,
  },
  AutoLayoutVertical1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 380,
  },
  AutoLayoutVertical: {
    marginTop: hs(49),
    marginLeft: ws(24),
    marginRight: ws(24),
    justifyContent: 'center',
  },
  AutoLayoutHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: ws(24),
    marginVertical: hs(20)
  },
  Txt8109: {
    ...design.TEXT[600][18],
    color: colors.C424242_800
  },
  Txt81091: {
    ...design.TEXT[600][18],
    color: colors.C424242_800
  },
  _speakerIcon: {
    width: ws(28),
    height: hs(28),
    position: 'absolute',
    right: -ws(50),
    bottom: hs(0)
  },
  _speakerIcon1: {
    width: ws(28),
    height: hs(28),
    position: 'absolute',
    right: -ws(50),
    bottom: hs(0)
  },
  AutoLayoutHorizontal1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: ws(24),
    marginVertical: hs(20)
  },
  labelStyle: {
    ...design.TEXT[700][24],
    color: colors.C212121
  },
});

