export const START_STREAM = 'START_STREAM';
export function startStream() {
  return {
    type: START_STREAM
  };
}

export const STOP_STREAM = 'STOP_STREAM';
export function stopStream() {
  return {
    type: STOP_STREAM
  };
}
