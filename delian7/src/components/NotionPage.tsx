import FullScreenSection from "./FullScreenSection";
import React, { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import { NotionAPI } from "notion-client";

interface NotionPageProps {
  pageId: string;
}

const NotionPage: React.FC<NotionPageProps> = ({pageId}) => {
  const [recordMap, setRecordMap] = useState<any>(null);

  useEffect(() => {
    async function fetchPage() {
      const notion = new NotionAPI({
        apiBaseUrl: 'http://localhost:3001/api'
      });

      try {
        debugger
        const recordMap = await notion.getPage(pageId)
        debugger
        if (recordMap) {
          setRecordMap(recordMap)
        }
      }
      catch (err) {
        console.error(err);
      }
      // setRecordMap(recordMap)
    }

    fetchPage();
    // const notion = new NotionAPI({
    //   apiBaseUrl: 'http://localhost:3001/api',
    //   authToken: "secret_SDhXCVaz8KTCqgdIdXFR6Dj4fVEMoWEDt2QF7dC"
    // });
    // const recordMap = await notion.getPage('067dd719a912471ea9a3ac10710e7fdf')
    // notion.getPage(pageId)
    //   .then((data: any) => {
    //   debugger
    //   setRecordMap(data)
    //   })
    //   .catch((err: any) => {
    //     console.error(err);
    //   }
    // );
  }, [pageId]);

  if (!recordMap) return <p>Loading...</p>;

  return (
    <FullScreenSection
      backgroundColor="#2A4365"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      width="100%"
    >
      <NotionRenderer recordMap={recordMap} fullPage darkMode={false} />;
    </FullScreenSection>
  )

}

export default NotionPage;