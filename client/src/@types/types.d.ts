import React from "react";

type APIType={
    API_URL:string
}

type Task = {
    id:number,
    title:string,
    priority:number,
    createdAt:string,
    done:boolean,
    doneAt:string
}

type BoxType = {
    children: React.ReactNode
}