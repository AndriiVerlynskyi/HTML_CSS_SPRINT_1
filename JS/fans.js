// const IssueContainer = document.createElement('div').classList.add(
//     ['main-content-container', 'col-11', 'col-sm-11', 'col-md-10', 'col-lg-10', 'col-xl-8']
// )
// const fansPageContainer = document.createElement('div').classList.add('fans-page-container');
// const textContainer = document.createElement('div').classList.add('text-container');
// const issueFooterContainer = document.createElement('div').classList.add('fans-page-footer-of-container');
// const issueContainerDate = document.createElement('div').classList.add('fans-page-container-date');
// issueContainerDate.innerHTML = new Date.now;
// const issueContainerName = document.createElement('div').classList.add('fans-page-container-name');
// issueContainerName.innerHTML = 'FootballFan2000';

// issueFooterContainer.appendChild(issueContainerDate);
// issueFooterContainer.appendChild(issueContainerName);
// fansPageContainer.appendChild(textContainer);
// fansPageContainer.appendChild(issueFooterContainer);
// IssueContainer.appendChild(fansPageContainer);


const section = document.querySelector('section');
const issueField = document.getElementById('issueField');


const sendIssueBtn = document.getElementById('sendIssueBtn');

sendIssueBtn.addEventListener( "click", (e) => {
    e.preventDefault()

    const IssueContainer = document.createElement('div')
    IssueContainer.classList.add(
        'main-content-container', 'col-11', 'col-sm-11', 'col-md-10', 'col-lg-10', 'col-xl-8'
    )
    const fansPageContainer = document.createElement('div')
    fansPageContainer.classList.add('fans-page-container');
    const textContainer = document.createElement('div')
    textContainer.classList.add('text-container');
    textContainer.innerHTML = issueField.value
    const issueFooterContainer = document.createElement('div')
    issueFooterContainer.classList.add('fans-page-footer-of-container');
    const issueContainerDate = document.createElement('div')
    issueContainerDate.classList.add('fans-page-container-date');
    issueContainerDate.innerHTML = new Date()
    const issueContainerName = document.createElement('div')
    issueContainerName.classList.add('fans-page-container-name');
    issueContainerName.innerHTML = 'FootballFan2000';
    
    issueFooterContainer.appendChild(issueContainerDate);
    issueFooterContainer.appendChild(issueContainerName);
    fansPageContainer.appendChild(textContainer);
    fansPageContainer.appendChild(issueFooterContainer);
    IssueContainer.appendChild(fansPageContainer);
    section.prepend(IssueContainer)
    
    issueField.value = ''
})