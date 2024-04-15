"use client";

import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";

const cache = {
	key: "muirtl",
	stylisPlugins: [prefixer, stylisRTLPlugin],
};
export default cache;
