import React from 'react'
import './menuList.css'

const MenuItem = ({ title, href }) => (
    <li>
        <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls={`radix-:${title}`}
            data-state="closed"
            className="menulist-li opacity-100 group-hover/list:opacity-60 false group/item flex w-full cursor-pointer items-center gap-2 text-[21px] font-bold transition-opacity duration-500 hover:!opacity-100 sm:text-h3"
            value={title}
            title={title}
        >
            <h2 id={`radix-:${title}`} className="text-slate-950 dark:text-slate-50 text-lg font-semibold hidden">{title}</h2>
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className="false h-[36px] w-[36px] transition-transform duration-300 group-hover/item:translate-x-[10px] md:h-[48px] md:w-[48px]">
                <title>right arrow</title>
                <g strokeLinecap="square" strokeWidth="4" fill="none" stroke="white" strokeLinejoin="miter" strokeMiterlimit="10">
                    <polyline points="20,16 28,24 20,32 " stroke="white"></polyline>
                </g>
            </svg>
        </button>
    </li>
)


export { MenuItem }