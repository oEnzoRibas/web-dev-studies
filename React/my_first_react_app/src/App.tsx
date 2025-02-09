import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Sorocaba", "Pirapora", "Belo Horizonte", "New York", "Betim"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  const [listVisible, setListVisibility] = useState(false);

  return (
    <div>
      <>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
        )}

        <Button
          children="Show Alert"
          color="danger"
          onClickedItem={() => setAlertVisibility(true)}
        ></Button>

        <Button
          children="Show List"
          color="primary"
          onClickedItem={() => setListVisibility(true)}
        ></Button>

        {listVisible && (
          <>
            <Button
              children="Hide List"
              color="dark"
              onClickedItem={() => setListVisibility(false)}
            ></Button>
            <p></p>
            <ListGroup
              heading="Cities"
              items={items}
              onSelectItem={handleSelectedItem}
            ></ListGroup>
          </>
        )}
      </>
    </div>
  );
}

export default App;
