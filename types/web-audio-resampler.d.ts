/**
 * web-audio-resampler
 * 降采样模块
 */
export default class WebAudioL16Stream {
  constructor({
    downsample,
    objectMode,
    sourceSampleRate,
    targetSampleRate,
    writableObjectMode,
  }: {
    downsample?: boolean
    objectMode?: boolean,
    sourceSampleRate?: number,
    targetSampleRate?: number
    writableObjectMode?: boolean,
  })

  _transform(audioBuffer: AudioBuffer): void;

  on(event: string, handle: (chunk: Uint8Array) => void): void;
  write(audioBuffer: AudioBuffer): void;
}
