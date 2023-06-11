export interface Preferences {
  source: string;
  target: string;
  clientId: string;
  clientSecret: string;
}

export interface DetectLangsResponse {
  langCode: string;
}

export interface N2MTResponse {
  message: {
    result: {
      srcLangType: string;
      tarLangType: string;
      translatedText: string;
    };
  };
}

export type SearchText = string;
