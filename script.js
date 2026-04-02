function sendWhatsApp() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  if (!name || !phone) {
    alert("Fill in required fields");
    return;
  }

  const text = `Quote Request\nName: ${name}\nPhone: ${phone}\nDetails: ${message}`;
  const url = `https://wa.me/27719796245?text=${encodeURIComponent(text)}`;

  window.open(url, '_blank');
}


function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

/* CLOSE MENU AFTER CLICK (IMPORTANT) */
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("menu").classList.remove("active");
  });
});