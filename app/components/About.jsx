var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application I built for learning
        the React JS libraries. The tools I used include:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>-
          JavaScript library used.
        </li>
        <li>
          <a href="http://openweathermap.com">Open Weather Map</a>-
          I used Open Weater Map API to search for weather data by city name.
        </li>
        <li>
          <a href="http://foundation.zurb.com/">Foundation</a> -
          Responsive front-end framework I used.
        </li>
      </ul>
      <p>Fell free to download the source code
         <a href="https://github.com/fgravil/ReactWeather"> Here</a>.</p>
    </div>
  )
}

module.exports = About;
