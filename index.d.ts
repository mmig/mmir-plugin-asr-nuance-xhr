
export * from './config';

/// <reference types="mmir-lib" />
import { ASROnStatus, ASROnError, ASRMode } from 'mmir-lib';
import { PluginMediaManager as MediaManagerWebInput, ASREncoderOptions } from 'mmir-plugin-encoder-core';

declare type NuanceASRMode = /* custom Nuance-specific: */ 'DTV-Search';

declare interface PluginASROptions extends ASREncoderOptions {
  /**
   * [supported option]
   * set language/country for ASR
   */
  language?: string;
  /**
   * [supported option]
   * number of n-best results that should (max.) be returned
   * @type integer of [1, 10]
   */
  results?: number;
  /**
   * [supported option]
   * set recognition mode
   */
  mode?: ASRMode & NuanceASRMode;

  /**
   * custom option: credentials app-key (must be set via configuration or via options)
   */
  appKey?: string;
  /**
   * custom option: credentials app-id (must be set via configuration or via options)
   */
  appId?: string;
  /**
   * custom option: a persistent user pseudonym (should not be traceable/enable reverse-lookup of user); must be URI-encoded/conformant (e.g. user encodeURIComponent())
   */
  userId?: string;
  /**
   * custom option:
   * Indicates the source of the audio recording.
   * Properly specifying this header improves recognition accuracy.
   * Nuance encourages you to pass this header whenever you can -- and as accurately as possible.
   */
  source?: 'SpeakerAndMicrophone' | 'HeadsetInOut' | 'HeadsetBT' | 'HeadPhone' | 'LineOut';
  // codec: 'amr' | 'wav' NOT SUPPORTED via options
}

declare interface PluginMediaManager extends MediaManagerWebInput {
  recognize: (options?: PluginASROptions, statusCallback?: ASROnStatus, failureCallback?: ASROnError, isIntermediateResults?: boolean) => void;
  startRecord: (options?: PluginASROptions, successCallback?: ASROnStatus, failureCallback?: ASROnError, intermediateResults?: boolean) => void;
  stopRecord: (options?: PluginASROptions, successCallback?: ASROnStatus, failureCallback?: ASROnError) => void;
}
