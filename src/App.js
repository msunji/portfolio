function App() {
  return (
    <div className="App">
      <section className="max-w-2xl mt-32 px-8 mb-4 space-y-4">
        <h1 className="text-8xl font-extrabold">Hello</h1> 
        <p className="leading-7 text-4">Hey there, it's nice to meet you. I'm Marge Consunji. Over the last few years, I have been transitioning from economic research to design and frontend development work. I build things with React and Next.js, but am always open to exploring different technologies. When I'm not at my desk, you can find me baking, drawing, playing video games, or hanging out with my cats 🐱</p>
      </section>
      <section className="max-w-2xl mt-32 px-8 mb-4 space-y-4">
        <h2 className="text-4xl font-extrabold">Projects</h2> 
        <ul className="space-y-4">
          <li><a href="https://github.com/msunji/dividend-news">Dividend News</a> - A web scraper built with Cheerio, Node.js and Firebase functions that routinely checks Philippine Stock Market (PSE) Edge for dividend announcements. Daily announcements are then compiled and emailed to a list of recipients through Sendgrid API.</li>
          <li><a href="https://github.com/msunji/spring-publications-tw">Spring Publications TW</a> - A catalogue and ordering platform (doesn't take payments at the moment) for Spring Book's Taiwan distributor. Uses Airtable as an easy to use, lightweight database, as well as Next.js and Tailwind CSS.</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
