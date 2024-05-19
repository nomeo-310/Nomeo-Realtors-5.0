'use client'

import React from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi2';

type frequentlyAskedQuestionProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
};

const FrequentlyAskedQuestion = ({ title, content, isOpen, onClick }:frequentlyAskedQuestionProps) => {

  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;
      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li className={` border-b ${isOpen ? "bg-neutral-200 " : ""}`} onClick={onClick}>
      <div className="w-full flex lg:items-center justify-between lg:p-4 p-3 gap-4">
        <h2 className="lg:text-xl text-lg">
          <button className={`font-medium text-left ${ isOpen ? "font-semibold" : ""}`}>
            {title}
          </button>
        </h2>
        <div>
          { isOpen ? <HiMinus size={22}/> : <HiPlus size={22}/> }
        </div>
      </div>
      <div className="ease-in-out transition-[height] duration-200 overflow-hidden" style={{height: `${height}px`}}>
        <div className="lg:p-4 p-3 lg:text-lg" ref={contentRef}>
          {content}
        </div>
      </div>
    </li>
  );
};

export default FrequentlyAskedQuestion