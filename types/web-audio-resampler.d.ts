import { Transform } from 'stream';

/**
 * web-audio-resampler
 * 降采样模块
 */
export default class WebAudioL16Stream extends Transform {
  constructor({
    objectMode,
    sourceSampleRate,
    writableObjectMode,
  }: {
    objectMode?: boolean,
    sourceSampleRate?: number,
    writableObjectMode?: boolean,
  })

  _transform(audioBuffer: AudioBuffer): void;
}
