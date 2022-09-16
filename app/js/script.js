console.log('Hi');

const test = () => {
	console.log('this is a test');
};

// Nav operations
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".navbar-toggler");
const navToggler = document.querySelector(".navbar-toggle-icon");


navToggle.addEventListener("click", () => {
	const visibility = nav.getAttribute("data-visible");

	if (visibility === "false") {
		nav.setAttribute("data-visible", true);
		navToggler.className = 'navbar-toggle-icon open';
		
	} else {
		nav.setAttribute("data-visible", false);
		navToggler.className = 'navbar-toggle-icon';
	}

	console.log(visibility)

})

// Tab opperations 

const tabPanel = document.querySelectorAll('.tab-span');

tabPanel.forEach( (tab) => tab.addEventListener("click", changeTabPanel)
);

function changeTabPanel(e) {
    const targetTab = e.target;     /* This refers back to the particular element that triggers the event, 
                                       which is "click" in this case */
    const targetArticle = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image")
    const tabContainer = targetTab.parentNode;
    const secondaryContainer = tabContainer.parentNode;
    const primaryContainer = secondaryContainer.previousElementSibling;
    
    secondaryContainer
        .querySelectorAll('.tab-article')
        .forEach((article) => article.setAttribute('hidden', true));

    secondaryContainer.querySelector(`#${targetArticle}`).removeAttribute('hidden');

    primaryContainer
        .querySelectorAll('.image-holder')
        .forEach((image) => image.setAttribute('hidden', true));

    primaryContainer.querySelector(`#${targetImage}`).removeAttribute('hidden');

} 