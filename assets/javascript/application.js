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