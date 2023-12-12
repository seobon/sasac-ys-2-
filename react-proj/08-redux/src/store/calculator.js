const DEPOSIT = "calcul/DEPOSIT";
const WITHDRAW = "calcul/WITHDRAW";

export const deposit = (data) => ({ type: DEPOSIT, data });
export const withdraw = (data) => ({ type: WITHDRAW, data });

const initialValue = { balance : 0 };

const calculator = (state = initialValue, action) => {
  switch (action.type) {
    case "DEPOSIT":
    case DEPOSIT:
      return { balance: state.balance + Number(action.data) };
    case "WITHDRAW":
    case WITHDRAW:
      return { balance: state.balance - action.data };
    default:
      return state;
  }
};
// 실습 진행 중...

export default calculator;