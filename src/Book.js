

let link1 = "https://www.livelib.ru/book/1001597853-prints-gosplana-viktor-pelevin";
let link2 = "https://otzovik.com/reviews/kniga_princ_gosplana-viktor_pelevin/";
let rec1 = '"Лучшая рецензия на книгу"';
let rec2 = 'Книга "Принц Госплана" - Виктор Пелевин - отзывы';
function Book() {
  return (
    <div>
        <h1>Принц Госплана</h1>
      <h2>Ви́ктор Оле́гович Пеле́вин</h2>
      <h3>Повесть</h3>
      <h4>48 странц</h4>
      <div>
        <p>Книга, с которой стоит начать знакомство с Пелевиным.</p>
        <p><a href= {link1}>{rec1}</a></p>
  <p><a href={link2}>{rec2}</a></p>
      </div>
    </div>
  );
}

export default Book;
