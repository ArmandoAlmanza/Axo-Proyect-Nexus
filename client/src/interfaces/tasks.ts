import { Dispatch, SetStateAction } from "react";

export interface Task {
    title: string;
    status: string;
    description: string;
    assigned: string;
    assigned_to: string;
    end_date: string;
    start_date: string;
}

export interface TaskModalProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;

    title: string;
    description: string;
    status: string;
    end_date: string;
    start_date: string;
    type: string;
    assigned_by: {
        name: string;
        img: string;
    };
    assigned_to: {
        name: string;
        img: string;
    };
}