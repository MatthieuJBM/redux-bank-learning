import { useSelector } from "react-redux";

//react-redux/es/hooks/useSelector

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
