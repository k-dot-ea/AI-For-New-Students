import { useState } from 'react'
import { WebChatCustomElement } from '@ibm-watson/assistant-web-chat-react'
import { config } from './config'
import { IndexElements } from './indexElements'
import './assets/App.css'

const App = () => {

  // return <WebChatCustomElement className="WebChatContainer" config={config} />;
  const stylesInitializedRef = useState(false);

  return (
    <>
      <WebChatCustomElement
        className="WebChatContainer"
        config={config}
        onViewChange={(event, instance) => viewChangeHandler(event, instance, stylesInitializedRef)}
      />
      <IndexElements />
    </>
  );

}

/**
 * This function is called after a view change has occurred. It will trigger the animation for the main window and
 * then make the main window hidden or visible after the animation as needed.
 */
function viewChangeHandler(event, instance, stylesInitializedRef) {
  if (!stylesInitializedRef.current) {
    // The first time we get this, set the styles to their initial, default state.
    instance.elements.getMainWindow().addClassName('HideWebChat');
    instance.elements.getMainWindow().addClassName('WebChatStyles');
    stylesInitializedRef.current = true;
  }

  const mainWindowChanged = event.oldViewState.mainWindow !== event.newViewState.mainWindow;
  if (mainWindowChanged) {
    if (event.reason === 'sessionHistory') {
      // If we're re-opening web chat from session history, skip the animation by leaving out "StartOpenAnimation".
      if (event.newViewState.mainWindow) {
        instance.elements.getMainWindow().addClassName('OpenAnimation');
        instance.elements.getMainWindow().removeClassName('HideWebChat');
      } else {
        instance.elements.getMainWindow().addClassName('HideWebChat');
      }
    } else if (event.newViewState.mainWindow) {
      // Move the main window to the off-screen position and then un-hide it.
      instance.elements.getMainWindow().addClassName('StartOpenAnimation');
      instance.elements.getMainWindow().removeClassName('HideWebChat');
      setTimeout(() => {
        // Give the browser a chance to render the off-screen state and then trigger the open animation.
        instance.elements.getMainWindow().addClassName('OpenAnimation');
        instance.elements.getMainWindow().removeClassName('StartOpenAnimation');
      });
    } else {
      // Trigger the animation to slide the main window to the hidden position.
      instance.elements.getMainWindow().addClassName('CloseAnimation');
      instance.elements.getMainWindow().removeClassName('OpenAnimation');
      setTimeout(() => {
        // After the animation is complete, hide the main window.
        instance.elements.getMainWindow().addClassName('HideWebChat');
        instance.elements.getMainWindow().removeClassName('CloseAnimation');
      }, 500);
    }
  }
}

export default App
