import '@/styles/globals.css'
import { persistor, store } from "/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
