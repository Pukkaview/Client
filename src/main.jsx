import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ActiveProvider } from "./context/useActive.jsx";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faVolumeUp, faVolumeMute, faExpand, faCompress, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { CommentProvider } from "./context/useComment.jsx";
import { VideoProvider } from "./context/useVideo.jsx";
library.add(faPlay, faPause, faVolumeUp, faVolumeMute, faExpand, faCompress, faStepBackward, faStepForward);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ActiveProvider>
        <VideoProvider>
          <CommentProvider>
            <App />
          </CommentProvider>
        </VideoProvider>
      </ActiveProvider>
    </BrowserRouter>
  </React.StrictMode>
);
