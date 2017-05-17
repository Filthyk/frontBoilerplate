'use strict';

// Main styles

require("./media.css");
require("./styles.css");
require("./colors.css");
require("./icons.css");
require("./fonts.css");

// All components


// require.context("./plugins", true, /\.css$/);
require.context("./defaultComponents", true, /\.css$/);
require.context("./components", true, /\.css$/);

// Vendors

require("./helpers.css");
