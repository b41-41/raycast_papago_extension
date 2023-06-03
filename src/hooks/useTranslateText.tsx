import qs from "qs";

import { Toast, getPreferenceValues, showToast } from "@raycast/api";
import { Preferences, Query } from "../types";
import { apiInstance } from "../api/axios";

type Props = {};

const preferences = getPreferenceValues<Preferences>();

const useTranslateText = (props: Props) => {
  const { source, target } = preferences;

  const translateText = async (text: Query) => {
    try {
      apiInstance
        .post(
          "/n2mt",
          qs.stringify({
            text,
            source,
            target,
          })
        )
        .then((res) => {
          return res.data.message.result.translatedText;
        });
    } catch (e: any) {
      showToast(Toast.Style.Failure, "Could not translate", e);
    }
  };

  return translateText;
};

export default useTranslateText;
