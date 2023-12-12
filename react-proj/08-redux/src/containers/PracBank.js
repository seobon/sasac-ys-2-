import { useSelector, useDispatch } from "react-redux";
import { BankName, BalanceWindow, ATM } from "../components/PracBankComponents";
import { deposit, withdraw } from "../store/calculator";
import { useState } from "react";

export function BankNameAlert() {
    return <BankName/>;
}

export function BalanceWindowAlert() {
    const balance = useSelector((state)=>state.calcul.balance);
    return <BalanceWindow balance={balance} />
}

export function ATMFunc() {
    const balance = useSelector((state)=>state.calcul.balance)
    const [ remittance, setRemittance ] = useState(0);

    const chaingeCash = (e) => setRemittance(e.target.value)
    const dispatch = useDispatch();
    const balanceDeposit = () => dispatch(deposit(remittance));
    const balanceWithdraw = () => dispatch(withdraw(remittance));
    return (
        <>
            <ATM 
            chaingeCash={chaingeCash}
            balanceDeposit={balanceDeposit}
                balanceWithdraw={balanceWithdraw}
            />
        </>
    )

}