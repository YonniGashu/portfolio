import { title, inner, desc, control, wrapper } from "./Top.css";
import { Button, Flex, Text, rem } from "@mantine/core";

const Top = () => {
  return (
    <div id="top" className={wrapper}>
      <Flex
        className={inner}
        direction="row"
        align="center"
        justify="center"
        gap="15rem"
      >
        <div style={{ maxWidth: "750px" }}>
          <Text component="h1" className={title} variant="gradient">
            Yonathan Gashu
          </Text>
          <Text className={desc} c="dimmed">
            Full-stack developer with goated experience and super goat.
          </Text>
        </div>
        <Flex justify="center" align="center">
          <Button
            component="a"
            className={control}
            size="xl"
            fz={rem(24)}
            variant="gradient"
            target="_blank"
            href={"https://yonnigashu.github.io/resume/resume.pdf"}
          >
            Resume
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default Top;
