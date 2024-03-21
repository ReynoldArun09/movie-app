/* eslint-disable react/prop-types */
import { Button, Flex, Text } from "@chakra-ui/react";

export default function PaginationComponent({
  activePage,
  totalPages,
  setActivePage,
}) {
  return (
    <Flex gap={"2"} alignItems={"center"}>
      <Flex gap={"2"} maxW={"250px"} my="10">
        <Button
          onClick={() => setActivePage(activePage - 1)}
          isDisabled={activePage === 1}
        >
          Prev
        </Button>
        <Button
          onClick={() => setActivePage(activePage + 1)}
          isDisabled={activePage === totalPages}
        >
          Next
        </Button>
      </Flex>
      <Flex gap="1">
        <Text>{activePage}</Text>
        <Text>of</Text>
        <Text>{totalPages}</Text>
      </Flex>
    </Flex>
  );
}
