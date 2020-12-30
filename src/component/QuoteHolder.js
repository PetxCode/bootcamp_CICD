import React from "react";

const quote = [
  {
    proverb:
      " It is not of him that willth nor of him that runeth but of God who showeth MERCY ",
    author: " Gideon ",
  },
  {
    proverb:
      " When you are poor, you want more but when you get it all, they want you to fall",
    author: " Yusuf ",
  },
  {
    proverb:
      " The more you deep into wisdom you more denger you bring upon yourself. ",
    author: " Joshua ",
  },
  {
    proverb:
      " Whatever the main can conceived and beleive, the mind can Achieve",
    author: " Ola ",
  },
  {
    proverb: " Live and let Live",
    author: " Lekan ",
  },
  {
    proverb:
      " THere are two way to write error free Program, only the Thrird one works",
    author: " Big Sam ",
  },
  {
    proverb: "Alone you can do so little but together you can do much",
    author: " Osas ",
  },
  {
    proverb:
      "The day of Death is better than the day of Birth... for all man shall die",
    author: " Emmanuel ",
  },
  {
    proverb: " Never give up... Keep trying",
    author: " Sam ",
  },
  {
    proverb: " Never give up... Keep trying",
    author: " Sam ",
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
            ...{quote[counter % quote.length].author}
          </p>
        </div>
      </section>
    </div>
  );
}

export default QuoteHolder;
