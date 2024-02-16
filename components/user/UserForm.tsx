import React,  { useState } from "react";
import { Plate } from "./NamePlate";
import usePlateStore from "@/stores/store";

type Status = "Done" | "Progress" | "Incomplete"

type UserFormProps = {
	addPlateOnclick: (plate: Plate) => void;
}



 const UserForm = (props: UserFormProps): JSX.Element => {
	const [formUser, setFormUser] = usePlateStore((state) => [state.formUser, state.setFormUser]);

	
	const handlerAddPlateOnclick = () => {
		props.addPlateOnclick(formUser);
	}

	

	const handlerPlateNameFormOnChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const newForm = { ...formUser };
		newForm.name = event.target.value;
		setFormUser(newForm);
	};

	const handlerPlateCommentFormOnChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const newForm = { ...formUser };
		newForm.comment = event.target.value;
		setFormUser(newForm);
	};

	const handlerStatusFormOnChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const newForm = { ...formUser };
        newForm.status = event.target.value as Status;
        setFormUser(newForm);
    };

	

return (
<div className="w-100 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
			<p>{formUser.name}</p>
			<p>{formUser.comment}</p>
			<form onSubmit={(e) => e.preventDefault()}>
				<div className="m-2">
					<label className="text-gray-400">名前</label>
					<input
						type="text"
						value={formUser.name}
						onChange={handlerPlateNameFormOnChange}
						className="block rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>

				<div className="m-2">
					<label className="text-gray-400">コメント</label>
					<input
						type="text"
						value={formUser.comment}
						onChange={handlerPlateCommentFormOnChange}
						className="block  rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>

				<div className="m-2">
                    <label className="text-gray-400">ステータス</label>
                    <select
                        value={formUser.status}
                        onChange={handlerStatusFormOnChange}
                        className="block rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option value="Incomplete">未完了</option>
                        <option value="Progress">実行中</option>
                        <option value="Done">完了</option>
                    </select>
                </div>

				<div className="m-2">
					<button
						onClick={handlerAddPlateOnclick}
						className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						TODO追加
					</button>
				</div>
			</form>
		</div>
   );

};

export default UserForm;