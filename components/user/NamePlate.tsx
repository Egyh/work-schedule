import { FaCheckCircle } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { GiNightSleep } from "react-icons/gi";


import React,  { useState } from "react";

type Status = "OFF" | "ON" | "OUT"


export type Plate = {
	name: string;
	comment: string;
	status: Status;
};

 const NamePlate =(props: Plate) => {
	// 状態に応じて各クラス名、テクストを取得する
	let statusClassName = {
		text: "",
		textColor: "",
		bgColor: "",
	};

	switch (props.status) {
		case "OFF":
			statusClassName.text = "OFF";
			statusClassName.textColor = "text-red-500";
			statusClassName.bgColor = "bg-red-500";
			break;
		case "ON":
			statusClassName.text = "ON";
			statusClassName.textColor = "text-emerald-600";
			statusClassName.bgColor = "bg-emerald-600";
			break;
		case "OUT":
			statusClassName.text = "OUT";
			statusClassName.textColor = "text-yellow-600";
			statusClassName.bgColor = "bg-yellow-600";
			break;
	}
	
	return (
		<div className="flex w-full border border-gray-300 max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
			<div
				className={`flex items-center justify-center w-12 ${statusClassName.bgColor}`}>
				{props.status === "OFF" ? (
					<ImCancelCircle className="w-6 h-6 text-white fill-current" />) 
				
				: props.status === "ON" ? (					
					<FaCheckCircle className="w-6 h-6 text-white fill-current" />)
				: props.status === "OUT" ?(
					<GiNightSleep className="w-6 h-6 text-white fill-current" />)
				: (
				// 上記の条件に一致しない場合はここに何も表示されないようにします
				<></>
			  )
			}
			</div>

			<div className="px-4 py-2 w-80">
				<div className="mx-3">
					<span className={`font-semibold ${statusClassName.textColor}`}>
						{statusClassName.text}
					</span>
					<p className="me-1 mb-0 text-gray-700">{props.name}</p>
					<span className="text-sm  text-gray-600 dark:text-gray-200 me-1">
						{props.comment}
					</span>
				</div>
			</div>
		</div>
	);
};

export default NamePlate;