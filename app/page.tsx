"use client"; 

import DOMPurify from "dompurify";
import Image from "next/image"; 
import { getPage, initLivePreview } from "@/lib/contentstack"; 
import { useEffect, useState } from "react"; 
import { Page } from "@/lib/types"; 
import ContentstackLivePreview, {
  VB_EmptyBlockParentClass,
} from "@contentstack/live-preview-utils"; 
export default function Home() {
  const [page, setPage] = useState<Page>(); 
  const getContent = async () => {
    const page = await getPage("/"); 
    setPage(page); 
  };


  useEffect(() => {
    initLivePreview(); 
    ContentstackLivePreview.onEntryChange(getContent); 
  }, []);

  return (
    <main className="max-w-(--breakpoint-md) mx-auto">
      Hello world in nextJS!!
    </main>
  );
}
