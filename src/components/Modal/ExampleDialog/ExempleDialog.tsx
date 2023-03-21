import { useState } from "react";
import Button from "../../Button/Button";
import Dialog from "../Dialog/Dialog";

const ExampleDialog = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <Button title="Open Modal" onClick={() => setShow(true)} key="openModal" />
            <Dialog title="My Modal" onClose={() => setShow(false)} show={show} >
                <p>Modal is open!!!</p>
            </Dialog>
        </>
    )
}

export default ExampleDialog;