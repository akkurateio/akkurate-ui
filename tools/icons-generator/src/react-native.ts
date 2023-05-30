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
        { componentName: path.basename(SVGIcon, ".svg") },
      )

      // Check exist of export dir
      if (!existsSync(path.join(__dirname, "..", "export"))) {
        mkdirSync(path.join(__dirname, "..", "export"))
      }

      writeFileSync(
        path.join(
          __dirname,
          "..",
          "export",
          `${path.basename(SVGIcon, ".svg")}.tsx`,
        ),
        jsCode
          .replace(
            '} from "react-native-svg"',
            ', SvgProps } from "react-native-svg"',
          )
          .replace("= props", "= (props: SvgProps)"),
      )

      indexFile.push(templateIndexFile(`./${path.basename(SVGIcon, ".svg")}`))
    }

    // Create index file
    // indexFile.push(templateIndexFile(`./listIcons`))
    // writeFileSync(path.join(ICONS_DIR, "src", `index.ts`), indexFile.join(""))
  }
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
