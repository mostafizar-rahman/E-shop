import { ContextProvider } from "@/context/ContextProvider";
import MainLayout from "@/layouts/MainLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </MainLayout>
  );
}
