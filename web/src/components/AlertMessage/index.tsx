import { Alert, Button } from "@material-tailwind/react";
import { Fragment, useState } from "react";

interface props{
  message: string;
  show: boolean;
  color: "red";
  showAlert: () => void
}
export function AlertMessage({message, showAlert, show, color}:props) {
  return (
      <Alert
        color={color}
        show={show}
        dismissible={{
          onClose: () => showAlert(),
        }}
      >
        {message}
      </Alert>

  );
}