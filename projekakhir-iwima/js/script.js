// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// modal box produk
// siomay Box
const itemDetailsiomay = document.querySelector('#item-detail-siomay');
const itemDetailButtonssiomay = document.querySelectorAll('.item-detail-siomaya');

itemDetailButtonssiomay.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailsiomay.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close siomay
document.querySelector('.siomay .close-icon').onclick = (e) => {
  itemDetailsiomay.style.display = 'none';
  e.preventDefault();
};

// klik di luar siomay
window.onclick = (e) => {
  if (e.target === itemDetailsiomay) {
    itemDetailsiomay.style.display = 'none';
  }
};


// wonton Box
const itemDetailwonton = document.querySelector('#item-detail-wonton');
const itemDetailButtonswonton = document.querySelectorAll('.item-detail-wontona');

itemDetailButtonswonton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailwonton.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close wonton
document.querySelector('.wonton .close-icon').onclick = (e) => {
  itemDetailwonton.style.display = 'none';
  e.preventDefault();
};

// klik di luar wonton
window.onclick = (e) => {
  if (e.target === itemDetailwonton) {
    itemDetailwonton.style.display = 'none';
  }
};
// baozi Box
const itemDetailbaozi = document.querySelector('#item-detail-baozi');
const itemDetailButtonsbaozi = document.querySelectorAll('.item-detail-baozia');

itemDetailButtonsbaozi.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailbaozi.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close baozi
document.querySelector('.baozi .close-icon').onclick = (e) => {
  itemDetailbaozi.style.display = 'none';
  e.preventDefault();
};

// klik di luar baozi
window.onclick = (e) => {
  if (e.target === itemDetailbaozi) {
    itemDetailbaozi.style.display = 'none';
  }
};

// cheongi Box
const itemDetailcheong = document.querySelector('#item-detail-cheong');
const itemDetailButtonscheong = document.querySelectorAll('.item-detail-cheonga');

itemDetailButtonscheong.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailcheong.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close cheong
document.querySelector('.cheong .close-icon').onclick = (e) => {
  itemDetailcheong.style.display = 'none';
  e.preventDefault();
};

// klik di luar cheong
window.onclick = (e) => {
  if (e.target === itemDetailcheong) {
    itemDetailcheong.style.display = 'none';
  }
};

// fengzhua Box
const itemDetailfengzhua = document.querySelector('#item-detail-fengzhua');
const itemDetailButtonsfengzhua = document.querySelectorAll('.item-detail-fengzhuaa');

itemDetailButtonsfengzhua.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailfengzhua.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close fengzhua
document.querySelector('.fengzhua .close-icon').onclick = (e) => {
  itemDetailfengzhua.style.display = 'none';
  e.preventDefault();
};

// klik di luar fengzhua
window.onclick = (e) => {
  if (e.target === itemDetailfengzhua) {
    itemDetailfengzhua.style.display = 'none';
  }
};

// sushi Box
const itemDetailsushi = document.querySelector('#item-detail-sushi');
const itemDetailButtonssushi = document.querySelectorAll('.item-detail-sushia');

itemDetailButtonssushi.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailsushi.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close sushi
document.querySelector('.sushi .close-icon').onclick = (e) => {
  itemDetailsushi.style.display = 'none';
  e.preventDefault();
};

// klik di luar sushi
window.onclick = (e) => {
  if (e.target === itemDetailsushi) {
    itemDetailsushi.style.display = 'none';
  }
};