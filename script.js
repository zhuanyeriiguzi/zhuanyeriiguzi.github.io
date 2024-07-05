const encounterDate = new Date('2024-04-14T17:00:00');
const timeElapsedElement = document.getElementById('timeElapsed');

function updateTimeElapsed() {
    const now = new Date();
    const timeDifference = now - encounterDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    timeElapsedElement.innerText = `琦琦与晨晨相遇的 ${days} 天 ${hours} 时 ${minutes} 分 ${seconds} 秒`;
}

setInterval(updateTimeElapsed, 1000);
updateTimeElapsed();
