import { readdirSync, readFileSync, writeFileSync } from "fs"
import path from "path"
import { optimize, OptimizedSvg } from "svgo"
import { parseSync, stringify } from "svgson"

import { IInfoIcons, listInfoIcons } from "@akkurateio/icons"

const ROOT_DIR = path.join(process.cwd(), "..", "..")
const SVG_DIR = path.join(ROOT_DIR, "assets", "icons")
const ICONS_DIR = path.join(ROOT_DIR, "packages", "icons")

/**
 * Main function for generate icons
 */
const main = async () => {
  // Get list of icons
  const allSVGIcons = readdirSync(path.join(SVG_DIR))

  const indexFile: string[] = []

  // For each icon
  for (const SVGIcon of allSVGIcons) {
    // Optimize SVG

    if (SVGIcon !== '.DS_Store') {
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

      // Create icon base file name
      const basename = path.basename(SVGIcon, ".svg")

      newSVGToString = newSVGToString
          .replace(/fill="#000"/g, '')
          .replace(/fill="black"/g, '')
          .replace(/fill-rule/g, "fillRule")
          .replace(/clip-rule/g, "clipRule")

      // Create icon file
      writeFileSync(
          path.join(ICONS_DIR, "src", "icons", `${basename}.tsx`),
          templateCreateIcon(
              newSVGToString,
              basename,
          ),
      )

      // Add to index file
      indexFile.push(templateIndexFile(`./icons/${basename}`))
    }

    // Create index file
    indexFile.push(templateIndexFile(`./listIcons`))
    writeFileSync(path.join(ICONS_DIR, "src", `index.ts`), indexFile.join(""))

    // Create listInfoIcons file
    generateListInfoIcons(allSVGIcons)
  }
}

/**
 * Generate listInfoIcons file
 * @param newListIcons
 */
const generateListInfoIcons = (newListIcons: string[]) => {
  const copyListInfoIcons = JSON.parse(
    JSON.stringify(listInfoIcons),
  ) as IInfoIcons[]

  for (const icon of newListIcons) {
    const basename = path.basename(icon, ".svg")

    if (!copyListInfoIcons.find((iconName) => iconName.name === basename)) {
      copyListInfoIcons.push({
        name: `${basename}`,
        category: [],
        tags: [],
      })
    }
  }

  writeFileSync(
    path.join(ICONS_DIR, "src", "listIcons.ts"),
    templateListInfoIcons(copyListInfoIcons),
  )
}

/**
 * Template for create icon file
 * @param svg
 * @param name
 */
const templateCreateIcon = (svg: string, name: string) => {
  return `
import React from 'react';
import { createIcon } from "@chakra-ui/icon"

export const ${name} = createIcon({
  displayName: "${name}",
  viewBox: "0 0 32 32",
  
  defaultProps: {
		boxSize: "24px",
		fill: "currentColor",
	},
  path: (
    <>
      ${svg}
    </>
  ),
})
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

/**
 * Template for listInfoIcons file
 * @param listInfoIcons
 */
const templateListInfoIcons = (listInfoIcons: IInfoIcons[]) => {
  return `
export interface IInfoIcons {
  name: string
  category: string[]
  tags: string[]
}

export const listInfoIcons: IInfoIcons[] = ${JSON.stringify(listInfoIcons)}
`
}

/**
 * MultiReplace
 */
interface IReplacement {
  pattern: string
  replacement: string
}

const allReplace = (string: string, replacements: IReplacement[]) => {
  let str: string = string

  const treatment = replacements.map((replacement) => {
    str.replace(new RegExp(replacement.pattern, 'g'), replacement.replacement);
  })

  return treatment
}

main()
