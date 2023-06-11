import qs from "qs";
import { Toast, getPreferenceValues, showToast } from "@raycast/api";
import { Preferences, SearchText } from "../types";
import { apiInstance } from "../api/axios";
import useGetDetectLangs from "./useGetDetectLangs";
import { useState } from "react";
import debounce from "lodash/debounce";

const preferences = getPreferenceValues<Preferences>();

const useTranslateText = () => {
  const getDetectLangs = useGetDetectLangs();
  const { source: userSelectSource, target } = preferences;

  const debouncedTranslate = debounce(async (text, resolve, reject) => {
    const detectLang = () => {
      if (userSelectSource === "auto") {
        // return getDetectLangs(text);
        return "en";
      } else {
        return userSelectSource;
      }
    };

    try {
      const response = await apiInstance.post(
        "/n2mt",
        qs.stringify({
          text,
          source: detectLang(),
          target,
        })
      );

      const result = (response?.data?.message?.result?.translatedText as string) || "";
      resolve(result);
    } catch (e: any) {
      showToast(Toast.Style.Failure, "Could not translate", e);
      reject(e);
    }
  }, 300);

  const translateText = (text: SearchText) => {
    return new Promise<string>((resolve, reject) => {
      debouncedTranslate(text, resolve, reject);
    });
  };

  return translateText;
};

export default useTranslateText;
