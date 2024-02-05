'use client';
import Header from "@/components/Header";
import NamePlate, { NamePlateProps } from "@/components/User/NamePlate";
import  Form  from "@/components/User/Form";
import Footer from "@/components/Footer";
import UserList from "@/components/User/NamePlateList";


// const UserInfo = {
// 	name: "Hamaguchi",
// 	comment: "TODO内容はここに記載します。",
// };

const Userinfo: NamePlateProps[] = [
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
]

export default function Home() {
	return (
    <>
		<Header/>
    <UserList data={Userinfo}/>
    <Form/>
    <Footer/>
    </>
	);
}