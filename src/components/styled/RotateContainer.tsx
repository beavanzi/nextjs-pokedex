import { Box } from "@chakra-ui/core"

const RotateContainer: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Box display="inline-block" _hover={{ transform: "rotate(-45deg)" }}>
      {children}
    </Box>
  )
}
export default RotateContainer
