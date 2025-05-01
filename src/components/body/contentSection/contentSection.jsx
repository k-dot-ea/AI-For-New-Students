import React from "react"
import { ContentBody } from './contentBody/contentBody'
import { ContentButtons } from './contentButtons/contentButtons'
import './contentSection.css'

const ContentSection = () => {

    return (
        <div id="content">
            <ContentBody />
            <ContentButtons />
        </div>
    );
}

export { ContentSection }