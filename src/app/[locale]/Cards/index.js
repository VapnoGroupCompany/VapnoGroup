"use client"
import styles from './Cards.module.css';
function Cards({
                     prtitle1,
                     prtitle2,
                     prtitle3,
                     prtitle4,
                     prtitle5,
                     prtitle6,
                     prtitle7,
                     prtitle8,
                     prtext1,
                     prtext2,
                     prtext3,
                     prtext4,
                     prtext5,
                     prtext6,
                     prtext7,
                     prtext8
}) {
  return (
    <>
     <div className={styles.cards}>
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront1}>
          <p className={styles.clickme}>click me</p>
        </div>
        <div className={styles.cardBack1}>
          <div className={styles.text}>
          <h2>{prtitle1}</h2>
          <p>{prtext1}</p>
          </div>
        </div>
      </div>
    </div>

    {/* <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront2}>
          <p></p>
        </div>
        <div className={styles.cardBack2}>
          <div className={styles.text}>
          <h2>Back Content</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nulla iste incidunt nihil dicta aspernatur, quod unde magni cum possimus, id, dolore nostrum quisquam totam nesciunt nobis consequuntur voluptatibus? Expedita!</p>
          </div>
        </div>
      </div>
    </div> */}

     <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront3}>
        <p className={styles.clickme}>click me</p>
        </div>
        <div className={styles.cardBack3}>
          <div className={styles.text}>
          <h2>{prtitle2}</h2>
          <p>{prtext2}</p>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront5}>
        <p className={styles.clickme}>click me</p>
        </div>
        <div className={styles.cardBack5}>
          <div className={styles.text}>
          <h2>{prtitle3}</h2>
          <p>{prtext3}</p>
          </div>
        </div>
      </div>
    </div>


    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront6}>
        <p className={styles.clickme}>click me</p>
        </div>
        <div className={styles.cardBack6}>
          <div className={styles.text}>
          <h2>{prtitle4}</h2>
          <p>{prtext4}</p>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront7}>
        <p className={styles.clickme}>click me</p>
        </div>
        <div className={styles.cardBack7}>
          <div className={styles.text}>
          <h2>{prtitle5}</h2>
          <p>{prtext5}</p>
          </div>
        </div>
      </div>
    </div>
   

    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront8}>
        <p className={styles.clickme}>click me</p>
        </div>
        <div className={styles.cardBack8}>
          <div className={styles.text}>
          <h2>{prtitle6}</h2>
          <p>{prtext6}</p>
          </div>
        </div>
      </div>
    </div>


    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront9}>
        <p className={styles.clickme}>click me</p>
        </div>
        <div className={styles.cardBack9}>
          <div className={styles.text}>
          <h2>{prtitle7}</h2>
          <p>{prtext7}</p>
          </div>
        </div>
      </div>
      
    </div>
   

    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront4}>
        <p className={styles.clickme}>click me</p>
        </div>
        <div className={styles.cardBack4}>
          <div className={styles.text}>
          <h2>{prtitle8}</h2>
          <p>{prtext8}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
export default  Cards;