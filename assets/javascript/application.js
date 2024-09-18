console.log('ok');

let background = document.getElementById('background')
    aboutgit_title = document.getElementById('aboutgit-title')
    aboutgit_logo = document.getElementById('aboutgit-logo')
    aboutgit_desc = document.getElementById('aboutgit-desc')
    repo_title = document.getElementById('repo-title')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    background.style.top = value * 0.75 + 'px';
    aboutgit_logo.style.bottom = value * 1.75 + 'px';
    aboutgit_title.style.bottom = value * 1.5 + 'px';
    aboutgit_desc.style.left = value * 1.25 + 'px';
})

document.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.animated');
  
    elements.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add('show');
      }
    });
  });
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }