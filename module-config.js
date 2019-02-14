
// <loaded implementation>getPluginName():
//  * encoder: "amr" (via mmir-plugin-encoder-core) TODO (re-enable) "wav", (enable) "speex"
//  * appId: credentials application ID
//  * appKey: credentials application key
//  * userId: OPTIONAL a persistent user pseudonym (should not be traceable/enable reverse-lookup of user); must be URI-encoded/conformant (e.g. user encodeURIComponent())
//  * results: OPTIONAL integer of [1, 10], the n-best results
//  * mode: OPTIONAL 'search' | 'dictation' | 'DTV-Search'
//  * source: OPTIONAL 'SpeakerAndMicrophone' | 'HeadsetInOut' | 'HeadsetBT' | 'HeadPhone' | 'LineOut'
//
//  * rate: TODO NOT IMPLEMENTED for encoder (if supported by encoder): "wav": [8000 | 16000 | 22000], "speex": [8000 | "nw" | 11025 | "sw" | 16000 | "wb"]
//  * baseUrl: (TODO?) NOT IMPLEMENTED / CONFIGURABLE (using const "https://dictation.nuancemobility.net/NMDPAsrCmdServlet/dictation")

modules.export = {
  pluginName: 'asrNuanceXhr',
  remoteUrl: ['https://dictation.nuancemobility.net'],
  // remoteUrlConfig: 'baseUrl' //field in configuration that specifies a remote URL/domain that is accessed
};
