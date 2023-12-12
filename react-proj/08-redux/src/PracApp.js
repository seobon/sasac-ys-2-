import "./App.css";
import { useDispatch, useSelector } from "react-redux";
// import { increase, decrease } from "./store/counterReducer";
import { BankName } from "./components/PracBankComponents";

function PracApp() {
  return (
    <div>
        <BankName />
    </div>
  );
}

export default PracApp;
