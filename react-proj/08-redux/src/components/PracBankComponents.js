import { useState } from "react";
import { BalanceWindowAlert, ATMFunc } from "../containers/PracBank"

export function BankName() {
    return (
        <>
            <h1>코딩온 은행</h1>
            <BalanceWindowAlert />
        </>

    )
}

export function BalanceWindow({balance}) {
    return (
        <>
            <h2>잔액: {balance}</h2>
            <ATMFunc />
        </>
    )
}

export function ATM(props) {
    const { chaingeCash, balanceDeposit, balanceWithdraw } = props;

    return (
        <>
            <input type="number" onChange={chaingeCash}/>
            <button onClick={balanceDeposit}>입금</button>
            <button onClick={balanceWithdraw}>출금</button>
        </>
    )
}