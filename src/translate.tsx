import { ActionPanel, getPreferenceValues, List, showToast, Toast, Action } from "@raycast/api";
import { useEffect, useState } from "react";
import useTranslateText from "./hooks/useTranslateText";

const Translate = () => {
  const translateText = useTranslateText();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>("");

  const setTranslateResult = async () => {
    const translateTextResult = await translateText(searchText);
    setTranslatedText(translateTextResult);
    setIsLoading(false);
  };

  useEffect(() => {
    if (searchText === "") {
      return;
    }
    setIsLoading(true);
    setTranslatedText("");

    setTranslateResult();
  }, [searchText]);

  return (
    <List
      searchBarPlaceholder="Type the text to translate"
      onSearchTextChange={setSearchText}
      isLoading={isLoading}
      throttle
    >
      <List.Item
        title={translatedText || "No Result"}
        actions={
          <ActionPanel>
            <Action.CopyToClipboard title="Copy" content={translatedText} />
            <Action.OpenInBrowser title="Open in Browser" url={`https://papago.naver.com/?&st=${searchText}`} />
          </ActionPanel>
        }
      />
    </List>
  );
};

export default Translate;
