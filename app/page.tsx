"use client"; // This directive indicates that the code is meant to run on the client side and the server side

import DOMPurify from "dompurify";
import Image from "next/image"; // Importing the Image component from Next.js for optimized image rendering
import { getPage, initLivePreview } from "@/lib/contentstack"; // Importing functions to get page data and initialize live preview from a local library
import { useEffect, useState } from "react"; // Importing React hooks for side effects and state management
import { Page } from "@/lib/types"; // Importing the Page type definition from a local types file
import ContentstackLivePreview, {
  VB_EmptyBlockParentClass,
} from "@contentstack/live-preview-utils"; // Importing live preview utilities from Contentstack

/**
 * The `Home` component is the main page component for the application.
 * It fetches and displays content from Contentstack, including the page title,
 * description, image, rich text, and blocks.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * This component uses the `useState` and `useEffect` hooks to manage state and side effects.
 * It initializes live preview functionality and listens for entry changes to update the content.
 */
export default function Home() {
  const [page, setPage] = useState<Page>(); // Declaring a state variable 'page' with its setter 'setPage', initially undefined

  const getContent = async () => {
    const page = await getPage("/"); // Asynchronously fetching page data for the root URL
    setPage(page); // Updating the state with the fetched page data
  };

  useEffect(() => {
    initLivePreview(); // Initializing live preview functionality
    ContentstackLivePreview.onEntryChange(getContent); // Setting up an event listener to fetch content on entry change
  }, []);

  return (
    <main className="max-w-(--breakpoint-md) mx-auto">
      {/* Main container with max width and centered alignment */}
      Hello world
    </main>
  );
}
