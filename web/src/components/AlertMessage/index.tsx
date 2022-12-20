import { Alert } from "@material-tailwind/react";

interface props{
  message: string;
}
export function AlertMessage({message}:props) {
  return <Alert color="red">{message}</Alert>;
}