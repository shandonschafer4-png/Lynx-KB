function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function filterNav(val) {
  const q = val.toLowerCase();
  document.querySelectorAll('.nav-link:not(.coming)').forEach(link => {
    link.style.display = link.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
  if (document.getElementById('searchInput')) {
    document.getElementById('searchInput').value = val;
  }
}

document.addEventListener('click', function(e) {
  const sb = document.getElementById('sidebar');
  const toggle = document.querySelector('.menu-toggle');
  if (sb && sb.classList.contains('open') && !sb.contains(e.target) && e.target !== toggle) {
    sb.classList.remove('open');
  }
});

document.querySelectorAll('.toc-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
