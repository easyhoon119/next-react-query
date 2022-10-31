import { useEffect } from "react";

function Loading() {
    useEffect(() => {
        console.log("....loading");
    }, []);

    return <div>{<p>.....로딩중</p>}</div>;
}

export default Loading;
