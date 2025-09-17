'use client';

import { Provider as ReduxProviderComponent } from 'react-redux';
import { store } from './store';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <ReduxProviderComponent store={store}>{children}</ReduxProviderComponent>;
}