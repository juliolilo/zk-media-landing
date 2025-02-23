import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
 
   
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = `ZkEditor - Blockchain-Powered Image Authentication & Traceability`,
    description = `ZkEditor ensures image authenticity and provenance using decentralized storage, cryptographic proofs, and blockchain-based traceability. Detect modifications, verify originality, and secure digital assets with cutting-edge AI and ZK technology.`,
     icons = [
        {
            rel: "icon",
            url: "/icons/icon-dark.png",
            media: "(prefers-color-scheme: light)",
        },
        {
            rel: "icon",
            url: "/icons/icon.png",
            media: "(prefers-color-scheme: dark)",
        },
    ],
  
    
}: MetadataProps = {}): Metadata => {
    

    return {
        
        title: {
            template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
            default: title
        },
        description,
        
        publisher: process.env.NEXT_PUBLIC_APP_NAME,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,
    };
};