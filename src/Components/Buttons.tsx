import { Button } from "@mantine/core";


function ButtonComponent() {
  return (
    <div className="App">
      <Button c="rgba(250,250,250)" variant="gradient" gradient={{
        from: 'violet', to: 'rgba(190,0,180)', deg: 60
      }}>ButtonComponent</Button>
    </div>
  );
}

export default ButtonComponent;
