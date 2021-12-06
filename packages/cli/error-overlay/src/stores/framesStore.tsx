/* eslint-disable no-case-declarations */
import { FramesAction } from '#/actions';
import { FramesState, framesReducer, framesInitialState } from '#/reducers';
import {
  createContext,
  Dispatch,
  FunctionComponent,
  useContext,
  useReducer
} from 'react';

interface FrameContext {
  state: FramesState;
  dispatch: Dispatch<FramesAction>;
}

const FramesContext = createContext<FrameContext>({} as FrameContext);
const FramesStoreProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(framesReducer, framesInitialState);

  return (
    <FramesContext.Provider value={{ state, dispatch }}>
      {children}
    </FramesContext.Provider>
  );
};

function useFramesStore() {
  return useContext(FramesContext);
}

export { FrameContext, FramesContext, FramesStoreProvider, useFramesStore };
