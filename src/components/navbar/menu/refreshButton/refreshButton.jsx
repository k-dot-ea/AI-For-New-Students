import React from "react";
import refreshIcon from '../../../../assets/images/icons8-refresh.svg'
import refreshIcon2 from '../../../../assets/images/refreshicon.gif'
import './refreshButton.css';

const RefreshButton = () => (
    <button
        id="refresh-button"
        className="refresh-button"
        onClick={() => window.location.reload()}
        title="Refresh Page"
    >
        <h2 id="hidden">refresh</h2>
        <div id="refresh">
            <a href='#'>
                <img className="refreshDefault" src={refreshIcon}
                    alt="Refresh Button" width="35" height="35" viewBox="0 0 48 48" />
                <img className="refreshActive" src={refreshIcon2}
                    alt="Refresh Button" width="35" height="35" viewbox="0 0 48 48" />
            </a>
        </div>
    </button>
);

export { RefreshButton };
