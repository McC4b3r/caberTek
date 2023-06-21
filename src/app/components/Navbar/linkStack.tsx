import React from "react";
import Link from "next/link";
import { Stack, Button } from "@chakra-ui/react";

const LinkStack = ({ buttons }: { buttons: Array<string> }) => {
  return (
    <Stack
      spacing={[0, 0, 2, 2]}
      align="center"
      justify={["center", "spaceBetween", "flexEnd", "flexEnd"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}>
      {buttons.map((button, i) => (
        <Button
          as={Link}
          href={`#${button.toLowerCase()}`}
          variant="ghost"
          key={i}>
          {button}
        </Button>
      ))}
    </Stack>
  )
}

export default LinkStack;