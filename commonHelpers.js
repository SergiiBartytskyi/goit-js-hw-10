import"./assets/styles-c1f60b13.js";import{f as y,i}from"./assets/vendor-77e16229.js";function h(e){const s=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),p=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:m,seconds:p}}function n(e){return e.toString().padStart(2,"0")}const t={myInput:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),daysSpan:document.querySelector("[data-days]"),hoursSpan:document.querySelector("[data-hours]"),minutesSpan:document.querySelector("[data-minutes]"),secondsSpan:document.querySelector("[data-seconds]")};t.myInput.classList.add("input");let o=null;const d=1e3,f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){o=e[0],S(o)}};y(t.myInput,f);i.settings({timeout:3e3,transitionIn:"fadeInDown",position:"topRight"});t.startBtn.setAttribute("disabled",!0);t.startBtn.addEventListener("click",b);function S(e){e>=Date.now()?t.startBtn.removeAttribute("disabled"):(t.startBtn.setAttribute("disabled",!0),i.error({title:"Error",message:"Please choose a date in the future",iconUrl:"./img/iconError.svg",theme:"dark",color:"rgb(239, 64, 64)"}))}function b(){t.myInput.setAttribute("disabled",!0),t.startBtn.setAttribute("disabled",!0),console.dir(t.myInput);const e=setInterval(()=>{const r=o-new Date,{days:u,hours:c,minutes:s,seconds:a}=h(r);t.daysSpan.textContent=n(u),t.hoursSpan.textContent=n(c),t.minutesSpan.textContent=n(s),t.secondsSpan.textContent=n(a),r<d&&(clearInterval(e),i.success({title:"OK",message:`${o} is now`,iconUrl:"./img/iconSuccess.svg",theme:"dark",color:"rgb(89, 161, 13)"}))},d)}
//# sourceMappingURL=commonHelpers.js.map
