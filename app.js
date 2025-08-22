$(document).ready(function() {
  // ---------- Data: 10 dishes ----------
  const DISHES = [
    {
      id: "nasiKandar", title: "Nasi Kandar ",
      img: "Images/nasi-kandar.jpg",
      intro: "Penang Nasi Kandar is a quintessential Malaysian dish that has earned a reputation for its rich and flavorful combinations. Originating from the island of Penang, this dish is a unique mix of rice, usually served with a variety of curries, side dishes, and fried delights. The name NASI KANDAR refers to the traditional way of balancing a basket of rice and curry on one’s shoulder (kandar). Today, it's enjoyed as a popular street food, with each stall offering a wide range of choices, from spicy chicken curry to succulent beef rendang, making it a must-try experience for anyone visiting Penang.",
      impression: "Line Clear Nasi Kandar in Georgetown is an iconic spot that has become synonymous with the dish itself. Situated in the heart of Georgetown, it draws crowds from both locals and tourists eager to experience its delicious offering. The long-standing stall has a reputation for its generous portions and a wide array of mouth-watering curries that are packed with flavor. The atmosphere is casual, with patrons queuing up for a taste of the rich, flavorful rice and the famed curries that are steeped in tradition. Known for its long history and bustling vibe, Line Clear Nasi Kandar has earned its place as one of the best spots in Georgetown for a true Penang food experience.",
      address: "Line Clear Nasi Kandar, 177, Lebuh Campbell, 10100 George Town, Pulau Pinang",
      mapQ: "Line Clear Nasi Kandar, Lebuh Campbell, George Town Penang"
    },
    {
      id: "asamLaksa", title: "Asam Laksa",
      img: "Images/asam-laksa.jpg",
      intro: "Penang Asam Laksa is a quintessential dish from the island's diverse food culture, known for its unique blend of sour, spicy, and savory flavors. This noodle dish features a tangy tamarind-based broth, paired with mackerel fish, shredded vegetables, and a medley of herbs and spices. Served with thick rice noodles, it is typically garnished with fresh cucumber, mint leaves, onions, and a dollop of spicy chili paste, making it a refreshing yet hearty meal. Asam Laksa is often considered one of the most iconic dishes in Penang, representing the harmonious fusion of local ingredients and culinary techniques.",
      impression:"The Asam Laksa from Air Itam is a highly regarded version of this beloved dish. Air Itam, located in the heart of Penang, is home to one of the most famous Asam Laksa stalls at the Kek Lok Si temple area. The laksa here is particularly renowned for its rich and aromatic broth, which strikes the perfect balance between sourness from the tamarind and the depth of flavors from the mackerel and herbs. The texture of the rice noodles is perfect, with a slight chewiness that complements the robust soup. The stall is often bustling with locals and tourists alike, highlighting its reputation as a must-try spot for this Penang delicacy. Many visitors have praised the freshness of the ingredients and the depth of flavor that truly captures the essence of Penang's culinary heritage.",
      address: "Ayer Itam Laksa, Jalan Pasar, 11500 Air Itam, Pulau Pinang",
      mapQ: "Ayer Itam Laksa, Jalan Pasar, Air Itam Penang"
    },
    {
      id: "meeRebusUtara", title: "Mee Rebus Utara ",
      img: "Images/mee-rebus-utara.jpg",
      intro: "Mee Rebus Utara is a popular noodle dish from Northern Malaysia, particularly cherished in Penang and its surrounding regions. It is a variation of the traditional mee rebus, featuring yellow noodles served in a savory, slightly sweet, and spicy gravy made from boiled potatoes, tamarind, and a mix of aromatic spices. The gravy is thickened and flavored with ingredients like dried shrimp, prawn stock, and a hint of sweetness from sugar or palm sugar. Often garnished with a hard-boiled egg, fried tofu, bean sprouts, and sometimes a dash of lime juice, Mee Rebus Utara offers a unique combination of textures and flavors that make it a comforting and filling meal.",
      impression:"Mee Rebus at Haji Ramli is highly regarded for its authentic taste and consistently high quality. The dish stands out due to the thick, flavorful gravy that perfectly coats the yellow noodles. The combination of tamarind and prawn stock provides a tangy and umami-rich broth that balances well with the sweetness of the potatoes. The toppings, like tofu and bean sprouts, add a delightful crunch, while the hard-boiled egg enhances the overall richness of the dish. Haji Ramli’s Mee Rebus has earned its reputation for delivering a satisfying and delicious rendition of this Northern Malaysian favorite.",
      address: "Mee Rebus & Rojak Haji Ramli, Jalan Sultan Badlishah, 05000 Alor Setar, Kedah",
      mapQ: "Mee Rebus Haji Ramli, Jalan Sultan Badlishah, Alor Setar"
    },
    {
      id: "nasiLemuni", title: "Nasi Lemuni",
      img: "Images/nasi-lemuni.jpg",
      intro: "Nasi Lemuni is a traditional dish from Kedah, a state in Northern Malaysia. It is known for its distinct and earthy flavor, thanks to the key ingredient: the lemuni leaf. The leaves are steamed with rice, infusing it with a natural herbal aroma that gives the dish a unique and refreshing taste. Often served with a variety of side dishes, including fried chicken, sambal (chili paste), pickles, and egg, Nasi Lemuni offers a balance of flavors and textures. This dish is cherished not only for its taste but also for its purported health benefits, as lemuni leaves are believed to have medicinal properties.",
      impression:"Nasi Lemuni at Taman Wira, Alor Setar, is a must-try for anyone visiting Kedah. The dish here is expertly prepared, with the rice infused perfectly with the fragrant lemuni leaves, offering a unique herbal aroma that sets it apart from other nasi dishes. The rice is served hot and complemented by a variety of tasty sides that enhance the overall experience. The fried chicken served alongside is crispy on the outside and tender on the inside, pairing well with the rice. The sambal adds a spicy kick that balances the herbal flavor of the rice, making each bite satisfying. Taman Wira's Nasi Lemuni is known for its authenticity, and locals and visitors alike often rave about the freshness and quality of the ingredients, making it a popular spot for this Kedah specialty.",
      address: "Gerai Nasi Lemuni Taman Wira, Jalan Kuala Kedah, 05400 Alor Setar, Kedah",
      mapQ: "Nasi Lemuni Taman Wira, Alor Setar"
    },
    {
      id: "gulaiTemenung", title: "Gulai Ikan Temenung ",
      img: "Images/gulai-temenung.jpg",
      intro: "Gulai Ikan Temenung is a beloved dish in the northern states of Malaysia, particularly in Perlis, where it is a local specialty. The dish features temenung (mackerel), which is simmered in a rich, flavorful gulai (curry) made with a combination of fresh herbs, spices, and coconut milk. The curry is typically aromatic, with a perfect balance of tanginess, spiciness, and creaminess, thanks to ingredients like turmeric, lemongrass, ginger, and chilies. The mackerel fish is tender and absorbs the deep, fragrant broth, creating a hearty and satisfying dish. Served with steamed rice, Gulai Ikan Temenung is a favorite for its bold and comforting flavors, often enjoyed as a main dish during lunch or dinner.",
      impression:"Anjung Keli, located in Kuala Perlis, is a renowned eatery where visitors can experience some of the best Gulai Ikan Temenung in the region. The restaurant is famous for its fresh, high-quality seafood, and the Gulai Ikan Temenung served here is exceptional. The fish is cooked to perfection in a rich, flavorful curry, and the spices are well-balanced, giving the dish a deliciously fragrant and savory profile. The restaurant itself offers a relaxing, coastal atmosphere with beautiful views of the sea, making it an ideal spot for enjoying a traditional Malaysian meal. Locals and tourists alike flock to Anjung Keli for its authentic offerings, and the Gulai Ikan Temenung is always a standout, drawing praise for its delicious and satisfying flavors. If you're in Kuala Perlis, it's a must-try experience for anyone looking to indulge in the best of northern Malaysian cuisine.",
      address: "Restoran Anjung Keli, Jalan Kuala Perlis, 02000 Kuala Perlis, Perlis",
      mapQ: "Anjung Keli, Kuala Perlis"
    },
    {
      id: "cendol", title: "Cendol",
      img: "Images/cendol.jpeg",
      intro: "SPenang Cendol is a refreshing and iconic Malaysian dessert, perfect for cooling off on a hot day. It consists of shaved ice topped with green rice flour jelly (cendol), which is often served with sweetened coconut milk, palm sugar syrup, and a sprinkle of red beans or corn. The cendol itself is made by mixing the rice flour with pandan leaves, giving it its distinctive green color and smooth texture. The rich, creamy coconut milk and the sweetness of the palm sugar syrup balance perfectly with the icy crunch, creating a dessert that's both refreshing and indulgent. While Cendol is enjoyed throughout Malaysia, Penang's version is particularly famous for its unique blend of flavors, making it a must-try for visitors..",
      impression:"Penang Road Famous Teochew Chendol is one of the most famous spots in Penang for enjoying a bowl of Cendol. This legendary stall, often crowded with both locals and tourists, is known for serving some of the best Cendol on the island. The dessert here is served with a generous amount of shaved ice, rich coconut milk, and a perfect drizzle of palm sugar syrup. The green cendol strands are soft and chewy, and the combination of ingredients creates a smooth, sweet, and creamy treat. The stall also offers the option to add red beans, providing an extra layer of texture and flavor. The atmosphere at Penang Road Famous Teochew Chendol is lively, and despite the crowds, it remains a popular destination for anyone craving an authentic Penang Cendol experience. Its reputation for quality and consistency has made it a staple in Penang’s food scene.",
      address: "Lot 170-04-43A, 4th Floor, Gurney Plaza, 170, Gurney Dr, Pulau Tikus, 10250 George Town, Penang, Malaysia.",
      mapQ: "Penang Road Famous Teochew Chendol"
    },
    {
      id: "pasembur", title: "Pasembur",
      img: "Images/pasembur.jpg",
      intro: "Penang Pasembur is a popular local dish that is often referred to as Penang Indian salad.It consists of a mixture of fresh vegetables, shredded cucumber, bean sprouts, potatoes, tofu, and deep-fried items such as prawn fritters, squid, or fish cakes. What sets Pasembur apart is the sweet and spicy peanut sauce that is poured generously over the ingredients. This sauce is made from ground peanuts, chilies, tamarind, and sugar, creating a rich, creamy, and flavorful dressing that binds all the ingredients together. Pasembur is typically served cold and is often enjoyed as a light meal or snack, particularly in the hot, tropical weather of Penang. The dish is both savory and slightly tangy, with the crunchy texture of the vegetables and the satisfying crunch of fried ingredients making each bite a delightful experience.",
      impression:"Gurney Drive Hawker Centre is one of the best places to try Penang Pasembur, and the Pasembur served here is highly regarded for its freshness and flavor. The stall is often bustling with both locals and tourists, and the Pasembur is served in a generous portion with an array of fresh and fried ingredients. The peanut sauce at Gurney Drive is rich, creamy, and well-balanced, providing the perfect accompaniment to the crispy fried fritters and the crunchy vegetables. The dish is a feast for the senses, with an explosion of textures and flavors in every bite. The lively atmosphere of the hawker center adds to the experience, making it a perfect spot to savor authentic Penang Pasembur while enjoying the sights and sounds of the city.",
      address: "Gurney Drive Hawker Centre, Persiaran Gurney, 10250 George Town, Penang",
      mapQ: "Gurney Drive Hawker Centre Penang"
    },
    {
      id: "ckt", title: "Char Koay Teow ",
      img: "Images/char-koay-teow.jpg",
      intro: "Penang Char Koay Teow is one of the most beloved and iconic street food dishes in Malaysia, particularly in Penang. This flavorful stir-fried noodle dish features flat rice noodles (koay teow) that are wok-fried with a combination of ingredients such as prawns, Chinese sausages, eggs, bean sprouts, and chives. The dish is cooked in a sizzling hot wok over high heat, allowing the noodles to char slightly, giving it a smoky and savory flavor known as 'WOK HEI'. The addition of soy sauce and a hint of chili brings a perfect balance of salty, spicy, and umami flavors. Often, it is served with a side of lime to add a zesty kick. Penang Char Koay Teow stands out for its rich, robust flavor and is considered a must-try for anyone visiting the island.",
      impression:"Restoran Kafe Heng Huat is known for serving one of the best Char Koay Teow in Penang, and it has garnered a loyal following of both locals and tourists. The Char Koay Teow here is cooked to perfection with a perfect balance of smoky 'wok hei', tender prawns, and crispy Chinese sausage. The noodles are fried with just the right amount of soy sauce, giving them a deep, savory flavor without being overly greasy. The inclusion of crunchy bean sprouts and chives adds texture and freshness to the dish. What sets Kafe Heng Huat apart is its consistently high-quality ingredients and the skillful wok-frying that brings out the dish’s full flavor profile. The stall’s vibrant and busy atmosphere adds to the experience, making it a must-visit for anyone craving an authentic, delicious plate of Penang Char Koay Teow.",
      address: "Restoran Kafe Heng Huat, 108, Lorong Selamat, 10400 George Town, Penang",
      mapQ: "Kafe Heng Huat Lorong Selamat Penang"
    },
    {
      id: "harummanis", title: "Mempelan Harum Manis",
      img: "Images/harum-manis.png",
      intro: "Mempelam Harum Manis is a type of mango that is renowned for its sweet, fragrant, and juicy flesh. This tropical fruit is grown primarily in Perlis, Malaysia, and is considered one of the best mango varieties in the country. The name 'Harum Manis' translates to 'fragrant and sweet', which perfectly describes its taste and aroma. The mango has a smooth, fibrous texture with a rich, honey-like sweetness that makes it perfect for eating fresh or using in a variety of dishes. Mempelam Harum Manis is in high demand during its peak season, typically from April to June, when the mangoes are at their freshest and most flavorful.",
      impression:"Warung Harumanis Hutan Temin, located in Mata Ayer, Perlis, is a popular spot where visitors can enjoy fresh Mempelam Harum Manis straight from the farm. The warung is known for its authentic, farm-to-table experience, offering a variety of Harumanis-based dishes, including fresh pulut Harumanis (sticky rice with mango) and jus Harumanis (Harumanis mango juice). The atmosphere of Warung Harumanis Hutan Temin is peaceful and scenic, with lush greenery and a farm setting that allows visitors to enjoy the mangoes in a relaxed, natural environment. The mangoes served here are exceptionally fresh, juicy, and aromatic, showcasing the true quality of Perlis’ Harumanis. Customers rave about the sweetness and texture of the mangoes, and the warung offers an excellent opportunity to experience this local delicacy in an authentic and tranquil setting. It's a must-visit for anyone wanting to indulge in the best of Harumanis.",
      address: "WARUNG HARUMANIS HUTAN TEMIN Kampung Hutan Temin, 02500 Mata Ayer, Perlis",
      mapQ: "Kampung Hutan Temin, 02500 Mata Ayer, Perlis"
    },
    {
      id: "meeketam", title: "Mee Ketam",
      img: "Images/mee-ketam.jpg",
      intro: "Mee Ketam Kedah is a traditional seafood noodle dish that originates from the northern state of Kedah. This dish features fresh crab (ketam), usually mud crab, served with egg noodles or yellow noodles in a rich, savory broth. The broth is often infused with aromatic herbs and spices, including ginger, garlic, lemongrass, and a hint of chili for an added kick. The crab is usually cooked in the broth until tender, allowing the sweet, succulent crab meat to infuse the soup with its flavors. The dish is typically garnished with coriander, spring onions, and sometimes fried shallots, creating a perfect balance of textures and flavors. Mee Ketam is a popular choice for seafood lovers and is often enjoyed as a hearty meal in Kedah, especially near coastal areas.",
      impression:"D.S.A Cafe Jeti Semeling in Kedah is known for serving one of the best versions of Mee Ketam in the region. The café offers a delightful experience where visitors can enjoy fresh, locally sourced crab in a rich and flavorful broth. The Mee Ketam here stands out for its aromatic and hearty broth, which perfectly complements the tender crab meat. The noodles are cooked just right, absorbing the delicious broth while maintaining a satisfying texture. The café's ambiance is casual and cozy, offering a welcoming spot for locals and tourists alike to enjoy a satisfying seafood meal. The D.S.A Cafe Jeti Semeling Mee Ketam is highly praised for its consistency and the quality of ingredients used, making it a go-to place for anyone looking to try authentic Kedah-style Mee Ketam. It’s a must-visit spot for seafood lovers visiting the area.",
      address: "KOMPLEKS PELANCONGAN JETI SEMELING MERBOK 08000 Semeling Kedah",
      mapQ: "D.S.A Cafe Jeti Semeling"
    }
  ];

  // ---------- Build cards ----------
  const cards = $('#cards');
  cards.html(DISHES.map(d => `
    <article class="card" data-id="${d.id}">
      <img class="thumb" src="${d.img}" alt="${d.title}" />
      <div class="meta">
        <h2 class="title">${d.title}</h2>
        <span class="loc">Tap to view</span>
      </div>
    </article>
  `).join(''));

  // ---------- Modal behavior ----------
  const modal = $('#modal');
  const closeBtn = $('#closeBtn');
  let currentDishId = null;

  // Open modal when a dish is clicked
  $('#cards').on('click', '.card', function() {
    openDish($(this).data('id'));
  });

  // Close modal when close button or outside is clicked
  closeBtn.on('click', () => modal.removeClass('open'));
  modal.on('click', e => { if (e.target === modal[0]) modal.removeClass('open'); });

  // Close modal when 'Escape' key is pressed
  $(document).on('keydown', e => { if (e.key === 'Escape') modal.removeClass('open'); });

  // Function to open the selected dish in modal
  function openDish(id) {
    const d = DISHES.find(x => x.id === id);
    if (!d) return;

    currentDishId = d.id;
    $('#dishTitle').text(d.title);
    $('#dishImg').attr('src', d.img).attr('alt', d.title);
    $('#intro').text(d.intro);
    $('#impression').text(d.impression);
    $('#address').html(`${d.address}<br><a class="inline" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.mapQ)}">Open in Google Maps ↗</a>`);
    $('#map').attr('src', `https://www.google.com/maps?q=${encodeURIComponent(d.mapQ)}&output=embed`);
    renderComments();
    modal.addClass('open');
  }

  // ---------- Comments (localStorage per dish) ----------
  const lsKey = id => `utara_comments_${id}`;

  // Render comments for a specific dish
  function renderComments() {
    const box = $('#commentList');
    const list = JSON.parse(localStorage.getItem(lsKey(currentDishId)) || '[]');
    if (list.length === 0) {
      box.html('<div class="comment"><em>No comments yet. Be the first!</em></div>');
      return;
    }
    box.html(list.map(c => `
      <div class="comment">
        <div>${escapeHTML(c.text)}</div>
        <small>— ${escapeHTML(c.name || 'Anonymous')} • ${new Date(c.ts).toLocaleString()}</small>
      </div>
    `).join(''));
  }

  // Post a new comment
  $('#postBtn').on('click', () => {
    const name = $('#nameInput').val().trim();
    const text = $('#textInput').val().trim();
    if (!text) { alert('Please write a comment.'); return; }
    const list = JSON.parse(localStorage.getItem(lsKey(currentDishId)) || '[]');
    list.unshift({ name, text, ts: Date.now() });
    localStorage.setItem(lsKey(currentDishId), JSON.stringify(list));
    $('#textInput').val('');
    renderComments();
  });

  // Escape HTML to prevent XSS attacks
  function escapeHTML(s) {
    return s.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
  }

  // Set the footer year
  $('#y').text(new Date().getFullYear());
});

