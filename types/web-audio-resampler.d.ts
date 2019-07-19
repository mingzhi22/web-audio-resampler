import { Transform } from 'stream';

/**
 * web-audio-resampler
 * 降采样模块
 */
export default class WebAudioL16Stream extends Transform {
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
}
