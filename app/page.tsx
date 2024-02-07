'use client';
import Header from "@/components/Header";
import NamePlate from "@/components/User/NamePlate";
import  UserForm  from "@/components/User/UserForm";
import Footer from "@/components/Footer";
import PlateListForm from "@/components/User/NamePlateList"; "@/components/User/NamePlate";
import React,  { useState } from "react";


// const UserInfo = {
// 	name: "Hamaguchi",
// 	comment: "TODO内容はここに記載します。",
// };



export default function Home() {
	return (
    <>
		<Header/>
    <PlateListForm/>
    <Footer/>
    </>
	);
}