/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `dectime` command */
  export type Dectime = ExtensionPreferences & {
  /** Auto Copy - Instantly copy the result to clipboard instead of showing a list */
  "autoCopy": boolean
}
}

declare namespace Arguments {
  /** Arguments passed to the `dectime` command */
  export type Dectime = {
  /** 3.4322 or 01:30:00 */
  "value": string
}
}

