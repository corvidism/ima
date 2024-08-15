import { createIMAServer } from '@ima/server';
import type { Config } from 'jest';

import { getImaTestingLibraryConfig } from './configuration';

const imaTestingLibraryConfig = getImaTestingLibraryConfig();

/**
 * Get response content from @ima/server.
 */
async function _getIMAResponseContent(): Promise<string> {
  // Mock devUtils to override manifest loading
  const devUtils = {
    manifestRequire: () => ({}),
  };

  // Prepare serverApp with environment override
  const { serverApp } = await createIMAServer({
    devUtils,
    applicationFolder: imaTestingLibraryConfig.applicationFolder,
    processEnvironment: currentEnvironment =>
      imaTestingLibraryConfig.processEnvironment({
        ...currentEnvironment,
        $Server: {
          ...currentEnvironment.$Server,
          concurrency: 0,
          serveSPA: {
            allow: true,
          },
        },
        $Debug: true,
      }),
  });

  // Generate request response
  const response = await serverApp.requestHandler(
    {
      get: () => '',
      headers: () => '',
      originalUrl: imaTestingLibraryConfig.host,
      protocol: imaTestingLibraryConfig.protocol.replace(':', ''),
    },
    {
      status: () => 200,
      send: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
      set: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
      locals: {
        language: imaTestingLibraryConfig.locale,
        host: imaTestingLibraryConfig.host,
        protocol: imaTestingLibraryConfig.protocol,
        path: '',
        root: '',
        languagePartPath: '',
      },
    }
  );

  return response.content;
}

/**
 * Jest configuration for IMA testing library.
 * We are entering undocumented territory here, jestConfig is a promise, but documentation does not mention, if it is allowed.
 * It would be nice if there was a synchronous and more straightforward way of generating IMA SPA content.
 */
const jestConfig: Promise<Config> = (async () => ({
  setupFiles: ['@ima/core/setupJest.js'],
  setupFilesAfterEnv: ['@ima/testing-library/jestSetupFileAfterEnv'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    html: await _getIMAResponseContent(),
    url: `${imaTestingLibraryConfig.protocol}//${imaTestingLibraryConfig.host}/`,
  },
}))();

export default jestConfig;
