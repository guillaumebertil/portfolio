import { useState } from "react"

export default function ProjectImg({url, alt}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <img
                src={`${url}`}
                alt={`${alt}`}
                className="w-80 cursor-pointer"
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black/80"
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={`${url}`}
                        alt={`${alt}`}
                        className="max-w-[80%] max-h-[80%]"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}