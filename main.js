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
      if (n >= code.length) {
        window.clearInterval(id)
        fn && fn.call()
      }
    }, 100)
  }

  let code = `
  `
  writeCode('', '1234512345')
}.call()