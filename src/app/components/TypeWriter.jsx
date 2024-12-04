// components/TypeWriter.jsx
"use client";
import { useEffect, useState } from "react";

const TypeWriter = ({ text, delay = 0.15, className }) => {
    const [displayText, setDisplayText] = useState("");
    const letters = Array.from(text);

    useEffect(() => {
        let timeouts = [];

        const typeAndErase = () => {
            letters.forEach((_, index) => {
                timeouts.push(
                    setTimeout(() => {
                        setDisplayText(text.slice(0, index + 1));
                    }, index * (delay * 1000))
                );
            });

            timeouts.push(
                setTimeout(() => {
                    letters.forEach((_, index) => {
                        timeouts.push(
                            setTimeout(() => {
                                setDisplayText(text.slice(0, letters.length - index - 1));
                            }, (index + letters.length + 6) * (delay * 1000))
                        );
                    });
                }, (letters.length + 10) * (delay * 1000))
            );

            timeouts.push(
                setTimeout(() => {
                    typeAndErase();
                }, (letters.length * 2 + 20) * (delay * 1000))
            );
        };

        typeAndErase();
        return () => timeouts.forEach(clearTimeout);
    }, [text, delay]);

    return (
        <div className={className + " relative"}>
            {displayText}
            <span
                className="inline-block w-[2px] h-[1.1em] bg-current ml-[2px] align-middle animate-cursor-blink"
                style={{ verticalAlign: '-0.1em' }}
            />
        </div>
    );
};

export default TypeWriter;