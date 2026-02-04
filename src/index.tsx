import './index.css';
import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { I18nProvider } from './i18n/I18nContext';

render(<I18nProvider><App /></I18nProvider>, document.getElementById("root"));