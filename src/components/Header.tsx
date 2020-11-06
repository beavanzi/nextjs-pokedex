import { Divider, Flex, FlexProps, Link } from "@chakra-ui/core"
import NextLink from "next/link"

interface Option {
  label: string
  link: string
}

interface Props extends FlexProps {
  options: Option[]
}

const Header: React.FC<Props> = ({ options, ...rest }) => {
  return (
    <Flex as="header" w="100%" align="flex-start">
      {options.map((option) => (
        <Flex flex="1" {...rest}>
          <NextLink href={option.link} passHref>
            <Link
              flex="1"
              align="center"
              fontFamily="Lilita One"
              color="#e1e1e1"
              py="2"
              _hover={{ boxShadow: "base" }}
            >
              {option.label}
            </Link>
          </NextLink>
        </Flex>
      ))}
    </Flex>
  )
}
export default Header
