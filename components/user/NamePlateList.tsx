import React,  { useState } from "react";
import NamePlate, { Plate } from "./NamePlate";
import UserForm from "./UserForm";

const PlateListForm = (): JSX.Element => {
    const [namePlateList, setPlateList] = useState<Plate[]>([
        {
            name: "Hamaguchi",
            comment: "TODO内容はここに記載します。",
            status: "Done",
        },

        {
            name: "Hamaguchi",
            comment: "TODO内容はここに記載します。",
            status: "Progress",
        },

        {
            name: "Hamaguchi",
            comment: "TODO内容はここに記載します。",
            status: "Incomplete",
        }
        ]);
    
    const addPlateOnClick = (plate: Plate) => {
    
        const newPlateList = [...namePlateList];

        newPlateList.push(plate);
        setPlateList(newPlateList);
        console.log("add");
    
    };

    return (
        <>
        {namePlateList.map((plate, i) => {
            return<NamePlate key={i} {...plate}/>
        })}
        <UserForm addPlateOnclick={addPlateOnClick}/>
        </>
    );
    };


export default PlateListForm;