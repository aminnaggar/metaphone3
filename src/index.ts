import { Metaphone3 } from './metaphone3';

const m3 = new Metaphone3();

export type Metaphone3Config = {
  encodeExact?: boolean;
  encodeVowels?: boolean;
};

/**
 * Takes in a word and returns the primary and alternate metaphone3 encodings
 *
 * @param word The word to encode
 * @param config The configuration options
 * @returns The primary and alternate metaphone3 encodings in that order
 */
export function metaphone3(
  word: string,
  config?: Metaphone3Config,
): [primary: string, alternate?: string] {
  const { encodeVowels = false, encodeExact = false } = config ?? {};

  m3.SetEncodeExact(encodeExact);
  m3.SetEncodeVowels(encodeVowels);
  m3.SetWord(word);
  m3.Encode();

  const alternate = m3.GetAlternateMetaph();
  return [m3.GetMetaph(), alternate.length === 0 ? undefined : alternate];
}
