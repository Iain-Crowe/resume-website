import React, { useState, useEffect } from "react";

function Typewriter({ contents, speed = 25, onTypingEnd }) {
    const [currentContent, setCurrentContent] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [typingCompleted, setTypingCompleted] = useState(false);

    useEffect(() => {
        if (!typingCompleted) {
            const contentItems = contents.map((content, index) => ({
                ...content,
                index: 0,
                isTyping: index === 0,
            }));

            const typeNextChar = (items, currentIndex) => {
                const newItems = [...items];
                const currentItem = newItems[currentIndex];

                if (currentItem.index < currentItem.text.length) {
                    currentItem.index++;
                    setCurrentContent(newItems);
                    setTimeout(
                        () => typeNextChar(newItems, currentIndex),
                        speed
                    );
                } else if (currentIndex < newItems.length - 1) {
                    currentItem.isTyping = false;
                    newItems[currentIndex + 1].isTyping = true;
                    setActiveIndex(currentIndex + 1);
                    setCurrentContent(newItems);
                    setTimeout(
                        () => typeNextChar(newItems, currentIndex + 1),
                        0
                    );
                } else {
                    currentItem.isTyping = false;
                    setCurrentContent(newItems);
                    setTypingCompleted(true);
                    if (onTypingEnd) {
                        onTypingEnd();
                    }
                }
            };

            typeNextChar(contentItems, 0);
        }
    }, [contents, speed, onTypingEnd, typingCompleted]);

    return (
        <div>
            {currentContent.map((item, index) => (
                <p key={index} className={item.className}>
                    {item.text.substring(0, item.index)}
                    {item.isTyping && (
                        <span className="cursor-blink text-theme-gray">█</span>
                    )}
                </p>
            ))}
        </div>
    );
}

export default Typewriter;
