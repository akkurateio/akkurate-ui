import { readdirSync, readFileSync, writeFileSync } from "fs"
import path from "path"
import { optimize, OptimizedSvg } from "svgo"
import { parseSync, stringify } from "svgson"

const ROOT_DIR = path.join(process.cwd(), "..", "..")
const SVG_DIR = path.join(ROOT_DIR, "assets", "icons")
const ICONS_DIR = path.join(ROOT_DIR, "packages", "rn-icons")

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

    if (SVGIcon !== ".DS_Store") {
      const result = optimize(
        readFileSync(path.join(SVG_DIR, SVGIcon), "utf8"),
      ) as OptimizedSvg

      // Make object with SVG data
      const parsedSVG = parseSync(result.data)

      let newSVGToString = ""

      // Each SVG element and save it to new SVG string
      for (const child of parsedSVG.children) {
        child.name =
          "ReactSVG." + child.name[0].toUpperCase() + child.name.slice(1)

        // Create a recursive function to change the name of the svg elements
        const recursive = (child: any) => {
          if (child.children) {
            child.children.forEach((child: any) => {
              child.name =
                "ReactSVG." + child.name[0].toUpperCase() + child.name.slice(1)
              recursive(child)
            })
          }
        }

        recursive(child)

        newSVGToString += stringify(child)
      }

      // Create icon base file name
      const basename = path.basename(SVGIcon, ".svg")

      newSVGToString = newSVGToString
        .replace(/fill="#000"/g, "")
        .replace(/fill="black"/g, "")
        .replace(/fill-rule/g, "fillRule")
        .replace(/clip-rule/g, "clipRule")

      // Create icon file
      writeFileSync(
        path.join(ICONS_DIR, "src", "icons", `${basename}.tsx`),
        templateCreateIcon(newSVGToString, basename),
      )

      // Add to index file
      indexFile.push(templateIndexFile(`./icons/${basename}`))
    }
  }

  // Create index file
  writeFileSync(path.join(ICONS_DIR, "src", `index.ts`), indexFile.join(""))
}

/**
 * Template for create icon file
 * @param svg
 * @param name
 */
const templateCreateIcon = (svg: string, name: string) => {
  return `
import React, { FunctionComponent } from 'react';
import { IIconProps, createIcon } from 'native-base';
import * as ReactSVG from 'react-native-svg';

export const ${name}: FunctionComponent<IIconProps> = createIcon({
  viewBox: "0 0 32 32",
  path: [
  <ReactSVG.G key={1}>
      ${svg}
  </ReactSVG.G>
  ],
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
 * MultiReplace
 */
interface IReplacement {
  pattern: string
  replacement: string
}

const allReplace = (string: string, replacements: IReplacement[]) => {
  let str: string = string

  const treatment = replacements.map((replacement) => {
    str.replace(new RegExp(replacement.pattern, "g"), replacement.replacement)
  })

  return treatment
}

main()
