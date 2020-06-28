!function () {
  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    console.log(styleTag);
    let n = 0
    let id = setInterval(() => {
      n += 1
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      // element.scrollTop为元素滚动条内的顶部隐藏部分的高度卍；
      // element.scrollHeight元素滚动条内的内容高度卍；
      // console.log(container.scrollTop-container.scrollHeight);
      container.scrollTop = container.scrollHeight
      if (n >= code.length) {
        window.clearInterval(id)
        fn && fn.call()
      }
    }, 10)
  }

  let code = `.preview {
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  width: 100%;
  height: 165px;
  /*border: 1px solid red;*/
  position: relative;
}
.nose {
  height: 0;
  width: 0;
  border-width: 12px;
  border-radius: 10px;
  border-style: solid;
  border-color: black transparent transparent;
  position: absolute;
  left: 50%;
  top: 28px;
  margin-left: -12px;
}
.eye {
  width: 49px;
  height: 49px;
  background: #2e2e2e;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000000;
}
.eye::before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #000000;
  background: white;
  position: absolute;
  left: 6px;
  top: -1px;
}
.eye.left {
  /**绝对定位和margin-right可以一起使用卍**/
  right: 50%;
  margin-right: 90px;
}
.eye.right {
  left: 50%;
  margin-left: 90px;
}
.face {
  width: 68px;
  height: 68px;
  border: 2px solid black;
  border-radius: 50%;
  background: #fc0d1c;
  position: absolute;
  top: 85px;
}
.face.left {
  right: 50%;
  margin-right: 116px;
}
.face.right {
  left: 50%;
  margin-left: 116px;
}
.upperLip {
  height: 20px;
  width: 80px;
  border: 3px solid black;
  position: absolute;
  top: 52px;
  background: #fde348;
}
.upperLip.left {
  right: 50%;
  border-bottom-left-radius: 40px 20px;
  border-top: none;
  border-right: none;
  transform: rotate(-22deg)
}
.upperLip.right {
  left: 50%;
  border-bottom-right-radius: 40px 20px;
  border-top: none;
  border-left: none;
  transform: rotate(22deg)
}
.lowerLip-wrapper {
  position: absolute;
  height: 125px;
  width: 300px;
  bottom: -17px;
  left: 50%;
  margin-left: -150px;
  /*z-index: -1;*/
  /*border: 1px solid red;*/
  overflow: hidden;
}
.lowerLip {
  height: 300px;
  width: 100px;
  background: #990513;
  border-radius: 50px/150px;
  border: 2px solid black;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -50px;
  overflow: hidden;
}
.lowerLip::after {
  content: '';
  position: absolute;
  bottom: -5px;
  width: 100px;
  height: 100px;
  background: #fc4a62;
  left: 50%;
  margin-left: -50px;
  border-radius: 50px;
} 
  `
  writeCode('', code)


  $('.actions').on('click','button',function (e) {
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    console.log(speed);
    $button.addClass('active')
      .siblings('.active').removeClass('active')
  })
}.call()
