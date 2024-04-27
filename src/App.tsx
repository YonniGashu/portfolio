import "./App.css";
// import React from "react";
// import { useDisclosure } from "@mantine/hooks";
import {
  Button,
  Flex,
  AppShell,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import Top from "./components/Top/Top";

function App() {
  const computedColorScheme = useComputedColorScheme("light");
  const { setColorScheme } = useMantineColorScheme();
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="App">
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header>
          <Flex
            justify="space-between"
            align="center"
            style={{ padding: "5px 20px" }}
          >
            <Text
              c="rgba(250,250,250)"
              fz={30}
              fw={700}
              size="xl"
              variant="gradient"
            >
              Yonathan G.
            </Text>
            <Button
              c="rgba(250,250,250)"
              variant="gradient"
              onClick={toggleColorScheme}
            >
              {computedColorScheme === "dark" ? <IconSun /> : <IconMoon />}
            </Button>
          </Flex>
        </AppShell.Header>
        <Top></Top>
      </AppShell>
    </div>
  );
}

export default App;
