import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  NoteProvider,
  SidebarProvider,
  TagProvider,
  TrashProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <AuthProvider>
          <NoteProvider>
            <TagProvider>
              <TrashProvider>
                <App />
              </TrashProvider>
            </TagProvider>
          </NoteProvider>
        </AuthProvider>
      </SidebarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
