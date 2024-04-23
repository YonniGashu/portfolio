import { Button } from "@mantine/core";


function TextComponent() {
  return (
    <div className="App">
      <Button c="rgba(250,250,250)" variant="gradient" gradient={{
        from: 'violet', to: 'rgba(190,0,180)', deg: 60
      }}>TextComponent</Button>
    </div>
  );
}

export default TextComponent;
