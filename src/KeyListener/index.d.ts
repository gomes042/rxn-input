export interface KeyListenerListener {}

export interface KeyEvent {
  key: string;
}
export interface iKeyListener {
  addListener: (
    event: 'keyup' | 'keydown',
    callback: (e: KeyEvent) => void,
  ) => KeyListenerListener;
  removeListener: (listener: KeyListenerListener) => void;
  clearAllListeners: () => void;
}

const KeyListener: iKeyListener;

export default KeyListener;
