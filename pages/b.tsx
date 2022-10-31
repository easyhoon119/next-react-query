import { useRouter } from "next/router";

function B() {
    const { push } = useRouter();

    return (
        <div>
            <p>b 페이지 임다 ㅎ</p>
            <button
                onClick={() => {
                    push("/");
                }}>
                home으로 이동
            </button>
        </div>
    );
}

export default B;
