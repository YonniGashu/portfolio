import "./App.css";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, Flex, AppShell, Burger, Text } from "@mantine/core";
import { IconMoon } from "@tabler/icons-react";
import ButtonComponent from "./Components/Buttons";
import TextComponent from "./Components/Text";

function App() {
  const [opened, { toggle }] = useDisclosure();
  const [currentComponent, setCurrentComponent] =
    React.useState<string>("component1");

  return (
    <div className="App">
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "md",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Flex
            justify="space-between"
            align="center"
            style={{ padding: "5px 20px" }}
          >
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="md"
              size="sm"
            />
            <Text
              c="rgba(250,250,250)"
              fz={30}
              fw={700}
              tt={"uppercase"}
              size="xl"
              variant="gradient"
              gradient={{
                from: "violet",
                to: "rgba(190,0,180)",
                deg: 60,
              }}
            >
              Yonathan G.
            </Text>
            <Button
              c="rgba(250,250,250)"
              variant="gradient"
              gradient={{
                from: "violet",
                to: "rgba(190,0,180)",
                deg: 60,
              }}
            >
              <IconMoon />
            </Button>
          </Flex>
        </AppShell.Header>
        <AppShell.Navbar p="md" style={{ gap: "10px" }}>
          <Button
            onClick={() => setCurrentComponent("component1")}
            style={{ margin: "5px" }}
            c="rgba(250,250,250)"
            variant="gradient"
            gradient={{
              from: "violet",
              to: "rgba(190,0,180)",
              deg: 60,
            }}
          >
            Button Component
          </Button>
          <Button
            onClick={() => setCurrentComponent("component2")}
            style={{ margin: "5px" }}
            c="rgba(250,250,250)"
            variant="gradient"
            gradient={{
              from: "violet",
              to: "rgba(190,0,180)",
              deg: 60,
            }}
          >
            Text Component
          </Button>
        </AppShell.Navbar>
        <AppShell.Main>
          {currentComponent === "component1" ? (
            <ButtonComponent />
          ) : (
            <TextComponent />
          )}
        </AppShell.Main>
        <AppShell.Footer zIndex={opened ? "auto" : 101}>
          Made by Yonathan Gashu
        </AppShell.Footer>
      </AppShell>
    </div>
  );
}

export default App;
