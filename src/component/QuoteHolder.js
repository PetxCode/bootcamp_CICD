import React from "react";

const quote = [
  {
    proverb:
      " It is not of him that willth nor of him that runeth but of God who showeth MERCY ",
    author: " Gideon ",
    img: "/img/1.jpg",
  },
  {
    proverb:
      " When you are poor, you want more but when you get it all, they want you to fall",
    author: " Yusuf ",
    img: "/img/2.jpg",
  },
  {
    proverb:
      " The more you deep into wisdom you more denger you bring upon yourself. ",
    author: " Joshua ",
    img: "/img/3.jpg",
  },
  {
    proverb:
      " Whatever the main can conceived and beleive, the mind can Achieve",
    author: " Ola ",
    img: "/img/4.jpg",
  },
  {
    proverb: " Live and let Live",
    author: " Lekan ",
    img: "/img/5.jpg",
  },
  {
    proverb:
      " THere are two way to write error free Program, only the Thrird one works",
    author: " Big Sam ",
    img: "/img/6.jpg",
  },
  {
    proverb: "Alone you can do so little but together you can do much",
    author: " Osas ",
    img: "/img/7.jpg",
  },
  {
    proverb:
      "The day of Death is better than the day of Birth... for all man shall die",
    author: " Emmanuel ",
    img: "/img/8.jpg",
  },
  {
    proverb: " Never give up... Keep trying",
    author: " Sam ",
    img: "/img/9.jpg",
  },
];

function QuoteHolder() {
  const [counter, setCounter] = React.useState(1);

  return (
    <div>
      <center>
        <div>The Quote Holder</div>
        <div>{quote.length}</div>
      </center>
      <hr />
      <section
        onClick={() => {
          setCounter(counter + 1);
          console.log("I am click");
          console.log(counter);
        }}
      >
        <div
          style={{
            width: "100%",
            cursor: "pointer",
          }}
        >
          <h3>{quote[counter % quote.length].proverb}</h3>
          <p
            style={{
              // backgroundColor: "red",
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              // justifySelf: ""
            }}
          >
            <div>
              {" "}
              <img
                src={quote[counter % quote.length].img}
                alt={quote[counter % quote.length].author}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "80px",
                  objectFit: "cover",
                }}
              />
              <div> ...{quote[counter % quote.length].author}</div>
            </div>
          </p>
        </div>
      </section>
    </div>
  );
}

export default QuoteHolder;
