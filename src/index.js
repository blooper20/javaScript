const container = document.querySelector(".container");

const buttonEl = document.createElement("button");
buttonEl.textContent = "버튼"

container.append(buttonEl);
// console.log(container.outerHTML);

// h1 태그 삭제
// const h1El = document.getElementById("title");
// body 태그 얻기
// const bodyEl = document.querySelector("body");
// body 태그 아래부터 삭제 
// bodyEl.removeChild(h1El);

// body 태그 아래의 모든 요소 삭제 
// bodyEl.textContent = null;


const divEl = document.querySelector("div");

// divEl.removeChild(buttonEl);

buttonEl.addEventListener("click", function() {
    // body에서 h1 element 삭제
    const h1El = document.getElementById("title"); 
    const bodyEl = document.querySelector("body");
    if (h1El) { bodyEl.removeChild(h1El);
    }
    // container 글자 색 바꾸기
    container.style.color = "red"; 
});