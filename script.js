/* =========================================================
   NOVA — Studio Web · ndërveprimet (stil Clay)
   ========================================================= */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var lenis = null;

  /* Viti */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* Scroll i butë (Lenis) */
  if (window.Lenis && !reduce) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true, touchMultiplier: 1.6 });
    (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(0);
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id && id.length > 1) {
          var tgt = document.querySelector(id);
          if (tgt) { e.preventDefault(); lenis.scrollTo(tgt); }
        }
      });
    });
  }

  /* Nav scrolled */
  var nav = document.querySelector('.nav');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 12); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Menu mobile */
  var burger = document.getElementById('burger');
  var overlay = document.getElementById('overlayNav');
  if (burger && overlay) {
    function toggleMenu(open) {
      overlay.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.style.overflow = open ? 'hidden' : '';
      if (lenis) { open ? lenis.stop() : lenis.start(); }
    }
    burger.addEventListener('click', function () { toggleMenu(burger.getAttribute('aria-expanded') !== 'true'); });
    overlay.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { toggleMenu(false); }); });
  }

  /* Kursori i personalizuar */
  var cursor = document.querySelector('.cursor');
  if (cursor && fine && !reduce) {
    var cx = window.innerWidth / 2, cy = window.innerHeight / 2, tx = cx, ty = cy;
    window.addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; });
    (function cloop() {
      cx += (tx - cx) * 0.22; cy += (ty - cy) * 0.22;
      cursor.style.transform = 'translate(' + cx + 'px,' + cy + 'px) translate(-50%,-50%)';
      requestAnimationFrame(cloop);
    })();
    document.querySelectorAll('a, button, summary, .work, .logo, input, textarea').forEach(function (el) {
      el.addEventListener('mouseenter', function () { cursor.classList.add('grow'); });
      el.addEventListener('mouseleave', function () { cursor.classList.remove('grow'); });
    });
  }

  /* Reveal */
  var reveals = document.querySelectorAll('.reveal, .reveal-img');
  if (reduce || !('IntersectionObserver' in window)) {
    /* përmbajtja mbetet e dukshme */
  } else {
    document.documentElement.classList.add('anim');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var idx = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
          el.style.transitionDelay = Math.min(idx * 65, 320) + 'ms';
          el.classList.add('is-visible');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* Forma e kontaktit */
  var EMAIL = 'vertexwebcraft4@gmail.com';
  /* TODO: merr një çelës falas te https://web3forms.com (fut email-in vertexwebcraft4@gmail.com)
     dhe vendose këtu. Pa çelës, forma hap programin e email-it (mailto) si më parë. */
  var WEB3FORMS_KEY = '';
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  function setNote(t, type) { if (note) { note.textContent = t; note.className = 'form__note ' + (type || ''); } }

  function sendViaMailto(name, email, business, message) {
    var subject = 'Kërkesë e re nga website-i — ' + name;
    var body = 'Emri: ' + name + '\nEmail: ' + email + '\nBiznesi: ' + (business || '—') + '\n\nMesazhi:\n' + message;
    window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    setNote('Po hapet email-i për dërgim. Faleminderit!', 'ok');
    form.reset();
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name.value.trim(), email = form.email.value.trim();
      var business = form.business.value.trim(), message = form.message.value.trim();
      if (!name || !email || !message) { setNote('Plotëso emrin, email-in dhe mesazhin.', 'err'); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setNote('Email-i nuk duket i saktë.', 'err'); return; }

      /* Pa çelës Web3Forms → kthehu te mailto */
      if (!WEB3FORMS_KEY) { sendViaMailto(name, email, business, message); return; }

      var btn = form.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;
      setNote('Po dërgohet…', '');

      var data = new FormData(form);
      data.append('access_key', WEB3FORMS_KEY);
      data.append('subject', 'Kërkesë e re nga website-i — ' + name);
      data.append('from_name', 'Vertex Webcraft');

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res && res.success) {
            setNote('Faleminderit! Mesazhi u dërgua — të kthehemi shpejt.', 'ok');
            form.reset();
          } else {
            setNote('Diçka shkoi keq. Provo përsëri ose na shkruaj në WhatsApp.', 'err');
          }
        })
        .catch(function () {
          setNote('Problem me lidhjen. Provo përsëri ose na shkruaj në WhatsApp.', 'err');
        })
        .finally(function () { if (btn) btn.disabled = false; });
    });
  }
})();
