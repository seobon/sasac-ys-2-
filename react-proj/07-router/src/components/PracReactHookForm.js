import { useForm } from "react-hook-form"

export default function PracReactHookForm() {
    const { register, handleSubmit, formState: { errors }, watch} = useForm();
    const onValid = (data) => {
        console.log(data)
    };
    const onInvaild = (err) => {
        console.log("실패", err)
    };
    
    return (
        <>
            <form onSubmit={handleSubmit(onValid, onInvaild)}>
                <input type="text" placeholder="이름" {...register("name", {
                    required: "이름은 필수값입니다."
                })}/>
                {errors.name?.message}
                <br />
                <input type="number" placeholder="나이" {...register("age", {
                    validate: (v) => v > 0 || "0 이상의 숫자만 입력 가능합니다."
                })}/>
                {errors.age?.message}
                <br />
                <button type="submit">제출</button>
            </form>
        </>
    )
}