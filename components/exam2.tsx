import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { putData } from "../modules/api";

interface ExamProps {
    data:
        | {
              lang: string;
              country: string;
          }[]
        | undefined;
}

function Exam2({ data }: ExamProps) {
    // const [realData, setData] = useState<ExamProps["data"]>();

    // useEffect(() => {
    //     setData(data);
    // }, [data]);

    return (
        <>
            {data?.map((item: any) => (
                <React.Fragment key={item.lang}>
                    <p>name : {item.lang}</p>
                    <p>email : {item.country}</p>
                </React.Fragment>
            ))}
        </>
    );
}

export default Exam2;
