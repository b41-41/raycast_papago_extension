export interface Preferences {
  lang1: string;
  lang2: string;
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

export type Query = string;
