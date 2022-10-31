import { useEffect } from "react";

interface LoadingProps {
    seq: string;
}

function Loading({ seq }: LoadingProps) {
    useEffect(() => {
        console.log(`${seq}....loading`);
    }, []);

    return <div>{<p>.....로딩중</p>}</div>;
}

export default Loading;
