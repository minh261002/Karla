"use client";
import { JSX, useEffect } from "react";

export default function ClientWrapper(): JSX.Element {
    useEffect(() => {
        import('@tabler/core/dist/js/tabler.min.js')
            .then(() => {
                // JS loaded
            })
            .catch((err) => console.error("Failed to load Tabler JS:", err));
    }, []);

    return <></>;
}
