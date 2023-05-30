import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "fs"
import path from "path"
import { transform } from "@svgr/core"

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
    const basename = path.basename(SVGIcon, ".svg")
    // Optimize SVG

    if (SVGIcon !== ".DS_Store") {
      const jsCode = await transform(
        readFileSync(path.join(SVG_DIR, SVGIcon), "utf8"),
        {
          icon: true,
          native: true,
          svgo: true,
          dimensions: false,
          plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        },
        { componentName: basename },
      )

      writeFileSync(
        path.join(ICONS_DIR, "src", "icons", `${basename}.tsx`),
        jsCode
          .replace(
            '} from "react-native-svg"',
            ', SvgProps } from "react-native-svg"',
          )
          .replace("= props", "= (props: SvgProps)")
          .replace('xmlns="http://www.w3.org/2000/svg"', ""),
      )

      indexFile.push(
        templateIndexFile(`./icons/${path.basename(SVGIcon, ".svg")}`),
      )
    }

    // Create index file
    // indexFile.push(templateIndexFile(`./listIcons`))
  }
  writeFileSync(path.join(ICONS_DIR, "src", `index.ts`), indexFile.join(""))
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
