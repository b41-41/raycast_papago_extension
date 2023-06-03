import qs from "qs";
import { apiInstance } from "../api/axios";
import { Query } from "../types";

type Props = {};

const useGetDetectLangs = (props: Props) => {
  const getDetectLangs = async (query: Query) => {
    try {
      apiInstance.post("/detectLangs", qs.stringify({ query: query })).then((res) => {
        return res?.data?.langCode || "en";
      });
    } catch (e) {
      console.error("getDetectLangs::", e);
    }

    return getDetectLangs;
  };
};

export default useGetDetectLangs;
