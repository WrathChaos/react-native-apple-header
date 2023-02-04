import {
  ViewStyle,
  ImageStyle,
  StyleSheet,
  Platform,
  TextStyle,
} from "react-native";

interface Style {
  container: ViewStyle;
  avatar: ImageStyle;
  dateTitleTextStyle: TextStyle;
  largeTitleTextStyle: TextStyle;
  avatarContainerStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    borderColor: "#EFEFF4",
    paddingBottom: 8,
    flexDirection: "row",
    marginHorizontal: 16,
    borderBottomWidth: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  dateTitleTextStyle: {
    fontSize: 13,
    lineHeight: 18,
    color: "#8E8E93",
    fontWeight: "600",
    letterSpacing: Platform.OS === "ios" ? -0.08 : undefined,
  },
  largeTitleTextStyle: {
    fontSize: 34,
    fontWeight: "bold",
    lineHeight: 41,
    color: "#000",
    letterSpacing: Platform.OS === "ios" ? 0.41 : undefined,
  },
  avatar: {
    height: 43,
    width: 43,
    borderRadius: 43 / 2,
  },
  avatarContainerStyle: {
    alignSelf: "center",
    justifyContent: "center",
  },
});
