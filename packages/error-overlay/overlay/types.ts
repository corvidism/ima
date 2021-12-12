import { StackFrame } from '#/entities';

declare module 'easy-uid' {
  export default function (): string;
}

declare global {
  interface Window {
    __ima_server_error: {
      name: string;
      message: string;
      stack: string;
    };
  }
}

export type ParsedStack = {
  functionName: string | null;
  fileUri?: string;
  lineNumber?: number;
  columnNumber?: number;
};

export type IconProps = {
  className?: string;
  style?: Record<string, unknown>;
};

export type FrameWrapper = {
  frame: StackFrame;
  isVisible: boolean;
  showOriginal: boolean;
};
