// ─── FOOTER YEAR ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  const yr = document.getElementById('footerYear');
  if (yr) yr.textContent = new Date().getFullYear();
});

// ─── MOBILE MENU ────────────────────────────────────────────
function toggleMobileMenu() {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.toggle('open');
}
function closeMobileMenu() {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.remove('open');
}

// ─── PROGRAMME ENQUIRY FORM ─────────────────────────────────
function showEnquiryForm(programme) {
  const sec = document.getElementById('enquiryFormSection');
  if (!sec) return;
  sec.style.display = 'block';
  const sel = document.getElementById('pProgramme');
  if (sel) sel.value = programme;
  sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function hideEnquiryForm() {
  const sec = document.getElementById('enquiryFormSection');
  if (sec) sec.style.display = 'none';
}
function submitProgrammeForm() {
  const name  = document.getElementById('pFullName')?.value.trim();
  const email = document.getElementById('pEmail')?.value.trim();
  const prog  = document.getElementById('pProgramme')?.value;
  if (!name || !email || !prog) {
    alert('Please fill in your name, email, and select a programme.');
    return;
  }
  const form    = document.getElementById('programmeFormContent');
  const success = document.getElementById('programmeFormSuccess');
  if (form)    form.style.display    = 'none';
  if (success) success.style.display = 'block';
}

// ─── GET INVOLVED FORM ──────────────────────────────────────
function setInvolveType(type) {
  const sel = document.getElementById('involveType');
  if (sel) sel.value = type;
  const target = document.getElementById('involveForm');
  if (target) target.scrollIntoView({ behavior: 'smooth' });
}
function submitInvolveForm() {
  const name  = document.getElementById('iName')?.value.trim();
  const email = document.getElementById('iEmail')?.value.trim();
  const type  = document.getElementById('involveType')?.value;
  if (!name || !email || !type) {
    alert('Please fill in your name, email, and select an enquiry type.');
    return;
  }
  const form    = document.getElementById('involveFormContent');
  const success = document.getElementById('involveFormSuccess');
  if (form)    form.style.display    = 'none';
  if (success) success.style.display = 'block';
}

// ─── CONTACT FORM ────────────────────────────────────────────
function submitContactForm() {
  const name  = document.getElementById('cName')?.value.trim();
  const email = document.getElementById('cEmail')?.value.trim();
  const subj  = document.getElementById('cSubject')?.value.trim();
  const msg   = document.getElementById('cMessage')?.value.trim();
  if (!name || !email || !subj || !msg) {
    alert('Please fill in all required fields.');
    return;
  }
  const form    = document.getElementById('contactFormContent');
  const success = document.getElementById('contactFormSuccess');
  if (form)    form.style.display    = 'none';
  if (success) success.style.display = 'block';
}

// ─── DONATE PAGE ─────────────────────────────────────────────
function setDonationType(type, btn) {
  document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}
function setAmount(val, btn) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const custom = document.getElementById('customAmount');
  if (custom) custom.value = '';
}

// ─── EVENTS MAILING LIST ─────────────────────────────────────
function joinMailingList() {
  const email   = document.getElementById('eventEmail')?.value.trim();
  const success = document.getElementById('eventMailSuccess');
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  if (success) success.style.display = 'block';
  const input = document.getElementById('eventEmail');
  if (input) input.value = '';
}
