import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "fs"
import path from "path"
import { optimize, OptimizedSvg } from "svgo"
import { parseSync, stringify } from "svgson"

const ROOT_DIR = path.join(process.cwd(), "..", "..")
const SVG_DIR = path.join(ROOT_DIR, "assets", "icons")
const ICONS_DIR = path.join(process.cwd(), "export")

/**
 * Main function for generate icons
 */
const main = async () => {
  // Get list of icons
  const allSVGIcons = readdirSync(path.join(SVG_DIR))

  const indexFile: string[] = []

  if (!existsSync(ICONS_DIR)) {
    mkdirSync(ICONS_DIR)
  }

  // For each icon
  for (const SVGIcon of allSVGIcons) {
    //   // Optimize SVG
    //
    if (SVGIcon !== ".DS_Store") {
      const result = optimize(
        readFileSync(path.join(SVG_DIR, SVGIcon), "utf8"),
      ) as OptimizedSvg

      // Make object with SVG data
      const parsedSVG = parseSync(result.data)

      let newSVGToString = ""

      // Each SVG element and save it to new SVG string
      for (const child of parsedSVG.children) {
        newSVGToString += stringify(child)
      }

      const basename = path.basename(SVGIcon, ".svg")

      newSVGToString = newSVGToString
        .replace(/fill="#000"/g, "")
        .replace(/fill="black"/g, "")
        .replace(/fill-rule/g, "fillRule")
        .replace(/clip-rule/g, "clipRule")

      // Create icon file
      writeFileSync(
        path.join(ICONS_DIR, `${basename}.vue`),
        templateCreateIcon(newSVGToString, basename),
      )
    }
  }
}

/**
 * Template for create icon file
 * @param svg
 * @param name
 */
const templateCreateIcon = (svg: string, name: string) => {
  return `
<template>
  <svg
    focusable="false"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    ${svg}
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ${name} extends Vue {
  @Prop({ type: Number, default: 24, required: false }) readonly size!: Number
}
</script>
`
}

/**
 * Template for index file
 * @param addToImport
 * @param whatImport
 */
const templateIndexFile = (addToImport: string, whatImport: string = "*") => {
  return `
export ${whatImport === "*" ? "*" : `{ ${whatImport} }`} from "${addToImport}"
`
}

main()
