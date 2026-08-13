"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 30,
  pauseDelay = 1500,
}: {
  words: readonly string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDelay?: number;
}) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    let timer: NodeJS.Timeout;
    const currentWord = words[wordIdx % words.length];

    if (!isDeleting) {
      if (text !== currentWord) {
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typeSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      }
    } else {
      if (text !== "") {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deleteSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIdx((prev) => prev + 1);
        }, 0);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIdx, words, typeSpeed, deleteSpeed, pauseDelay]);

  return (
    <span>
      {text}
      <span className="animate-blink-cursor ml-0.5">|</span>
    </span>
  );
}
