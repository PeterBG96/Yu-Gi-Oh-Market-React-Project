const Contact = () =>{
    return(
    <main className="mainContact">
        <section className="contactInfo">
            <article className="adressContacts">
                <article className="address">
                    <h1>Address:</h1>
                    <p>County: Bulgaria</p>
                    <p>Town: Stara Zagora</p>
                    <p>Street: Tsar Simeon Veliki #150</p>
                    <p>PK: 6000</p>
                </article>
                <article className="contacts"> 
                    <p>Telephone Number: +359 883 41 37 99</p>
                    <p>Email: YuGiOhMarket@abv.bg</p>
                </article>
            </article>
            <article className="workTime">
                <article>
                    <p >Work Time:</p>
                    <p>9:00 - 18:00 <span>Monday - Friday</span></p>
                    <p>10:00 - 17:00 <span>Saturday and Sunday</span></p>
                </article>
            </article>
        </section>
        <section className="write">
            <article>
                <form action="https://formsubmit.co/yugiohmarket@abv.bg" method="POST">
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_next" value="http://localhost:3000/contact/thankyou"/>
                    <h2>Write us</h2>
                    <article>
                        <input type="text" name="title" placeholder="Title"/>
                        <input type="email" name="email" placeholder="E-mail address"/>
                    </article>
                    <article>
                        <textarea type="text" name="description" placeholder="Message"></textarea>
                    </article>
                    <button type="submit" className="btnContactSent">Send</button>
                </form>
            </article>
        </section>
        <img src="/images/MokubaKaiba.png" className="mokuba"/>
        <img src="/images/BlackCloud.png" className="cloudMokuba"/>
        <p className="mokubaTalk">We are here to help you !!!</p>
        <article>
            <style>{"body { background-image: url('/images/town.jpg')  ; background-size: 120% ; overflow-x: hidden;}"}</style>
            <style>{"#site-content{padding-right:650px}"}</style>
        </article>
    </main>
    )
}

export default Contact