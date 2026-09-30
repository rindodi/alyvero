import type { Metadata } from "next";
import Tool from "./ui";
import ToolStructuredData from "@/components/ToolStructuredData";
import ToolContent from "@/components/ToolContent";
export const metadata: Metadata={title:"Merge PDF Online",description:"Combine multiple PDF files into one PDF directly in your browser.",alternates:{canonical:"/merge-pdf"},openGraph:{title:"Merge PDF Online | Alyvero",description:"Combine multiple PDF files into one PDF directly in your browser.",url:"https://www.alyvero.co.ke/merge-pdf",type:"website",images:[{url:"/opengraph-image"}]}};
export default function Page(){return <><ToolStructuredData name="Merge PDF Online" description="Combine multiple PDF files into one PDF directly in your browser." slug="merge-pdf"/><Tool/><ToolContent slug="merge-pdf"/></>}