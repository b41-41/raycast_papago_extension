import qs from "qs";
import { apiInstance } from "../api/axios";
import { SearchText } from "../types";
import { Toast, showToast } from "@raycast/api";

const useGetDetectLangs = () => {
  const getDetectLangs = async (searchText: SearchText) => {
    try {
      const res = await apiInstance.post("/detectLangs", qs.stringify({ query: searchText }));
      return (res?.data?.langCode as string) || "en";
    } catch (e: any) {
      showToast(Toast.Style.Failure, "Could not detect the language", e);
    }
  };
  return getDetectLangs;
};

export default useGetDetectLangs;
