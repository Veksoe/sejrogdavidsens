const navItemEls = document.querySelectorAll("nav .navItem");
const localNavItemEls = document.querySelectorAll(".localNav .navItem");
const filterButtonEls = document.querySelectorAll(".filterGroup h3");
const filterOpenIcons = document.querySelectorAll(".filterGroup i")
const filterOptionEls = document.querySelectorAll(".options");
const startTestContainerEl = document.querySelector(".testStart ")
const startTestBtnEl = document.querySelector(".testStart button")
const questionTestContainerEl = document.querySelector(".testQuestion ")
const answerTestEls = document.querySelectorAll(".testQuestion .testAnswer")
const previousQuestionBtnEl = document.querySelector(".testQuestion .back")
const nextQuestionBtnEl = document.querySelector(".testQuestion .nextQuestion")
const testResultContainerEl = document.querySelector(".testResult")



// FUNCTION CALLS
dynamicActiveNavbar();



// DYNAMIC ACTIVE INDICATOR FOR GLOBAL AND LOCAL NAV 
function dynamicActiveNavbar() {
    navItemEls.forEach(item => {
        if (item.href === window.location.href) {
            item.classList.toggle("active");
        }
    })

    localNavItemEls.forEach(item => {
        item.addEventListener('click', function () {
            localNavItemEls.forEach(item => {
                //  Remove active-class on all icons 
                item.querySelector(" i").classList.remove('active')
            });
            // Add active-class on the clicked icon.
            this.querySelector(" i").classList.add('active');
        });
    });
}


// OPEN AND CLOSE THE OPTIONS FOR THE FILTERS 
if (filterButtonEls) {
    for (let index = 0; index < filterButtonEls.length; index++) {
        filterButtonEls[index].addEventListener("click", () => {
            filterOptionEls.forEach(item => {
                if (!item.classList.contains("hidden")) {
                    item.classList.add("hidden")
                    filterOpenIcons.forEach(icon => {
                        icon.classList.remove("active");
                        icon.classList.remove("rotate180deg");
                    })
                }
            })
            filterOptionEls[index].classList.toggle("hidden");
            filterOpenIcons[index].classList.toggle("rotate180deg");
            filterOpenIcons[index].classList.toggle("active");
        })
    }
}

if (startTestBtnEl) {
    startTestBtnEl.addEventListener('click', () => {

        startTestContainerEl.classList.toggle("hidden");
        questionTestContainerEl.classList.toggle("hidden")
    })
}

if (answerTestEls) {
    answerTestEls.forEach(answer => {
        answer.addEventListener('click', () => {

            answer.classList.toggle("active")
        })
    })

}
if (previousQuestionBtnEl) {
    previousQuestionBtnEl.addEventListener('click', () => {

        startTestContainerEl.classList.toggle("hidden");
        questionTestContainerEl.classList.toggle("hidden")
    })
}

if (nextQuestionBtnEl) {
    nextQuestionBtnEl.addEventListener('click', () => {

        questionTestContainerEl.classList.toggle("hidden")
        testResultContainerEl.classList.toggle("hidden");
    })
}