import React from "react"
import { ContentBody } from './contentBody/contentBody'
// import { ContentButtons } from './contentButtons/contentButtons'
import './contentSection.css'

const ContentSection = () => {

    return (
        // <div id="content">
        //     <div class="mx-auto flex min-h-[800px] flex-col items-center justify-center py-32 text-white sm:py-32">
        //         <div class="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-md" style="opacity: 1; will-change: opacity, transform; transform: none;">
        //             <div class="button before:bg-pink after:bg-pink text-blue-d relative w-full text-center sm:w-fit before:absolute before:left-0 before:top-1/2 before:z-[1] before:aspect-square before:h-3 before:-translate-y-1/2 before:transition-all after:absolute after:right-0 after:top-0 after:z-[0] after:h-full after:w-[calc(100%-15px)] after:transition-all focus-within:after:w-[calc(100%-30px)] hover:after:w-[calc(100%-30px)]">
        //                 <a href="/study/undergraduate" aria-label="Find your course" class="button before:bg-pink after:bg-pink relative z-[1] block h-full px-6 py-4 text-tag font-bold uppercase leading-[1.5] no-underline outline-none transition-all md:text-base before:absolute before:left-0 before:top-0 before:h-[calc(100%/2-0.35rem)] before:w-5 before:transition-all after:absolute after:bottom-0 after:left-0 after:h-[calc(100%/2-0.35rem)] after:w-5 after:transition-all hover:pl-[40px] hover:text-current hover:before:left-[15px] hover:after:left-[15px] focus-within:pl-[40px] focus-within:before:left-[15px] focus-within:after:left-[15px]">Find your course</a>
        //             </div>
        //             <div class="button before:bg-pink after:bg-pink text-blue-d relative w-full text-center sm:w-fit before:absolute before:left-0 before:top-1/2 before:z-[1] before:aspect-square before:h-3 before:-translate-y-1/2 before:transition-all after:absolute after:right-0 after:top-0 after:z-[0] after:h-full after:w-[calc(100%-15px)] after:transition-all focus-within:after:w-[calc(100%-30px)] hover:after:w-[calc(100%-30px)]">
        //                 <a href="/choose-hull/student-life" aria-label="Why Hull?" class="button before:bg-pink after:bg-pink relative z-[1] block h-full px-6 py-4 text-tag font-bold uppercase leading-[1.5] no-underline outline-none transition-all md:text-base before:absolute before:left-0 before:top-0 before:h-[calc(100%/2-0.35rem)] before:w-5 before:transition-all after:absolute after:bottom-0 after:left-0 after:h-[calc(100%/2-0.35rem)] after:w-5 after:transition-all hover:pl-[40px] hover:text-current hover:before:left-[15px] hover:after:left-[15px] focus-within:pl-[40px] focus-within:before:left-[15px] focus-within:after:left-[15px]">Why Hull?</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div id="content">
            <ContentBody />
            {/* <ContentButtons /> */}
        </div>
    );
}

export { ContentSection }