import { Box, Input, Text } from "@chakra-ui/react"
import React from "react"

interface IProps {
  file: File
  // value: string;
}

const ForOne: React.FC<IProps> = ({ file }) => {
  return (
    <Box>
      <Text>{file.name}</Text>
      <Input
        position={"relative"}
        type={"text"}
        value={file.name}
        _invalid={{
          borderColor: "error.600",
          bg: "error.100",
          color: "error.600",
        }}
        px={3}
        bg={"white"}
        onChange={(e: any) => console.log(e)}
        placeholder={"Ajouter un fichier"}
      />
    </Box>
  )
}

export default ForOne
