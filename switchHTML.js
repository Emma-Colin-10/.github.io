const mq = window.matchMedia("(max-width:768px)");
        const time = document.getElementById('time1');
        const time2 = document.getElementById('time2');
        const time3 = document.getElementById('time3');
        const time4 = document.getElementById('time4');
        const time5 = document.getElementById('time5');
        const time7 = document.getElementById('time7');
        const time8 = document.getElementById('time8');
        const time9 = document.getElementById('time9');
        const time10 = document.getElementById('time10');

        if (mq.matches) {
            time.parentNode.insertBefore(time, time.parentNode.firstChild);
            time2.parentNode.insertBefore(time2, time2.parentNode.firstChild);
            time3.parentNode.insertBefore(time3, time3.parentNode.firstChild);
            time4.parentNode.insertBefore(time4, time4.parentNode.firstChild);
            time5.parentNode.insertBefore(time5, time5.parentNode.firstChild);
            time7.parentNode.insertBefore(time7, time7.parentNode.firstChild);
            time8.parentNode.insertBefore(time8, time8.parentNode.firstChild);
            time9.parentNode.insertBefore(time9, time9.parentNode.firstChild);
            time10.parentNode.insertBefore(time10, time10.parentNode.firstChild);
        }