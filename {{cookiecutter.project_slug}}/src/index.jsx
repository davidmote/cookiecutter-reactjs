import React from "react";
import { render } from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";

import App from "App";
import "manifest.json";

injectTapEventPlugin();

render(<App />,
  document.getElementById("root"),
);
