"use client";

import { Button } from "@/components/ui/button";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    function handleClink(url: string) {
        window.open(url, "_blank", "noopener,noreferrer");
    }

    return (
        <footer id="footer" className="w-full -mt-10" aria-label="Footer">
            <p className="font-mono text-gray-200 text-center">
                &copy; {currentYear}{" "}
                <Button
                    variant="link"
                    className="p-0 hover:cursor-pointer"
                    onClick={() => handleClink("https://youtu.be/dQw4w9WgXcQ")}
                >
                    <u>SR</u>
                </Button>
                . All rights reserved
                <Button
                    variant="link"
                    className="p-0 hover:cursor-pointer"
                    onClick={() => handleClink("https://youtube.com/shorts/TajAzT3CVJc")}
                >
                    <u>.</u>
                </Button>
            </p>
        </footer>
    );
}
