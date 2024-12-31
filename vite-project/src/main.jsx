import React from 'react'
import ReactDOM from 'react-dom/client'
import Pagination from './Pagination.jsx'
import AsyncLogger from "./AsyncLogger.jsx";
import CachingExample from "./Caching.jsx";
import CompressionExample from "./CompressionExample.jsx";
import Lazy from "./Lazy.jsx";
import ImageMemoizationExample from "./ImageMemoizationExample.jsx";
import App from "./throttle_debounce.jsx";
import LazyComponent from "./LazyComponent.jsx";
import appLazyComponent from "./app-LazyComponent.jsx";
import Appreactfragments from "./react-fragments.jsx"
import App_workers from "./app-worker.jsx";
import App_useTransition from "./useTransition.jsx";
import App_virtualization from "./virtualization.jsx";
import Pagination2 from "./test.jsx";
import App_lazy from "./App_lazy.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*<Pagination2/>*/}
    {/*<Pagination />*/}
    {/*  <AsyncLogger/>*/}
    {/*  <CachingExample/>*/}
      {/*<CompressionExample/>*/}
    {/*  <Lazy/>*/}
    {/*  <ImageMemoizationExample/>*/}
    {/*  <App/>*/}
    {/*<LazyComponent/>*/}
    {/*  <appLazyComponent/>*/}
    {/*  <Appreactfragments/>*/}
    {/*<App_workers/>*/}
    {/*<App_useTransition/>*/}
    {/*  <App_virtualization/>*/}
      <App_lazy/>
  </React.StrictMode>
)
