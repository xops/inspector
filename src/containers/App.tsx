import React, { useEffect } from "react";
import { CssBaseline, Button } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core";
import { lightTheme, darkTheme } from "../themes/openrpcTheme";
import useDarkMode from "use-dark-mode";
import Inspector from "./Inspector";
import useQueryParams from "../hooks/useQueryParams";
import * as monaco from "monaco-editor";
import localStorageMock from "../helpers/localStorageMock";

let localStorageEnabled = true;
try {
  window.localStorage.setItem("xyz-test", "true");
} catch (e) {
  localStorageEnabled = false;
  console.error(e);
}

// mock storageProvider for when localStorage is not available via chrome/brave settings
const darkModeOptions = localStorageEnabled ? undefined : localStorageMock;

const App: React.FC = () => {
  const darkMode = useDarkMode(undefined, darkModeOptions);
  const [query] = useQueryParams();
  const theme = darkMode.value ? darkTheme : lightTheme;
  useEffect(() => {
    const t = darkMode.value ? "vs-dark" : "vs";
    monaco.editor.setTheme(t);
  }, [darkMode.value]);

  const snapId = "wallet_plugin_http://localhost:8081/package.json";

  const handleConnect = () => {
    (window as any).ethereum.send({
      method: "wallet_requestPermissions",
      params: [{
        [snapId]: {},
      }],
    });
  };


  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Button onClick={handleConnect}>Connect</Button>
      <Inspector
        onToggleDarkMode={darkMode.toggle}
        darkMode={darkMode.value}
        ethereum={(window as any).ethereum}
        snapId={snapId}
        url={query.url}
        openrpcMethodObject={query.openrpcMethodObject}
        request={query.request}
      />
    </MuiThemeProvider>
  );
};

export default App;
