'use client';
import Header from "@/components/Header";
import NamePlate from "@/components/user/NamePlate";
import Form from "@/components/user/form";
import Footer from "@/components/Footer";

const NamePlate = {
	name: "Hamaguchi",
	content: "TODO内容はここに記載します。",
};

export default function Home() {
	return (
    <>
		<Header/>
    <NamePlate {...NamePlate} />
    <Form/>
    <Footer/>
    </>
	);
}