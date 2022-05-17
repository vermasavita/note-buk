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
              <App />
            </TagProvider>
          </NoteProvider>
        </AuthProvider>
      </SidebarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
