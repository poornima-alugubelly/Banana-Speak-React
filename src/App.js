import { useState } from "react";
import "./styles.css";

export default function App() {
  let serverURL = "https://api.funtranslations.com/translate/minion.json";
  let [text, setText] = useState("");
  let [meaning, setMeaning] = useState("");

  function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
  }

  function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time");
  }

  function textInputHandler(event) {
    let inputText = event.target.value;
    setText(inputText);
  }

  function buttonHandler() {
    fetch(getTranslationURL(text))
      .then((response) => response.json())
      .then((json) => {
        var translatedText = json.contents.translated;
        setMeaning(translatedText);
      })
      .catch(errorHandler);
  }
  return (
    <div className="App">
      <nav>
        <div>Banana Speak</div>
      </nav>
      <main>
        <textarea
          id="txt-input"
          placeholder="Put your message here which you want to convert to banana language"
          onChange={textInputHandler}
        ></textarea>

        <button id="btn-translate" onClick={buttonHandler}>
          Translate
        </button>

        <div className="output-txt">Translation will come here 👇</div>
        <div id="output" class="output-txt">{meaning}</div>
      </main>
      <footer>
        <div>about</div>
        <p>
          Are you a fan of minions? Did you know that the gibberish they say is
          an actual language. Use the translator to convert your text from
          English to Minion speak or Banana language.
        </p>
      </footer>
    </div>
  );
}
