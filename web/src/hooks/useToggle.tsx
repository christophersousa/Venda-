import { useState } from "react";

export default function useToggle() {
    const [on, setOn] = useState(false);
    const [show, setShow] = useState(false);
    const [onPayment, setOnPayment] = useState(false)

    const toggler = () => {
      setOn((on) => !on);
    };

    const showAlert = () => {
      setShow((show) => !show);
    }

    const showAlertTrue = () =>{
      setShow(true)
    }

    const showPayment = () => {
      setOnPayment((onPayment) => !onPayment)
    }

    return { on, toggler, showAlert, show, showAlertTrue, showPayment, onPayment};
  }