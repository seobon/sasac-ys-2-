// 온라인 콘텐츠에는 없으므로 잘 듣고 더 궁금한 것은 공식문서를 확인하기를
// 수업에서는 자주 사용하는 것만 알려주겠다
import { useForm } from "react-hook-form"

export default function SignUp () {
    const {register, handleSubmit, formState: { errors }, watch} = useForm();
    const onValid = (data) => {
        console.log("성공", data)
        // 보통 여기에 동적 폼전송 코드를 작성함
    };
    const onInvaild = (err) => {
        console.log("실패", err)
    };

    const genderRegister = register("gender", {
        required: "성별은 필수값입니다."
    });

    // console.log(watch(ID))
    // register("ID")
    return (
        <>
            <h4>react hook form 테스트</h4>
            {/* handleSubmit(onValid[, onInvaild])
            대괄호 안에는 선택값이다.
            onValid : 폼을 정상적으로 제출할 수 있는 상태일 때, 실행시킬 함수
            onInvaild : (선택값) 폼을 제출할 수 없을 때 실행시킬 함수*/}
            <form onSubmit={handleSubmit(onValid, onInvaild)}>
                <input type="text" placeholder="아이디" {...register("ID", {
                    required: "아이디는 필수값입니다.",
                })}/>
                {/* {errors.ID && errors.ID.message} */}
                {errors.ID?.message}
                <br />
                <input type="text" placeholder="이름" {...register("username", {
                    required: "이름은 필수값입니다.",
                    // minLength: 2,
                    minLength: {
                        value: 2, // 최소값 지정
                        message: "이름은 두 글자 이상 입력해야합니다.", // 최소값을 만족하지 못했을 때, 발생시키는 오류 메세지
                    }
                })}/>
                {errors.username?.message}
                <br />
                <input type="text" placeholder="이메일" {...register("email", {
                    required: "이메일은 필수값입니다.",
                    // pattern: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                    // pattern: {
                    //     value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    //     message: "올바른 형태의 이메일을 입력해주세요.", // 최소값을 만족하지 못했을 때, 발생시키는 오류 메세지
                    // },
                    validate: (v) => v.includes("gmail.com") || "gmail로만 가입이 가능합니다."
                })}/>
                {errors.email?.message}
                <br />
                <label htmlFor="gender-woman">
                    <input type="radio" value="여" id="gender-woman" {...genderRegister} />{" "}여
                </label>
                <label htmlFor="gender-man">
                    <input type="radio" value="남" id="gender-man" {...genderRegister} />{" "}남
                </label>
                {errors.gender?.message}
                <br />
                <select {...register("option", {required: "옵션은 필수값입니다.",})}>
                    <option value={""}>옵션</option>
                    <option value={"option-1"}>옵션 1</option>
                    <option value={"option-2"}>옵션 2</option>
                    <option value={"option-3"}>옵션 3</option>
                </select>
                {errors.option?.message}
                <br />
                <button type="submit">회원가입</button>
            </form>
        </>
    );
}