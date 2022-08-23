import { readdirSync, readFileSync, writeFileSync } from "fs"
import path from "path"
import { optimize, OptimizedSvg } from "svgo"
import { parseSync, stringify } from "svgson"

import { listInfoIcons, IInfoIcons } from "@akkurate-ui/icons"

const ROOT_DIR = path.join(process.cwd(), "..", "..", "..")
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

    // Create icon file
    writeFileSync(
      path.join(ICONS_DIR, "src", "icons", `${basename}.tsx`),
      templateCreateIcon(newSVGToString, basename),
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
        name: `Ais${basename}`,
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
import { createIcon } from "@chakra-ui/icon"

export const Ais${name} = createIcon({
  displayName: "Ais${name}",
  viewBox: "0 0 32 32",
  path: (
    <g fill="currentColor">
      ${svg}
    </g>
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

main()