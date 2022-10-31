import axios from "axios";
import { ExamType } from "./type";

export const fetData = async () => {
    const url = `http://localhost:4000`;

    const res = await axios({
        method: "get",
        url,
    });

    return res.data;
};

export const putData = async () => {
    const url = "http://localhost:4000/modify/jihoon";

    const res = await axios({
        method: "put",
        url,
    });

    return res.data;
};
