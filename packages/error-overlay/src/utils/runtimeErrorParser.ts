import { ParsedStack } from '#/types';

const reExtractLocations = /\(?(.+?)(?::(\d+))?(?::(\d+))?\)?$/;
const reValidFrameChrome = /^\s*(at|in)\s.+(:\d+)/;
const reValidFrameFireFox = /(^|@)\S+:\d+|.+line\s+\d+\s+>\s+(eval|Function).+/;

/**
 * Extract file uri, line and column number from
 * parsed token line.
 *
 * @param {string} token Parsed stack trace line.
 * @returns {object}
 */
function extractLocation(token: string): {
  fileUri: string;
  lineNumber: number;
  columnNumber: number;
} {
  const [fileUri, lineNumber, columnNumber] =
    reExtractLocations.exec(token)?.slice(1) || [];

  return {
    fileUri,
    lineNumber: parseInt(lineNumber),
    columnNumber: parseInt(columnNumber),
  };
}

/**
 * Original {@link https://github.com/facebook/create-react-app/blob/main/packages/react-error-overlay/src/utils/parser.js}
 *
 * Parses error stack lines into function name call, file uri
 * line and column numbers of the call.
 *
 * @param {string[]} stack Array of stack lines.
 * @returns {ParsedStack[]}
 */
function parseStack(stack: string[]): ParsedStack[] {
  return stack
    .filter(
      traceLine =>
        reValidFrameChrome.test(traceLine) ||
        reValidFrameFireFox.test(traceLine)
    )
    .map(traceLine => {
      // Chrome and firefox have different stack trace formats
      if (reValidFrameFireFox.test(traceLine)) {
        let isEval = false;

        // Strip eval
        if (/ > (eval|Function)/.test(traceLine)) {
          traceLine = traceLine.replace(
            / line (\d+)(?: > eval line \d+)* > (eval|Function):\d+:\d+/g,
            ':$1'
          );
          isEval = true;
        }

        const data = traceLine.split(/[@]/g);
        const traceToken = data.pop();
        const { fileUri, lineNumber, columnNumber } =
          (traceToken && extractLocation(traceToken)) || {};

        return {
          functionName: data.join('@') || (isEval ? 'eval' : null),
          fileUri,
          lineNumber,
          columnNumber,
        };
      }

      if (traceLine.indexOf('(eval ') !== -1) {
        traceLine = traceLine.replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
      }

      if (traceLine.indexOf('(at ') !== -1) {
        traceLine = traceLine.replace(/\(at /, '(');
      }

      const data = traceLine.trim().split(/\s+/g).slice(1);
      const traceToken = data.pop();
      const { fileUri, lineNumber, columnNumber } =
        (traceToken && extractLocation(traceToken)) || {};

      return {
        functionName: data.join(' ') || null,
        fileUri,
        lineNumber,
        columnNumber,
      };
    });
}

/**
 * Parses Error object or stack lines into parsed stack trace lines.
 *
 * @param {Error | string | string[]} error Error, trace or similar object.
 * @returns {ParsedStack[]}
 */
function parseRuntimeError(error: Error | string | string[]): ParsedStack[] {
  if (error == null) {
    throw new Error('You cannot pass a null object.');
  }

  if (typeof error === 'string') {
    return parseStack(error.split('\n'));
  }

  if (Array.isArray(error)) {
    return parseStack(error);
  }

  if (typeof error.stack === 'string') {
    return parseStack(error.stack.split('\n'));
  }

  throw new Error('The error you provided does not contain a stack trace.');
}

export { parseRuntimeError };
