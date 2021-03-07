import React, { useEffect, useState } from "react";

import { useAuth } from "@saleor/sdk";
import { Loader } from "@components/atoms";
import {
  Footer,
  MainMenu,
  MetaConsumer,
  OverlayManager,
  OverlayProvider,
} from "../components";
import ShopProvider from "../components/ShopProvider";
import "../globalStyles/scss/index.scss";
import { Routes } from "./routes";
import Notifications from "./Notifications";

const App: React.FC = () => {
  const { tokenRefreshing, tokenVerifying } = useAuth();

  const [isLoading, setLoading] = useState(true);

  const fakeRequest = () => {
    return new Promise<void>(resolve => setTimeout(() => resolve(), 500));
  };

  useEffect(() => {
    fakeRequest().then(() => {
      setLoading(!isLoading);
    });
  }, []);

  if (tokenRefreshing || tokenVerifying || isLoading) {
    return <Loader />;
  }

  return (
    <ShopProvider>
      <OverlayProvider>
        <MetaConsumer />
        <header>
          <MainMenu />
        </header>
        <div className="main-content">
          <Routes />
        </div>
        <Footer />
        <OverlayManager />
        <Notifications />
      </OverlayProvider>
    </ShopProvider>
  );
};

export default App;
