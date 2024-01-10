import { Image, View } from "native-base";
import * as React from "react";
import createStyle from "./SocialAuthenticateWrapper.style";
import googlePNG from "../../../assets/social/google.png";
import facebookPNG from "../../../assets/social/facebook.png";
import applePNG from "../../../assets/social/apple.png";
import { COLORS } from "@shared-constants";
import { Pressable } from "react-native";
import {
  handleConfigurationFirebaseGoogleAuth,
  handleLoginWithGoogleFirebase,
} from "@services/firebase/firebase";
import { useUserStore } from "stores/client/userStore";
import { useToastWrapper } from "hooks/toast/useToastWrapper";
const SocialAuthenticateWrapper = () => {
  const styles = React.useMemo(() => createStyle(), []);
  const { setUser, setIsLogin } = useUserStore();
  const { showToast } = useToastWrapper();
  React.useEffect(() => {
    handleConfigurationFirebaseGoogleAuth();
  }, []);

  const renderSocialLoginButtons = () => {
    const data = [
      {
        uri: googlePNG,
        alt: "google",
      },
      {
        uri: facebookPNG,
        alt: "facebook",
      },
      {
        uri: applePNG,
        alt: "apple",
      },
    ];

    return data.map(({ uri, alt }, i) => (
      <Pressable
        key={i}
        onPress={() =>
          handleLoginWithGoogleFirebase({ showToast, setUser, setIsLogin })
        }
      >
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: COLORS.DISABLE,
            borderRadius: 50,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            alt={alt}
            width={4}
            height={4}
            resizeMode="contain"
            source={uri}
          />
        </View>
      </Pressable>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsWrapper}>{renderSocialLoginButtons()}</View>
    </View>
  );
};
export default SocialAuthenticateWrapper;
