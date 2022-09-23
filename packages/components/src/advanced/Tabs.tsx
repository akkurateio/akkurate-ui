import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsProps,
  ThemingProps,
} from "@chakra-ui/react"
import React from "react"

interface TabsOptions {
  tabNameArray: string[]
  tabContentArray: JSX.Element[]
}

interface AcsTabsProps
  extends TabsOptions,
    ThemingProps<"Tabs">,
    Omit<TabsProps, "children"> {}

//? Key error might be due to ChakraUI, check for updates atm in v2.3.1

export const AcsTabs: React.FC<AcsTabsProps> = ({
  tabNameArray,
  tabContentArray,
  ...props
}) => {
  return (
    <Tabs {...props} width={props.width ? props.width : "full"}>
      <TabList>
        {tabNameArray.map((tabName, index) => (
          <Tab key={index}>{tabName}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabContentArray.map((tabContent, index) => (
          <TabPanel key={index}>{tabContent}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}
