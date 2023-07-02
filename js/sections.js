const privacyPolicySection = document.getElementById("main-section-privacy-policy");
const impressumSection = document.getElementById("main-section-impressum");  
const mainContentSection = document.getElementById("main-section-content");

const impressumLink = document.getElementById("impressum-link");
const privacyPolicyLink = document.getElementById("privacy-policy-link");
const aboutLink = document.getElementById("about-link");
const consultingLink = document.getElementById("consulting-link");
const workshopsLink = document.getElementById("workshops-link");

const sections = [privacyPolicySection, mainContentSection, impressumSection];
const mainSectionLinks = [aboutLink, consultingLink, workshopsLink];

function switchSection(newSection) {
    for (const section of sections) {
        section.hidden = true;
    }

    newSection.hidden = false;
}


function init() {
    
    privacyPolicyLink.addEventListener("click", function() {
        switchSection(privacyPolicySection)
    }, false)

    impressumLink.addEventListener("click", function() {
        switchSection(impressumSection)
    }, false)


    for (const mainSectionLink of mainSectionLinks) {
        mainSectionLink.addEventListener("click", function() {
            switchSection(mainContentSection)
        })
    }

    switchSection(mainContentSection)
}

init();

