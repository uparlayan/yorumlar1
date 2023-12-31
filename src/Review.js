import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

// 'Review' bileşeni, inceleme içeriğini ve kullanıcı etkileşimlerini gösteren bir React bileşenidir.
function Review() {
  // 'useState' hook'u kullanılarak, inceleme indeksini ve setIndex fonksiyonunu oluştur.
  const [index, setIndex] = useState(0);

  // people dizisinden, şu anki indekse sahip kişinin özelliklerini çek.
  const { name, job, image, text } = people[index];

  // Verilen bir sayının geçerli bir indeks olup olmadığını kontrol eden fonksiyon.
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  // Bir sonraki kişiyi gösteren fonksiyon.
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  // Bir önceki kişiyi gösteren fonksiyon.
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  // Rastgele bir kişiyi gösteren fonksiyon.
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  // JSX ile oluşturulan bileşenin dönüş değeri.
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          {/* Alıntı simgesi için 'FaQuoteRight' ikonu. */}
          <FaQuoteRight />
        </span>
      </div>
      {/* Kişinin adını gösteren başlık. */}
      <h4 className="author">{name}</h4>
      {/* Kişinin mesleğini gösteren paragraf. */}
      <p className="job">{job}</p>
      {/* Kişinin incelemesini gösteren paragraf. */}
      <p className="info">{text}</p>
      {/* Önceki, sonraki ve rastgele kişiyi gösteren butonlar. */}
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          {/* Önceki kişiyi gösteren ikon. */}
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          {/* Sonraki kişiyi gösteren ikon. */}
          <FaChevronRight />
        </button>
      </div>
      {/* Rastgele kişiyi gösteren buton. */}
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
}

// 'Review' bileşenini dışa aktar.
export default Review;
