const productImages = [
  'images/products/616604363_122183034314791656_8072991532708944759_n.jpg',
  'images/products/618246023_122183823104791656_163821244828408554_n.jpg',
  'images/products/619388812_122183823458791656_372268758908988140_n.jpg',
  'images/products/619545879_122183823440791656_1409382483673074344_n.jpg',
  'images/products/619695214_122183823374791656_1124015595925665139_n.jpg',
  'images/products/619962068_122183821910791656_6386890662815528713_n.jpg',
  'images/products/621186921_122183823386791656_2657466716697153489_n.jpg',
  'images/products/621608417_122183822990791656_4738374610801504087_n.jpg',
  'images/products/621684718_122183823086791656_1163572981582001473_n.jpg',
  'images/products/621786032_122183823164791656_6361506017646011964_n.jpg',
  'images/products/621823456_122183821088791656_1898439541651776005_n.jpg',
  'images/products/621855724_122183823530791656_109299416225928931_n.jpg',
  'images/products/622142628_122183823260791656_7156897908737998495_n.jpg',
  'images/products/622363561_122183823398791656_5363817624763657710_n.jpg',
  'images/products/622497980_122183823212791656_2699073604590749091_n.jpg',
  'images/products/623264940_122183822444791656_557994891282335915_n.jpg',
  'images/products/623270620_122183823542791656_2448456164556338113_n.jpg',
  'images/products/623298261_122183823338791656_1990516002243402408_n.jpg',
  'images/products/623426037_122183823188791656_5730143738020329251_n.jpg',
  'images/products/624168698_122183822420791656_7859995270511386821_n.jpg',
  'images/products/624267830_122183823200791656_8601320155952378311_n.jpg',
  'images/products/624455690_122183823044791656_3468801732432671305_n.jpg',
  'images/products/625140981_122183823350791656_5547906725988490450_n.jpg'
];
const customerImages = [
  'images/customers/670538399_122193084668791656_5573398095565293984_n.jpg',
  'images/customers/670856839_122193084692791656_9210900380784974013_n.jpg',
  'images/customers/671487743_122193084776791656_5906210302357984749_n.jpg',
  'images/customers/671633077_122193084710791656_396036614108718333_n.jpg',
  'images/customers/672017046_122193084764791656_1161386754803461610_n.jpg',
  'images/customers/672672609_122193084626791656_2912053099620431675_n.jpg',
  'images/customers/672679813_122193084746791656_5249854348818761085_n.jpg',
  'images/customers/676603349_122194187576791656_8131871004679794034_n.jpg',
  'images/customers/676799139_122194187792791656_2273765506721553376_n.jpg',
  'images/customers/676799139_122194187834791656_3072741071864628701_n.jpg',
  'images/customers/677712196_122194187810791656_6193169175878415343_n.jpg',
  'images/customers/677928011_122194187306791656_5018466924424029562_n.jpg',
  'images/customers/678337898_122194187378791656_2506422612817022766_n.jpg',
  'images/customers/678507259_122194187864791656_87277392974208178_n.jpg',
  'images/customers/678606087_122194187894791656_6106006972067108523_n.jpg',
  'images/customers/679393946_122194187660791656_2632494642089451413_n.jpg',
  'images/customers/679575811_122194187972791656_5991734164515837673_n.jpg',
  'images/customers/679660343_122194187912791656_595493248366656722_n.jpg',
  'images/customers/682485653_122194187942791656_2130576935816452377_n.jpg',
  'images/customers/693501765_122195961938791656_7663065964240788151_n.jpg',
  'images/customers/694635846_122195962610791656_1464573050111869232_n.jpg',
  'images/customers/694688769_122195962730791656_7354475553414589258_n.jpg',
  'images/customers/694729545_122195962280791656_4503346285038392130_n.jpg',
  'images/customers/694729545_122195962466791656_5692959885311865934_n.jpg',
  'images/customers/696438116_122195962670791656_7775530148378245510_n.jpg',
  'images/customers/696751804_122195962742791656_965795754984567239_n.jpg',
  'images/customers/696817614_122195961914791656_2044401818065367536_n.jpg',
  'images/customers/696870743_122195962298791656_6923711935129325155_n.jpg',
  'images/customers/698148851_122195962406791656_8442271072729285712_n.jpg',
  'images/customers/698371866_122195962478791656_6357122215227868244_n.jpg',
  'images/customers/698473525_122195962394791656_2880961165719455566_n.jpg',
  'images/customers/698606331_122195962754791656_3785786971782271385_n.jpg',
  'images/customers/698680078_122195961962791656_7303161029713471103_n.jpg',
  'images/customers/699142767_122195962622791656_4195124578040008160_n.jpg'
];
const products = productImages.map((image_url) => ({ image_url, name: 'Cafe de la Cruz product' }));
const posts = customerImages.map((image_url, index) => ({ image_url, customer_name: 'Friend of the cafe', caption: index % 2 ? 'Good coffee, good company.' : 'A little moment at Cruz.' }));

function renderProducts(products) {
  const target = document.querySelector('#featured-products, #full-products');
  if (!target) return;
  const visibleProducts = target.id === 'full-products' ? products : products.slice(0, 6);
  target.innerHTML = visibleProducts.map((product, index) => `
    <article class="product-card photo-trigger" data-photo="${product.image_url || productImages[index % productImages.length]}" data-photo-alt="${product.name}">
      <div class="product-image"><img src="${product.image_url || productImages[index % productImages.length]}" alt="${product.name}" loading="lazy"></div>
    </article>`).join('');
}

function renderWall(posts) {
  const target = document.querySelector('#customer-wall, #full-wall');
  if (!target) return;
  const visiblePosts = target.id === 'full-wall' ? posts : posts.slice(0, 5);
  target.innerHTML = visiblePosts.map((post, index) => `
    <a class="wall-item photo-trigger" href="#" data-photo="${post.image_url || customerImages[index % customerImages.length]}" data-photo-alt="${post.customer_name || 'Cafe de la Cruz customer'}">
      <img src="${post.image_url || customerImages[index % customerImages.length]}" alt="${post.customer_name || 'Cafe de la Cruz customer'}" loading="lazy">
      <span class="wall-caption">${post.caption || ['Slow afternoons ☕', 'A table for good company', 'Made a little memory here', 'The usual, please'][index % 4]}</span>
    </a>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  menuToggle?.addEventListener('click', () => nav.classList.toggle('is-open'));
  renderProducts(products);
  renderWall(posts);

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close photo viewer">×</button>
    <button class="lightbox-arrow lightbox-prev" type="button" aria-label="Previous photo">‹</button>
    <figure class="lightbox-figure"><img class="lightbox-image" alt=""><figcaption class="lightbox-count"></figcaption></figure>
    <button class="lightbox-arrow lightbox-next" type="button" aria-label="Next photo">›</button>`;
  document.body.appendChild(lightbox);

  const photoTriggers = [...document.querySelectorAll('.photo-trigger')];
  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const lightboxCount = lightbox.querySelector('.lightbox-count');
  let activePhoto = 0;

  const showPhoto = (index) => {
    activePhoto = (index + photoTriggers.length) % photoTriggers.length;
    const trigger = photoTriggers[activePhoto];
    lightboxImage.src = trigger.dataset.photo;
    lightboxImage.alt = trigger.dataset.photoAlt || 'Cafe de la Cruz photo';
    lightboxCount.textContent = `${activePhoto + 1} / ${photoTriggers.length}`;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  };
  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    lightboxImage.src = '';
  };

  photoTriggers.forEach((trigger, index) => trigger.addEventListener('click', (event) => {
    event.preventDefault();
    showPhoto(index);
  }));
  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showPhoto(activePhoto - 1));
  lightbox.querySelector('.lightbox-next').addEventListener('click', () => showPhoto(activePhoto + 1));
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') showPhoto(activePhoto - 1);
    if (event.key === 'ArrowRight') showPhoto(activePhoto + 1);
  });
});
