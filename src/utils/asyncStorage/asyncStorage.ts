import AsyncStorage from "@react-native-async-storage/async-storage";

export class AsyncStorageHandler {
  public static async set({ key, value }: { key: string; value: string }) {
    try {
      await AsyncStorage.setItem(key, value);
      console.log("async storage set success");
      return true;
    } catch (err) {
      console.log("async storage set fail:::", err);
      return false;
    }
  }
  public static async get({ key }: { key: string }) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue;
    } catch (err) {
      return false;
    }
  }
}
