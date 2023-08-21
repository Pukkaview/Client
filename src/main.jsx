import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ActiveProvider } from "./context/useActive.jsx";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faVolumeUp, faVolumeMute, faExpand, faCompress, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { CommentProvider } from "./context/useComment.jsx";
import { VideoProvider } from "./context/useVideo.jsx";
import { SearchProvider } from "./context/useSearch.jsx";
library.add(faPlay, faPause, faVolumeUp, faVolumeMute, faExpand, faCompress, faStepBackward, faStepForward);
if ('fetch' in window) {
  import('./index.css').then(() => {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <BrowserRouter>
          <ActiveProvider>
            <VideoProvider>
              <CommentProvider>
                <SearchProvider>
                  <App />
                </SearchProvider>
              </CommentProvider>
            </VideoProvider>
          </ActiveProvider>
        </BrowserRouter>
      </React.StrictMode>
    );
  });
} else {
  import('./polyfills').then(() => {
    import('./index.css').then(() => {
      ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          <BrowserRouter>
            <ActiveProvider>
              <VideoProvider>
                <CommentProvider>
                  <SearchProvider>
                    <App />
                  </SearchProvider>
                </CommentProvider>
              </VideoProvider>
            </ActiveProvider>
          </BrowserRouter>
        </React.StrictMode>
      );
    });
  });
};
