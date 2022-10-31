import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { putData } from "../modules/api";

interface ExamProps {
    data:
        | {
              name: string;
              email: string;
          }[]
        | undefined;
}

function Exam({ data }: ExamProps) {
    // const [realData, setData] = useState<ExamProps["data"]>();

    // useEffect(() => {
    //     setData(data);
    // }, [data]);

    return (
        <>
            {data?.map((item: any) => (
                <React.Fragment key={item.name}>
                    <p>name : {item.name}</p>
                    <p>email : {item.email}</p>
                </React.Fragment>
            ))}
        </>
    );
}

export default Exam;
