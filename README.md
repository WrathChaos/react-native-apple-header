<img alt="React Native Apple Header" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-apple-header)

[![React Native Apple Header](https://img.shields.io/badge/-Fully%20customizable%20Apple%20Header%20View%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-apple-header)

[![npm version](https://img.shields.io/npm/v/react-native-apple-header.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-apple-header)
[![npm](https://img.shields.io/npm/dt/react-native-apple-header.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-apple-header)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Apple Header"
        src="assets/Screenshots/React-Native-Apple-Header.png" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-apple-header
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
```

# Usage

## Import

```jsx
import AppleHeader from "react-native-apple-header";
```

## Fundamental Usage

```jsx
<AppleHeader
  imageSource={{
    uri: profileImageSource,
  }}
/>
```

# Configuration - Props

## AppleHeader Props

| Property             |   Type   |       Default       | Description                                                                           |
| -------------------- | :------: | :-----------------: | ------------------------------------------------------------------------------------- |
| dateTitle            |  string  | MONDAY, 27 NOVEMBER | set your own string instead of date title                                             |
| largeTitle           |  string  |       For You       | set your own large title                                                              |
| imageSource          |  image   |        image        | set your own image                                                                    |
| onPress              | function |        null         | use this to set onPress functionality                                                 |
| backgroundColor      |  color   |     transparent     | use this to change the main container's background color                              |
| borderColor          |  color   |       #EFEFF4       | use this to change the bottom border color                                            |
| dateTitleFontColor   |  color   |       #8E8E93       | use this to change the date title's font color                                        |
| dateTitleFontSize    |  number  |         13          | use this to set the date title's font size                                            |
| dateTitleFontWeight  |  string  |        "600"        | use this to set the date title's font weight                                          |
| largeTitleFontColor  |  color   |    default color    | use this to change the large title's font color                                       |
| largeTitleFontSize   |  number  |         34          | use this to set the large title's font size                                           |
| largeTitleFontWeight |  string  |       "bold"        | use this to set the large title's font weight                                         |
| dateTitleStyle       |  style   |    default style    | use this to set your own style for date title (DO NOT RECOMMENDED!)                   |
| largeTitleStyle      |  style   |    default style    | use this to set your own style for large title (DO NOT RECOMMENDED!)                  |
| containerStyle       |  style   |    default style    | use this to set your own style for whole container (DO NOT RECOMMENDED!)              |
| avatarStyle          |  style   |    default style    | use this to set your own style for avatar style (DO NOT FORGET TO ADD BORDER-RADIUS!) |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Credits

Thank you so much for the image [Unsplash](https://images.unsplash.com/photo-1504730030853-eff311f57d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Apple Header is available under the MIT license. See the LICENSE file for more info.
