import * as React from "react";
import { ImageSourcePropType, ImageStyle } from "react-native";
import {
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import styles from "./AppleHeader.style";

interface IProps {
  dateTitle: string;
  largeTitle: string;
  onPress: () => void;
  imageSource: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  avatarStyle?: StyleProp<ImageStyle>;
  dateTitleTextStyle?: StyleProp<TextStyle>;
  largeTitleTextStyle?: StyleProp<TextStyle>;
}

const AppleHeader: React.FC<IProps> = ({
  style,
  dateTitleTextStyle,
  largeTitleTextStyle,
  onPress,
  dateTitle,
  largeTitle,
  avatarStyle,
  imageSource,
  ...rest
}) => {
  return (
    <View style={[styles.container, style]}>
      <View>
        <Text style={[styles.dateTitleTextStyle, dateTitleTextStyle]}>
          {dateTitle}
        </Text>
        <Text style={[styles.largeTitleTextStyle, largeTitleTextStyle]}>
          {largeTitle}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.avatarContainerStyle}
        {...rest}
        onPress={onPress}
      >
        <Image
          style={[styles.avatar, avatarStyle]}
          {...rest}
          source={imageSource}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AppleHeader;
