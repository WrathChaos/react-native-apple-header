import { ViewStyle, ImageStyle, StyleSheet, Platform } from "react-native";

interface Style {
  avatar: ImageStyle;
  avatarContainerStyle: ViewStyle;
}

export const container = (backgroundColor: string, borderColor: string) => {
  return {
    borderColor,
    backgroundColor,
    paddingBottom: 8,
    flexDirection: "row",
    marginHorizontal: 16,
    borderBottomWidth: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
  };
};

export const _dateTitleStyle = (
  fontColor: string,
  fontSize: number | string,
  fontWeight: string | number,
) => {
  return {
    fontSize,
    fontWeight,
    lineHeight: 18,
    color: fontColor,
    letterSpacing: Platform.OS === "ios" ? -0.08 : undefined,
  };
};

export const _largeTitleStyle = (
  fontColor: string,
  fontSize: number | string,
  fontWeight: number | string,
) => {
  return {
    fontSize,
    fontWeight,
    lineHeight: 41,
    color: fontColor,
    letterSpacing: Platform.OS === "ios" ? 0.41 : undefined,
  };
};

export default StyleSheet.create<Style>({
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
