async function slowScrollToElement(element, duration) {
    return new Promise((resolve, reject) => {
        let rect = element.getBoundingClientRect();
        let elementY = rect.top + window.scrollY;
        // let elementX = rect.left + window.scrollX;

        console.log("elementY: ", elementY);


        let startingY = window.pageYOffset;
        console.log("startingY: ", startingY);
        let diff = elementY - startingY;
        console.log("diff: ", diff);
        let start;
        let scrollToBottom;
        if (diff > 0) {
            scrollToBottom = true;
        } else {
            scrollToBottom = false;
        }
        // let isComplete = false;

        // Bootstrap our animation - it will get called right before next frame shall be rendered.
        window.requestAnimationFrame(async function step(timestamp) {
            console.log("timestamp", timestamp);
            if (!start) start = timestamp;
            // Elapsed milliseconds since start of scrolling.
            let time = timestamp - start;
            console.log("time: ", time);
            // Get percent of completion in range [0, 1].
            let percent = Math.min(time / duration, 1);
            console.log("percentt: ", percent);

            // window.scrollTo(0, startingY + diff * percent);
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: startingY + diff * percent
            });
            console.log("startingY + diff * percent: ", startingY + diff * percent);

            if (scrollToBottom) {
                if (elementY <= startingY + diff * percent) {
                    // isComplete = true;
                    resolve();
                }
            } else {
                if (elementY >= startingY + diff * percent) {
                    // isComplete = true;
                    resolve();
                }
            }

            let randomStoptime = Math.floor(Math.random() * (5000 - 0 + 1)) + 0;
            await delayTime(randomStoptime);
            // Proceed with animation as long as we wanted it to.
            if (scrollToBottom) {
                if (time < duration || elementY > startingY + diff * percent) {
                    window.requestAnimationFrame(step);
                }
            } else {
                if (time < duration || elementY < startingY + diff * percent) {
                    window.requestAnimationFrame(step);
                }
            }
        })
    })
}


async function slowScrollToElementAndClick(element, duration) {
    return new Promise((resolve, reject) => {
        let rect = element.getBoundingClientRect();
        let elementY = rect.top + window.scrollY;
        // let elementX = rect.left + window.scrollX;

        console.log("elementY: ", elementY);

        let startingY = window.pageYOffset;
        console.log("startingY: ", startingY);
        let diff = elementY - startingY;
        console.log("diff: ", diff);
        let start;
        let scrollToBottom;
        if (diff > 0) {
            scrollToBottom = true;
        } else {
            scrollToBottom = false;
        }

        // Bootstrap our animation - it will get called right before next frame shall be rendered.
        window.requestAnimationFrame(async function step(timestamp) {
            console.log("timestamp", timestamp);
            if (!start) start = timestamp;
            // Elapsed milliseconds since start of scrolling.
            let time = timestamp - start;
            console.log("time: ", time);
            // Get percent of completion in range [0, 1].
            let percent = Math.min(time / duration, 1);
            console.log("percentt: ", percent);

            // window.scrollTo(0, startingY + diff * percent);
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: startingY + diff * percent
            });
            console.log("startingY + diff * percent: ", startingY + diff * percent);

            if (scrollToBottom) {
                if (elementY <= startingY + diff * percent) {
                    let randomStoptimeWatch = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
                    await delayTime(randomStoptimeWatch);
                    let event = new MouseEvent('click', {
                        'view': window,
                        'bubbles': true,
                        'cancelable': true
                    });
                    element.dispatchEvent(event);
                    resolve();
                }
            } else {
                if (elementY >= startingY + diff * percent) {
                    let randomStoptimeWatch = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
                    await delayTime(randomStoptimeWatch);
                    let event = new MouseEvent('click', {
                        'view': window,
                        'bubbles': true,
                        'cancelable': true
                    });
                    element.dispatchEvent(event);
                    resolve();
                }
            }

            let randomStoptime = Math.floor(Math.random() * (5000 - 0 + 1)) + 0;
            await delayTime(randomStoptime);
            // Proceed with animation as long as we wanted it to.
            if (scrollToBottom) {
                if (time < duration || elementY > startingY + diff * percent) {
                    window.requestAnimationFrame(step);
                }
            } else {
                if (time < duration || elementY < startingY + diff * percent) {
                    window.requestAnimationFrame(step);
                }
            }

        })
    })
}
