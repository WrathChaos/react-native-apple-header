import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import AppleHeader from "react-native-apple-header";
// ? Assets
const profileImageSource =
  "https://images.unsplash.com/photo-1504730030853-eff311f57d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AppleHeader
          imageSource={{
            uri: profileImageSource,
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
