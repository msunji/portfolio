function App() {
  return (
    <div className="App">
      <section className="max-w-2xl mt-32 px-8 mb-4 space-y-4">
        <h1 className="text-8xl font-extrabold">Hello</h1> 
        <p className="leading-7 text-4">Hey there, it's nice to meet you. I'm Marge Consunji. Over the last few years, I have been transitioning from economic research to design and frontend development work. I build things with React and Next.js, but am always open to exploring different technologies. When I'm not at my desk, you can find me baking, drawing, playing video games, or hanging out with my cats 🐱</p>
      </section>
      <section className="max-w-2xl mt-32 px-8 mb-4 space-y-4">
        <h2 className="text-4xl font-extrabold">Currently</h2> 
        <ul>
          <li><a href="https://github.com/msunji/puppeteer-dividends">Dividend News</a> - A web scraper built with Puppeteer and Node that collates the latest dividend announcements from Philippine Stock Exchange Edge (PSE Edge)</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
