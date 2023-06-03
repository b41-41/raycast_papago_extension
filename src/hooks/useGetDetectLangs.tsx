import qs from "qs";
import { apiInstance } from "../api/axios";
import { Query } from "../types";
import { Toast, showToast } from "@raycast/api";

type Props = {};

const useGetDetectLangs = (props: Props) => {
  const getDetectLangs = async (query: Query) => {
    try {
      apiInstance.post("/detectLangs", qs.stringify({ query: query })).then((res) => {
        return res?.data?.langCode || "en";
      });
    } catch (e: any) {
      showToast(Toast.Style.Failure, "Could not detect the language", e);
    }

    return getDetectLangs;
  };
};

export default useGetDetectLangs;
