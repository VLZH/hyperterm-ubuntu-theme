var BACKGROUND = "#300A24";
var FOREGROUND = "#FFFFFF";
var BORDER_COLOR = "#13061A";
var CURSOR_COLOR = "#FFFFFF";

var black = "#323739";
var red = "#CC0000";
var green = "#36AB00";
var yellow = "#BCAC00";
var blue = "#4851A4";
var magenta = "#793F7B";
var cyan = "#009B9A";
var white = "#D1D8CE";

var lightBlack = "#555954";
var lightRed = "#F00022";
var lightGreen = "#6EFA27";
var lightYellow = "#F1FC42";
var lightBlue = "#7A92D0";
var lightMagenta = "#B06EA7";
var lightCyan = "#2CE4DE";
var lightWhite = "#EDEEEB";

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor: BACKGROUND,
    foregroundColor: FOREGROUND,
    borderColor: BORDER_COLOR,
    cursorColor: CURSOR_COLOR,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed,
      lightGreen,
      lightYellow,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite,
    },
    termCSS: `
      .cursor-node[focus=true]:not([moving]) {
        animation: blink 1s ease infinite;
      }
      @keyframes blink {
        0%, 40% { opacity: 0 }
        50%, 90% { opacity: 1 }
      }
    `,
    css: `
      ${config.css || ""}
      .hyper_main {
        border: none !important;
        background: ${BORDER_COLOR} !important;
      }
      .header_header {
        top: 0px;
        left: 0px;
        right: 0px;
        background: ${BORDER_COLOR} !important;
      }
      .terms_terms {
        background: ${BACKGROUND} !important;
      }
      .tabs_title, .tab_tab, .tab_text:hover {
        color: ${white};
      }
      .tabs_title, .tab_active, .tab_text:hover {
        font-weight: bold;
      }
      .tab_tab {
        border: none;
      }
      .tab_active {
        border: none;
        background: ${BACKGROUND} !important;
      }
      .tabs_borderShim {
        border: none !important;
      }
      .term_fit {
        padding: 2px !important;
      }
    `
  });
};
