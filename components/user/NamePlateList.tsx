'use client'
import React,  { useState } from "react";
import NamePlate, { Plate } from "./NamePlate";
import UserForm from "./UserForm";
import usePlateStore from "@/stores/store";


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

        const [statuses, setStatuses] = useState([
            "All",
            "Incomplete",
            "Progress",
            "Done",
        ]);

        
     
        
    
    const addPlateOnClick = (plate: Plate) => {
    
        const newPlateList = [...namePlateList];

        newPlateList.push(plate);
        setPlateList(newPlateList);
        console.log("add");
    
    };

    return (
        <>
        <div className={`flex w-fit${statuses.length}`}>
            {statuses.map((status, i) => {
                // filterを使用してTodoListの状態に応じてフィルタリングする
                const filteredPlateList = namePlateList.filter(
                    // statusが"All"の場合はフィルタリングしない
                    (item) => status === "All" || item.status === status
                );
            
                return (
                    <div key={i} className="mx-2 px-4 py-2 rounded-lg bg-gray-200">
                        {/* statusに対応したタグを設置 */}
                        <span
                            className="inline-flex items-center py-1.5 px-3 mb-1 rounded-full text-xs font-medium bg-gray-500 text-white">
                            {status}
                        </span>

                   
                        {/* filterしたTodoListをmapで回してTodoを描画*/}
                        {filteredPlateList.map((plate, j) => (
                            <div key={j}>
                                <NamePlate {...plate} />
                            </div>
                        ))}
                        {/* statusがAllの時だけtTodoFormを設置 */}
                        {status === "All" && <UserForm addPlateOnclick={addPlateOnClick} />}
                    </div>
                );
            })}
            </div>
        </>
    );
    };


export default PlateListForm;